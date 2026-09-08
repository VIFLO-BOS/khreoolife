import type { Metadata } from "next";
import type { Viewport } from "next";

import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

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
    <html lang="en">
      <body>
        <LegacyHashRedirect />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
