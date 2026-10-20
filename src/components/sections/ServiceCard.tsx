import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icons";
import type { Service } from "@/content/types";
import { cn } from "@/lib/utils";

/** Whole card is one link; the service name is the accessible link text. */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn("card card-interactive group flex h-full flex-col p-6 sm:p-7", className)}
    >
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
          <Icon name={service.icon} className="size-6" />
        </span>
        <ArrowUpRight
          className="size-5 text-ink-300 transition-colors group-hover:text-brand-700"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-6 text-lg font-semibold">{service.name}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{service.summary}</p>
      {service.badge && (
        <p className="mt-auto pt-5 text-xs font-semibold tracking-wide text-brand-700 uppercase">{service.badge}</p>
      )}
    </Link>
  );
}

export function ServiceGrid({
  services,
  withCta,
  className,
}: {
  services: Service[];
  /** Append a "talk to us" card, e.g. to complete a 4-column row of 7 services. */
  withCta?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map((s) => (
        <li key={s.slug} className="reveal">
          <ServiceCard service={s} />
        </li>
      ))}
      {withCta && (
        <li className="reveal">
          <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-ink-950 p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-white">Not sure where to start?</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-300">
              Tell us about your department and we will recommend the right mix of services.
            </p>
            <Link
              href="/contact"
              className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-brand-300 hover:text-brand-200"
            >
              Talk to our team
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </li>
      )}
    </ul>
  );
}
