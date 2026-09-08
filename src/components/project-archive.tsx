"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SidePanel } from "@/components/side-panel";
import { SiteImage } from "@/components/site-image";
import { projects, type Project, type ProjectCategory } from "@/data/site";

type ProjectFilter = "all" | ProjectCategory;

const filters: { label: string; value: ProjectFilter }[] = [
  { value: "all", label: "All" },
  { value: "community", label: "Community Development" },
  { value: "education", label: "Education" },
  { value: "missions", label: "Missions" },
];

export function ProjectArchive() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<
    Project["id"] | null
  >(null);
  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.categories.includes(activeFilter),
  );
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  return (
    <>
      <div className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-[26px] flex items-center justify-between gap-[18px] rounded-full border border-ink/18 bg-paper/94 px-[15px] py-[13px] backdrop-blur-[16px] tablet:relative tablet:top-auto tablet:flex-col tablet:items-start tablet:rounded-[20px]">
        <div className="flex flex-wrap gap-[6px]" aria-label="Filter projects">
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
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div
        className={`grid grid-cols-12 auto-rows-[118px] gap-3 laptop:grid-cols-1 laptop:auto-rows-auto ${activeFilter === "all" ? "" : "grid-cols-1 auto-rows-auto"}`}
      >
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className={[
              "relative min-h-[480px] overflow-hidden rounded-[28px] border border-ink bg-[#ddd] hover:[&_img]:scale-[1.045] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-[800ms] [&_img]:[transition-timing-function:cubic-bezier(.2,.75,.2,1)] laptop:min-h-[520px] tablet:min-h-[470px]",
              project.id === "iloba"
                ? "col-[1/8] row-[1/6] laptop:col-auto laptop:row-auto"
                : "",
              project.id === "uni"
                ? "col-[8/13] row-[1/5] laptop:col-auto laptop:row-auto"
                : "",
              project.id === "love"
                ? "col-[1/6] row-[6/10] laptop:col-auto laptop:row-auto"
                : "",
              project.id === "ibadan"
                ? "col-[6/13] row-[5/10] laptop:col-auto laptop:row-auto"
                : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="absolute inset-0">
              <SiteImage
                alt={project.imageAlt}
                sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 48vw"
                src={project.image}
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(10_7_11_/_86%),rgb(10_7_11_/_6%)_66%)]" />
            <div className="absolute top-5 right-5 left-5 z-2 flex items-center justify-between gap-5 text-[9px] tracking-[.08em] text-white uppercase">
              <span
                className={`inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase ${project.status === "Upcoming" ? "border-[#28761e] bg-[#e8fbe4] text-[#28761e]" : ""}`}
              >
                {project.status}
              </span>
              <span>{project.pillar}</span>
            </div>
            <div className="absolute right-[26px] bottom-[26px] left-[26px] z-2 max-w-[560px] text-white [&_.project-no]:text-[10px] [&_.project-no]:font-black [&_.project-no]:tracking-[.1em] [&_h3]:my-2.5 [&_h3]:font-display [&_h3]:text-[clamp(31px,3vw,50px)] [&_h3]:leading-none [&_h3]:font-normal [&_p]:max-w-[500px] [&_p]:text-[13px] [&_p]:text-white/74]">
              <span className="project-no">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                type="button"
                className="mt-[14px] btn btn-light"
                onClick={() => setSelectedProjectId(project.id)}
              >
                {project.status === "Upcoming"
                  ? "View upcoming project"
                  : "Read project story"}
                <ArrowRight aria-hidden="true" size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <SidePanel
        isOpen={Boolean(selectedProject)}
        title={selectedProject?.title ?? "Project detail"}
        onClose={() => setSelectedProjectId(null)}
      >
        {selectedProject ? <ProjectDetail project={selectedProject} /> : null}
      </SidePanel>
    </>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="relative h-[42vh] min-h-[300px] bg-[#ddd] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
        <SiteImage
          alt={project.imageAlt}
          sizes="min(100vw, 680px)"
          src={project.image}
        />
      </div>
      <div className="p-[42px] tablet:p-7">
        <div className="flex justify-between gap-5 border-b border-ink pb-[14px] text-[10px] tracking-[.08em] uppercase">
          <span>{project.pillar}</span>
          <span>{project.status}</span>
        </div>
        <h2 className="my-8 mb-5 display-2">
          {project.title}
        </h2>
        <p className="text-[18px] text-[#575057]">{project.story}</p>
        <div className="my-[30px] grid grid-cols-2 gap-2 tablet:grid-cols-1 [&>div]:min-h-[104px] [&>div]:rounded-[12px] [&>div]:border [&>div]:border-ink [&>div]:bg-white [&>div]:p-[18px] [&_strong]:mb-2 [&_strong]:block [&_strong]:font-display [&_strong]:text-[28px] [&_strong]:leading-none [&_strong]:font-normal [&_span]:block [&_span]:text-[11px] [&_span]:text-muted">
          {project.impact.map((item) => (
            <div key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-7 border-t border-ink pt-[22px]">
          <p className="eyebrow">Linked event</p>
          <p>{project.event}</p>
        </div>
        <div className="mt-[30px] flex flex-wrap gap-2">
          <Link
            href="/donate"
            className="btn btn-brand"
          >
            Donate <ArrowRight aria-hidden="true" size={15} />
          </Link>
          <Link
            href="/get-involved"
            className="btn btn-outline"
          >
            Volunteer <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <p className="mt-[30px] text-[11px] leading-[1.55] text-muted">
          Prototype photography is representative; final project media should
          use Khreeolife&apos;s actual outreach archive.
        </p>
      </div>
    </>
  );
}
