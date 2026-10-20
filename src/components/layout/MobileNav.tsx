"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import { primaryNav, serviceNav, solutionNav } from "@/content/navigation";
import { siteConfig } from "@/lib/site";
import { NavLink } from "./NavLink";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 grid size-11 place-items-center rounded-full text-ink-900 hover:bg-ink-100"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        // The header's backdrop-filter makes it the containing block, so the panel
        // is positioned under the header with an explicit viewport-based height.
        className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-ink-200 bg-white"
      >
        <nav
          aria-label="Mobile"
          className="container-x py-6"
          onClick={(e) => {
            // Also close for same-page links such as /contact#enquiry.
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <ul className="divide-y divide-ink-100">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="block py-3.5 text-lg font-semibold text-ink-900"
                  activeClassName="text-brand-700"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs font-semibold tracking-wider text-ink-400 uppercase">Our services</p>
          <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
            {serviceNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block rounded-lg py-2.5 font-medium text-ink-700">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="block rounded-lg py-2.5 font-semibold text-brand-700">
                All services
              </Link>
            </li>
          </ul>

          <p className="mt-8 text-xs font-semibold tracking-wider text-ink-400 uppercase">Solutions</p>
          <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
            {solutionNav.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block rounded-lg py-2.5 font-medium text-ink-700">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 border-t border-ink-100 pt-6">
            <Link href="/contact#enquiry" className={buttonClasses("primary", "lg", "w-full")}>
              Get a Quote
            </Link>
            <a href={siteConfig.contact.phoneHref} className={buttonClasses("secondary", "lg", "w-full")}>
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center justify-center gap-2 py-2 text-sm font-medium text-ink-600"
            >
              <Mail className="size-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
