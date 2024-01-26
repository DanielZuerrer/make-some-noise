"use client";

import { useEffect, useState } from "react";

export default function Noise() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio("whoosh.mp3"));
    console.log("audio loaded");
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

  return (
    <>
      <button onClick={playOrPause}>Play/Pause</button>
    </>
  );
}
