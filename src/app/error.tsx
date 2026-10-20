"use client";

import Link from "next/link";
import { useEffect } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-x py-24 sm:py-32">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="text-display mt-5 max-w-2xl font-semibold">This page could not be loaded</h1>
      <p className="text-lede mt-6 max-w-xl">
        Please try again. If the problem continues, call us on {siteConfig.contact.phoneDisplay}.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <button type="button" onClick={reset} className={buttonClasses("primary", "lg")}>
          Try again
        </button>
        <Link href="/" className={buttonClasses("secondary", "lg")}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
