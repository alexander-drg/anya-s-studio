import { createFileRoute, Link } from "@tanstack/react-router";

import brandusa from "@/assets/brandusa.webp";
import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { myStory, professionalDescriptor, values } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Povestea mea — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Povestea Brîndușei Nicolescu: de ce pictează, ce înseamnă ritmul din pictură și din practica craniosacrală, și cum se întâlnesc culorile, liniile și punctele.",
      },
      { property: "og:title", content: "Povestea mea — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Pictez pentru că mă conectez la un ritm organic, fizic și psihic.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Despre,
});

function Despre() {
  const t = useT();

  return (
    <div className="page-shell pb-20">
      <section className="grid gap-8 py-10 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-6">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            Brîndușa Nicolescu
          </h1>
          <p className="mt-5 max-w-lg text-sm text-muted-foreground">
            {t(professionalDescriptor)}
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

      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Povestea mea</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-8 md:col-start-5">
          <p className="max-w-xl font-serif text-2xl leading-relaxed font-light md:text-3xl">
            {t(myStory.opening)}
          </p>
          <div className="mt-8 max-w-xl space-y-5 text-muted-foreground">
            {myStory.rhythm.map((line, i) => (
              <p key={i}>{t(line)}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Descoperire</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <div className="max-w-xl space-y-5">
            {myStory.discovery.map((line, i) => (
              <p key={i}>{t(line)}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Culori, linii, puncte</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <div className="max-w-xl space-y-5">
            {myStory.visual.map((line, i) => (
              <p key={i}>{t(line)}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160} className="md:col-span-5 md:col-start-2">
          <Placeholder label="[Proces creativ]" ratio="4 / 3" />
        </Reveal>
        <Reveal delay={220} className="md:col-span-4 md:col-start-8 md:mt-20">
          <Placeholder label="[Detaliu culoare]" ratio="3 / 4" />
        </Reveal>
      </section>

      <section className="py-10 md:py-12">
        <Reveal>
          <p className="max-w-2xl font-serif text-2xl leading-snug font-light italic md:text-3xl">
            {t(myStory.pullQuote)}
          </p>
        </Reveal>
      </section>

      <section className="py-12 md:py-16">
        <Reveal>
          <p className="max-w-3xl font-serif text-3xl leading-tight font-light md:text-4xl">
            {t(myStory.closing)}
          </p>
        </Reveal>
      </section>

      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs mb-8">Cele patru repere</h2>
        </Reveal>
        <div className="md:col-span-9 md:col-start-4">
          {values.map((v, i) => (
            <Reveal key={t(v.title)} delay={i * 60}>
              <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-12">
                <h3 className="font-serif text-2xl font-light md:col-span-5 md:text-3xl">
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

      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
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
