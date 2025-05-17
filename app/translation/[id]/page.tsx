"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function TranslationPage() {
  const [translation, setTranslation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await fetch(`/api/translation/${params.id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch translation");
        }
        const data = await response.json();

        setTranslation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranslation();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto" />
          <p className="mt-4 text-xl">Translating your video...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">Translation Failed</h1>
          <p className="text-gray-600">{error}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Translation Results</h1>

          <div className="space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full"
                src={translation?.videoUrl}
              >
                <track
                  default
                  kind="captions"
                  label="English"
                  src={translation?.captionsUrl}
                  srcLang="en"
                />
              </video>
            </div>

            {/* Translation Text */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Translated Text</h2>
              <div className="prose max-w-none">{translation?.text}</div>
            </div>

            {/* Download Options */}
            <div className="flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Download Translation
              </button>
              <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">
                Download Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
