"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
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
    <Card
      className={`
        aspect-square
        max-w-xs
        bg-transparent
        text-white
        ${audio === null ? "border-slate-500 bg-slate-500" : ""}`}
    >
      <CardHeader onClick={playOrPause}>
        <CardTitle>{audioFile}</CardTitle>
      </CardHeader>
      <CardContent className="h-8">
        {isPlaying && audio && (
          <VolumeSlider audio={audio} audioFile={audioFile} />
        )}
      </CardContent>
    </Card>
  );
}
