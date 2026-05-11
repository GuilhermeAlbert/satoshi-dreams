import type { Locale } from "@/types";
import type { SiteCopy } from "@/data/site";

export type LanguageContextValue = {
  copy: SiteCopy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export type LanguageProviderProps = {
  children: React.ReactNode;
};
