"use client";

import { useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import styles from "./card.module.css";

/** Wraps an anchor so tap-throughs (call/whatsapp/email/map/save) show up in GA4. */
export function TrackedLink({
  href,
  method,
  className,
  download,
  children,
}: {
  href: string;
  method: string;
  className?: string;
  download?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      download={download}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={() => trackEvent("card_action_click", { method, location: "digital_card" })}
    >
      {children}
    </a>
  );
}

/** Shares the card's own URL — native share sheet on mobile, copy-link fallback on desktop. */
export function ShareButton({ url, className }: { url: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    trackEvent("card_action_click", { method: "share", location: "digital_card" });

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ url });
        return;
      } catch (error) {
        // User cancelling the share sheet throws AbortError — respect that
        // and stop, rather than surprising them with a clipboard copy too.
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — nothing more we can do silently.
    }
  }

  return (
    <button type="button" className={className} onClick={handleShare}>
      {copied ? "LINK COPIED" : "SHARE"}
    </button>
  );
}

export function CopyableValue({ value, children }: { value: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(event: React.MouseEvent) {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — nothing more we can do silently.
    }
  }

  return (
    <span className={styles.copyWrap}>
      {children}
      <button
        type="button"
        className={styles.copyBtn}
        onClick={handleCopy}
        aria-label="Copy to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
