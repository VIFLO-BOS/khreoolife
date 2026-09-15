import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/site";

const scenes = [images.hero, images.community, images.mission2];

export function HomeHero() {
  return (
    <section className="relative grid min-h-[max(800px,100svh)] place-items-center overflow-hidden bg-[#1d1220] px-5 pb-40 pt-[calc(var(--nav-height)+92px)] text-white max-md:min-h-[820px] max-md:pb-36 max-md:pt-[calc(var(--nav-height)+72px)]">
      <div className="absolute inset-0">
        {scenes.map((src, index) => (
          <div key={src} className="hero-scene absolute -inset-[3%] opacity-0">
            <Image
              src={src}
              alt="Khreeolife community"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(0,0,0,.08)_0_18%,rgba(0,0,0,.30)_58%,rgba(0,0,0,.48)_100%),linear-gradient(180deg,rgba(5,4,6,.36),rgba(5,4,6,.23)_42%,rgba(5,4,6,.56))]" />

      <div className="relative z-10 mx-auto w-full max-w-[920px] text-center">
        <Reveal y={30} delay={0.2}>
          <div className="eyebro mb-7 justify-center text-white/80 max-md:mb-5">
            Khreeolife · The Ordained Life
          </div>
        </Reveal>
        <Reveal y={40} delay={0.3}>
          <h1
            id="home-title"
            className="mx-auto mb-7.5 max-w-409.5 font-display text-[clamp(46px,4.75vw,72px)] leading-[1.02] tiny:text-[39px] tracking-[-.048em] font-medium [text-shadow:0_2px_28px_rgba(0,0,0,0.38)]"
          >
            Transforming lives and communities through{" "}
            <span className="relative inline-block after:absolute after:right-0 after:-bottom-2 after:left-[2%] after:h-2.75 after:-rotate-1 after:rounded-[50%] after:border-b-4 after:border-yellow after:content-['']">
              the love of God.
            </span>
          </h1>
        </Reveal>
        <Reveal y={30} delay={0.5}>
          <p className="mx-auto mt-7 max-w-[610px] font-display text-[clamp(16px,1.25vw,19px)] leading-7 text-white/90">
            In words and in deeds through Community Development, Education and Christian Missions.
          </p>
        </Reveal>
        <Reveal y={20} delay={0.6}>
          <div className="mt-9 flex justify-center">
            <AnimatedButton href="/donate" label="Donate Now" variant="brand" />
          </div>
        </Reveal>
      </div>

      <a
        href="#pillars"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/30 bg-black/15 px-4 py-2.5 text-[10px]  tracking-[.15em] text-white/70 backdrop-blur-sm"
      >
        Scroll to explore ↓
      </a>
    </section>
  );
}
