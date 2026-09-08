"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Cross,
  GraduationCap,
  HeartHandshake,
  House,
  Menu,
  Newspaper,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { BrandLogo } from "@/components/logo";

interface MenuLink {
  description: string;
  href: string;
  icon: LucideIcon;
  label: string;
}

interface NavigationMenu {
  items: MenuLink[];
  key: string;
  label: string;
  viewAllLabel: string;
  viewAllPath: string;
}

const navigationMenus: NavigationMenu[] = [
  {
    key: "projects",
    label: "Projects",
    viewAllLabel: "View all projects",
    viewAllPath: "/projects",
    items: [
      {
        label: "Community Development",
        description: "Skill acquisition, education and community initiatives.",
        href: "/projects",
        icon: House,
      },
      {
        label: "Education",
        description: "Information, exposure, work experience and opportunity.",
        href: "/projects",
        icon: GraduationCap,
      },
      {
        label: "Christian Missions",
        description: "Intentional outreaches, evangelism and discipleship.",
        href: "/projects",
        icon: Cross,
      },
      {
        label: "Iloba Outreach",
        description: "Community Development · Past.",
        href: "/projects",
        icon: House,
      },
      {
        label: "Help 20 Students Get Into Uni",
        description: "Education Empowerment · Past.",
        href: "/projects",
        icon: GraduationCap,
      },
      {
        label: "Sharing The Ultimate Love Story",
        description: "Christian Missions · Past.",
        href: "/projects",
        icon: HeartHandshake,
      },
    ],
  },
  {
    key: "events",
    label: "Events",
    viewAllLabel: "View event timeline",
    viewAllPath: "/events",
    items: [
      {
        label: "Past Events",
        description: "Photos, recaps and documented outcomes.",
        href: "/events",
        icon: CalendarDays,
      },
      {
        label: "Present / Ongoing",
        description: "Current activity connected to projects.",
        href: "/events",
        icon: CalendarDays,
      },
      {
        label: "Future Events",
        description: "Upcoming announcements and opportunities.",
        href: "/events",
        icon: CalendarDays,
      },
    ],
  },
  {
    key: "involved",
    label: "Volunteer & Sponsor",
    viewAllLabel: "Get involved",
    viewAllPath: "/get-involved",
    items: [
      {
        label: "Volunteer",
        description: "Participate in transformational outreach and service.",
        href: "/get-involved",
        icon: Users,
      },
      {
        label: "Sponsor",
        description:
          "Support a project financially, in-kind or through partnership.",
        href: "/get-involved",
        icon: HeartHandshake,
      },
      {
        label: "Donate Now",
        description: "Give toward the work and the next project.",
        href: "/donate",
        icon: HeartHandshake,
      },
    ],
  },
  {
    key: "blog",
    label: "Blog",
    viewAllLabel: "Open magazine",
    viewAllPath: "/blog",
    items: [
      {
        label: "Devotionals",
        description: "Faith, reflection and the ordained life.",
        href: "/blog",
        icon: BookOpen,
      },
      {
        label: "Community Stories",
        description: "People, places and transformation from the field.",
        href: "/blog",
        icon: Users,
      },
      {
        label: "Updates",
        description: "News from Khreeolife and its projects.",
        href: "/blog",
        icon: Newspaper,
      },
      {
        label: "Events Coverage",
        description: "Photos, recaps and highlights from outreaches.",
        href: "/blog",
        icon: CalendarDays,
      },
    ],
  },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Volunteer & Sponsor" },
  { href: "/blog", label: "Blog / Magazine" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const activeMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 44);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-lock", isMobileMenuOpen);

    return () => document.body.classList.remove("menu-lock");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!activeMenu && !isMobileMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      const focusTarget = activeMenu
        ? activeMenuTriggerRef.current
        : mobileToggleRef.current;
      setActiveMenu(null);
      setIsMobileMenuOpen(false);
      focusTarget?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeMenu, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) {
      return;
    }

    const focusableElements =
      mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
    focusableElements[0]?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

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

    const mobileMenu = mobileMenuRef.current;
    mobileMenu.addEventListener("keydown", trapFocus);

    return () => mobileMenu.removeEventListener("keydown", trapFocus);
  }, [isMobileMenuOpen]);

  const activeNavigationMenu = navigationMenus.find(
    (menu) => menu.key === activeMenu,
  );
  const isLightNavigation = Boolean(
    isScrolled || activeMenu || isMobileMenuOpen || pathname !== "/",
  );
    const headerClassName = [
      "fixed z-[100] inset-x-0 top-0 isolate transition-[background,color,border-color,backdrop-filter] duration-[280ms]",
      isLightNavigation
        ? "border-b border-ink/8 bg-cream/[.97] text-ink backdrop-blur-[18px]"
        : "text-white",
    ]
    .filter(Boolean)
    .join(" ");

  function closeNavigation() {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={headerClassName}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] flex h-[var(--nav-height)] items-center gap-[30px]">
        <Link href="/" className="mr-auto" aria-label="Khreeolife home">
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-[26px] text-[11px] font-bold min-[1051px]:flex"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="inline-flex min-h-[var(--nav-height)] items-center gap-[7px] whitespace-nowrap hover:opacity-70"
            onClick={closeNavigation}
          >
            Home
          </Link>
          {navigationMenus.map((menu) => (
            <button
              key={menu.key}
              type="button"
              className="inline-flex min-h-[var(--nav-height)] cursor-pointer items-center gap-[7px] border-0 bg-transparent text-inherit whitespace-nowrap hover:opacity-70 [&>span]:text-[15px] [&>span]:leading-none [&>span]:transition-transform [&>span]:duration-200"
              aria-expanded={activeMenu === menu.key}
              aria-controls={`${menu.key}-menu`}
              onClick={(event) => {
                activeMenuTriggerRef.current = event.currentTarget;
                setActiveMenu((currentMenu) =>
                  currentMenu === menu.key ? null : menu.key,
                );
              }}
              onMouseEnter={(event) => {
                activeMenuTriggerRef.current = event.currentTarget;
                setActiveMenu(menu.key);
              }}
            >
              {menu.label}
              <span
                className={activeMenu === menu.key ? "rotate-45" : ""}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          ))}
          <Link
            href="/about"
            className="inline-flex min-h-[var(--nav-height)] items-center gap-[7px] whitespace-nowrap hover:opacity-70"
            onClick={closeNavigation}
          >
            About
          </Link>
        </nav>

        <Link
          href="/donate"
          className="hidden items-center gap-1.5 text-white min-[1051px]:inline-flex [&>span]:grid [&>span]:h-[42px] [&>span]:place-items-center [&>span]:rounded-full [&>span]:px-5 [&>span]:text-[11px] [&>span]:font-black [&>span]:transition-colors [&>span]:duration-300 [&>svg]:box-content [&>svg]:grid [&>svg]:size-[42px] [&>svg]:place-items-center [&>svg]:rounded-full [&>svg]:transition-[background,color,transform] [&>svg]:duration-300 hover:[&>span]:bg-brand-dark hover:[&>span]:text-white hover:[&>svg]:rotate-45 hover:[&>svg]:bg-brand-dark hover:[&>svg]:text-white"
          style={{
            color: isLightNavigation ? "var(--white)" : "var(--ink)",
          }}
          aria-label="Donate now"
          onClick={closeNavigation}
        >
          <span className={isLightNavigation ? "bg-brand" : "bg-yellow"}>
            Donate Now
          </span>
          <ArrowRight
            className={isLightNavigation ? "bg-brand" : "bg-yellow"}
            aria-hidden="true"
            size={17}
            strokeWidth={2.2}
          />
        </Link>

        <button
          ref={mobileToggleRef}
          type="button"
          className="hidden size-[42px] cursor-pointer place-items-center rounded-full border border-current bg-transparent max-[1050px]:grid"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Menu aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {activeNavigationMenu ? (
          <motion.div
            id={`${activeNavigationMenu.key}-menu`}
            className="absolute z-[-1] top-[var(--nav-height)] inset-x-0 rounded-b-[22px] bg-cream text-ink shadow-[0_24px_54px_rgb(0_0_0_/_13%)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            onMouseEnter={() => setActiveMenu(activeNavigationMenu.key)}
          >
            <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)] pt-[34px] pb-[38px]">
              <div className="mb-[25px] flex items-end justify-between gap-[30px] border-b border-ink/14 pb-[19px]">
                <strong className="text-[12px] tracking-[0.1em] uppercase">
                  {activeNavigationMenu.label}
                </strong>
                <Link
                  href={activeNavigationMenu.viewAllPath}
                  className="inline-flex items-center gap-1.5 border-b border-current text-[11px] font-black"
                  onClick={closeNavigation}
                >
                  {activeNavigationMenu.viewAllLabel}
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-[34px] gap-y-[18px]">
                {activeNavigationMenu.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="grid grid-cols-[82px_minmax(0,1fr)] items-center gap-[18px] rounded-[12px] px-2 py-2.5 transition-colors duration-200 hover:bg-brand/8"
                      onClick={closeNavigation}
                    >
                      <span
                        className="grid size-[74px] h-16 place-items-center rounded-[10px] border border-[#d9cfdd] bg-[#fbf7f0] p-[13px] text-brand"
                        aria-hidden="true"
                      >
                        <Icon size={32} strokeWidth={1.45} />
                      </span>
                      <span>
                        <strong className="mb-1 block font-display text-[19px] leading-[1.05] font-normal">
                          {item.label}
                        </strong>
                        <span className="block text-[11px] leading-[1.45] text-[#615a60]">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.nav
            ref={mobileMenuRef}
            id="mobile-navigation"
            className="fixed z-[-2] inset-0 overflow-auto bg-cream pt-[92px] text-ink"
            aria-label="Mobile navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mx-auto w-[min(var(--max-width),calc(100%_-_64px))] max-[1050px]:w-[min(var(--max-width),calc(100%_-_38px))] max-[760px]:w-[calc(100%_-_28px)] max-[400px]:w-[calc(100%_-_20px)]">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between gap-5 border-b border-ink py-2.5 font-display text-[clamp(34px,9vw,62px)] leading-[1.1]"
                  onClick={closeNavigation}
                >
                  <span>{link.label}</span>
                  <ArrowRight aria-hidden="true" size={25} />
                </Link>
              ))}
              <Link
                href="/donate"
                className="mt-6 inline-flex border-0"
                onClick={closeNavigation}
              >
                <span className="inline-flex rotate-[-4deg] rounded-[4px] bg-yellow px-2.5 py-[5px] text-[12px] font-black text-ink">
                  Donate Now
                </span>
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
