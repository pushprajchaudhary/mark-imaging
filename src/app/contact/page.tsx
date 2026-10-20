import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { CheckList } from "@/components/ui/CheckList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { graph, ORG_ID, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const path = "/contact";
const title = "Contact Us & Get a Quote";
const description =
  "Get a quote for CT, MRI or X-ray reporting, radiologist staffing, second opinions or PACS from Mark Imaging. Call +91-81269-63692 or send an enquiry.";

export const metadata = buildMetadata({ title, description, path });

const faqs = [
  {
    question: "Who should contact Mark Imaging?",
    answer:
      "Hospitals, diagnostic centres, imaging centres and healthcare organisations looking for radiology reporting, radiologist staffing, second opinions, pre-reads or PACS, RIS and HIS solutions.",
  },
  {
    question: "What happens after we send an enquiry?",
    answer:
      "We review your requirement, discuss the details and share a quotation. Once terms are agreed and the contract is signed, a cloud PACS is set up at your premises and reporting begins.",
  },
  {
    question: "Can I send patient scans or reports through this form?",
    answer:
      "No. This form is for business enquiries only. Please do not share patient details. Patients with questions about a scan should speak to their treating doctor.",
  },
];

export default function ContactPage() {
  const { contact } = siteConfig;
  return (
    <>
      <JsonLd
        data={graph({
          ...webPageSchema({ path, name: title, description, type: "ContactPage" }),
          mainEntity: { "@id": ORG_ID },
        })}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path },
        ]}
        eyebrow="Contact"
        title="Get a quote for your radiology requirements"
        lede="Tell us what you need and our team will respond with a customised proposal. Prefer to talk? Call or email us directly."
      />

      <Section labelledBy="enquiry-heading" id="enquiry" className="!pt-14 sm:!pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="card p-6 sm:p-10">
            <h2 id="enquiry-heading" className="text-2xl font-semibold">
              Request a consultation
            </h2>
            <p className="mt-2 mb-8 text-ink-500">Fields marked * are required. We only use these details to respond to your enquiry.</p>
            <Suspense fallback={<div className="h-[36rem] animate-pulse rounded-xl bg-ink-50" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside aria-labelledby="direct-heading" className="space-y-6">
            <div className="rounded-[var(--radius-card)] bg-ink-950 p-7 text-ink-300 sm:p-8">
              <h2 id="direct-heading" className="text-xl font-semibold text-white">
                Talk to our team
              </h2>
              <address className="mt-6 space-y-5 not-italic">
                <a href={contact.phoneHref} className="group flex gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-medium tracking-wider text-ink-400 uppercase">Mobile</span>
                    <span className="text-lg font-semibold text-white group-hover:text-brand-300">{contact.phoneDisplay}</span>
                  </span>
                </a>
                <a href={`mailto:${contact.email}`} className="group flex gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs font-medium tracking-wider text-ink-400 uppercase">Email</span>
                    <span className="font-semibold break-all text-white group-hover:text-brand-300">{contact.email}</span>
                  </span>
                </a>
                <p className="flex gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-medium tracking-wider text-ink-400 uppercase">Address</span>
                    <span className="font-semibold text-white">{contact.addressLine}</span>
                  </span>
                </p>
              </address>
            </div>

            <div className="card p-7">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-brand-700" aria-hidden="true" />
                <h2 className="text-lg font-semibold">What happens next</h2>
              </div>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-[0.9375rem] text-ink-600 marker:text-ink-400">
                <li>We review your requirement.</li>
                <li>We discuss details and share a quotation.</li>
                <li>On agreement, we sign the contract and set up the cloud PACS.</li>
              </ol>
            </div>

            <p className="rounded-xl border border-ink-200 bg-ink-50 p-5 text-sm leading-relaxed text-ink-600">
              <strong className="font-semibold text-ink-900">For patients:</strong> Mark Imaging works with hospitals and
              healthcare organisations and does not provide diagnosis or advice to individuals. Please contact your
              treating doctor about your scan.
            </p>
          </aside>
        </div>
      </Section>

      <Section labelledBy="prepare-heading" tone="mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="prepare-heading"
            eyebrow="Before you write"
            title="What to share for an accurate quote"
            description="The more we know about your department, the faster we can come back with a proposal that fits."
          />
          <CheckList
            items={[
              "Modalities in use: CT, MRI, X-ray, mammography",
              "Approximate monthly volumes by study type",
              "Hours and days you need covered, for example nights and weekends",
              "Whether you also need radiologist staffing, second opinions or pre-reads",
              "Any PACS, RIS or HIS requirements",
              "Your city and the number of sites",
            ]}
          />
        </div>
      </Section>

      <FAQ faqs={faqs} title="Before you contact us" />
    </>
  );
}
