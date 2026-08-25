export type NavLink = {
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "PEB System", href: "#structure" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const footerLinkGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Industrial Sheds", href: "#services" },
      { label: "Warehousing", href: "#services" },
      { label: "Mezzanine Systems", href: "#structure" },
      { label: "Cold Storage", href: "#services" },
      { label: "Commercial Shells", href: "#services" },
    ],
  },
];
