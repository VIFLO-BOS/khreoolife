import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/site";

const cards = [
  {
    title: "The Ordained Life",
    description: "A life shaped by purpose, service, transformation and the love of God — lived visibly in community.",
    image: images.community,
    back: "bg-brand text-white",
  },
  {
    title: "Beholding. Becoming.",
    description: "What young people continually see and learn shapes what they can become. Education and exposure make possibility visible early.",
    image: images.education,
    back: "bg-yellow text-ink",
  },
  {
    title: "With The Gospel",
    description: "Christian mission expressed through intentional outreach, evangelism, discipleship and practical love.",
    image: images.mission,
    back: "bg-cream text-ink",
  },
];

export function LifeCampaign() {
  return (
    <section className="bg-paper pb-28 pt-14 max-md:pb-20 max-md:pt-10">
      <div className="site-container">
        <Reveal className="flex justify-end">
          <h2 className="display-title w-[56%] text-[clamp(42px,5.2vw,75px)] max-lg:w-full">Our Life Campaign</h2>
        </Reveal>

        <Reveal className="relative mt-7 min-h-[610px] max-md:grid max-md:min-h-0 max-md:grid-cols-1 max-md:gap-4">
          <span className="sticker absolute left-1/2 top-0 z-10 -translate-x-1/2 max-md:hidden">the ordained life</span>
          {cards.map((card, index) => {
            const pos = [
              "left-[2%] top-[18px]",
              "left-[34.5%] top-[104px]",
              "right-[2%] top-[18px]",
            ][index];
            return (
              <article
                key={card.title}
                className={`flip-card absolute aspect-[.82] w-[31%] max-md:relative max-md:left-auto max-md:right-auto max-md:top-auto max-md:w-full max-md:aspect-[1.05] transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl ${pos}`}
              >
                <div className="flip-card-inner">
                  <div className="flip-face overflow-hidden rounded-[24px] border border-ink bg-[#ddd]">
                    <Image src={card.image} alt={card.title} fill className="object-cover saturate-[.9]" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 text-white">
                      <span className="text-[9px] font-black tracking-[.1em]">0{index + 1}</span>
                      <strong className="font-display text-2xl font-normal text-right">{card.title}</strong>
                    </div>
                  </div>
                  <div className={`flip-face flip-back flex flex-col justify-between rounded-[24px] border border-ink p-8 ${card.back}`}>
                    <span className="text-[9px] font-black uppercase tracking-[.12em] opacity-70">0{index + 1} / Our Life Campaign</span>
                    <div>
                      <h3 className="display-title text-[clamp(31px,3vw,45px)]">{card.title}</h3>
                      <p className="mt-4 max-w-[340px] text-[14px] leading-6 opacity-75">{card.description}</p>
                    </div>
                    <span className="w-fit border-b border-current pb-1 text-[11px] font-black">Explore the story ↗</span>
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
