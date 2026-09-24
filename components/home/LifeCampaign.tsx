import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/site";

const cards = [
  {
    title: "The Ordained Life",
    description:
      "A life shaped by purpose, service, transformation and the love of God — lived visibly in community.",
    image: images.community,
    back: "bg-brand text-white",
  },
  {
    title: "Beholding. Becoming.",
    description:
      "What young people continually see and learn shapes what they can become. Education and exposure make possibility visible early.",
    image: images.education,
    back: "bg-yellow text-ink",
  },
  {
    title: "With The Gospel",
    description:
      "Christian mission expressed through intentional outreach, evangelism, discipleship and practical love.",
    image: images.mission,
    back: "bg-cream text-ink",
  },
];

export function LifeCampaign() {
  return (
    <section className="bg-paper pb-28 pt-14 max-md:pb-20 max-md:pt-10">
      <div className="site-container">
        <Reveal className="flex justify-end">
          <h2 className="display-title w-[56%] text-[clamp(42px,5.2vw,75px)] max-lg:w-full max-md:text-center max-md:text-balance max-md:text-[clamp(34px,9vw,42px)] leading-section">
            Our Life Campaign
          </h2>
        </Reveal>

        <Reveal className="relative mt-7 min-h-[610px] grid-cols-1 max-lg:grid max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-4">
          <span className="sticker absolute left-1/2 top-0 z-10 -translate-x-1/2 max-lg:hidden">
            the ordained life
          </span>
          {cards.map((card, index) => {
            const pos = [
              "left-[2%] top-[18px]",
              "left-[34.5%] top-[104px]",
              "right-[2%] top-[18px]",
            ][index];
            return (
              <article
                key={card.title}
                className={`flip-card absolute aspect-[.82] w-[31%] max-lg:relative max-lg:left-auto max-lg:right-auto max-lg:top-auto max-lg:mx-auto max-lg:w-full max-lg:max-w-[560px] max-lg:aspect-auto transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl ${pos}`}
              >
                <div className="flip-card-inner max-lg:grid max-lg:h-auto">
                  <div className="flip-face overflow-hidden rounded-[24px] border border-ink bg-[#ddd] max-lg:relative max-lg:inset-auto max-lg:col-start-1 max-lg:row-start-1 max-lg:aspect-[1.05] max-lg:self-stretch">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover saturate-[.9]"
                      sizes="(max-width: 1023px) min(560px, 100vw), 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 text-white">
                      <span className="text-[9px] font-black tracking-[.1em] leading-caption">
                        0{index + 1}
                      </span>
                      <strong className="font-display text-2xl font-normal text-right leading-card">
                        {card.title}
                      </strong>
                    </div>
                  </div>
                  <div
                    className={`flip-face flip-back flex flex-col justify-between rounded-[24px] border border-ink p-8 max-lg:relative max-lg:inset-auto max-lg:col-start-1 max-lg:row-start-1 max-lg:gap-6 max-md:items-center max-md:p-6 max-md:text-center ${card.back}`}
                  >
                    <span className="text-[9px] font-black uppercase tracking-[.12em] opacity-70 leading-caption">
                      0{index + 1} / Our Life Campaign
                    </span>
                    <div>
                      <h3 className="display-title text-[clamp(31px,3vw,45px)] leading-card">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-[340px] text-[14px] opacity-75 max-md:mx-auto leading-body">
                        {card.description}
                      </p>
                    </div>
                    <span className="w-fit border-b border-current pb-1 text-[11px] font-black leading-caption">
                      Explore the story ↗
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
