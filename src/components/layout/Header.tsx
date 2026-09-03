"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { siteConfig } from "@/config/site";
import { primaryNavLinks } from "@/config/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileMenuTrigger, MobileMenuDrawer } from "@/components/navigation/MobileMenu";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import styles from "./Header.module.css";

/**
 * Site header — sits in normal document flow (not fixed/sticky) and scrolls
 * away with the page. A client component only because the mobile menu
 * trigger and drawer share open/close state.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="site-header" className={styles.header}>
      <div className={styles.navWrap}>
        <a href="#top" className={styles.logoMark} aria-label={`${siteConfig.name} home`}>
          <Image
            src={logo}
            alt={`${siteConfig.name} logo`}
            className={styles.logo}
            priority
            width={230}
            height={188}
          />
        </a>

        <Navbar links={primaryNavLinks} />

        <div className={styles.navCta}>
          <Button
            href="#contact"
            variant="primary"
            className={styles.ctaDesktopOnly}
            onClick={() => trackEvent("cta_click", { location: "header" })}
          >
            Request a Quote
          </Button>
          <MobileMenuTrigger open={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} />
        </div>
      </div>

      <MobileMenuDrawer open={menuOpen} links={primaryNavLinks} onLinkClick={() => setMenuOpen(false)} />
    </header>
  );
}
