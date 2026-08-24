/** Small hand-drawn organic accents used sparingly across the site. */

export function ImperfectCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M32.6 4.4C46.2 4.9 60 15.2 59.4 31.9c-.6 17-13.9 27.9-28.6 27.6C16.4 59.2 3.9 48.2 4.5 31 5 15.6 17.4 4.7 32.6 4.4Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 12" className={className} fill="none" aria-hidden="true">
      <path
        d="M1 7.5c34-4 58 1.5 92-1.5S168 1 205 6.5c12 1.8 20 2.4 34 1"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SpiralMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M24 24c0-3.4 2.9-5.6 6-5.2 4 .5 6.4 4.3 5.7 8.5-.9 5.5-6.2 8.9-12 8.1C16.4 34.4 11.5 27.9 12.7 20 14.1 10.7 22.6 4.6 32.4 6.2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 40C10 22 22 8 40 8c1 18-10 32-28 32Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M8 40C16 32 26 22 38 12" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

export function BalanceMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M4 30c8-1 14-6 20-13 5 8 12 13 20 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="24" cy="17" r="3.2" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function DotsMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <circle cx="14" cy="24" r="1.6" fill="currentColor" />
      <circle cx="24" cy="18" r="1.2" fill="currentColor" />
      <circle cx="34" cy="26" r="1.9" fill="currentColor" />
      <path d="M8 34c8-4 22-6 32-2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}
