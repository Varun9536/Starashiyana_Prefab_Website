import type { StaticImageData } from "next/image";
import frameClearspan from "@/assets/images/frames/frame_clearspan.jpg";
import frameSingleslope from "@/assets/images/frames/frame_singleslope.jpg";
import frameMultispan from "@/assets/images/frames/frame_multispan.jpg";
import frameTruss from "@/assets/images/frames/frame_truss.jpg";
import frameHybrid from "@/assets/images/frames/frame_hybrid.jpg";
import frameRoof from "@/assets/images/frames/frame_roof.jpg";

export type FramingSystem = {
  image: StaticImageData;
  alt: string;
  name: string;
  maxWidth: string;
};

export const framingSystems: FramingSystem[] = [
  {
    image: frameClearspan,
    alt: "Perspective view of a clear-span steel building frame",
    name: "Clear Span",
    maxWidth: "Max practical width: 180 m",
  },
  {
    image: frameSingleslope,
    alt: "Perspective view of a single-slope PEB building",
    name: "Single Slope",
    maxWidth: "Max practical width: 60 m",
  },
  {
    image: frameMultispan,
    alt: "Perspective view of a multi-span PEB frame",
    name: 'Multi-Span "1" (MS-1)',
    maxWidth: "Max practical width: 150 m",
  },
  {
    image: frameTruss,
    alt: "Perspective view of a PEB truss structure",
    name: "PEB Truss (PT)",
    maxWidth: "Max practical width: 80 m",
  },
  {
    image: frameHybrid,
    alt: "Perspective view of a PEB hybrid structure",
    name: "PEB Hybrid (PH)",
    maxWidth: "Max practical width: 80 m",
  },
  {
    image: frameRoof,
    alt: "Perspective view of a roof steel system",
    name: "Roof System (RS)",
    maxWidth: "Max practical width: 65 m",
  },
];
