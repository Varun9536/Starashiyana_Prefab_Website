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
    "Starashiyana Prefab LLP designs, fabricates and erects Pre-Engineered Steel Buildings (PEB) for industrial, warehouse, commercial and institutional projects across India, with our own manufacturing plant in Dharuhera, Haryana (Delhi NCR). Single-source accountability from concept to handover.",
  keywords: [
    "PEB manufacturer India",
    "pre-engineered steel building company",
    "pre-engineered building manufacturer",
    "industrial shed manufacturer",
    "steel warehouse construction company",
    "steel factory building",
    "PEB manufacturer Haryana",
    "steel building manufacturer Delhi NCR",
    "Dharuhera PEB",
    "mezzanine floor manufacturer",
    "cold storage steel building",
  ],
  // Social profile URLs for the `sameAs` field in Organization JSON-LD — this
  // is a real, verifiable signal Google uses to link a search result to the
  // right entity (and, longer-term, to the Knowledge Panel). Add real URLs
  // here once the profiles exist; leave empty rather than guessing at ones
  // that may not exist.
  socialLinks: [] as string[],
  // Override via NEXT_PUBLIC_SITE_URL (set at build time) for staging/preview deploys.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://starashiyanaprefab.com",
  // GA4 measurement ID. Override via NEXT_PUBLIC_GA_ID (e.g. leave unset on
  // staging/preview builds so test traffic doesn't pollute production data).
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "G-KN3MMQENDP",
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
  // Genuine corporate parent — used for an honest `parentOrganization` schema
  // relationship and a single contextual link in the About section. Keep
  // this as the ONE place this relationship is declared.
  parentCompany: {
    name: "Starashiyana Construction Pvt. Ltd.",
    url: "https://starashiyana.com",
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
