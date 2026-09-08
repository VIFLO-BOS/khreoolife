"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { campaignCards } from "@/data/site";

export function CampaignCards() {
  // Two independent triggers, deliberately.
  //
  // The reference's final pass flips on hover/focus, which is what a
  // pointer user gets. Touch devices have no hover, so the click state
  // is kept as well. A card is showing its back if EITHER is true, and
  // a click that flips a card is not undone when the pointer leaves.
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mt-6 min-h-[650px] [perspective:1200px] tablet:mt-[30px] tablet:grid tablet:min-h-0 tablet:grid-cols-1 tablet:gap-3">
      <span className="absolute top-[14px] left-1/2 z-5 inline-flex -translate-x-1/2 rotate-[-3deg] rounded-[4px] bg-yellow px-2.5 py-[5px] text-xs font-black text-ink tablet:top-[-12px]">
        the ordained life
      </span>
      {campaignCards.map((card, index) => {
        const isFlipped = flippedCard === index || hoveredCard === index;

        return (
          <button
            key={card.number}
            type="button"
            className={[
              // The reference's final pass strips the border, shadow and
              // rotation from these cards -- the flip is the whole effect.
              // The migration kept the earlier pass's chrome, so the cards
              // had a lift AND a flip fighting each other.
              "absolute w-[31%] aspect-[.82] cursor-pointer border-0 bg-transparent p-0 [perspective:1300px] tablet:relative tablet:top-auto tablet:right-auto tablet:left-auto tablet:w-full tablet:aspect-[1.05]",
              index === 0 ? "top-[18px] left-[2%]" : "",
              index === 1 ? "top-[104px] left-[34.5%] z-2" : "",
              index === 2 ? "top-[18px] right-[2%]" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={`Flip ${card.title} campaign card`}
            aria-pressed={isFlipped}
            onClick={() => setFlippedCard(isFlipped ? null : index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setHoveredCard(index)}
            onBlur={() => setHoveredCard(null)}
          >
            <motion.span
              className="absolute inset-0 block [transform-style:preserve-3d]"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.72,
                ease: [0.2, 0.75, 0.2, 1],
              }}
            >
              <span className="absolute inset-0 block overflow-hidden rounded-[24px] border border-ink text-white [backface-visibility:hidden]">
                <span className="absolute inset-0 photo">
                  <Image
                    fill
                    alt={card.imageAlt}
                    sizes="(max-width: 760px) 100vw, 31vw"
                    src={card.image}
                  />
                </span>
                <span className="absolute inset-0 scrim" />
                <span className="absolute right-5 bottom-[19px] left-5 grid gap-2 text-left [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>strong]:font-display [&>strong]:text-[clamp(22px,2.4vw,35px)] [&>strong]:leading-none [&>strong]:font-normal tablet:[&>strong]:text-[28px]">
                  <span>{card.number}</span>
                  <strong>{card.title}</strong>
                </span>
              </span>
              <span
                className={`absolute inset-0 flex flex-col justify-end overflow-hidden rounded-[24px] border border-ink p-[26px] text-left text-ink [backface-visibility:hidden] [transform:rotateY(180deg)] ${card.accent === "purple" ? "bg-brand text-white" : card.accent === "yellow" ? "bg-yellow" : "bg-cream"}`}
              >
                <span className="mb-auto text-[9px] font-black tracking-[.09em] uppercase">
                  {card.number} / Our Life Campaign
                </span>
                <strong className="my-[30px] mb-[13px] display-2 text-[clamp(27px,3vw,44px)]">
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
