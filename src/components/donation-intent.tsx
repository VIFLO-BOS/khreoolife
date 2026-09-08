"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Cross, House } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import { images } from "@/data/site";

const amounts = [
  "N5,000",
  "N10,000",
  "N25,000",
  "N50,000",
  "N100,000",
  "Custom",
];

const givingDirections = [
  {
    description:
      "Development initiatives including skill acquisition, education and practical community support.",
    icon: House,
    number: "01",
    title: "Community Development",
    tone: "",
  },
  {
    description:
      "Information, exposure, alternative education, work experience and opportunity for young people.",
    icon: BookOpen,
    number: "02",
    title: "Education",
    tone: "yellow",
  },
  {
    description: "Intentional outreaches, evangelism and discipleship.",
    icon: Cross,
    number: "03",
    title: "Christian Missions",
    tone: "green",
  },
];

export function DonationIntent() {
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  const [customAmount, setCustomAmount] = useState("");
  const [supportArea, setSupportArea] = useState("Where needed most");
  const [isExplained, setIsExplained] = useState(false);

  const displayedAmount =
    selectedAmount === "Custom"
      ? customAmount || "Custom amount"
      : selectedAmount;

  return (
    <main>
      <section className="relative min-h-[90svh] overflow-hidden bg-brand text-white tablet:min-h-[800px]">
        <div className="absolute inset-0 [&_img]:object-cover [&_img]:saturate-50 [&_img]:mix-blend-multiply">
          <SiteImage
            alt="Hands supporting a community initiative"
            priority
            sizes="100vw"
            src={images.support}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(79_29_102_/_95%),rgb(79_29_102_/_40%)_65%),linear-gradient(0deg,rgb(79_29_102_/_80%),transparent_65%)]" />
        <div className="container-page relative z-2 grid grid-cols-[1.1fr_.9fr] items-end gap-10 pt-[160px] pb-[80px] laptop:grid-cols-1 laptop:pt-[120px]">
          <Reveal className="[&_h1]:mb-6 [&_p]:mb-12 [&_p]:max-w-[420px] [&_p]:text-[18px] [&_p]:text-white/80">
            <p className="eyebrow">Donate Now</p>
            <h1 className="display-2">Put resources behind transformation.</h1>
            <p>
              Support Khreeolife&apos;s work across Community Development,
              Education and Christian Missions.
            </p>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the ordained life</span>
          </Reveal>
          <Reveal className="rounded-[32px] border border-white/20 bg-white/10 p-[42px] backdrop-blur-md tablet:p-[26px]">
            <div className="mb-8 flex items-center justify-between border-b border-white/20 pb-[18px] [&>span]:text-[11px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase [&>small]:text-[11px] [&>small]:text-white/60">
              <span>Donation intent</span>
              <small>Prototype - payment gateway is future scope.</small>
            </div>
            <fieldset>
              <legend>Choose an amount</legend>
              <div className="grid grid-cols-3 gap-2.5 phone:grid-cols-2">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`min-h-[54px] cursor-pointer rounded-[14px] border border-white/30 bg-transparent text-[14px] font-bold text-white transition-[background,border-color] hover:bg-white/10 ${selectedAmount === amount ? "border-white bg-white text-brand" : ""}`}
                    aria-pressed={selectedAmount === amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsExplained(false);
                    }}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </fieldset>
            {selectedAmount === "Custom" ? (
              <div className="mt-6 [&_label]:mb-2.5 [&_label]:block [&_label]:text-[11px] [&_label]:font-black [&_label]:tracking-[.05em] [&_label]:uppercase [&_input]:w-full [&_input]:rounded-[14px] [&_input]:border [&_input]:border-white/30 [&_input]:bg-transparent [&_input]:p-[18px] [&_input]:text-[16px] [&_input]:text-white [&_input]:outline-none [&_input]:transition-[border-color,background] [&_input]:placeholder:text-white/40 [&_input:focus]:border-white [&_input:focus]:bg-white/5 [&_select]:w-full [&_select]:cursor-pointer [&_select]:appearance-none [&_select]:rounded-[14px] [&_select]:border [&_select]:border-white/30 [&_select]:bg-transparent [&_select]:p-[18px] [&_select]:text-[16px] [&_select]:text-white [&_select]:outline-none [&_select]:transition-[border-color,background] [&_select]:hover:bg-white/5 [&_select]:focus:border-white [&_select>option]:text-ink">
                <label htmlFor="custom-donation-amount">Custom amount</label>
                <input
                  id="custom-donation-amount"
                  inputMode="numeric"
                  placeholder="Enter an amount"
                  value={customAmount}
                  onChange={(event) => setCustomAmount(event.target.value)}
                />
              </div>
            ) : null}
            <div className="mt-6 [&_label]:mb-2.5 [&_label]:block [&_label]:text-[11px] [&_label]:font-black [&_label]:tracking-[.05em] [&_label]:uppercase [&_input]:w-full [&_input]:rounded-[14px] [&_input]:border [&_input]:border-white/30 [&_input]:bg-transparent [&_input]:p-[18px] [&_input]:text-[16px] [&_input]:text-white [&_input]:outline-none [&_input]:transition-[border-color,background] [&_input]:placeholder:text-white/40 [&_input:focus]:border-white [&_input:focus]:bg-white/5 [&_select]:w-full [&_select]:cursor-pointer [&_select]:appearance-none [&_select]:rounded-[14px] [&_select]:border [&_select]:border-white/30 [&_select]:bg-transparent [&_select]:p-[18px] [&_select]:text-[16px] [&_select]:text-white [&_select]:outline-none [&_select]:transition-[border-color,background] [&_select]:hover:bg-white/5 [&_select]:focus:border-white [&_select>option]:text-ink">
              <label htmlFor="support-area">Support Area</label>
              <select
                id="support-area"
                value={supportArea}
                onChange={(event) => setSupportArea(event.target.value)}
              >
                <option>Where needed most</option>
                <option>Community Development</option>
                <option>Education</option>
                <option>Christian Missions</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-brand mt-8 w-full"
              onClick={() => setIsExplained(true)}
            >
              Continue to Donation <ArrowRight aria-hidden="true" size={15} />
            </button>
            <p className="mt-6 text-center text-[11px] leading-[1.6] text-white/60" aria-live="polite">
              {isExplained
                ? `${displayedAmount} for ${supportArea} has been selected as donation intent. No online payment is processed in this version.`
                : "No online payment is processed in V1. Payment gateway integration is listed as future scope."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-[120px] tablet:py-[80px]">
        <div className="container-page">
          <Reveal className="rich-intro-grid">
            <div>
              <p className="eyebrow">Where support can go</p>
              <h2 className="display-2">
                Choose the work you want to stand behind.
              </h2>
            </div>
            <div className="rich-intro-copy">
              <p>
                Khreeolife&apos;s three pillars provide a clear framework for
                directing support.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-4 laptop:grid-cols-1">
            {givingDirections.map((direction) => {
              const Icon = direction.icon;

              return (
                <Reveal
                  key={direction.title}
                  className={`flex flex-col rounded-[24px] border border-ink p-10 tablet:p-8 [&>span]:mb-auto [&>span]:font-display [&>span]:text-[64px] [&>span]:leading-[.8] [&>span]:text-ink/15 [&_h3]:my-6 [&_h3]:font-display [&_h3]:text-[32px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[15px] [&_p]:text-muted ${direction.tone}`}
                >
                  <Icon
                    className="mb-12 text-brand"
                    aria-hidden="true"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <span>{direction.number}</span>
                  <h3>{direction.title}</h3>
                  <p>{direction.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-deep py-[80px] text-white">
        <Reveal className="container-page grid grid-cols-4 gap-8 laptop:grid-cols-2 phone:grid-cols-1 [&>div>p]:max-w-[200px] [&>div>p]:text-[13px] [&>div>p]:text-white/60">
          <div>
            <span className="mb-2 block font-display text-[54px] leading-none text-yellow">20</span>
            <p>students named in the university support project.</p>
          </div>
          <div>
            <span className="mb-2 block font-display text-[54px] leading-none text-yellow">4</span>
            <p>projects currently documented in the architecture.</p>
          </div>
          <div>
            <span className="mb-2 block font-display text-[54px] leading-none text-yellow">3</span>
            <p>core pillars guiding the organisation&apos;s work.</p>
          </div>
          <div>
            <span className="mb-2 block font-display text-[54px] leading-none text-yellow">1</span>
            <p>faith-driven mission: love in words and deeds.</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-brand py-[120px] text-white tablet:py-[80px]">
        <Reveal className="container-page grid grid-cols-[1fr_.7fr] items-end gap-10 laptop:grid-cols-1 [&>div:last-child>p]:mb-8 [&>div:last-child>p]:max-w-[420px] [&>div:last-child>p]:text-[18px] [&>div:last-child>p]:text-white/70">
          <div>
            <p className="eyebrow">V1 Scope</p>
            <h2 className="display-2">
              Designed now.
              <br />
              Payment processing later.
            </h2>
          </div>
          <div>
            <p>
              The site architecture explicitly places online donation payment
              processing in a future implementation phase. This page presents
              the intended donor experience without pretending a live gateway is
              connected.
            </p>
            <Link href="/get-involved" className="btn btn-dark">
              Sponsor a project instead{" "}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
