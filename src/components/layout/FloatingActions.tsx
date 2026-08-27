"use client";

import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import styles from "./FloatingActions.module.css";

export function FloatingActions() {
  return (
    <div className={styles.wrap}>
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.fab} ${styles.whatsapp}`}
        aria-label="Chat on WhatsApp"
        onClick={() => trackEvent("contact_click", { method: "whatsapp", location: "floating_button" })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.32-1.39a9.9 9.9 0 004.67 1.19h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 012.4 5.83c0 4.53-3.69 8.22-8.22 8.22a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.53 3.7-8.22 8.26-8.22z" />
        </svg>
      </a>
      <a
        href={`tel:${siteConfig.contact.phoneHref}`}
        className={`${styles.fab} ${styles.call}`}
        aria-label="Call us"
        onClick={() => trackEvent("contact_click", { method: "call", location: "floating_button" })}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.35 1.79.68 2.63a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.45-1.45a2 2 0 012.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0122 16.92z" />
        </svg>
      </a>
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className={`${styles.fab} ${styles.email}`}
        aria-label="Email us"
        onClick={() => trackEvent("contact_click", { method: "email", location: "floating_button" })}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </a>
    </div>
  );
}
