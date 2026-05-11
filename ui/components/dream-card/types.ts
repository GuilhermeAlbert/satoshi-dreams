import type { Locale, LocalizedDreamItem } from "@/types";

export type DreamCardProps = {
  item: LocalizedDreamItem;
  locale: Locale;
  priority?: boolean;
};
