import type { Metadata } from "next";

import { BlogMagazine } from "@/components/blog-magazine";

export const metadata: Metadata = {
  title: "Blog / Magazine",
  description:
    "Read Khreeolife devotionals, community stories, project updates and event coverage.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogMagazine />;
}
