import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { companyNav, legalNav, serviceNav, solutionNav } from "@/content/navigation";
import { siteConfig } from "@/lib/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold tracking-normal text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-300 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-6 text-sm leading-relaxed text-ink-300">{siteConfig.shortDescription}</p>

            <address className="mt-8 space-y-3 text-sm not-italic">
              <a href={contact.phoneHref} className="flex items-center gap-3 text-white hover:text-brand-300">
                <Phone className="size-4 text-brand-400" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-white hover:text-brand-300"
              >
                <Mail className="size-4 text-brand-400" aria-hidden="true" />
                {contact.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-brand-400" aria-hidden="true" />
                {contact.addressLine}
              </p>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterColumn title="Services" links={serviceNav} />
            <FooterColumn title="Solutions" links={solutionNav} />
            <FooterColumn title="Company" links={companyNav} />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-xs leading-relaxed text-ink-400">
            <strong className="font-semibold text-ink-300">Medical disclaimer:</strong> Mark Imaging provides
            radiology reporting and related services to hospitals, diagnostic centres and healthcare organisations.
            Information on this website is for general information only and is not medical advice. Patients should
            consult their treating doctor. <Link href="/medical-disclaimer" className="underline underline-offset-2 hover:text-white">Read the full medical disclaimer</Link>.
          </p>
          <div className="mt-6 flex flex-col gap-4 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
