"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";

import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";

const socials = [
  { label: "GitHub", href: site.socials.github, icon: "github" as const },
  { label: "LinkedIn", href: site.socials.linkedin, icon: "linkedin" as const },
  { label: "WhatsApp", href: site.socials.whatsapp, icon: "whatsapp" as const },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="font-mono-tag text-xs uppercase tracking-[0.25em] text-accent">
            05 &mdash; Get In Touch
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl italic text-text sm:text-6xl">
            Let&rsquo;s work with your data.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-5 max-w-xl text-text-muted">
            Have a research project, dashboard, or dataset that needs a clear story? Send a
            note — happy to talk through it.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={`mailto:${site.email}`}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-mono-tag text-sm uppercase tracking-wide text-bg"
            >
              <Mail size={18} strokeWidth={1.75} />
              {site.email}
            </motion.a>
            <motion.a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 rounded-full border border-border-strong px-8 py-4 font-mono-tag text-sm uppercase tracking-wide text-text transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={18} strokeWidth={1.75} />
              {site.phone}
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.icon === "github" ? (
                  <SiGithub size={16} />
                ) : s.icon === "whatsapp" ? (
                  <SiWhatsapp size={16} />
                ) : (
                  <span className="font-mono-tag text-xs font-semibold">in</span>
                )}
                {s.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-8 text-center font-mono-tag text-xs text-text-muted sm:px-8">
        &copy; {new Date().getFullYear()} {site.name}.
      </div>
    </section>
  );
}
