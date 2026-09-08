"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { pillars } from "@/data/site";

export function PillarRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activePillar = pillars[activeIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % pillars.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section
      className="bg-paper py-section-enter pb-section tablet:pt-11 tablet:pb-[76px]"
      aria-labelledby="pillar-overview-title"
    >
      <div className="container-page">
        <div className="h-px bg-ink" />
        <div className="grid min-h-[580px] grid-cols-[.38fr_.62fr] border-b border-ink laptop:grid-cols-1">
          <div className="flex flex-col border-r border-ink pt-[42px] pr-[54px] pb-[38px] laptop:border-r-0 laptop:border-b laptop:pr-0 tablet:pt-[34px] tablet:pb-8">
            <p className="eyebrow mb-0">
              What we do
            </p>
            <h2 className="my-[14px] mb-[18px] display-2 text-[clamp(40px,4.2vw,66px)] tablet:text-[42px]">
              {activePillar.heading}
            </h2>
            <p className="max-w-[390px] text-[15px] text-[#625b63]">
              {activePillar.text}
            </p>
            <Link
              href="/projects"
              className="mt-[22px] btn btn-dark"
            >
              Explore Our Work ↗
            </Link>

            <div
              className="mt-[34px] flex w-[210px] gap-[7px]"
              aria-label="Three pillar slideshow progress"
            >
              {pillars.map((pillar, index) => (
                <button
                  key={pillar.name}
                  type="button"
                  className="relative h-[9px] flex-1 cursor-pointer overflow-hidden border-0 bg-[#c8c0b7] p-0"
                  aria-label={`Show ${pillar.name}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    key={
                      index === activeIndex ? `${index}-${activeIndex}` : index
                    }
                    className={
                      index === activeIndex
                        ? "block h-full w-0 bg-brand animate-[pillar-progress-load_5.2s_linear_forwards]"
                        : "block h-full w-0 bg-brand"
                    }
                  />
                </button>
              ))}
            </div>

            <div
              className="mt-auto grid grid-cols-4 gap-2 pt-[34px] mobile:grid-cols-2 mobile:gap-3 max-w-[520px] laptop:mt-[34px] phone-lg:gap-[5px]"
              aria-label="Khreeolife overview"
            >
              <div className="grid min-w-0 aspect-square place-items-center rounded-full border border-ink p-[10px] text-center phone-lg:p-[5px] [&>strong]:block [&>strong]:font-display [&>strong]:text-[25px] [&>strong]:leading-none [&>strong]:font-normal [&>span]:block [&>span]:text-[8px] [&>span]:leading-[1.1] [&>span]:font-extrabold [&>span]:tracking-[.07em] [&>span]:text-[#6d666d] [&>span]:uppercase">
                <strong>4</strong>
                <span>Projects</span>
              </div>
              <div className="grid min-w-0 aspect-square place-items-center rounded-full border border-ink p-[10px] text-center phone-lg:p-[5px] [&>strong]:block [&>strong]:font-display [&>strong]:text-[25px] [&>strong]:leading-none [&>strong]:font-normal [&>span]:block [&>span]:text-[8px] [&>span]:leading-[1.1] [&>span]:font-extrabold [&>span]:tracking-[.07em] [&>span]:text-[#6d666d] [&>span]:uppercase">
                <strong>3</strong>
                <span>Pillars</span>
              </div>
              <div className="grid min-w-0 aspect-square place-items-center rounded-full border border-ink p-[10px] text-center phone-lg:p-[5px] [&>strong]:block [&>strong]:font-display [&>strong]:text-[25px] [&>strong]:leading-none [&>strong]:font-normal [&>span]:block [&>span]:text-[8px] [&>span]:leading-[1.1] [&>span]:font-extrabold [&>span]:tracking-[.07em] [&>span]:text-[#6d666d] [&>span]:uppercase">
                <strong>20</strong>
                <span>Students</span>
              </div>
              <div className="grid min-w-0 aspect-square place-items-center rounded-full border border-ink p-[10px] text-center phone-lg:p-[5px] [&>strong]:block [&>strong]:font-display [&>strong]:text-[25px] [&>strong]:leading-none [&>strong]:font-normal [&>span]:block [&>span]:text-[8px] [&>span]:leading-[1.1] [&>span]:font-extrabold [&>span]:tracking-[.07em] [&>span]:text-[#6d666d] [&>span]:uppercase">
                <strong>1</strong>
                <span>Mission</span>
              </div>
            </div>
          </div>

          <div className="min-w-0 pt-[34px] pl-[54px] laptop:pt-[42px] laptop:pl-0">
            <h2
              id="pillar-overview-title"
              className="mb-[42px] display-2 text-[clamp(28px,3vw,42px)] tablet:mb-[27px]"
            >
              Three Pillar Overviews
            </h2>
            <div className="flex h-[410px] w-full items-start justify-end gap-6 pl-[18px] laptop-lg:h-[370px] laptop-lg:gap-[18px] tablet:h-[310px] tablet:gap-2.5 tablet:pl-0 phone-lg:h-[250px] phone-lg:gap-[7px]">
              {activePillar.images.map((image, index) => (
                <figure
                  key={index}
                  className={
                    index === 0
                      ? "relative mt-[122px] w-[22%] shrink-0 laptop-lg:mt-[108px] tablet:mt-[92px] tablet:w-[24%] phone-lg:mt-[74px]"
                      : index === 1
                        ? "relative mt-[67px] w-[29%] shrink-0 laptop-lg:mt-[58px] tablet:mt-[48px] tablet:w-[31%] phone-lg:mt-[39px]"
                        : "relative mt-4 w-[37%] shrink-0 tablet:mt-2 tablet:w-[39%] phone-lg:mt-[5px]"
                  }
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={image.src}
                      className="relative overflow-hidden aspect-[1.16] rounded-lg [&_img]:object-cover"
                      initial={
                        prefersReducedMotion
                          ? false
                          : { opacity: 0, y: 11, filter: "blur(5px)" }
                      }
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={
                        prefersReducedMotion
                          ? undefined
                          : { opacity: 0, y: 11, filter: "blur(5px)" }
                      }
                      transition={{ duration: 0.48, delay: index * 0.07 }}
                    >
                      <Image
                        fill
                        alt={image.alt}
                        sizes="(max-width: 760px) 39vw, 26vw"
                        src={image.src}
                        style={{ objectPosition: image.objectPosition }}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <figcaption className="mt-3 text-[10px] font-bold">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-1 flex items-center justify-between gap-5 border-t border-ink pt-[15px] [&>span]:text-[11px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-brand [&>strong]:font-display [&>strong]:text-[19px] [&>strong]:font-normal [&>strong]:uppercase [&>strong]:tracking-[.04em]">
              <span>{String(activeIndex + 1).padStart(2, "0")} / 03</span>
              <strong>{activePillar.name}</strong>
            </p>
          </div>
        </div>
        <div className="mt-12 h-px bg-ink" />
      </div>
    </section>
  );
}
