import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "outline-light";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  outline: "btn-outline",
  "outline-light": "btn-outline-light",
};

/**
 * Renders an `<a>` when `href` is supplied, otherwise a native `<button>`.
 * Reuses the global `.btn*` utility classes so visual identity (clip-path
 * cut-corner shape, hover lift) stays centralized in `globals.css`.
 */
export function Button({ variant = "primary", className, ...props }: LinkProps | ButtonProps) {
  const classes = cx("btn", VARIANT_CLASS[variant], className);

  if ("href" in props && props.href) {
    return <a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes} />;
  }

  return <button type="button" {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes} />;
}
