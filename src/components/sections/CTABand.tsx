import { Mail, Phone } from "lucide-react";
import { WaveLines } from "@/components/brand/WaveLines";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function CTABand({
  title = "Discuss your radiology requirements",
  description = "Tell us your modalities, volumes and the hours you need covered. We will come back with a customised proposal for reporting, staffing or software.",
  quoteHref = "/contact#enquiry",
  headingId = "cta-heading",
}: {
  title?: string;
  description?: string;
  quoteHref?: string;
  headingId?: string;
}) {
  const { contact } = siteConfig;
  return (
    <section aria-labelledby={headingId} className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="bg-grid-dark absolute inset-0 -z-10" aria-hidden="true" />
          <WaveLines className="absolute top-0 -right-10 -z-10 h-full w-[26rem] opacity-60" />
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-light">Get a quote</p>
            <h2 id={headingId} className="text-h2 mt-4 font-semibold text-white">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={quoteHref} size="lg" arrow>
                Get a Customised Quote
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light" size="lg">
                Talk to Our Team
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-300">
                <Phone className="size-4 text-brand-400" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-300"
              >
                <Mail className="size-4 text-brand-400" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
