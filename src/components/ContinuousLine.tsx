import { useEffect, useRef, useState } from "react";

/**
 * O linie continuă, desenată lent la intrarea în ecran —
 * referință discretă la desenul fractal.
 */
export function ContinuousLine({
  className = "",
  variant = "horizontal",
}: {
  className?: string;
  variant?: "horizontal" | "loop";
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setDrawn(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const d =
    variant === "loop"
      ? "M10 120C60 20 150 10 210 70c60 60-30 130 30 160 55 27 120-30 150-100 25-60 90-90 140-40"
      : "M0 20C120 4 210 36 330 22 470 6 560 40 700 24c90-10 160 4 240-6";

  const box = variant === "loop" ? "0 0 560 260" : "0 0 940 44";

  return (
    <svg
      ref={ref}
      viewBox={box}
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        pathLength={1}
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          transition: "stroke-dashoffset 2.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </svg>
  );
}
