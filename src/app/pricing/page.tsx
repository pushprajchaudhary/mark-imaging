import { notFound } from "next/navigation";
import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { otherCharges, reportingCharges, type PriceGroup } from "@/content/pricing";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

/**
 * Published only when siteConfig.features.showPricing is true; otherwise 404.
 * Prices are maintained in src/content/pricing.ts.
 */
const path = "/pricing";
const title = "Radiology Reporting Charges";
const description =
  "Indicative per-study charges for CT, MRI and X-ray reporting, and contract radiologist rates from Mark Imaging. Request a quote for exact pricing.";

export const metadata = siteConfig.features.showPricing
  ? buildMetadata({ title, description, path })
  : { robots: { index: false, follow: false } };

function PriceTable({ group }: { group: PriceGroup }) {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-ink-200 bg-ink-50 px-6 py-4">
        <h3 className="text-lg font-semibold">{group.title}</h3>
        {group.unit && <p className="text-sm text-ink-500">Charged {group.unit}</p>}
      </div>
      <table className="w-full text-left">
        <caption className="sr-only">{group.title}</caption>
        <tbody className="divide-y divide-ink-100">
          {group.rows.map((r) => (
            <tr key={r.item}>
              <th scope="row" className="px-6 py-3.5 font-medium text-ink-700">
                {r.item}
              </th>
              <td className="px-6 py-3.5 text-right font-semibold text-ink-900">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {group.note && <p className="border-t border-ink-100 px-6 py-3 text-sm text-ink-500">{group.note}</p>}
    </div>
  );
}

export default function PricingPage() {
  if (!siteConfig.features.showPricing) notFound();
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path },
        ]}
        eyebrow="Pricing"
        title="Radiology reporting charges"
        lede="Indicative charges. Your final quotation depends on your volumes, modalities and the timings of service required."
        actions={
          <ButtonLink href="/contact#enquiry" size="lg" arrow>
            Get a Customised Quote
          </ButtonLink>
        }
      />
      <Section labelledBy="reporting-charges">
        <h2 id="reporting-charges" className="text-h2 font-semibold">
          Reporting charges
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reportingCharges.map((g) => (
            <PriceTable key={g.title} group={g} />
          ))}
        </div>
        <h2 className="text-h2 mt-20 font-semibold">Other services</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {otherCharges.map((g) => (
            <PriceTable key={g.title} group={g} />
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
