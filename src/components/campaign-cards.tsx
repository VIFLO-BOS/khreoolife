"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { campaignCards } from "@/data/site";

export function CampaignCards() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mt-6 min-h-[650px] [perspective:1200px] max-[760px]:mt-[30px] max-[760px]:grid max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-3">
      <span className="absolute top-[14px] left-1/2 z-5 inline-flex -translate-x-1/2 rotate-[-3deg] rounded-[4px] bg-yellow px-2.5 py-[5px] text-xs font-black text-ink max-[760px]:top-[-12px]">
        the ordained life
      </span>
      {campaignCards.map((card, index) => {
        const isFlipped = flippedCard === index;

        return (
          <button
            key={card.number}
            type="button"
            className={[
              "absolute w-[31%] aspect-[.82] cursor-pointer rounded-[26px] border border-ink bg-transparent p-0 shadow-[0_18px_45px_rgb(18_17_19_/_10%)] [perspective:1200px] transition-[transform,box-shadow] duration-[350ms] hover:z-6 hover:shadow-[0_26px_56px_rgb(18_17_19_/_18%)] hover:translate-y-[-8px] hover:rotate-0 focus-visible:z-6 focus-visible:translate-y-[-8px] focus-visible:rotate-0 max-[760px]:relative max-[760px]:top-auto max-[760px]:right-auto max-[760px]:left-auto max-[760px]:w-full max-[760px]:aspect-[1.05] max-[760px]:transform-none max-[760px]:hover:translate-y-[-4px]",
              index === 0 ? "top-7 left-[2%] rotate-[-3deg]" : "",
              index === 1 ? "top-[145px] left-[34.5%] z-2 rotate-[2deg]" : "",
              index === 2 ? "top-7 right-[2%] rotate-[3deg]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={`Flip ${card.title} campaign card`}
            aria-pressed={isFlipped}
            onClick={() => setFlippedCard(isFlipped ? null : index)}
          >
            <motion.span
              className="absolute inset-0 block [transform-style:preserve-3d]"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.68 }}
            >
              <span className="absolute inset-0 block overflow-hidden rounded-[25px] text-white [backface-visibility:hidden]">
                <span className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
                  <Image
                    fill
                    alt={card.imageAlt}
                    sizes="(max-width: 760px) 100vw, 31vw"
                    src={card.image}
                  />
                </span>
                <span className="absolute inset-0 bg-[linear-gradient(0deg,rgb(8_6_9_/_74%),transparent_56%)]" />
                <span className="absolute right-5 bottom-[19px] left-5 grid gap-2 text-left [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>strong]:font-display [&>strong]:text-[clamp(22px,2.4vw,35px)] [&>strong]:leading-none [&>strong]:font-normal max-[760px]:[&>strong]:text-[28px]">
                  <span>{card.number}</span>
                  <strong>{card.title}</strong>
                </span>
              </span>
              <span
                className={`absolute inset-0 flex flex-col justify-end overflow-hidden rounded-[25px] p-[26px] text-left text-ink [backface-visibility:hidden] [transform:rotateY(180deg)] ${card.accent === "purple" ? "bg-brand text-white" : card.accent === "yellow" ? "bg-yellow" : "bg-cream"}`}
              >
                <span className="mb-auto text-[9px] font-black tracking-[.09em] uppercase">
                  {card.number} / Our Life Campaign
                </span>
                <strong className="my-[30px] mb-[13px] font-display text-[clamp(27px,3vw,44px)] leading-[.98] font-normal">
                  {card.title}
                </strong>
                <span className="text-[14px] leading-[1.45]">
                  {card.description}
                </span>
                <span className="mt-7 text-[10px] font-black tracking-[.07em] uppercase">
                  Explore the story
                </span>
              </span>
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
