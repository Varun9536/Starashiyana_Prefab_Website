"use client";

import type { NavLink } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { cx } from "@/lib/utils";
import styles from "./MobileMenu.module.css";

/**
 * The burger trigger and the collapsible drawer are controlled from `Header`
 * (which owns the shared open/close state), so both pieces stay simple,
 * stateless, and can sit in their correct DOM positions — the trigger inline
 * with the nav CTA, the drawer as a full-width sibling block beneath the
 * header row — exactly like the original markup.
 */
export function MobileMenuTrigger({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      className={styles.burger}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
    >
      <span className={cx(styles.burgerBar, open && styles.burgerBarOpenTop)} />
      <span className={cx(styles.burgerBar, open && styles.burgerBarOpenMiddle)} />
      <span className={cx(styles.burgerBar, open && styles.burgerBarOpenBottom)} />
    </button>
  );
}

export function MobileMenuDrawer({
  open,
  links,
  onLinkClick,
}: {
  open: boolean;
  links: NavLink[];
  onLinkClick: () => void;
}) {
  if (!open) return null;

  return (
    <nav id="mobile-nav" aria-label="Mobile" className={styles.drawer}>
      <Button
        href="#contact"
        variant="primary"
        className={styles.cta}
        onClick={() => {
          trackEvent("cta_click", { location: "mobile_menu" });
          onLinkClick();
        }}
      >
        Request a Quote
      </Button>
      {links.map((link) => (
        <a key={link.href} href={link.href} className={styles.link} onClick={onLinkClick}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
