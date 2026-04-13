"use client";

import { useState } from "react";
import ShowcaseLightbox from "@/components/ShowcaseLightbox";

export type ShowcaseItemType =
  | "Storyboard"
  | "World Map"
  | "Character"
  | "Motion Scene";

export type AspectRatio = "1:1" | "4:5" | "16:9" | "9:16";

export interface ShowcaseItem {
  id: number;
  title: string;
  type: ShowcaseItemType;
  aspect: AspectRatio;
  author?: string;
  /** Placeholder tint colour for each card */
  color: string;
  /** For storyboards: number of panels visible in lightbox scroll */
  panels?: number;
}

const items: ShowcaseItem[] = [
  // ── Row-ish 1: varied opener ──
  {
    id: 1,
    title: "The Iron Gate",
    type: "Storyboard",
    aspect: "9:16",
    author: "Sarah Chen",
    color: "#1a1520",
    panels: 6,
  },
  {
    id: 2,
    title: "Realm of Ashenvale",
    type: "World Map",
    aspect: "16:9",
    color: "#151a1c",
  },
  {
    id: 3,
    title: "The Summoning",
    type: "Motion Scene",
    aspect: "1:1",
    color: "#151c1a",
  },
  {
    id: 4,
    title: "Captain Elara Voss",
    type: "Character",
    aspect: "4:5",
    author: "James Whitfield",
    color: "#1c1a15",
  },
  // ── Row-ish 2: break up with wide + square ──
  {
    id: 5,
    title: "Dragon's Breath",
    type: "Motion Scene",
    aspect: "16:9",
    author: "Lena Okafor",
    color: "#191c15",
  },
  {
    id: 6,
    title: "Beneath the Crimson Sky",
    type: "Storyboard",
    aspect: "9:16",
    author: "Priya Sharma",
    color: "#1a151c",
    panels: 8,
  },
  {
    id: 7,
    title: "The Wanderer",
    type: "Character",
    aspect: "1:1",
    color: "#1c1515",
  },
  {
    id: 8,
    title: "Tidelands Archipelago",
    type: "World Map",
    aspect: "16:9",
    author: "Diego Morales",
    color: "#15191c",
  },
  // ── Row-ish 3: more variety ──
  {
    id: 9,
    title: "Seraphina Blackwood",
    type: "Character",
    aspect: "4:5",
    author: "Tomás Rivera",
    color: "#1c1815",
  },
  {
    id: 10,
    title: "Echoes of the Forgotten",
    type: "Storyboard",
    aspect: "4:5",
    color: "#1c1918",
    panels: 5,
  },
  {
    id: 11,
    title: "The Crossing",
    type: "Motion Scene",
    aspect: "1:1",
    color: "#151518",
  },
  {
    id: 12,
    title: "Kingdoms of Eryndor",
    type: "World Map",
    aspect: "16:9",
    color: "#141c18",
  },
  // ── Row-ish 4: mix it up further ──
  {
    id: 13,
    title: "The Last Lighthouse",
    type: "Storyboard",
    aspect: "9:16",
    author: "Miriam Osei",
    color: "#18151c",
    panels: 7,
  },
  {
    id: 14,
    title: "Bloodline",
    type: "Character",
    aspect: "16:9",
    author: "Anika Patel",
    color: "#1a1818",
  },
  {
    id: 15,
    title: "The Oracle",
    type: "Character",
    aspect: "4:5",
    color: "#181a15",
  },
  {
    id: 16,
    title: "Shattered Isles",
    type: "World Map",
    aspect: "1:1",
    author: "Kenji Nakamura",
    color: "#15181c",
  },
  // ── Row-ish 5: extra items for depth ──
  {
    id: 17,
    title: "The Harbinger",
    type: "Motion Scene",
    aspect: "4:5",
    color: "#1c151a",
  },
  {
    id: 18,
    title: "A Throne of Glass and Bone",
    type: "Storyboard",
    aspect: "9:16",
    author: "Elise Fontaine",
    color: "#17141c",
    panels: 9,
  },
  {
    id: 19,
    title: "Verdant Expanse",
    type: "World Map",
    aspect: "16:9",
    author: "Mateo Silva",
    color: "#141a16",
  },
  {
    id: 20,
    title: "Kael the Undying",
    type: "Character",
    aspect: "1:1",
    author: "Yuki Tanaka",
    color: "#1a1a15",
  },
];

const COLLAPSED_HEIGHT = "max-h-[800px] md:max-h-[900px]";
const EXPANDED_HEIGHT = "max-h-[20000px]";

const ASPECT_MAP: Record<AspectRatio, string> = {
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-video",
  "9:16": "aspect-[9/16]",
};

const TYPE_COLORS: Record<ShowcaseItemType, string> = {
  Storyboard: "bg-white/10 text-white/70",
  "World Map": "bg-white/10 text-white/70",
  Character: "bg-white/10 text-white/70",
  "Motion Scene": "bg-white/10 text-white/70",
};

export default function ShowcaseGrid() {
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <section className="bg-[#060a0f] text-white px-6 pt-16 md:px-12 md:pt-24 pb-0">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-[family-name:var(--font-season-mix)] text-white text-2xl md:text-3xl"
            style={{ fontWeight: 400 }}
          >
            Created with StoryAmp
          </h2>
          <p className="mt-3 text-white/50 text-sm md:text-base font-[family-name:var(--font-figtree)] max-w-lg mx-auto">
            See what indie authors are bringing to life — storyboards, characters, worlds, and more.
          </p>
        </div>

        {/* Grid wrapper with collapse + fade */}
        <div className="relative">
          <div
            className={`${
              expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT
            } overflow-hidden transition-[max-height] duration-700 ease-in-out`}
          >
            {/* Masonry grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 max-w-[1400px] mx-auto [column-fill:_balance]">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="mb-4 md:mb-5 w-full break-inside-avoid block text-left group cursor-pointer"
                >
                  {/* Card */}
                  <div
                    className={`relative w-full ${ASPECT_MAP[item.aspect]} rounded-lg overflow-hidden border border-white/[0.06] transition-all duration-300 group-hover:border-white/15 group-hover:scale-[1.02]`}
                    style={{ backgroundColor: item.color }}
                  >
                    {/* Type badge */}
                    <span
                      className={`absolute top-3 left-3 text-[11px] font-medium font-[family-name:var(--font-figtree)] px-2.5 py-1 rounded-full backdrop-blur-sm ${TYPE_COLORS[item.type]}`}
                    >
                      {item.type}
                    </span>

                    {/* Motion Scene play indicator */}
                    {item.type === "Motion Scene" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                          <svg
                            className="w-4 h-4 text-white/70 ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Bottom overlay with title & author */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-3 pt-8">
                      <p className="text-white text-sm font-medium font-[family-name:var(--font-figtree)] leading-tight">
                        {item.title}
                      </p>
                      {item.author && (
                        <p className="text-white/50 text-xs font-[family-name:var(--font-figtree)] mt-0.5">
                          by {item.author}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Fade-to-black overlay + Load more button */}
          {!expanded && (
            <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#060a0f] via-[#060a0f]/90 to-transparent flex items-end justify-center pb-8 pointer-events-none">
              <button
                onClick={() => setExpanded(true)}
                className="pointer-events-auto px-8 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white text-sm font-semibold font-[family-name:var(--font-figtree)] rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && (
        <ShowcaseLightbox
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
}
