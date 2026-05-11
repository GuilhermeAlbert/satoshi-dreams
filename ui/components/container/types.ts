import type { HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};
