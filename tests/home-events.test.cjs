const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

// Source contracts protect the requested design; they do not replace browser QA.
const source = fs.readFileSync(path.join(__dirname, "../components/home/HorizontalEvents.tsx"), "utf8");

test("Latest Events keeps the original pinned scroll and card emphasis", () => {
  for (const fragment of [
    "style={{ height: sectionHeight }}",
    "sticky top-[var(--nav-height)]",
    "style={{ x }}",
    "y: index === active ? 0 : 28",
    "scale: index === active ? 1 : 0.95",
    "opacity: index === active ? 1 : 0.68",
    "h-[255px]",
    "style={{ width: progressWidth }}",
    "scrollToCard(active - 1)",
    "scrollToCard(active + 1)",
    "Keep scrolling",
  ]) assert(source.includes(fragment), fragment);
  for (const removed of ["isPinned", "nativeProgress", "canPinEventStrip", "syncNativeScroll"])
    assert(!source.includes(removed), `Withdrawn replacement: ${removed}`);
});

test("restoration retains typography and narrow-screen width safeguards", () => {
  for (const fragment of [
    "leading-section", "leading-card", "leading-body", "leading-control",
    "max-md:text-center", "max-md:justify-center",
    "w-[min(clamp(320px,29vw,390px),calc(100vw-28px))]",
    'window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"',
  ]) assert(source.includes(fragment), fragment);
});
