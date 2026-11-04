import { createFileRoute } from "@tanstack/react-router";

import { ExhibitionCategoryPage } from "@/components/ExhibitionList";

export const Route = createFileRoute("/expozitii/personale")({
  head: () => ({
    meta: [
      { title: "Expoziții personale · Brîndușa Nicolescu" },
      { name: "description", content: "Expoziții personale ale Brîndușei Nicolescu." },
      { property: "og:title", content: "Expoziții personale · Brîndușa Nicolescu" },
      { property: "og:description", content: "Expoziții personale ale Brîndușei Nicolescu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ExhibitionCategoryPage slug="personale" />,
});
