# Mark Imaging website: project context

Read this first in any new session. It records what was built, why, and what is left.
More detail: [docs/STRATEGY.md](docs/STRATEGY.md) (sitemap, keyword map, design system, brochure fact inventory) and [README.md](README.md) (setup, env vars, launch checklist).

## What this is

An SEO-first, B2B corporate website for **Mark Imaging, a "Radiology Outsourcing Solution"** (teleradiology / radiology outsourcing, based in Sarita Vihar, Delhi). Its goals are organic Google traffic and qualified leads from hospitals, diagnostic centres and imaging centres.

- Owner: Pushpraj Chaudhary (senior Next.js architect / UI-UX / SEO). Communicates in Hinglish.
- Project location: `~/Desktop/mark-imaging`.
- Source of company facts: `~/Downloads/MARK IMAGING BROCHURE.pdf` (6 pages).
- Design reference: https://www.vitalrad.com/, for business type and information architecture only. Do NOT copy its design, text or layout.

## Stack

Next.js 16.3.8 (App Router, Turbopack), React 19.2, TypeScript (strict), Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`), lucide-react, ESLint 9 flat config. No backend, no state libraries, no UI kits. Every route is statically generated.

```bash
npm run dev | npm run build | npm start | npm run lint | npm run typecheck
```

## Non-negotiable content rules

1. **No invented facts.** No client names or logos, testimonials, statistics, doctor names, certifications (NABH/ISO/HIPAA etc.), awards, turnaround times or locations. Only brochure facts, or facts the owner later confirms in writing.
2. **24×7 applies only to CT and MRI reporting.** Do not imply 24×7 for X-ray, pre-reads or anything else.
3. The core positioning must stay: **"Aggregator of Radiology Providers, not a typical teleradiology company"**, with multiple Radiology Associates (registered firms of groups of radiologists) as partners across India.
4. No patient-facing diagnosis. The audience is B2B. The enquiry form must never collect patient data.
5. Avoid "100% accurate", "best radiologists", "India's #1", "guaranteed diagnosis" and generic AI marketing phrases.
6. Contact details are exact: **+91-81269-63692**, **markimaging9@gmail.com**, **Sarita Vihar, Delhi**.
7. Prices exist (`src/content/pricing.ts`) but are hidden. `/pricing` returns 404 unless `siteConfig.features.showPricing = true`.

## Brochure facts in brief

Led by veterans of medical imaging (technology & services) and telemedicine, with a decade of cumulative experience. The mission is to bridge the radiology demand–supply gap through technology and distribution models, offering a one-stop solution. Mark Imaging acts as consultants.

Services:
- On-demand CT/MR reporting, 24×7
- Radiologist staffing on contract, hourly or daily
- Second opinion: complex or surgical cases discussed with a senior expert radiologist or a group
- PACS/RIS/HIS
- Pre-reads

Process:
1. Requirement, negotiation and contract
2. Third-party cloud PACS installed at the client's premises on a system networked with the modalities and online
3. Radiographer pushes cases from the console, reporting starts, and the client gets PACS access to update patient history

Ethics & standards:
- Strict radiologist verification
- Radiologists' documents furnished on demand
- Dedicated relationship manager
- Each study stored for 1 year
- Invoices cleared by the 15th of the subsequent month

## Structure (where to edit)

- `src/lib/site.ts`: company facts, contact details, feature flags, `absoluteUrl()`. Single source of truth.
- `src/lib/seo.ts`: `buildMetadata()`. Every page must use it (canonical, OG with default `/opengraph-image`, Twitter).
- `src/lib/schema.ts`: JSON-LD builders (Organization+MedicalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage, BlogPosting).
- `src/lib/enquiry.ts`: form submit to `NEXT_PUBLIC_ENQUIRY_ENDPOINT`, with a mailto fallback.
- `src/content/`: all copy.
  - `services.ts`: 7 services. Each has h1, meta, intro, audience, benefits, steps, why, faqs, related, `nameInSentence`.
  - `company.ts`: about, differentiators, processSteps, standards.
  - `posts.ts`: blog posts as typed blocks with inline `[text](/path)` and `**bold**`.
  - `faqs.ts`, `navigation.ts`, `pricing.ts`, `types.ts`.
- `src/components/`:
  - `layout/`: Header (server, CSS hover/focus dropdown), NavLink (client, active tab), MobileNav (client), Footer.
  - `brand/`: Logo, WaveLines (brochure wave motif as SVG).
  - `seo/`: JsonLd, Breadcrumbs (visible trail plus schema).
  - `ui/`: Button, Section, SectionHeading, CheckList, icons map.
  - `sections/`: PageHero, HeroVisual, ServiceCard/Grid, FeatureGrid, ProcessSteps, FAQ (emits FAQ schema itself), CTABand, LegalPage.
  - `diagrams/`: FlowDiagram, ProviderNetworkDiagram, ImagingWorkflowDiagram, UnderOneRoof.
  - `forms/`: ContactForm.
  - `blog/`: ArticleCard, ArticleBody, RichText.
  - `analytics/`: GTM/GA4 from env vars.
- Client components are only `NavLink`, `MobileNav`, `ContactForm`, `error.tsx` and `global-error.tsx`. Keep it that way.
- Logo: `public/logo/mark-imaging-logo.png` (square, from the brochure) and `mark-imaging-logo-cropped.webp/png` (header). Do not redesign the logo.

## Navigation (owner's decision, 2026-10-20)

The header has exactly **4 tabs: Home, About Us, Services, Contact Us**, plus a "Get a Quote" button. Tabs show from the `md` breakpoint (768px); below that a hamburger menu is used. Active tab styling comes from `components/layout/NavLink.tsx`. The Services tab has a dropdown listing all services and solution pages. Do not add more top-level tabs. Other pages are reached via the Services dropdown, the footer and in-page links.

`/why-mark-imaging`, `/how-it-works` and `/quality-and-standards` were merged into `/about` as sections `#why-mark-imaging`, `#how-it-works` and `#quality`, with 308 redirects in `next.config.ts`. About has a sticky in-page jump nav.

## Research notes (vitalrad.com, visited 2026-10-20)

- Its navigation: Home, About Us, Our Services (about 11 sub-services), Quality Assurance, Our Infrastructure, Academy, Contact Us.
- Its homepage: "What is teleradiology", applications, how it works, services, global reach, stats, technology, FAQs (benefits, disadvantages, what a report is).
- Buyer guides (StatRad, 5C Network, Experity) say hospitals evaluate turnaround time by modality and time of day, subspecialty access, the QA programme, credentials, critical-result escalation and EMR/HL7 integration.
- What we adopted, without fake claims: the teleradiology explainer, modalities and study categories, a "where we help" grid, "common concerns → how we address them", a buyer's checklist with honest answers (turnaround and escalation are "agreed in contract"), a service comparison table, and educational FAQs. Shared content lives in `src/content/teleradiology.ts`; components are in `components/sections/TeleradiologySections.tsx`.
- What we did NOT adopt: stats, ISO/HIPAA claims, subspecialty or international claims. Mark Imaging has not provided any of these.

## Routes

`/`, `/about` (includes Why, How it works and Quality sections), `/services`, and `/services/` followed by:
- `ct-reporting`
- `mri-reporting`
- `x-ray-reporting`
- `second-opinion-reporting`
- `radiologist-staffing`
- `pacs-ris-his-solutions`
- `pre-reads`

Then `/teleradiology`, `/radiology-outsourcing`, `/for-hospitals`, `/contact` (`?service=<slug>` preselects the requirement), `/resources`, `/resources/blog`, `/resources/blog/[slug]`, `/pricing` (flagged), `/privacy-policy`, `/terms-and-conditions` and `/medical-disclaimer`.

Also `sitemap.ts`, `robots.ts` (disallows all on Vercel previews), `manifest.ts`, `opengraph-image.tsx`, `not-found.tsx`, `error.tsx` and `global-error.tsx`. Redirects for short URLs and merged pages (`/blog`, `/hospitals`, `/how-it-works`, `/about-us`, …) are in `next.config.ts`.

## Design system

- Brand red `#FE3231` (sampled from the logo). Use `brand-700 #D0201E` for text and buttons, for AA contrast.
- Ink navy-slate neutrals; `ink-950` for dark sections.
- Ember/sun oranges are decorative only.
- Fonts: Plus Jakarta Sans (headings) and Inter (body) via `next/font`.
- Motion: CSS scroll-driven `.reveal`, respects reduced motion.
- No stock photos yet. Visuals are original HTML/SVG (the hero viewer is labelled "Illustrative").

## Status (as of 2026-10-20)

Done and verified:
- Build, lint and typecheck all pass.
- A custom SEO audit across all pages found 0 problems: unique titles and descriptions, canonical, one H1, no heading skips, alt text, valid JSON-LD, FAQ schema only where FAQs are visible.
- Desktop and mobile screenshots were checked in headless Chrome.
- Mobile menu, form preselect and form mailto fallback were tested.

Fixed bugs worth remembering:
- The header's `backdrop-blur` makes it the containing block for `fixed` children. The mobile menu panel therefore uses `absolute top-full h-[calc(100dvh-4.5rem)]`.
- A page-level `openGraph` replaces the root file-based OG image. `buildMetadata` therefore sets the default image explicitly.

Pending (owner's side):
- [ ] Set `NEXT_PUBLIC_SITE_URL` (real domain unknown; canonicals fall back to localhost)
- [ ] Set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` (Formspree, CRM etc.)
- [ ] Legal review of the 3 legal pages, then pass `reviewed` to `LegalPage`
- [ ] Review the 3 blog drafts (`draft: true` means noindex and not in the sitemap), then set `draft: false`
- [ ] Optional: licensed photography, an SVG or higher-resolution logo, social profile URLs (`siteConfig.sameAs`), GTM/GA4 IDs, a Search Console token
- [ ] Unknown facts to collect: turnaround times, certifications, on-site vs remote staffing, pre-read modalities

Ideas not yet done: more blog content (roadmap in STRATEGY.md §3), a `/for-diagnostic-centres` page once there is distinct content, MDX or a CMS for the blog, a Lighthouse run on the deployed URL, git init and the first commit.

## QA tips

- For an SEO audit, start `npx next start -p 3123` with `NEXT_PUBLIC_SITE_URL` set. Then fetch `/sitemap.xml` and every URL, and check title length, meta description, canonical, the H1 count, heading order, `img` alt text, JSON-LD validity, and that FAQPage appears only where there is visible `<details>`.
- For screenshots, Google Chrome is at `/Applications/Google Chrome.app`. Drive it via CDP (`--remote-debugging-port`) using Node 22's global `WebSocket`. Use `Emulation.setDeviceMetricsOverride` at 390 px (mobile) and 1440 px (desktop), then `Page.captureScreenshot` per viewport-height segment.
