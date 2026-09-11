import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import brandusa from "@/assets/brandusa.webp";
import { ContinuousLine } from "@/components/ContinuousLine";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import {
  approachLine,
  artistStatement,
  artworks,
  conceptLine,
  heroImage,
  presenceMoments,
  seriesInfo,
  testimonials,
  untitledLabel,
  values,
} from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brîndușa Nicolescu — Unde ARTA întâlnește PREZENȚA" },
      {
        name: "description",
        content:
          "Cultivarea prezenței prin artă, percepție și experiență creativă. Pictură Fluid Art, Desen Fractal și întâlniri în liniște.",
      },
      { property: "og:title", content: "Brîndușa Nicolescu — Unde ARTA întâlnește PREZENȚA" },
      {
        property: "og:description",
        content: "Cultivarea prezenței prin artă, percepție și experiență creativă.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

function ConceptLine({ className = "" }: { className?: string }) {
  const t = useT();
  return (
    <p className={`font-serif text-[1.5rem] leading-snug font-light md:text-[2.1rem] ${className}`}>
      {t(conceptLine.before)}
      <span className="tracking-[0.18em]">{t(conceptLine.a)}</span>
      {t(conceptLine.middle)}
      <span className="tracking-[0.18em]">{t(conceptLine.b)}</span>
      {t(conceptLine.after)}
    </p>
  );
}

function Home() {
  const scrollY = useScrollY();
  const t = useT();
  const statementLines = t(artistStatement).split("\n");
  const preview = artworks.slice(0, 4);

  return (
    <>
      {/* 1. Hero — fotografie de atelier pe tot ecranul */}
      <section className="relative -mt-[4.5rem] h-[100svh] w-full overflow-hidden md:-mt-[6rem]">
        <img
          src={heroImage}
          alt="Atelier de pictură luminat natural"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.12, 90)}px, 0) scale(1.08)`,
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-end px-6 pb-20 md:px-12 md:pb-24">
          <div className="reveal reveal-in">
            <blockquote className="max-w-2xl font-serif text-[1.15rem] leading-[1.55] font-light text-white drop-shadow-[0_1px_18px_rgba(0,0,0,0.5)] md:text-[1.6rem]">
              {statementLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </blockquote>
            <a
              href="#prezenta"
              className="label-xs mt-10 inline-flex items-center gap-3 text-white/75 transition-colors hover:text-white"
            >
              <span className="block h-8 w-px bg-white/50" />
              Continuă
            </a>
          </div>
        </div>
      </section>

      {/* 2. Linia conceptuală */}
      <section id="prezenta" className="mx-auto max-w-[110rem] px-6 py-20 md:px-12 md:py-28">
        <Reveal className="max-w-3xl">
          <ConceptLine />
          <p className="mt-6 max-w-xl text-muted-foreground">{t(approachLine)}</p>
        </Reveal>
      </section>

      {/* 3. Brîndușa */}
      <section id="introducere" className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <img
              src={brandusa}
              alt="Portret Brîndușa Nicolescu"
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-6 md:pt-10">
            <h2 className="font-serif text-3xl font-light md:text-5xl">Brîndușa</h2>
            <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed font-light md:text-xl">
              Explorez diferite forme de conectare cu sine — prin creativitate, prin emoții, prin
              corp și prin prezență. Desenul, culoarea și atingerea sunt, pentru mine, aceeași
              întrebare pusă altfel.
            </p>
            <p className="mt-5 max-w-lg text-muted-foreground">{t(approachLine)}</p>
            <Link to="/despre" className="label-xs quiet-link mt-8 inline-block">
              Povestea mea →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5. Pânze — preview compact */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
          <div>
            <h2 className="font-serif text-2xl font-light md:text-3xl">Pânze</h2>
            <p className="label-xs mt-2">
              {t(seriesInfo.technique)} · {t(seriesInfo.size)} · {t(seriesInfo.place)}
            </p>
          </div>
          <Link to="/galerie" className="label-xs quiet-link">
            Descoperă pânzele →
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-12">
          {preview.map((a, i) => (
            <Reveal
              key={a.id}
              delay={i * 70}
              className={
                i === 0
                  ? "md:col-span-6"
                  : i === 1
                    ? "md:col-span-4 md:mt-10"
                    : i === 2
                      ? "md:col-span-4 md:col-start-3"
                      : "md:col-span-5 md:col-start-8 md:-mt-6"
              }
            >
              <Link to="/galerie" className="img-zoom block overflow-hidden">
                <img
                  src={a.src}
                  alt={a.title ? t(a.title) : "Lucrare Fluid Art, Trieste 2024"}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </Link>
              <p className="label-xs mt-3">{a.title ? t(a.title) : t(untitledLabel)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Prezența */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="label-xs mb-6">Prezență</p>
          <h2 className="max-w-3xl font-serif text-[1.8rem] leading-[1.2] font-light md:text-[2.8rem]">
            „A învăța să fii cu adevărat prezent."
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {presenceMoments.map((m, i) => (
            <Reveal key={t(m.title)} delay={i * 70}>
              <div className="img-zoom">
                <Placeholder label={m.placeholder} ratio="4 / 5" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-light">{t(m.title)}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {m.words.map((w) => (
                  <li key={t(w)}>{t(w)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Cele două practici */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Placeholder label="[Desen fractal — lucrare]" ratio="4 / 5" />
            <h3 className="mt-6 font-serif text-2xl font-light md:text-3xl">Desen Fractal</h3>
            <p className="mt-4 max-w-md text-muted-foreground">
              O linie continuă, treizeci și șase de culori și curiozitatea de a vedea ce apare.
            </p>
            <Link to="/desen-fractal" className="label-xs quiet-link mt-6 inline-block">
              Desen →
            </Link>
          </Reveal>
          <Reveal delay={140} className="md:pt-16">
            <Placeholder label="[Craniosacral therapy image]" ratio="4 / 5" />
            <h3 className="mt-6 font-serif text-2xl font-light md:text-3xl">Întâlniri</h3>
            <p className="mt-4 max-w-md text-muted-foreground">
              Corpul, ascultarea și încetinirea. Un spațiu liniștit în care revii, treptat, la tine.
            </p>
            <Link to="/terapie-craniosacrala" className="label-xs quiet-link mt-6 inline-block">
              Întâlniri →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 8. Cele patru repere */}
      <section className="mx-auto max-w-[110rem] px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <p className="label-xs mb-10">Patru repere</p>
        </Reveal>
        <div className="space-y-10 md:space-y-14">
          {values.map((v, i) => (
            <Reveal key={t(v.title)} delay={i * 60}>
              <div className="grid items-baseline gap-3 border-t border-border pt-6 md:grid-cols-12">
                <h3 className="font-serif text-2xl font-light md:col-span-5 md:text-4xl">
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

      {/* 9. Mărturii */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <p className="label-xs mb-10">Mărturii</p>
        </Reveal>
        <div className="space-y-14">
          {testimonials.slice(0, 3).map((tst, i) => (
            <Reveal key={t(tst.attribution)} delay={i * 80}>
              <blockquote className="max-w-3xl">
                <p className="font-serif text-xl leading-snug font-light italic md:text-2xl">
                  {tst.quote ? t(tst.quote) : "[Mărturie de completat — text real furnizat de client]"}
                </p>
                <footer className="label-xs mt-4">{t(tst.attribution)}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 10. Închidere */}
      <section className="mx-auto max-w-[110rem] px-6 py-28 md:px-12 md:py-40">
        <Reveal className="mx-auto max-w-2xl text-center">
          <ConceptLine />
          <ContinuousLine
            variant="loop"
            className="mx-auto mt-10 h-24 w-56 text-[var(--color-sage)]"
          />
          <Link to="/contact" className="label-xs quiet-link mt-8 inline-block">
            Contact →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
