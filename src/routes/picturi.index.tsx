import { createFileRoute, Link } from "@tanstack/react-router";

import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import {
  artworks,
  fascinations,
  graphics,
  isPublished,
  nav,
  sortArtworks,
  watercolors,
} from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/picturi/")({
  head: () => ({
    meta: [
      { title: "Picturi · Brîndușa Nicolescu" },
      {
        name: "description",
        content: "Picturile Brîndușei Nicolescu: acrilice, acuarelă, grafică și fascinații.",
      },
      { property: "og:title", content: "Picturi · Brîndușa Nicolescu" },
      { property: "og:description", content: "Acrilice · Acuarelă · Grafică · Fascinații." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Picturi,
});

const covers: (string | undefined)[] = [
  sortArtworks(artworks.filter(isPublished))[0]?.src,
  watercolors.filter(isPublished)[0]?.src,
  graphics.filter(isPublished)[0]?.src,
  fascinations.filter(isPublished)[0]?.src,
];

function Picturi() {
  const t = useT();
  const categories = nav.find((n) => n.to === "/picturi")?.children ?? [];

  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t({ ro: "Picturi", en: "Paintings", it: "Dipinti" })}
          </h1>
        </Reveal>
      </section>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.to} delay={i * 60}>
            <Link to={c.to} className="group block">
              {covers[i] ? (
                <div className="img-zoom aspect-square overflow-hidden">
                  <img src={covers[i]} alt={t(c.label)} loading="lazy" className="h-full w-full object-contain" />
                </div>
              ) : (
                <Placeholder label="[Imagine]" ratio="1 / 1" />
              )}
              <p className="mt-4 font-serif text-2xl font-light">{t(c.label)}</p>
              <span className="label-xs quiet-link mt-2 inline-block">→</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
