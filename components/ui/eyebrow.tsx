import { clsx } from "clsx";

export function Eyebrow({
  children,
  tone = "or",
  className,
}: {
  children: React.ReactNode;
  tone?: "or" | "jade" | "indigo";
  className?: string;
}) {
  const colorClass = {
    or: "text-or",
    jade: "text-jade",
    indigo: "text-indigo",
  }[tone];

  return (
    <p
      className={clsx(
        "font-mono-data text-xs uppercase tracking-[0.14em] mb-3",
        colorClass,
        className
      )}
    >
      {children}
    </p>
  );
}
