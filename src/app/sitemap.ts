import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

const routes = [
  "",
  "/projects",
  "/events",
  "/get-involved",
  "/blog",
  "/about",
  "/donate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
