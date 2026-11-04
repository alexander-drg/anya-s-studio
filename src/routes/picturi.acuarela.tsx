import { createFileRoute } from "@tanstack/react-router";

import { ArtworkSeriesPage } from "@/components/ArtworkSeries";
import { watercolors, watercolorSeriesInfo, isPublished } from "@/content/site";

export const Route = createFileRoute("/picturi/acuarela")({
  head: () => ({
    meta: [
      { title: "Acuarelă · Brîndușa Nicolescu" },
      { name: "description", content: "Lucrări în acuarelă ale Brîndușei Nicolescu." },
      { property: "og:title", content: "Acuarelă · Brîndușa Nicolescu" },
      { property: "og:description", content: "Lucrări în acuarelă ale Brîndușei Nicolescu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const works = watercolors.filter(isPublished);

function Page() {
  return (
    <ArtworkSeriesPage
      heading={{ ro: "Acuarelă", en: "Watercolour", it: "Acquerello" }}
      series={watercolorSeriesInfo}
      works={works}
    />
  );
}
