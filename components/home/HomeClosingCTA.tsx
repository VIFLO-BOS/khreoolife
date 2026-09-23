import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";

export function HomeClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-brand py-28 text-white max-md:py-20">
      <div className="pointer-events-none absolute -bottom-44 -right-16 font-logo text-[380px] font-black tracking-[-55px] text-white/[.055]">ee</div>
      <Reveal className="site-container relative z-10 grid grid-cols-[1fr_auto] items-end gap-12 max-lg:grid-cols-1 max-md:text-center">
        <div className="min-w-0">
          <div className="eyebrow mb-4 text-yellow max-md:justify-center">Volunteer &amp; Sponsor</div>
          <h2 className="display-title max-w-[900px] text-[clamp(44px,5vw,76px)] max-md:mx-auto max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">Take your place in the next transformation.</h2>
          <p className="mt-5 max-w-[680px] text-[17px] text-white/75 max-md:mx-auto leading-body">Volunteer in transformational outreaches or partner with Khreeolife as a sponsor.</p>
        </div>
        <AnimatedButton href="/get-involved" label="Get Involved" variant="light" className="max-md:justify-self-center" />
      </Reveal>
    </section>
  );
}
