import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { galleryItems, type GalleryItem } from "@/content/site";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Brândușa Nicolescu" },
      {
        name: "description",
        content:
          "Desen fractal, pictură și fragmente din proces. O galerie editorială, fără prețuri și fără vitrine — doar lucrările și spațiul din jurul lor.",
      },
      { property: "og:title", content: "Galerie — Brândușa Nicolescu" },
      {
        property: "og:description",
        content: "Desen fractal, pictură și fragmente din proces.",
      },
    ],
  }),
  component: Galerie,
});

const categories = ["Toate", "Desen Fractal", "Pictură", "Proces"] as const;

function Galerie() {
  const [active, setActive] = useState<(typeof categories)[number]>("Toate");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items =
    active === "Toate" ? galleryItems : galleryItems.filter((i) => i.category === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="py-14 md:py-24">
        <Reveal>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Galerie
          </h1>
          <p className="mt-6 max-w-lg text-muted-foreground">
            Lucrările reale urmează să fie adăugate. Până atunci, spațiile de mai jos marchează
            unde va sta fiecare imagine.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="label-xs mt-12 flex flex-wrap gap-6">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`quiet-link ${active === c ? "text-foreground" : "hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 80} className="mb-8 break-inside-avoid">
            <button
              type="button"
              onClick={() => setLightbox(item)}
              className="img-zoom block w-full text-left"
            >
              <Placeholder label={item.placeholder} ratio={item.ratio} />
              <span className="label-xs mt-3 block">{item.category}</span>
            </button>
          </Reveal>
        ))}
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/97 p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Închide"
            className="label-xs absolute top-6 right-6"
          >
            Închide ✕
          </button>
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Placeholder label={lightbox.placeholder} ratio={lightbox.ratio} />
            <p className="label-xs mt-4">{lightbox.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}
