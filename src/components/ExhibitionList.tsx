import { Link } from "@tanstack/react-router";

import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { exhibitionCategories, type ExhibitionCategory } from "@/content/site";
import { useT } from "@/lib/i18n";

/** Arhiva unei categorii de expoziții: fotografie mare, titlu, loc / an, text scurt. */
export function ExhibitionCategoryPage({ slug }: { slug: ExhibitionCategory["slug"] }) {
  const t = useT();
  const category = exhibitionCategories.find((c) => c.slug === slug)!;
  const entries = category.entries.filter((e) => e.published);

  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <Link to="/expozitii" className="label-xs quiet-link mb-3 inline-block">
            {t({ ro: "Expoziții selectate", en: "Selected exhibitions", it: "Mostre selezionate" })}
          </Link>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t(category.title)}
          </h1>
        </Reveal>
      </section>

      {entries.length === 0 ? (
        <section className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="font-serif text-2xl font-light">[Titlul expoziției]</h2>
            <p className="label-xs mt-3">[Loc · An]</p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              [Text furnizat de artistă]
            </p>
          </Reveal>
          <Reveal delay={100} className="md:col-span-6 md:col-start-7">
            <Placeholder label="[Fotografie expoziție]" ratio="4 / 3" />
          </Reveal>
        </section>
      ) : (
        entries.map((e, i) => (
          <section key={e.id} className="grid gap-6 border-t border-border py-10 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <h2 className="font-serif text-2xl font-light md:text-3xl">{t(e.title)}</h2>
              {(e.location || e.year) && (
                <p className="label-xs mt-3">
                  {[e.location ? t(e.location) : null, e.year].filter(Boolean).join(" · ")}
                </p>
              )}
              {e.text && <p className="mt-4 max-w-md text-muted-foreground">{t(e.text)}</p>}
            </Reveal>
            {e.photo && (
              <Reveal delay={100} className={`md:col-span-6 ${i % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-7"}`}>
                <img src={e.photo} alt={t(e.title)} loading="lazy" className="w-full object-cover" />
              </Reveal>
            )}
          </section>
        ))
      )}
    </div>
  );
}
