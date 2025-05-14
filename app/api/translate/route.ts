import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import OpenAI from 'openai';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { videoUrl, targetLanguage } = await request.json();

    if (!videoUrl) {
      return NextResponse.json(
        { error: 'Video URL is required' },
        { status: 400 }
      );
    }

    if (!targetLanguage) {
      return NextResponse.json(
        { error: 'Target language is required' },
        { status: 400 }
      );
    }

    // Generate a unique ID for this translation
    const translationId = uuidv4();

    try {
      // 1. Download the video
      const response = await fetch(videoUrl);
      const videoBuffer = await response.arrayBuffer();
      
      // Create a temporary file
      const tempDir = os.tmpdir();
      const tempFilePath = path.join(tempDir, `${translationId}.mp4`);
      const videoArrayBuffer = new Uint8Array(videoBuffer);
      await fs.writeFile(tempFilePath, videoArrayBuffer);

      // Create a File object for OpenAI
      const file = new File(
        [videoArrayBuffer],
        `${translationId}.mp4`,
        { type: 'video/mp4' }
      );

      // 2. Transcribe the video using Whisper
      const transcription = await openai.audio.transcriptions.create({
        file,
        model: "whisper-1",
        response_format: "verbose_json",
        language: "auto",
      });

      // 3. Translate the transcription
      const translation = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are a professional translator. Translate the following text to ${targetLanguage}. Maintain the original meaning and context.`
          },
          {
            role: "user",
            content: transcription.text
          }
        ],
      });

      // 4. Clean up temporary file
      await fs.unlink(tempFilePath);

      // 5. Store the results (in a real application, you would save this to a database)
      const result = {
        id: translationId,
        status: 'completed',
        originalText: transcription.text,
        translatedText: translation.choices[0].message.content,
        targetLanguage,
        segments: transcription.segments,
        createdAt: new Date().toISOString(),
        completedAt: new Date().toISOString()
      };

      return NextResponse.json(result);
    } catch (error) {
      console.error('Processing error:', error);
      return NextResponse.json(
        { error: 'Failed to process video' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Failed to process translation' },
      { status: 500 }
    );
  }
} 