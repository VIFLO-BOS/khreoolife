import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[90svh] place-items-center bg-ink-deep pt-[120px] pb-10 text-white [&_h1]:mb-6 [&_h1]:max-w-[700px] [&_p]:mb-12 [&_p]:max-w-[480px] [&_p]:text-[18px] [&_p]:text-white/70">
      <div className="container-page">
        <p className="eyebrow">Page not found</p>
        <h1 className="display-2">
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
