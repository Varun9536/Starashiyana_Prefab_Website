import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Digital business cards and their QR pages are reached by direct links,
      // not meant to be discoverable/indexed.
      disallow: ["/connect", "/qr"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
