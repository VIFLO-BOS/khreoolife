import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { images } from "@/data/site";
import { SiteImage } from "@/components/site-image";

const heroScenes = [
  {
    src: images.homeHero,
    alt: "",
    className:
      "absolute -inset-[3%] opacity-0 [transform:scale(1.03)] animate-[home-scene-cycle_18s_ease-in-out_infinite] [&_img]:size-full [&_img]:object-cover",
  },
  {
    src: images.homeHeroSecond,
    alt: "",
    className:
      "absolute -inset-[3%] opacity-0 [transform:scale(1.03)] animate-[home-scene-cycle_18s_ease-in-out_infinite] [animation-delay:6s] [&_img]:size-full [&_img]:object-cover",
  },
  {
    src: images.homeHeroThird,
    alt: "",
    className:
      "absolute -inset-[3%] opacity-0 [transform:scale(1.03)] animate-[home-scene-cycle_18s_ease-in-out_infinite] [animation-delay:12s] [&_img]:size-full [&_img]:object-cover",
  },
];

export function HomeHero() {
  return (
    <section
      className="relative grid min-h-[max(900px,100svh)] place-items-center overflow-hidden bg-ink-deep px-0 pt-[calc(var(--nav-height)+92px)] pb-[162px] text-white"
      aria-labelledby="home-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {heroScenes.map((scene, index) => (
          <div key={scene.src} className={scene.className}>
            <SiteImage
              alt={scene.alt}
              priority={index === 0}
              sizes="100vw"
              src={scene.src}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(0,0,0,0.08)_0_18%,rgba(0,0,0,0.30)_58%,rgba(0,0,0,0.46)_100%),linear-gradient(180deg,rgba(5,4,6,0.34),rgba(5,4,6,0.23)_42%,rgba(5,4,6,0.53))]" />
      <div className="relative z-2 w-[min(920px,calc(100%_-_48px))] text-center">
        <p className="mb-[30px] flex items-center justify-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[0.13em] text-white/82 uppercase before:h-px before:w-6 before:bg-current before:content-['']">
          Khreeolife · The Ordained Life
        </p>
        <h1
          id="home-title"
          className="mx-auto mb-7.5 max-w-209.5 font-display text-[clamp(46px,4.75vw,72px)] leading-[1.02] tiny:text-[39px] tracking-[-.048em] font-normal [text-shadow:0_2px_28px_rgba(0,0,0,0.38)]"
        >
          Transforming people and communities through{" "}
          <span className="relative inline-block after:absolute after:right-0 after:bottom-2 after:left-[2%] after:h-2.75 after:rotate-1 after:rounded-[50%] after:border-b-4 after:border-yellow after:content-['']">
            the love of God.
          </span>
        </h1>
        <p className="mx-auto max-w-152.5 font-display text-[clamp(16px,1.25vw,19px)] tiny:text-[15px] text-white/91 [text-shadow:0_2px_14px_rgba(0,0,0,0.35)]">
          In words and in deeds through Community Development, Education and
          Christian Missions.
        </p>
        <Link
          href="/donate"
          className="mt-9.5 inline-flex items-center text-white"
        >
          <span className="grid h-11 place-items-center rounded-full bg-brand px-[25px] text-[11px] font-black">
            Donate Now
          </span>
        </Link>
      </div>
      <p className="absolute z-3 bottom-[34px] left-1/2 m-0 inline-flex -translate-x-1/2 items-center gap-[7px] rounded-full border border-white/32 bg-[rgb(12_9_13_/_18%)] px-4 py-2.5 text-[9px] leading-none font-bold tracking-[0.15em] text-white/62 uppercase">
        Scroll to explore <ArrowDown aria-hidden="true" size={13} />
      </p>
    </section>
  );
}
