import type { Metadata } from "next";
import type { Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

/*
 * Typography.
 *
 * Before this the site loaded no font at all: --display-font was a bare
 * `Georgia, serif` stack. Georgia does not ship on Android, so the display
 * face - the entire character of the brand - silently fell back to whatever
 * serif the device had.
 *
 * Source Serif 4 is a transitional serif chosen to sit close to Georgia's
 * metrics (similar x-height and generous width), so headings occupy nearly
 * the same space and nothing reflows. Source Sans 3 replaces Arial for UI.
 *
 * `display: "swap"` plus Next's automatic metric-matched fallback means text
 * paints immediately in the fallback and swaps without a layout jump.
 */
/*
 * Both are requested as VARIABLE fonts (no `weight` key). Naming explicit
 * weights makes next/font fetch one static file per weight - that pulled 20
 * files here. The variable axis covers 400 through 900 in a single file per
 * style, which matters because the markup spans font-normal to font-black.
 */
const displayFont = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-display-loaded",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const uiFont = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ui-loaded",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khreeolife.org"),
  title: {
    default: "Khreeolife | The Ordained Life",
    template: "%s | Khreeolife",
  },
  description:
    "Khreeolife is a faith-based non-profit transforming people and communities through the love of God, both in words and in deeds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Khreeolife",
    title: "Khreeolife | The Ordained Life",
    description:
      "Transforming people and communities through the love of God, in words and deeds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khreeolife | The Ordained Life",
    description:
      "Transforming people and communities through the love of God, in words and deeds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#8332AB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${uiFont.variable}`}
    >
      <body>
        <LegacyHashRedirect />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
