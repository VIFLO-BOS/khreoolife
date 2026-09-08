"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import { articles, type Article, type ArticleCategory } from "@/data/site";

type BlogFilter = "all" | ArticleCategory;

const filters: { label: string; value: BlogFilter }[] = [
  { value: "all", label: "All" },
  { value: "devotional", label: "Devotionals" },
  { value: "community", label: "Community Stories" },
  { value: "updates", label: "Updates" },
  { value: "events", label: "Events Coverage" },
];

export function BlogMagazine() {
  const [activeFilter, setActiveFilter] = useState<BlogFilter>("all");
  const [selectedArticleId, setSelectedArticleId] = useState<
    Article["id"] | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const articleSheetRef = useRef<HTMLElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const featuredArticle = articles.find((article) => article.id === "ordained");
  const selectedArticle = articles.find(
    (article) => article.id === selectedArticleId,
  );
  const indexArticles = articles.filter((article) => article.id !== "ordained");
  const visibleArticles = indexArticles.filter(
    (article) => activeFilter === "all" || article.category === activeFilter,
  );

  useEffect(() => {
    if (!selectedArticle) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedArticleId(null);
        return;
      }

      if (event.key !== "Tab" || !articleSheetRef.current) {
        return;
      }

      const focusableElements =
        articleSheetRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.body.classList.add("drawer-open");
    window.addEventListener("keydown", closeOnEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", closeOnEscape);
      openerRef.current?.focus();
    };
  }, [selectedArticle]);

  function openArticle(articleId: Article["id"], opener: HTMLElement) {
    openerRef.current = opener;
    setSelectedArticleId(articleId);
  }

  function closeArticle() {
    setSelectedArticleId(null);
  }

  return (
    <main>
      <section className="border-b border-ink/10 bg-cream pt-[140px] pb-[80px] max-[760px]:pt-[110px] max-[760px]:pb-12">
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] mb-[70px] grid grid-cols-[1.1fr_.9fr] items-end gap-10 max-[1050px]:grid-cols-1 max-[760px]:mb-10 max-[760px]:gap-6">
          <Reveal className="[&_h1]:mt-5">
            <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Blog / Magazine</p>
            <h1 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
              Stories from the work.
              <br />
              Reflections from the life.
            </h1>
          </Reveal>
          <Reveal className="[&>p]:mb-6 [&>p]:max-w-[420px] [&>p]:text-[18px] [&>p]:leading-[1.4] [&>p]:text-muted">
            <p>
              A magazine-style content hub for Khreeolife updates, stories from
              the field and community news.
            </p>
            <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the ordained life</span>
          </Reveal>
        </div>
        <div className="flex w-full overflow-hidden border-y border-ink/10 py-5" aria-hidden="true">
          <div className="flex animate-[mag-loop_30s_linear_infinite] items-center whitespace-nowrap [&>i]:mx-5 [&>i]:text-[10px] [&>i]:not-italic [&>i]:text-brand [&>span]:text-[14px] [&>span]:font-black [&>span]:tracking-[.05em] [&>span]:uppercase">
            <span>Devotionals</span>
            <i>*</i>
            <span>Community Stories</span>
            <i>*</i>
            <span>Updates</span>
            <i>*</i>
            <span>Events Coverage</span>
            <i>*</i>
            <span>Devotionals</span>
            <i>*</i>
            <span>Community Stories</span>
          </div>
        </div>
      </section>

      {featuredArticle ? (
        <section className="bg-white py-[120px] max-[760px]:py-[80px]">
          <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
            <Reveal className="grid grid-cols-[1.1fr_.9fr] gap-6 rounded-[32px] border border-ink p-3 pr-[50px] max-[1050px]:grid-cols-1 max-[1050px]:pr-3 max-[1050px]:pb-[50px]">
              <div className="relative min-h-[460px] overflow-hidden rounded-[22px] [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
                {featuredArticle.image && featuredArticle.imageAlt ? (
                  <SiteImage
                    alt={featuredArticle.imageAlt}
                    sizes="(max-width: 760px) 100vw, 52vw"
                    src={featuredArticle.image}
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-center py-10 max-[1050px]:px-5 max-[1050px]:py-0 [&>div:first-child]:mb-[26px] [&>div:first-child]:flex [&>div:first-child]:items-center [&>div:first-child]:justify-between [&>div:first-child]:border-b [&>div:first-child]:border-ink/15 [&>div:first-child]:pb-4 [&_.tag]:text-[10px] [&_.tag]:font-black [&_.tag]:tracking-[.08em] [&_.tag]:text-brand [&_.tag]:uppercase [&_.featured-count]:font-display [&_.featured-count]:text-[16px] [&_.featured-count]:italic [&_.featured-count]:text-muted [&_h2]:mb-5 [&_p]:max-w-[480px] [&_p]:text-[17px] [&_p]:text-muted [&_.text-action]:mt-[34px] [&_.text-action]:self-start">
                <div>
                  <span className="tag">{featuredArticle.label}</span>
                  <span className="featured-count">01</span>
                </div>
                <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">{featuredArticle.title}</h2>
                <p>{featuredArticle.description}</p>
                <div className="mt-8 flex gap-[26px] text-[11px] font-bold tracking-[.04em] text-ink uppercase max-[400px]:flex-col max-[400px]:gap-3">
                  <span>Khreeolife Editorial</span>
                  <span>Content grows progressively</span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-[6px] border-b border-current bg-transparent pb-0.5 text-[11px] font-black cursor-pointer"
                  onClick={(event) =>
                    openArticle(featuredArticle.id, event.currentTarget)
                  }
                >
                  Read preview <ArrowRight aria-hidden="true" size={14} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section
        className="bg-[#f4f2ee] py-[120px] max-[760px]:py-[80px]"
        aria-labelledby="magazine-index-title"
      >
        <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <h2 id="magazine-index-title" className="sr-only">
            Magazine Index
          </h2>
          <Reveal className="sticky top-[calc(var(--nav-height)+10px)] z-20 mb-10 flex items-center justify-between gap-[18px] rounded-full border border-ink/18 bg-white/90 px-[15px] py-[13px] backdrop-blur-[16px] max-[760px]:relative max-[760px]:top-auto max-[760px]:flex-col max-[760px]:items-start max-[760px]:rounded-[20px]">
            <div className="flex flex-wrap gap-[6px]" aria-label="Filter magazine articles">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={`min-h-8 cursor-pointer rounded-full border border-transparent bg-transparent px-3 text-[10px] font-black tracking-[.04em] hover:border-ink hover:bg-ink hover:text-white ${activeFilter === filter.value ? "border-ink bg-ink text-white" : ""}`}
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <span className="pr-2 text-[10px] font-black tracking-[.08em] text-muted uppercase whitespace-nowrap">Magazine Index</span>
          </Reveal>
          <div className="grid grid-cols-3 gap-[18px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1">
            {visibleArticles.map((article, index) => (
              <article
                key={article.id}
                className={[
                  "editorial-card",
                  index === 0 ? "editorial-tall" : "",
                  index === 3 ? "editorial-wide" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <ArticleArt article={article} />
                <div className="flex flex-1 flex-col p-[34px] [&_.tag]:mb-[18px] [&_.tag]:text-[9px] [&_.tag]:font-black [&_.tag]:tracking-[.08em] [&_.tag]:text-brand [&_.tag]:uppercase [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:mb-[26px] [&_p]:text-[14px] [&_p]:text-muted [&_.text-action]:mt-auto [&_.text-action]:self-start">
                  <span className="tag">{article.label}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-[6px] border-b border-current bg-transparent pb-0.5 text-[11px] font-black cursor-pointer"
                    onClick={(event) =>
                      openArticle(article.id, event.currentTarget)
                    }
                  >
                    Read preview <ArrowRight aria-hidden="true" size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[120px] text-center max-[760px]:py-[80px]">
        <Reveal className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
          <div className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
            &quot;Reflecting Jesus Christ&apos;s love through words and
            actions.&quot;
          </div>
        </Reveal>
      </section>

      <AnimatePresence>
        {selectedArticle ? (
          <div className="article-modal">
            <motion.button
              type="button"
              className="article-backdrop"
              aria-label="Close article"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
            />
            <motion.article
              ref={articleSheetRef}
              className="fixed top-4 right-4 bottom-4 z-[195] flex w-full max-w-[620px] flex-col overflow-y-auto rounded-[32px] border border-ink bg-white p-[50px] shadow-[0_24px_64px_rgb(18_17_19_/_15%)] max-[760px]:inset-0 max-[760px]:max-w-none max-[760px]:rounded-none max-[760px]:p-6 max-[760px]:pt-[80px]"
              role="dialog"
              aria-modal="true"
              aria-label={selectedArticle.title}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 26, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, y: 26, scale: 0.985 }
              }
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="absolute top-6 right-6 grid size-[42px] cursor-pointer place-items-center rounded-full border border-ink bg-white transition-[background,color] hover:bg-ink hover:text-white max-[760px]:fixed"
                aria-label="Close article"
                onClick={closeArticle}
              >
                <X aria-hidden="true" size={23} />
              </button>
              <div className="mb-6 text-[10px] font-black tracking-[.08em] text-brand uppercase">{selectedArticle.label}</div>
              <h2 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">{selectedArticle.title}</h2>
              <p className="my-7 border-l-2 border-brand pl-[22px] text-[18px] text-ink">
                {selectedArticle.description}
              </p>
              <div className="mt-[34px] [&_p]:mb-6 [&_p]:text-[15px] [&_p]:leading-[1.65] [&_p]:text-[#4d484e]">
                <p>{selectedArticle.body}</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-5 border-t border-ink/20 pt-[24px] text-[10px] font-black tracking-[.05em] text-muted uppercase">
                <span>Editorial preview</span>
                <span>
                  Share, author and date can be added when content is finalised.
                </span>
              </div>
            </motion.article>
          </div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

function ArticleArt({ article }: { article: Article }) {
  if (article.image && article.imageAlt) {
    return (
      <div className="relative h-[260px] border-b border-ink [&_img]:object-cover [&_img]:saturate-[.88] [&_img]:contrast-[1.02]">
        <SiteImage
          alt={article.imageAlt}
          sizes="(max-width: 760px) 100vw, 33vw"
          src={article.image}
        />
      </div>
    );
  }

  if (article.presentation === "yellow") {
    return (
      <div className="relative h-[260px] border-b border-ink p-[34px] bg-yellow">
        <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">the miraculous life</span>
        <span className="inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase">supernatural life</span>
      </div>
    );
  }

  return (
    <div className="relative h-[260px] border-b border-ink p-[34px] bg-brand">
      <span className="absolute right-[14px] bottom-[-22px] font-display text-[90px] leading-none font-normal tracking-[-12px] text-brand-dark/20">ee</span>
    </div>
  );
}
