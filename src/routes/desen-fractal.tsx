import { createFileRoute, Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Reveal } from "@/components/Reveal";
import pencils from "@/assets/prezentare_1.jpeg";
import lineWork from "@/assets/desen_fractal_16-1.webp";
import dots from "@/assets/desen_fractal_15.webp";
import groupWork from "@/assets/desenfractal_17.webp";
import { testimonials } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/desen-fractal")({
  head: () => ({
    meta: [
      { title: "Metoda Desenului Fractal — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Metoda Desenului Fractal: o linie continuă, 36 de creioane colorate și un proces de explorare personală prin desen, culoare și curiozitate.",
      },
      { property: "og:title", content: "Metoda Desenului Fractal — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "O linie continuă, culoare și curiozitatea de a descoperi ce apare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesenFractal,
});

function DesenFractal() {
  const t = useT();

  return (
    <div className="page-shell pb-20">
      {/* Hero */}
      <section className="grid gap-8 py-10 md:grid-cols-12 md:py-14">
        <Reveal className="md:col-span-5">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            Metoda Desenului Fractal
          </h1>
          <p className="mt-5 max-w-md font-serif text-xl leading-relaxed font-light md:text-2xl">
            O linie continuă, intersecții unice și 36 de culori. Un desen intuitiv care începe cu
            un gest simplu și continuă cu ceea ce descoperi pe parcurs.
          </p>
          <ContinuousLine className="mt-7 h-5 w-full text-[var(--color-terracotta)]" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <img src={pencils} alt="Creioane colorate așezate peste o linie continuă desenată pe hârtie" className="w-full object-cover" loading="eager" />
        </Reveal>
      </section>

      {/* Originea metodei */}
      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Originea metodei</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-2xl leading-relaxed font-light md:text-[1.9rem]">
            Este o nouă formă de „terapie prin artă” concepută de Tanzilija Polujahtova, psiholog
            clinic și psiholog de familie din Rusia. Numele complet al metodei este „Metoda
            fractală de diagnostic analitic, prognostic și corectarea stării umane”.
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Până în prezent, au fost ținute peste 1000 de seminarii, marea majoritate organizate în
            Rusia. Din 2011 metoda desenului fractal s-a extins în Lituania, Latvia, Croația,
            Serbia, Muntenegru și Slovenia.
          </p>
        </Reveal>
      </section>

      {/* Experiența */}
      <section className="py-10 md:py-12">
        <Reveal>
          <h2 className="label-xs mb-8">Experiența</h2>
        </Reveal>

        <div className="space-y-14 md:space-y-20">
          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl font-light md:text-4xl">Linia</h3>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  Începe desenul trasând o linie continuă cu pixul negru, formând intersecții
                  unice ce reprezintă scheletul personalității tale.
                </p>
              </div>
              <div className="img-zoom md:col-span-7 md:col-start-6">
                <img src={lineWork} alt="Desen fractal alb-negru cu o singură linie continuă" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="img-zoom md:col-span-6">
                <img src={dots} alt="Exercițiu de culoare: rânduri de puncte colorate pe hârtie" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="md:col-span-4 md:col-start-8">
                <h3 className="font-serif text-3xl font-light md:text-4xl">Culoarea</h3>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  Colorează apoi cu 36 de creioane colorate fiecare spațiu după reguli specifice
                  și pune-ți amprenta ta emoțională.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-8 md:col-start-3">
                <h3 className="font-serif text-3xl font-light md:text-4xl">Descoperirea</h3>
                <p className="mt-5 font-serif text-xl leading-relaxed font-light md:text-2xl">
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
      <section className="grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <Reveal className="md:col-span-5">
          <img src={groupWork} alt="Doi copii desenând fractal la aceeași masă, sub lumina lămpii" className="w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:col-start-7 md:pt-10">
          <h2 className="font-serif text-3xl font-light md:text-4xl">Desenul fractal în grup</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            În grup, desenul fractal stimulează și armonizează conectarea dintre ei și diminuează
            nevoia de control a părintelui.
          </p>
        </Reveal>
      </section>

      {/* Abordarea Brîndușei */}
      <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <h2 className="label-xs">Abordarea mea</h2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-7 md:col-start-5">
          <p className="font-serif text-xl leading-relaxed font-light md:text-2xl">
            Acest desen intuitiv este un instrument de cunoaștere prin profilul psihologic de la
            începutul metodei și de refacere în procesul terapeutic ce conține un număr de desene
            realizate după recomandările mele.
          </p>
          <p className="label-xs mt-6">© Brîndușa Nicolescu</p>
          <p className="mt-10 text-muted-foreground">
            [Spațiu rezervat pentru explicații suplimentare despre abordarea Brîndușei.]
          </p>
        </Reveal>
      </section>

      {/* Mărturii */}
      <section className="py-12 md:py-16">
        <Reveal>
          <h2 className="label-xs mb-8">Mărturii</h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.slice(0, 2).map((tItem, i) => (
            <Reveal key={t(tItem.attribution)} delay={i * 60}>
              <div className="border-t border-border pt-5">
                <blockquote>
                  <p className="font-serif text-xl leading-snug font-light italic md:text-2xl">
                    {tItem.quote ? t(tItem.quote) : "[Mărturie de completat — text real furnizat de client]"}
                  </p>
                  <footer className="label-xs mt-4">{t(tItem.attribution)}</footer>
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
