import Link from "next/link";
import { cx } from "@/lib/utils";
import type { ButtonLinkProps, ButtonProps, ButtonSize, ButtonVariant } from "./types";

const variants: Record<ButtonVariant, string> = {
  ghost: "text-ink hover:bg-ink/5",
  primary: "bg-ink text-cream shadow-button hover:bg-ink-soft",
  secondary: "border border-line bg-surface text-ink hover:border-ink/20 hover:bg-white",
  soft: "bg-gold-soft text-ink hover:bg-gold-soft/75",
};

const sizes: Record<ButtonSize, string> = {
  lg: "h-14 px-7 text-[15px]",
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-xs",
};

const base =
  "inline-flex items-center justify-center gap-3 rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  className,
  icon,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cx(base, variants[variant], sizes[size], className)} type={type} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  href,
  icon,
  size = "md",
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={cx(base, variants[variant], sizes[size], className)} href={href}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}
