export default function Footer({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <footer className="bg-[#060a0f] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-10 md:pt-20 md:pb-12">
        {/* Main row: logo/address left, 2 link columns right */}
        <div className="flex flex-col md:flex-row gap-14 md:gap-0 justify-between">
          {/* Left: logo + address */}
          <div className="md:w-1/3 flex flex-col justify-between">
            <span className="font-[family-name:var(--font-season-mix)] text-white text-2xl font-normal tracking-wide">
              StoryAmp
            </span>

            <p className="mt-8 md:mt-0 text-white/30 text-xs leading-relaxed font-[family-name:var(--font-figtree)]">
              &copy; {new Date().getFullYear()} StoryAmp Inc.
              <br />
              Stockholm, Sweden
            </p>
          </div>

          {/* Right: 2 link columns, each with 2 stacked sections */}
          <div className="grid grid-cols-2 gap-x-16 md:gap-x-24 gap-y-12">
            {/* Column 1 — top: Product */}
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-sm font-[family-name:var(--font-figtree)]">
                Product
              </span>
              <div className="flex flex-col gap-3">
                <button
                  onClick={onJoinClick}
                  className="text-left text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors cursor-pointer"
                >
                  Join the waitlist
                </button>
              </div>
            </div>

            {/* Column 2 — top: Company */}
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-sm font-[family-name:var(--font-figtree)]">
                Company
              </span>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  Blog
                </a>
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  About us
                </a>
              </div>
            </div>

            {/* Column 1 — bottom: Connect */}
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-sm font-[family-name:var(--font-figtree)]">
                Connect
              </span>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  Twitter / X
                </a>
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:hello@storyamp.com" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  hello@storyamp.com
                </a>
              </div>
            </div>

            {/* Column 2 — bottom: Legal */}
            <div className="flex flex-col gap-4">
              <span className="text-white/40 text-sm font-[family-name:var(--font-figtree)]">
                Legal
              </span>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  Terms and conditions
                </a>
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  Privacy policy
                </a>
                <a href="#" className="text-white text-xl md:text-2xl font-[family-name:var(--font-eb-garamond)] hover:text-white/70 transition-colors">
                  Cookie policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
