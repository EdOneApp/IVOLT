// Source: Mixkit "Incandescent bulb slowly turning on and off" (mixkit.co),
// Mixkit Free License — free for commercial use, no attribution required.
export function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/videos/hero-bulb-poster.jpg"
      aria-hidden="true"
    >
      <source src="/videos/hero-bulb.webm" type="video/webm" />
      <source src="/videos/hero-bulb.mp4" type="video/mp4" />
    </video>
  );
}
