const fs = require('fs');
const path = require('path');

const classMappings = {
  // Global Typography & Elements
  'display': 'font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal',
  'eyebrow': 'mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.1em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-[\'\']',
  'sticker': 'inline-flex rounded-full border border-current px-[9px] py-[6px] text-[9px] leading-none font-black tracking-[.08em] uppercase',
  'btn btn-brand': 'inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-[18px] text-[10px] font-black tracking-[.04em] transition-[background,color,transform] duration-[220ms] hover:-translate-y-0.5 border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark',
  'btn btn-dark': 'inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-[18px] text-[10px] font-black tracking-[.04em] transition-[background,color,transform] duration-[220ms] hover:-translate-y-0.5 border-ink bg-ink text-white hover:border-brand hover:bg-brand',
  'btn btn-light': 'inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-[18px] text-[10px] font-black tracking-[.04em] transition-[background,color,transform] duration-[220ms] hover:-translate-y-0.5 border-white bg-white text-ink hover:border-yellow hover:bg-yellow',
  'btn btn-outline': 'inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-[18px] text-[10px] font-black tracking-[.04em] transition-[background,color,transform] duration-[220ms] hover:-translate-y-0.5 border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
  'text-action': 'inline-flex items-center gap-[6px] border-b border-current bg-transparent pb-0.5 text-[11px] font-black cursor-pointer',
  'rich-pad': 'py-[120px] max-[760px]:py-[80px]',
  'section-head': 'mb-[60px] grid grid-cols-[1fr_.55fr] items-end gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-6 [&>p]:max-w-[460px] [&>p]:text-[16px] [&>p]:text-muted',

  // About Page
  'about-cinematic': 'relative min-h-[92svh] bg-[#000] max-[760px]:min-h-[800px]',
  'about-cinematic-media': 'absolute inset-0 [&_img]:object-cover [&_img]:saturate-50',
  'about-cinematic-overlay': 'absolute inset-0 bg-[linear-gradient(0deg,rgb(0_0_0_/_82%),transparent_45%)]',
  'about-cinematic-copy': 'absolute right-0 bottom-0 left-0 z-1 pb-[120px] text-white [&_.eyebrow]:text-yellow [&_h1]:my-4 [&_h1]:max-w-[890px] [&_p:not(.eyebrow)]:max-w-[500px] [&_p:not(.eyebrow)]:text-[clamp(17px,1.5vw,20px)] [&_p:not(.eyebrow)]:text-white/80 max-[760px]:pb-[90px]',
  'about-roll': 'absolute bottom-6 flex w-full justify-between px-8 text-[9px] font-black tracking-[.18em] text-white/50 uppercase max-[760px]:hidden',
  'about-story-rich': 'bg-white',
  'about-story-grid': 'grid grid-cols-[1.2fr_.8fr] gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10',
  'about-story-title': '[&_.display]:my-5',
  'about-story-copy': 'grid gap-6 pt-2',
  'about-large-copy': 'font-display text-[26px] leading-[1.3] text-ink',
  'about-manifesto': 'bg-brand py-[140px] text-white max-[760px]:py-[90px]',
  'about-manifesto-row': 'grid grid-cols-[.4fr_1fr] items-center gap-10 border-b border-white/20 py-[45px] first:pt-0 last:border-b-0 last:pb-0 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:py-8 [&>span]:text-[13px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase',
  'about-pillars': 'bg-[#131115] text-white [&_.rich-intro-copy]:border-white/20 [&_.rich-intro-copy_p]:text-white/70',
  'about-pillar-stack': 'grid gap-5',
  'about-pillar-panel pillar-1': 'grid min-h-[460px] grid-cols-[1fr_.85fr] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1920] max-[1050px]:grid-cols-1 max-[1050px]:grid-rows-[minmax(300px,40vh)_auto] [&_.about-pillar-copy]:order-first',
  'about-pillar-panel pillar-2': 'grid min-h-[460px] grid-cols-[1fr_.85fr] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1920] max-[1050px]:grid-cols-1 max-[1050px]:grid-rows-[minmax(300px,40vh)_auto] max-[1050px]:[&_.about-pillar-copy]:order-last',
  'about-pillar-panel pillar-3': 'grid min-h-[460px] grid-cols-[1fr_.85fr] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1920] max-[1050px]:grid-cols-1 max-[1050px]:grid-rows-[minmax(300px,40vh)_auto] [&_.about-pillar-copy]:order-first',
  'about-pillar-image': 'relative [&_img]:object-cover',
  'about-pillar-copy': 'flex flex-col justify-center p-[5vw] max-[1050px]:p-[40px] [&>span]:mb-auto [&>span]:text-[12px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase [&_h3]:mb-4 [&_h3]:font-display [&_h3]:text-[clamp(32px,3.5vw,48px)] [&_h3]:leading-none [&_h3]:font-normal [&_p]:max-w-[480px] [&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:text-white/70',
  'team-rich': 'bg-cream',
  'team-rich-grid': 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3',
  'team-rich-card': 'flex min-h-[380px] flex-col rounded-[24px] border border-ink bg-white p-[34px] max-[760px]:min-h-[340px]',
  'team-portrait team-initial': 'mb-auto grid size-[85px] place-items-center rounded-full bg-[#e8e4db] [&_img]:rounded-full [&_img]:object-cover font-display text-[32px] text-ink',
  'team-portrait team-initial team-initial-alt': 'mb-auto grid size-[85px] place-items-center rounded-full bg-brand text-white [&_img]:rounded-full [&_img]:object-cover font-display text-[32px]',
  'team-rich-copy': '[&>span]:mb-2 [&>span]:block [&>span]:text-[10px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-brand [&>span]:uppercase [&_h3]:mb-1.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted',
  'team-rich-card future-team': 'flex min-h-[380px] flex-col rounded-[24px] border border-dashed border-ink bg-transparent p-[34px] max-[760px]:min-h-[340px]',
  'future-team-mark': 'mb-auto grid size-[85px] place-items-center rounded-full border border-dashed border-ink/40 text-[24px] text-ink/40',
  'partner-rich': 'bg-[#131115] py-[110px] text-white max-[760px]:py-[80px]',
  'partner-rich-grid': 'grid grid-cols-[1fr_.7fr] items-center gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 [&_.eyebrow]:mb-5 [&_.eyebrow]:text-yellow [&>div:last-child>p]:mb-8 [&>div:last-child>p]:max-w-[420px] [&>div:last-child>p]:text-[18px] [&>div:last-child>p]:text-white/70',

  // Blog / Magazine
  'magazine-hero': 'border-b border-ink/10 bg-cream pt-[140px] pb-[80px] max-[760px]:pt-[110px] max-[760px]:pb-12',
  'magazine-hero-grid': 'mb-[70px] grid grid-cols-[1.1fr_.9fr] items-end gap-10 max-[1050px]:grid-cols-1 max-[760px]:mb-10 max-[760px]:gap-6',
  'magazine-title': '[&_h1]:mt-5',
  'magazine-deck': '[&>p]:mb-6 [&>p]:max-w-[420px] [&>p]:text-[18px] [&>p]:leading-[1.4] [&>p]:text-muted',
  'magazine-marquee': 'flex w-full overflow-hidden border-y border-ink/10 py-5',
  'magazine-marquee-track': 'flex animate-[mag-loop_30s_linear_infinite] items-center whitespace-nowrap [&>i]:mx-5 [&>i]:text-[10px] [&>i]:not-italic [&>i]:text-brand [&>span]:text-[14px] [&>span]:font-black [&>span]:tracking-[.05em] [&>span]:uppercase',
  'featured-editorial': 'bg-white',
  'featured-editorial-card': 'grid grid-cols-[1.1fr_.9fr] gap-6 rounded-[32px] border border-ink p-3 pr-[50px] max-[1050px]:grid-cols-1 max-[1050px]:pr-3 max-[1050px]:pb-[50px]',
  'featured-editorial-image': 'relative min-h-[460px] overflow-hidden rounded-[22px] [&_img]:object-cover',
  'featured-editorial-copy': 'flex flex-col justify-center py-10 max-[1050px]:px-5 max-[1050px]:py-0 [&>div:first-child]:mb-[26px] [&>div:first-child]:flex [&>div:first-child]:items-center [&>div:first-child]:justify-between [&>div:first-child]:border-b [&>div:first-child]:border-ink/15 [&>div:first-child]:pb-4 [&_.tag]:text-[10px] [&_.tag]:font-black [&_.tag]:tracking-[.08em] [&_.tag]:text-brand [&_.tag]:uppercase [&_.featured-count]:font-display [&_.featured-count]:text-[16px] [&_.featured-count]:italic [&_.featured-count]:text-muted [&_h2]:mb-5 [&_p]:max-w-[480px] [&_p]:text-[17px] [&_p]:text-muted [&_.text-action]:mt-[34px] [&_.text-action]:self-start',
  'article-meta': 'mt-8 flex gap-[26px] text-[11px] font-bold tracking-[.04em] text-ink uppercase max-[400px]:flex-col max-[400px]:gap-3',
  'magazine-index': 'bg-[#f4f2ee]',
  'sticky-filter': 'sticky top-[calc(var(--nav-height)+10px)] z-20 mb-10 flex items-center justify-between gap-[18px] rounded-full border border-ink/18 bg-white/90 px-[15px] py-[13px] backdrop-blur-[16px] max-[760px]:relative max-[760px]:top-auto max-[760px]:flex-col max-[760px]:items-start max-[760px]:rounded-[20px]',
  'filter-row': 'flex flex-wrap gap-[6px]',
  'filter': 'min-h-8 cursor-pointer rounded-full border border-transparent bg-transparent px-3 text-[10px] font-black tracking-[.04em] hover:border-ink hover:bg-ink hover:text-white',
  'filter active': 'min-h-8 cursor-pointer rounded-full border border-ink bg-ink px-3 text-[10px] font-black tracking-[.04em] text-white',
  'filter-count': 'pr-2 text-[10px] font-black tracking-[.08em] text-muted uppercase whitespace-nowrap',
  'editorial-grid': 'grid grid-cols-3 gap-[18px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1',
  'editorial-card': 'flex flex-col overflow-hidden rounded-[24px] border border-ink bg-white',
  'editorial-tall': 'col-[1/2] row-[1/3] max-[1050px]:col-auto max-[1050px]:row-auto [&_.editorial-image]:h-[460px] max-[1050px]:[&_.editorial-image]:h-[320px]',
  'editorial-wide': 'col-[2/4] grid-cols-[1fr_.8fr] flex-row max-[1050px]:col-auto max-[1050px]:flex-col [&_.editorial-image]:h-auto [&_.editorial-image]:w-[45%] max-[1050px]:[&_.editorial-image]:h-[320px] max-[1050px]:[&_.editorial-image]:w-full [&_.editorial-solid]:w-[45%] max-[1050px]:[&_.editorial-solid]:w-full',
  'editorial-image': 'relative h-[260px] border-b border-ink [&_img]:object-cover',
  'editorial-solid': 'relative h-[260px] border-b border-ink p-[34px]',
  'editorial-yellow': 'bg-yellow',
  'editorial-purple': 'bg-brand',
  'brand-emoticon': 'absolute right-[14px] bottom-[-22px] font-display text-[90px] leading-none font-normal tracking-[-12px] text-brand-dark/20',
  'editorial-copy': 'flex flex-1 flex-col p-[34px] [&_.tag]:mb-[18px] [&_.tag]:text-[9px] [&_.tag]:font-black [&_.tag]:tracking-[.08em] [&_.tag]:text-brand [&_.tag]:uppercase [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:mb-[26px] [&_p]:text-[14px] [&_p]:text-muted [&_.text-action]:mt-auto [&_.text-action]:self-start',
  'editorial-quote': 'bg-white py-[120px] text-center max-[760px]:py-[80px]',
  'article-sheet': 'fixed top-4 right-4 bottom-4 z-[195] flex w-full max-w-[620px] flex-col overflow-y-auto rounded-[32px] border border-ink bg-white p-[50px] shadow-[0_24px_64px_rgb(18_17_19_/_15%)] max-[760px]:inset-0 max-[760px]:max-w-none max-[760px]:rounded-none max-[760px]:p-6 max-[760px]:pt-[80px]',
  'drawer-close': 'absolute top-6 right-6 grid size-[42px] cursor-pointer place-items-center rounded-full border border-ink bg-white transition-[background,color] hover:bg-ink hover:text-white max-[760px]:fixed',
  'article-sheet-label': 'mb-6 text-[10px] font-black tracking-[.08em] text-brand uppercase',
  'article-sheet-intro': 'my-7 border-l-2 border-brand pl-[22px] text-[18px] text-ink',
  'article-sheet-body': 'mt-[34px] [&_p]:mb-6 [&_p]:text-[15px] [&_p]:leading-[1.65] [&_p]:text-[#4d484e]',
  'article-share': 'mt-auto flex items-center justify-between gap-5 border-t border-ink/20 pt-[24px] text-[10px] font-black tracking-[.05em] text-muted uppercase',

  // Donation Intent
  'donate-rich-hero': 'relative min-h-[90svh] overflow-hidden bg-brand text-white max-[760px]:min-h-[800px]',
  'donate-rich-image': 'absolute inset-0 [&_img]:object-cover [&_img]:saturate-50 [&_img]:mix-blend-multiply',
  'donate-rich-shade': 'absolute inset-0 bg-[linear-gradient(90deg,rgb(79_29_102_/_95%),rgb(79_29_102_/_40%)_65%),linear-gradient(0deg,rgb(79_29_102_/_80%),transparent_65%)]',
  'donate-rich-grid': 'relative z-2 grid grid-cols-[1.1fr_.9fr] items-end gap-10 pt-[160px] pb-[80px] max-[1050px]:grid-cols-1 max-[1050px]:pt-[120px]',
  'donate-rich-copy': '[&_h1]:mb-6 [&_p]:mb-12 [&_p]:max-w-[420px] [&_p]:text-[18px] [&_p]:text-white/80',
  'donate-rich-form': 'rounded-[32px] border border-white/20 bg-white/10 p-[42px] backdrop-blur-md max-[760px]:p-[26px]',
  'donate-form-head': 'mb-8 flex items-center justify-between border-b border-white/20 pb-[18px] [&>span]:text-[11px] [&>span]:font-black [&>span]:tracking-[.1em] [&>span]:text-yellow [&>span]:uppercase [&>small]:text-[11px] [&>small]:text-white/60',
  'amounts': 'grid grid-cols-3 gap-2.5 max-[400px]:grid-cols-2',
  'amount': 'min-h-[54px] cursor-pointer rounded-[14px] border border-white/30 bg-transparent text-[14px] font-bold text-white transition-[background,border-color] hover:bg-white/10',
  'amount active': 'min-h-[54px] cursor-pointer rounded-[14px] border border-white bg-white text-[14px] font-bold text-brand',
  'field': 'mt-6 [&_label]:mb-2.5 [&_label]:block [&_label]:text-[11px] [&_label]:font-black [&_label]:tracking-[.05em] [&_label]:uppercase [&_input]:w-full [&_input]:rounded-[14px] [&_input]:border [&_input]:border-white/30 [&_input]:bg-transparent [&_input]:p-[18px] [&_input]:text-[16px] [&_input]:text-white [&_input]:outline-none [&_input]:transition-[border-color,background] [&_input]:placeholder:text-white/40 [&_input:focus]:border-white [&_input:focus]:bg-white/5 [&_select]:w-full [&_select]:cursor-pointer [&_select]:appearance-none [&_select]:rounded-[14px] [&_select]:border [&_select]:border-white/30 [&_select]:bg-transparent [&_select]:p-[18px] [&_select]:text-[16px] [&_select]:text-white [&_select]:outline-none [&_select]:transition-[border-color,background] [&_select]:hover:bg-white/5 [&_select]:focus:border-white [&_select>option]:text-ink',
  'donate-intent-button': 'mt-8 w-full border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark',
  'manual-note': 'mt-6 text-center text-[11px] leading-[1.6] text-white/60',
  'give-directions': 'bg-white',
  'give-grid': 'grid grid-cols-3 gap-4 max-[1050px]:grid-cols-1',
  'give-card': 'flex flex-col rounded-[24px] border border-ink p-10 max-[760px]:p-8 [&>span]:mb-auto [&>span]:font-display [&>span]:text-[64px] [&>span]:leading-[.8] [&>span]:text-ink/15 [&_h3]:my-6 [&_h3]:font-display [&_h3]:text-[32px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[15px] [&_p]:text-muted',
  'give-card yellow': 'flex flex-col rounded-[24px] border border-ink p-10 max-[760px]:p-8 bg-[#fdfaf3] [&>span]:mb-auto [&>span]:font-display [&>span]:text-[64px] [&>span]:leading-[.8] [&>span]:text-ink/15 [&_h3]:my-6 [&_h3]:font-display [&_h3]:text-[32px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[15px] [&_p]:text-muted',
  'give-card green': 'flex flex-col rounded-[24px] border border-ink p-10 max-[760px]:p-8 bg-[#f6fcf5] [&>span]:mb-auto [&>span]:font-display [&>span]:text-[64px] [&>span]:leading-[.8] [&>span]:text-ink/15 [&_h3]:my-6 [&_h3]:font-display [&_h3]:text-[32px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[15px] [&_p]:text-muted',
  'give-icon': 'mb-12 text-brand',
  'donate-impact-band': 'bg-[#131115] py-[80px] text-white',
  'donate-impact-grid': 'grid grid-cols-4 gap-8 max-[1050px]:grid-cols-2 max-[400px]:grid-cols-1 [&>div>p]:max-w-[200px] [&>div>p]:text-[13px] [&>div>p]:text-white/60',
  'impact-number': 'mb-2 block font-display text-[54px] leading-none text-yellow',
  'donation-scope': 'bg-brand py-[120px] text-white max-[760px]:py-[80px]',
  'donation-scope-grid': 'grid grid-cols-[1fr_.7fr] items-end gap-10 max-[1050px]:grid-cols-1 [&_.eyebrow]:mb-5 [&_.eyebrow]:text-yellow [&>div:last-child>p]:mb-8 [&>div:last-child>p]:max-w-[420px] [&>div:last-child>p]:text-[18px] [&>div:last-child>p]:text-white/70',

  // Inner Pages (Events, Projects)
  'rich-hero-projects': '[&_h1]:max-w-[700px]',
  'events-rich-hero': '[&_h1]:max-w-[800px]',
  'project-intro': 'bg-white',
  'project-principles': 'bg-cream',
  'principle-rail': 'flex flex-wrap gap-3',
  'principle-card': 'flex min-h-[300px] flex-1 basis-[240px] flex-col rounded-[24px] border border-ink bg-white p-[34px] max-[760px]:min-h-auto [&>span]:mb-auto [&>span]:font-display [&>span]:text-[42px] [&>span]:text-ink/20 max-[760px]:[&>span]:mb-8 [&_h3]:mb-2.5 [&_h3]:font-display [&_h3]:text-[26px] [&_h3]:leading-[1.1] [&_h3]:font-normal [&_p]:text-[14px] [&_p]:text-muted',
  'inner-closing-cta': 'bg-[#131115] py-[130px] text-white max-[760px]:py-[90px]',
  'inner-closing-grid': 'grid grid-cols-[1fr_.7fr] items-center gap-[60px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 [&_.eyebrow]:mb-5 [&_.eyebrow]:text-yellow [&>div:last-child>p]:mb-10 [&>div:last-child>p]:max-w-[380px] [&>div:last-child>p]:text-[20px] [&>div:last-child>p]:leading-[1.4] [&>div:last-child>p]:text-white/70',
  'split-cta': 'inline-flex cursor-pointer items-center overflow-hidden rounded-full border border-white bg-white font-black tracking-[.04em] text-ink transition-transform duration-[220ms] hover:-translate-y-1 hover:[&_.circle]:bg-brand hover:[&_.circle]:text-white hover:[&_.label]:text-brand',
  'split-cta .label': 'px-6 text-[10px] uppercase transition-colors',
  'split-cta .circle': 'grid size-[52px] place-items-center rounded-full border border-white bg-cream text-[18px] transition-colors',
  'events-archive': 'bg-cream',
  'events-philosophy': 'bg-brand py-[140px] text-white max-[760px]:py-[90px]',
  'events-philosophy-grid': 'grid grid-cols-[1fr_.6fr] items-center gap-[70px] max-[1050px]:grid-cols-1 max-[1050px]:gap-10 [&_.big-quote]:text-[clamp(44px,6vw,92px)] [&_.big-quote]:leading-[.98] [&_.sticker]:mb-8 [&_.sticker]:border-white/30 [&>div:last-child>p]:mb-10 [&>div:last-child>p]:max-w-[380px] [&>div:last-child>p]:text-[20px] [&>div:last-child>p]:leading-[1.4] [&>div:last-child>p]:text-white/80',
  'event-date-tile': 'mb-[26px] grid size-[115px] place-items-center rounded-2xl border border-white/20 bg-white/5 text-center text-[10px] font-black tracking-[.1em] text-yellow uppercase leading-[1.6]',

  // Error & Not Found
  'route-fallback': 'grid min-h-[90svh] place-items-center bg-[#110e12] pt-[120px] pb-10 text-white [&_.eyebrow]:mb-6 [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.1em] [&_.eyebrow]:text-yellow [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[\'\'] [&_h1]:mb-6 [&_h1]:max-w-[700px] [&_p]:mb-12 [&_p]:max-w-[480px] [&_p]:text-[18px] [&_p]:text-white/70',
  'route-fallback-actions': 'flex flex-wrap gap-3',
};

const componentsDir = path.join(__dirname, 'src', 'components');
const appDir = path.join(__dirname, 'src', 'app');

function replaceClassesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We need to carefully replace classes within className="..."
  // Using a regex to find className attributes
  const classNameRegex = /className=(["'])(.*?)\1/g;
  
  content = content.replace(classNameRegex, (match, quote, classList) => {
    let classes = classList.split(/\s+/);
    
    // Check for exact multi-word class replacements first
    for (const [key, value] of Object.entries(classMappings)) {
       if (key.includes(' ')) {
           if (classList.includes(key)) {
               classes = classList.replace(key, value).split(/\s+/);
           }
       }
    }

    // Then single-word classes
    let newClasses = classes.map(cls => {
      if (classMappings[cls] && !cls.includes(' ')) {
        return classMappings[cls];
      }
      return cls;
    });
    
    // Combine back and ensure uniqueness
    let finalClasses = [...new Set(newClasses.join(' ').split(/\s+/))].filter(Boolean).join(' ');
    return `className=${quote}${finalClasses}${quote}`;
  });

  // Also handle template literals with className: className={`...`}
  const templateClassNameRegex = /className=\{`([^`]+)`\}/g;
  content = content.replace(templateClassNameRegex, (match, classList) => {
    let classesStr = classList;
    for (const [key, value] of Object.entries(classMappings)) {
       if (key.includes(' ')) {
           classesStr = classesStr.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
       } else {
           classesStr = classesStr.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
       }
    }
    // Simple deduplication for string literals might not be perfect with dynamic expressions, 
    // but the regexes will cover static parts.
    return `className={\`${classesStr}\`}`;
  });

  // Specifically target <div className="split-cta"> inside Link in projects/page.tsx
  if (content.includes('className="split-cta"')) {
    content = content.replace(/className="split-cta"/g, `className="${classMappings['split-cta']}"`);
    content = content.replace(/className="label"/g, `className="${classMappings['split-cta .label']}"`);
    content = content.replace(/className="circle"/g, `className="${classMappings['split-cta .circle']}"`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${path.relative(__dirname, filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceClassesInFile(fullPath);
    }
  }
}

walkDir(componentsDir);
walkDir(appDir);
console.log('Migration complete.');
