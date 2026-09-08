import type { Metadata } from "next";
import Link from "next/link";

import { EventArchive } from "@/components/event-archive";
import { Reveal } from "@/components/reveal";
import { RichHero } from "@/components/rich-hero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Browse past, current and upcoming Khreeolife events connected to its projects.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <main>
      <RichHero
        className="[&_h1]:max-w-[800px]"
        eyebrow="Events"
        image={images.worshipSecond}
        imageAlt="People gathered for an event"
        index="02 - Events"
        title={
          <>
            Every project has moments
            <br />
            worth documenting.
          </>
        }
        description="Past, present and future events linked directly to Khreeolife's projects."
        aside={
          <>
            <span className="mb-[26px] grid size-[115px] place-items-center rounded-2xl border border-white/20 bg-white/5 text-center text-[10px] font-black tracking-[.1em] text-yellow uppercase leading-[1.6]">
              Past
              <br />
              to
              <br />
              Future
            </span>
            <p>
              Event detail pages hold date, time, location, highlights, media,
              impact summaries and related-project links.
            </p>
          </>
        }
      />

      <section className="bg-cream py-[120px] max-[760px]:py-[80px]">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="rich-intro-grid">
            <div>
              <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Event Archive</p>
              <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">A living timeline of the work.</h2>
            </div>
            <div className="rich-intro-copy">
              <p>
                Use the filters to move between documented past events and what
                is coming next.
              </p>
            </div>
          </Reveal>
          <EventArchive />
        </div>
      </section>

      <section className="bg-brand py-[140px] text-white max-[760px]:py-[90px]">
        <Reveal className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] grid grid-cols-[1fr_.6fr] items-center gap-[70px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 [&_.big-quote]:text-[clamp(44px,6vw,92px)] [&_.big-quote]:leading-[.98] [&_.sticker]:mb-8 [&_.sticker]:border-white/30 [&>div:last-child>p]:mb-10 [&>div:last-child>p]:max-w-[380px] [&>div:last-child>p]:text-[20px] [&>div:last-child>p]:leading-[1.4] [&>div:last-child>p]:text-white/80">
          <div className="big-quote font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
            &quot;Words and actions.&quot;
          </div>
          <div>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the ordained life</span>
            <p>
              Events are where Khreeolife&apos;s faith-driven mission becomes
              visible through outreach, education, service and Christian
              mission.
            </p>
            <Link href="/projects" className="btn btn-light">
              See related projects
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
