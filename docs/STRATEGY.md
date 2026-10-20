# Mark Imaging website: strategy and architecture

## 1. Brochure fact inventory

Everything stated as fact on the site comes from `MARK IMAGING BROCHURE.pdf`.

| Topic | Brochure fact | Where used |
|---|---|---|
| Positioning | "Radiology Outsourcing Solution" | Tagline, header, OG image |
| Leadership | Veterans of medical imaging (technology & services) and telemedicine, a decade of cumulative experience | About, home |
| Mission | Bridge demand–supply gaps in radiology using technology and distribution models | About, home |
| Offer | One-stop solution for all radiology requirements | About, home |
| Model | Aggregator of radiology providers, not a typical teleradiology company | Home, Why, services |
| Network | Multiple Radiology Associates (registered firms of radiologist groups) as partners across India | Diagrams, Why |
| Role | Consultants bringing customised solutions | About, PACS page |
| Differentiators | Typical providers hire a few radiologists (low retention, panel changes); MI has multiple groups (larger supply, flexibility); quality first, levers adjusted | Why, home |
| Services | On-demand CT/MR reporting 24×7; radiologist staffing (contract, hourly/daily); second opinion (senior expert or group, complex/surgical); PACS/RIS/HIS; pre-reads | Service pages |
| Study categories | CT head / other / special; MRI brain-spine / other / special; X-ray / X-ray special / mammography | Service pages (pricing hidden) |
| Pricing | Per-study charges; staffing INR 20–30K/day, 4–6K/hour, depends on timings; software as per requirement | `src/content/pricing.ts` (off by default) |
| Process | 1) requirement, negotiation, contract; 2) third-party cloud PACS at premises on a networked, internet-connected system; 3) push from console, reporting starts, PACS access to update history | How it works, everywhere |
| Standards | Strict verification; documents on demand; dedicated RM; 1-year study storage; invoices by 15th of subsequent month | Quality page |
| Contact | +91-81269-63692 · markimaging9@gmail.com · Sarita Vihar, Delhi | Footer, contact, schema |

### Information not in the brochure (left out or marked as a placeholder)

- Production domain (set `NEXT_PUBLIC_SITE_URL`)
- Turnaround times, report formats, subspecialty coverage, modalities for pre-reads
- Whether contract radiologists work on-site or remotely
- Certifications, accreditations, compliance (none claimed; the quality page says to ask)
- Client names, testimonials, statistics, team names (none used)
- Social profiles (`siteConfig.sameAs` is empty)
- Licensed photography (the site uses original SVG/HTML visuals; see README)
- Legal text (privacy, terms, disclaimer are placeholders flagged for legal review)

## 2. Sitemap

```
/                                   Home
/services                           Services hub
  /services/ct-reporting            24×7 CT reporting
  /services/mri-reporting           24×7 MRI reporting
  /services/x-ray-reporting         X-ray + mammography reporting
  /services/second-opinion-reporting
  /services/radiologist-staffing
  /services/pacs-ris-his-solutions
  /services/pre-reads
/teleradiology                      Topic page (what it is, workflow, modalities)
/radiology-outsourcing              Topic page (models, evaluation checklist)
/for-hospitals                      Audience page for hospital decision makers
/about                              Who we are, #why-mark-imaging, #how-it-works, #quality
/contact                            Enquiry form (?service=<slug> preselects the requirement)
/resources                          Hub: guides + latest posts
  /resources/blog
  /resources/blog/[slug]
/pricing                            Exists only when siteConfig.features.showPricing = true
/privacy-policy  /terms-and-conditions  /medical-disclaimer
```

Header tabs (owner's decision): Home, About Us, Services, Contact Us. The former `/why-mark-imaging`, `/how-it-works` and `/quality-and-standards` pages are now sections of `/about`, with 308 redirects. Added `/services/x-ray-reporting` because the brochure lists X-ray and mammography charges. Did not add a separate diagnostic-centres page, because it would duplicate `/for-hospitals` and the topic pages (thin-content risk). Add it once there is distinct content.

## 3. SEO page and keyword strategy

| Page | Primary intent | Supporting terms | Title |
|---|---|---|---|
| `/` | radiology outsourcing company | teleradiology services, CT/MRI reporting, hospitals | Mark Imaging \| Radiology Outsourcing & Teleradiology Services |
| `/teleradiology` | teleradiology services (India) | teleradiology for hospitals, how teleradiology works | Teleradiology Services for Hospitals in India |
| `/radiology-outsourcing` | radiology outsourcing services | outsourced radiology reporting, outsourcing models | Radiology Outsourcing Services in India |
| `/for-hospitals` | radiology outsourcing for hospitals | hospital radiology reporting, radiologist staffing for hospitals | Hospital Radiology Outsourcing & Teleradiology |
| `/services/ct-reporting` | CT reporting services | outsourced CT reporting, 24×7 CT reporting, CT teleradiology | 24×7 CT Reporting Services for Hospitals |
| `/services/mri-reporting` | MRI reporting services | outsourced MRI reporting, MRI teleradiology | 24×7 MRI Reporting Services \| Outsourced MRI |
| `/services/x-ray-reporting` | X-ray reporting services | mammography reporting, teleradiology X-ray | X-Ray & Mammography Reporting Services |
| `/services/second-opinion-reporting` | radiology second opinion | second opinion for surgery cases | Second Opinion Radiology Reporting |
| `/services/radiologist-staffing` | radiologist staffing | hire radiologist on contract, locum radiologist | Radiologist Staffing: Hire on Contract |
| `/services/pacs-ris-his-solutions` | PACS RIS HIS solutions | cloud PACS, what is RIS | PACS, RIS & HIS Solutions for Hospitals |
| `/services/pre-reads` | radiology pre-reads | preliminary radiology reads | Radiology Pre-Reads Service |

Principles:
- One primary intent per URL. No two pages target the same query.
- Topic pages (`/teleradiology`, `/radiology-outsourcing`) link down to every relevant service. Services link sideways to related services and up to the topic pages. Blog posts link to services with descriptive anchors.
- FAQ JSON-LD is emitted by the `FAQ` component itself, so it exists only where questions are visible.

### Content roadmap (blog)

Publish one well-researched article every 2–4 weeks, each linking to one service:
1. CT reporting for emergency departments: what hospitals should agree with a teleradiology partner
2. MRI reporting: why clinical history improves turnaround and quality
3. Cloud PACS vs on-premise PACS for diagnostic centres
4. What is a RIS, and does a diagnostic centre need one?
5. How to credential teleradiologists: a checklist for hospital administrators
6. Planning radiology cover for nights and weekends
7. Mammography reporting for diagnostic centres

## 4. Design system

- **Brand red** `#FE3231` sampled from the logo. `brand-700 #D0201E` is used for text and buttons on white (5.4:1, AA).
- **Ink** (navy-slate) neutrals for text and dark sections give a clinical, enterprise tone.
- **Ember/sun** oranges echo the brochure's wave motif, and are decorative only (`WaveLines`).
- **Type:** Plus Jakarta Sans (display, 500–700) + Inter (body), self-hosted via `next/font`. The display size is fluid with `clamp()`.
- **Surfaces:** white, `ink-50` mist, `ink-950` dark. Cards have a 1.25rem radius and soft two-layer shadows.
- **Motion:** CSS scroll-driven `.reveal` (zero JS), disabled under `prefers-reduced-motion`. Hover lifts are 0.5 units.
- **Focus:** a 2px brand-700 outline on every focusable element.

## 5. Component architecture

```
src/
  app/                    Routes (all statically generated), sitemap.ts, robots.ts,
                          manifest.ts, opengraph-image.tsx, icon.png, error/404
  content/                Typed content: services, company facts, posts, FAQs,
                          navigation, pricing. Edit copy here, not in components.
  lib/                    site config (single source of truth), seo.ts (metadata
                          builder), schema.ts (JSON-LD builders), enquiry.ts,
                          analytics.ts, utils.ts
  components/
    layout/               Header (server, CSS dropdown), MobileNav (client), Footer
    brand/                Logo, WaveLines
    seo/                  JsonLd, Breadcrumbs (visible + BreadcrumbList schema)
    ui/                   Button/ButtonLink/ArrowLink, Section, SectionHeading,
                          CheckList, icons
    sections/             PageHero, HeroVisual, ServiceCard/Grid, FeatureGrid,
                          ProcessSteps, FAQ, CTABand, LegalPage
    diagrams/             FlowDiagram (ProviderNetwork, ImagingWorkflow), UnderOneRoof
    forms/                ContactForm (client)
    blog/                 ArticleCard, ArticleBody/Toc, RichText
    analytics/            GTM / GA4 loader
```

Client components: `MobileNav`, `ContactForm`, `error.tsx` and `global-error.tsx` only.
