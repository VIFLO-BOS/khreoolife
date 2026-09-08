"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const legacyRoutes: Record<string, string> = {
  home: "/",
  projects: "/projects",
  events: "/events",
  "get-involved": "/get-involved",
  blog: "/blog",
  about: "/about",
  donate: "/donate",
};

export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const redirectLegacyHash = () => {
      const legacyRoute = window.location.hash.slice(1).toLowerCase();
      const destination = legacyRoutes[legacyRoute];

      if (destination) {
        router.replace(destination);
      }
    };

    redirectLegacyHash();
    window.addEventListener("hashchange", redirectLegacyHash);

    return () => window.removeEventListener("hashchange", redirectLegacyHash);
  }, [router]);

  return null;
}
