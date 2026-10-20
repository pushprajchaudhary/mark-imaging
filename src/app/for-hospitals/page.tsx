import { UnderOneRoof } from "@/components/diagrams/UnderOneRoof";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps, standards } from "@/content/company";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/for-hospitals";
const title = "Hospital Radiology Outsourcing & Teleradiology";
const description =
  "Teleradiology, radiologist staffing and PACS support for hospitals through one partner. 24×7 CT and MRI reporting from verified radiologists across India.";

export const metadata = buildMetadata({ title, description, path });

const challenges: Array<{ icon: IconName; title: string; description: string; href: string; link: string }> = [
  {
    icon: "clock",
    title: "Night and weekend CT and MRI",
    description: "Emergency scans need reports outside regular hours. On-demand CT and MR reporting runs 24×7.",
    href: "/services/ct-reporting",
    link: "24×7 CT reporting",
  },
  {
    icon: "user-plus",
    title: "Radiologist leave and vacancies",
    description: "Hire a radiologist on contract on an hourly or daily basis while you recruit or cover leave.",
    href: "/services/radiologist-staffing",
    link: "Radiologist staffing for hospitals",
  },
  {
    icon: "users",
    title: "Complex and surgical cases",
    description: "Have difficult cases discussed again with a senior expert radiologist or a group of radiologists.",
    href: "/services/second-opinion-reporting",
    link: "Second opinion reporting",
  },
  {
    icon: "monitor",
    title: "Imaging software",
    description: "Address PACS, RIS and HIS requirements with a partner who understands the reporting workflow.",
    href: "/services/pacs-ris-his-solutions",
    link: "PACS, RIS and HIS solutions",
  },
];

const faqs = [
  {
    question: "Why should a hospital work with an aggregator rather than a single teleradiology company?",
    answer:
      "Typical teleradiology providers hire a few radiologists, which tends to mean low retention and frequent panel changes. Mark Imaging partners with multiple groups of radiologists, giving a larger supply of doctors and flexibility to meet varying demand.",
  },
  {
    question: "Can we combine reporting, staffing and software in one contract?",
    answer:
      "Yes. Mark Imaging offers all radiology services under one roof, so reporting, radiologist hiring and software can be arranged through one partner and one relationship manager.",
  },
  {
    question: "How does billing work?",
    answer: "Invoices are to be cleared by the 15th of the subsequent month.",
  },
  {
    question: "Can our credentialing committee review the reporting radiologists?",
    answer:
      "Yes. All relevant documents of the reporting radiologist can be furnished on demand, and every radiologist goes through a strict verification process.",
  },
];

export default function HospitalsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: title, description }),
          serviceSchema({
            path,
            name: "Radiology outsourcing for hospitals",
            serviceType: "Hospital radiology outsourcing and teleradiology",
            description,
            audience: ["Hospitals"],
          }),
        )}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "For Hospitals", path },
        ]}
        eyebrow="For hospitals"
        title="Radiology outsourcing and teleradiology for hospitals"
        lede="For medical directors, radiology heads and hospital administrators who need dependable reporting, flexible radiologist capacity and imaging software, without managing several vendors."
        actions={
          <>
            <ButtonLink href="/contact#enquiry" size="lg" arrow>
              Discuss Your Radiology Requirements
            </ButtonLink>
            <ButtonLink href="/about#how-it-works" variant="secondary" size="lg">
              How it works
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="roof-heading">
        <SectionHeading
          id="roof-heading"
          eyebrow="Benefits for hospitals"
          title="All radiology services under one roof"
          description="Multiple Radiology Associates, radiologist hiring and software, coordinated by Mark Imaging so your hospital deals with one partner."
        />
        <div className="mt-12">
          <UnderOneRoof />
        </div>
      </Section>

      <Section labelledBy="challenges-heading" tone="mist">
        <SectionHeading
          id="challenges-heading"
          eyebrow="Where we help"
          title="Common hospital radiology challenges, and how we address them"
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {challenges.map((c) => (
            <li key={c.title} className="card reveal flex gap-5 p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={c.icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-500">{c.description}</p>
                <ArrowLink href={c.href} className="mt-4 text-sm">
                  {c.link}
                </ArrowLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="assurance-heading">
        <SectionHeading
          id="assurance-heading"
          eyebrow="What your administration can rely on"
          title="Commitments for hospital decision makers"
        />
        <FeatureGrid items={standards} className="mt-12" />
        <ArrowLink href="/about#quality" className="mt-10">
          Full quality and standards
        </ArrowLink>
      </Section>

      <Section labelledBy="hospital-process-heading" tone="mist">
        <SectionHeading id="hospital-process-heading" eyebrow="Onboarding" title="How hospitals get started" />
        <div className="mt-14">
          <ProcessSteps steps={processSteps} />
        </div>
      </Section>

      <FAQ faqs={faqs} title="Questions from hospitals" />
      <CTABand
        title="Talk to our radiology solutions team"
        description="Tell us about your hospital's modalities, volumes and staffing gaps. We will propose a combination of reporting, staffing and software that fits."
      />
    </>
  );
}
