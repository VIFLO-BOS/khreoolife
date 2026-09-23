"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, Fragment } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/data/site";
import { Heart, Star, Users, Sparkles } from "lucide-react";

const DURATION = 5.4;

export function PillarSlider() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  useEffect(() => {
    const timer = window.setTimeout(
      () => setActive((value) => (value + 1) % pillars.length),
      DURATION * 1000,
    );
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section
      id="pillars"
      className="scroll-mt-[var(--nav-height)] bg-paper py-16 pb-28 max-md:py-11 max-md:pb-20"
    >
      <div className="site-container">

        <Reveal>
          <div className="flex items-end justify-start max-md:justify-center max-md:text-center">
            <h3 className="font-display text-[clamp(42px,5vw,76px)] font-normal tracking-[-.04em] max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">
              Three Pillar Overviews
            </h3>
          </div>
        </Reveal>
        <div className="grid min-h-[660px] grid-cols-[50%_50%] items-center max-lg:min-h-0 max-lg:grid-cols-1">
          <div className="flex min-w-0 flex-col py-1 pr-12 max-lg:pr-0 max-md:mt-8 max-md:items-center max-md:text-center">
            <div className="eyebrow text-brand max-md:justify-center">What we do</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="mt-2 max-w-[720px] max-md:min-h-[17rem]"
              >
                <h4 className="display-title mt-4 text-[clamp(34px,4vw,55px)] max-md:text-balance max-md:text-[clamp(30px,8vw,36px)] leading-card">
                  {pillar.heading}
                </h4>
                <p className="mt-4 max-w-[640px] text-[14px] text-[#625b63] max-md:mx-auto leading-body">
                  {pillar.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6">
              <AnimatedButton
                href="/projects"
                label="Explore Our Work"
                variant="dark"
              />
            </div>

            <div className="mt-9 flex w-[220px] gap-2 max-md:mt-4 max-md:w-[180px]">
              {pillars.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="flex h-11 flex-1 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand leading-control"
                  aria-label={item.name}
                  aria-pressed={index === active}
                >
                  <span className="block h-1 w-full overflow-hidden bg-[#c8c0b7]">
                  {index === active ? (
                    <motion.span
                      key={`${active}-${item.id}`}
                      className="block h-full bg-brand"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION, ease: "linear" }}
                    />
                  ) : null}
                  </span>
                </button>
              ))}
            </div>

            {/* <div className="mt-auto grid grid-cols-4 gap-2 pt-10 max-sm:grid-cols-2">
              {[
                { value: "4.8k", label: "Likes", icon: Heart },
                { value: "4.9/5", label: "Average Rating", icon: Star },
                { value: "12k+", label: "Community", icon: Users },
                { value: "500+", label: "Impact", icon: Sparkles },
              ].map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="grid m place-items-start  pl-0 text-center rounded-full bordered border-red "
                >
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <Icon className="h-5 w-5 text-brand" strokeWidth={2.5} />
                      <strong className="block font-display text-sm font-normal">
                        {value}
                      </strong>
                    </div>
                    <span className="mt-1 block text-[8px] font-normal tracking-[.08em] text-[#6d666d]">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="min-w-0 overflow-hidden py-10 pl-14 max-lg:pl-0 max-md:py-6">
          
            <div className="relative mt-10 grid h-[460px] w-full grid-cols-3 grid-rows-2 gap-3 max-lg:h-[400px] max-md:mt-0 max-md:h-[320px]">
              {[0, 1, 2, 3].map((index) => {
                let spanClasses = "";
                let initialPos = {};
                let exitPos = {};

                if (index === 0) {
                  spanClasses = "col-span-2 row-span-1";
                  initialPos = { y: "-100%" };
                  exitPos = { y: "100%" };
                } else if (index === 1) {
                  spanClasses = "col-span-1 row-span-2";
                  initialPos = { x: "100%" };
                  exitPos = { x: "-100%" };
                } else if (index === 2) {
                  spanClasses = "col-span-1 row-span-1";
                  initialPos = { x: "-100%" };
                  exitPos = { x: "100%" };
                } else if (index === 3) {
                  spanClasses = "col-span-1 row-span-1";
                  initialPos = { y: "100%" };
                  exitPos = { y: "-100%" };
                }

                return (
                  <div
                    key={`card-${index}`}
                    className={`group relative h-full w-full overflow-hidden rounded-xl bg-[#e9e1db] shadow-[0_8px_24px_rgba(18,17,19,.06)] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(18,17,19,.12)] hover:-translate-y-2 ${spanClasses}`}
                  >
                    <AnimatePresence>
                      <motion.div
                        key={pillar.id}
                        className="absolute inset-0 bg-[#e9e1db]"
                        initial={initialPos}
                        animate={{ x: 0, y: 0 }}
                        exit={exitPos}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Image
                          src={pillar.images[index]}
                          alt={`${pillar.name} — ${pillar.labels[index]}`}
                          fill
                          className="object-cover saturate-[.92]"
                          sizes="(max-width: 768px) 45vw, 25vw"
                        />
                        <div className="absolute bottom-3 left-3 rounded bg-white/80 px-3 py-1.5 text-[10px] font-medium tracking-[.08em] text-[#6f6972] backdrop-blur-md transition-all duration-300 group-hover:bg-brand group-hover:text-white max-md:bottom-2 max-md:left-2 max-md:right-2 max-md:break-words max-md:px-1.5 max-md:text-center leading-caption">
                          {pillar.labels[index]}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
