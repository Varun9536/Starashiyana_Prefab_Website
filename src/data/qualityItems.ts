export type QualityItem = {
  title: string;
  description: string;
};

export const qualityItems: QualityItem[] = [
  {
    title: "Material Verification",
    description:
      "Raw materials and incoming sections are checked against required specifications before production begins.",
  },
  {
    title: "Fabrication Quality Control",
    description:
      "Cutting, punching, welding and assembly are monitored to maintain consistency and fabrication accuracy.",
  },
  {
    title: "Dimensional Accuracy",
    description:
      "Each member is checked for size, alignment and hole position, so erection at site remains smooth and efficient.",
  },
  {
    title: "Surface Preparation & Coating Checks",
    description: "Painting and coating processes are reviewed to ensure proper protection.",
  },
  {
    title: "Dispatch Readiness Review",
    description:
      "Material is checked before dispatch for identification, completeness and erection sequence coordination.",
  },
  {
    title: "Site Safety Discipline",
    description: "During erection, we focus on safe handling, work coordination and responsible practice.",
  },
];
