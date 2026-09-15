import type { Metadata } from "next";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventsTimeline } from "@/components/events/EventsTimeline";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Every project has moments worth documenting."
        description="Past, present and future events linked directly to Khreeolife's projects."
        image={images.mission2}
        index="02 — Events"
        aside={<><div className="grid size-28 place-items-center rounded-2xl border border-white/65 font-display text-xl text-center">Past<br />→<br />Future</div><p className="mt-5 text-sm leading-6 text-white/75">Event detail pages are designed for date, location, highlights, media, impact summaries and related-project links.</p></>}
      />

      <section className="section-pad">
        <div className="site-container">
          <Reveal><SectionHeading eyebrow="Event Archive" title="A living timeline of the work." description="Move between documented past events and what is coming next. Present / ongoing remains ready for future event content." /></Reveal>
          <div className="mt-12"><EventsTimeline /></div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <Reveal className="site-container grid grid-cols-[1.3fr_.7fr] items-end gap-20 max-lg:grid-cols-1">
          <div className="display-title text-[clamp(55px,7vw,100px)]">“Words and actions.”</div>
          <div><span className="sticker">the ordained life</span><p className="my-6 text-[17px] leading-7 text-white/70">Events are where Khreeolife&apos;s faith-driven mission becomes visible through outreach, education, service and Christian mission.</p><AnimatedButton href="/projects" label="See related projects" variant="light" /></div>
        </Reveal>
      </section>
    </>
  );
}
