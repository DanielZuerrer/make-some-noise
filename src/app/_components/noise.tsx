"use client";

import { useEffect, useState } from "react";
import VolumeSlider from "./volumeSlider";

export default function Noise({ audioFile }: { audioFile: string }) {
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

  return (
    <div className="aspect-square w-1/6 min-w-40 rounded-xl border border-white text-white">
      <div
        className="flex h-3/5 items-center justify-center border-b border-slate-700"
        onClick={playOrPause}
      >
        <h1>{audioFile}</h1>
      </div>
      {isPlaying && audio && (
        <div className="flex h-2/5 items-center justify-center px-5">
          <VolumeSlider audio={audio} audioFile={audioFile} />
        </div>
      )}
    </div>
  );
}
