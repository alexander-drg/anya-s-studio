import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import {
  artworks,
  watercolors,
  seriesInfo,
  watercolorSeriesInfo,
  untitledLabel,
  type Artwork,
  type SeriesInfo,
} from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Pânze · Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Pânze: seria Fluid Art în acrilic de aproximativ 50 cm (Trieste, 2024) și lucrări în acuarelă aflate în colecții private.",
      },
      { property: "og:title", content: "Pânze · Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Acrilic, tehnica Fluid Art · Acuarelă.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Panze,
});

type OpenWork = { a: Artwork; series: SeriesInfo };

function WorkSeries({
  series,
  works,
  onOpen,
  showIntro = false,
  className = "",
}: {
  series: SeriesInfo;
  works: Artwork[];
  onOpen: (w: OpenWork) => void;
  showIntro?: boolean;
  className?: string;
}) {
  const t = useT();
  return (
    <section className={className}>
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
        <h2 className="font-serif text-2xl font-light md:text-3xl">{t(series.title)}</h2>
        <p className="label-xs">{t(series.technique)}</p>
      </Reveal>
      {showIntro && (
        <Reveal delay={60}>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">{t(series.intro)}</p>
        </Reveal>
      )}
      <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((a, i) => (
          <Reveal key={a.id} delay={(i % 3) * 70}>
            <button
              type="button"
              onClick={() => onOpen({ a, series })}
              className="group block w-full text-left"
            >
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
  );
}

function Panze() {
  const t = useT();
  const [open, setOpen] = useState<OpenWork | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="page-shell pb-20">
      <section className="grid gap-6 py-10 md:grid-cols-12 md:py-14">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            Pânze
          </h1>
        </Reveal>
        <Reveal delay={100} className="md:col-span-6 md:col-start-7 md:pt-3">
          <p className="max-w-xl text-muted-foreground">{t(seriesInfo.intro)}</p>
        </Reveal>
      </section>

      <WorkSeries series={seriesInfo} works={artworks} onOpen={setOpen} />
      <WorkSeries
        series={watercolorSeriesInfo}
        works={watercolors}
        onOpen={setOpen}
        showIntro
        className="mt-14"
      />

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 p-5 md:p-10"
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
              src={open.a.src}
              alt={open.a.title ? t(open.a.title) : t(open.series.technique)}
              className="max-h-[72vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-6 text-center">
              <p className="font-serif text-xl font-light">
                {open.a.title ? t(open.a.title) : t(untitledLabel)}
              </p>
              <p className="label-xs mt-3">{t(open.series.techniqueLong)}</p>
              {open.series.size && <p className="label-xs">{t(open.series.size)}</p>}
              {open.series.place && <p className="label-xs">{t(open.series.place)}</p>}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
