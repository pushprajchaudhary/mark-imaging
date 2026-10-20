import { ArrowDown, ArrowRight, CornerDownLeft } from "lucide-react";
import { Icon, type IconName } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export type FlowNode = {
  label: string;
  caption?: string;
  icon: IconName;
  /** "brand" highlights Mark Imaging; "network" shows provider group chips. */
  variant?: "default" | "brand" | "network";
  chips?: string[];
};

/**
 * A simple, accurate left-to-right flow (top-to-bottom on mobile), rendered as
 * an ordered list so the sequence is announced correctly by screen readers.
 */
export function FlowDiagram({
  nodes,
  loopLabel,
  caption,
  className,
}: {
  nodes: FlowNode[];
  /** When set, draws a return path from the last node back to the first. */
  loopLabel?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("reveal", className)}>
      <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {nodes.map((node, i) => (
          <li key={node.label} className="flex flex-col items-center lg:flex-1 lg:flex-row">
            <div
              className={cn(
                "grid w-full flex-1 grid-cols-[auto_1fr] items-center gap-x-4 rounded-2xl border px-4 py-3.5 text-left lg:flex lg:h-full lg:flex-col lg:items-center lg:px-4 lg:py-5 lg:text-center",
                node.variant === "brand"
                  ? "border-brand-700 bg-brand-700 text-white shadow-[0_18px_40px_-18px_rgb(208_32_30/0.6)]"
                  : "border-ink-200 bg-white",
              )}
            >
              <span
                className={cn(
                  "row-span-3 grid size-11 place-items-center rounded-xl",
                  node.variant === "brand" ? "bg-white/15 text-white" : "bg-ink-50 text-ink-800 ring-1 ring-ink-200",
                )}
              >
                <Icon name={node.icon} className="size-5" />
              </span>
              <span className={cn("font-display text-[0.9375rem] font-semibold lg:mt-3", node.variant !== "brand" && "text-ink-900")}>
                {node.label}
              </span>
              {node.caption && (
                <span className={cn("text-xs leading-snug lg:mt-1", node.variant === "brand" ? "text-brand-100" : "text-ink-500")}>
                  {node.caption}
                </span>
              )}
              {node.chips && (
                <span className="mt-2 flex flex-wrap gap-1.5 lg:mt-3 lg:justify-center">
                  {node.chips.map((c) => (
                    <span key={c} className="rounded-full bg-brand-50 px-2 py-0.5 text-[0.6875rem] font-semibold text-brand-800">
                      {c}
                    </span>
                  ))}
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <span className="grid place-items-center py-0.5 text-ink-300 lg:px-1.5 lg:py-0" aria-hidden="true">
                <ArrowDown className="size-4 lg:hidden" />
                <ArrowRight className="hidden size-5 lg:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
      {loopLabel && (
        <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-dashed border-ink-300 px-4 py-3 text-sm font-medium text-ink-600">
          <CornerDownLeft className="size-4 text-brand-700" aria-hidden="true" />
          {loopLabel}
        </div>
      )}
      {caption && <figcaption className="mt-4 text-center text-xs text-ink-500">{caption}</figcaption>}
    </figure>
  );
}

/** Hospital → Mark Imaging → provider network → radiologist → report → hospital. */
export function ProviderNetworkDiagram({ className }: { className?: string }) {
  return (
    <FlowDiagram
      className={className}
      nodes={[
        { label: "Hospital", caption: "Your requirement", icon: "building" },
        { label: "Mark Imaging", caption: "Single point of contact", icon: "handshake", variant: "brand" },
        {
          label: "Radiology provider network",
          caption: "Radiology Associates across India",
          icon: "network",
          variant: "network",
          chips: ["RA 1", "RA 2", "RA 3"],
        },
        { label: "Radiologist", caption: "Verified before reporting", icon: "user-round" },
        { label: "Report", caption: "Returned to your team", icon: "file-check" },
      ]}
      loopLabel="The report comes back to the hospital through one partner"
      caption="RA = Radiology Associates: registered firms of groups of radiologists offering reporting services."
    />
  );
}

/** Imaging centre → modality → PACS → Mark Imaging → radiologist → report. */
export function ImagingWorkflowDiagram({ className }: { className?: string }) {
  return (
    <FlowDiagram
      className={className}
      nodes={[
        { label: "Hospital or imaging centre", caption: "Patient is scanned on site", icon: "building" },
        { label: "Imaging modality", caption: "CT, MRI or X-ray console", icon: "scan" },
        { label: "Cloud PACS", caption: "Installed at your premises", icon: "upload" },
        { label: "Mark Imaging", caption: "Routes the study to the network", icon: "handshake", variant: "brand" },
        { label: "Radiologist", caption: "From a partner Radiology Associate", icon: "user-round" },
        { label: "Report", caption: "Available to your team", icon: "file-check" },
      ]}
    />
  );
}
