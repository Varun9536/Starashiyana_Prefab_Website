"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fades/slides content in the first time it enters the viewport, mirroring the
 * original site's IntersectionObserver-based scroll reveal. This is the only
 * piece of the reveal behavior that needs to run on the client — the content
 * passed in stays whatever it already was (server-rendered markup).
 * Respects `prefers-reduced-motion` via the `.reveal` CSS in theme.css.
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cx("reveal", isVisible && "in", className)}>
      {children}
    </div>
  );
}
