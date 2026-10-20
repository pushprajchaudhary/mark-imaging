import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Decorative flowing lines that echo the wave motif in the Mark Imaging
 * brochure, redrawn as lightweight SVG. Rendered on the server; ships no JS.
 */
export function WaveLines({ className, lines = 22 }: { className?: string; lines?: number }) {
  const gradientId = useId();
  const paths = Array.from({ length: lines }, (_, i) => {
    const t = i / (lines - 1);
    const spread = 70 * t;
    return `M ${-40 + spread} 0 C ${260 - spread * 1.4} ${160 + spread}, ${-60 + spread * 2} ${360 - spread}, ${
      220 - spread * 0.6
    } 520 S ${80 + spread * 1.6} ${780 - spread * 0.5}, ${260 - spread} 900`;
  });

  return (
    <svg
      viewBox="0 0 360 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "pointer-events-none select-none [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_80%,transparent)]",
        className,
      )}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-sun-300)" />
          <stop offset="0.45" stopColor="var(--color-ember-400)" />
          <stop offset="1" stopColor="var(--color-brand-500)" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={`url(#${gradientId})`} strokeWidth="1" opacity={0.35 + (i / lines) * 0.55} />
      ))}
    </svg>
  );
}
