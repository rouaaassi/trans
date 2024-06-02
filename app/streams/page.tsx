import { VideoPlayer } from "@/components/video-player";

export default function StreamsPage() {
  return (
    <div>
      <h1 className="text-2xl my-4">Streams</h1>

      <div className="mt-3">
        <VideoPlayer />
      </div>
    </div>
  );
}
