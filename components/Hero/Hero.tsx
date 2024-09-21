export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center p-24 h-screen">
      <video
        src={require("@/public/HP-video.mp4")}
        autoPlay
        muted
        loop
        className="absolute -z-1 h-full w-full object-cover"
      />
      <h1> MICRO CLIMA </h1>
    </main>
  );
}
