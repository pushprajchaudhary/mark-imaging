import Link from "next/link";
import { ArrowRight, Check, CircleAlert } from "lucide-react";
import { ArrowLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import { applications, challenges, modalities, partnerChecklist } from "@/content/teleradiology";

/** Modalities and study categories reported (from the brochure's charge structure). */
export function ModalityGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {modalities.map((m) => (
        <li key={m.slug} className="card reveal flex flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="grid size-12 place-items-center rounded-xl bg-ink-900 text-white">
              <Icon name={m.icon} className="size-6" />
            </span>
            {m.availability && (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800 ring-1 ring-brand-100">
                {m.availability}
              </span>
            )}
          </div>
          <h3 className="mt-5 text-xl font-semibold">{m.name} reporting</h3>
          <ul className="mt-4 space-y-2.5">
            {m.categories.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-ink-600">
                <Check className="size-4 shrink-0 text-brand-700" aria-hidden="true" strokeWidth={2.5} />
                {c}
              </li>
            ))}
          </ul>
          <ArrowLink href={`/services/${m.slug}`} className="mt-auto pt-6 text-sm">
            {`${m.name} reporting details`}
          </ArrowLink>
        </li>
      ))}
    </ul>
  );
}

/** Situations where hospitals use Mark Imaging, each linked to the matching service. */
export function ApplicationGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {applications.map((a) => (
        <li key={a.title} className="reveal">
          <Link
            href={`/services/${a.slug}`}
            className="card card-interactive group flex h-full flex-col p-6 sm:p-7"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Icon name={a.icon} className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-500">{a.description}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700">
              {a.link}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** "Common teleradiology problems → how Mark Imaging addresses them". */
export function ChallengeList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {challenges.map((c) => (
        <li
          key={c.challenge}
          className={
            dark
              ? "reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              : "card reveal p-6"
          }
        >
          <p className={`flex items-start gap-2.5 text-sm font-semibold ${dark ? "text-ink-300" : "text-ink-500"}`}>
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
            <span>
              <span className="sr-only">Common problem: </span>
              {c.challenge}
            </span>
          </p>
          <p className={`mt-3 flex items-start gap-2.5 leading-relaxed ${dark ? "text-white" : "text-ink-800"}`}>
            <Check className="mt-1 size-4 shrink-0 text-brand-400" aria-hidden="true" strokeWidth={2.5} />
            <span>
              <span className="sr-only">How Mark Imaging addresses it: </span>
              {c.answer}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Buyer's checklist for any teleradiology partner, with Mark Imaging's answers. */
export function PartnerChecklist() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
      <dl className="divide-y divide-ink-200">
        {partnerChecklist.map((item, i) => (
          <div key={item.question} className="grid gap-2 px-5 py-5 sm:px-7 md:grid-cols-[1fr_1.2fr] md:gap-10">
            <dt className="flex gap-3 font-semibold text-ink-900">
              <span className="font-display text-sm text-ink-400">{String(i + 1).padStart(2, "0")}</span>
              {item.question}
            </dt>
            <dd className="pl-8 leading-relaxed text-ink-600 md:pl-0">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
