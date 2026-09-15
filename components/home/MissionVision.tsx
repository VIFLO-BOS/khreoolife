import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/site";

export function MissionVision() {
  return (
    <section className="bg-paper pb-28 pt-14 max-md:pb-20 max-md:pt-11">
      <div className="site-container">
        <Reveal className="grid grid-cols-[42%_58%] items-center gap-10 max-lg:grid-cols-1 max-lg:gap-4">
          <div className="h-px bg-ink" />
          <h2 className="display-title text-[clamp(42px,5vw,74px)]">
            Mission &amp; Vision
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-[42%_58%] gap-10 max-lg:grid-cols-1">
          <Reveal>
            <article className="group rounded-2xl border border-transparent p-6 transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-white hover:shadow-xl">
              <div className="eyebrow mb-4 text-brand">Mission</div>
              <h3 className="font-display text-[clamp(20px,2.3vw,40px)] font-normal">
                Transforming people and communities through the love of God.
              </h3>
              <p className="mt-4 max-w-[440px] text-[14px] leading-5 text-[#625b63]">
                Khreeolife is a faith-based non-profit dedicated to transforming
                people and communities through the love of God both in words and
                in deeds.
              </p>
              <div className="mt-6">
                <AnimatedButton
                  href="/about"
                  label="Our Story"
                  variant="outline"
                />
              </div>
            </article>
            <article className="group mt-4 rounded-2xl border border-transparent p-6 transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-white hover:shadow-xl">
              <div className="eyebrow mb-4 text-brand">Vision</div>
              <h3 className="font-display text-[clamp(20px,3.3vw,40px)] font-normal tracking-[-.04em]">
                The Ordained Life expressed through people, community and
                service.
              </h3>
              <p className="mt-4 max-w-[440px] text-[14px] leading-7 text-[#625b63]">
                Khreeolife's work is organised through Community Development,
                Education and Christian Missions.
              </p>
              <div className="mt-6">
                <AnimatedButton
                  href="/projects"
                  label="See The Work"
                  variant="outline"
                />
              </div>
            </article>
          </Reveal>

          <Reveal
            delay={0.08}
            className="grid min-h-[590px] place-items-center max-md:min-h-[430px]"
          >
            <div className="relative grid aspect-square w-[min(520px,90%)] place-items-center rounded-full border border-ink">
              <div className="relative h-[76%] w-[76%] overflow-hidden rounded-full shadow-soft">
                <Image
                  src={images.community2}
                  alt="Khreeolife community"
                  fill
                  className="animate-slow-zoom object-cover"
                  sizes="500px"
                />
              </div>
              <div className="orbit-mark absolute left-1/2 top-1/2 -ml-11 -mt-11 grid size-[88px] place-items-center rounded-3xl border border-ink bg-yellow font-display text-3xl font-bold max-md:hidden">
                ee
              </div>
              <span className="absolute bottom-[14%] right-[5%] rounded-full bg-brand px-4 py-2 text-[9px] font-black uppercase tracking-[.09em] text-white">
                A life of faith in action
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
