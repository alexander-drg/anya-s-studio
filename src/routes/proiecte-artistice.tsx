import { createFileRoute, Link } from "@tanstack/react-router";

import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { useT, type Copy } from "@/lib/i18n";

export const Route = createFileRoute("/proiecte-artistice")({
  head: () => ({
    meta: [
      { title: "Proiecte artistice · Brîndușa Nicolescu" },
      {
        name: "description",
        content: "Proiecte artistice ale Brîndușei Nicolescu, artist vizual.",
      },
      { property: "og:title", content: "Proiecte artistice · Brîndușa Nicolescu" },
      {
        property: "og:description",
        content: "Proiecte artistice ale Brîndușei Nicolescu, artist vizual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProiecteArtistice,
});

const pageTitle: Copy = {
  ro: "Proiecte artistice",
  en: "Art projects",
  it: "Progetti artistici",
};

/** Sloturi pentru proiecte; conținutul real urmează să fie furnizat de clientă. */
const projectSlots = [1, 2];

function ProiecteArtistice() {
  const t = useT();
  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t(pageTitle)}
          </h1>
        </Reveal>
      </section>

      {projectSlots.map((n, i) => (
        <section
          key={n}
          className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:py-12"
        >
          <Reveal className="md:col-span-4">
            <h2 className="font-serif text-2xl font-light md:text-3xl">[Titlul proiectului]</h2>
            <p className="label-xs mt-3">[An · Loc]</p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-3 md:col-start-5">
            <p className="text-sm text-muted-foreground">
              [Descrierea proiectului; textul real urmează să fie furnizat.]
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-4 md:col-start-9">
            <Placeholder label="[Imagine proiect]" ratio={i % 2 ? "3 / 4" : "4 / 3"} />
          </Reveal>
        </section>
      ))}

      <Reveal className="border-t border-border pt-6">
        <Link to="/contact" className="label-xs quiet-link">
          Contact →
        </Link>
      </Reveal>
    </div>
  );
}
