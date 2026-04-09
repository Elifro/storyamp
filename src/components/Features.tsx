"use client";

import { useState, useEffect } from "react";

const DURATION = 10000;

const features = [
  {
    title: "Flawless Character Consistency",
    description:
      "Say goodbye to morphing faces. Our intelligent system learns your characters, ensuring your protagonist looks exactly like your protagonist—in every scene, every outfit, and every mood.",
    placeholder: "bg-[#1c1f22]",
  },
  {
    title: "Scroll-Stopping Social Media Material",
    description:
      "Generate stunning visuals optimized for social platforms. Turn your story moments into shareable content that builds your audience before your book even launches.",
    placeholder: "bg-[#1a1f1c]",
  },
  {
    title: "Dynamic Moving Scenes",
    description:
      "Bring your story to life with animated scene previews. Let readers feel the motion and emotion of your world before they read a single word.",
    placeholder: "bg-[#1a1c1f]",
  },
  {
    title: "Cinematic Storyboards",
    description:
      "Visualize your narrative arc with professional-grade storyboards. Perfect for pitching, planning, or simply seeing your story unfold panel by panel.",
    placeholder: "bg-[#1f1c1a]",
  },
  {
    title: "Immersive World Maps",
    description:
      "Build rich, detailed maps of your fictional world. Help readers navigate your universe and deepen their connection to your story's setting.",
    placeholder: "bg-[#1f1a1c]",
  },
  {
    title: "Complete Marketing Kits",
    description:
      "Everything you need to launch—cover variants, promotional banners, character sheets, and more. Ready to publish in seconds.",
    placeholder: "bg-[#1c1a1f]",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);

  // Auto-advance every 10 seconds, reset when user clicks
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="bg-[#060a0f] text-white px-[3rem] py-[6rem]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        {/* Left column */}
        <div className="w-full md:w-[35%] flex flex-col">
          <h2
            className="font-[family-name:var(--font-season-mix)]"
            style={{ fontWeight: 400, fontSize: "1.5rem", lineHeight: "1.75rem" }}
          >
            Building an audience as an indie author shouldn&apos;t mean spending thousands on illustrators or fighting with generic AI tools.
          </h2>

          <div className="mt-8 mb-6" />

          <div className="flex flex-col">
            {features.map((feature, i) => (
              <div key={feature.title}>
                {/* Progress bar border */}
                <div className="relative h-px w-full bg-white/10">
                  {active === i && (
                    <div
                      key={active}
                      className="absolute top-0 left-0 h-full bg-white"
                      style={{
                        animation: `feature-progress ${DURATION}ms linear forwards`,
                      }}
                    />
                  )}
                </div>

                <button
                  onClick={() => setActive(i)}
                  className="w-full text-left py-4 cursor-pointer"
                >
                  <span
                    className="font-[family-name:var(--font-figtree)] transition-colors duration-300"
                    style={{
                      fontSize: "1rem",
                      fontWeight: active === i ? 500 : 400,
                      color: active === i ? "white" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {feature.title}
                  </span>
                  {active === i && (
                    <p
                      className="mt-2 text-white/60 font-normal font-[family-name:var(--font-figtree)] leading-relaxed"
                      style={{ fontSize: "1rem" }}
                    >
                      {feature.description}
                    </p>
                  )}
                </button>
              </div>
            ))}
            {/* Bottom border of last item */}
            <div className="h-px w-full bg-white/10" />
          </div>
        </div>

        {/* Right column — placeholder card per feature */}
        <div className="w-full md:flex-1 md:sticky md:top-24">
          <div
            className={`w-full aspect-[4/3] rounded-2xl transition-colors duration-500 ${features[active].placeholder}`}
          />
        </div>

      </div>
    </section>
  );
}
