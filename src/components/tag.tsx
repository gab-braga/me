import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement>;

export function Tag({ children, className, ...props }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1c2333] bg-[#0f1420] px-3 py-1.25 font-mono text-[0.78rem] text-[#e2e8f0] transition-[border-color,color] duration-200 hover:border-primary/60 hover:text-primary-light ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
