"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Hls from "hls.js";

import { LangSelector } from "./LangSelector";

import { IMessage, ILoadMessage } from "@/interfaces";
import { WebsocketMessages } from "@/enums";
import { WebsocketContext } from "@/app/context/WebsocketContext";
import { languages } from "@/constants";

export const VideoPlayer = () => {
  //   const BUFFER_TIME_SECONDS = 2;

  const socket = useContext(WebsocketContext);

  const videoRef = useRef<any>();

  const [loaded, setLoaded] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    initiateData();

    const hls = new Hls();

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

    socket.on(WebsocketMessages.load, async (data) => {
      if (loaded) {
        return;
      }

      const parsed: ILoadMessage = JSON.parse(data);

      hls.loadSource(parsed.streamURL);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });

      playVideo();

      setLoaded(true);
    });

    return () => {
      socket.off(WebsocketMessages.message);
      socket.off(WebsocketMessages.load);
    };
  }, []);

  const playVideo = () => {
    // videoRef.current.currentTime =
    //   videoRef.current.duration - BUFFER_TIME_SECONDS;
    videoRef.current.play();
  };

  // language => "en", "es", ...
  const selectLanguageInMediaPlayer = (language: string) => {
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

  const onSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);

    selectLanguageInMediaPlayer(event.target.value);
  };

  const initiateData = () => {
    languages.forEach((language) => {
      videoRef.current.addTextTrack("captions", language.label, language.key);
    });
  };

  return (
    <div>
      <LangSelector
        defaultValue={selectedLanguage}
        onChange={onSelectLanguage}
      />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} controls className="mt-1" preload="none" />
    </div>
  );
};
