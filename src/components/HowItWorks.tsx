const steps = [
  {
    label: "Upload Your Lore",
    description:
      "Paste a chapter, a character description, or your synopsis. Fable AI reads and understands the soul of your story.",
  },
  {
    label: "Choose Your Aesthetic",
    description:
      "Select from our curated, predefined artistic styles - from dark fantasy to modern romance. Set your template and let the magic happen.",
  },
  {
    label: "Share with the World",
    description:
      "Export perfectly formatted, consistent assets ready to dominate your social media feeds and captivate your future readers.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#060a0f] text-white">
      {/* Section title */}
      <div className="flex justify-center px-2 py-6">
        <h2
          className="font-[family-name:var(--font-season-mix)] text-white text-2xl"
          style={{ fontWeight: 400 }}
        >
          How it works
        </h2>
      </div>

      {/* Steps */}
      <div className="flex flex-col">
        {steps.map((step, i) => {
          const imageFirst = i % 2 === 0;

          return (
            <div
              key={step.label}
              className={`flex flex-col ${
                imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-[72px] px-6 py-10 md:px-[10vw] lg:px-[14vw] md:py-12`}
            >
              {/* Placeholder image */}
              <div className="w-full md:flex-1">
                <div className="w-full aspect-[618/419] rounded-lg bg-[#333333]" />
              </div>

              {/* Text content */}
              <div className="w-full md:max-w-[428px] flex flex-col gap-4 md:gap-6">
                <span className="text-sm text-[#cdcece] font-[family-name:var(--font-figtree)]">
                  {step.label}
                </span>
                <p
                  className="font-[family-name:var(--font-season-mix)] text-white text-xl md:text-2xl leading-snug"
                  style={{ fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
