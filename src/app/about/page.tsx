import Link from "next/link";
import { Check, X } from "lucide-react";
import { ImagingWorkflowDiagram, ProviderNetworkDiagram } from "@/components/diagrams/FlowDiagram";
import { UnderOneRoof } from "@/components/diagrams/UnderOneRoof";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, differentiators, processSteps, standards } from "@/content/company";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/about";
const title = "About Us: Radiology Outsourcing Partner";
const description =
  "Who Mark Imaging is, why our aggregator model of radiology provider groups is different, how onboarding works, and the quality standards we commit to.";

export const metadata = buildMetadata({ title, description, path });

const jumpLinks = [
  { label: "Who we are", href: "#who-we-are" },
  { label: "Why Mark Imaging", href: "#why-mark-imaging" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Quality & standards", href: "#quality" },
];

const pillars = [
  { icon: "badge" as const, title: "Experienced leadership", description: about.leadership },
  {
    icon: "network" as const,
    title: "A distribution model, not a fixed panel",
    description:
      "We partner with multiple Radiology Associates, registered firms of groups of radiologists, across India, instead of relying on a handful of employed radiologists.",
  },
  { icon: "handshake" as const, title: "Consultants first", description: about.consultants },
];

const comparison = [
  {
    topic: "Who reports your studies",
    typical: "A few radiologists hired by the provider",
    mark: "Multiple groups of radiologists through partner Radiology Associates",
  },
  {
    topic: "Panel stability",
    typical: "Low retention and frequent panel changes",
    mark: "A larger supply of doctors to draw on",
  },
  {
    topic: "Changing demand",
    typical: "Limited by the size of the in-house panel",
    mark: "Flexibility to meet varying demand",
  },
  {
    topic: "Approach",
    typical: "One standard offering",
    mark: "Consultative: levers adjusted to your demand and quality expectations",
  },
  {
    topic: "Other radiology needs",
    typical: "Separate vendors for staffing and software",
    mark: "Reporting, radiologist hiring and PACS/RIS/HIS under one roof",
  },
];

const faqs = [
  {
    question: "What is a Radiology Associate?",
    answer:
      "A Radiology Associate is a registered firm made up of a group of radiologists that offers reporting services. Mark Imaging partners with multiple Radiology Associates across India.",
  },
  {
    question: "What does 'aggregator of radiology providers' mean?",
    answer:
      "Mark Imaging brings together multiple radiology provider groups and offers their capacity to hospitals and diagnostic centres through one partner, instead of relying on a small team of radiologists it employs directly.",
  },
  {
    question: "What do we need on site to get started?",
    answer:
      "A system at your premises that is networked with your imaging modalities and has internet access. A third-party cloud PACS is installed on it, and your radiographer pushes cases from the machine console.",
  },
  {
    question: "Can we see the credentials of the reporting radiologist?",
    answer:
      "Yes. Every radiologist goes through a strict verification process, and all relevant documents of the reporting radiologist are furnished on demand.",
  },
  {
    question: "How long are studies stored?",
    answer: "Each study is stored for one year for future reference of repeat patients.",
  },
  {
    question: "What are the payment terms?",
    answer: "Invoices are to be cleared by the 15th of the subsequent month.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, name: title, description, type: "AboutPage" }))} />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path },
        ]}
        eyebrow="About us"
        title="A radiology outsourcing partner built to close the supply gap"
        lede="Mark Imaging is led by veterans of medical imaging technology, imaging services and telemedicine. We make dependable radiology reporting and resources easier for hospitals and diagnostic centres to access."
        actions={
          <>
            <ButtonLink href="/contact" size="lg" arrow>
              Talk to Our Team
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
          </>
        }
      />

      {/* In-page navigation */}
      <nav aria-label="On this page" className="sticky top-[4.5rem] z-40 border-b border-ink-200/70 bg-white/90 backdrop-blur-md">
        <ul className="container-x flex gap-1 overflow-x-auto py-2 [scrollbar-width:none]">
          {jumpLinks.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="block rounded-full px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Who we are */}
      <Section id="who-we-are" labelledBy="who-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading id="who-heading" eyebrow="Who we are" title="Bridging the demand–supply gap in radiology" />
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Hospitals and diagnostic centres need radiology reporting at all hours, while the supply of radiologists
              available to any single organisation is limited. Our mission is to bridge that demand–supply gap by
              offering innovative solutions using technology and distribution models.
            </p>
            <p>
              In practice, that means a{" "}
              <strong className="font-semibold text-ink-900">one-stop solution for all radiology requirements</strong>:
              CT, MRI and X-ray reporting, contract radiologists, second opinions, pre-reads and the PACS, RIS and HIS
              software that holds it together.
            </p>
          </div>
        </div>
        <FeatureGrid items={pillars} className="mt-14" />
      </Section>

      {/* Why Mark Imaging */}
      <Section id="why-mark-imaging" labelledBy="why-heading" tone="mist">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Mark Imaging"
          title="One partner. Multiple radiology provider groups."
          description="Mark Imaging is an aggregator of radiology providers, not a typical teleradiology company. We have multiple Radiology Associates as partners across India and act as consultants who build the right solution for your department."
        />
        <ProviderNetworkDiagram className="mt-12" />

        <h3 className="mt-20 text-2xl font-semibold">How we are different</h3>
        <FeatureGrid items={differentiators} numbered className="mt-8" />

        <h3 className="mt-20 text-2xl font-semibold">Typical teleradiology provider vs Mark Imaging</h3>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
          <table className="w-full min-w-[40rem] text-left text-[0.9375rem]">
            <caption className="sr-only">Comparison of a typical teleradiology provider and Mark Imaging</caption>
            <thead className="bg-ink-50 text-sm">
              <tr>
                <th scope="col" className="w-1/4 px-5 py-4 font-semibold text-ink-700">
                  <span className="sr-only">Topic</span>
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-ink-700">
                  Typical teleradiology provider
                </th>
                <th scope="col" className="px-5 py-4 font-semibold text-brand-800">
                  Mark Imaging
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {comparison.map((row) => (
                <tr key={row.topic}>
                  <th scope="row" className="px-5 py-4 align-top font-semibold text-ink-900">
                    {row.topic}
                  </th>
                  <td className="px-5 py-4 align-top text-ink-500">
                    <span className="flex gap-2">
                      <X className="mt-1 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                      {row.typical}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top text-ink-800">
                    <span className="flex gap-2">
                      <Check className="mt-1 size-4 shrink-0 text-brand-700" aria-hidden="true" />
                      {row.mark}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-20 text-2xl font-semibold">All radiology services under one roof</h3>
        <div className="mt-8">
          <UnderOneRoof />
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" labelledBy="how-heading">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="From requirement to reporting in three steps"
          description="A simple onboarding process: agree what you need, connect your modalities to a cloud PACS, and start sending studies from the console."
        />
        <div className="mt-14">
          <ProcessSteps steps={processSteps} />
        </div>
        <div className="mt-16 rounded-[1.75rem] border border-ink-200 bg-ink-50 p-5 sm:p-8">
          <h3 className="text-center font-display text-base font-semibold">What happens to each study once you are live</h3>
          <ImagingWorkflowDiagram className="mt-6" />
        </div>
      </Section>

      {/* Quality & standards */}
      <Section id="quality" labelledBy="quality-heading" tone="mist">
        <SectionHeading
          id="quality-heading"
          eyebrow="Ethics & standards"
          title="Quality and ethics standards we work to"
          description="Clear, practical commitments on who reports your studies, how you can verify them, how you reach us and how studies and invoices are handled."
        />
        <ol className="mt-12 divide-y divide-ink-200 border-y border-ink-200">
          {standards.map((s, i) => (
            <li
              key={s.title}
              className="reveal grid gap-4 py-7 sm:grid-cols-[3rem_1fr] md:grid-cols-[3rem_1fr_1.4fr] md:items-center md:gap-10"
            >
              <span className="font-display text-sm font-bold text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-ink-200">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="leading-relaxed text-ink-500 sm:col-start-2 md:col-start-auto">{s.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">
          {differentiators[2]!.description} For information about specific certifications or regulatory compliance
          relevant to your organisation, please{" "}
          <Link href="/contact" className="font-semibold text-brand-700 underline underline-offset-4">
            contact our team
          </Link>
          .
        </p>
        <ArrowLink href="/services" className="mt-8">
          See all radiology services
        </ArrowLink>
      </Section>

      <FAQ faqs={faqs} title="Questions about Mark Imaging" />
      <CTABand />
    </>
  );
}
