import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { ChromeGate } from "@/components/layout/ChromeGate";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Leads with the category/search term rather than the brand name — most
// searches for a growing company are generic ("PEB manufacturer in India"),
// not branded, and Google gives real weight to what's early in the title.
const PRIMARY_TITLE = `Pre-Engineered Steel Building (PEB) Manufacturer in India | ${siteConfig.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: PRIMARY_TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: siteConfig.founders.map((founder) => ({ name: founder.name })),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: PRIMARY_TITLE,
    description: siteConfig.description,
    images: [{ url: "/icon.png" }],
  },
  twitter: {
    card: "summary",
    title: PRIMARY_TITLE,
    description: siteConfig.description,
    images: ["/icon.png"],
  },
};

const logoUrl = `${siteConfig.url}/icon.png`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: logoUrl,
  image: logoUrl,
  description:
    "Pre-Engineered Building (PEB) manufacturer offering design, fabrication and erection of industrial, warehouse and commercial steel structures across India.",
  // Explicitly distinguishes this specialist PEB entity from its parent
  // (a general civil contractor) — both for Google and for a human reading
  // the raw data, so the two are understood as related but distinct.
  disambiguatingDescription:
    "An independent Pre-Engineered Building (PEB) and steel structure specialist — not a general civil contractor. Part of the Starashiyana group; a distinct entity from parent company Starashiyana Construction Pvt. Ltd., which handles general civil, commercial and hospitality construction.",
  knowsAbout: [
    "Pre-Engineered Buildings",
    "Steel Structure Fabrication",
    "Industrial Shed Construction",
    "Clear-Span Warehousing",
    "Cold Storage Steel Buildings",
    "Mezzanine Floor Systems",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentCompany.name,
    url: siteConfig.parentCompany.url,
  },
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phoneHref,
  areaServed: "India",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.manufacturingUnitStructured,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.contact.phoneHref,
      email: siteConfig.contact.email,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  founders: siteConfig.founders.map((founder) => ({
    "@type": "Person",
    name: founder.name,
  })),
  ...(siteConfig.socialLinks.length > 0 ? { sameAs: siteConfig.socialLinks } : {}),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <GoogleAnalytics measurementId={siteConfig.googleAnalyticsId} />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <ChromeGate>{children}</ChromeGate>
      </body>
    </html>
  );
}
