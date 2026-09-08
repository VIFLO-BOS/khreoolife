import type { Metadata } from "next";
import Link from "next/link";

import { ProjectArchive } from "@/components/project-archive";
import { Reveal } from "@/components/reveal";
import { RichHero } from "@/components/rich-hero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Khreeolife's Community Development, Education and Christian Missions projects.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <RichHero
        className="[&_h1]:max-w-[700px]"
        eyebrow="Projects"
        image={images.community}
        imageAlt="Community members together"
        index="01 - Projects"
        title="Work that makes love visible."
        description="Khreeolife's project portfolio is organised around Community Development, Education and Christian Missions."
        aside={
          <>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the ordained life</span>
            <p>
              Every project can grow into a full story with impact highlights,
              media, linked events and clear ways to participate.
            </p>
            <Link href="/get-involved" className="btn btn-light">
              Volunteer with a project
            </Link>
          </>
        }
      />

      <section className="py-[120px] tablet:py-[80px] bg-white">
        <div className="container-page">
          <Reveal className="rich-intro-grid">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="display-2">
                Four documented projects.
                <br />
                Three pillars.
              </h2>
            </div>
            <div className="rich-intro-copy">
              <p>
                The architecture defines four current projects, each tagged by
                pillar and status. This inventory is presented as an editorial
                portfolio rather than a conventional card wall.
              </p>
            </div>
          </Reveal>
          <ProjectArchive />
        </div>
      </section>

      <section className="bg-cream py-[120px] tablet:py-[80px]">
        <div className="container-page">
          <Reveal className="mb-[60px] grid grid-cols-[1fr_.55fr] items-end gap-[60px] laptop:grid-cols-1 laptop:gap-6 [&>p]:max-w-[460px] [&>p]:text-[16px] [&>p]:text-muted">
            <div>
              <p className="eyebrow">How a project is told</p>
              <h2 className="display-2">Story. Evidence. Participation.</h2>
            </div>
            <p>
              Each project detail experience is structured around the same
              architecture: a banner, full story, impact highlights, media,
              linked events and Donate or Volunteer actions.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            <article className="flex min-h-[300px] flex-1 basis-[240px] flex-col rounded-[24px] border border-ink bg-white p-[34px] tablet:min-h-auto [&>span]:mb-auto [&>span]:font-display [&>span]:text-[42px] [&>span]:text-ink/20 tablet:[&>span]:mb-8 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
              <span>01</span>
              <h3>Project Story</h3>
              <p>The context, purpose and work behind the project.</p>
            </article>
            <article className="flex min-h-[300px] flex-1 basis-[240px] flex-col rounded-[24px] border border-ink bg-white p-[34px] tablet:min-h-auto [&>span]:mb-auto [&>span]:font-display [&>span]:text-[42px] [&>span]:text-ink/20 tablet:[&>span]:mb-8 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
              <span>02</span>
              <h3>Impact Highlights</h3>
              <p>Visible outcomes and numbers where documented.</p>
            </article>
            <article className="flex min-h-[300px] flex-1 basis-[240px] flex-col rounded-[24px] border border-ink bg-white p-[34px] tablet:min-h-auto [&>span]:mb-auto [&>span]:font-display [&>span]:text-[42px] [&>span]:text-ink/20 tablet:[&>span]:mb-8 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
              <span>03</span>
              <h3>Photo / Media</h3>
              <p>A documentary archive that makes the work tangible.</p>
            </article>
            <article className="flex min-h-[300px] flex-1 basis-[240px] flex-col rounded-[24px] border border-ink bg-white p-[34px] tablet:min-h-auto [&>span]:mb-auto [&>span]:font-display [&>span]:text-[42px] [&>span]:text-ink/20 tablet:[&>span]:mb-8 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
              <span>04</span>
              <h3>Linked Events</h3>
              <p>The dates and activities connected to each project.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep py-[130px] text-white tablet:py-[90px]">
        <Reveal className="container-page grid grid-cols-[1fr_.7fr] items-center gap-[60px] laptop:grid-cols-1 laptop:gap-10 [&>div:last-child>p]:mb-10 [&>div:last-child>p]:max-w-[380px] [&>div:last-child>p]:text-[20px] [&>div:last-child>p]:leading-[1.4] [&>div:last-child>p]:text-white/70">
          <div>
            <p className="eyebrow">Join the work</p>
            <h2 className="display-2">
              A project can become your place to serve.
            </h2>
          </div>
          <div>
            <p>
              Volunteer your time or express sponsorship interest in one of
              Khreeolife&apos;s projects.
            </p>
            <Link href="/get-involved" className="inline-flex cursor-pointer items-center overflow-hidden rounded-full border border-white bg-white font-black tracking-[.04em] text-ink transition-transform duration-(--duration-panel) hover:-translate-y-1 hover:[&_.circle]:bg-brand hover:[&_.circle]:text-white hover:[&_.label]:text-brand">
              <span className="label">Get Involved</span>
              <span className="circle" aria-hidden="true">
                +
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
