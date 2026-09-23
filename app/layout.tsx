import type { Metadata } from "next";
import { gotham } from "./fonts";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Khreeolife The Ordained Life",
    template: "%s | Khreeolife",
  },
  description:
    "Khreeolife is a faith based non-profit transforming people and communities through the love of God in words and deeds.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={gotham.variable}>
      <body
        className="bg-paper text-ink antialiased"
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
