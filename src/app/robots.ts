import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /connect is the digital business card — reachable only by scanning
      // its printed QR code, never linked from the site or meant to be
      // discoverable/indexed.
      disallow: ["/connect"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
