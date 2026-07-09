"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    window.__lenis = lenis;

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}

export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target as HTMLElement, { offset: -84 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
