import type { FaqItem } from "@/lib/schema";
import type { IconName } from "@/components/ui/icons";

export type { FaqItem };

export type Point = { title: string; description: string };

export type ServiceSlug =
  | "ct-reporting"
  | "mri-reporting"
  | "x-ray-reporting"
  | "second-opinion-reporting"
  | "radiologist-staffing"
  | "pacs-ris-his-solutions"
  | "pre-reads";

export type Service = {
  slug: ServiceSlug;
  /** Short label for menus and cards. */
  name: string;
  /** Name as used mid-sentence, e.g. "CT reporting", "PACS, RIS and HIS". */
  nameInSentence: string;
  icon: IconName;
  /** schema.org serviceType. */
  serviceType: string;
  /** <title> without the brand suffix. Keep under ~45 characters. */
  metaTitle: string;
  /** 140–160 characters. */
  metaDescription: string;
  h1: string;
  /** Hero supporting line. */
  lede: string;
  /** One or two sentences for service cards. */
  summary: string;
  /** Small pill shown in the hero, only when the brochure supports it. */
  badge?: string;
  intro: string[];
  whatItIs: { heading: string; paragraphs: string[]; list?: Point[] };
  audience: Point[];
  benefits: Point[];
  steps: Point[];
  why: Point[];
  faqs: FaqItem[];
  related: ServiceSlug[];
  /** Brochure requirement value to pre-select in the enquiry form. */
  requirement: Requirement;
};

export const REQUIREMENTS = [
  "CT Reporting",
  "MRI Reporting",
  "X-Ray Reporting",
  "Radiologist Staffing",
  "Second Opinion",
  "PACS / RIS / HIS",
  "Pre-Reads",
  "Other",
] as const;

export type Requirement = (typeof REQUIREMENTS)[number];
