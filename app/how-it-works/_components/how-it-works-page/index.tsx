"use client";

import Link from "next/link";
import { ButtonLink } from "@/ui/components/button";
import { Container } from "@/ui/components/container";
import { Icon } from "@/ui/components/icon";
import { useLanguage } from "@/app/_components/language-provider";

export function HowItWorksPage() {
  const { copy } = useLanguage();

  return (
    <main>
      <section className="border-b border-line py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-gold">{copy.how.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-6xl">{copy.how.title}</h1>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-muted">{copy.how.intro}</p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {copy.how.steps.map(([title, body], index) => (
              <article className="rounded-lg border border-line bg-surface p-7 shadow-card" key={title}>
                <span className="grid size-12 place-items-center rounded-full bg-gold-soft font-serif text-2xl text-gold">
                  {index + 1}
                </span>
                <h2 className="mt-6 font-serif text-3xl text-ink">{title}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="grid gap-8 rounded-lg border border-line bg-surface p-8 shadow-card sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase text-gold">Open source</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink">{copy.how.contributeTitle}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{copy.how.contributeText}</p>
              <p className="mt-4 text-sm text-muted">
                Whitepaper reference:{" "}
                <Link className="font-bold text-ink underline decoration-gold underline-offset-4" href="https://bitcoin.org/bitcoin.pdf">
                  bitcoin.org/bitcoin.pdf
                </Link>
              </p>
            </div>
            <ButtonLink href="/collections" icon={<Icon name="arrowRight" size={16} />} size="lg">
              {copy.actions.startExploring}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
