import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { formatDate } from "@/lib/utils";

/**
 * Shared layout for legal pages. The review notice must stay until the
 * company's legal advisor has approved the text; then set `reviewed`.
 */
export function LegalPage({
  title,
  path,
  updated,
  reviewed = false,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  reviewed?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="container-x py-12 sm:py-16">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
      />
      <div className="mt-10 max-w-3xl">
        <h1 className="text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-ink-500">
          Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
        {!reviewed && (
          <div role="note" className="mt-8 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>
              <strong>Placeholder text.</strong> This page must be reviewed and approved by Mark Imaging and its legal
              advisor before publication.
            </p>
          </div>
        )}
        <div className="prose-mi mt-10">{children}</div>
      </div>
    </div>
  );
}
