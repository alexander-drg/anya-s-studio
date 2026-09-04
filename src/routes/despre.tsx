import { createFileRoute, Link } from "@tanstack/react-router";

import brandusa from "@/assets/brandusa.webp";
import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { values } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Despre Brîndușa Nicolescu: relația dintre artă, culoare, emoții, corp și prezență, și felul în care Desenul Fractal și terapia craniosacrală se întâlnesc.",
      },
      { property: "og:title", content: "Despre — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Cum se întâlnesc arta, corpul, emoțiile și prezența într-o singură practică.",
      },
    ],
  }),
  component: Despre,
});

function Despre() {
  const t = useT();

  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="grid gap-12 py-16 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.5rem]">
            Brîndușa Nicolescu
          </h1>
          <p className="mt-8 max-w-lg font-serif text-xl leading-relaxed font-light md:text-2xl">
            Artă, culoare, emoție, corp și prezență — pentru mine, toate acestea sunt feluri
            diferite de a te întoarce la tine.
          </p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-8">
          <img
            src={brandusa}
            alt="Portret Brîndușa Nicolescu"
            className="w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Povestea mea</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
            [Spațiu rezervat pentru povestea reală a Brîndușei.]
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Această secțiune urmează să fie completată cu textul biografic real. Structura este
            pregătită: câteva paragrafe, la ritm lent, fără ton de CV.
          </p>
        </Reveal>
      </section>

      <section className="py-16 md:py-24">
        <Reveal>
          <ContinuousLine className="h-8 w-full text-[var(--color-terracotta)]" />
        </Reveal>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Cum se întâlnesc aceste lumi</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
            Linia care traversează o foaie și atenția care coboară în corp fac același lucru:
            încetinesc. Culoarea numește o emoție; ascultarea îi face loc. Desenul Fractal și
            terapia craniosacrală nu sunt două servicii alăturate, ci două uși către aceeași
            cameră.
          </p>
        </Reveal>
        <Reveal delay={160} className="md:col-span-5 md:col-start-2">
          <Placeholder label="[Proces creativ]" ratio="4 / 3" />
        </Reveal>
        <Reveal delay={220} className="md:col-span-4 md:col-start-8 md:mt-20">
          <Placeholder label="[Detaliu culoare]" ratio="3 / 4" />
        </Reveal>
      </section>

      <section className="py-20 md:py-32">
        <Reveal>
          <h2 className="label-xs mb-14">Cele patru repere</h2>
        </Reveal>
        <div className="space-y-14">
          {values.map((v, i) => (
            <Reveal key={t(v.title)} delay={i * 60}>
              <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-12">
                <h3 className="font-serif text-3xl font-light md:col-span-5 md:text-5xl">
                  {t(v.title)}
                </h3>
                <p className="max-w-md text-muted-foreground md:col-span-6 md:col-start-7">
                  {t(v.line)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Parcurs / formare</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="text-muted-foreground">
            [Spațiu rezervat pentru formare, cursuri și parcurs profesional — informațiile reale
            urmează să fie furnizate.]
          </p>
          <ul className="mt-8 space-y-4">
            {[1, 2, 3].map((n) => (
              <li key={n} className="label-xs border-t border-border pt-4">
                [An] — [Formare / curs]
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal>
        <Link to="/contact" className="label-xs quiet-link">
          Contact →
        </Link>
      </Reveal>
    </div>
  );
}
