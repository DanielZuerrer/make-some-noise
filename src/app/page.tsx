import Noise from "./_components/noise";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2F0743] to-[#41295a] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          make some noise
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Noise audioFile={"song.mp3"} />
          <Noise audioFile={"campfire.mp3"} />
        </div>
      </div>
    </main>
  );
}
