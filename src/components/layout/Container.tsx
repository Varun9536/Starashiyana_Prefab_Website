import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("container", className)}>{children}</div>;
}
