import type { IconName } from "@/components/ui/Icon";

export type Service = {
  icon: IconName;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "industrial",
    title: "Industrial Sheds & Factories",
    description:
      "Custom-engineered factory buildings and industrial enclosures built for production-floor efficiency.",
  },
  {
    icon: "warehouse",
    title: "Large-Span Warehousing",
    description:
      "Clear-span logistics and warehousing facilities engineered for storage density and vehicle movement.",
  },
  {
    icon: "coldStorage",
    title: "Cold Storage & Food Processing",
    description:
      "Insulated steel envelopes engineered for thermal performance and hygienic processing environments.",
  },
  {
    icon: "commercial",
    title: "Commercial & Retail Shells",
    description:
      "Malls, showrooms and service facility shells with clean architectural detailing and finish quality.",
  },
  {
    icon: "institutional",
    title: "Institutional Buildings",
    description:
      "Training centres, laboratories and utility structures delivered to institutional-grade standards.",
  },
  {
    icon: "expansion",
    title: "MSME & Expansion Sheds",
    description:
      "Affordable warehouses, pack-houses and expansion sheds for traders, MSMEs and existing facilities.",
  },
];
