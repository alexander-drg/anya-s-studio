/**
 * Loc rezervat pentru o imagine reală.
 * Când imaginea este furnizată, se înlocuiește acest component cu un <img>.
 */
export function Placeholder({
  label,
  ratio = "4 / 3",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`paper flex w-full items-center justify-center border border-border bg-[var(--color-beige)] ${className}`}
    >
      <span className="label-xs px-4 text-center text-muted-foreground">{label}</span>
    </div>
  );
}
