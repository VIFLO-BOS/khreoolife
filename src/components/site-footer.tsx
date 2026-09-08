import Link from "next/link";

import { BrandLogo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep pt-[72px] pb-[26px] text-white">
      <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
        <div className="grid grid-cols-[1.45fr_repeat(3,1fr)] gap-[54px] max-[1050px]:grid-cols-2 max-[760px]:grid-cols-1">
          <div>
            <Link
              href="/"
              className="mb-[18px] inline-flex"
              aria-label="Khreeolife home"
            >
              <BrandLogo />
            </Link>
            <p className="max-w-[350px] text-white/60">
              The Ordained Life — transforming people and communities through
              the love of God in words and deeds.
            </p>
            <span className="inline-flex rotate-[-4deg] rounded-[4px] bg-yellow px-2.5 py-[5px] text-xs font-black text-ink">
              the ordained life
            </span>
          </div>
          <div>
            <h2 className="mb-[15px] text-[9px] tracking-[0.12em] text-white/44 uppercase">
              Quick Links
            </h2>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/"
            >
              Home
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/about"
            >
              About
            </Link>
          </div>
          <div>
            <h2 className="mb-[15px] text-[9px] tracking-[0.12em] text-white/44 uppercase">
              Get Involved
            </h2>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/get-involved"
            >
              Volunteer
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/get-involved"
            >
              Sponsor
            </Link>
            <Link
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="/donate"
            >
              Donate Now
            </Link>
          </div>
          <div>
            <h2 className="mb-[15px] text-[9px] tracking-[0.12em] text-white/44 uppercase">
              Connect
            </h2>
            <a
              href="https://instagram.com/theordainedlife"
              target="_blank"
              rel="noreferrer"
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
            >
              @theordainedlife
            </a>
            <a
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="mailto:hello@khreeolife.org"
            >
              Contact Email
            </a>
            <a
              className="my-2 block text-[13px] text-white/76 hover:text-yellow"
              href="#contact-phone"
            >
              Contact Phone
            </a>
          </div>
        </div>
        <div className="mt-[45px] flex justify-between gap-5 border-t border-white/14 pt-[19px] text-[10px] text-white/42 max-[760px]:grid">
          <span>
            © 2026 Khreeolife — The Ordained Life. All Rights Reserved.
          </span>
          <span>Community Development · Education · Christian Missions</span>
        </div>
      </div>
    </footer>
  );
}
