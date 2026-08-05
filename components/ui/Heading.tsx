import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
}

export default function Heading({ level = 2, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = {
    1: "text-4xl md:text-6xl font-extrabold tracking-tight text-[#071A35]",
    2: "text-3xl md:text-4xl font-bold tracking-tight text-[#071A35]",
    3: "text-2xl md:text-3xl font-semibold text-[#071A35]",
    4: "text-xl md:text-2xl font-semibold text-[#071A35]",
  };

  return (
    <Tag className={cn(styles[level], className)} {...props}>
      {children}
    </Tag>
  );
}