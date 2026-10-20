import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

const spokes = [
  { label: "Radiology Associate 1", href: "/about#why-mark-imaging", icon: "network" as const },
  { label: "Radiology Associate 2", href: "/about#why-mark-imaging", icon: "network" as const },
  { label: "Radiology Associate 3", href: "/about#why-mark-imaging", icon: "network" as const },
  { label: "Radiologist hiring", href: "/services/radiologist-staffing", icon: "user-plus" as const },
  { label: "Software: PACS, RIS, HIS", href: "/services/pacs-ris-his-solutions", icon: "monitor" as const },
];

/** The brochure's "Benefits for hospitals" picture, redrawn as a hub diagram. */
export function UnderOneRoof() {
  return (
    <figure className="reveal">
      <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1.1fr_auto_1.4fr]">
        <div className="card flex items-center gap-4 p-5">
          <span className="grid size-12 place-items-center rounded-xl bg-ink-50 text-ink-800 ring-1 ring-ink-200">
            <Icon name="building" className="size-6" />
          </span>
          <div>
            <p className="font-display font-semibold text-ink-900">Your hospital</p>
            <p className="text-sm text-ink-500">One contract, one contact</p>
          </div>
        </div>

        <ArrowRight className="mx-auto size-5 rotate-90 text-ink-300 lg:rotate-0" aria-hidden="true" />

        <div className="flex flex-col items-center rounded-2xl border border-brand-200 bg-brand-50/60 p-6 text-center">
          <Image src={siteConfig.logo.cropped} alt="Mark Imaging logo" width={476} height={340} className="h-14 w-auto" sizes="80px" />
          <p className="mt-3 font-display font-semibold text-ink-900">Mark Imaging</p>
          <p className="text-sm text-ink-500">All radiology services under one roof</p>
        </div>

        <ArrowRight className="mx-auto size-5 rotate-90 text-ink-300 lg:rotate-0" aria-hidden="true" />

        <ul className="grid gap-2">
          {spokes.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="flex items-center gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-800"
              >
                <Icon name={s.icon} className="size-4 text-brand-700" />
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-5 text-center text-xs text-ink-500">
        Radiology Associates are registered firms of groups of radiologists offering reporting services.
      </figcaption>
    </figure>
  );
}
