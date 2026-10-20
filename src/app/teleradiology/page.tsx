import { ImagingWorkflowDiagram } from "@/components/diagrams/FlowDiagram";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ServiceGrid } from "@/components/sections/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/company";
import { getServices } from "@/content/services";
import { graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/teleradiology";
const title = "Teleradiology Services for Hospitals in India";
const description =
  "Teleradiology from Mark Imaging: 24×7 CT and MRI reporting plus X-ray reporting via cloud PACS, delivered by verified radiologists from partner groups across India.";

export const metadata = buildMetadata({ title, description, path });

const faqs = [
  {
    question: "What is teleradiology?",
    answer:
      "Teleradiology is the remote interpretation of medical images. Scans are acquired at the hospital or imaging centre and sent electronically to radiologists elsewhere, who report them.",
  },
  {
    question: "Which modalities does Mark Imaging's teleradiology cover?",
    answer:
      "CT, MRI and X-ray (including mammography). On-demand CT and MRI reporting is available 24×7.",
  },
  {
    question: "What do we need to start teleradiology with Mark Imaging?",
    answer:
      "A system at your premises that is networked with your imaging modalities and has internet access. A third-party cloud PACS is installed on it, and your radiographer pushes cases from the machine console.",
  },
  {
    question: "Who reports the studies?",
    answer:
      "Verified radiologists from Mark Imaging's partner Radiology Associates, registered firms of groups of radiologists across India. Their relevant documents can be furnished on demand.",
  },
  {
    question: "How long are studies stored?",
    answer: "Each study is stored for one year for future reference when patients return.",
  },
];

export default function TeleradiologyPage() {
  const reporting = getServices(["ct-reporting", "mri-reporting", "x-ray-reporting", "pre-reads"]);
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: title, description }),
          serviceSchema({
            path,
            name: "Teleradiology",
            serviceType: "Teleradiology",
            description,
            audience: ["Hospitals", "Diagnostic centres", "Imaging centres"],
          }),
        )}
      />
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Teleradiology", path },
        ]}
        eyebrow="Teleradiology"
        badge="CT & MR available 24×7"
        title="Teleradiology services for hospitals and diagnostic centres"
        lede="Scan on site, report remotely. Mark Imaging connects your modalities to a cloud PACS and routes every study to verified radiologists across a network of radiology provider groups."
        actions={
          <>
            <ButtonLink href="/contact#enquiry" size="lg" arrow>
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/about#how-it-works" variant="secondary" size="lg">
              How onboarding works
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="what-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="what-heading"
            eyebrow="What is teleradiology"
            title="Reporting that is not limited by who is in the building"
          />
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              Teleradiology separates image acquisition from interpretation. Your team performs the scan; a qualified
              radiologist elsewhere reads it and returns the report. It lets hospitals and imaging centres report studies
              at any hour without a radiologist on site for every shift.
            </p>
            <p>
              Mark Imaging delivers teleradiology differently from a typical provider. Instead of relying on a few
              employed radiologists, we route studies through multiple Radiology Associates across India, so capacity
              does not hinge on a small panel.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="flow-heading" tone="mist">
        <SectionHeading
          id="flow-heading"
          eyebrow="The workflow"
          title="How a study moves from your scanner to a report"
          align="center"
          className="mx-auto"
        />
        <ImagingWorkflowDiagram className="mt-12" />
      </Section>

      <Section labelledBy="modalities-heading">
        <SectionHeading
          id="modalities-heading"
          eyebrow="Modalities"
          title="Teleradiology reporting services"
          description="Choose one modality or combine them under a single contract."
        />
        <ServiceGrid services={reporting} className="mt-12 lg:grid-cols-4" />
      </Section>

      <Section labelledBy="benefits-heading" tone="mist">
        <SectionHeading id="benefits-heading" eyebrow="Why it works" title="What hospitals gain from teleradiology with us" />
        <FeatureGrid
          className="mt-12"
          numbered
          items={[
            {
              title: "Coverage outside working hours",
              description: "CT and MRI reporting runs 24×7 on demand, including nights, weekends and holidays.",
            },
            {
              title: "No hardware overhaul",
              description: "Your existing modalities keep working; a cloud PACS is installed on a networked system at your site.",
            },
            {
              title: "Context with every study",
              description: "You get software access to update patient history in the PACS for each upload.",
            },
            {
              title: "Priors for returning patients",
              description: "Each study is stored for one year for future reference of repeat patients.",
            },
            {
              title: "Verified radiologists",
              description: "A strict verification process, with all relevant documents furnished on demand.",
            },
            {
              title: "One point of contact",
              description: "A dedicated relationship manager coordinates across the provider network.",
            },
          ]}
        />
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading id="process-heading" eyebrow="Getting started" title="Three steps to go live" />
        <div className="mt-14">
          <ProcessSteps steps={processSteps} />
        </div>
        <div className="mt-14 rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Considering teleradiology alongside in-house radiologists?</h3>
          <CheckList
            className="mt-4"
            items={[
              "Use teleradiology for nights and weekends and keep daytime reporting in-house",
              "Add contract radiologists for specific hours through radiologist staffing",
              "Escalate complex cases to a senior radiologist through second opinion reporting",
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="/services/radiologist-staffing">Radiologist staffing on contract</ArrowLink>
            <ArrowLink href="/services/second-opinion-reporting">Second opinion reporting</ArrowLink>
          </div>
        </div>
      </Section>

      <FAQ faqs={faqs} title="Teleradiology questions" tone="mist" />
      <CTABand title="Start teleradiology with Mark Imaging" />
    </>
  );
}
