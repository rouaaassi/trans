"use client";

import { VideoPlayer } from "@/components/video-player";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useContext, useState } from "react";
import { WebsocketContext } from "../context/WebsocketContext";

export default function StreamsPage() {
  const socket = useContext(WebsocketContext);

  const [streamURL, setStreamURL] = useState("");

  const onChangeInput = (value: string) => {
    setStreamURL(value);
  };

  const onClickButton = () => {
    if (streamURL) {
      socket.emit("play", {
        streamURL,
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl my-4">Streams</h1>

      <Input
        isRequired
        label="Stream URL"
        className="max-w-xs"
        onValueChange={onChangeInput}
      />

      <Button className="mt-3" color="primary" onClick={onClickButton}>
        TransLive
      </Button>

      <div className="mt-3">
        <VideoPlayer></VideoPlayer>
      </div>
    </div>
  );
}
