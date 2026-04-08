export default function Hero({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <section
      className="h-screen flex flex-col justify-end relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')", padding: "5rem 4rem" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex flex-col items-start w-full md:w-[30rem]">
        <h1
          className="font-[family-name:var(--font-season-mix)] text-[color:var(--color-white)]"
          style={{ fontSize: "3.75rem", fontWeight: 400, lineHeight: "3.875rem", fontStyle: "normal" }}
        >
          Step into your own world
        </h1>
        <p
          className="mt-4 max-w-lg text-left font-normal font-[family-name:var(--font-figtree)] text-[color:var(--color-white)]"
          style={{ fontSize: "1.25rem", fontStyle: "normal", lineHeight: "normal" }}
        >
          Transform your story into professional storyboards and cinematic pre-visualizations in seconds. Designed for the modern indie author.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={onJoinClick}
            className="px-8 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-colors cursor-pointer"
          >
            Join the Waitlist
          </button>
          <button className="px-8 py-3 backdrop-blur-md bg-black/40 hover:bg-black/50 text-white font-semibold rounded-full border border-white/10 transition-colors cursor-pointer">
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}
