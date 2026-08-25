import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
};

/** The recurring "eyebrow + h2 + intro paragraph" header used at the top of most sections. */
export function SectionHeading({ eyebrow, heading, description, dark, className }: SectionHeadingProps) {
  return (
    <div className={cx("section-head", className)}>
      <span className={cx("eyebrow", dark && "eyebrow-on-dark")}>{eyebrow}</span>
      <h2>{heading}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
