const HERO_VIDEO = "https://pub-4714471fdc5144719a95bb3ae6a26f4e.r2.dev/Darker_Grainy_Still_Video_Generation.mp4";

export default function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section
      className="h-[80vh] md:h-screen flex flex-col justify-end relative bg-cover bg-center bg-no-repeat p-8 pb-8 md:p-[5rem_4rem] bg-[url('/hero-mobile-bg.jpg')] md:bg-[url('/hero-bg.jpg')]"
    >
      {/* Desktop video background */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex flex-col items-start w-full md:w-[30rem]">
        <h1
          className="font-[family-name:var(--font-season-mix)] text-[color:var(--color-white)]"
          style={{ fontWeight: 400, fontStyle: "normal" }}
        >
          <span className="block text-[2.5rem] leading-[2.625rem] md:text-[3.75rem] md:leading-[3.875rem]">
            Step into your own world
          </span>
        </h1>
        <p
          className="mt-4 text-left font-normal font-[family-name:var(--font-figtree)] text-[color:var(--color-white)] text-[1rem] leading-normal md:text-[1.25rem]"
        >
          Transform your story into professional storyboards and cinematic pre-visualizations in seconds. Designed for the modern indie author.
        </p>
        <div className="mt-6 flex items-center gap-3 md:mt-8 md:gap-4">
          <button
            onClick={onJoinClick}
            className="px-6 py-2.5 md:px-8 md:py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-colors cursor-pointer text-sm md:text-base"
          >
            Join the Waitlist
          </button>
          <button className="px-6 py-2.5 md:px-8 md:py-3 backdrop-blur-md bg-black/40 hover:bg-black/50 text-white font-semibold rounded-full border border-white/10 transition-colors cursor-pointer text-sm md:text-base">
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}
