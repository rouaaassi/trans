"use client";

import { Suspense } from "react";
import { VideoPlayer } from "@/components/video-player";

export default function StreamsPage() {
  return (
    <div>
      <h1 className="text-2xl my-4">Streams</h1>

      <div className="mt-3">
        <Suspense fallback={<div>Loading...</div>}>
          <VideoPlayer />
        </Suspense>
      </div>
    </div>
  );
}
