"use client";

import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Brush,
  ChartColumn,
  ChartScatter,
  Cog,
  Globe,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, type Service } from "@/lib/data";

import "swiper/css";

const iconMap: Record<Service["icon"], LucideIcon> = {
  "chart-column": ChartColumn,
  "layout-dashboard": LayoutDashboard,
  "chart-scatter": ChartScatter,
  brush: Brush,
  "book-open": BookOpen,
  "brain-circuit": BrainCircuit,
  globe: Globe,
  cog: Cog,
};

export function Services() {
  const [index, setIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const total = String(services.length).padStart(2, "0");

  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="What I Do"
          heading="Services"
          subheading="From raw data to decisions — statistical rigor, clear visuals, and reporting tools built for the way your team actually works."
          align="center"
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            loop
            grabCursor
            spaceBetween={20}
            slidesPerView={1.15}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(s) => setIndex(s.realIndex)}
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const list = service.items.length ? service.items : service.tools ?? [];

              return (
                <SwiperSlide key={service.title}>
                  <Card className="flex h-[400px] flex-col sm:h-[420px]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl italic text-text">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">{service.description}</p>

                    <ul className="mt-5 flex flex-1 flex-wrap content-start gap-2 overflow-y-auto">
                      {list.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border px-3 py-1 font-mono-tag text-[11px] uppercase tracking-wide text-text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft size={16} strokeWidth={1.75} />
            </button>
            <span className="font-mono-tag text-xs text-text-muted">
              {String(index + 1).padStart(2, "0")} / {total}
            </span>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight size={16} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
