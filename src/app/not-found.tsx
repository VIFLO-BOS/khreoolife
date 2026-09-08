import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[90svh] place-items-center bg-ink-deep pt-[120px] pb-10 text-white [&_.eyebrow]:mb-6 [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-yellow [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h1]:mb-6 [&_h1]:max-w-[700px] [&_p]:mb-12 [&_p]:max-w-[480px] [&_p]:text-[18px] [&_p]:text-white/70">
      <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
        <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">Page not found</p>
        <h1 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">
          This part of the story has not been written here.
        </h1>
        <p>
          The page you requested does not exist. Return home to explore
          Khreeolife&apos;s projects, events and ways to get involved.
        </p>
        <Link href="/" className="btn btn-brand">
          Return home
        </Link>
      </div>
    </main>
  );
}
