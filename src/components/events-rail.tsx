"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

import { events } from "@/data/site";

interface RailMeasurements {
  dwell: number;
  scrollDistance: number;
  sectionTravel: number;
}

export function EventsRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const measurementsRef = useRef<RailMeasurements>({
    dwell: 0,
    scrollDistance: 0,
    sectionTravel: 0,
  });
  const trackX = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!section || !track || !viewport) {
      return;
    }

    let animationFrame = 0;

    const getCards = () =>
      Array.from(
        track.querySelectorAll<HTMLElement>("[data-event-motion-card]"),
      );

    const getHeaderHeight = () => {
      const headerHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--nav-height")
        .trim();

      return Number.parseFloat(headerHeight) || 76;
    };

    const measure = () => {
      if (prefersReducedMotion) {
        section.style.removeProperty("height");
        trackX.set(0);
        return;
      }

      const trailingSpace = Math.min(80, window.innerWidth * 0.055);
      const scrollDistance = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth + trailingSpace,
      );
      const dwell = Math.max(140, window.innerHeight * 0.16);
      const sectionTravel = scrollDistance + dwell * 2;

      measurementsRef.current = { dwell, scrollDistance, sectionTravel };
      section.style.height = `${window.innerHeight + sectionTravel}px`;
    };

    const updateTrackPosition = () => {
      if (prefersReducedMotion) {
        return;
      }

      const { dwell, scrollDistance, sectionTravel } = measurementsRef.current;
      const rect = section.getBoundingClientRect();
      const movingDistance = Math.max(1, sectionTravel - dwell * 2);
      const rawProgress = -rect.top + getHeaderHeight();
      const progress = Math.max(
        0,
        Math.min(1, (rawProgress - dwell) / movingDistance),
      );
      const horizontalOffset = progress * scrollDistance;
      const cards = getCards();
      const viewportCenter = viewport.clientWidth * 0.48;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2 - horizontalOffset;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestIndex = index;
          nearestDistance = distance;
        }
      });

      trackX.set(-horizontalOffset);
      setActiveIndex((currentIndex) =>
        currentIndex === nearestIndex ? currentIndex : nearestIndex,
      );
    };

    const scheduleTrackUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateTrackPosition);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    resizeObserver.observe(viewport);
    window.addEventListener("scroll", scheduleTrackUpdate, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    getCards().forEach((card) => {
      const image = card.querySelector("img");
      image?.addEventListener("load", measure, { once: true });
      image?.addEventListener("error", measure, { once: true });
    });
    measure();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleTrackUpdate);
      window.removeEventListener("resize", measure);
      section.style.removeProperty("height");
    };
  }, [prefersReducedMotion, trackX]);

  function moveToEvent(targetIndex: number) {
    const section = sectionRef.current;
    const track = trackRef.current;
    const viewport = viewportRef.current;

    if (!section || !track || !viewport) {
      return;
    }

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-event-motion-card]"),
    );
    const nextIndex = Math.max(0, Math.min(events.length - 1, targetIndex));
    const targetCard = cards[nextIndex];

    if (!targetCard) {
      return;
    }

    if (prefersReducedMotion) {
      targetCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      return;
    }

    const { dwell, scrollDistance, sectionTravel } = measurementsRef.current;
    const desiredOffset = Math.max(
      0,
      Math.min(
        scrollDistance,
        targetCard.offsetLeft - viewport.clientWidth * 0.12,
      ),
    );
    const movingDistance = Math.max(1, sectionTravel - dwell * 2);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--nav-height",
        ),
      ) || 76;

    window.scrollTo({
      top:
        sectionTop -
        headerHeight +
        dwell +
        (scrollDistance ? desiredOffset / scrollDistance : 0) * movingDistance,
      behavior: "smooth",
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-clip bg-cream tablet-lg:min-h-[780px]"
      aria-labelledby="latest-events-title"
    >
      <div className="sticky top-[var(--nav-height)] container-page flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-center py-[62px] pb-12 tablet-lg:py-[42px] tablet-lg:pb-9 tablet:relative tablet:top-auto tablet:min-h-0 tablet:py-[30px] tablet:pb-7">
        <div className="mb-10 grid flex-none grid-cols-[1.05fr_.65fr] items-end gap-[72px] tablet-lg:mb-[26px] tablet-lg:grid-cols-1 tablet-lg:gap-[22px]">
          <div>
            <p className="eyebrow mb-4">
              Latest Events
            </p>
            <h2
              id="latest-events-title"
              className="display-2 tablet:text-[clamp(38px,11vw,52px)]"
            >
              Past, present
              <br />
              and what comes next.
            </h2>
          </div>
          <div className="pb-2">
            <p className="mb-[26px] max-w-[430px] text-[15px] text-muted tablet:mb-[14px]">
              Every event belongs to a larger project story. Move through recent
              outreach and what Khreeolife is preparing next.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="grid size-[46px] cursor-pointer place-items-center rounded-full border border-ink bg-transparent transition-[background,color,transform,opacity] duration-200 hover:not-disabled:-translate-y-0.5 hover:not-disabled:bg-brand hover:not-disabled:text-white disabled:cursor-not-allowed disabled:opacity-[.28]"
                aria-label="Previous event"
                disabled={activeIndex === 0}
                onClick={() => moveToEvent(activeIndex - 1)}
              >
                <ArrowLeft aria-hidden="true" size={20} />
              </button>
              <button
                type="button"
                className="grid size-[46px] cursor-pointer place-items-center rounded-full border border-ink bg-transparent transition-[background,color,transform,opacity] duration-200 hover:not-disabled:-translate-y-0.5 hover:not-disabled:bg-brand hover:not-disabled:text-white disabled:cursor-not-allowed disabled:opacity-[.28]"
                aria-label="Next event"
                disabled={activeIndex === events.length - 1}
                onClick={() => moveToEvent(activeIndex + 1)}
              >
                <ArrowRight aria-hidden="true" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="w-full flex-none overflow-hidden motion-reduce:overflow-x-auto desktop:rail-bleed"
        >
          <motion.div
            ref={trackRef}
            className="flex w-max gap-[14px] [will-change:transform]"
            style={{ x: trackX }}
          >
            {events.map((event, index) => (
              <Link
                key={event.id}
                href="/events"
                data-event-motion-card
                className={`group min-h-[480px] basis-[clamp(320px,29vw,390px)] flex-none overflow-hidden rounded-brand border border-ink bg-white text-ink origin-bottom transition-[transform,opacity,box-shadow] duration-(--duration-lift) hover:-translate-y-[7px] hover:scale-100 hover:opacity-100 hover:shadow-raised motion-reduce:opacity-100 motion-reduce:transform-none tablet-lg:min-h-[450px] tablet-lg:basis-[min(330px,78vw)] tablet:min-h-[430px] tablet:basis-[82vw] mobile:min-h-[470px] ${index === activeIndex ? "shadow-raised" : "translate-y-7 scale-95 opacity-[.67]"}`}
              >
                <div className="relative h-[255px] overflow-hidden border-b border-ink tablet-lg:h-[235px] tablet:h-[220px] mobile:h-[250px] photo [&_img]:transition-transform [&_img]:duration-(--duration-media) group-hover:[&_img]:scale-[1.035]">
                  <Image
                    fill
                    alt={event.imageAlt}
                    sizes="(max-width: 760px) 82vw, 390px"
                    src={event.image}
                  />
                  <span
                    className={`absolute top-[15px] left-[15px] rounded-full border border-ink/35 bg-paper px-2.5 py-[7px] text-[9px] font-black tracking-[.08em] text-ink uppercase ${event.status === "Future" ? "border-[#28761e] bg-[#e8fbe4] text-[#28761e]" : ""}`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="flex min-h-[224px] flex-col p-[22px]">
                  <div className="flex justify-between gap-[14px] text-[9px] tracking-[.08em] text-muted uppercase">
                    <span>{event.project}</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="mt-7 mb-5 font-display text-[31px] leading-none font-normal tablet:text-[27px] mobile:text-[27px]">
                    {event.title}
                  </h3>
                  <div className="mt-auto flex justify-between gap-[14px] border-t border-line pt-4 text-[11px] font-black">
                    <span>{event.project}</span>
                    <ArrowRight aria-hidden="true" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div
          className="mt-[34px] h-0.5 flex-none overflow-hidden bg-[#cfc6ba]"
          aria-hidden="true"
        >
          <span
            className="block h-full bg-brand transition-[width] duration-(--duration-media) ease-brand"
            style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
          />
        </div>
        <div className="mt-[18px] flex flex-none items-center justify-between gap-5 tablet:items-end">
          <span className="text-[10px] font-black tracking-[.1em]">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(events.length).padStart(2, "0")}
          </span>
          <Link
            href="/events"
            className="btn btn-outline"
          >
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
