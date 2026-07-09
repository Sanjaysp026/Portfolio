import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  heading,
  subheading,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 font-mono-tag text-xs tracking-[0.2em] uppercase text-accent ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="text-text-muted">{index}</span>
          <span className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl italic text-text text-balance">
          {heading}
        </h2>
      </Reveal>
      {subheading ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-4 max-w-2xl text-text-muted text-base sm:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subheading}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
