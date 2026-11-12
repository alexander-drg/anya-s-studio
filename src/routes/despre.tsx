import { createFileRoute } from "@tanstack/react-router";

import brandusa from "@/assets/brandusa.webp";
import fractalWorkshop from "@/assets/desenfractal_17.webp";
import { Reveal } from "@/components/Reveal";
import { artistPath, externalWork, uapMembership, whyIPaint } from "@/content/site";
import { useT, type Copy } from "@/lib/i18n";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Povestea mea · Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Parcursul artistic al Brîndușei Nicolescu, artist vizual: Liceul Tonitza, Academia de Artă din București, design grafic și expoziții în România, Slovenia și Italia.",
      },
      { property: "og:title", content: "Povestea mea · Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Mi s-a povestit că am început să desenez de la vârsta de doi ani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Despre,
});

const subtitle: Copy = { ro: "Artist vizual", en: "Visual artist", it: "Artista visiva" };
const pageTitle: Copy = { ro: "Povestea mea", en: "My story", it: "La mia storia" };

function TextSection({ heading, paragraphs }: { heading: Copy; paragraphs: Copy[] }) {
  const t = useT();
  return (
    <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:py-14">
      <Reveal className="md:col-span-4">
        <h2 className="font-serif text-2xl leading-tight font-light md:text-3xl">{t(heading)}</h2>
      </Reveal>
      <Reveal delay={100} className="md:col-span-7 md:col-start-6">
        <div className="max-w-xl space-y-5 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Despre() {
  const t = useT();
  const fractal = externalWork[1];

  return (
    <div className="page-shell pb-16">
      <section className="grid items-end gap-8 py-10 md:grid-cols-12 md:py-14">
        <Reveal className="md:col-span-6">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t(pageTitle)}
          </h1>
          <p className="label-xs mt-4 text-muted-foreground">{t(subtitle)}</p>
          <p className="mt-4 max-w-md font-serif text-lg font-light">{t(uapMembership)}</p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <img src={brandusa} alt="Portret Brîndușa Nicolescu" className="w-full object-cover" />
        </Reveal>
      </section>

      <TextSection heading={artistPath.heading} paragraphs={artistPath.paragraphs} />
      <TextSection heading={whyIPaint.heading} paragraphs={whyIPaint.paragraphs} />

      <section className="grid items-end gap-8 border-t border-border pt-10 md:grid-cols-12 md:pt-12">
        <Reveal className="md:col-span-6">
          <ul className="space-y-4">
            {externalWork.map((w) => (
              <li key={w.href}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiet-link font-serif text-lg font-light md:text-xl"
                >
                  {t(w.label)} →
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="md:col-span-4 md:col-start-9">
          <a href={fractal.href} target="_blank" rel="noopener noreferrer" aria-label={t(fractal.label)}>
            <img
              src={fractalWorkshop}
              alt="Atelier de Desen Fractal, participanți desenând"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </a>
        </Reveal>
      </section>
    </div>
  );
}
