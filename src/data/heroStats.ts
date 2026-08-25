export type HeroStat = {
  /** The plain-colored text token. */
  plain: string;
  /** The rust-accented text token. */
  highlighted: string;
  /** Whether the highlighted token comes before the plain token. */
  highlightFirst: boolean;
  /** Whether a space separates the two tokens ("6 Step" vs "180m"). */
  spaced: boolean;
  label: string;
};

export const heroStats: HeroStat[] = [
  { plain: "180", highlighted: "m", highlightFirst: false, spaced: false, label: "Max Clear Span" },
  { plain: "300", highlighted: "T", highlightFirst: false, spaced: false, label: "Top Running Crane" },
  { plain: "Step", highlighted: "6", highlightFirst: true, spaced: true, label: "Delivery Process" },
  { plain: "Point", highlighted: "1", highlightFirst: true, spaced: true, label: "Accountability" },
];
