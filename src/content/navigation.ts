import { services } from "./services";

export type NavLink = { label: string; href: string; description?: string };

/** The four main tabs. Every other page is reached from Services, the footer or in-page links. */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const serviceNav: NavLink[] = services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.summary,
}));

export const solutionNav: NavLink[] = [
  { label: "Teleradiology", href: "/teleradiology", description: "Remote reporting through cloud PACS" },
  { label: "Radiology Outsourcing", href: "/radiology-outsourcing", description: "Reporting, staffing and software" },
  { label: "For Hospitals", href: "/for-hospitals", description: "All radiology services under one roof" },
  { label: "Resources & Blog", href: "/resources", description: "Guides for radiology teams" },
];

export const companyNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Why Mark Imaging", href: "/about#why-mark-imaging" },
  { label: "How It Works", href: "/about#how-it-works" },
  { label: "Quality & Standards", href: "/about#quality" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
];
