"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Slider } from "~/components/ui/slider";

export default function Noise({ audioFile }: { audioFile: string }) {
  const defaultVolume = 0.33;
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    const storedVolume = localStorage.getItem(`${audioFile}_volume`);
    setVolume(storedVolume ? parseFloat(storedVolume) : defaultVolume);
  }, [audioFile]);

  useEffect(() => {
    const loadedAudio = new Audio(audioFile);
    setAudio(loadedAudio);
    loadedAudio.loop = true;
    console.log("loaded audio");
  }, [audioFile]);

  function playOrPause() {
    if (!isPlaying && audio !== null) {
      audio.volume = volume;
      audio.play().catch((error) => {
        console.log(error);
      });
    }

    if (isPlaying) {
      audio?.pause();
    }

    setIsPlaying(!isPlaying);
  }

  function volumeChange(value: number[]) {
    if (value[0] === undefined) return;

    const newVolume = value[0];
    setVolume(newVolume);
    localStorage.setItem(`${audioFile}_volume`, newVolume.toString());

    if (audio === null) return;

    audio.volume = newVolume;
  }

  return (
    <Card
      className={`
        max-w-xs
        bg-transparent
        text-white
        ${audio === null ? "border-slate-500 bg-slate-500" : ""}`}
    >
      <CardHeader onClick={playOrPause}>
        <CardTitle>{audioFile}</CardTitle>
      </CardHeader>
      <CardContent className="h-8">
        {isPlaying && (
          <Slider
            className=""
            defaultValue={[volume]}
            min={0}
            max={1}
            step={0.01}
            onValueChange={volumeChange}
          />
        )}
      </CardContent>
    </Card>
  );
}
