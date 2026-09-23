"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { events, type SiteEvent } from "@/data/site";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const filters = ["All", "Past", "Present / Ongoing", "Future"] as const;

type Filter = (typeof filters)[number];

function visibleFor(event: SiteEvent, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Present / Ongoing") return false;
  return event.status === filter;
}

export function EventsTimeline() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<SiteEvent | null>(null);
  const visible = useMemo(() => events.filter((event) => visibleFor(event, filter)), [filter]);

  return (
    <>
      <div className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-12 flex items-center justify-between gap-4 rounded-[22px] border border-ink/20 bg-paper/95 p-3 backdrop-blur-xl max-lg:relative max-lg:top-auto max-lg:flex-col max-lg:items-start">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} className={`leading-control rounded-full border border-ink px-3 py-2 text-[9px] font-black uppercase tracking-[.07em] transition-colors ${filter === item ? "bg-ink text-white" : "hover:bg-brand hover:text-white"}`}>{item === "Past" ? "Past Events" : item === "Future" ? "Future Events" : item}</button>
          ))}
        </div>
        <span className="pr-2 text-[10px] font-black uppercase tracking-[.08em] text-[#6f6972] leading-caption">{visible.length} events</span>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-6 top-0 w-px bg-ink max-md:left-4" />
        <AnimatePresence mode="popLayout">
          {visible.map((event, index) => (
            <motion.article
              layout
              key={event.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="relative grid grid-cols-[64px_1fr] gap-6 pb-12 max-md:grid-cols-[36px_1fr] max-md:gap-3"
            >
              <div className="relative z-10 grid size-12 place-items-center rounded-full border border-ink bg-paper text-[10px] font-black max-md:size-8 leading-caption">0{events.indexOf(event) + 1}</div>
              <div className={`card-border grid min-h-[360px] grid-cols-[.9fr_1.1fr] transition-transform hover:translate-x-1.5 max-lg:grid-cols-1 ${index % 2 === 1 ? "lg:grid-cols-[1.1fr_.9fr]" : ""}`}>
                <div className={`relative min-h-[280px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={event.image} alt={event.title} fill className="object-cover transition-transform duration-700 hover:scale-[1.035]" sizes="(max-width:1024px) 100vw, 45vw" />
                  <span className={`absolute left-4 top-4 status-pill ${event.status === "Future" ? "status-pill-future" : ""}`}>{event.status}</span>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <div className="flex justify-between gap-4 text-[9px] font-bold uppercase tracking-[.08em] text-[#6f6972] leading-caption"><span>{event.project}</span><span>{event.location ?? event.date}</span></div>
                  <h3 className="mt-7 font-display text-[clamp(31px,3vw,44px)] font-normal tracking-[-.04em] leading-card">{event.title}</h3>
                  <p className="mt-4 text-sm text-[#6f6972] leading-body">{event.description}</p>
                  <button onClick={() => setSelected(event)} className="mt-6 w-fit border-b border-ink pb-1 text-[11px] font-black leading-control">View event detail ↗</button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
        {filter === "Present / Ongoing" ? (
          <div className="ml-16 rounded-[24px] border border-dashed border-ink p-10 text-center max-md:ml-10">
            <h3 className="font-display text-3xl leading-card">No present / ongoing event is listed in the current architecture.</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-[#6f6972] leading-body">The filter remains available so the page structure is ready when an ongoing event is added.</p>
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/60 leading-control" onClick={() => setSelected(null)} aria-label="Close event details" />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.2, 0.75, 0.2, 1] }} className="absolute bottom-0 right-0 top-0 w-[min(720px,94vw)] overflow-y-auto bg-paper">
              <button onClick={() => setSelected(null)} className="absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full border border-white/70 bg-black/20 text-white leading-control" aria-label="Close"><X className="size-5" /></button>
              <div className="relative h-[42vh] min-h-[300px]"><Image src={selected.image} alt={selected.title} fill className="object-cover" sizes="720px" /></div>
              <div className="p-10 max-md:p-7">
                <div className="flex justify-between gap-4 border-b border-ink pb-4 text-[10px] font-black uppercase tracking-[.08em] leading-caption"><span>{selected.project}</span><span>{selected.status}</span></div>
                <h2 className="display-title mt-8 text-[clamp(42px,5vw,68px)] leading-card">{selected.title}</h2>
                <p className="mt-5 text-lg text-[#575057] leading-lead">{selected.date}{selected.location ? ` · ${selected.location}` : ""}</p>
                <p className="mt-4 text-[15px] text-[#6f6972] leading-body">{selected.description}</p>
                <div className="mt-8 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {(selected.impact ?? [
                    { value: selected.project, label: "Linked project" },
                    { value: selected.status, label: "Timeline status" },
                  ]).map((impact) => (
                    <div key={impact.label} className="rounded-2xl border border-ink bg-white p-5"><strong className="block font-display text-3xl font-normal leading-card">{impact.value}</strong><span className="mt-1 block text-[11px] text-[#6f6972] leading-caption">{impact.label}</span></div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3"><AnimatedButton href="/get-involved" label="Volunteer" variant="brand" /><AnimatedButton href="/donate" label="Donate" variant="outline" /></div>
                <p className="mt-8 text-[11px] text-[#6f6972] leading-caption">Prototype photography is representative. Final event media should use Khreeolife&apos;s actual event archive.</p>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
