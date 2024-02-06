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
    <div className="aspect-square border-4 border-white text-white">
      <h1 onClick={playOrPause}>{audioFile}</h1>
      {isPlaying && audio && (
        <VolumeSlider audio={audio} audioFile={audioFile} />
      )}
    </div>
  );
}
