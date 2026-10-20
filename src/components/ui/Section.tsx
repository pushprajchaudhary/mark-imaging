import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "white" | "mist" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-ink-50",
  dark: "bg-ink-950 text-ink-300",
};

export function Section({
  id,
  labelledBy,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  /** id of the section's heading, for an accessible region name. */
  labelledBy?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}
