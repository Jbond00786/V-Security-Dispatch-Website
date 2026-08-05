import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "live" | "outline";
}

export default function Badge({ variant = "primary", className, children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-blue-100 text-[#2B72FF] border border-blue-200",
    live: "bg-emerald-100 text-emerald-700 border border-emerald-200 animate-pulse",
    outline: "border border-gray-300 text-gray-700",
  };

  return (
    <span
      className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase", variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}