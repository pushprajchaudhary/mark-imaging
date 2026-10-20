# Mark Imaging website

Corporate website for **Mark Imaging, a Radiology Outsourcing Solution**. Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Every route is statically generated.

Strategy, sitemap, keyword map, design system and the brochure fact inventory are in [docs/STRATEGY.md](docs/STRATEGY.md).

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint && npm run typecheck
```

Node 20.9+ is required (22.13+ recommended).

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Required in production.** Canonical origin, e.g. `https://www.your-domain.com`. Drives canonicals, sitemap, OG and JSON-LD. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag token. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container. Preferred; configure GA4 inside GTM. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID, used only if GTM is not set. |
| `NEXT_PUBLIC_ENQUIRY_ENDPOINT` | URL that receives enquiry form JSON (Formspree, Basin, CRM webhook, serverless function). If empty, the form shows a pre-filled email fallback. |

The form pushes a `generate_lead` event to `dataLayer` on success, with no personal data. Mark it as a conversion in GA4.

## Editing content

| What | Where |
|---|---|
| Company facts, contact details, feature flags | `src/lib/site.ts` |
| Service pages (copy, FAQs, related services) | `src/content/services.ts` |
| Process, standards, differentiators | `src/content/company.ts` |
| Home FAQs | `src/content/faqs.ts` |
| Blog articles | `src/content/posts.ts` |
| Prices (hidden by default) | `src/content/pricing.ts`. Set `features.showPricing` in `site.ts` to publish `/pricing`. |
| Navigation | `src/content/navigation.ts` |

**Rule:** do not add claims (certifications, statistics, turnaround times, client names) unless the company has confirmed them in writing.

### Blog articles

Articles are typed blocks with inline `[anchor text](/path)` links and `**bold**`. The three included articles are `draft: true`: they render with a draft banner, are `noindex`, and stay out of the sitemap. After company review, set `draft: false`. To scale beyond a handful of posts, swap `posts.ts` for MDX or a headless CMS. The page template, cards and schema stay the same.

## Before going live

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain and redeploy
- [ ] Connect `NEXT_PUBLIC_ENQUIRY_ENDPOINT` and send a test enquiry
- [ ] Legal review of `/privacy-policy`, `/terms-and-conditions` and `/medical-disclaimer`, then pass `reviewed` to `LegalPage`
- [ ] Company review of all copy, especially service FAQs and blog drafts
- [ ] Add licensed photography if wanted (see below)
- [ ] Verify the domain in Search Console and submit `/sitemap.xml`
- [ ] Add GTM/GA4 IDs and mark `generate_lead` as a conversion
- [ ] Add social profile URLs to `siteConfig.sameAs`
- [ ] Optional: a higher-resolution or vector (SVG) logo; the brochure logo is 500×500 JPEG-derived

## Images

The brochure contained only the logo and clip-art, which were not suitable for reuse. The site therefore uses original HTML/SVG visuals (the study-viewer hero, flow diagrams, the wave motif). These are crisp, add no image weight, and do not imply that Mark Imaging owns facilities or equipment.

To add photography, place licensed AVIF/WebP files in `public/images/` and render them with `next/image`, with descriptive `alt` text and explicit `width`/`height`. Avoid images of hospitals or scanners branded as Mark Imaging's own.

## Deployment

Works on Vercel with no configuration. On preview deployments (`VERCEL_ENV !== "production"`), `robots.txt` disallows all crawling. For other hosts, `npm run build && npm start`. Security headers and permanent redirects for common short URLs are in `next.config.ts`.
