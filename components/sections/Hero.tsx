"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { scrollToHash } from "@/components/SmoothScrollProvider";
import { site } from "@/lib/data";

function AvailabilityPill({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => scrollToHash("#contact")}
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-bg-elevated px-4 py-2 shadow-sm transition-colors hover:border-accent/50 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="font-mono-tag text-xs text-text">{site.availability}</span>
    </button>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-20 bg-grid" />
      <motion.div
        style={{ y: glowY }}
        className="absolute left-1/2 top-[18%] -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />

      <motion.div
        style={{ opacity: fadeOpacity }}
        className="relative mx-auto max-w-3xl px-6 text-center sm:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-3xl font-bold text-text sm:text-4xl md:text-5xl"
        >
          Hi, I&rsquo;m Sanjay
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 font-display text-5xl italic leading-[1.05] text-text text-balance sm:text-6xl md:text-7xl"
        >
          Data &amp; Statistical Analyst
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 font-mono-tag text-xs uppercase tracking-wide text-text-muted sm:text-sm"
        >
          {site.title}
        </motion.p>
      </motion.div>

      <div className="relative mx-auto mt-10 max-w-5xl px-6 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px_1fr] lg:gap-6">
          <div className="hidden lg:flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <AvailabilityPill />
            </motion.div>
          </div>

          <motion.div
            style={{ y: photoY, opacity: fadeOpacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px]"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                maskImage: "linear-gradient(to bottom, black 76%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 76%, transparent 100%)",
              }}
            >
              <Image
                src={site.photo}
                alt={site.name}
                fill
                priority
                sizes="(min-width: 1024px) 360px, 300px"
                className="object-cover object-top grayscale contrast-[1.05]"
              />
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <motion.p
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-[220px] text-sm text-text-muted"
            >
              {site.tagline}
            </motion.p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 lg:hidden">
          <AvailabilityPill />
          <p className="max-w-sm text-center text-sm text-text-muted">{site.tagline}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToHash("#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-text px-7 py-3 font-mono-tag text-sm uppercase tracking-wide text-bg transition-transform hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={15} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => scrollToHash("#services")}
            className="rounded-full border border-border-strong px-7 py-3 font-mono-tag text-sm uppercase tracking-wide text-text transition-colors hover:border-accent hover:text-accent"
          >
            View Services
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        aria-label="Scroll to services"
        onClick={() => scrollToHash("#services")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}
