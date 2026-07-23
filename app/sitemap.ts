import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/prebooking", "/trips", "/gallery", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${SITE.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
