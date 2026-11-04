import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { nav } from "@/content/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/expozitii/")({
  head: () => ({
    meta: [
      { title: "Expoziții selectate · Brîndușa Nicolescu" },
      {
        name: "description",
        content: "Expoziții personale, de grup și internaționale ale Brîndușei Nicolescu.",
      },
      { property: "og:title", content: "Expoziții selectate · Brîndușa Nicolescu" },
      { property: "og:description", content: "Expoziții personale · de grup · internaționale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Expozitii,
});

function Expozitii() {
  const t = useT();
  const categories = nav.find((n) => n.to === "/expozitii")?.children ?? [];
  return (
    <div className="page-shell pb-20">
      <section className="py-10 md:py-14">
        <Reveal>
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-light md:text-5xl">
            {t({ ro: "Expoziții selectate", en: "Selected exhibitions", it: "Mostre selezionate" })}
          </h1>
        </Reveal>
      </section>
      <ul>
        {categories.map((c, i) => (
          <Reveal key={c.to} delay={i * 60}>
            <li className="border-t border-border">
              <Link to={c.to} className="group flex items-baseline justify-between py-6">
                <span className="font-serif text-2xl font-light md:text-3xl">{t(c.label)}</span>
                <span className="label-xs quiet-link">→</span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
