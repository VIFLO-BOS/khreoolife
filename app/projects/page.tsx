import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that makes love visible."
        description="Khreeolife's project portfolio is organised around Community Development, Education and Christian Missions."
        image={images.community}
        index="01 — Projects"
        aside={<><span className="sticker">the ordained life</span><p className="mt-5 text-sm text-white/75 leading-body">Each project can expand into its story, impact highlights, media, linked events and clear ways to participate.</p><div className="mt-5"><AnimatedButton href="/get-involved" label="Volunteer with a project" variant="light" /></div></>}
      />

      <section className="section-pad">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Portfolio" title={<>Four documented projects.<br />Three pillars.</>} description="The current architecture defines four projects, each tagged by pillar and status. This page presents them as an editorial portfolio rather than a conventional card wall." /></Reveal>
          <div className="mt-12"><ProjectsExplorer /></div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="How a project is told" title="Story. Evidence. Participation." description="Each detailed project experience follows the same architecture: banner, story, impact highlights, media, linked events and Donate / Volunteer actions." /></Reveal>
          <Reveal className="mt-10 grid grid-cols-4 border-y border-ink max-lg:grid-cols-2 max-md:grid-cols-1">
            {[
              ["01", "Project Story", "The context, purpose and work behind the project."],
              ["02", "Impact Highlights", "Visible outcomes and numbers where documented."],
              ["03", "Photo / Media", "A documentary archive that makes the work tangible."],
              ["04", "Linked Events", "The dates and activities connected to each project."],
            ].map(([n, title, copy], index) => (
              <div key={n} className={`min-h-[230px] p-7 ${index < 3 ? "border-r border-ink max-md:border-r-0" : ""} max-lg:border-b max-lg:[&:nth-last-child(-n+2)]:border-b-0 max-md:border-b`}>
                <span className="text-[10px] font-black text-brand leading-caption">{n}</span><h3 className="mt-10 font-display text-3xl font-normal leading-card">{title}</h3><p className="mt-3 text-sm text-[#6f6972] leading-body">{copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-brand py-24 text-white">
        <Reveal className="site-container grid grid-cols-[1fr_.65fr] items-end gap-20 max-lg:grid-cols-1">
          <div><div className="eyebrow mb-4 text-yellow">Join the work</div><h2 className="display-title text-[clamp(44px,5vw,76px)] leading-section">A project can become your place to serve.</h2></div>
          <div><p className="mb-6 text-[17px] text-white/75 leading-body">Volunteer your time or express sponsorship interest in one of Khreeolife&apos;s projects.</p><AnimatedButton href="/get-involved" label="Get Involved" variant="light" /></div>
        </Reveal>
      </section>
    </>
  );
}
