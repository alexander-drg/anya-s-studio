import { createFileRoute } from "@tanstack/react-router";

import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/picturi/colectii-donatii")({
  head: () => ({
    meta: [
      { title: "Colecții / Donații · Brîndușa Nicolescu" },
      { name: "description", content: "Lucrări ale Brîndușei Nicolescu în colecții și donații." },
      { property: "og:title", content: "Colecții / Donații · Brîndușa Nicolescu" },
      { property: "og:description", content: "Lucrări ale Brîndușei Nicolescu în colecții și donații." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Colectii,
});

function Colectii() {
  const t = useT();
  const entries = collections.filter((c) => c.published);

  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <p className="label-xs mb-3">{t({ ro: "Picturi", en: "Paintings", it: "Dipinti" })}</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t({ ro: "Colecții / Donații", en: "Collections / Donations", it: "Collezioni / Donazioni" })}
          </h1>
        </Reveal>
      </section>

      {entries.length === 0 ? (
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <Placeholder label="[Imagine lucrare]" ratio="1 / 1" />
          </Reveal>
          <Reveal delay={80} className="md:col-span-6 md:col-start-6">
            <h2 className="font-serif text-2xl font-light">[Titlul lucrării]</h2>
            <p className="label-xs mt-3">[Colecție / Instituție · An]</p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">[Context furnizat de artistă]</p>
          </Reveal>
        </section>
      ) : (
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((c) => (
            <Reveal key={c.id}>
              {c.src && <img src={c.src} alt={t(c.title)} loading="lazy" className="aspect-square w-full object-contain" />}
              <p className="mt-3 font-serif text-lg font-light">{t(c.title)}</p>
              {(c.recipient || c.year) && (
                <p className="label-xs mt-1">
                  {[c.recipient ? t(c.recipient) : null, c.year].filter(Boolean).join(" · ")}
                </p>
              )}
              {c.context && <p className="mt-2 text-sm text-muted-foreground">{t(c.context)}</p>}
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
