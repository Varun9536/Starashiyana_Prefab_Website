import type { IconName } from "@/components/ui/Icon";

export type SustainabilityItem = {
  icon: IconName;
  title: string;
  description: string;
};

export const sustainabilityItems: SustainabilityItem[] = [
  {
    icon: "recycle",
    title: "Recyclable Steel",
    description: "Structural members are fully recyclable at end of service life.",
  },
  {
    icon: "lowerLoad",
    title: "Lower Dead Load",
    description: "Efficient framing reduces foundation and material demand.",
  },
  {
    icon: "cleanSite",
    title: "Cleaner Site Execution",
    description: "Factory fabrication reduces on-site waste and clutter.",
  },
  {
    icon: "safety",
    title: "Site Safety Discipline",
    description: "Structured erection sequencing keeps crews and schedules safe.",
  },
];
