import Script from "next/script";
import { analyticsConfig } from "@/lib/site";

const ID_PATTERN = /^[A-Z0-9-]+$/i;

/**
 * Loads Google Tag Manager, or GA4 directly when no GTM container is set.
 * Nothing renders unless the matching environment variable is present.
 * Scripts load after the page is interactive so they do not affect LCP.
 */
export function Analytics() {
  const { gtmId, gaId } = analyticsConfig;

  if (gtmId && ID_PATTERN.test(gtmId)) {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
      </Script>
    );
  }

  if (gaId && ID_PATTERN.test(gaId)) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
        </Script>
      </>
    );
  }

  return null;
}

/** GTM <noscript> fallback, placed at the start of <body>. */
export function GtmNoScript() {
  const { gtmId } = analyticsConfig;
  if (!gtmId || !ID_PATTERN.test(gtmId)) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
