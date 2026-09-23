"use client";

import Image from "next/image";
import { useState } from "react";
import { GetInvolvedForms } from "./GetInvolvedForms";
import { images } from "@/data/site";

export function InvolvementPathways() {
  const [initialTab, setInitialTab] = useState<"volunteer" | "sponsor">("volunteer");

  const go = (tab: "volunteer" | "sponsor") => {
    setInitialTab(tab);
    requestAnimationFrame(() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
        <article className="card-border group relative bg-white">
          <div className="relative h-[430px] overflow-hidden max-md:h-[330px]"><Image src={images.volunteer} alt="Volunteers serving together" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="(max-width:1024px) 100vw, 50vw" /></div>
          <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-paper text-[10px] font-black leading-caption">01</span>
          <div className="p-8"><div className="eyebrow mb-4 text-brand">Volunteer</div><h3 className="font-display text-4xl font-normal leading-card">Give your presence and ability.</h3><p className="mt-4 max-w-[560px] text-sm text-[#6f6972] leading-body">Volunteers participate in transformational outreach and service across Community Development, Education and Missions.</p><button onClick={() => go("volunteer")} className="mt-6 rounded-full bg-ink px-5 py-3 text-[11px] font-black text-white transition-colors hover:bg-brand leading-control">Volunteer Application ↘</button></div>
        </article>
        <article className="card-border group relative bg-brand text-white">
          <div className="relative h-[430px] overflow-hidden max-md:h-[330px]"><Image src={images.partner} alt="Partnership discussion" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="(max-width:1024px) 100vw, 50vw" /></div>
          <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-paper text-[10px] font-black text-ink leading-caption">02</span>
          <div className="p-8"><div className="eyebrow mb-4 text-yellow">Sponsor</div><h3 className="font-display text-4xl font-normal leading-card">Put resources behind a project.</h3><p className="mt-4 max-w-[560px] text-sm text-white/75 leading-body">Sponsorship may be Financial, In-Kind or Partnership-based and can be directed toward specific projects.</p><button onClick={() => go("sponsor")} className="mt-6 rounded-full bg-white px-5 py-3 text-[11px] font-black text-ink transition-colors hover:bg-yellow leading-control">Sponsor Application ↘</button></div>
        </article>
      </div>
      <section id="application" className="scroll-mt-24 pt-28 max-md:pt-20"><GetInvolvedForms key={initialTab} initial={initialTab} /></section>
    </>
  );
}
