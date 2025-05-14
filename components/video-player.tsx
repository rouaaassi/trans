"use client";

import Hls from "hls.js";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";

import { LangSelector } from "./LangSelector";

import { WebsocketContext } from "@/app/context/WebsocketContext";
import { BACKEND_ROUTES, languages } from "@/constants";
import { WebsocketMessages } from "@/enums";
import { IMessage } from "@/interfaces";
import { axiosInstance } from "@/tools/axios";

export const VideoPlayer = () => {
  const BUFFER_TIME_SECONDS = 2;

  const searchParams = useSearchParams();

  const socket = useContext(WebsocketContext);

  const videoRef = useRef<any>();

  const [loaded, setLoaded] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    initiateCaptions();

    loadStreamM3U8Link();

    socket.on(WebsocketMessages.message, (data) => {
      const parsed: IMessage = JSON.parse(data);

      const duration = parsed.end_time - parsed.start_time;

      const currentTime = videoRef.current.currentTime;
      const startTime = currentTime;

      const cue = new VTTCue(
        startTime - 0.5,
        startTime + duration + 1,
        parsed.transcript,
      );

      const foundTrack = Object.values(videoRef.current.textTracks).find(
        (i: any) => i.language === selectedLanguage,
      ) as TextTrack;

      if (!foundTrack) {
        return;
      }

      console.log(videoRef.current.textTracks);

      foundTrack.addCue(cue);
    });

    return () => {
      socket.off(WebsocketMessages.message);
    };
  }, []);

  const playVideo = async () => {
    try {
      await axiosInstance.post(BACKEND_ROUTES.playStream, {
        hash: searchParams.get("hash"),
        language: selectedLanguage,
      });

      enableCaptionsFor(selectedLanguage);

      const result: number = videoRef.current.duration - BUFFER_TIME_SECONDS;

      videoRef.current.currentTime = result >= 0 ? result : 2;

      videoRef.current.play();

      setIsPlaying(true);
    } catch (error: any) {
      // failed_to_retrieve_m3u8_link
      throw new Error(error);
      // TODO: show error via Snackbar or popup
    }
  };

  const enableCaptionsFor = (language: string) => {
    // disable any selected language
    Object.values(videoRef.current.textTracks as TextTrack[]).forEach((i) => {
      i.mode = "hidden";
    });

    const foundTrack = Object.values(
      videoRef.current.textTracks as TextTrack[],
    ).find((i) => i.language === language) as TextTrack;

    if (!foundTrack) {
      return;
    }

    // select one language
    foundTrack.mode = "showing";
  };

  const onSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // language => "en", "es", ...
    const language = event.target.value;

    setSelectedLanguage(language);

    enableCaptionsFor(language);
  };

  const initiateCaptions = () => {
    if (loaded) {
      return;
    }

    languages.forEach((language) => {
      videoRef.current.addTextTrack("captions", language.label, language.key);
    });
  };

  const loadStreamM3U8Link = async () => {
    try {
      const response = await axiosInstance.get(
        BACKEND_ROUTES.fetchStream(searchParams.get("hash") as string),
      );

      if (loaded) {
        return;
      }

      const hls = new Hls();

      hls.loadSource(response.data);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.ERROR, (error) => {
        throw new Error(error);
        // TODO: show error via Snackbar or popup
      });

      setLoaded(true);
    } catch (error: any) {
      throw new Error(error);
      // TODO: show error via Snackbar or popup
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <LangSelector
        defaultValue={selectedLanguage}
        onChange={onSelectLanguage}
      />

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        controls
        className="min-w-96 min-h-96"
        height="90%"
        preload="none"
        width="100%"
      />

      <Button isDisabled={isPlaying} onClick={playVideo}>
        Play
      </Button>
    </div>
  );
};
