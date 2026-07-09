import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative bg-bg-elevated py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Technical Skills"
          heading="What I Work With"
          subheading="A toolkit spanning statistical software, programming languages, and BI platforms — built for research and business reporting alike."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.1}>
              <h3 className="font-mono-tag text-xs uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-bg px-3.5 py-1.5 text-sm text-text transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
