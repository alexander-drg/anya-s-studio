import { createFileRoute, Link } from "@tanstack/react-router";

import { ContinuousLine } from "@/components/ContinuousLine";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Brîndușa Nicolescu" },
      {
        name: "description",
        content:
          "Însemnări despre desen, culoare, corp și prezență. Un jurnal deschis, la ritm lent, scris de Brîndușa Nicolescu.",
      },
      { property: "og:title", content: "Blog — Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Însemnări despre desen, culoare, corp și prezență.",
      },
    ],
  }),
  component: Blog,
});

/** Articolele reale urmează; structura este pregătită. */
const posts: { title: string; date: string; excerpt: string }[] = [];

function Blog() {
  return (
    <div className="mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <section className="grid gap-12 py-14 md:grid-cols-12 md:py-24">
        <Reveal className="md:col-span-6">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-[4.2rem]">
            Blog
          </h1>
          <p className="mt-8 max-w-lg font-serif text-xl leading-relaxed font-light md:text-2xl">
            Însemnări despre desen, culoare, corp și prezență. Un jurnal deschis, scris pe măsură
            ce lucrurile se așază.
          </p>
        </Reveal>
      </section>

      <Reveal>
        <ContinuousLine className="h-8 w-full text-[var(--color-terracotta)]" />
      </Reveal>

      <section className="py-20 md:py-28">
        {posts.length === 0 ? (
          <Reveal className="max-w-xl">
            <p className="label-xs">Primul text</p>
            <p className="mt-6 font-serif text-2xl leading-relaxed font-light md:text-3xl">
              Încă nu am publicat nimic aici. Când voi scrie, textele vor apărea în acest loc.
            </p>
            <Link to="/contact" className="label-xs quiet-link mt-10 inline-block">
              Scrie-mi între timp →
            </Link>
          </Reveal>
        ) : (
          <ul className="space-y-14">
            {posts.map((p) => (
              <li key={p.title} className="grid gap-4 border-t border-border pt-6 md:grid-cols-12">
                <p className="label-xs md:col-span-3">{p.date}</p>
                <div className="md:col-span-7 md:col-start-5">
                  <h2 className="font-serif text-3xl font-light">{p.title}</h2>
                  <p className="mt-4 text-muted-foreground">{p.excerpt}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
