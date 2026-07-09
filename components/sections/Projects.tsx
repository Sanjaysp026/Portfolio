"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative bg-bg-elevated py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          heading="Projects"
          subheading="A look at dashboards and reporting tools built for real operational decisions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group overflow-hidden rounded-2xl border border-border bg-bg shadow-sm transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-1.5 border-b border-border bg-bg-elevated-2 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-3 flex-1 truncate rounded-full bg-bg px-3 py-1 text-center font-mono-tag text-[11px] text-text-muted">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl italic text-text">{project.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-mono-tag text-[11px] uppercase tracking-wide text-text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
