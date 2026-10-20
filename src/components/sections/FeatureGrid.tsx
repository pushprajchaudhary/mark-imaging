import { Icon, type IconName } from "@/components/ui/icons";
import type { Point } from "@/content/types";
import { cn } from "@/lib/utils";

type Item = Point & { icon?: IconName };

/** Grid of titled points. Headings default to h3 under a section h2. */
export function FeatureGrid({
  items,
  columns = 3,
  tone = "light",
  numbered,
  className,
}: {
  items: Item[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  numbered?: boolean;
  className?: string;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  const dark = tone === "dark";

  return (
    <ul className={cn("grid gap-5", cols, className)}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className={cn(
            "reveal rounded-[var(--radius-card)] p-6 sm:p-7",
            dark ? "border border-white/10 bg-white/[0.03]" : "card",
          )}
        >
          {item.icon ? (
            <span
              className={cn(
                "grid size-11 place-items-center rounded-xl",
                dark ? "bg-brand-500/10 text-brand-300" : "bg-brand-50 text-brand-700",
              )}
            >
              <Icon name={item.icon} className="size-5" />
            </span>
          ) : numbered ? (
            <span className={cn("font-display text-sm font-bold", dark ? "text-brand-300" : "text-brand-700")}>
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : null}
          <h3 className={cn("text-lg font-semibold", (item.icon || numbered) && "mt-5", dark && "text-white")}>
            {item.title}
          </h3>
          <p className={cn("mt-2 leading-relaxed", dark ? "text-ink-300" : "text-ink-500")}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
