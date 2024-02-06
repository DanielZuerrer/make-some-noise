"use client";

import {
  FireIcon,
  MusicalNoteIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import VolumeSlider from "./volumeSlider";

export default function Noise({
  audioFile,
  iconName,
}: {
  audioFile: string;
  iconName: "MusicalNoteIcon" | "FireIcon" | "Signal";
}) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadedAudio = new Audio(audioFile);
    setAudio(loadedAudio);
    loadedAudio.loop = true;
  }, [audioFile]);

  function playOrPause() {
    if (!isPlaying && audio !== null) {
      audio.play().catch((error) => {
        console.log(error);
      });
    }

    if (isPlaying) {
      audio?.pause();
    }

    setIsPlaying(!isPlaying);
  }

  function getIcon(iconName: string) {
    const iconClassName = `size-12 ${isPlaying ? "text-white" : "text-slate-600"}`;
    switch (iconName) {
      case "MusicalNoteIcon":
        return <MusicalNoteIcon className={iconClassName} />;
      case "FireIcon":
        return <FireIcon className={iconClassName} />;
      case "Signal":
        return <SignalIcon className={iconClassName} />;
    }
  }

  return (
    <div className="aspect-square w-1/6 min-w-40 rounded-xl border border-white text-white">
      <div
        className="flex h-3/5 items-center justify-center border-b border-slate-700"
        onClick={playOrPause}
      >
        {getIcon(iconName)}
      </div>
      {isPlaying && audio && (
        <div className="flex h-2/5 items-center justify-center px-5">
          <VolumeSlider audio={audio} audioFile={audioFile} />
        </div>
      )}
    </div>
  );
}
