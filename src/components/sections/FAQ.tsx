import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { faqSchema, graph, type FaqItem } from "@/lib/schema";

/**
 * Visible FAQ built on native <details> (no JavaScript). FAQPage JSON-LD is
 * emitted from here, so schema exists only where the questions are visible.
 */
export function FAQ({
  faqs,
  title = "Frequently asked questions",
  description,
  tone = "white",
  id = "faq",
}: {
  faqs: FaqItem[];
  title?: string;
  description?: string;
  tone?: "white" | "mist";
  id?: string;
}) {
  if (faqs.length === 0) return null;
  const headingId = `${id}-heading`;

  return (
    <Section id={id} labelledBy={headingId} tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <SectionHeading id={headingId} eyebrow="FAQ" title={title} description={description} />
        <div className="divide-y divide-ink-200 border-y border-ink-200">
          {faqs.map((f) => (
            <details key={f.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                <h3 className="font-sans text-base font-semibold tracking-normal text-ink-900 sm:text-lg">{f.question}</h3>
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-500 group-hover:border-ink-300">
                  <Plus className="faq-icon size-4 transition-transform duration-200 motion-reduce:transition-none" aria-hidden="true" />
                </span>
              </summary>
              <p className="pr-12 pb-6 leading-relaxed text-ink-500">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={graph(faqSchema(faqs))} />
    </Section>
  );
}
