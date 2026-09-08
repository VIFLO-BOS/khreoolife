import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";

interface RichHeroProps {
  aside?: ReactNode;
  className?: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  index: string;
  title: ReactNode;
}

export function RichHero({
  aside,
  className = "",
  description,
  eyebrow,
  image,
  imageAlt,
  index,
  title,
}: RichHeroProps) {
  return (
    <section
      className={`relative flex min-h-[86svh] items-end overflow-hidden bg-ink-deep text-white max-[760px]:min-h-[780px] ${className}`.trim()}
    >
      <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.86]">
        <SiteImage alt={imageAlt} priority sizes="100vw" src={image} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(12_8_14_/_70%),rgb(12_8_14_/_20%)_64%),linear-gradient(0deg,rgb(12_8_14_/_62%),rgb(12_8_14_/_8%)_62%)]" />
      <div className="relative z-2 mx-auto grid w-[min(var(--max-width),calc(100%_-_64px))] grid-cols-[1.15fr_.55fr] items-end gap-[90px] py-[72px] pt-[170px] max-[1050px]:grid-cols-1 max-[1050px]:gap-[35px] max-[760px]:w-[calc(100%_-_28px)] max-[760px]:py-[55px] max-[760px]:pt-[135px] max-[400px]:w-[calc(100%_-_20px)]">
        <Reveal className="[&_h1]:mb-6 [&_h1]:max-w-[920px] [&_h1]:font-display [&_h1]:text-[clamp(54px,6.2vw,94px)] [&_h1]:leading-[.98] [&_h1]:font-normal max-[760px]:[&_h1]:text-[48px] [&_p:not(:first-child)]:max-w-[690px] [&_p:not(:first-child)]:font-display [&_p:not(:first-child)]:text-[clamp(18px,1.55vw,23px)] [&_p:not(:first-child)]:text-white/82 [&_.eyebrow]:mb-5 [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-yellow [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-['']">
          <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
        {aside ? (
          <Reveal className="border-t border-white/48 pt-[18px] [&_p]:my-[18px] [&_p]:mb-[22px] [&_p]:text-[14px] [&_p]:text-white/72">
            {aside}
          </Reveal>
        ) : null}
      </div>
      <p className="absolute right-[3%] bottom-7 z-2 text-[9px] font-extrabold tracking-[.14em] text-white/55 uppercase">
        {index}
      </p>
    </section>
  );
}
