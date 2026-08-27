declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 event if gtag has loaded. Safe to call from anywhere —
 * no-ops silently if analytics hasn't loaded yet (ad blockers, slow network)
 * or during SSR. This only gives click *counts*, not who clicked — GA4
 * cannot identify individual visitors by name/phone.
 */
export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}
