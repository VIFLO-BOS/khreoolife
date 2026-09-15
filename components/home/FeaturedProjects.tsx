import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/site";

export function FeaturedProjects() {
  const [main, ...rest] = projects;
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title={
              <>
                <span>Documented work.</span>
                <br />
                <span>Visible impact.</span>
              </>
            }
            description="Selected projects from across Khreeolife's three core pillars."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-[1.15fr_.85fr] gap-3 max-lg:grid-cols-1">
          <Reveal className="relative min-h-[610px] overflow-hidden rounded-[26px] border border-ink text-white">
            <Image
              src={main.image}
              alt={main.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.035]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-8">
              <span className="pill-tag">
                {main.pillars.join(" · ")} · {main.status}
              </span>
              <h3 className="display-title mt-4 text-[clamp(38px,4vw,56px)]">
                {main.title}
              </h3>
              <p className="mt-3 max-w-[560px] text-sm leading-6 text-white/75">
                {main.description}
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={0.06 * index}>
                <Link
                  href="/projects"
                  className={`card-border flex min-h-[190px] flex-col justify-between p-6 transition-transform hover:-translate-y-1 ${index === 1 ? "bg-cream" : index === 2 ? "bg-brand-soft" : "bg-white"}`}
                >
                  <span
                    className={`status-pill w-fit ${project.status === "Upcoming" ? "status-pill-future" : ""}`}
                  >
                    {project.status}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(26px,2.2vw,34px)] font-normal tracking-[-.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#6f6972]">
                      {project.pillars.join(" · ")}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <AnimatedButton
            href="/projects"
            label="View All Projects"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
