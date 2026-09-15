"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenText,
  Building2,
  CalendarDays,
  Camera,
  Church,
  Clock3,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  MapPin,
  Newspaper,
  Sparkles,
  UsersRound,
  X,
  Menu,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { BrandLogo } from "../ui/logo";

type MegaItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};
type MegaGroup = { label: string; href: string; items: MegaItem[] };

const megaGroups: MegaGroup[] = [
  {
    label: "Projects",
    href: "/projects",
    items: [
      {
        title: "Community Development",
        description:
          "Skill acquisition, education and practical community initiatives.",
        href: "/projects",
        icon: Building2,
      },
      {
        title: "Education",
        description: "Information, exposure, work experience and opportunity.",
        href: "/projects",
        icon: GraduationCap,
      },
      {
        title: "Christian Missions",
        description: "Intentional outreaches, evangelism and discipleship.",
        href: "/projects",
        icon: Church,
      },
      {
        title: "Iloba Outreach",
        description: "Community Development · Past.",
        href: "/projects",
        icon: MapPin,
      },
      {
        title: "Help 20 Students Get Into Uni",
        description: "Education Empowerment · Past.",
        href: "/projects",
        icon: BookOpenText,
      },
      {
        title: "Sharing The Ultimate Love Story",
        description: "Christian Missions · Past.",
        href: "/projects",
        icon: Heart,
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
    items: [
      {
        title: "Past Events",
        description: "Photos, recaps and documented outcomes.",
        href: "/events",
        icon: CalendarDays,
      },
      {
        title: "Present / Ongoing",
        description: "Current activity connected to projects.",
        href: "/events",
        icon: Clock3,
      },
      {
        title: "Future Events",
        description: "Upcoming announcements and opportunities.",
        href: "/events",
        icon: MapPin,
      },
    ],
  },
  {
    label: "Volunteer & Sponsor",
    href: "/get-involved",
    items: [
      {
        title: "Volunteer",
        description: "Participate in transformational outreach and service.",
        href: "/get-involved",
        icon: UsersRound,
      },
      {
        title: "Sponsor",
        description: "Financial, in-kind or partnership support.",
        href: "/get-involved",
        icon: Handshake,
      },
      {
        title: "Donate Now",
        description: "Give toward Khreeolife's work and future projects.",
        href: "/donate",
        icon: HeartHandshake,
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    items: [
      {
        title: "Devotionals",
        description: "Faith, reflection and The Ordained Life.",
        href: "/blog",
        icon: Sparkles,
      },
      {
        title: "Community Stories",
        description: "People, places and transformation from the field.",
        href: "/blog",
        icon: UsersRound,
      },
      {
        title: "Updates",
        description: "News from Khreeolife and its projects.",
        href: "/blog",
        icon: Newspaper,
      },
      {
        title: "Events Coverage",
        description: "Photos, recaps and highlights from outreaches.",
        href: "/blog",
        icon: Camera,
      },
    ],
  },
];

const directLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];


export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomeTop = pathname === "/" && !scrolled && !activeMega && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [pathname]);

  const activeGroup = useMemo(
    () => megaGroups.find((group) => group.label === activeMega),
    [activeMega],
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isHomeTop
            ? "border-transparent bg-transparent text-white"
            : "border-black/10 bg-cream/95 text-ink backdrop-blur-xl",
        )}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="site-container flex h-[76px] items-center gap-7 max-md:h-[68px]">
          <Link href="/" className="mr-auto" aria-label="Khreeolife home">
            <BrandLogo/>
          </Link>

          <nav
            className="hidden items-center gap-6 text-[11px] font-bold lg:flex"
            aria-label="Primary navigation"
          >
            <Link href="/" className="transition-opacity hover:opacity-60">
              Home
            </Link>
            {megaGroups.map((group) => (
              <div
                key={group.label}
                onMouseEnter={() => setActiveMega(group.label)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveMega((value) =>
                      value === group.label ? null : group.label,
                    )
                  }
                  className="flex items-center gap-1.5 py-7 transition-opacity hover:opacity-60"
                >
                  {group.label}
                  <span
                    className={cn(
                      "text-sm transition-transform",
                      activeMega === group.label && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
              </div>
            ))}
            <Link href="/about" className="transition-opacity hover:opacity-60">
              About
            </Link>
          </nav>

          <div className="hidden lg:block">
            <AnimatedButton
              href="/donate"
              label="Donate Now"
              variant={isHomeTop ? "yellow" : "brand"}
            />
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-current lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        <div
          className={cn(
            "absolute left-0 right-0 top-[76px] overflow-hidden rounded-b-[22px] bg-cream text-ink shadow-soft transition-all duration-300 max-lg:hidden",
            activeGroup
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0",
          )}
          onMouseEnter={() => activeGroup && setActiveMega(activeGroup.label)}
        >
          {activeGroup ? (
            <div className="site-container py-8">
              <div className="mb-5 flex items-end justify-between border-b border-ink/15 pb-4">
                <strong className="text-[11px] uppercase tracking-[.12em]">
                  {activeGroup.label}
                </strong>
                <Link
                  href={activeGroup.href}
                  className="border-b border-ink text-[11px] font-black"
                >
                  View all ↗
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {activeGroup.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group grid grid-cols-[76px_1fr] items-center gap-4 rounded-xl p-2 transition-colors hover:bg-brand/[.08]"
                    >
                      <span className="grid h-16 w-[74px] place-items-center rounded-[10px] border border-brand/20 bg-[#fbf7f0] text-brand transition-all group-hover:border-brand/35 group-hover:bg-brand-soft">
                        <Icon className="size-8" strokeWidth={1.35} />
                      </span>
                      <span>
                        <strong className="mb-1 block font-display text-[19px] font-normal leading-tight">
                          {item.title}
                        </strong>
                        <span className="block text-[11px] leading-5 text-[#615a60]">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-cream px-4 pb-12 pt-24 text-ink transition-all duration-300 lg:hidden",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0",
        )}
      >
        <div className="site-container">
          {[
            directLinks[0],
            ...megaGroups.map(({ label, href }) => ({ label, href })),
            directLinks[1],
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-ink py-3 font-display text-[clamp(34px,9vw,56px)] tracking-[-.05em]"
            >
              {item.label}
              <span>↗</span>
            </Link>
          ))}
          <div className="mt-7">
            <AnimatedButton href="/donate" label="Donate Now" variant="brand" />
          </div>
        </div>
      </div>
    </>
  );
}
