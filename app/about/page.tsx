import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, pillars, team } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#171019] text-white max-md:flex-col max-md:items-stretch max-md:justify-end">
        <Image src={images.community} alt="Khreeolife community" fill priority className="object-cover saturate-[.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,7,11,.74),rgba(10,7,11,.08)_70%),linear-gradient(0deg,rgba(10,7,11,.65),transparent_60%)]" />
        <Reveal className="site-container relative z-10 max-w-[1040px] pb-28 pt-40 max-md:pb-10 max-md:pt-[calc(var(--nav-height)+48px)] max-md:text-center">
          <div className="eyebrow mb-5 text-yellow max-md:justify-center">Khreeolife — The Ordained Life</div>
          <h1 className="display-title text-[clamp(54px,6.7vw,100px)] max-md:text-balance max-md:text-[clamp(38px,10vw,52px)] leading-hero">A gospel-centered organisation built around love becoming action.</h1>
          <p className="mt-5 font-display text-[22px] text-white/80 max-md:mx-auto max-md:max-w-[40ch] leading-lead">Dedicated to reflecting Jesus Christ&apos;s love through words and actions.</p>
        </Reveal>
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-around gap-8 overflow-hidden border-t border-ink bg-yellow px-5 py-4 text-[10px] font-black uppercase tracking-[.1em] text-ink max-md:relative max-md:inset-auto max-md:grid max-md:shrink-0 max-md:grid-cols-2 max-md:items-center max-md:gap-x-4 max-md:gap-y-3 max-md:text-center leading-caption">
          <span>The Ordained Life</span><span>Community Development</span><span>Education</span><span>Christian Missions</span>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid grid-cols-[.75fr_1.25fr] items-start gap-24 max-lg:grid-cols-1 max-lg:gap-10 max-md:text-center">
          <Reveal className="min-w-0"><div className="eyebrow mb-5 text-brand max-md:justify-center">Our Story</div><h2 className="display-title text-[clamp(44px,5vw,76px)] max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">Why Khreeolife exists.</h2><span className="sticker mt-7">the ordained life</span></Reveal>
          <Reveal delay={0.08} className="min-w-0"><p className="font-display text-[clamp(32px,3.7vw,52px)] tracking-[-.035em] max-md:text-balance max-md:text-[clamp(28px,7.5vw,36px)] leading-section">Khreeolife is a gospel-centered organization dedicated to reflecting Jesus Christ&apos;s love through words and actions.</p><p className="mt-7 max-w-[700px] text-[17px] text-[#6f6972] max-md:mx-auto leading-body">The website architecture expands that purpose into a faith-based non-profit mission: transforming people and communities through the love of God both in words and in deeds.</p></Reveal>
        </div>
      </section>

      <section className="bg-ink py-9 text-white">
        <div className="site-container">
          {[
            ["Our motto", "The Ordained Life."],
            ["Our mission", "Transform people and communities through the love of God."],
            ["Our expression", "Words and deeds."],
          ].map(([label, copy], index) => (
            <Reveal key={label} delay={index * 0.05} className="grid grid-cols-[190px_1fr] items-start gap-12 border-b border-white/20 py-10 last:border-b-0 max-md:grid-cols-1 max-md:gap-4 max-md:text-center">
              <span className="text-[10px] font-black uppercase tracking-[.1em] text-white/55 leading-caption">{label}</span>
              <strong className="display-title min-w-0 text-[clamp(38px,4.5vw,66px)] font-normal max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">{copy}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Our Three Pillars" title={<>One mission.<br />Three expressions.</>} description="The pillars organise Khreeolife's work and define the kinds of projects visitors can explore, support or serve in." /></Reveal>
          <div className="mt-12 grid gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} className="relative grid min-h-[560px] grid-cols-2 overflow-hidden rounded-[28px] border border-ink bg-white shadow-[0_18px_40px_rgba(0,0,0,.07)] lg:sticky lg:top-[var(--pillar-offset)] max-lg:min-h-0 max-lg:grid-cols-1" style={{ "--pillar-offset": `calc(var(--nav-height) + ${22 + index * 20}px)` } as CSSProperties}>
                <div className="relative min-h-[340px] max-lg:aspect-[16/10] max-lg:min-h-0"><Image src={pillar.images[1]} alt={pillar.name} fill className="object-cover" sizes="(max-width:1023px) 100vw, 50vw" /></div>
                <div className="flex min-w-0 flex-col justify-center p-12 max-md:p-6 max-md:text-center"><span className="text-[10px] font-black text-brand leading-caption">0{index + 1}</span><h3 className="display-title mt-8 text-[clamp(42px,4.5vw,66px)] max-md:mt-5 max-md:text-balance max-md:text-[clamp(30px,8vw,42px)] leading-card">{pillar.name}</h3><p className="mt-5 max-w-[540px] text-[15px] text-[#6f6972] max-md:mx-auto leading-body">{pillar.description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Meet The Team" title="People carrying the vision." description="The current architecture names two team members, with room for additional profiles in future phases." /></Reveal>
          <div className="mt-10 grid grid-cols-[1fr_1fr_.75fr] gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {team.map((person, index) => (
              <Reveal key={person.name} delay={index * 0.06} className="card-border min-w-0 bg-paper">
                <div className={`grid h-[380px] place-items-center font-display text-[94px] text-white max-md:h-[clamp(240px,70vw,320px)] ${index === 0 ? "bg-brand" : "bg-brand-dark"}`}>{person.initials}</div>
                <div className="p-6 max-md:text-center"><span className="text-[10px] font-black uppercase tracking-[.08em] text-brand leading-caption">{person.role}</span><h3 className="mt-3 break-words font-display text-3xl font-normal max-md:text-balance max-md:text-[clamp(26px,7vw,30px)] leading-card">{person.name}</h3><p className="mt-3 text-sm text-[#6f6972] leading-body">Khreeolife {person.role.toLowerCase()}.</p></div>
              </Reveal>
            ))}
            <Reveal className="card-border min-w-0 bg-paper max-lg:col-span-2 max-md:col-span-1">
              <div className="grid h-[380px] place-items-center bg-yellow font-display text-[130px] max-md:h-[clamp(240px,70vw,320px)]">+</div>
              <div className="p-6 max-md:text-center"><span className="text-[10px] font-black uppercase tracking-[.08em] text-brand leading-caption">Future Phase</span><h3 className="mt-3 break-words font-display text-3xl font-normal max-md:text-balance max-md:text-[clamp(26px,7vw,30px)] leading-card">More team profiles</h3><p className="mt-3 text-sm text-[#6f6972] leading-body">The architecture allows this section to expand as the organisation grows.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand py-24 text-white">
        <Reveal className="site-container grid grid-cols-[1fr_.65fr] items-end gap-20 max-lg:grid-cols-1 max-md:gap-8 max-md:text-center">
          <div className="min-w-0"><div className="eyebrow mb-4 text-yellow max-md:justify-center">Partner / Collaborate</div><h2 className="display-title text-[clamp(44px,5vw,76px)] max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">The story grows when more people take part.</h2></div>
          <div className="min-w-0"><p className="mb-6 text-[17px] text-white/75 max-md:mx-auto max-md:max-w-prose leading-body">Volunteer, sponsor or collaborate with Khreeolife through the Get Involved page.</p><AnimatedButton href="/get-involved" label="Partner with Khreeolife" variant="light" /></div>
        </Reveal>
      </section>
    </>
  );
}
