import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { exhibitionCategories, exhibitionsLabel, type Exhibition, type ExhibitionCategory } from "@/content/site";
import { useT } from "@/lib/i18n";

/** Un rând de arhivă: an → titlu → loc; link extern doar dacă există; o imagine opțională. */
export function ExhibitionEntry({ e, small = false }: { e: Exhibition; small?: boolean }) {
  const t = useT();
  return (
    <div className={`grid gap-3 border-t border-border md:grid-cols-12 ${small ? "py-5" : "py-7"}`}>
      <p className="label-xs md:col-span-2 md:pt-2">{e.year}</p>
      <div className={e.photo ? "md:col-span-5" : "md:col-span-9"}>
        <h3 className={`font-serif font-light ${small ? "text-lg md:text-xl" : "text-2xl md:text-3xl"}`}>{t(e.title)}</h3>
        {e.location && <p className="mt-2 text-sm text-muted-foreground">{t(e.location)}</p>}
        {e.text && <p className="mt-3 max-w-md text-muted-foreground">{t(e.text)}</p>}
        {e.link && (
          <a href={e.link} target="_blank" rel="noopener noreferrer" className="label-xs quiet-link mt-3 inline-block">
            {t({ ro: "Despre expoziție", en: "About the exhibition", it: "Sulla mostra" })} ↗
          </a>
        )}
      </div>
      {e.photo && (
        <div className="md:col-span-5">
          <img src={e.photo} alt={t(e.title)} loading="lazy" className="w-full object-cover" />
        </div>
      )}
    </div>
  );
}

export function ExhibitionCategoryBlock({ category }: { category: ExhibitionCategory }) {
  const t = useT();
  const entries = category.entries.filter((e) => e.published);
  return (
    <section className="py-6">
      <Reveal>
        <h2 className="label-xs mb-2">{t(category.title)}</h2>
        {entries.length === 0 ? (
          <p className="border-t border-border py-7 text-sm text-muted-foreground">[Expoziție de completat]</p>
        ) : (
          entries.map((e) => <ExhibitionEntry key={e.id} e={e} />)
        )}
      </Reveal>
    </section>
  );
}

/** Pagina unei categorii de expoziții. */
export function ExhibitionCategoryPage({ slug }: { slug: ExhibitionCategory["slug"] }) {
  const t = useT();
  const category = exhibitionCategories.find((c) => c.slug === slug)!;
  const entries = category.entries.filter((e) => e.published);

  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <Link to="/expozitii" className="label-xs quiet-link mb-3 inline-block">
            {t(exhibitionsLabel)}
          </Link>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t(category.title)}
          </h1>
        </Reveal>
      </section>
      {entries.map((e) => (
        <Reveal key={e.id}>
          <ExhibitionEntry e={e} />
        </Reveal>
      ))}
    </div>
  );
}
