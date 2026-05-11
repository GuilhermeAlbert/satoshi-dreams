import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  label: string;
  tone?: "light" | "dark";
};
