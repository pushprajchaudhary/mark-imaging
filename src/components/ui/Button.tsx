import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light" | "outline-light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  secondary: "border border-ink-200 bg-white text-ink-900 hover:border-ink-300 hover:bg-ink-50",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  light: "bg-white text-ink-900 hover:bg-ink-100",
  "outline-light": "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.9375rem]",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant, size, arrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

/** Inline text link with an arrow, for "Learn more"-style links with descriptive text. */
export function ArrowLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </Link>
  );
}
