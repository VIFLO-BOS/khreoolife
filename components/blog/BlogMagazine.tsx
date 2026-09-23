"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { images, magazineCategories } from "@/data/site";

type Article = {
  id: string;
  category: (typeof magazineCategories)[number];
  title: string;
  excerpt: string;
  image?: string;
  tone?: "purple" | "yellow";
  body: string;
};

const articles: Article[] = [
  {
    id: "words-deeds",
    category: "Community Stories",
    title: "Love in words and in deeds",
    excerpt: "How Khreeolife's mission combines what is spoken with what is practically done.",
    image: images.community3,
    body: "The website architecture frames Khreeolife as a faith-based non-profit transforming people and communities through the love of God both in words and in deeds. This editorial format is ready for the organisation's final field stories, photography and documented outcomes.",
  },
  {
    id: "ordained-life",
    category: "Devotionals",
    title: "The Ordained Life",
    excerpt: "A reflection space anchored in Khreeolife's motto.",
    tone: "purple",
    body: "The brand identity defines “The Ordained Life” as Khreeolife's motto. This preview demonstrates how that language can become a clean long-form devotional experience without inventing final devotional copy.",
  },
  {
    id: "uni-update",
    category: "Updates",
    title: "Help 20 Students Get Into Uni",
    excerpt: "An education empowerment project designed around opportunity and progression.",
    image: images.education,
    body: "As final content is populated, this post format can combine the project story, sponsorship-drive update, photography, participant voices and documented outcomes.",
  },
  {
    id: "love-coverage",
    category: "Events Coverage",
    title: "Sharing The Ultimate Love Story",
    excerpt: "Event coverage combining story, impact summary, photography and a related project link.",
    image: images.mission,
    body: "The architecture notes an impact-summary example for this event including 100 fed, 100 taught and healings recorded. A final event article can combine those documented outcomes with approved imagery and testimony.",
  },
  {
    id: "brand-language",
    category: "Community Stories",
    title: "Language of the life",
    excerpt: "Khreeolife's identity system uses expressive sticker language around the central motto.",
    tone: "yellow",
    body: "Alongside “The Ordained Life,” the brand deck includes “the miraculous life” and “supernatural life.” These can be used as supporting visual language while The Ordained Life remains the primary motto.",
  },
];

export function BlogMagazine() {
  const [filter, setFilter] = useState<(typeof magazineCategories)[number]>("All");
  const [selected, setSelected] = useState<Article | null>(null);
  const visible = useMemo(() => articles.filter((article) => filter === "All" || article.category === filter), [filter]);

  return (
    <>
      <div className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-10 flex items-center justify-between gap-4 rounded-[22px] border border-ink/20 bg-white/95 p-3 backdrop-blur-xl max-lg:relative max-lg:top-auto max-lg:flex-col max-lg:items-start">
        <div className="flex flex-wrap gap-2">
          {magazineCategories.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`leading-control rounded-full border border-ink px-3 py-2 text-[9px] font-black uppercase tracking-[.07em] transition-colors ${filter === item ? "bg-ink text-white" : "hover:bg-brand hover:text-white"}`}>{item}</button>
          ))}
        </div>
        <span className="pr-2 text-[10px] font-black uppercase tracking-[.08em] text-[#6f6972] leading-caption">Magazine Index</span>
      </div>

      <motion.div layout className="grid grid-cols-12 auto-rows-[130px] gap-3 max-md:grid-cols-1 max-md:auto-rows-auto">
        <AnimatePresence mode="popLayout">
          {visible.map((article, index) => {
            const originalIndex = articles.indexOf(article);
            const span = originalIndex === 0 ? "col-span-5 row-span-6" : originalIndex === 3 ? "col-span-7 row-span-4" : "col-span-4 row-span-4";
            return (
              <motion.article layout key={article.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className={`card-border flex min-h-[440px] flex-col ${span} max-md:col-span-1 max-md:row-span-1`}>
                {article.image ? (
                  <div className="relative min-h-0 flex-1 overflow-hidden"><Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 50vw" /></div>
                ) : (
                  <div className={`flex min-h-[250px] flex-1 items-center justify-center gap-3 p-6 ${article.tone === "purple" ? "bg-brand text-white" : "bg-yellow text-ink"}`}>
                    {article.tone === "purple" ? <span className="font-logo text-[120px] font-black tracking-[-18px]">ee</span> : <><span className="sticker -rotate-6">the miraculous life</span><span className="sticker rotate-6">supernatural life</span></>}
                  </div>
                )}
                <div className="bg-paper p-6">
                  <span className="pill-tag text-brand">{article.category}</span>
                  <h3 className="mt-4 font-display text-[30px] font-normal tracking-[-.04em] leading-card">{article.title}</h3>
                  <p className="mt-3 text-sm text-[#6f6972] leading-body">{article.excerpt}</p>
                  <button onClick={() => setSelected(article)} className="mt-5 border-b border-ink pb-1 text-[11px] font-black leading-control">Read preview ↗</button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <motion.div className="fixed inset-0 z-[100]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/65 leading-control" onClick={() => setSelected(null)} aria-label="Close article" />
            <motion.article initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.45, ease: [0.2,0.75,0.2,1] }} className="absolute bottom-0 right-0 top-0 w-[min(820px,94vw)] overflow-y-auto bg-paper p-14 max-md:p-7 max-md:pt-20">
              <button onClick={() => setSelected(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-ink leading-control" aria-label="Close"><X className="size-5" /></button>
              <div className="text-[10px] font-black uppercase tracking-[.1em] text-brand leading-caption">{selected.category}</div>
              <h2 className="display-title mt-8 text-[clamp(48px,6vw,82px)] leading-card">{selected.title}</h2>
              <p className="mt-5 text-xl text-[#565057] leading-lead">{selected.excerpt}</p>
              <div className="mt-10 font-display text-xl leading-reading">{selected.body}</div>
              <div className="mt-12 flex justify-between gap-6 border-t border-ink pt-5 text-[10px] text-[#6f6972] max-sm:flex-col leading-caption"><span>Editorial preview</span><span>Author, date and social-share UI can be connected when final content is supplied.</span></div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
