import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({ items, tone = "light", className }: { items: string[]; tone?: "light" | "dark"; className?: string }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={cn(
              "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
              tone === "dark" ? "bg-brand-500/15 text-brand-300" : "bg-brand-50 text-brand-700",
            )}
          >
            <Check className="size-3.5" aria-hidden="true" strokeWidth={2.5} />
          </span>
          <span className={tone === "dark" ? "text-ink-200" : "text-ink-600"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
