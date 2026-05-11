"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems, languageLabels, localeNames } from "@/data/site";
import { cx } from "@/lib/utils";
import { locales } from "@/types";
import { ButtonLink } from "@/ui/components/button";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "../language-provider";
import { Logo } from "./logo";
import type { HeaderLinkState } from "./types";

export function Header() {
  const pathname = usePathname();
  const { copy, locale, setLocale } = useLanguage();
  const languageMenuRef = useRef<HTMLDetailsElement>(null);
  const navItems: HeaderLinkState[] = getNavItems(locale).map((item) => ({
    ...item,
    isActive: pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)),
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1460px] items-center gap-4 px-5 sm:h-24 sm:px-8 lg:px-10">
        <Link
          aria-label="Satoshi Dreams"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          href="/"
        >
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="mx-auto hidden items-center gap-10 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <Link
              aria-current={item.isActive ? "page" : undefined}
              className="relative rounded-sm py-3 text-ink transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
              href={item.href}
              key={item.href}
            >
              {item.label}
              {item.isActive ? <span className="absolute inset-x-0 bottom-1 h-px bg-ink" /> : null}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <details className="group relative" ref={languageMenuRef}>
            <summary
              aria-label={copy.actions.changeLanguage}
              className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold text-ink transition hover:border-ink/20"
            >
              <Icon name="globe" size={16} />
              {languageLabels[locale]}
              <span className="text-xs transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="absolute right-0 mt-2 grid min-w-40 gap-1 rounded-lg border border-line bg-surface p-2 shadow-card">
              {locales.map((nextLocale) => (
                <button
                  className={cx(
                    "rounded-md px-3 py-2 text-left text-sm font-semibold hover:bg-cream",
                    nextLocale === locale && "bg-cream text-gold",
                  )}
                  key={nextLocale}
                  onClick={() => {
                    setLocale(nextLocale);
                    languageMenuRef.current?.removeAttribute("open");
                  }}
                  type="button"
                >
                  {localeNames[nextLocale]}
                </button>
              ))}
            </div>
          </details>

          <ButtonLink className="hidden sm:inline-flex" href="/collections" icon={<Icon name="arrowRight" size={16} />} size="md">
            {copy.actions.startExploring}
          </ButtonLink>
        </div>
      </div>

      <nav className="flex gap-6 overflow-x-auto border-t border-line/60 px-5 py-3 text-sm font-semibold lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link className="shrink-0 text-muted hover:text-ink" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
