import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exploring } from "@/lib/data";

export function Exploring() {
  return (
    <section id="exploring" className="relative bg-bg-elevated py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Always Learning"
          heading="Currently Exploring"
          subheading="Not claiming expertise here — just showing you where I'm headed next, so there are no surprises about what's core vs. in progress."
        />

        <div className="mt-14 flex flex-wrap gap-3.5">
          {exploring.map((item, i) => (
            <Reveal key={item} delay={(i % 6) * 0.06}>
              <span className="flex items-center gap-2 rounded-full border border-dashed border-accent-2/50 bg-accent-2-soft px-4 py-2 text-sm text-text">
                <Sparkles size={14} className="text-accent-2" strokeWidth={1.75} />
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
