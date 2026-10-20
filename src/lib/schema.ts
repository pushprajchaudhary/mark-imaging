import { absoluteUrl, siteConfig } from "./site";

/**
 * JSON-LD builders. Only describe what is visible on the page and supported by
 * the brochure. FAQ schema must only be emitted where the FAQ is rendered.
 */

export const ORG_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  const { contact } = siteConfig;
  return {
    "@type": ["Organization", "MedicalBusiness"],
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo.square),
      width: 500,
      height: 500,
    },
    image: absoluteUrl(siteConfig.logo.square),
    slogan: siteConfig.tagline,
    description: siteConfig.shortDescription,
    telephone: contact.phoneE164,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.addressLocality,
      addressRegion: contact.addressRegion,
      addressCountry: contact.addressCountry,
    },
    areaServed: { "@type": "Country", name: "India" },
    medicalSpecialty: "Radiography",
    knowsAbout: [
      "Teleradiology",
      "Radiology outsourcing",
      "CT reporting",
      "MRI reporting",
      "X-ray reporting",
      "Radiologist staffing",
      "Second opinion radiology reporting",
      "PACS",
      "RIS",
      "HIS",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: contact.phoneE164,
        email: contact.email,
        areaServed: "IN",
      },
    ],
    ...(siteConfig.sameAs.length > 0 && { sameAs: siteConfig.sameAs }),
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(faqs: FaqItem[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "MedicalWebPage";
}): Json {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function serviceSchema(opts: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  audience?: string[];
}): Json {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    ...(opts.audience && {
      audience: opts.audience.map((a) => ({ "@type": "BusinessAudience", audienceType: a })),
    }),
  };
}

export function articleSchema(opts: {
  path: string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): Json {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(opts.path)}#article`,
    mainEntityOfPage: absoluteUrl(opts.path),
    headline: opts.headline,
    description: opts.description,
    ...(opts.image && { image: absoluteUrl(opts.image) }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@type": "Organization", name: opts.authorName, url: absoluteUrl("/about") },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Wraps nodes in a single @graph document for one <script> tag per page. */
export function graph(...nodes: Json[]): Json {
  return { "@context": "https://schema.org", "@graph": nodes };
}
