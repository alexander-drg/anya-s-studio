import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import brandusa from "@/assets/brandusa.webp";
import desen11 from "@/assets/desen_fractal_11.webp";
import drawing from "@/assets/desen_fractal_16-1.webp";
import { ContinuousLine } from "@/components/ContinuousLine";
import { Reveal } from "@/components/Reveal";
import {
  approachLine,
  artistStatement,
  artworks,
  conceptLine,
  myStory,
  professionalDescriptor,
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

function ConceptLine() {
  const t = useT();
  return (
    <p className="font-serif text-2xl leading-snug font-light md:text-3xl">
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
  const preview = [artworks[16], artworks[18], artworks[21], artworks[24]].filter(
    (artwork): artwork is NonNullable<typeof artwork> => Boolean(artwork),
  );

  return (
    <>
      <section className="relative -mt-[3.75rem] h-[100svh] min-h-[34rem] w-full overflow-hidden md:-mt-[4.5rem]">
        <img
          src={heroImage}
          alt="Atelier de pictură pregătit pentru lucrul pe pânze circulare"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${Math.min(scrollY * 0.1, 72)}px, 0) scale(1.07)` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--hero-overlay)]" />
        <div className="relative z-10 mx-auto flex h-full max-w-[110rem] flex-col justify-end px-6 pb-14 md:px-12 md:pb-16">
          <blockquote className="max-w-2xl font-serif text-lg leading-relaxed font-light text-hero-foreground [text-shadow:var(--hero-shadow)] md:text-2xl">
            {statementLines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </blockquote>
          <a href="#introducere" aria-label="Continuă" className="mt-8 block h-10 w-6 text-hero-foreground/70">
            <span className="mx-auto block h-10 w-px bg-current" />
          </a>
        </div>
      </section>

      <section id="introducere" className="page-shell section-space">
        <div className="grid items-start gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <img src={brandusa} alt="Portret Brîndușa Nicolescu" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-5 md:pt-4">
            <h1 className="font-serif text-3xl font-light md:text-4xl">Brîndușa</h1>
            <p className="mt-4 max-w-xl font-serif text-lg leading-relaxed font-light md:text-xl">
              Explorez diferite forme de conectare cu sine — prin creativitate, emoții, corp și
              prezență. Desenul, culoarea și atingerea sunt, pentru mine, aceeași întrebare pusă altfel.
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">{t(approachLine)}</p>
            <Link to="/despre" className="label-xs quiet-link mt-6 inline-block">Povestea mea →</Link>
          </Reveal>
          <Reveal delay={160} className="border-t border-border pt-5 md:col-span-2 md:col-start-11 md:mt-4">
            <ConceptLine />
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space-compact border-t border-border">
        <Reveal><p className="label-xs mb-7">Practici</p></Reveal>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
          <Reveal>
            <Link to="/desen-fractal" className="group block">
              <div className="img-zoom aspect-[4/3]"><img src={drawing} alt="Detaliu de Desen Fractal" loading="lazy" className="h-full w-full object-cover" /></div>
              <h2 className="mt-4 font-serif text-2xl font-light">Desen</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">Linie, culoare, emoție, proces și descoperire.</p>
              <span className="label-xs quiet-link mt-4 inline-block">Descoperă →</span>
            </Link>
          </Reveal>
          <Reveal delay={70}>
            <Link to="/galerie" className="group block">
              {preview[0] && <div className="img-zoom aspect-[4/3]"><img src={preview[0].src} alt="Lucrare Fluid Art" loading="lazy" className="h-full w-full object-cover" /></div>}
              <h2 className="mt-4 font-serif text-2xl font-light">Pânze</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">Lucrări finite, detalii și seria Fluid Art.</p>
              <span className="label-xs quiet-link mt-4 inline-block">Galerie →</span>
            </Link>
          </Reveal>
          <Reveal delay={140} className="flex flex-col border-t border-border pt-5 md:mt-0">
            <p className="label-xs">Corp · ascultare · prezență</p>
            <h2 className="mt-4 font-serif text-2xl font-light">Întâlniri</h2>
            <p className="mt-3 max-w-sm text-muted-foreground">Ședințe, ateliere și experiențe ghidate, individuale sau în grup, acolo unde informațiile sunt disponibile.</p>
            <Link to="/terapie-craniosacrala" className="label-xs quiet-link mt-auto pt-8">Întâlniri →</Link>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-5">
          <div>
            <p className="label-xs">{t(seriesInfo.title)}</p>
            <h2 className="mt-2 font-serif text-3xl font-light">Pânze</h2>
          </div>
          <Link to="/galerie" className="label-xs quiet-link">Descoperă toate pânzele →</Link>
        </Reveal>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {preview.map((artwork, index) => (
            <Reveal key={artwork.id} delay={index * 55}>
              <Link to="/galerie" className="img-zoom block aspect-square">
                <img src={artwork.src} alt="Lucrare Fluid Art, Trieste 2024" loading="lazy" className="h-full w-full object-contain" />
              </Link>
              <p className="label-xs mt-2">{artwork.title ? t(artwork.title) : t(untitledLabel)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-shell section-space-compact">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label-xs mb-4">Patru repere</p>
            <h2 className="font-serif text-3xl leading-tight font-light md:text-4xl">„A învăța să fii cu adevărat prezent.”</h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            {values.map((value, index) => (
              <Reveal key={t(value.title)} delay={index * 45}>
                <div className="grid gap-2 border-t border-border py-4 sm:grid-cols-5">
                  <h3 className="font-serif text-xl font-light sm:col-span-2">{t(value.title)}</h3>
                  <p className="text-sm text-muted-foreground sm:col-span-3">{t(value.line)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space-compact">
        <div className="grid gap-10 border-t border-border pt-6 md:grid-cols-12">
          <Reveal className="md:col-span-3"><h2 className="font-serif text-3xl font-light">Mărturii</h2></Reveal>
          <Reveal delay={80} className="md:col-span-5 md:col-start-5">
            <blockquote>
              <p className="font-serif text-xl leading-snug font-light italic md:text-2xl">
                {testimonials[0]?.quote ? t(testimonials[0].quote) : "[Mărturie de completat — text real furnizat de client]"}
              </p>
              {testimonials[0] && <footer className="label-xs mt-4">{t(testimonials[0].attribution)}</footer>}
            </blockquote>
          </Reveal>
          <Reveal delay={130} className="md:col-span-2 md:col-start-11">
            <p className="text-sm text-muted-foreground">Alte mărturii vor fi adăugate pe măsură ce textele reale sunt furnizate.</p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="img-zoom aspect-[4/3]"><img src={heroImage} alt="Atelier de pictură cu pânze circulare" loading="lazy" className="h-full w-full object-cover" /></div>
          </Reveal>
          <Reveal delay={80} className="md:col-span-3 md:col-start-7 md:pt-4">
            <h2 className="font-serif text-3xl font-light">Explorări</h2>
            <p className="mt-3 text-muted-foreground">Ateliere, experimente, procese și proiecte în desfășurare.</p>
            <Link to="/explorari" className="label-xs quiet-link mt-5 inline-block">Explorări →</Link>
          </Reveal>
          <Reveal delay={140} className="border-t border-border pt-4 md:col-span-3 md:col-start-10 md:pt-4">
            <h2 className="font-serif text-3xl font-light">Blog</h2>
            <p className="mt-3 text-muted-foreground">Însemnări despre desen, culoare, corp și prezență.</p>
            <Link to="/blog" className="label-xs quiet-link mt-5 inline-block">Citește →</Link>
          </Reveal>
        </div>
      </section>

      <section className="page-shell pb-20 pt-8 md:pb-24">
        <Reveal className="grid items-end gap-6 border-t border-border pt-6 md:grid-cols-12">
          <div className="md:col-span-7"><ConceptLine /></div>
          <div className="md:col-span-3 md:col-start-10 md:text-right">
            <Link to="/contact" className="label-xs quiet-link">Contact →</Link>
          </div>
        </Reveal>
        <ContinuousLine variant="loop" className="mt-8 h-14 w-40 text-[var(--color-sage)]" />
      </section>
    </>
  );
}