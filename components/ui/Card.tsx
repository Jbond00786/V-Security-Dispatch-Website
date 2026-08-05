import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export default function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md", className)}
      {...props}
    >
      {children}
    </div>
  );
}