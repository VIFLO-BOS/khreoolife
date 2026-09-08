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
      className={`relative flex min-h-[86svh] items-end overflow-hidden bg-ink-deep text-white tablet:min-h-[780px] ${className}`.trim()}
    >
      <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.86]">
        <SiteImage alt={imageAlt} priority sizes="100vw" src={image} />
      </div>
      <div className="absolute inset-0 scrim-side" />
      <div className="relative z-2 container-page grid grid-cols-[1.15fr_.55fr] items-end gap-[90px] py-[72px] pt-[170px] laptop:grid-cols-1 laptop:gap-[35px] tablet:py-[55px] tablet:pt-[135px]">
        <Reveal className="[&_h1]:mb-6 [&_h1]:max-w-[920px] [&_h1]:font-display [&_h1]:text-[clamp(54px,6.2vw,94px)] [&_h1]:leading-[.98] [&_h1]:font-normal tablet:[&_h1]:text-[48px] [&_p:not(:first-child)]:max-w-[690px] [&_p:not(:first-child)]:font-display [&_p:not(:first-child)]:text-[clamp(18px,1.55vw,23px)] [&_p:not(:first-child)]:text-white/82">
          <p className="eyebrow">{eyebrow}</p>
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
