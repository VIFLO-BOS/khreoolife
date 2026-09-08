"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-[90svh] place-items-center bg-ink-deep pt-[120px] pb-10 text-white [&_.eyebrow]:mb-6 [&_.eyebrow]:flex [&_.eyebrow]:items-center [&_.eyebrow]:gap-[9px] [&_.eyebrow]:text-[11px] [&_.eyebrow]:leading-none [&_.eyebrow]:font-extrabold [&_.eyebrow]:tracking-[.13em] [&_.eyebrow]:text-yellow [&_.eyebrow]:uppercase [&_.eyebrow]:before:h-px [&_.eyebrow]:before:w-6 [&_.eyebrow]:before:bg-current [&_.eyebrow]:before:content-[''] [&_h1]:mb-6 [&_h1]:max-w-[700px] [&_p]:mb-12 [&_p]:max-w-[480px] [&_p]:text-[18px] [&_p]:text-white/70">
      <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
        <p className="mb-5 flex items-center gap-[9px] text-[11px] leading-none font-extrabold tracking-[.13em] text-brand uppercase before:h-px before:w-6 before:bg-current before:content-['']">A temporary interruption</p>
        <h1 className="font-display text-[clamp(42px,5vw,74px)] leading-[.98] font-normal">The page could not be loaded just now.</h1>
        <p>You can retry this page or return to the Khreeolife home page.</p>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn btn-brand" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
