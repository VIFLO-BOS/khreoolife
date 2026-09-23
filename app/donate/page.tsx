import type { Metadata } from "next";
import Image from "next/image";
import { DonationIntent } from "@/components/donate/DonationIntent";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <>
      <section className="relative min-h-[100svh] bg-cream pt-[var(--nav-height)]">
        <div className="absolute bottom-0 left-0 top-[var(--nav-height)] w-1/2 overflow-hidden max-lg:inset-x-0 max-lg:bottom-[48%] max-lg:w-full">
          <Image
            src={images.give}
            alt="Community support"
            fill
            priority
            className="object-cover saturate-[.82]"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 max-lg:bg-black/35" />
        </div>
        <div className="site-container relative z-10 grid min-h-[calc(100svh-var(--nav-height))] grid-cols-2 items-center gap-24 py-20 max-lg:grid-cols-1 max-lg:gap-10 max-lg:pt-24">
          <Reveal className="pr-8 text-white max-lg:flex max-lg:min-h-[42vh] max-lg:flex-col max-lg:justify-end max-lg:pr-0">
            <div className="eyebrow mb-5 text-yellow">Donate Now</div>
            <h1 className="display-title text-[clamp(52px,5.8vw,86px)] leading-hero">
              Put resources behind transformation.
            </h1>
            <p className="mt-5 max-w-[560px] font-display text-xl text-white/90 leading-lead">
              Support Khreeolife&apos;s work across Community Development,
              Education and Christian Missions.
            </p>
            <span className="sticker mt-6 w-fit">the ordained life</span>
          </Reveal>
          <Reveal delay={0.1} className="col-start-2 max-lg:col-start-1">
            <DonationIntent />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Where support can go"
              title="Choose the work you want to stand behind."
              description="Khreeolife's three pillars provide a clear framework for directing support."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-3 max-lg:grid-cols-1">
            {[
              [
                "01",
                "⌂",
                "Community Development",
                "Development initiatives including skill acquisition, education and practical community support.",
                "bg-brand text-white",
              ],
              [
                "02",
                "✦",
                "Education",
                "Information, exposure, alternative education, work experience and opportunity for young people.",
                "bg-yellow text-ink",
              ],
              [
                "03",
                "✝",
                "Christian Missions",
                "Intentional outreaches, evangelism and discipleship.",
                "bg-[#e7fde4] text-ink",
              ],
            ].map(([n, icon, title, copy, tone]) => (
              <Reveal
                key={n}
                className={`flex min-h-[420px] flex-col rounded-[24px] border border-ink p-8 ${tone}`}
              >
                <div className="mb-auto font-display text-7xl">{icon}</div>
                <span className="text-[10px] font-black leading-caption">{n}</span>
                <h3 className="mt-5 font-display text-4xl font-normal leading-card">
                  {title}
                </h3>
                <p className="mt-4 text-sm opacity-75 leading-body">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <Reveal className="site-container grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {[
            ["20", "students named in the university support project."],
            ["4", "projects currently documented in the architecture."],
            ["3", "core pillars guiding the organisation's work."],
            ["1", "faith-driven mission: love in words and deeds."],
          ].map(([value, copy], index) => (
            <div
              key={value + copy}
              className={`p-7 ${index < 3 ? "border-r border-white/15 max-lg:border-r-0" : ""} max-lg:border-b max-md:border-r-0`}
            >
              <span className="font-display text-7xl">{value}</span>
              <p className="mt-3 text-xs text-white/60 leading-caption">{copy}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section-pad">
        <Reveal className="site-container grid grid-cols-[1fr_.8fr] items-start gap-24 max-lg:grid-cols-1">
          <div>
            <div className="eyebrow mb-4 text-brand">V1 Scope</div>
            <h2 className="display-title text-[clamp(44px,5vw,76px)] leading-section">
              Designed now.
              <br />
              Payment processing later.
            </h2>
          </div>
          <div>
            <p className="text-[17px] text-[#6f6972] leading-body">
              The site architecture explicitly places online donation payment
              processing in a future implementation phase. This page therefore
              presents the intended donor experience without pretending a live
              gateway is connected.
            </p>
            <div className="mt-6">
              <AnimatedButton
                href="/get-involved"
                label="Sponsor a project instead"
                variant="dark"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
