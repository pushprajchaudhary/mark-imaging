import Link from "next/link";
import { ProviderNetworkDiagram } from "@/components/diagrams/FlowDiagram";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceCard";
import { ModalityGrid, PartnerChecklist } from "@/components/sections/TeleradiologySections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/company";
import { solutionNav } from "@/content/navigation";
import { getServices } from "@/content/services";
import type { ServiceSlug } from "@/content/types";
import { graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const title = "Radiology Services: Reporting, Staffing & PACS";
const description =
  "Our radiology services: 24×7 CT and MRI reporting, X-ray and mammography reporting, radiologist staffing, second opinions, pre-reads and PACS/RIS/HIS.";

export const metadata = buildMetadata({ title, description, path: "/services" });

const reporting = getServices(["ct-reporting", "mri-reporting", "x-ray-reporting", "pre-reads"]);
const specialist = getServices(["second-opinion-reporting", "radiologist-staffing", "pacs-ris-his-solutions"]);

/** Overview table. Availability is stated only where the brochure states it. */
const overview: Array<{ slug: ServiceSlug; covers: string; availability: string; engagement: string }> = [
  {
    slug: "ct-reporting",
    covers: "CT head, other body parts, special CT studies",
    availability: "24×7 on demand",
    engagement: "Per study, by category",
  },
  {
    slug: "mri-reporting",
    covers: "MRI brain & spine, other body parts, special MRI studies",
    availability: "24×7 on demand",
    engagement: "Per study, by category",
  },
  {
    slug: "x-ray-reporting",
    covers: "X-ray, special X-ray studies, mammography",
    availability: "Agreed in contract",
    engagement: "Per study, by category",
  },
  {
    slug: "second-opinion-reporting",
    covers: "Complex medical and surgical cases",
    availability: "On request",
    engagement: "Agreed per requirement",
  },
  {
    slug: "radiologist-staffing",
    covers: "Radiologist hired on contract",
    availability: "Hourly or daily",
    engagement: "Per hour or per day, by timings",
  },
  {
    slug: "pacs-ris-his-solutions",
    covers: "PACS, RIS and HIS requirements",
    availability: "Project based",
    engagement: "As per requirement",
  },
  {
    slug: "pre-reads",
    covers: "Initial radiologist review",
    availability: "Scope agreed with you",
    engagement: "Agreed per requirement",
  },
];

const faqs = [
  {
    question: "Can we start with just one service?",
    answer:
      "Yes. You can start with a single service, such as night-time CT reporting, and add others later under the same contract and relationship manager.",
  },
  {
    question: "Which services are available 24×7?",
    answer:
      "On-demand CT and MRI reporting is offered 24×7. Hours for other services are agreed during the requirement discussion.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Reporting is charged per study by modality and category. Radiologist staffing is charged per hour or per day depending on timings. Software is priced as per requirement. Request a quote for exact figures.",
  },
  {
    question: "Do you work with diagnostic centres as well as hospitals?",
    answer:
      "Yes. Mark Imaging works with hospitals, diagnostic centres, imaging centres and other healthcare organisations.",
  },
];

export default function ServicesPage() {
  const all = [...reporting, ...specialist];
  const byslug = new Map(all.map((s) => [s.slug, s]));

  return (
    <>
      <JsonLd
        data={graph(webPageSchema({ path: "/services", name: title, description, type: "CollectionPage" }), {
          "@type": "ItemList",
          itemListElement: all.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.name,
            url: absoluteUrl(`/services/${s.slug}`),
          })),
        })}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        eyebrow="Our services"
        title="Radiology services for hospitals and diagnostic centres"
        lede="A one-stop solution for radiology requirements: teleradiology reporting, contract radiologists, second opinions, pre-reads and imaging software, delivered through one partner and one relationship manager."
        actions={
          <>
            <ButtonLink href="/contact#enquiry" size="lg" arrow>
              Get a Quote
            </ButtonLink>
            <ButtonLink href="#overview" variant="secondary" size="lg">
              Compare services
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="reporting-heading">
        <SectionHeading
          id="reporting-heading"
          eyebrow="Teleradiology reporting"
          title="Reporting services"
          description="Studies are pushed from your modality console through a cloud PACS and reported by verified radiologists from our partner network. CT and MRI reporting is available 24×7 on demand."
        />
        <ServiceGrid services={reporting} className="mt-12 lg:grid-cols-4" />
      </Section>

      <Section labelledBy="modalities-heading" tone="mist">
        <SectionHeading
          id="modalities-heading"
          eyebrow="Modalities"
          title="Studies we report"
          description="Reporting is organised by modality and study category, and your quote is built around the mix of studies you actually perform."
        />
        <div className="mt-12">
          <ModalityGrid />
        </div>
      </Section>

      <Section labelledBy="specialist-heading">
        <SectionHeading
          id="specialist-heading"
          eyebrow="Beyond reporting"
          title="Second opinions, staffing and software"
          description="Services that sit alongside routine reporting, so complex cases, staffing gaps and software needs are handled by the same partner."
        />
        <ServiceGrid services={specialist} className="mt-12" />
      </Section>

      <Section id="overview" labelledBy="overview-heading" tone="mist">
        <SectionHeading
          id="overview-heading"
          eyebrow="At a glance"
          title="Compare our services"
          description="What each service covers, when it is available and how it is engaged."
        />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
          <table className="w-full min-w-[46rem] text-left text-[0.9375rem]">
            <caption className="sr-only">Overview of Mark Imaging radiology services</caption>
            <thead className="bg-ink-50 text-sm text-ink-700">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Service</th>
                <th scope="col" className="px-5 py-4 font-semibold">What it covers</th>
                <th scope="col" className="px-5 py-4 font-semibold">Availability</th>
                <th scope="col" className="px-5 py-4 font-semibold">Engagement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-200">
              {overview.map((row) => {
                const s = byslug.get(row.slug)!;
                return (
                  <tr key={row.slug}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold">
                      <Link href={`/services/${row.slug}`} className="text-ink-900 underline-offset-4 hover:text-brand-700 hover:underline">
                        {s.name}
                      </Link>
                    </th>
                    <td className="px-5 py-4 align-top text-ink-600">{row.covers}</td>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={
                          row.availability.startsWith("24×7")
                            ? "rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800"
                            : "text-ink-600"
                        }
                      >
                        {row.availability}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top text-ink-600">{row.engagement}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-500">
          Exact pricing depends on your volumes, modalities and timings.{" "}
          <Link href="/contact#enquiry" className="font-semibold text-brand-700 underline underline-offset-4">
            Request a customised quote
          </Link>
          .
        </p>
      </Section>

      <Section labelledBy="delivery-heading">
        <SectionHeading
          id="delivery-heading"
          eyebrow="How services are delivered"
          title="Every service runs through one network"
          description="Whichever service you choose, Mark Imaging coordinates it through multiple Radiology Associates across India, so you deal with one partner."
        />
        <ProviderNetworkDiagram className="mt-12" />
        <h3 className="mt-20 text-2xl font-semibold">Getting started takes three steps</h3>
        <div className="mt-10">
          <ProcessSteps steps={processSteps} />
        </div>
      </Section>

      <Section labelledBy="checklist-heading" tone="mist">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
          <SectionHeading
            id="checklist-heading"
            eyebrow="Choosing a partner"
            title="Questions to ask any teleradiology provider"
            description="Use this checklist when comparing providers. Here is how Mark Imaging answers each one."
          />
          <PartnerChecklist />
        </div>
      </Section>

      <Section labelledBy="solutions-heading">
        <SectionHeading id="solutions-heading" eyebrow="Learn more" title="Guides by topic and audience" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutionNav.map((s) => (
            <li key={s.href} className="card card-interactive relative p-6">
              <h3 className="text-lg font-semibold">
                <Link href={s.href} className="after:absolute after:inset-0 hover:text-brand-700">
                  {s.label}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{s.description}</p>
            </li>
          ))}
        </ul>
        <ArrowLink href="/radiology-outsourcing" className="mt-8">
          How radiology outsourcing brings these together
        </ArrowLink>
      </Section>

      <FAQ faqs={faqs} title="Questions about our services" tone="mist" />
      <CTABand />
    </>
  );
}
