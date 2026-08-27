"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import styles from "./QuoteForm.module.css";

const PROJECT_TYPES = [
  "Industrial Shed / Factory",
  "Warehouse",
  "Cold Storage",
  "Commercial / Retail",
  "Institutional",
  "Expansion of Existing Facility",
  "Other",
];

/**
 * No backend exists yet, so the request is handed off to the visitor's email
 * client via `mailto:`. Swapping this for a real API call later only means
 * replacing this function's body — the form markup below doesn't change.
 */
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const subject = `PEB Quote Request — ${data.get("project") || "New Project"}`;
  const body = [
    `Name: ${data.get("name") ?? ""}`,
    `Phone: ${data.get("phone") ?? ""}`,
    `Email: ${data.get("email") ?? ""}`,
    `Project Type: ${data.get("project") ?? ""}`,
    `Approx. Built-up Area: ${data.get("area") ?? ""} sq.m`,
    `Location: ${data.get("location") ?? ""}`,
    `Project Requirements: ${data.get("requirements") ?? ""}`,
  ].join("\n");

  // GA4's recommended "generate_lead" event — the single most important
  // signal on the whole site: a visitor filled out and submitted the form.
  trackEvent("generate_lead", {
    project_type: data.get("project") || undefined,
    location: data.get("location") || undefined,
  });

  window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function QuoteForm() {
  return (
    <div className={styles.form}>
      <span className="eyebrow">Request a Quote</span>
      <h3>Get a concept layout & budgetary offer</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="quote-name">Full Name</label>
            <input id="quote-name" name="name" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="quote-phone">Phone Number</label>
            <input id="quote-phone" name="phone" type="tel" required />
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="quote-email">Email</label>
            <input id="quote-email" name="email" type="email" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="quote-project">Project Type</label>
            <select id="quote-project" name="project" required defaultValue="">
              <option value="" disabled>
                Select
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.field}>
            <label htmlFor="quote-area">Approx. Built-up Area (sq.m)</label>
            <input id="quote-area" name="area" type="text" placeholder="e.g. 2500" />
          </div>
          <div className={styles.field}>
            <label htmlFor="quote-location">Location</label>
            <input id="quote-location" name="location" type="text" placeholder="City, State" />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="quote-requirements">Project Requirements</label>
          <textarea
            id="quote-requirements"
            name="requirements"
            rows={4}
            placeholder="Span, height, crane requirement, expected timeline..."
          />
        </div>

        <Button type="submit" variant="primary" className={styles.submit}>
          Submit Quote Request
        </Button>
      </form>
    </div>
  );
}
