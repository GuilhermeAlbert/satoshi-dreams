"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const storageKey = "satoshi-dreams.collection";

function readCollection() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((value) => typeof value === "string") : [];
  } catch {
    return [];
  }
}

export function useLocalCollection() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setSlugs(readCollection());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const persist = useCallback((nextSlugs: string[]) => {
    setSlugs(nextSlugs);
    window.localStorage.setItem(storageKey, JSON.stringify(nextSlugs));
  }, []);

  const toggle = useCallback(
    (slug: string) => {
      const nextSlugs = slugs.includes(slug)
        ? slugs.filter((currentSlug) => currentSlug !== slug)
        : [...slugs, slug];

      persist(nextSlugs);
    },
    [persist, slugs],
  );

  const collectionSet = useMemo(() => new Set(slugs), [slugs]);

  return {
    has: (slug: string) => collectionSet.has(slug),
    slugs,
    toggle,
  };
}
