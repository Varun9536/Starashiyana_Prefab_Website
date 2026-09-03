import type { StaticImageData } from "next/image";
import machineShearing from "@/assets/images/machines/machine_shearing.webp";
import processPlasma from "@/assets/images/process/process_plasma.jpg";
import machinePtw from "@/assets/images/machines/machine_ptw.webp";
import processDrilling from "@/assets/images/process/process_drilling.jpg";
import machinePowerPress from "@/assets/images/machines/machine_power_press.webp";
import machineThreading from "@/assets/images/machines/machine_threading.webp";
import factoryGalleryHero from "@/assets/images/hero/factory_gallery_hero.jpg";
import processBlast from "@/assets/images/process/process_blast.jpg";

export type Machine = {
  image: StaticImageData;
  alt: string;
  name: string;
  category: string;
  info: string;
  role: string;
};

export const machinery: Machine[] = [
  {
    image: machineShearing,
    alt: "CNC shearing machine for precision steel plate cutting",
    name: "CNC Shearing",
    category: "Precision plate cutting",
    info: "Hydraulic shearing cuts steel plates to the required length and width with clean, repeatable edges before fabrication.",
    role: "Primary use · Plate preparation",
  },
  {
    image: processPlasma,
    alt: "CNC plasma cutting steel plate",
    name: "CNC Plasma Cutting",
    category: "Profile & plate cutting",
    info: "CNC plasma cutting produces accurate profiles, connection plates and shaped components from structural steel plate.",
    role: "Primary use · CNC profiling",
  },
  {
    image: machinePtw,
    alt: "PTW production line for built-up tapered steel sections",
    name: "PTW Production Line",
    category: "Tapered section welding",
    info: "The PTW line aligns and welds flange and web plates to form tapered built-up primary members used in PEB frames.",
    role: "Primary use · Built-up members",
  },
  {
    image: processDrilling,
    alt: "CNC drilling and punching station for structural steel",
    name: "CNC Hydraulic Punching",
    category: "Hole pattern accuracy",
    info: "Controlled punching and drilling prepares connection holes and bolt patterns so fabricated members are ready for accurate fit-up.",
    role: "Primary use · Connections",
  },
  {
    image: machinePowerPress,
    alt: "Hydraulic power press used for steel forming",
    name: "Hydraulic Power Press",
    category: "Cold-formed sections",
    info: "A hydraulic press applies controlled forming force for bending, shaping and fabrication operations on steel components.",
    role: "Primary use · Forming & bending",
  },
  {
    image: machineThreading,
    alt: "Chaser type threading machine for rods and bolts",
    name: "Chaser Type Threading",
    category: "Bolt & rod threading",
    info: "Threading equipment creates consistent external threads on rods and components used in bracing, fastening and assembly.",
    role: "Primary use · Rod & bolt preparation",
  },
  {
    image: factoryGalleryHero,
    alt: "EOT cranes spanning a PEB fabrication factory",
    name: "EOT Cranes",
    category: "Heavy material handling",
    info: "Overhead EOT cranes move plates, built-up sections and fabricated members safely between production and assembly bays.",
    role: "Primary use · Material handling",
  },
  {
    image: processBlast,
    alt: "Steel fabrication shop finishing and surface preparation area",
    name: "Sand Blasting",
    category: "Surface preparation",
    info: "Abrasive blasting removes mill scale, rust and surface contaminants to prepare steel for protective coating and painting.",
    role: "Primary use · Surface preparation",
  },
];
