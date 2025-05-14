import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('video') as File;
    const targetLanguage = formData.get('targetLanguage') as string;

    if (!file) {
      return NextResponse.json(
        { error: 'No video file provided' },
        { status: 400 }
      );
    }

    if (!targetLanguage) {
      return NextResponse.json(
        { error: 'Target language is required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('video/')) {
      return NextResponse.json(
        { error: 'File must be a video' },
        { status: 400 }
      );
    }

    // Generate a unique ID for this upload
    const uploadId = uuidv4();

    // Here you would typically:
    // 1. Save the file to your storage (e.g., S3, local storage)
    // 2. Start the translation process using the targetLanguage
    // 3. Store the results
    // For now, we'll just return a mock response

    return NextResponse.json({
      id: uploadId,
      status: 'processing',
      message: 'Upload successful, translation started',
      targetLanguage
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process upload' },
      { status: 500 }
    );
  }
} 