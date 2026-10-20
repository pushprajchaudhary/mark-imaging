import { ProviderNetworkDiagram } from "@/components/diagrams/FlowDiagram";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/radiology-outsourcing";
const title = "Radiology Outsourcing Services in India";
const description =
  "Outsource radiology reporting, radiologist staffing, second opinions and PACS needs to one partner. Mark Imaging serves hospitals and diagnostic centres.";

export const metadata = buildMetadata({ title, description, path });

const models = [
  {
    title: "Per-study reporting",
    description:
      "Studies are pushed through a cloud PACS and reported remotely, charged per study by category. Suited to variable volumes and out-of-hours cover.",
    href: "/teleradiology",
    link: "Teleradiology reporting",
  },
  {
    title: "Contract radiologists",
    description:
      "Hire a radiologist on contract on an hourly or daily basis, quoted on the timings you need. Suited to predictable gaps.",
    href: "/services/radiologist-staffing",
    link: "Radiologist staffing",
  },
  {
    title: "Expert escalation",
    description:
      "Complex medical or surgical cases discussed again with a senior expert radiologist or a group of radiologists.",
    href: "/services/second-opinion-reporting",
    link: "Second opinion reporting",
  },
  {
    title: "Software",
    description: "PACS, RIS and HIS requirements fulfilled and priced as per requirement.",
    href: "/services/pacs-ris-his-solutions",
    link: "PACS, RIS and HIS solutions",
  },
];

const checklist = [
  "Who will actually report our studies, and how stable is that panel?",
  "How are radiologists verified, and can we see their documents?",
  "Which modalities and hours are covered?",
  "How do studies and clinical history reach the radiologist?",
  "How long are studies stored for repeat patients?",
  "Who is our single point of contact?",
  "How does billing work, and when are invoices due?",
];

const faqs = [
  {
    question: "What is radiology outsourcing?",
    answer:
      "Radiology outsourcing means using an external partner for some or all of your radiology needs, such as reporting, radiologist staffing, second opinions or imaging software, instead of handling everything in-house.",
  },
  {
    question: "Can we outsource only part of our radiology work?",
    answer:
      "Yes. You can outsource specific modalities, specific hours or specific services, and keep the rest in-house. Requirements are agreed at the start of the engagement.",
  },
  {
    question: "How is outsourced radiology priced?",
    answer:
      "Reporting is charged per study by modality and category. Radiologist staffing is priced per hour or per day depending on timings. Software is priced as per requirement. Request a quote for exact figures.",
  },
];

export default function OutsourcingPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: title, description }),
          serviceSchema({
            path,
            name: "Radiology outsourcing",
            serviceType: "Radiology outsourcing",
            description,
            audience: ["Hospitals", "Diagnostic centres", "Imaging centres", "Healthcare organisations"],
          }),
        )}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Radiology Outsourcing", path },
        ]}
        eyebrow="Radiology outsourcing"
        title="Radiology outsourcing with one partner for every need"
        lede="Outsource reporting, radiologist staffing, second opinions and imaging software through one contract and one relationship manager, backed by multiple radiology provider groups across India."
        actions={
          <>
            <ButtonLink href="/contact#enquiry" size="lg" arrow>
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="why-outsource-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="why-outsource-heading"
            eyebrow="Why outsource"
            title="Radiology demand rarely matches radiologist supply"
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Scanners run longer hours than most radiology teams can cover. Volumes rise and fall, radiologists take leave,
              and new services start before there is enough work for a full-time hire.
            </p>
            <p>
              Mark Imaging was set up to bridge that demand–supply gap. By aggregating multiple radiology provider groups,
              we can offer hospitals and diagnostic centres capacity that a single small panel cannot.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="models-heading" tone="mist">
        <SectionHeading
          id="models-heading"
          eyebrow="Outsourcing models"
          title="Four ways to outsource, mix and match"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {models.map((m) => (
            <li key={m.title} className="card reveal p-7">
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{m.description}</p>
              <ArrowLink href={m.href} className="mt-5">
                {m.link}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="network-heading">
        <SectionHeading
          id="network-heading"
          eyebrow="Our model"
          title="Outsourcing through a provider network"
          description="Mark Imaging is an aggregator of radiology providers. Partnerships with multiple groups of radiologists mean a larger supply of doctors and the flexibility to meet varying demand."
        />
        <ProviderNetworkDiagram className="mt-12" />
        <FeatureGrid
          className="mt-14"
          columns={3}
          items={[
            { title: "Larger supply", description: "Multiple groups of radiologists rather than a few hires." },
            { title: "Flexibility", description: "Capacity adjusts to your demand and quality expectations." },
            { title: "Accountability", description: "A dedicated relationship manager owns your account." },
          ]}
        />
      </Section>

      <Section labelledBy="checklist-heading" tone="mist">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="checklist-heading"
            eyebrow="Evaluating a partner"
            title="Questions to ask any radiology outsourcing provider"
            description="Use this list in your evaluation. Our answers are on the quality and standards page."
          />
          <div>
            <CheckList items={checklist} />
            <ArrowLink href="/about#quality" className="mt-8">
              How Mark Imaging answers these
            </ArrowLink>
          </div>
        </div>
      </Section>

      <Section labelledBy="all-services-heading">
        <SectionHeading id="all-services-heading" eyebrow="Services" title="What you can outsource to Mark Imaging" />
        <ServiceGrid services={services} className="mt-12" />
      </Section>

      <FAQ faqs={faqs} title="Radiology outsourcing questions" tone="mist" />
      <CTABand />
    </>
  );
}
