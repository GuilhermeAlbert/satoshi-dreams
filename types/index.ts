export const locales = ["en", "pt-br", "es"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;

export type CategoryId =
  | "luxury"
  | "territories"
  | "art"
  | "technology"
  | "sports"
  | "absurd";

export type IconName =
  | "arrowRight"
  | "bitcoin"
  | "bookmark"
  | "check"
  | "copy"
  | "globe"
  | "link"
  | "menu"
  | "plane"
  | "plus"
  | "share"
  | "spark"
  | "wallet";

export type DreamStat = {
  label: LocalizedText;
  value: string;
};

export type DreamItem = {
  slug: string;
  category: CategoryId;
  image: string;
  alt: LocalizedText;
  name: LocalizedText;
  eyebrow: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  priceBtc: number;
  priceUsd: number;
  stats: DreamStat[];
  trivia: LocalizedText[];
};

export type Category = {
  id: CategoryId;
  image: string;
  title: LocalizedText;
  description: LocalizedText;
  itemCount: number;
};

export type LocalizedDreamItem = Omit<
  DreamItem,
  "alt" | "name" | "eyebrow" | "shortDescription" | "description" | "stats" | "trivia"
> & {
  alt: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  trivia: string[];
};

export type LocalizedCategory = Omit<Category, "title" | "description"> & {
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};
