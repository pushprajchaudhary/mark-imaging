import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "dark" when placed on a dark section background. */
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-4", tone === "dark" && "eyebrow-light")}>{eyebrow}</p>}
      <Tag id={id} className={cn("text-h2 font-semibold", tone === "dark" && "text-white")}>
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "dark" ? "text-ink-300" : "text-ink-500")}>
          {description}
        </p>
      )}
    </div>
  );
}
