/**
 * Single source of truth for organization identity & contact details.
 * Read by metadata, JSON-LD, the header CTA, footer, contact section and
 * floating action buttons — update once here, it propagates everywhere.
 */
export const siteConfig = {
  name: "Starashiyana Prefab LLP",
  shortName: "Starashiyana Prefab",
  tagline: "Built on experience. Framed in steel.",
  description:
    "Starashiyana Prefab LLP designs, fabricates and erects Pre-Engineered Steel Buildings (PEB) for industrial, warehouse, commercial and institutional projects across India. Single-source accountability from concept to handover.",
  keywords: [
    "PEB manufacturer India",
    "pre-engineered steel building",
    "industrial shed",
    "warehouse construction",
    "steel factory building",
    "Dharuhera PEB",
    "mezzanine steel structure",
  ],
  // Override via NEXT_PUBLIC_SITE_URL (set at build time) for staging/preview deploys.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://starashiyanaprefab.com",
  locale: "en_IN",
  contact: {
    email: "starashiyana.prefab@gmail.com",
    phoneDisplay: "+91 88005 75571",
    phoneHref: "+918800575571",
    whatsappHref: "https://wa.me/918800575571",
  },
  addresses: {
    registeredOffice: "J-63, Basement Floor, Saket, New Delhi – 110017, India",
    manufacturingUnit:
      "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur, Dharuhera, District Rewari, Haryana – 123110, India",
  },
  manufacturingUnitStructured: {
    streetAddress:
      "Khewat No. 138, Khatoni No. 139, Kila No. 16, Rajpura, Near Alamgirpur",
    addressLocality: "Dharuhera",
    addressRegion: "Haryana",
    postalCode: "123110",
    addressCountry: "IN",
  },
  founders: [
    {
      name: "Harish Kumar Premi",
      role: "Founder & Technical Mentor",
    },
    {
      name: "Tushar Premi",
      role: "Co-Founder & Projects Lead",
    },
    {
      name: "Tanishq Premi",
      role: "Co-Founder & Strategy",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
