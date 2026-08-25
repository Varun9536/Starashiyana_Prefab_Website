export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is a Pre-Engineered Building (PEB)?",
    answer:
      "A PEB is a steel structure designed, fabricated and pre-engineered in a factory to a client's specific span, height and load requirements, then transported and erected on site — significantly faster than conventional construction.",
  },
  {
    question: "What is the typical timeline for a PEB project?",
    answer:
      "Timelines depend on span, complexity and site readiness. Our team provides a project-specific schedule at the concept design stage, covering engineering, fabrication and erection sequencing.",
  },
  {
    question: "Can you work alongside our existing civil or MEP contractor?",
    answer:
      "Yes. We regularly work directly with promoters, consultants, or alongside civil/MEP contractors, taking responsibility for the steel building scope specifically.",
  },
  {
    question: "Do you handle mezzanine floors and future expansion?",
    answer:
      "Yes. Mezzanine systems, expansion provisions and future extensions are considered at the design stage so your building can grow without structural rework.",
  },
  {
    question: "What information do you need for a budgetary quote?",
    answer:
      "Approximate plot size or built-up area, intended use, required span and eave height, crane requirements (if any), and location are enough for an initial concept and budget.",
  },
];
