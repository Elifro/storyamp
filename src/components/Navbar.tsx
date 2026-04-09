"use client";

import { useState } from "react";

const navItems = ["Features", "Pricing", "About"];

export default function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-8 py-4">
      <nav className="flex items-center justify-between backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-6 py-3 shadow-lg">
        {/* Logo */}
        <span className="font-[family-name:var(--font-season-mix)] text-white text-xl font-normal tracking-wide">
          StoryAmp
        </span>

        {/* Nav items — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-white/80 hover:text-white text-sm font-medium font-[family-name:var(--font-figtree)] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Join Waitlist — all screen sizes */}
          <button
            onClick={onJoinClick}
            className="px-5 py-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold font-[family-name:var(--font-figtree)] rounded-full transition-colors cursor-pointer"
          >
            Join Waitlist
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-6 py-5 shadow-lg flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium font-[family-name:var(--font-figtree)] transition-colors"
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10" />
          <button
            onClick={() => { setMenuOpen(false); onJoinClick(); }}
            className="w-full py-2.5 bg-white text-black text-sm font-semibold font-[family-name:var(--font-figtree)] rounded-full transition-colors cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      )}
    </header>
  );
}
