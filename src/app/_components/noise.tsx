"use client";

import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";

export default function Noise() {
  const defaultVolume = 0.33;
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);

  useEffect(() => {
    const loadedAudio = new Audio("song.mp3");
    loadedAudio.loop = true;
    loadedAudio.volume = defaultVolume;
    setAudio(loadedAudio);
    console.log("loaded audio");
  }, []);

  function playOrPause() {
    if (!playing) {
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

    if (playing) {
      console.log("pausing");
      audio?.pause();
    }

    setPlaying(!playing);
  }

  function volumeChange(value: number[]) {
    if (value[0] === undefined) return;

    const newVolume = value[0];
    setVolume(newVolume);

    if (audio === null) return;

    audio.volume = newVolume;
  }

  return (
    <>
      <Button disabled={audio === null} onClick={playOrPause}>
        Play/Pause
      </Button>
      <Slider
        defaultValue={[volume]}
        min={0}
        max={1}
        step={0.01}
        onValueChange={volumeChange}
      />
    </>
  );
}
