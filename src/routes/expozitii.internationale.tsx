import { createFileRoute } from "@tanstack/react-router";

import { ExhibitionCategoryPage } from "@/components/ExhibitionList";

export const Route = createFileRoute("/expozitii/internationale")({
  head: () => ({
    meta: [
      { title: "Expoziții internaționale · Brîndușa Nicolescu" },
      { name: "description", content: "Expoziții internaționale la care a participat Brîndușa Nicolescu." },
      { property: "og:title", content: "Expoziții internaționale · Brîndușa Nicolescu" },
      { property: "og:description", content: "Expoziții internaționale la care a participat Brîndușa Nicolescu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ExhibitionCategoryPage slug="internationale" />,
});
