import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import { images, pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Khreeolife, its faith-driven mission and the people carrying its vision.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-[92svh] bg-[#000] max-[760px]:min-h-[800px]">
        <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-50">
          <SiteImage
            alt="People together in community"
            priority
            sizes="100vw"
            src={images.community}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(0_0_0_/_82%),transparent_45%)]" />
        <Reveal className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] absolute right-0 bottom-0 left-0 z-1 pb-[120px] text-white [&_.eyebrow]:text-yellow [&_h1]:my-4 [&_h1]:max-w-[890px] [&_p:not(.eyebrow)]:max-w-[500px] [&_p:not(.eyebrow)]:text-[clamp(17px,1.5vw,20px)] [&_p:not(.eyebrow)]:text-white/80 max-[760px]:pb-[90px]">
          <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Khreeolife - The Ordained Life</p>
          <h1 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
            A gospel-centered organisation built around love becoming action.
          </h1>
          <p>
            Dedicated to reflecting Jesus Christ&apos;s love through words and
            actions.
          </p>
        </Reveal>
        <div className="absolute bottom-6 flex w-full justify-between px-8 text-[9px] font-black tracking-[.18em] text-white/50 uppercase max-[760px]:hidden" aria-label="Khreeolife focus areas">
          <span>The Ordained Life</span>
          <span>Community Development</span>
          <span>Education</span>
          <span>Christian Missions</span>
        </div>
      </section>

      <section className="bg-white py-[120px] max-[760px]:py-[80px]">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] grid grid-cols-[1.2fr_.8fr] gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10">
          <Reveal className="[&_.display]:my-5">
            <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Our Story</p>
            <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">Why Khreeolife exists.</h2>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the ordained life</span>
          </Reveal>
          <Reveal className="grid gap-6 pt-2">
            <p className="font-display text-[26px] leading-[1.3] text-ink">
              Khreeolife is a gospel-centered organization dedicated to
              reflecting Jesus Christ&apos;s love through words and actions.
            </p>
            <p>
              The website architecture expands that purpose into a faith-based
              non-profit mission: transforming people and communities through
              the love of God both in words and in deeds.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand py-[140px] text-white max-[760px]:py-[90px]">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="grid grid-cols-[.4fr_1fr] items-center gap-10 border-b border-white/20 py-[45px] first:pt-0 last:border-b-0 last:pb-0 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:py-8 [&>span]:text-[13px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase">
            <span>Our motto</span>
            <strong className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">The Ordained Life.</strong>
          </Reveal>
          <Reveal className="grid grid-cols-[.4fr_1fr] items-center gap-10 border-b border-white/20 py-[45px] first:pt-0 last:border-b-0 last:pb-0 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:py-8 [&>span]:text-[13px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase">
            <span>Our mission</span>
            <strong className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
              Transform people and communities through the love of God.
            </strong>
          </Reveal>
          <Reveal className="grid grid-cols-[.4fr_1fr] items-center gap-10 border-b border-white/20 py-[45px] first:pt-0 last:border-b-0 last:pb-0 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:py-8 [&>span]:text-[13px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase">
            <span>Our expression</span>
            <strong className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">Words and deeds.</strong>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-deep text-white [&_.rich-intro-copy]:border-white/20 [&_.rich-intro-copy_p]:text-white/70 py-[120px] max-[760px]:py-[80px]">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="rich-intro-grid">
            <div>
              <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Our Three Pillars</p>
              <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
                One mission.
                <br />
                Three expressions.
              </h2>
            </div>
            <div className="rich-intro-copy">
              <p>
                The pillars organise Khreeolife&apos;s work and define the types
                of projects visitors can explore, support or serve in.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.name}
                className={`about-pillar-panel pillar-${index + 1}`}
              >
                <div className="relative [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
                  <SiteImage
                    alt={pillar.images[0].alt}
                    sizes="(max-width: 760px) 100vw, 47vw"
                    src={pillar.images[0].src}
                  />
                </div>
                <div className="flex flex-col justify-center p-[5vw] max-[1050px]:p-[40px] [&>span]:mb-auto [&>span]:text-[12px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase [&_h3]:mb-4 [&_h3]:font-display [&_h3]:text-[clamp(32px,3.5vw,48px)] [&_h3]:leading-none [&_h3]:font-normal [&_p]:max-w-[480px] [&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:text-white/70">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{pillar.heading}</h3>
                  <p>{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-[120px] max-[760px]:py-[80px]">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <Reveal className="mb-[60px] grid grid-cols-[1fr_.55fr] items-end gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-6 [&>p]:max-w-[460px] [&>p]:text-[16px] [&>p]:text-muted">
            <div>
              <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Meet The Team</p>
              <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">People carrying the vision.</h2>
            </div>
            <p>
              The current architecture names two team members, with room for
              additional profiles in future phases.
            </p>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
            <Reveal className="flex min-h-[380px] flex-col rounded-[24px] border border-ink bg-white p-[34px] max-[760px]:min-h-[340px]">
              <div className="mb-auto grid size-[85px] place-items-center rounded-full bg-[#e8e4db] [&_img]:rounded-full [&_img]:object-cover font-display text-[32px] text-ink">OT</div>
              <div className="[&>span]:mb-2 [&>span]:block [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-brand [&>span]:uppercase [&_h3]:mb-1.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
                <span>Founder</span>
                <h3>Olabiwonninu Temiloluwa</h3>
                <p>Founder of Khreeolife.</p>
              </div>
            </Reveal>
            <Reveal className="flex min-h-[380px] flex-col rounded-[24px] border border-ink bg-white p-[34px] max-[760px]:min-h-[340px]">
              <div className="mb-auto grid size-[85px] place-items-center rounded-full bg-brand text-white [&_img]:rounded-full [&_img]:object-cover font-display text-[32px]">
                AA
              </div>
              <div className="[&>span]:mb-2 [&>span]:block [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-brand [&>span]:uppercase [&_h3]:mb-1.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
                <span>Team Member</span>
                <h3>Alimi AbdulWasiu</h3>
                <p>Khreeolife team member.</p>
              </div>
            </Reveal>
            <Reveal className="flex min-h-[380px] flex-col rounded-[24px] border border-dashed border-ink bg-transparent p-[34px] max-[760px]:min-h-[340px]">
              <div className="mb-auto grid size-[85px] place-items-center rounded-full border border-dashed border-ink/40 text-[24px] text-ink/40" aria-hidden="true">
                +
              </div>
              <div className="[&>span]:mb-2 [&>span]:block [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-brand [&>span]:uppercase [&_h3]:mb-1.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted">
                <span>Future Phase</span>
                <h3>More team profiles</h3>
                <p>The team section can expand as the organisation grows.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-deep py-[110px] text-white max-[760px]:py-[80px]">
        <Reveal className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] grid grid-cols-[1fr_.7fr] items-center gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 [&_.eyebrow]:mb-5 [&_.eyebrow]:text-yellow [&>div:last-child>p]:mb-8 [&>div:last-child>p]:max-w-[420px] [&>div:last-child>p]:text-[18px] [&>div:last-child>p]:text-white/70">
          <div>
            <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Partner / Collaborate</p>
            <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
              The story grows when more people take part.
            </h2>
          </div>
          <div>
            <p>
              Volunteer, sponsor or collaborate with Khreeolife through the Get
              Involved page.
            </p>
            <Link href="/get-involved" className="btn btn-light">
              Partner with Khreeolife
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
