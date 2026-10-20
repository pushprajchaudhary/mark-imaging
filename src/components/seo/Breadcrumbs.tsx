import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, graph, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { JsonLd } from "./JsonLd";

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD, so the two
 * can never drift apart. Pass the full trail including Home and the current page.
 */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className={tone === "dark" ? "text-ink-300" : "text-ink-500"}>
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className={cn(
                        "font-medium underline-offset-4 hover:underline",
                        tone === "dark" ? "text-white" : "text-ink-700",
                      )}
                    >
                      {item.name}
                    </Link>
                    <ChevronRight
                      className={cn("size-3.5", tone === "dark" ? "text-ink-400" : "text-ink-300")}
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={graph(breadcrumbSchema(items))} />
    </>
  );
}
