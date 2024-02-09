import Noise from "./_components/noise";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 bg-noise text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <h1 className="chromatic-text text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          make some noise
        </h1>
        <div className="flex w-10/12 flex-row flex-wrap justify-center gap-10">
          <Noise audioFile={"white_noise.mp3"} iconName="WhiteNoise" />
          <Noise audioFile={"pink_noise.mp3"} iconName="PinkNoise" />
          <Noise audioFile={"brown_noise.mp3"} iconName="BrownNoise" />{" "}
          <Noise audioFile={"lofi.mp3"} iconName="CommandLine" />{" "}
        </div>
      </div>
    </main>
  );
}
