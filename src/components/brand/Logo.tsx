import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * The supplied Mark Imaging "MI" mark, used unaltered, paired with a text
 * wordmark so the name stays legible at header sizes.
 */
export function Logo({
  tone = "light",
  priority,
  compactOnLaptop,
  className,
}: {
  tone?: "light" | "dark";
  priority?: boolean;
  /** Hide the tagline between md and lg, where the header nav needs the room. */
  compactOnLaptop?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 rounded-md", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <span className={cn("grid shrink-0 place-items-center rounded-lg", tone === "dark" && "bg-white p-1.5")}>
        <Image
          src={siteConfig.logo.cropped}
          alt=""
          width={476}
          height={340}
          priority={priority}
          className="h-9 w-auto sm:h-10"
          sizes="56px"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-bold tracking-[0.06em] uppercase",
            tone === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          Mark Imaging
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6875rem] font-medium tracking-wide",
            compactOnLaptop && "md:hidden lg:block",
            tone === "dark" ? "text-ink-300" : "text-ink-500",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
