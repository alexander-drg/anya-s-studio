import { createFileRoute } from "@tanstack/react-router";

import { ArtworkSeriesPage } from "@/components/ArtworkSeries";
import { fascinations, fascinationsSeriesInfo, isPublished } from "@/content/site";

export const Route = createFileRoute("/picturi/fascinatii")({
  head: () => ({
    meta: [
      { title: "Fascinații · Brîndușa Nicolescu" },
      { name: "description", content: "Lucrări în curs ale Brîndușei Nicolescu." },
      { property: "og:title", content: "Fascinații · Brîndușa Nicolescu" },
      { property: "og:description", content: "O formă, o culoare, un detaliu. Lucrări în curs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArtworkSeriesPage
      heading={{ ro: "Fascinații", en: "Fascinations", it: "Fascinazioni" }}
      series={fascinationsSeriesInfo}
      works={fascinations.filter(isPublished)}
      emptySlots={2}
    />
  );
}
