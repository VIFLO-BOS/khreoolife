import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CampaignCards } from "@/components/campaign-cards";
import { EventsRail } from "@/components/events-rail";
import { HomeHero } from "@/components/home-hero";
import { PillarRotator } from "@/components/pillar-rotator";
import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import { articles, images, projects } from "@/data/site";

export function HomePage() {
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

  return (
    <main>
      <HomeHero />
      <PillarRotator />

      <section
        className="bg-paper py-[54px] pb-[104px] max-[760px]:pt-[42px] max-[760px]:pb-[82px]"
        aria-labelledby="campaign-title"
      >
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="flex justify-end border-t border-ink max-[760px]:block [&_h2]:w-[58%] [&_h2]:pt-7 [&_h2]:font-display [&_h2]:text-[clamp(42px,5.2vw,75px)] [&_h2]:leading-[.98] [&_h2]:font-normal max-[760px]:[&_h2]:w-full">
            <h2 id="campaign-title">Our Life Campaign</h2>
          </Reveal>
          <CampaignCards />
        </div>
      </section>

      <section
        className="bg-paper py-[58px] pb-[104px] max-[760px]:pt-[46px] max-[760px]:pb-[82px]"
        aria-labelledby="mission-vision-title"
      >
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="grid grid-cols-[42%_58%] items-center gap-10 mb-[34px] before:block before:h-px before:w-full before:bg-ink before:content-[''] max-[1050px]:grid-cols-1 max-[1050px]:gap-[18px] max-[760px]:block max-[760px]:[&_h2]:mb-[18px] max-[760px]:before:mt-[18px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal max-[1050px]:[&_h2]:order-[-1]">
            <h2 id="mission-vision-title">Mission &amp; Vision</h2>
          </Reveal>
          <div className="grid min-h-[650px] grid-cols-[.42fr_.58fr] gap-10 max-[1050px]:min-h-0 max-[1050px]:grid-cols-1 max-[760px]:gap-[14px]">
            <Reveal>
              <article className="border-b border-ink py-[30px] [&_.eyebrow]:mb-[17px] [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-brand [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h3]:mb-3 [&_h3]:max-w-[480px] [&_h3]:font-display [&_h3]:text-[clamp(31px,3.3vw,48px)] [&_h3]:leading-[1.02] [&_h3]:font-normal [&_p:not(.eyebrow)]:max-w-[430px] [&_p:not(.eyebrow)]:text-[15px] [&_p:not(.eyebrow)]:text-[#625b63] [&_.btn]:mt-5 [&_.btn]:opacity-[.45] hover:[&_.btn]:opacity-100 focus-within:[&_.btn]:opacity-100">
                <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">
                  Mission
                </p>
                <h3>
                  Transforming people and communities through the love of God.
                </h3>
                <p>
                  Khreeolife is a faith-based non-profit dedicated to
                  transforming people and communities through the love of God
                  both in words and in deeds.
                </p>
                <Link href="/about" className="btn btn-outline">
                  Our Story ↗
                </Link>
              </article>
              <article className="border-b border-ink py-[30px] [&_.eyebrow]:mb-[17px] [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-brand [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h3]:mb-3 [&_h3]:max-w-[480px] [&_h3]:font-display [&_h3]:text-[clamp(31px,3.3vw,48px)] [&_h3]:leading-[1.02] [&_h3]:font-normal [&_p:not(.eyebrow)]:max-w-[430px] [&_p:not(.eyebrow)]:text-[15px] [&_p:not(.eyebrow)]:text-[#625b63] [&_.btn]:mt-5 [&_.btn]:opacity-[.45] hover:[&_.btn]:opacity-100 focus-within:[&_.btn]:opacity-100">
                <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">
                  Vision
                </p>
                <h3>
                  The Ordained Life — expressed through people, community and
                  service.
                </h3>
                <p>
                  What Khreeolife believes and strives toward is expressed
                  through its three pillars: Community Development, Education
                  and Christian Missions.
                </p>
                <Link href="/projects" className="btn btn-outline">
                  See The Work ↗
                </Link>
              </article>
            </Reveal>
            <Reveal className="relative grid min-h-[610px] place-items-center max-[760px]:min-h-[430px]">
              <div className="relative grid w-[min(520px,90%)] aspect-square place-items-center rounded-full border border-ink">
                <div className="relative h-[76%] w-[76%] overflow-hidden rounded-full shadow-[0_16px_50px_rgb(0_0_0_/_15%)] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:animate-[mission-photo-zoom_9s_ease-in-out_infinite_alternate]">
                  <SiteImage
                    alt="Community members gathered together"
                    sizes="(max-width: 760px) 72vw, 400px"
                    src={images.community}
                  />
                </div>
                <span
                  className="absolute top-1/2 left-1/2 grid size-[86px] m-[-43px] place-items-center rounded-brand border border-ink bg-yellow font-display text-[30px] animate-[mission-orbit_14s_linear_infinite] max-[760px]:hidden"
                  aria-hidden="true"
                >
                  ee
                </span>
              </div>
              <span className="absolute right-[8%] bottom-[16%] rounded-full bg-brand px-[14px] py-2.5 text-[10px] font-black tracking-[.08em] text-white uppercase max-[760px]:right-[2%] max-[760px]:bottom-[8%]">
                A life of faith in action
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-[108px] max-[760px]:py-[76px]"
        aria-labelledby="featured-projects-title"
      >
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="mb-[38px] flex items-end justify-between gap-10 max-[760px]:grid max-[760px]:grid-cols-1 max-[760px]:items-start max-[760px]:gap-6 [&_.eyebrow]:mb-[14px] [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-brand [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal max-[760px]:[&_h2]:text-[clamp(38px,11vw,52px)] [&>div:last-child]:max-w-[470px] max-[760px]:[&>div:last-child]:max-w-full [&>div:last-child>p]:text-[14px] [&>div:last-child>p]:text-muted [&_.btn]:mt-[21px]">
            <div>
              <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">
                Featured Projects
              </p>
              <h2
                id="featured-projects-title"
                className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal"
              >
                Documented work.
                <br />
                Visible impact.
              </h2>
            </div>
            <div>
              <p>
                Selected active and notable projects from across
                Khreeolife&apos;s three core pillars.
              </p>
              <Link href="/projects" className="btn btn-dark">
                View All Projects ↗
              </Link>
            </div>
          </Reveal>
          <Reveal className="grid grid-cols-[1.15fr_.85fr] gap-3 max-[1050px]:grid-cols-1">
            <article className="relative min-h-[610px] overflow-hidden rounded-brand border border-ink text-white max-[760px]:min-h-[500px]">
              <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
                <SiteImage
                  alt="Iloba Outreach"
                  sizes="(max-width: 1050px) 100vw, 62vw"
                  src={images.homeHeroSecond}
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 bg-[linear-gradient(0deg,rgb(10_7_11_/_88%),transparent)] px-[30px] pt-[95px] pb-7">
                <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">
                  Community Development · Past
                </span>
                <h3>{featuredProject.title}</h3>
                <p>
                  Serving the Iloba community through practical outreach and
                  development initiatives.
                </p>
              </div>
            </article>
            <div className="grid gap-3 max-[1050px]:grid-cols-3 max-[760px]:grid-cols-1">
              {remainingProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex min-h-[194px] items-end overflow-hidden rounded-brand border border-ink bg-white p-6 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-[5px] hover:shadow-[0_18px_42px_rgb(18_17_19_/_10%)] first:bg-cream nth-[2]:bg-soft-purple max-[1050px]:min-h-[220px] max-[760px]:min-h-[180px]"
                >
                  <div>
                    <span
                      className={`inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase ${project.status === "Upcoming" ? "border-[#28761e] bg-[#e8fbe4] text-[#28761e]" : ""}`}
                    >
                      {project.status}
                    </span>
                    <h3 className="my-[13px] mb-1.5 font-display text-[clamp(26px,2.5vw,38px)] leading-none font-normal">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-muted">{project.pillar}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <EventsRail />

      <section
        className="bg-white py-[108px] max-[760px]:py-[76px]"
        aria-labelledby="stories-title"
      >
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="mb-[38px] flex items-end justify-between gap-10 max-[760px]:grid max-[760px]:grid-cols-1 max-[760px]:items-start max-[760px]:gap-6 [&_.eyebrow]:mb-[14px] [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-brand [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal max-[760px]:[&_h2]:text-[clamp(38px,11vw,52px)]">
            <div>
              <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">
                Blog / Magazine
              </p>
              <h2
                id="stories-title"
                className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal"
              >
                Stories from
                <br />
                the field.
              </h2>
            </div>
            <Link href="/blog" className="btn btn-dark">
              Open Magazine ↗
            </Link>
          </Reveal>
          <Reveal className="grid grid-cols-12 gap-3 max-[760px]:grid-cols-1">
            <article className="group relative col-[1/7] row-[1/3] min-h-[672px] overflow-hidden rounded-brand border border-ink max-[760px]:col-auto max-[760px]:row-auto max-[760px]:min-h-[520px]">
              <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
                <SiteImage
                  alt="Young volunteers serving their community in Ghana"
                  sizes="(max-width: 760px) 100vw, 52vw"
                  src={images.youthMappers}
                />
              </div>
              <div className="absolute right-[18px] bottom-[18px] left-[18px] z-1 max-w-[530px] rounded-2xl bg-paper/94 p-[17px] text-ink">
                <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">
                  Community Story
                </span>
                <h3>Young people choosing service</h3>
                <p>
                  How community participation becomes practical transformation.
                </p>
              </div>
            </article>
            <article className="group relative col-[7/13] min-h-[330px] overflow-hidden rounded-brand border border-ink max-[760px]:col-auto max-[760px]:min-h-[390px]">
              <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
                <SiteImage
                  alt="Students participating in class"
                  sizes="(max-width: 760px) 100vw, 46vw"
                  src={images.students}
                />
              </div>
              <div className="absolute right-[18px] bottom-[18px] left-[18px] z-1 rounded-2xl bg-paper/94 p-[17px] text-ink">
                <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">
                  Education
                </span>
                <h3>Opportunity starts with exposure</h3>
              </div>
            </article>
            <article className="group relative col-[7/10] min-h-[330px] overflow-hidden rounded-brand border border-ink max-[760px]:col-auto max-[760px]:min-h-[390px]">
              <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
                <SiteImage
                  alt="Community education meeting"
                  sizes="(max-width: 760px) 100vw, 26vw"
                  src={images.communityEducation}
                />
              </div>
              <div className="absolute right-[18px] bottom-[18px] left-[18px] z-1 rounded-2xl bg-paper/94 p-[17px] text-ink">
                <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">
                  Field Note
                </span>
                <h3>Listening before building.</h3>
                <p>
                  Why community development begins with the people already
                  there.
                </p>
              </div>
            </article>
            <article className="group relative col-[10/13] min-h-[330px] overflow-hidden rounded-brand border border-ink max-[760px]:col-auto max-[760px]:min-h-[390px]">
              <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02] [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
                <SiteImage
                  alt="Christian worship gathering"
                  sizes="(max-width: 760px) 100vw, 26vw"
                  src={
                    articles.find((article) => article.id === "love-coverage")
                      ?.image ?? images.worship
                  }
                />
              </div>
              <div className="absolute right-[18px] bottom-[18px] left-[18px] z-1 rounded-2xl bg-paper/94 p-[17px] text-ink">
                <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">
                  Christian Missions
                </span>
                <h3>Faith in action.</h3>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-brand py-[108px] text-white after:absolute after:right-[-60px] after:bottom-[-145px] after:text-[380px] after:font-black after:tracking-[-55px] after:text-white after:opacity-[.055] after:content-['ee'] max-[760px]:py-[76px]"
        aria-labelledby="join-title"
      >
        <Reveal className="relative z-1 mx-auto grid w-[min(var(--max-width),calc(100%_-_64px))] grid-cols-[1fr_auto] items-end gap-[50px] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:grid-cols-1 max-[760px]:items-start max-[760px]:gap-6 max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] [&_.eyebrow]:mb-[14px] [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-yellow [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h2]:max-w-[850px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal [&_p:not(.eyebrow)]:mt-5 [&_p:not(.eyebrow)]:max-w-[650px] [&_p:not(.eyebrow)]:text-[17px] [&_p:not(.eyebrow)]:text-white/74 max-[760px]:[&_h2]:text-[clamp(38px,11vw,52px)]">
          <div>
            <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-yellow uppercase before:h-px before:w-6 before:bg-current before:content-['']">
              Volunteer &amp; Sponsor
            </p>
            <h2
              id="join-title"
              className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal"
            >
              Take your place in the next transformation.
            </h2>
            <p>
              Volunteer in transformational outreaches or partner with
              Khreeolife as a sponsor.
            </p>
          </div>
          <Link href="/get-involved" className="btn btn-light">
            Get Involved <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
