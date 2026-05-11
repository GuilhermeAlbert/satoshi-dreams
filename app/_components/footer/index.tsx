"use client";

import Link from "next/link";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "../language-provider";
import { Logo } from "../header/logo";
import type { FooterColumn } from "./types";

export function Footer() {
  const { copy } = useLanguage();
  const columns: FooterColumn[] = [
    {
      title: "Navigation",
      links: [
        [copy.nav.explore, "/"],
        [copy.nav.collections, "/collections"],
        [copy.nav.about, "/about"],
        [copy.nav.howItWorks, "/how-it-works"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["Disclaimer", "/about"],
        ["Open source", "/how-it-works"],
        ["Bitcoin PDF", "https://bitcoin.org/bitcoin.pdf"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["GitHub", "https://github.com"],
        ["Contribute", "/how-it-works"],
        [copy.nav.collections, "/collections"],
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-surface/55 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">{copy.home.signature}</p>
            <div className="mt-5 flex gap-2 text-muted">
              <span className="grid size-9 place-items-center rounded-full border border-line">X</span>
              <span className="grid size-9 place-items-center rounded-full border border-line">IG</span>
              <span className="grid size-9 place-items-center rounded-full border border-line">GH</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-bold uppercase text-ink">{column.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {column.links.map(([label, href]) => (
                    <li key={`${label}-${href}`}>
                      <Link className="hover:text-ink" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase text-ink">Stay inside</h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Receive new impossible ideas directly in your inbox.
            </p>
            <form className="mt-5 flex h-12 overflow-hidden rounded-full border border-line bg-cream">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted/70"
                id="footer-email"
                placeholder="you@email.com"
                type="email"
              />
              <button aria-label="Submit" className="grid w-12 place-items-center text-ink" type="button">
                <Icon name="arrowRight" size={16} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}
