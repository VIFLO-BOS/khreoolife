"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/site";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

const filters = [
  "All",
  "Community Development",
  "Education",
  "Missions",
] as const;

function matches(project: Project, filter: (typeof filters)[number]) {
  if (filter === "All") return true;
  if (filter === "Education")
    return project.pillars.some((pillar) => pillar.includes("Education"));
  return project.pillars.some((pillar) => pillar.includes(filter));
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(
    () => projects.filter((project) => matches(project, filter)),
    [filter],
  );

  return (
    <>
      <div className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-7 flex items-center justify-between gap-4 rounded-[22px] border border-ink/20 bg-paper/95 p-3 backdrop-blur-xl max-lg:relative max-lg:top-auto max-lg:flex-col max-lg:items-start">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`leading-control rounded-full border border-ink px-3 py-2 text-[9px] font-black uppercase tracking-[.07em] transition-colors ${filter === item ? "bg-ink text-white" : "hover:bg-brand hover:text-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="pr-2 text-[10px] font-black uppercase tracking-[.08em] text-[#6f6972] leading-caption">
          {visible.length} projects
        </span>
      </div>

      <motion.div
        layout
        className="grid grid-cols-12 auto-rows-[118px] gap-3 max-lg:grid-cols-1 max-lg:auto-rows-auto"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => {
            const layout = [
              "col-span-7 row-span-5",
              "col-span-5 row-span-4",
              "col-span-5 row-span-4",
              "col-span-7 row-span-5",
            ][projects.indexOf(project)];
            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className={`group relative min-h-[470px] overflow-hidden rounded-[28px] border border-ink bg-[#ddd] ${layout} max-lg:col-span-1 max-lg:row-span-1`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between gap-4 text-white">
                  <span
                    className={`status-pill ${project.status === "Upcoming" ? "status-pill-future" : ""}`}
                  >
                    {project.status}
                  </span>
                  <span className="text-right text-[9px] font-black uppercase tracking-[.08em] leading-caption">
                    {project.pillars.join(" · ")}
                  </span>
                </div>
                <div className="absolute inset-x-7 bottom-7 z-10 max-w-[620px] text-white">
                  <span className="text-[10px] font-black tracking-[.1em] leading-caption">
                    0{projects.indexOf(project) + 1}
                  </span>
                  <h3 className="display-title mt-3 text-[clamp(34px,3.6vw,54px)] leading-card">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-[540px] text-sm text-white/75 leading-body">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelected(project)}
                    className="mt-5 rounded-full bg-white px-5 py-3 text-[11px] font-black text-ink transition-colors hover:bg-yellow leading-control"
                  >
                    Read project story ↗
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0 bg-black/60 leading-control"
              onClick={() => setSelected(null)}
              aria-label="Close project details"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.2, 0.75, 0.2, 1] }}
              className="absolute bottom-0 right-0 top-0 w-[min(720px,94vw)] overflow-y-auto bg-paper"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 z-20 grid size-11 place-items-center rounded-full border border-white/70 bg-black/20 text-white leading-control"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
              <div className="relative h-[42vh] min-h-[300px]">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  sizes="720px"
                />
              </div>
              <div className="p-10 max-md:p-7">
                <div className="flex justify-between gap-4 border-b border-ink pb-4 text-[10px] font-black uppercase tracking-[.08em] leading-caption">
                  <span>{selected.pillars.join(" · ")}</span>
                  <span>{selected.status}</span>
                </div>
                <h2 className="display-title mt-8 text-[clamp(42px,5vw,68px)] leading-card">
                  {selected.title}
                </h2>
                <p className="mt-5 text-lg text-[#575057] leading-lead">
                  {selected.description}
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {(
                    selected.impact ?? [
                      { value: selected.status, label: "Project status" },
                      { value: selected.pillars[0], label: "Primary pillar" },
                    ]
                  ).map((impact) => (
                    <div
                      key={impact.label}
                      className="rounded-2xl border border-ink bg-white p-5"
                    >
                      <strong className="block font-display text-3xl font-normal leading-card">
                        {impact.value}
                      </strong>
                      <span className="mt-1 block text-[11px] text-[#6f6972] leading-caption">
                        {impact.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-ink pt-6">
                  <div className="eyebrow mb-4 text-brand">Linked Event</div>
                  <p className="leading-body">{selected.linkedEvent}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <AnimatedButton
                    href="/donate"
                    label="Donate"
                    variant="brand"
                  />
                  <AnimatedButton
                    href="/get-involved"
                    label="Volunteer"
                    variant="outline"
                  />
                </div>
                <p className="mt-8 text-[11px] text-[#6f6972] leading-caption">
                  Prototype photography is representative. Final project media
                  should use Khreeolife&apos;s actual outreach archive.
                </p>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
