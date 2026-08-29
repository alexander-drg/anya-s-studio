import { createFileRoute, Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/desen-fractal")({
  head: () => ({
    meta: [
      { title: "Metoda Desenului Fractal — Brândușa Nicolescu" },
      {
        name: "description",
        content:
          "Metoda Desenului Fractal: o linie continuă, 36 de creioane colorate și un proces de explorare personală prin desen, culoare și curiozitate.",
      },
      { property: "og:title", content: "Metoda Desenului Fractal — Brândușa Nicolescu" },
      {
        property: "og:description",
        content: "O linie continuă, culoare și curiozitatea de a descoperi ce apare.",
      },
    ],
  }),
  component: DesenFractal,
});

function DesenFractal() {
  const t = useT();

  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      {/* Hero */}
      <section className="grid gap-12 py-14 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Metoda Desenului Fractal
          </h1>
          <p className="mt-8 max-w-md font-serif text-xl leading-relaxed font-light md:text-2xl">
            O linie continuă, intersecții unice și 36 de culori. Un desen intuitiv care începe cu
            un gest simplu și continuă cu ceea ce descoperi pe parcurs.
          </p>
          <ContinuousLine className="mt-10 h-6 w-full text-[var(--color-terracotta)]" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <Placeholder label="[Fractal artwork hero]" ratio="4 / 3" />
        </Reveal>
      </section>

      {/* Originea metodei */}
      <section className="grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Originea metodei</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-[1.9rem]">
            Este o nouă formă de „terapie prin artă” concepută de Tanzilija Polujahtova, psiholog
            clinic și psiholog de familie din Rusia. Numele complet al metodei este „Metoda
            fractală de diagnostic analitic, prognostic și corectarea stării umane”.
          </p>
          <p className="mt-8 max-w-xl text-muted-foreground">
            Până în prezent, au fost ținute peste 1000 de seminarii, marea majoritate organizate în
            Rusia. Din 2011 metoda desenului fractal s-a extins în Lituania, Latvia, Croația,
            Serbia, Muntenegru și Slovenia.
          </p>
        </Reveal>
      </section>

      {/* Experiența */}
      <section className="py-10 md:py-16">
        <Reveal>
          <h2 className="label-xs mb-16">Experiența</h2>
        </Reveal>

        <div className="space-y-28 md:space-y-44">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="font-serif text-4xl font-light md:text-6xl">Linia</h3>
                <p className="mt-6 max-w-sm text-muted-foreground">
                  Începe desenul trasând o linie continuă cu pixul negru, formând intersecții
                  unice ce reprezintă scheletul personalității tale.
                </p>
              </div>
              <div className="img-zoom md:col-span-7 md:col-start-6">
                <Placeholder label="[Desen fractal — linia]" ratio="3 / 2" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="img-zoom md:col-span-6">
                <Placeholder label="[Desen fractal — culoare]" ratio="4 / 3" />
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-serif text-4xl font-light md:text-6xl">Culoarea</h3>
                <p className="mt-6 max-w-sm text-muted-foreground">
                  Colorează apoi cu 36 de creioane colorate fiecare spațiu după reguli specifice
                  și pune-ți amprenta ta emoțională.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-8 md:col-start-3">
                <h3 className="font-serif text-4xl font-light md:text-6xl">Descoperirea</h3>
                <p className="mt-8 font-serif text-2xl leading-relaxed font-light md:text-3xl">
                  Undeva între linie și culoare apare ceva ce nu ai plănuit. Nu e nimic de
                  interpretat imediat — e doar de privit, cu „mirarea copilului care încă poate
                  descoperi”.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* În grup */}
      <section className="grid gap-10 py-24 md:grid-cols-12 md:py-40">
        <Reveal className="md:col-span-5">
          <Placeholder label="[Desen fractal în grup]" ratio="4 / 3" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-7 md:pt-10">
          <h2 className="font-serif text-3xl font-light md:text-4xl">Desenul fractal în grup</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            În grup, desenul fractal stimulează și armonizează conectarea dintre ei și diminuează
            nevoia de control a părintelui.
          </p>
        </Reveal>
      </section>

      {/* Abordarea Brândușei */}
      <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Abordarea mea</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
            Acest desen intuitiv este un instrument de cunoaștere prin profilul psihologic de la
            începutul metodei și de refacere în procesul terapeutic ce conține un număr de desene
            realizate după recomandările mele.
          </p>
          <p className="label-xs mt-6">© Brândușa Nicolescu</p>
          <p className="mt-10 text-muted-foreground">
            [Spațiu rezervat pentru explicații suplimentare despre abordarea Brândușei.]
          </p>
        </Reveal>
      </section>

      {/* Mărturii */}
      <section className="py-20 md:py-32">
        <Reveal>
          <h2 className="label-xs mb-16">Mărturii</h2>
        </Reveal>
        <div className="space-y-24">
          {testimonials.map((tItem, i) => (
            <Reveal key={t(tItem.attribution)} delay={i * 60}>
              <div className="grid gap-8 md:grid-cols-12">
                {i % 2 === 1 && (
                  <div className="md:col-span-3">
                    <Placeholder label="[Desen fractal detaliu]" ratio="1 / 1" />
                  </div>
                )}
                <blockquote
                  className={`md:col-span-8 ${i % 2 === 1 ? "md:col-start-5" : i % 3 === 0 ? "" : "md:col-start-3"}`}
                >
                  <p className="font-serif text-2xl leading-snug font-light italic md:text-4xl">
                    {tItem.quote ? t(tItem.quote) : "[Mărturie de completat — text real furnizat de client]"}
                  </p>
                  <footer className="label-xs mt-6">{t(tItem.attribution)}</footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <p className="font-serif text-3xl leading-snug font-light md:text-4xl">
          Dacă simți că vrei să afli mai mult, putem începe de aici.
        </p>
        <Link to="/contact" className="label-xs quiet-link mt-8 inline-block">
          Contact →
        </Link>
      </Reveal>
    </div>
  );
}
