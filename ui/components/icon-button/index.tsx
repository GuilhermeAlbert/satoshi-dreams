import { cx } from "@/lib/utils";
import type { IconButtonProps } from "./types";

export function IconButton({
  children,
  className,
  label,
  tone = "light",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cx(
        "inline-grid size-11 place-items-center rounded-full border transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
        tone === "dark"
          ? "border-ink bg-ink text-cream hover:bg-ink-soft"
          : "border-line bg-surface text-ink hover:border-ink/20 hover:bg-white",
        className,
      )}
      title={label}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
