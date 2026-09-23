import Image from "next/image";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  index,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  index: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[86svh] items-end overflow-hidden bg-[#171019] text-white">
      <Image src={image} alt="" fill priority className="object-cover saturate-[.86]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,8,14,.72),rgba(12,8,14,.18)_64%),linear-gradient(0deg,rgba(12,8,14,.62),rgba(12,8,14,.05)_62%)]" />
      <div className="site-container relative z-10 grid grid-cols-[1.15fr_.55fr] items-end gap-24 pb-20 pt-[calc(var(--nav-height)+100px)] max-lg:grid-cols-1 max-lg:gap-8 max-md:pb-14 max-md:pt-[calc(var(--nav-height)+60px)] max-md:text-center">
        <Reveal className="min-w-0">
          <div className="eyebrow mb-5 text-yellow max-md:justify-center">{eyebrow}</div>
          <h1 className="display-title max-w-[930px] text-[clamp(52px,6vw,92px)] max-md:mx-auto max-md:text-balance max-md:text-[clamp(38px,10vw,52px)] leading-hero">{title}</h1>
          <p className="mt-6 max-w-[690px] font-display text-[clamp(18px,1.55vw,23px)] text-white/[.82] max-md:mx-auto max-md:max-w-[40ch] leading-lead">{description}</p>
        </Reveal>
        {aside ? <Reveal delay={0.12} className="min-w-0 border-t border-white/45 pt-5 max-md:flex max-md:flex-col max-md:items-center">{aside}</Reveal> : null}
      </div>
      <div className="absolute bottom-7 right-[3%] z-10 text-[9px] font-bold uppercase tracking-[.14em] text-white/55 leading-caption">{index}</div>
    </section>
  );
}
