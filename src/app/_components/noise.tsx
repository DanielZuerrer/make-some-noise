"use client";

import { CommandLineIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import VolumeSlider from "./volumeSlider";
import WhiteNoiseIcon from "../_icons/whiteNoiseIcon";
import PinkNoiseIcon from "../_icons/pinkNoiseIcon";
import BrownNoiseIcon from "../_icons/brownNoiseIcon";

export default function Noise({
  audioFile,
  iconName,
}: {
  audioFile: string;
  iconName: "WhiteNoise" | "PinkNoise" | "BrownNoise" | "CommandLine";
}) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadedAudio = new Audio(audioFile);
    setAudio(loadedAudio);
    loadedAudio.loop = true;
    loadedAudio.volume = 0;
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
    const iconClassName = `size-12 ${isPlaying ? "text-white chromatic-svg" : "text-slate-600"}`;
    switch (iconName) {
      case "WhiteNoise":
        return <WhiteNoiseIcon className={iconClassName} />;
      case "PinkNoise":
        return <PinkNoiseIcon className={iconClassName} />;
      case "BrownNoise":
        return <BrownNoiseIcon className={iconClassName} />;
      case "CommandLine":
        return <CommandLineIcon className={iconClassName} />;
    }
  }

  const borderColor = isPlaying ? "border-white" : "border-slate-600";

  return (
    <div
      className={`aspect-square w-1/6 min-w-40 rounded-xl border ${borderColor} text-white`}
    >
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
