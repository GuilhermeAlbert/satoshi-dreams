"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, getSiteCopy } from "@/data/site";
import { isLocale } from "@/lib/utils";
import type { Locale } from "@/types";
import type { LanguageContextValue, LanguageProviderProps } from "./types";

const storageKey = "satoshi-dreams.locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const storedLocale = window.localStorage.getItem(storageKey);

      if (storedLocale && isLocale(storedLocale)) {
        setLocaleState(storedLocale);
        document.documentElement.lang = storedLocale;
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem(storageKey, nextLocale);
  }, []);

  const value = useMemo(
    () => ({
      copy: getSiteCopy(locale),
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
