import { createFileRoute } from "@tanstack/react-router";

import { ExhibitionCategoryBlock, ExhibitionEntry } from "@/components/ExhibitionList";
import { Reveal } from "@/components/Reveal";
import { exhibitionCategories, exhibitionsLabel, offeredWorks, offeredWorksTitle } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/expozitii/")({
  head: () => ({
    meta: [
      { title: "Expoziții alese · Brîndușa Nicolescu" },
      {
        name: "description",
        content: "Expoziția personală, expozițiile de grup și internaționale ale Brîndușei Nicolescu, plus lucrări oferite.",
      },
      { property: "og:title", content: "Expoziții alese · Brîndușa Nicolescu" },
      { property: "og:description", content: "Expoziție personală · de grup · internaționale · lucrări oferite." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Expozitii,
});

function Expozitii() {
  const t = useT();
  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">{t(exhibitionsLabel)}</h1>
        </Reveal>
      </section>
      {exhibitionCategories.map((c) => (
        <ExhibitionCategoryBlock key={c.slug} category={c} />
      ))}
      <section className="mt-10 py-6 md:max-w-3xl">
        <Reveal>
          <h2 className="label-xs mb-2">{t(offeredWorksTitle)}</h2>
          {offeredWorks.filter((e) => e.published).map((e) => (
            <ExhibitionEntry key={e.id} e={e} small />
          ))}
        </Reveal>
      </section>
    </div>
  );
}
