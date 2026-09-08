"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SidePanel } from "@/components/side-panel";
import { SiteImage } from "@/components/site-image";
import { events, type EventFilter, type SiteEvent } from "@/data/site";

type ArchiveFilter = "all" | EventFilter;

const filters: { label: string; value: ArchiveFilter }[] = [
  { value: "all", label: "All" },
  { value: "past", label: "Past Events" },
  { value: "ongoing", label: "Present / Ongoing" },
  { value: "future", label: "Future Events" },
];

export function EventArchive() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");
  const [selectedEventId, setSelectedEventId] = useState<
    SiteEvent["id"] | null
  >(null);
  const visibleEvents = events.filter(
    (event) => activeFilter === "all" || event.filter === activeFilter,
  );
  const selectedEvent = events.find((event) => event.id === selectedEventId);

  return (
    <>
      <div className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-[26px] flex items-center justify-between gap-[18px] rounded-full border border-ink/18 bg-paper/94 px-[15px] py-[13px] backdrop-blur-[16px] tablet:relative tablet:top-auto tablet:flex-col tablet:items-start tablet:rounded-[20px]">
        <div className="flex flex-wrap gap-[6px]" aria-label="Filter events">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`min-h-8 cursor-pointer rounded-full border border-transparent bg-transparent px-3 text-[10px] font-black tracking-[.04em] hover:border-ink hover:bg-ink hover:text-white ${activeFilter === filter.value ? "border-ink bg-ink text-white" : ""}`}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <span className="pr-2 text-[10px] font-black tracking-[.08em] text-muted uppercase whitespace-nowrap">
          {visibleEvents.length}{" "}
          {visibleEvents.length === 1 ? "event" : "events"}
        </span>
      </div>

      <div className="relative mt-[18px] before:absolute before:top-0 before:bottom-0 before:left-12 before:w-px before:bg-ink before:content-[''] tablet:before:left-6">
        {visibleEvents.length > 0 ? (
          visibleEvents.map((event, index) => (
            <article
              key={event.id}
              className="grid grid-cols-[96px_1fr] gap-7 pb-12 tablet:grid-cols-[48px_1fr] tablet:gap-[14px]"
            >
              <div className="relative z-2 flex w-24 justify-center tablet:w-12">
                <span className="grid size-12 place-items-center rounded-full border border-ink bg-paper text-[10px] font-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                className={`grid min-h-[360px] overflow-hidden rounded-[26px] border border-ink bg-white transition-transform duration-[350ms] hover:translate-x-1.5 hover:[&_img]:scale-[1.035] tablet:grid-cols-1 ${index % 2 === 1 ? "grid-cols-[1.1fr_.9fr] [&_.timeline-image]:order-2 tablet:[&_.timeline-image]:order-0" : "grid-cols-[.9fr_1.1fr]"}`}
              >
                <div className="timeline-image relative overflow-hidden tablet:h-[260px] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-[650ms]">
                  <SiteImage
                    alt={event.imageAlt}
                    sizes="(max-width: 760px) 100vw, 45vw"
                    src={event.image}
                  />
                  <span
                    className={`absolute top-4 left-4 inline-flex rounded-full border border-current bg-paper px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] text-ink uppercase ${event.status === "Future" ? "border-[#28761e] bg-[#e8fbe4] text-[#28761e]" : ""}`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-[34px] [&_h3]:mt-[26px] [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-[clamp(30px,3vw,44px)] [&_h3]:leading-none [&_h3]:font-normal [&_p]:mb-[22px] [&_p]:text-[14px] [&_p]:text-muted">
                  <div className="flex justify-between gap-[15px] text-[9px] tracking-[.07em] text-muted uppercase">
                    <span>{event.project}</span>
                    <span>{event.location}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <button
                    type="button"
                    className="inline-flex self-start items-center gap-[6px] border-0 border-b border-current bg-transparent pb-0.5 text-[11px] font-black cursor-pointer"
                    onClick={() => setSelectedEventId(event.id)}
                  >
                    View event detail{" "}
                    <ArrowRight aria-hidden="true" size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="mb-12 ml-[124px] rounded-2xl border border-ink bg-white p-[34px] text-muted tablet:ml-[62px]">
            No present or ongoing events are documented at this time. Explore
            the past archive or see what is coming next.
          </p>
        )}
      </div>

      <SidePanel
        isOpen={Boolean(selectedEvent)}
        title={selectedEvent?.title ?? "Event detail"}
        onClose={() => setSelectedEventId(null)}
      >
        {selectedEvent ? <EventDetail event={selectedEvent} /> : null}
      </SidePanel>
    </>
  );
}

function EventDetail({ event }: { event: SiteEvent }) {
  return (
    <>
      <div className="relative h-[42vh] min-h-[300px] bg-[#ddd] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
        <SiteImage
          alt={event.imageAlt}
          sizes="min(100vw, 680px)"
          src={event.image}
        />
      </div>
      <div className="p-[42px] tablet:p-7">
        <div className="flex justify-between gap-5 border-b border-ink pb-[14px] text-[10px] tracking-[.08em] uppercase">
          <span>{event.project}</span>
          <span>{event.status}</span>
        </div>
        <h2 className="my-8 mb-5 display-2">
          {event.title}
        </h2>
        <p className="text-[18px] text-[#575057]">{event.description}</p>
        <div className="my-[30px] grid grid-cols-2 gap-2 tablet:grid-cols-1 [&>div]:min-h-[104px] [&>div]:rounded-[12px] [&>div]:border [&>div]:border-ink [&>div]:bg-white [&>div]:p-[18px] [&_strong]:mb-2 [&_strong]:block [&_strong]:font-display [&_strong]:text-[28px] [&_strong]:leading-none [&_strong]:font-normal [&_span]:block [&_span]:text-[11px] [&_span]:text-muted">
          {event.impact.map((item) => (
            <div key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-[30px] flex flex-wrap gap-2">
          <Link
            href="/get-involved"
            className="btn btn-brand"
          >
            Volunteer <ArrowRight aria-hidden="true" size={15} />
          </Link>
          <Link
            href="/donate"
            className="btn btn-outline"
          >
            Donate <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <p className="mt-[30px] text-[11px] leading-[1.55] text-muted">
          Prototype photography is representative; final event detail pages
          should use Khreeolife&apos;s actual event media.
        </p>
      </div>
    </>
  );
}
