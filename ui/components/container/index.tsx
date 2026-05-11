import { cx } from "@/lib/utils";
import type { ContainerProps } from "./types";

const sizes = {
  default: "max-w-[1220px]",
  narrow: "max-w-[960px]",
  wide: "max-w-[1460px]",
};

export function Container({ children, className, size = "default", ...props }: ContainerProps) {
  return (
    <div className={cx("mx-auto w-full px-5 sm:px-8 lg:px-10", sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
