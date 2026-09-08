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
    <main className="grid min-h-[90svh] place-items-center bg-ink-deep pt-[120px] pb-10 text-white [&_h1]:mb-6 [&_h1]:max-w-[700px] [&_p]:mb-12 [&_p]:max-w-[480px] [&_p]:text-[18px] [&_p]:text-white/70">
      <div className="container-page">
        <p className="eyebrow">A temporary interruption</p>
        <h1 className="display-2">The page could not be loaded just now.</h1>
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
