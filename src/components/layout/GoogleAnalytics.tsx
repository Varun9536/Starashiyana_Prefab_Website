"use client";

import { preconnect } from "react-dom";
import Script from "next/script";

/**
 * GA4 (gtag.js), loaded via next/script instead of a raw <script> tag so
 * Next.js can defer it correctly (`afterInteractive`: after the page is
 * interactive, not blocking first paint) and dedupe it across navigations.
 * "use client" is needed here for the ReactDOM.preconnect() resource hint below.
 */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  preconnect("https://www.googletagmanager.com");

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
