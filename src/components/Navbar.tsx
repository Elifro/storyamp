"use client";

const navItems = ["Features", "Pricing", "About"];

export default function Navbar({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-8 py-4">
      <nav className="flex items-center justify-between backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl px-6 py-3 shadow-lg">
        {/* Logo */}
        <span className="font-[family-name:var(--font-season-mix)] text-white text-xl font-normal tracking-wide">
          StoryAmp
        </span>

        {/* Nav items */}
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

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-white/80 hover:text-white text-sm font-normal font-[family-name:var(--font-figtree)] transition-colors cursor-pointer px-2">
            Log in
          </button>
          <button
            onClick={onJoinClick}
            className="px-5 py-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold font-[family-name:var(--font-figtree)] rounded-full transition-colors cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>
      </nav>
    </header>
  );
}
