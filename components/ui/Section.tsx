import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export default function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  );
}