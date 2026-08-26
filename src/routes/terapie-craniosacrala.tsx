import { createFileRoute, Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/terapie-craniosacrala")({
  head: () => ({
    meta: [
      { title: "Terapie Craniosacrală — Brândușa Nicolescu" },
      {
        name: "description",
        content:
          "Un spațiu liniștit pentru ascultare, încetinire și prezență în corp. Pagină în curs de completare cu informațiile despre practica Brândușei Nicolescu.",
      },
      { property: "og:title", content: "Terapie Craniosacrală — Brândușa Nicolescu" },
      {
        property: "og:description",
        content: "Corp, ascultare, încetinire, prezență.",
      },
    ],
  }),
  component: Craniosacrala,
});

function ToBeCompleted({ note }: { note: string }) {
  return (
    <p className="label-xs mt-6 border-l border-[var(--color-terracotta)] pl-4 text-muted-foreground">
      {note}
    </p>
  );
}

function Craniosacrala() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="grid gap-12 py-14 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Terapie Craniosacrală
          </h1>
          <p className="mt-8 max-w-md font-serif text-xl leading-relaxed font-light md:text-2xl">
            Corp, ascultare, liniște, prezență. Un timp în care nu e nimic de rezolvat — doar de
            observat ce se întâmplă când încetinim.
          </p>
          <ContinuousLine className="mt-10 h-6 w-full text-[var(--color-sage)]" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <Placeholder label="[Craniosacral therapy image]" ratio="4 / 3" />
        </Reveal>
      </section>

      <section className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Ce este</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
            [Descrierea terapiei craniosacrale urmează să fie completată de Brândușa.]
          </p>
          <ToBeCompleted note="Conținut de completat — nu au fost formulate afirmații despre metodă, indicații sau efecte." />
        </Reveal>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Cum decurge o ședință</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <ul className="space-y-8">
            {[
              "Ce se întâmplă în timpul unei ședințe — [de completat]",
              "Durata și formatul — [de completat]",
              "Cum se simte experiența — [de completat]",
              "Detalii practice (loc, programare, frecvență) — [de completat]",
            ].map((row) => (
              <li key={row} className="border-t border-border pt-6 font-serif text-xl font-light">
                {row}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <Placeholder label="[Detaliu mâini / ascultare]" ratio="4 / 3" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8 md:pt-16">
          <h2 className="font-serif text-3xl font-light md:text-4xl">Prezență și corp</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Atenția coboară din cap în corp. Respirația se lungește. Ascultarea devine mai fină
            decât cuvintele. Aceeași prezență pe care o cauți în fața unei picturi sau cu creionul
            în mână, doar că de data aceasta trece prin corp.
          </p>
        </Reveal>
      </section>

      <section className="py-20 md:py-32">
        <Reveal>
          <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-12">
            <h2 className="font-serif text-4xl font-light md:col-span-5 md:text-6xl">Echilibru</h2>
            <p className="max-w-md text-muted-foreground md:col-span-6 md:col-start-7">
              Nu perfecțiune, ci un echilibru viu între corp, minte, emoții și expresie creativă.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Despre abordarea mea</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
            [Spațiu rezervat pentru descrierea reală a abordării și a formării Brândușei.]
          </p>
          <ToBeCompleted note="Conținut de completat — formare, experiență și mod de lucru." />
        </Reveal>
      </section>

      <Reveal>
        <p className="font-serif text-3xl leading-snug font-light md:text-4xl">
          Pentru o ședință sau o întrebare, poți scrie direct.
        </p>
        <Link to="/contact" className="label-xs quiet-link mt-8 inline-block">
          Contact →
        </Link>
      </Reveal>
    </div>
  );
}
