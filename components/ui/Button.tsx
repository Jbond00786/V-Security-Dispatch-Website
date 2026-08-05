import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#071A35] text-white hover:bg-[#0B2345] shadow-lg",
    secondary: "bg-[#2B72FF] text-white hover:bg-blue-700",
    outline: "border border-[#071A35] text-[#071A35] hover:bg-[#071A35] hover:text-white",
  };

  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}