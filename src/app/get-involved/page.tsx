import type { Metadata } from "next";

import { InvolvementApplication } from "@/components/involvement-application";
import { RichHero } from "@/components/rich-hero";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Volunteer & Sponsor",
  description:
    "Volunteer, sponsor or partner with Khreeolife in Community Development, Education and Christian Missions.",
  alternates: { canonical: "/get-involved" },
};

export default function GetInvolvedPage() {
  return (
    <main>
      <RichHero
        className="involve-rich-hero"
        eyebrow="Volunteer & Sponsor"
        image={images.volunteering}
        imageAlt="People volunteering together"
        index="03 - Get Involved"
        title="Bring your time, skill or resources into the work."
        description="A standalone interest page for community members and organisations who want to participate in Khreeolife's mission."
        aside={
          <>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">serve - partner - support</span>
            <p>
              Interest delivery is future scope. Contact the team directly to
              begin a conversation.
            </p>
          </>
        }
      />
      <InvolvementApplication />
    </main>
  );
}
