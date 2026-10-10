import type { FieldError } from "react-hook-form";

export function FieldWrap({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: FieldError;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs font-mono-data uppercase tracking-wider text-ink-light-muted mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1.5">{error.message}</p>}
    </div>
  );
}

export const inputClass =
  "w-full rounded-[3px] border border-rule-light bg-pierre-2 px-3.5 py-2.75 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40 focus:border-indigo transition";
