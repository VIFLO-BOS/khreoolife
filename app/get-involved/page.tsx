import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InvolvementPathways } from "@/components/forms/InvolvementPathways";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Volunteer & Sponsor" };

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer & Sponsor"
        title="Bring your time, skill or resources into the work."
        description="A standalone interest page for community members and organisations who want to participate in Khreeolife's mission."
        image={images.volunteer}
        index="03 — Get Involved"
        aside={<><span className="sticker">serve · partner · support</span><p className="mt-5 text-sm leading-6 text-white/75">V1 submissions are received and followed up manually. Application tracking is future scope.</p></>}
      />

      <section className="section-pad">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Choose a pathway" title="Two ways to step in." description="Volunteer in transformational outreach or sponsor the work financially, in-kind or through partnership." /></Reveal>
          <div className="mt-12"><InvolvementPathways /></div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="What happens next" title={<>Simple in V1.<br />Human by design.</>} description="Express interest, submit the relevant form, and the Khreeolife team follows up manually." /></Reveal>
          <Reveal className="mt-10 grid grid-cols-4 border-t border-ink max-lg:grid-cols-2 max-md:grid-cols-1">
            {[["01","Choose","Volunteer or sponsor."],["02","Tell us","Complete the relevant interest form."],["03","Submit","Your details are received for follow-up."],["04","Connect","The team gets in touch manually."]].map(([n,title,copy],i) => <div key={n} className={`min-h-[200px] p-7 ${i<3 ? "border-r border-ink max-md:border-r-0" : ""} max-lg:border-b`}><span className="text-[10px] font-black text-brand">{n}</span><h3 className="mt-10 font-display text-3xl font-normal">{title}</h3><p className="mt-2 text-sm text-[#6f6972]">{copy}</p></div>)}
          </Reveal>
        </div>
      </section>
    </>
  );
}
