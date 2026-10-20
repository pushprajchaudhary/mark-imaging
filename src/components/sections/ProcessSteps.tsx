import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type Step = { title: string; description: string; detail?: string; icon?: IconName };

/** Ordered, connected steps. Horizontal on large screens, vertical on mobile. */
export function ProcessSteps({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <ol className={cn("relative grid gap-10 lg:gap-6", cols)}>
      {steps.map((step, i) => (
        <li key={step.title} className="reveal relative flex gap-5 lg:block">
          {/* connector */}
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-14 bottom-[-2.5rem] left-[1.4rem] w-px lg:top-[1.4rem] lg:right-[-1.5rem] lg:bottom-auto lg:left-14 lg:h-px lg:w-auto",
                dark ? "bg-white/15" : "bg-ink-200",
              )}
            />
          )}
          <span
            className={cn(
              "relative z-10 grid size-11 shrink-0 place-items-center rounded-full font-display text-sm font-bold ring-4",
              dark ? "bg-brand-600 text-white ring-ink-950" : "bg-ink-900 text-white ring-white",
            )}
          >
            {step.icon ? <Icon name={step.icon} className="size-5" /> : i + 1}
          </span>
          <div className="lg:mt-6 lg:pr-4">
            <p className={cn("text-xs font-semibold tracking-wider uppercase", dark ? "text-brand-300" : "text-brand-700")}>
              Step {i + 1}
            </p>
            <h3 className={cn("mt-1.5 text-lg font-semibold", dark && "text-white")}>{step.title}</h3>
            <p className={cn("mt-2 leading-relaxed", dark ? "text-ink-300" : "text-ink-500")}>{step.description}</p>
            {step.detail && (
              <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-ink-400" : "text-ink-500")}>{step.detail}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
