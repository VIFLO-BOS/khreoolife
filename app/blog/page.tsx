import type { Metadata } from "next";
import Image from "next/image";
import { BlogMagazine } from "@/components/blog/BlogMagazine";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/site";

export const metadata: Metadata = { title: "Blog / Magazine" };

export default function BlogPage() {
  return (
    <>
      <section className="overflow-hidden bg-white pb-0 pt-40 max-md:pt-28">
        <div className="site-container grid grid-cols-[1.2fr_.55fr] items-end gap-24 pb-16 max-lg:grid-cols-1 max-lg:gap-8">
          <Reveal>
            <div className="eyebrow mb-5 text-brand">Blog / Magazine</div>
            <h1 className="display-title text-[clamp(54px,6.4vw,98px)]">
              Stories from the work.
              <br />
              Reflections from the life.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="border-t border-ink pt-5">
            <p className="text-[17px] leading-7 text-[#6f6972]">
              A magazine-style content hub for Khreeolife updates, stories from
              the field and community news.
            </p>
            <span className="sticker mt-5">the ordained life</span>
          </Reveal>
        </div>
        <div className="overflow-hidden border-y border-ink py-4">
          <div className="magazine-marquee flex w-max items-center gap-7 font-display text-[14px]">
            {[...Array(2)]
              .flatMap(() => [
                "Devotionals",
                "✦",
                "Community Stories",
                "✦",
                "Updates",
                "✦",
                "Events Coverage",
                "✦",
              ])
              .map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className={item === "✦" ? "text-brand" : ""}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="site-container">
          <Reveal className="grid grid-cols-[1.12fr_.88fr] overflow-hidden rounded-[30px] border border-ink bg-white max-lg:grid-cols-1">
            <div className="relative min-h-[650px] max-lg:min-h-[420px]">
              <Image
                src={images.community2}
                alt="Khreeolife editorial feature"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
            <div className="flex flex-col justify-center p-12 max-md:p-7">
              <div className="flex justify-between gap-4">
                <span className="pill-tag text-brand">
                  Featured Editorial Preview
                </span>
                <span className="font-display text-3xl">01</span>
              </div>
              <h2 className="display-title mt-12 text-[clamp(48px,5vw,75px)]">
                The Ordained Life
              </h2>
              <p className="mt-5 text-[17px] leading-7 text-[#6f6972]">
                Khreeolife is a gospel-centered organization dedicated to
                reflecting Jesus Christ&apos;s love through words and actions.
                This editorial space is designed to carry that story in
                long-form.
              </p>
              <div className="mt-7 flex justify-between gap-4 border-t border-[#d7d0c7] pt-4 text-[10px] uppercase tracking-[.07em] text-[#6f6972]">
                <span>Khreeolife Editorial</span>
                <span>Content grows progressively</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <BlogMagazine />
        </div>
      </section>

      <section className="bg-brand py-24 text-center text-white">
        <Reveal className="site-container">
          <div className="display-title mx-auto max-w-[1100px] text-[clamp(43px,6vw,86px)]">
            “Reflecting Jesus Christ&apos;s love through words and actions.”
          </div>
        </Reveal>
      </section>
    </>
  );
}
