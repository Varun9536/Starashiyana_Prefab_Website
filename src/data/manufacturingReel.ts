import type { StaticImageData } from "next/image";
import process1 from "@/assets/images/process/process_1.jpg";
import process2 from "@/assets/images/process/process_2.jpg";
import process3 from "@/assets/images/process/process_3.jpg";
import process4 from "@/assets/images/process/process_4.jpg";
import process5 from "@/assets/images/process/process_5.jpg";
import process6 from "@/assets/images/process/process_6.jpg";

export type ReelFrame = {
  image: StaticImageData;
  alt: string;
  label: string;
  detail: string;
};

/** The 6 real stages of the manufacturing flow, rendered by the reel component. */
export const manufacturingReel: ReelFrame[] = [
  { image: process1, alt: "Steel coils in a fabrication plant", label: "Raw material", detail: "Steel coil" },
  { image: process2, alt: "CNC steel cutting", label: "CNC cutting", detail: "Cut & drill" },
  { image: process3, alt: "Automated steel welding", label: "Built-up welding", detail: "Primary members" },
  { image: process4, alt: "Steel frame assembly", label: "Assembly", detail: "Fit-up" },
  { image: process5, alt: "PEB factory finishing area", label: "Finishing", detail: "Blast & paint" },
  { image: process6, alt: "Truck dispatching fabricated steel", label: "Dispatch", detail: "Site erection" },
];
