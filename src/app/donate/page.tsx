import type { Metadata } from "next";

import { DonationIntent } from "@/components/donation-intent";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Choose how you would like to support Khreeolife's Community Development, Education and Christian Missions work.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return <DonationIntent />;
}
