import { createFileRoute } from "@tanstack/react-router";

import { ExhibitionCategoryPage } from "@/components/ExhibitionList";

export const Route = createFileRoute("/expozitii/de-grup")({
  head: () => ({
    meta: [
      { title: "Expoziții de grup · Brîndușa Nicolescu" },
      { name: "description", content: "Expoziții de grup la care a participat Brîndușa Nicolescu." },
      { property: "og:title", content: "Expoziții de grup · Brîndușa Nicolescu" },
      { property: "og:description", content: "Expoziții de grup la care a participat Brîndușa Nicolescu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ExhibitionCategoryPage slug="de-grup" />,
});
