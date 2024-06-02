"use client";

import Hls from "hls.js";
import { useContext, useEffect, useRef, useState } from "react";

import { LangSelector } from "./LangSelector";

import { WebsocketContext } from "@/app/context/WebsocketContext";
import { BACKEND_ROUTES, languages } from "@/constants";
import { WebsocketMessages } from "@/enums";
import { IMessage } from "@/interfaces";
import { axiosInstance } from "@/tools/axios";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/button";

export const VideoPlayer = () => {
  //   const BUFFER_TIME_SECONDS = 2;

  const router = useRouter();

  const socket = useContext(WebsocketContext);

  const videoRef = useRef<any>();

  const [loaded, setLoaded] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    initiateCaptions();

    loadStreamM3U8Link();

    socket.on(WebsocketMessages.message, (data) => {
      const parsed: IMessage = JSON.parse(data);

      const cue = new VTTCue(
        parsed.start_time,
        parsed.end_time,
        parsed.transcript
      );

      const foundTrack = Object.values(videoRef.current.textTracks).find(
        (i: any) => i.language === selectedLanguage
      ) as TextTrack;

      if (!foundTrack) {
        return;
      }

      foundTrack.addCue(cue);
    });

    return () => {
      socket.off(WebsocketMessages.message);
    };
  }, []);

  const playVideo = async () => {
    try {
      const response = await axiosInstance.post(BACKEND_ROUTES.playStream, {
        hash: router.query.hash as string,
        language: selectedLanguage,
      });
    } catch (error: any) {
      throw new Error(error);
      // TODO: show error via Snackbar or popup
    }
    // videoRef.current.currentTime =
    //   videoRef.current.duration - BUFFER_TIME_SECONDS;
    videoRef.current.play();
  };

  const onSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // language => "en", "es", ...
    const language = event.target.value;

    setSelectedLanguage(language);

    // disable any selected language
    Object.values(videoRef.current.textTracks as TextTrack[]).forEach((i) => {
      i.mode = "hidden";
    });

    const foundTrack = Object.values(
      videoRef.current.textTracks as TextTrack[]
    ).find((i) => i.language === language) as TextTrack;

    if (!foundTrack) {
      return;
    }

    // select one language
    foundTrack.mode = "showing";
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
        BACKEND_ROUTES.fetchStream(router.query.hash as string)
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
      console.error(error);
      throw new Error(error);
      // TODO: show error via Snackbar or popup
    }
  };

  return (
    <div>
      <LangSelector
        defaultValue={selectedLanguage}
        onChange={onSelectLanguage}
      />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} controls className="mt-1" preload="none" />

      <Button onClick={playVideo}>Play</Button>
    </div>
  );
};
