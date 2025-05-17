import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Translation ID is required" },
        { status: 400 },
      );
    }

    // Here you would typically:
    // 1. Fetch the translation results from your database
    // 2. Return the processed video and text
    // For now, we'll return mock data

    return NextResponse.json({
      id,
      status: "completed",
      videoUrl: "https://example.com/video.mp4",
      text: "This is a sample translation text.",
      originalLanguage: "en",
      translatedLanguage: "es",
      createdAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch translation" },
      { status: 500 },
    );
  }
}
