import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import brandusa from "@/assets/brandusa.webp.asset.json";
import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { galleryItems, presenceMoments, testimonials, values } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brândușa Nicolescu — Desen Fractal, terapie craniosacrală și artă" },
      {
        name: "description",
        content:
          "Diferite feluri de a te întoarce la tine: prin creativitate, corp, emoție și prezență. Desen Fractal, terapie craniosacrală și expresie artistică.",
      },
      { property: "og:title", content: "Brândușa Nicolescu — Desen Fractal și prezență" },
      {
        property: "og:description",
        content:
          "Diferite feluri de a te întoarce la tine: prin creativitate, corp, emoție și prezență.",
      },
    ],
  }),
  component: Home,
});

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Home() {
  const scrollY = useScrollY();
  const t = useT();

  return (
    <>
      {/* 1. Hero */}
      <section className="relative mx-auto grid max-w-[110rem] items-end gap-10 px-6 pt-4 pb-20 md:grid-cols-12 md:px-12 md:pb-32">
        <div className="md:col-span-7">
          <div
            className="overflow-hidden"
            style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.06, 40)}px, 0)` }}
          >
            <Placeholder label="[Fractal artwork hero]" ratio="4 / 3" />
          </div>
        </div>
        <div className="flex flex-col justify-end md:col-span-5 md:pb-16">
          <Reveal>
            <p className="font-serif text-[1.9rem] leading-[1.25] font-light italic md:text-[2.6rem]">
              „Călătorind în interiorul emoțiilor tale ca într-un Montagne-Russe, cu o linie
              continuă și culori."
            </p>
            <ContinuousLine className="mt-10 h-6 w-full text-[var(--color-terracotta)]" />
            <a href="#introducere" className="label-xs quiet-link mt-10 inline-block">
              Descoperă →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. Introducere / Brândușa */}
      <section id="introducere" className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <img
              src={brandusa.url}
              alt="Portret Brândușa Nicolescu"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-6 md:pt-16">
            <p className="label-xs mb-6">Introducere</p>
            <h2 className="font-serif text-4xl font-light md:text-6xl">Brândușa Nicolescu</h2>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed font-light md:text-2xl">
              Explorez diferite forme de conectare cu sine — prin creativitate, prin emoții, prin
              corp și prin prezență. Desenul, culoarea și atingerea sunt, pentru mine, aceeași
              întrebare pusă altfel.
            </p>
            <p className="mt-6 max-w-lg text-muted-foreground">
              [Text introductiv provizoriu — biografia reală urmează să fie completată.]
            </p>
            <Link to="/despre" className="label-xs quiet-link mt-10 inline-block">
              Despre Brândușa →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. Prezența */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <p className="label-xs mb-8">Prezență</p>
          <h2 className="max-w-4xl font-serif text-[2.2rem] leading-[1.15] font-light md:text-[4rem]">
            „A învăța să fii cu adevărat prezent."
          </h2>
        </Reveal>

        <div className="mt-24 space-y-28 md:space-y-40">
          {presenceMoments.map((m, i) => (
            <Reveal key={t(m.title)}>
              <div
                className={`grid items-center gap-8 md:grid-cols-12 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`md:col-span-7 ${i === 1 ? "md:col-start-6" : ""}`}>
                  <div className="img-zoom [direction:ltr]">
                    <Placeholder
                      label={m.placeholder}
                      ratio={i === 1 ? "4 / 5" : "3 / 2"}
                    />
                  </div>
                </div>
                <div className="md:col-span-4 [direction:ltr]">
                  <h3 className="font-serif text-3xl font-light md:text-4xl">{t(m.title)}</h3>
                  <ul className="mt-6 space-y-1 text-muted-foreground">
                    {m.words.map((w) => (
                      <li key={t(w)}>{t(w)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Cele două practici */}
      <section className="mx-auto max-w-[110rem] px-6 py-32 md:px-12 md:py-48">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <Placeholder label="[Desen fractal — lucrare]" ratio="4 / 5" />
            <h3 className="mt-8 font-serif text-3xl font-light md:text-4xl">Desen Fractal</h3>
            <p className="mt-5 max-w-md text-muted-foreground">
              O linie continuă, treizeci și șase de culori și curiozitatea de a vedea ce apare.
              Un mod de explorare personală prin desen, emoție și creativitate.
            </p>
            <Link to="/desen-fractal" className="label-xs quiet-link mt-8 inline-block">
              Descoperă Desenul Fractal →
            </Link>
          </Reveal>
          <Reveal delay={140} className="md:pt-28">
            <Placeholder label="[Craniosacral therapy image]" ratio="4 / 5" />
            <h3 className="mt-8 font-serif text-3xl font-light md:text-4xl">
              Terapie Craniosacrală
            </h3>
            <p className="mt-5 max-w-md text-muted-foreground">
              Corpul, ascultarea și încetinirea. Un spațiu liniștit în care atenția coboară în
              corp și revii, treptat, la tine.
            </p>
            <Link to="/terapie-craniosacrala" className="label-xs quiet-link mt-8 inline-block">
              Descoperă Terapia Craniosacrală →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. Cele patru repere */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <p className="label-xs mb-16">Patru repere</p>
        </Reveal>
        <div className="space-y-16 md:space-y-24">
          {values.map((v, i) => (
            <Reveal key={t(v.title)} delay={i * 60}>
              <div
                className="grid items-baseline gap-4 border-t border-border pt-8 md:grid-cols-12"
                style={{ marginLeft: `${(i % 2) * 7}%` }}
              >
                <h3 className="font-serif text-4xl font-light md:col-span-6 md:text-7xl">
                  {t(v.title)}
                </h3>
                <p className="max-w-md text-muted-foreground md:col-span-5 md:col-start-8">
                  {t(v.line)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Galerie preview */}
      <section className="mx-auto max-w-[110rem] px-6 py-32 md:px-12 md:py-48">
        <Reveal className="mb-14 flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl font-light md:text-5xl">Lucrări</h2>
          <Link to="/galerie" className="label-xs quiet-link">
            Vezi galeria →
          </Link>
        </Reveal>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <Placeholder label={galleryItems[0]!.placeholder} ratio="3 / 2" />
          </Reveal>
          <Reveal delay={100} className="md:col-span-4 md:col-start-9 md:mt-28">
            <Placeholder label={galleryItems[1]!.placeholder} ratio="3 / 4" />
          </Reveal>
          <Reveal delay={60} className="md:col-span-5 md:col-start-2">
            <Placeholder label={galleryItems[3]!.placeholder} ratio="4 / 5" />
          </Reveal>
          <Reveal delay={140} className="md:col-span-4 md:col-start-8 md:mt-16">
            <Placeholder label={galleryItems[4]!.placeholder} ratio="4 / 3" />
          </Reveal>
        </div>
      </section>

      {/* 7. Mărturii */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <p className="label-xs mb-16">Mărturii</p>
        </Reveal>
        <div className="space-y-24">
          {testimonials.slice(0, 3).map((tst, i) => (
            <Reveal key={t(tst.attribution)} delay={i * 80}>
              <div className="grid gap-8 md:grid-cols-12">
                {i === 1 && (
                  <div className="md:col-span-3">
                    <Placeholder label="[Desen fractal detaliu]" ratio="1 / 1" />
                  </div>
                )}
                <blockquote
                  className={`md:col-span-8 ${i === 1 ? "md:col-start-5" : i === 2 ? "md:col-start-4" : ""}`}
                >
                  <p className="font-serif text-2xl leading-snug font-light italic md:text-4xl">
                    {tst.quote ? t(tst.quote) : "[Mărturie de completat — text real furnizat de client]"}
                  </p>
                  <footer className="label-xs mt-6">{t(tst.attribution)}</footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. Închidere */}
      <section className="mx-auto max-w-[110rem] px-6 py-40 md:px-12 md:py-56">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-3xl leading-[1.3] font-light md:text-5xl">
            Dacă simți că vrei să afli mai mult, putem începe de aici.
          </p>
          <ContinuousLine
            variant="loop"
            className="mx-auto mt-14 h-32 w-64 text-[var(--color-sage)]"
          />
          <Link to="/contact" className="label-xs quiet-link mt-10 inline-block">
            Contact →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
