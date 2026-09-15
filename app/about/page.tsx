import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, pillars, team } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#171019] text-white">
        <Image src={images.community} alt="Khreeolife community" fill priority className="object-cover saturate-[.8]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,7,11,.74),rgba(10,7,11,.08)_70%),linear-gradient(0deg,rgba(10,7,11,.65),transparent_60%)]" />
        <Reveal className="site-container relative z-10 max-w-[1040px] pb-28 pt-40 max-md:pb-36">
          <div className="eyebrow mb-5 text-yellow">Khreeolife — The Ordained Life</div>
          <h1 className="display-title text-[clamp(54px,6.7vw,100px)]">A gospel-centered organisation built around love becoming action.</h1>
          <p className="mt-5 font-display text-[22px] text-white/80">Dedicated to reflecting Jesus Christ&apos;s love through words and actions.</p>
        </Reveal>
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-around gap-8 overflow-hidden border-t border-ink bg-yellow px-5 py-4 text-[10px] font-black uppercase tracking-[.1em] text-ink max-md:justify-start">
          <span>The Ordained Life</span><span>Community Development</span><span>Education</span><span>Christian Missions</span>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid grid-cols-[.75fr_1.25fr] items-start gap-24 max-lg:grid-cols-1 max-lg:gap-10">
          <Reveal><div className="eyebrow mb-5 text-brand">Our Story</div><h2 className="display-title text-[clamp(44px,5vw,76px)]">Why Khreeolife exists.</h2><span className="sticker mt-7">the ordained life</span></Reveal>
          <Reveal delay={0.08}><p className="font-display text-[clamp(32px,3.7vw,52px)] leading-[1.08] tracking-[-.035em]">Khreeolife is a gospel-centered organization dedicated to reflecting Jesus Christ&apos;s love through words and actions.</p><p className="mt-7 max-w-[700px] text-[17px] leading-8 text-[#6f6972]">The website architecture expands that purpose into a faith-based non-profit mission: transforming people and communities through the love of God both in words and in deeds.</p></Reveal>
        </div>
      </section>

      <section className="bg-ink py-9 text-white">
        <div className="site-container">
          {[
            ["Our motto", "The Ordained Life."],
            ["Our mission", "Transform people and communities through the love of God."],
            ["Our expression", "Words and deeds."],
          ].map(([label, copy], index) => (
            <Reveal key={label} delay={index * 0.05} className="grid grid-cols-[190px_1fr] items-start gap-12 border-b border-white/20 py-10 last:border-b-0 max-md:grid-cols-1 max-md:gap-4">
              <span className="text-[10px] font-black uppercase tracking-[.1em] text-white/55">{label}</span>
              <strong className="display-title text-[clamp(38px,4.5vw,66px)] font-normal">{copy}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Our Three Pillars" title={<>One mission.<br />Three expressions.</>} description="The pillars organise Khreeolife's work and define the kinds of projects visitors can explore, support or serve in." /></Reveal>
          <div className="mt-12 grid gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.id} className="sticky grid min-h-[560px] grid-cols-2 overflow-hidden rounded-[28px] border border-ink bg-white shadow-[0_18px_40px_rgba(0,0,0,.07)] max-lg:relative max-lg:top-auto max-lg:grid-cols-1" style={{ top: `calc(var(--nav-height) + ${22 + index * 20}px)` }}>
                <div className="relative min-h-[340px]"><Image src={pillar.images[1]} alt={pillar.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" /></div>
                <div className="flex flex-col justify-center p-12 max-md:p-7"><span className="text-[10px] font-black text-brand">0{index + 1}</span><h3 className="display-title mt-8 text-[clamp(42px,4.5vw,66px)]">{pillar.name}</h3><p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#6f6972]">{pillar.description}</p></div>
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
              <Reveal key={person.name} delay={index * 0.06} className="card-border bg-paper">
                <div className={`grid h-[380px] place-items-center font-display text-[94px] text-white ${index === 0 ? "bg-brand" : "bg-brand-dark"}`}>{person.initials}</div>
                <div className="p-6"><span className="text-[10px] font-black uppercase tracking-[.08em] text-brand">{person.role}</span><h3 className="mt-3 font-display text-3xl font-normal">{person.name}</h3><p className="mt-3 text-sm text-[#6f6972]">Khreeolife {person.role.toLowerCase()}.</p></div>
              </Reveal>
            ))}
            <Reveal className="card-border bg-paper max-lg:col-span-2 max-md:col-span-1">
              <div className="grid h-[380px] place-items-center bg-yellow font-display text-[130px]">+</div>
              <div className="p-6"><span className="text-[10px] font-black uppercase tracking-[.08em] text-brand">Future Phase</span><h3 className="mt-3 font-display text-3xl font-normal">More team profiles</h3><p className="mt-3 text-sm leading-6 text-[#6f6972]">The architecture allows this section to expand as the organisation grows.</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand py-24 text-white">
        <Reveal className="site-container grid grid-cols-[1fr_.65fr] items-end gap-20 max-lg:grid-cols-1">
          <div><div className="eyebrow mb-4 text-yellow">Partner / Collaborate</div><h2 className="display-title text-[clamp(44px,5vw,76px)]">The story grows when more people take part.</h2></div>
          <div><p className="mb-6 text-[17px] leading-7 text-white/75">Volunteer, sponsor or collaborate with Khreeolife through the Get Involved page.</p><AnimatedButton href="/get-involved" label="Partner with Khreeolife" variant="light" /></div>
        </Reveal>
      </section>
    </>
  );
}
