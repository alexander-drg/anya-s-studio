import { createFileRoute, Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/explorari")({
  head: () => ({
    meta: [
      { title: "Explorări — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Ateliere, experiențe și explorări creative: procese, materiale și subiecte care nu încap într-o singură categorie.",
      },
      { property: "og:title", content: "Explorări — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Ateliere, experiențe și explorări creative alături de Brîndușa Nicolescu.",
      },
    ],
  }),
  component: Explorari,
});

function Explorari() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="grid gap-12 py-14 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-6">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Explorări
          </h1>
          <p className="mt-8 max-w-lg font-serif text-xl leading-relaxed font-light md:text-2xl">
            Ateliere, experiențe și felurile în care un proces creativ poate începe. Lucruri care
            nu încap într-o categorie, dar care fac parte din același drum.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <Placeholder label="[Atelier — atmosferă]" ratio="4 / 5" />
        </Reveal>
      </section>

      <section className="py-10 md:py-16">
        <Reveal>
          <ContinuousLine className="h-8 w-full text-[var(--color-sage)]" />
        </Reveal>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Ateliere viitoare</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="text-muted-foreground">
            [Spațiu rezervat pentru atelierele și experiențele care urmează — datele reale urmează
            să fie completate.]
          </p>
        </Reveal>
      </section>

      <Reveal>
        <Link to="/contact" className="label-xs quiet-link">
          Scrie-mi →
        </Link>
      </Reveal>
    </div>
  );
}
