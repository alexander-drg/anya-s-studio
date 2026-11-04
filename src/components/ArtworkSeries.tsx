import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { untitledLabel, type Artwork, type SeriesInfo } from "@/content/site";
import { useT, type Copy } from "@/lib/i18n";

/** Pagină de serie: titlu, intro scurt, grilă și lightbox. Primește doar lucrări publicate. */
export function ArtworkSeriesPage({
  heading,
  series,
  works,
}: {
  heading: Copy;
  series: SeriesInfo;
  works: Artwork[];
}) {
  const t = useT();
  const [open, setOpen] = useState<Artwork | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="page-shell pb-20">
      <section className="grid gap-6 py-10 md:grid-cols-12 md:py-14">
        <Reveal className="md:col-span-5">
          <p className="label-xs mb-3">{t({ ro: "Picturi", en: "Paintings", it: "Dipinti" })}</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t(heading)}
          </h1>
        </Reveal>
        <Reveal delay={100} className="md:col-span-6 md:col-start-7 md:pt-8">
          <p className="max-w-xl text-muted-foreground">{t(series.intro)}</p>
        </Reveal>
      </section>

      <section>
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
          <h2 className="font-serif text-2xl font-light md:text-3xl">{t(series.title)}</h2>
          <p className="label-xs">{t(series.technique)}</p>
        </Reveal>
        <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 70}>
              <button type="button" onClick={() => setOpen(a)} className="group block w-full text-left">
                <div className="img-zoom aspect-square overflow-hidden">
                  <img
                    src={a.src}
                    alt={t(series.technique)}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-3 font-serif text-lg font-light">
                  {a.title ? t(a.title) : t(untitledLabel)}
                </p>
                <p className="label-xs mt-1">{t(series.technique)}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/97 p-5 md:p-10"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Închide"
            className="label-xs absolute top-6 right-6 z-10"
          >
            Închide ✕
          </button>
          <figure
            className="flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={open.src}
              alt={open.title ? t(open.title) : t(series.technique)}
              className="max-h-[72vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-6 text-center">
              <p className="font-serif text-xl font-light">
                {open.title ? t(open.title) : t(untitledLabel)}
              </p>
              <p className="label-xs mt-3">{t(series.techniqueLong)}</p>
              {series.size && <p className="label-xs">{t(series.size)}</p>}
              {series.place && <p className="label-xs">{t(series.place)}</p>}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
