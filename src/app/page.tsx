import Noise from "./_components/noise";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 bg-noise text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <h1 className="chromatic text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          make some noise
        </h1>
        <div className="flex w-10/12 flex-row flex-wrap justify-center gap-10">
          <Noise audioFile={"song.mp3"} iconName="MusicalNoteIcon" />
          <Noise audioFile={"campfire.mp3"} iconName="FireIcon" />
          <Noise audioFile={"fan.mp3"} iconName="Signal" />{" "}
          <Noise audioFile={"lofi.mp3"} iconName="CommandLine" />{" "}
        </div>
      </div>
    </main>
  );
}
