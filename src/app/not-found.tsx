import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { serviceNav } from "@/content/navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-x py-24 sm:py-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="text-display mt-5 max-w-2xl font-semibold">We couldn&rsquo;t find that page</h1>
      <p className="text-lede mt-6 max-w-xl">
        The page may have moved. Try one of our radiology services below, or get in touch with our team.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" size="lg">
          Contact us
        </ButtonLink>
      </div>
      <nav aria-label="Services" className="mt-16">
        <h2 className="text-lg font-semibold">Popular pages</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {serviceNav.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="font-medium text-brand-700 hover:underline">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
