import type { FaqItem, ServiceSlug } from "./types";

/**
 * Blog articles.
 *
 * Body blocks support inline [anchor text](/path) links and **bold**. Link to
 * service pages with descriptive anchor text.
 *
 * `draft: true` articles render (so the system can be reviewed) but are
 * noindexed, excluded from the sitemap and flagged on the page. Set
 * draft to false only after the company has reviewed the article.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "callout"; title: string; text: string };

export type Post = {
  slug: string;
  title: string;
  /** <title> override when the H1 is too long for search results. */
  seoTitle?: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  /** Optional image under /public. Cards fall back to a branded panel. */
  image?: { src: string; alt: string; width: number; height: number };
  body: ArticleBlock[];
  faqs?: FaqItem[];
  relatedServices: ServiceSlug[];
  draft: boolean;
};

const EDITORIAL = "Mark Imaging Editorial Team";

export const posts: Post[] = [
  {
    slug: "how-teleradiology-works-for-hospitals",
    title: "How teleradiology works for hospitals: from scanner console to signed report",
    seoTitle: "How Teleradiology Works for Hospitals",
    description:
      "A practical guide for hospital administrators to how teleradiology works: PACS set-up, sending studies, clinical history, reporting and what to agree up front.",
    excerpt:
      "What actually happens between your scanner and a remote radiologist's report, and what hospital teams should agree before going live.",
    category: "Teleradiology",
    author: EDITORIAL,
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    readingMinutes: 6,
    draft: true,
    relatedServices: ["ct-reporting", "mri-reporting", "x-ray-reporting"],
    body: [
      {
        type: "p",
        text: "Teleradiology is the remote interpretation of medical images. The scan is done in your hospital as usual; the images are transmitted securely to a radiologist elsewhere, who reads them and returns a report. For many hospitals it is the most practical way to keep reporting running outside regular hours or when in-house radiologist capacity is stretched.",
      },
      {
        type: "p",
        text: "This guide walks through the workflow step by step, using the model Mark Imaging follows for [outsourced CT reporting](/services/ct-reporting) and [MRI reporting](/services/mri-reporting).",
      },
      { type: "h2", id: "the-building-blocks", text: "The building blocks of a teleradiology set-up" },
      {
        type: "p",
        text: "Every teleradiology workflow needs three things: a way to move images from the scanner, a place for the radiologist to view them with the clinical context, and a way to deliver the report back.",
      },
      {
        type: "ul",
        items: [
          "**Imaging modalities** such as CT, MRI and X-ray systems in your department.",
          "**A PACS** (Picture Archiving and Communication System) that receives, stores and distributes the images. In many teleradiology models this is a cloud PACS.",
          "**A reporting team** of radiologists who read the studies remotely.",
        ],
      },
      { type: "h2", id: "step-by-step", text: "Step by step: how a study moves" },
      { type: "h3", text: "1. Agreeing the requirement" },
      {
        type: "p",
        text: "Before any images move, the hospital and the teleradiology partner agree on modalities, expected volumes, the hours that need cover and commercial terms. This is also the right time to agree turnaround expectations and escalation routes in writing.",
      },
      { type: "h3", text: "2. Installing the PACS connection" },
      {
        type: "p",
        text: "In Mark Imaging's model, a third-party cloud PACS is installed at your premises on a system that is networked with your imaging modalities and has internet access. Nothing changes about how your scanners acquire images.",
      },
      { type: "h3", text: "3. Pushing studies from the console" },
      {
        type: "p",
        text: "Once the PACS is in place, your radiographer sends each case directly from the machine console. For each study uploaded, your team updates the patient history through the PACS so the radiologist knows the clinical question.",
      },
      { type: "h3", text: "4. Reporting and delivery" },
      {
        type: "p",
        text: "The study is read by a radiologist and the report is made available to your team. Studies stored in the PACS remain available for comparison when the same patient returns; Mark Imaging stores each study for one year.",
      },
      {
        type: "callout",
        title: "Clinical history matters",
        text: "A scan without a clinical question is harder to report well. Make updating patient history part of the radiographer's routine for every study.",
      },
      { type: "h2", id: "what-to-agree", text: "What hospitals should agree up front" },
      {
        type: "ul",
        items: [
          "Which modalities and study types are covered, and at what hours.",
          "How urgent studies are flagged and how the reporting team is contacted.",
          "How the credentials of reporting radiologists can be verified.",
          "Who your single point of contact is for day-to-day issues.",
          "How studies are stored and for how long.",
          "How and when invoices are raised and settled.",
        ],
      },
      {
        type: "p",
        text: "You can see how Mark Imaging addresses each of these on our [quality and standards page](/about#quality), or read the full [teleradiology onboarding process](/about#how-it-works).",
      },
      { type: "h2", id: "where-it-fits", text: "Where teleradiology fits alongside in-house radiologists" },
      {
        type: "p",
        text: "Teleradiology rarely has to be all or nothing. Many hospitals keep in-house radiologists for daytime work and use remote reporting for nights and weekends, or use [contract radiologist staffing](/services/radiologist-staffing) for specific hours. The right mix depends on your volumes and the hours your scanners run.",
      },
    ],
    faqs: [
      {
        question: "Do we need to replace our scanners to use teleradiology?",
        answer:
          "No. Your existing modalities continue to acquire images. A PACS connection is set up so studies can be sent from the machine console for remote reporting.",
      },
      {
        question: "What does the hospital need to provide?",
        answer:
          "In Mark Imaging's model, a system at your premises that is networked with your imaging modalities and has internet access, on which the cloud PACS is installed.",
      },
    ],
  },
  {
    slug: "radiologist-staffing-vs-outsourced-reporting",
    title: "Radiologist staffing vs outsourced reporting: choosing the right model",
    seoTitle: "Radiologist Staffing vs Outsourced Reporting",
    description:
      "Should you hire a contract radiologist or outsource reporting through teleradiology? A comparison for hospitals and diagnostic centres, with when to use each.",
    excerpt:
      "Contract staffing and teleradiology solve different problems. Here is how to decide which one, or which combination, fits your department.",
    category: "Radiology Outsourcing",
    author: EDITORIAL,
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    readingMinutes: 5,
    draft: true,
    relatedServices: ["radiologist-staffing", "ct-reporting", "mri-reporting"],
    body: [
      {
        type: "p",
        text: "When a radiology department is short of reporting capacity, there are two broad ways to close the gap: bring in a radiologist on contract, or send studies out for remote reporting. Both are forms of radiology outsourcing, but they suit different situations.",
      },
      { type: "h2", id: "contract-staffing", text: "Contract radiologist staffing" },
      {
        type: "p",
        text: "With [radiologist staffing on contract](/services/radiologist-staffing), you engage a radiologist for a defined block of time. Mark Imaging offers this on an hourly or daily basis, with the quotation depending on the timings required.",
      },
      {
        type: "ul",
        items: [
          "Suits predictable gaps: planned leave, a vacancy being recruited, or regular peak hours.",
          "Cost follows time engaged rather than the number of studies.",
          "Useful when the work needs a radiologist engaged for a specific session.",
        ],
      },
      { type: "h2", id: "outsourced-reporting", text: "Outsourced, per-study reporting" },
      {
        type: "p",
        text: "With outsourced reporting, studies are pushed through a PACS and reported remotely, typically charged per study. Mark Imaging provides [24×7 CT reporting](/services/ct-reporting) and [MRI reporting](/services/mri-reporting) on demand, along with [X-ray and mammography reporting](/services/x-ray-reporting).",
      },
      {
        type: "ul",
        items: [
          "Suits variable or unpredictable volumes, especially overnight and at weekends.",
          "Cost follows the number and category of studies reported.",
          "No need to schedule a radiologist for hours when few scans may arrive.",
        ],
      },
      { type: "h2", id: "how-to-decide", text: "How to decide" },
      {
        type: "callout",
        title: "A simple rule of thumb",
        text: "If you can predict when you need a radiologist, contract staffing is often simpler. If you can only predict that studies will arrive, per-study reporting usually fits better.",
      },
      {
        type: "p",
        text: "Many organisations use both: contract cover for a busy daytime session and outsourced reporting for nights. Working with a single partner for both keeps contracts, contacts and invoices in one place, which is the idea behind Mark Imaging's [radiology outsourcing model](/radiology-outsourcing).",
      },
    ],
  },
  {
    slug: "when-to-seek-a-radiology-second-opinion",
    title: "When should a hospital seek a radiology second opinion?",
    seoTitle: "When to Seek a Radiology Second Opinion",
    description:
      "Situations where a radiology second opinion can support clinical teams, what a second opinion does and does not do, and how hospitals can arrange one.",
    excerpt:
      "A second read can add confidence before a major decision. Here is when clinical teams commonly ask for one, and what to expect.",
    category: "Second Opinion",
    author: EDITORIAL,
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    readingMinutes: 4,
    draft: true,
    relatedServices: ["second-opinion-reporting", "mri-reporting", "ct-reporting"],
    body: [
      {
        type: "p",
        text: "Radiology reports inform a large share of clinical decisions. Most studies are straightforward, but some are not, and in those cases treating teams sometimes want a further expert review of the images before acting.",
      },
      { type: "h2", id: "common-situations", text: "Situations where teams commonly ask for one" },
      {
        type: "ul",
        items: [
          "Before a major or complex surgical procedure where imaging findings shape the plan.",
          "When findings are unusual, subtle or open to more than one interpretation.",
          "When the imaging appears inconsistent with the clinical picture.",
          "When a multidisciplinary team wants input from a senior radiologist or a group of radiologists.",
        ],
      },
      { type: "h2", id: "what-it-does", text: "What a second opinion does, and does not do" },
      {
        type: "p",
        text: "A second opinion is an additional, independent interpretation of the same study. It can confirm, refine or question the original reading. It does not replace the treating clinician's judgement, and it does not guarantee a particular diagnosis or outcome.",
      },
      { type: "h2", id: "how-to-arrange", text: "How hospitals can arrange one" },
      {
        type: "p",
        text: "Through Mark Imaging's [second opinion reporting service](/services/second-opinion-reporting), complex medical cases or surgery cases can be discussed again with a senior expert radiologist or a group of radiologists. Studies are shared through the PACS, together with the clinical question.",
      },
      {
        type: "callout",
        title: "For patients",
        text: "Mark Imaging works with hospitals and healthcare organisations, not directly with patients. If you have questions about your own scan, please speak to your treating doctor.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return getSortedPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.relatedServices.filter((s) => current.relatedServices.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

/** Posts listed by service slug, for "Further reading" on service pages. */
export function getPostsForService(slug: ServiceSlug): Post[] {
  return getSortedPosts().filter((p) => p.relatedServices.includes(slug));
}
