export type SpecRow = {
  label: string;
  value: string;
};

export const specTable: SpecRow[] = [
  { label: "Clear Span (CS)", value: "Up to 180 m" },
  { label: 'Multi-Span "1" (MS-1)', value: "Up to 150 m" },
  { label: "PEB Truss (PT)", value: "Up to 80 m" },
  { label: "PEB Hybrid (PH)", value: "Up to 80 m" },
  { label: "Roof System (RS)", value: "Up to 65 m" },
  { label: "Single Slope (SS)", value: "Up to 60 m" },
  { label: "Top running crane capacity", value: "Up to 300 T" },
  { label: "Roof panel coverage width", value: "915 mm" },
  { label: "Wall panel coverage width", value: "1000 mm" },
  { label: "Insulation thickness range", value: "25–100 mm" },
];

export const structureTags: string[] = [
  "Tapered I-Section",
  "Built-up Box Section",
  "Z-Purlin",
  "Cee Purlin",
  "Eave Strut",
  "Rod & Cable Bracing",
  "Sag Arrestor",
  "Flange Brace",
];

export const mezzanineTags: string[] = [
  "Mezzanine Floors",
  "Handrails & Guardrails",
  "Staircases",
  "Walkways",
  "Intermediate Support Columns",
];

export const certificationTags: string[] = [
  "IS 800 — Structural Steel",
  "IS 875 — Design Loads",
  "MBMA / AISC Design Practice",
  "IS 6533 — Chimney Steel Structures",
  "Fire-Retardant Insulation Options",
  "ISO-aligned QC Documentation",
];
