import Script from "next/script";

/**
 * GA4 (gtag.js), loaded via next/script instead of a raw <script> tag so
 * Next.js can defer it correctly (`afterInteractive`: after the page is
 * interactive, not blocking first paint) and dedupe it across navigations.
 * No "use client" needed — only onLoad/onReady/onError handlers require that.
 */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
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
