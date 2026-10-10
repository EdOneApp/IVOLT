export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-3xl md:text-4xl">{value}</div>
      <div className="text-xs md:text-sm text-ink-light-muted mt-1">{label}</div>
    </div>
  );
}

export function StatDark({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-3xl md:text-4xl text-ink-dark">{value}</div>
      <div className="text-xs md:text-sm text-ink-dark-muted mt-1">{label}</div>
    </div>
  );
}
