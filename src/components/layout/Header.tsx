import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav, serviceNav, solutionNav } from "@/content/navigation";
import { siteConfig } from "@/lib/site";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";

const activeClass =
  "text-brand-700 after:absolute after:inset-x-3 after:-bottom-[1.1rem] after:h-0.5 after:rounded-full after:bg-brand-700 lg:after:inset-x-4";

const navLinkClass =
  "relative rounded-md px-3 py-2 text-[0.9375rem] font-medium text-ink-700 transition-colors hover:text-ink-950 lg:px-4";

/**
 * Server-rendered header. The desktop Services menu opens on hover and on
 * keyboard focus (CSS :focus-within), so it needs no JavaScript. Only the
 * mobile menu toggle is a client component.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Logo priority compactOnLaptop />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center">
            {primaryNav.map((item) =>
              item.href === "/services" ? (
                <li key={item.href} className="group relative">
                  <NavLink
                    href={item.href}
                    className={`${navLinkClass} inline-flex items-center gap-1`}
                    activeClassName={activeClass}
                  >
                    {item.label}
                    <ChevronDown
                      className="size-3.5 text-ink-400 transition-transform group-focus-within:rotate-180 group-hover:rotate-180 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </NavLink>
                  <div className="invisible absolute top-full left-1/2 w-[min(44rem,calc(100vw-2.5rem))] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                    <div className="grid grid-cols-[1.4fr_1fr] gap-2 rounded-2xl border border-ink-200 bg-white p-3 shadow-[var(--shadow-lift)]">
                      <div>
                        <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-ink-400 uppercase">
                          Radiology services
                        </p>
                        <ul>
                          {serviceNav.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className="block rounded-lg px-3 py-2 hover:bg-ink-50">
                                <span className="block text-sm font-semibold text-ink-900">{s.label}</span>
                                <span className="line-clamp-1 block text-xs text-ink-500">{s.description}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-ink-50 p-1">
                        <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wider text-ink-400 uppercase">
                          Solutions
                        </p>
                        <ul>
                          {solutionNav.map((s) => (
                            <li key={s.href}>
                              <Link href={s.href} className="block rounded-lg px-3 py-2 hover:bg-white">
                                <span className="block text-sm font-semibold text-ink-900">{s.label}</span>
                                <span className="block text-xs text-ink-500">{s.description}</span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/services"
                              className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-white"
                            >
                              View all services
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <NavLink href={item.href} className={navLinkClass} activeClassName={activeClass}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-800 hover:text-brand-700 xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <ButtonLink href="/contact#enquiry">Get a Quote</ButtonLink>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
