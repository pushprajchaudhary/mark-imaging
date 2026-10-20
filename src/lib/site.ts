/**
 * Single source of truth for company facts. Every value here comes from the
 * Mark Imaging company brochure. Do not add claims that are not in the
 * brochure or confirmed in writing by the company.
 */

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[mark-imaging] NEXT_PUBLIC_SITE_URL is not set. Canonical URLs, sitemap and structured data will point to localhost.",
    );
  }
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Mark Imaging",
  legalName: "Mark Imaging",
  tagline: "Radiology Outsourcing Solution",
  url: resolveSiteUrl(),
  locale: "en_IN",
  description:
    "Mark Imaging is a radiology outsourcing partner for hospitals and diagnostic centres: 24×7 CT and MRI reporting, X-ray reporting, radiologist staffing, second opinions, pre-reads and PACS, RIS and HIS solutions.",
  shortDescription:
    "A radiology outsourcing partner that aggregates multiple radiology provider groups across India to give hospitals and diagnostic centres one point of contact for reporting, staffing and imaging software.",
  contact: {
    phoneDisplay: "+91-81269-63692",
    phoneHref: "tel:+918126963692",
    phoneE164: "+918126963692",
    email: "markimaging9@gmail.com",
    addressLine: "Sarita Vihar, Delhi",
    addressLocality: "Sarita Vihar",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  logo: {
    square: "/logo/mark-imaging-logo.png",
    cropped: "/logo/mark-imaging-logo-cropped.webp",
  },
  /** Profiles to list in Organization.sameAs once they exist. */
  sameAs: [] as string[],
  features: {
    /**
     * Public pricing page with the brochure's indicative charges.
     * Off by default: pricing is shared on request through "Get a Quote".
     * Set to true to publish /pricing (it is then also added to the sitemap).
     */
    showPricing: false,
  },
} as const;

export const analyticsConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() || undefined,
  gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || undefined,
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined,
};

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
}
