"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { events } from "@/data/site";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";

export function HorizontalEvents() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    if (!viewportRef.current || !trackRef.current) return;
    const nextDistance = Math.max(
      0,
      trackRef.current.scrollWidth - viewportRef.current.clientWidth,
    );
    setDistance(nextDistance);
  }, []);

  useEffect(() => {
    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0, -distance, -distance],
  );
  const progressWidth = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["4%", "100%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const normalized = Math.min(1, Math.max(0, (value - 0.1) / 0.8));
    setActive(
      Math.min(events.length - 1, Math.round(normalized * (events.length - 1))),
    );
  });

  const sectionHeight = useMemo(
    () => Math.max(1200, distance + 1100),
    [distance],
  );

  const scrollToCard = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const clamped = Math.max(0, Math.min(events.length - 1, index));
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const progress = events.length === 1 ? 0 : clamped / (events.length - 1);
    const targetProgress = 0.1 + progress * 0.8;
    const maxScroll = Math.max(1, section.offsetHeight - window.innerHeight);
    window.scrollTo({
      top: sectionTop + targetProgress * maxScroll,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-[var(--nav-height)] flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-center overflow-hidden py-14 max-md:py-9">
        <div className="site-container">
          <div className="grid grid-cols-[1.05fr_.65fr] items-end gap-20 max-lg:grid-cols-1 max-lg:gap-6 max-md:text-center">
            <Reveal className="min-w-0">
              <div className="eyebrow mb-4 text-brand max-md:justify-center">Latest Events</div>
              <h2 className="display-title text-[clamp(42px,5vw,76px)] max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">
                Past, present
                <br />
                and what comes next.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[430px] text-[15px] text-[#6f6972] max-md:mx-auto leading-body">
                Every event belongs to a larger project story. Keep scrolling —
                the cards travel sideways until the final event is fully
                revealed.
              </p>
              <div className="mt-5 flex gap-2 max-md:justify-center">
                <button
                  type="button"
                  onClick={() => scrollToCard(active - 1)}
                  className="grid size-11 place-items-center rounded-full border border-ink transition-colors hover:bg-brand hover:text-white leading-control"
                  aria-label="Previous event"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToCard(active + 1)}
                  className="grid size-11 place-items-center rounded-full border border-ink transition-colors hover:bg-brand hover:text-white leading-control"
                  aria-label="Next event"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </Reveal>
          </div>

          <div ref={viewportRef} className="mt-9 overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex w-max gap-4"
              style={{ x }}
            >
              {events.map((event, index) => (
                <motion.article
                  key={event.id}
                  animate={{
                    y: index === active ? 0 : 28,
                    scale: index === active ? 1 : 0.95,
                    opacity: index === active ? 1 : 0.68,
                  }}
                  transition={{ duration: 0.35 }}
                  className="card-border w-[min(clamp(320px,29vw,390px),calc(100vw-28px))] shrink-0 bg-white"
                >
                  <div className="relative h-[255px] overflow-hidden border-b border-ink">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover saturate-[.86]"
                      sizes="390px"
                    />
                    <span
                      className={`absolute left-4 top-4 status-pill ${event.status === "Future" ? "status-pill-future" : ""}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="flex min-h-[225px] flex-col p-6">
                    <div className="flex flex-wrap justify-between gap-4 text-[9px] font-bold uppercase tracking-[.08em] text-[#6f6972] leading-caption">
                      <span>{event.project}</span>
                      <span>{event.location ?? event.date}</span>
                    </div>
                    <h3 className="mt-7 font-display text-[30px] font-normal tracking-[-.04em] leading-card">
                      {event.title}
                    </h3>
                    <div className="mt-auto flex justify-between border-t border-[#d7d0c7] pt-4 text-[11px] font-black leading-caption">
                      <span>{event.date}</span>
                      <span>↗</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 h-[2px] overflow-hidden bg-[#cfc2ba]">
            <motion.span
              className="block h-full bg-brand"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="mt-5 flex items-center justify-between gap-5">
            <span className="text-[10px] font-black tracking-[.1em] leading-caption">
              0{active + 1} / 0{events.length}
            </span>
            <AnimatedButton
              href="/events"
              label="View Events"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
