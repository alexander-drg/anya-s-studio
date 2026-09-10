import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { artworks, seriesInfo, untitledLabel, type Artwork } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Pânze — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Seria Fluid Art: lucrări în acrilic de aproximativ 50 cm, parte dintr-o expoziție din 2024, la Trieste, Italia.",
      },
      { property: "og:title", content: "Pânze — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Acrilic, tehnica Fluid Art. Trieste, 2024.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Panze,
});

function Panze() {
  const t = useT();
  const [open, setOpen] = useState<Artwork | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-28 md:px-12">
      <section className="grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4rem]">
            Pânze
          </h1>
        </Reveal>
        <Reveal delay={100} className="md:col-span-6 md:col-start-7 md:pt-6">
          <p className="max-w-xl text-muted-foreground">{t(seriesInfo.intro)}</p>
        </Reveal>
      </section>

      <section>
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
          <h2 className="font-serif text-2xl font-light md:text-3xl">{t(seriesInfo.title)}</h2>
          <p className="label-xs">
            {t(seriesInfo.technique)} · {t(seriesInfo.size)}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setOpen(a)}
                className="group block w-full text-left"
              >
                <div className="img-zoom overflow-hidden">
                  <img
                    src={a.src}
                    alt={`Lucrare Fluid Art, acrilic, 50 cm, Trieste 2024`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
                <p className="mt-3 font-serif text-lg font-light">
                  {a.title ? t(a.title) : t(untitledLabel)}
                </p>
                <p className="label-xs mt-1">
                  {t(seriesInfo.technique)} · {t(seriesInfo.size)}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

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
              src={open.src}
              alt={open.title ? t(open.title) : "Lucrare Fluid Art"}
              className="max-h-[72vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-6 text-center">
              <p className="font-serif text-xl font-light">
                {open.title ? t(open.title) : t(untitledLabel)}
              </p>
              <p className="label-xs mt-3">{t(seriesInfo.techniqueLong)}</p>
              <p className="label-xs">{t(seriesInfo.size)}</p>
              <p className="label-xs">{t(seriesInfo.place)}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
