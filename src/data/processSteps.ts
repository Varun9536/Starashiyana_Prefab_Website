export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Inquiry & Requirement Study",
    description:
      "We understand the client's space requirement, usage, span, height, loading, expansion needs and project priorities.",
  },
  {
    step: 2,
    title: "Concept Design & Budgeting",
    description:
      "We develop the initial building concept, basic layout, and technical approach along with a practical budget direction.",
  },
  {
    step: 3,
    title: "Engineering & Detailing",
    description:
      "Our team prepares design inputs, connection details, shop drawings and fabrication-ready detailing for smooth execution.",
  },
  {
    step: 4,
    title: "Fabrication Planning",
    description:
      "Steel members, secondary sections and accessories are planned for accurate production, sequencing and quality control.",
  },
  {
    step: 5,
    title: "Dispatch & Site Coordination",
    description:
      "Material dispatch is coordinated with site readiness, erection sequence and project schedule to avoid delays and confusion.",
  },
  {
    step: 6,
    title: "Erection & Final Handover",
    description:
      "The building is erected with focus on safety, fit-up accuracy and timely completion, followed by final review and handover.",
  },
];
