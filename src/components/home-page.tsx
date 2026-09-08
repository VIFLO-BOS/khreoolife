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
        className="bg-paper py-section-enter pb-section-end tablet:pt-[42px] tablet:pb-[82px]"
        aria-labelledby="campaign-title"
      >
        <div className="container-page">
          <Reveal className="flex justify-end border-t border-ink tablet:block [&_h2]:w-[58%] [&_h2]:pt-7 [&_h2]:font-display [&_h2]:text-[clamp(42px,5.2vw,75px)] [&_h2]:leading-[.98] [&_h2]:font-normal tablet:[&_h2]:w-full">
            <h2 id="campaign-title">Our Life Campaign</h2>
          </Reveal>
          <CampaignCards />
        </div>
      </section>

      <section
        className="bg-paper py-section-enter pb-section-end tablet:pt-[46px] tablet:pb-[82px]"
        aria-labelledby="mission-vision-title"
      >
        <div className="container-page">
          <Reveal className="grid grid-cols-[42%_58%] items-center gap-10 mb-[34px] before:block before:h-px before:w-full before:bg-ink before:content-[''] laptop:grid-cols-1 laptop:gap-[18px] tablet:block tablet:[&_h2]:mb-[18px] tablet:before:mt-[18px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal laptop:[&_h2]:order-[-1]">
            <h2 id="mission-vision-title">Mission &amp; Vision</h2>
          </Reveal>
          <div className="grid min-h-[650px] grid-cols-[.42fr_.58fr] gap-10 laptop:min-h-0 laptop:grid-cols-1 tablet:gap-[14px]">
            <Reveal>
              <article className="border-b border-ink py-[30px] [&_h3]:mb-3 [&_h3]:max-w-[480px] [&_h3]:font-display [&_h3]:text-[clamp(31px,3.3vw,48px)] [&_h3]:leading-[1.02] [&_h3]:font-normal [&_p:not(.eyebrow)]:max-w-[430px] [&_p:not(.eyebrow)]:text-[15px] [&_p:not(.eyebrow)]:text-[#625b63] [&_.btn]:mt-5 [&_.btn]:opacity-[.45] hover:[&_.btn]:opacity-100 focus-within:[&_.btn]:opacity-100">
                <p className="eyebrow">
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
              <article className="border-b border-ink py-[30px] [&_h3]:mb-3 [&_h3]:max-w-[480px] [&_h3]:font-display [&_h3]:text-[clamp(31px,3.3vw,48px)] [&_h3]:leading-[1.02] [&_h3]:font-normal [&_p:not(.eyebrow)]:max-w-[430px] [&_p:not(.eyebrow)]:text-[15px] [&_p:not(.eyebrow)]:text-[#625b63] [&_.btn]:mt-5 [&_.btn]:opacity-[.45] hover:[&_.btn]:opacity-100 focus-within:[&_.btn]:opacity-100">
                <p className="eyebrow">
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
            <Reveal className="relative grid min-h-[610px] place-items-center tablet:min-h-[430px]">
              <div className="relative grid w-[min(520px,90%)] aspect-square place-items-center rounded-full border border-ink">
                <div className="relative h-[76%] w-[76%] overflow-hidden rounded-full shadow-float photo [&_img]:animate-[mission-photo-zoom_9s_ease-in-out_infinite_alternate]">
                  <SiteImage
                    alt="Community members gathered together"
                    sizes="(max-width: 760px) 72vw, 400px"
                    src={images.community}
                  />
                </div>
                <span
                  className="absolute top-1/2 left-1/2 grid size-[86px] m-[-43px] place-items-center rounded-brand border border-ink bg-yellow font-display text-[30px] animate-[mission-orbit_14s_linear_infinite] tablet:hidden"
                  aria-hidden="true"
                >
                  ee
                </span>
              </div>
              <span className="absolute right-[8%] bottom-[16%] rounded-full bg-brand px-[14px] py-2.5 text-[10px] font-black tracking-[.08em] text-white uppercase tablet:right-[2%] tablet:bottom-[8%]">
                A life of faith in action
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="seam-top bg-white py-section tablet:py-section-mobile"
        aria-labelledby="featured-projects-title"
      >
        <div className="container-page">
          <Reveal className="mb-[38px] flex items-end justify-between gap-10 tablet:grid tablet:grid-cols-1 tablet:items-start tablet:gap-6 [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal tablet:[&_h2]:text-[clamp(38px,11vw,52px)] [&>div:last-child]:max-w-[470px] tablet:[&>div:last-child]:max-w-full [&>div:last-child>p]:text-[14px] [&>div:last-child>p]:text-muted [&_.btn]:mt-[21px]">
            <div>
              <p className="eyebrow">
                Featured Projects
              </p>
              <h2
                id="featured-projects-title"
                className="display-2"
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
          <Reveal className="grid grid-cols-[1.15fr_.85fr] gap-3 laptop:grid-cols-1">
            <article className="relative min-h-[610px] overflow-hidden rounded-brand border border-ink text-white tablet:min-h-[500px]">
              <div className="absolute inset-0 photo">
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
            <div className="grid gap-3 laptop:grid-cols-3 tablet:grid-cols-1">
              {remainingProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex min-h-[194px] items-end overflow-hidden rounded-brand border border-ink bg-white p-6 transition-[transform,box-shadow] duration-(--duration-panel) hover:-translate-y-[5px] hover:shadow-card first:bg-cream nth-[2]:bg-soft-purple laptop:min-h-[220px] tablet:min-h-[180px]"
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
        className="seam-top bg-white py-section tablet:py-section-mobile"
        aria-labelledby="stories-title"
      >
        <div className="container-page">
          <Reveal className="mb-[38px] flex items-end justify-between gap-10 tablet:grid tablet:grid-cols-1 tablet:items-start tablet:gap-6 [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal tablet:[&_h2]:text-[clamp(38px,11vw,52px)]">
            <div>
              <p className="eyebrow">
                Blog / Magazine
              </p>
              <h2
                id="stories-title"
                className="display-2"
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
          <Reveal className="grid grid-cols-12 gap-3 tablet:grid-cols-1">
            <article className="group relative col-[1/7] row-[1/3] min-h-[672px] overflow-hidden rounded-brand border border-ink tablet:col-auto tablet:row-auto tablet:min-h-[520px]">
              <div className="absolute inset-0 photo [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
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
            <article className="group relative col-[7/13] min-h-[330px] overflow-hidden rounded-brand border border-ink tablet:col-auto tablet:min-h-[390px]">
              <div className="absolute inset-0 photo [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
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
            <article className="group relative col-[7/10] min-h-[330px] overflow-hidden rounded-brand border border-ink tablet:col-auto tablet:min-h-[390px]">
              <div className="absolute inset-0 photo [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
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
            <article className="group relative col-[10/13] min-h-[330px] overflow-hidden rounded-brand border border-ink tablet:col-auto tablet:min-h-[390px]">
              <div className="absolute inset-0 photo [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.025]">
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
        className="relative overflow-hidden bg-brand py-[108px] text-white after:absolute after:right-[-60px] after:bottom-[-145px] after:text-[380px] after:font-black after:tracking-[-55px] after:text-white after:opacity-[.055] after:content-['ee'] tablet:py-section-mobile"
        aria-labelledby="join-title"
      >
        <Reveal className="relative z-1 container-page grid grid-cols-[1fr_auto] items-end gap-[50px] tablet:grid-cols-1 tablet:items-start tablet:gap-6 [&_h2]:max-w-[850px] [&_h2]:font-display [&_h2]:text-[clamp(42px,5vw,74px)] [&_h2]:leading-[.98] [&_h2]:font-normal [&_p:not(.eyebrow)]:mt-5 [&_p:not(.eyebrow)]:max-w-[650px] [&_p:not(.eyebrow)]:text-[17px] [&_p:not(.eyebrow)]:text-white/74 tablet:[&_h2]:text-[clamp(38px,11vw,52px)]">
          <div>
            <p className="eyebrow text-yellow">
              Volunteer &amp; Sponsor
            </p>
            <h2
              id="join-title"
              className="display-2"
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
