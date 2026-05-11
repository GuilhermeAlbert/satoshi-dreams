import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "soft";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  icon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
