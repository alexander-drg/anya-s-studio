import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroArtwork from "@/assets/hero-artwork.jpg";
import portrait from "@/assets/portrait.jpg";
import process1 from "@/assets/process-1.jpg";
import process2 from "@/assets/process-2.jpg";
import process3 from "@/assets/process-3.jpg";
import fractal1 from "@/assets/fractal-1.jpg";
import sessionsImg from "@/assets/sessions.jpg";
import { Reveal } from "@/components/Reveal";
import {
  BalanceMark,
  DotsMark,
  HandLine,
  ImperfectCircle,
  LeafMark,
  SpiralMark,
} from "@/components/Marks";
import { artworks, values } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[NUME ARTIST] — Artă, prezență și descoperire" },
      {
        name: "description",
        content:
          "Practica artistică a lui [NUME ARTIST]: picturi, desen fractal și sesiuni creative despre prezență, curiozitate, frumusețe și echilibru.",
      },
      { property: "og:title", content: "[NUME ARTIST] — Artă, prezență și descoperire" },
      {
        property: "og:description",
        content: "Un spațiu pentru artă, prezență și descoperire.",
      },
    ],
  }),
  component: Home,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Home() {
  const t = useT();
  const scrollY = useParallax();
  const selected = artworks.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden md:h-[92vh]">
        <img
          src={heroArtwork}
          alt="Pictură abstractă de mari dimensiuni într-o galerie luminoasă"
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${scrollY * 0.12}px, 0) scale(1.06)` }}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-12 md:pb-16">
          <h1 className="max-w-3xl font-serif text-[2.6rem] leading-[1.05] font-light text-foreground md:text-[4.2rem]">
            {t({
              ro: "Arta ca mod de a fi prezent.",
              en: "Art as a way of being present.",
            })}
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-[110rem] px-6 py-28 md:px-12 md:py-44">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label-xs">
              {t({ ro: "Practica", en: "Practice" })}
            </p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8 md:col-start-5">
            <p className="font-serif text-[1.7rem] leading-[1.4] font-light md:text-[2.4rem]">
              {t({
                ro: "Lucrez la granița dintre creativitate, prezență și curiozitate — căutând acel echilibru viu dintre corp, minte și expresie. Nu caut imagini perfecte, ci momente în care ceva devine adevărat.",
                en: "I work at the edge between creativity, presence and curiosity — looking for that living balance between body, mind and expression. Not for perfect images, but for moments when something becomes true.",
              })}
            </p>
            <span className="hand mt-8 inline-block text-2xl">
              {t({ ro: "încet, cu atenție", en: "slowly, with attention" })}
            </span>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl font-light md:text-5xl">
            {t({ ro: "Lucrări selectate", en: "Selected work" })}
          </h2>
          <Link to="/work" className="label-xs quiet-link hover:text-foreground">
            {t({ ro: "Toate lucrările", en: "All work" })}
          </Link>
        </Reveal>

        <div className="grid gap-x-10 gap-y-24 md:grid-cols-12">
          <WorkTile item={selected[0]} className="md:col-span-7" />
          <WorkTile item={selected[1]} className="md:col-span-4 md:col-start-9 md:mt-40" />
          <WorkTile item={selected[2]} className="md:col-span-5 md:col-start-2" />
          <WorkTile item={selected[4]} className="md:col-span-4 md:col-start-8 md:mt-24" />
        </div>

        <Reveal className="mt-28">
          <WorkTile item={selected[3]} full />
        </Reveal>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[110rem] px-6 py-32 md:px-12 md:py-48">
        <Reveal>
          <p className="label-xs mb-16">{t({ ro: "Patru repere", en: "Four anchors" })}</p>
        </Reveal>
        <div className="space-y-20 md:space-y-28">
          {values.map((v, i) => {
            const Mark = [ImperfectCircle, SpiralMark, LeafMark, BalanceMark][i];
            return (
              <Reveal key={v.title.ro} delay={i * 80}>
                <div
                  className="grid items-baseline gap-6 border-t border-border pt-8 md:grid-cols-12"
                  style={{ marginLeft: `${i % 2 === 0 ? 0 : 8}%` }}
                >
                  <div className="md:col-span-1">
                    <Mark className="h-8 w-8 text-[var(--color-sage)]" />
                  </div>
                  <h3 className="font-serif text-4xl font-light md:col-span-5 md:text-6xl">
                    {t(v.title)}
                  </h3>
                  <p className="max-w-md text-muted-foreground md:col-span-5 md:col-start-8">
                    {t(v.text)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Artist / process */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5 img-zoom">
            <img
              src={portrait}
              alt="Artista în atelier, lângă pânze"
              width={1008}
              height={1312}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="md:col-span-5 md:col-start-7 md:pt-32">
            <p className="label-xs mb-8">{t({ ro: "Atelier", en: "Studio" })}</p>
            <p className="font-serif text-2xl leading-relaxed font-light md:text-3xl">
              {t({
                ro: "Mă interesează nu doar lucrarea terminată, ci și drumul până la ea: materialele, gesturile repetate, momentele în care nu știu încă ce se întâmplă.",
                en: "I am interested not only in the finished work, but in the way there: the materials, the repeated gestures, the moments when I do not yet know what is happening.",
              })}
            </p>
            <p className="mt-8 max-w-md text-muted-foreground">
              {t({
                ro: "Text de prezentare temporar. Poate fi înlocuit cu povestea reală a artistei.",
                en: "Temporary placeholder text. To be replaced with the artist's own story.",
              })}
            </p>
            <Link to="/about" className="label-xs quiet-link mt-10 inline-block hover:text-foreground">
              {t({ ro: "Despre artistă", en: "About the artist" })}
            </Link>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-12">
          {[
            { src: process1, w: 1200, h: 900, cls: "md:col-span-4" },
            { src: process2, w: 1000, h: 1250, cls: "md:col-span-3 md:mt-20" },
            { src: process3, w: 1300, h: 900, cls: "md:col-span-4 md:col-start-9" },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 100} className={`img-zoom ${p.cls}`}>
              <img
                src={p.src}
                alt="Detaliu din procesul de lucru în atelier"
                width={p.w}
                height={p.h}
                loading="lazy"
                className="w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fractal drawing */}
      <section className="mx-auto max-w-[110rem] px-6 py-32 md:px-12 md:py-48">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="label-xs mb-8">{t({ ro: "Desen fractal", en: "Fractal drawing" })}</p>
            <h2 className="font-serif text-4xl leading-tight font-light md:text-6xl">
              {t({
                ro: "Un gest repetat, până când apare o formă pe care nu ai plănuit-o.",
                en: "A repeated gesture, until a shape you never planned appears.",
              })}
            </h2>
            <p className="mt-10 max-w-md text-muted-foreground">
              {t({
                ro: "Desenul fractal face parte din practica mea ca formă de explorare: o cale de a rămâne prezentă, curioasă și atentă la ceea ce apare.",
                en: "Fractal drawing is part of my practice as a form of exploration: a way to stay present, curious and attentive to what emerges.",
              })}
            </p>
            <Link
              to="/fractal-drawing"
              className="label-xs quiet-link mt-10 inline-block hover:text-foreground"
            >
              {t({ ro: "Explorează desenul fractal", en: "Explore fractal drawing" })}
            </Link>
          </Reveal>
          <Reveal delay={140} className="img-zoom md:col-span-5 md:col-start-8">
            <img
              src={fractal1}
              alt="Desen fractal detaliat în creioane colorate"
              width={1104}
              height={1104}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Sessions */}
      <section className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal className="img-zoom">
          <img
            src={sessionsImg}
            alt="Grup mic desenând în jurul unei mese, într-un atelier cald"
            width={1500}
            height={1000}
            loading="lazy"
            className="w-full object-cover"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6 md:col-start-4">
            <h2 className="font-serif text-3xl leading-snug font-light md:text-5xl">
              {t({
                ro: "O invitație de a explora prin creație.",
                en: "An invitation to explore through making.",
              })}
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              {t({
                ro: "Sesiuni individuale și de grup, în ritm lent, fără experiență necesară.",
                en: "Individual and group sessions, at a slow pace, no experience needed.",
              })}
            </p>
            <Link to="/sessions" className="label-xs quiet-link mt-8 inline-block hover:text-foreground">
              {t({ ro: "Despre sesiuni", en: "About the sessions" })}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-[110rem] px-6 py-40 text-center md:px-12 md:py-56">
        <Reveal>
          <DotsMark className="mx-auto mb-10 h-10 w-10 text-[var(--color-terracotta)]" />
          <p className="mx-auto max-w-4xl font-serif text-3xl leading-[1.3] font-light italic md:text-5xl">
            {t({
              ro: "„Nimic nu trebuie să fie perfect ca să fie adevărat.”",
              en: "\u201cNothing needs to be perfect in order to be true.\u201d",
            })}
          </p>
          <HandLine className="mx-auto mt-12 h-3 w-40 text-border" />
        </Reveal>
      </section>
    </>
  );
}

function WorkTile({
  item,
  className = "",
  full = false,
}: {
  item: (typeof artworks)[number];
  className?: string;
  full?: boolean;
}) {
  const t = useT();
  return (
    <Reveal className={className}>
      <Link to="/work/$slug" params={{ slug: item.slug }} className="group block">
        <div className="img-zoom">
          <img
            src={item.image}
            alt={t(item.title)}
            loading="lazy"
            className={`w-full object-cover ${full ? "max-h-[80vh]" : ""}`}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-4 opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:opacity-0">
          <span className="font-serif text-xl italic">{t(item.title)}</span>
          <span className="label-xs">{item.year}</span>
          <span className="label-xs">{t(item.medium)}</span>
        </div>
      </Link>
    </Reveal>
  );
}
