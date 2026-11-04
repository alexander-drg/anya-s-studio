import { createFileRoute } from "@tanstack/react-router";

import { ArtworkSeriesPage } from "@/components/ArtworkSeries";
import { graphics, graphicSeriesInfo, isPublished } from "@/content/site";

export const Route = createFileRoute("/picturi/grafica")({
  head: () => ({
    meta: [
      { title: "Grafică · Brîndușa Nicolescu" },
      { name: "description", content: "Lucrări de grafică realizate cu liner." },
      { property: "og:title", content: "Grafică · Brîndușa Nicolescu" },
      { property: "og:description", content: "Lucrări de grafică realizate cu liner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const works = graphics.filter(isPublished);

function Page() {
  return (
    <ArtworkSeriesPage
      heading={{ ro: "Grafică", en: "Graphic works", it: "Grafica" }}
      series={graphicSeriesInfo}
      works={works}
    />
  );
}
