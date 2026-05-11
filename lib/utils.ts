import type { Locale } from "@/types";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "pt-br" || value === "es";
}

export function getItemHref(slug: string) {
  return `/collections/${slug}`;
}

export function formatBtc(value: number, locale: Locale) {
  const localeMap: Record<Locale, string> = {
    en: "en-US",
    "pt-br": "pt-BR",
    es: "es-ES",
  };

  return `${new Intl.NumberFormat(localeMap[locale], {
    maximumFractionDigits: value < 1 ? 4 : 0,
  }).format(value)} BTC`;
}

export function formatUsd(value: number, locale: Locale) {
  const units = {
    en: {
      billion: "billion USD",
      million: "million USD",
    },
    "pt-br": {
      billion: "bilhão USD",
      million: "milhões USD",
    },
    es: {
      billion: "mil millones USD",
      million: "millones USD",
    },
  };

  const divisor = value >= 1_000_000_000 ? 1_000_000_000 : 1_000_000;
  const unit = value >= 1_000_000_000 ? units[locale].billion : units[locale].million;
  const amount = value / divisor;
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : locale === "pt-br" ? "pt-BR" : "es-ES", {
    maximumFractionDigits: amount < 10 ? 2 : 0,
    minimumFractionDigits: amount < 10 ? 2 : 0,
  }).format(amount);

  return `≈ $${formatted} ${unit}`;
}

export function getFortuneShare(priceBtc: number) {
  return Math.min(100, Number(((priceBtc / 1_000_000) * 100).toFixed(1)));
}

export function formatPercent(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : locale === "pt-br" ? "pt-BR" : "es-ES", {
    maximumFractionDigits: 1,
  }).format(value);
}
