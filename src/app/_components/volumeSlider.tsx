import { useEffect, useState } from "react";
import { Slider } from "~/components/ui/slider";
export default function VolumeSlider({
  audio,
  audioFile,
}: {
  audio: HTMLAudioElement;
  audioFile: string;
}) {
  const defaultVolume = 0.33;

  const [volume, setVolume] = useState<number | null>(null);

  useEffect(() => {
    const storedVolume = localStorage.getItem(`${audioFile}_volume`);

    const newVolume = Number(storedVolume ?? defaultVolume);

    setVolume(newVolume);
    audio.volume = newVolume;
  }, [audio, audioFile]);

  function onVolumeChange(value: number[]) {
    if (value[0] === undefined) return;

    const newVolume = value[0];
    audio.volume = newVolume;
    setVolume(newVolume);
    localStorage.setItem(`${audioFile}_volume`, newVolume.toString());
  }

  return (
    volume !== null && (
      <Slider
        defaultValue={[volume]}
        min={0}
        max={1}
        step={0.01}
        onValueChange={onVolumeChange}
      />
    )
  );
}
