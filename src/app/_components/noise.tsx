"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Slider } from "~/components/ui/slider";

export default function Noise({ audioFile }: { audioFile: string }) {
  const defaultVolume = 0.33;
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    const loadedAudio = new Audio(audioFile);
    loadedAudio.loop = true;
    loadedAudio.volume = defaultVolume;
    setAudio(loadedAudio);
    console.log("loaded audio");
  }, [audioFile]);

  function playOrPause() {
    if (!isPlaying) {
      console.log("playing");
      audio
        ?.play()
        .then(() => {
          audio.loop = true;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (isPlaying) {
      console.log("pausing");
      audio?.pause();
    }

    setPlaying(!isPlaying);
  }

  function volumeChange(value: number[]) {
    if (value[0] === undefined) return;

    const newVolume = value[0];
    setVolume(newVolume);

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
