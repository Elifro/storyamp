"use client";

import { useEffect } from "react";
import type { ShowcaseItem } from "@/components/ShowcaseGrid";

const TYPE_COLORS: Record<string, string> = {
  Storyboard: "bg-white/10 text-white/70",
  "World Map": "bg-white/10 text-white/70",
  Character: "bg-white/10 text-white/70",
  "Motion Scene": "bg-white/10 text-white/70",
};

export default function ShowcaseLightbox({
  item,
  onClose,
}: {
  item: ShowcaseItem;
  onClose: () => void;
}) {
  // Lock scroll & listen for Escape
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const isStoryboard = item.type === "Storyboard";
  const panelCount = item.panels ?? 6;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-colors cursor-pointer"
        aria-label="Close"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content container */}
      <div
        className={`relative ${
          isStoryboard
            ? "w-[90vw] max-w-sm h-[85vh] overflow-y-auto"
            : "w-[90vw] max-w-3xl max-h-[85vh]"
        } rounded-xl overflow-hidden border border-white/10`}
        onClick={(e) => e.stopPropagation()}
      >
        {isStoryboard ? (
          /* ── Storyboard: vertical scroll of panels ── */
          <div className="flex flex-col">
            {Array.from({ length: panelCount }).map((_, i) => (
              <div
                key={i}
                className="w-full aspect-[9/12] border-b border-white/[0.06] last:border-b-0 flex items-center justify-center"
                style={{
                  backgroundColor: item.color,
                  /* Slight variation per panel */
                  filter: `brightness(${1 + i * 0.04})`,
                }}
              >
                <span className="text-white/20 text-sm font-[family-name:var(--font-figtree)]">
                  Panel {i + 1}
                </span>
              </div>
            ))}

            {/* Sticky header with title info */}
            <div className="sticky bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent px-5 pb-5 pt-10">
              <span
                className={`inline-block text-[11px] font-medium font-[family-name:var(--font-figtree)] px-2.5 py-1 rounded-full mb-2 ${TYPE_COLORS[item.type]}`}
              >
                {item.type}
              </span>
              <p className="text-white text-lg font-medium font-[family-name:var(--font-figtree)]">
                {item.title}
              </p>
              {item.author && (
                <p className="text-white/50 text-sm font-[family-name:var(--font-figtree)] mt-0.5">
                  by {item.author}
                </p>
              )}
            </div>
          </div>
        ) : (
          /* ── Other types: single enlarged view ── */
          <div className="flex flex-col">
            <div
              className={`w-full ${
                item.type === "World Map"
                  ? "aspect-video"
                  : item.type === "Character"
                  ? "aspect-[4/5]"
                  : "aspect-square"
              } flex items-center justify-center`}
              style={{ backgroundColor: item.color }}
            >
              {item.type === "Motion Scene" && (
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <svg
                    className="w-7 h-7 text-white/70 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info bar */}
            <div className="bg-[#0c0f14] px-5 py-4 flex items-start justify-between gap-4">
              <div>
                <span
                  className={`inline-block text-[11px] font-medium font-[family-name:var(--font-figtree)] px-2.5 py-1 rounded-full mb-2 ${TYPE_COLORS[item.type]}`}
                >
                  {item.type}
                </span>
                <p className="text-white text-lg font-medium font-[family-name:var(--font-figtree)]">
                  {item.title}
                </p>
                {item.author && (
                  <p className="text-white/50 text-sm font-[family-name:var(--font-figtree)] mt-0.5">
                    by {item.author}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
