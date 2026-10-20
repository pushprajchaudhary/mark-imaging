import type { ReactNode } from "react";
import { WaveLines } from "@/components/brand/WaveLines";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import type { Crumb } from "@/lib/schema";

/** Hero for inner pages: breadcrumbs, the page's single H1, lede and actions. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  badge,
  actions,
  aside,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  badge?: string;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200/70 bg-ink-50">
      <div className="bg-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <WaveLines className="absolute top-0 -right-16 hidden h-full w-[22rem] opacity-50 md:block" />
      <div className="container-x relative pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pb-24">
        <Breadcrumbs items={crumbs} />
        <div className={aside ? "mt-10 grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]" : "mt-10"}>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-800">
                  <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  {badge}
                </span>
              )}
            </div>
            <h1 className="text-display mt-5 font-semibold">{title}</h1>
            {lede && <p className="text-lede mt-6 max-w-2xl">{lede}</p>}
            {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
