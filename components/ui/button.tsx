import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost-dark" | "ghost-light";

const variantClass: Record<Variant, string> = {
  primary: "bg-or text-[#1c1200] hover:brightness-95",
  secondary: "bg-jade text-white hover:brightness-110",
  "ghost-dark": "border border-white/30 text-ink-dark hover:bg-white/10",
  "ghost-light": "border border-rule-light text-ink-light hover:bg-pierre-2",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-sm font-bold transition",
    variantClass[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
