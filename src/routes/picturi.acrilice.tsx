import { createFileRoute } from "@tanstack/react-router";

import { ArtworkSeriesPage } from "@/components/ArtworkSeries";
import { artworks, seriesInfo, isPublished, sortArtworks } from "@/content/site";

export const Route = createFileRoute("/picturi/acrilice")({
  head: () => ({
    meta: [
      { title: "Acrilice · Brîndușa Nicolescu" },
      { name: "description", content: "Picturi în acrilic, tehnica Fluid Art, Trieste 2024." },
      { property: "og:title", content: "Acrilice · Brîndușa Nicolescu" },
      { property: "og:description", content: "Picturi în acrilic, tehnica Fluid Art, Trieste 2024." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const works = sortArtworks(artworks.filter(isPublished));

function Page() {
  return (
    <ArtworkSeriesPage
      heading={{ ro: "Acrilice", en: "Acrylics", it: "Acrilici" }}
      series={seriesInfo}
      works={works}
    />
  );
}
