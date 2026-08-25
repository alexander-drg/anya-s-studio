import type { Copy } from "@/lib/i18n";

export const ARTIST_NAME = "Brândușa Nicolescu";

export const nav: { to: string; label: Copy }[] = [
  { to: "/", label: { ro: "Acasă", en: "Home" } },
  { to: "/despre", label: { ro: "Despre", en: "About" } },
  { to: "/desen-fractal", label: { ro: "Desen Fractal", en: "Fractal Drawing" } },
  { to: "/terapie-craniosacrala", label: { ro: "Terapie Craniosacrală", en: "Craniosacral Therapy" } },
  { to: "/galerie", label: { ro: "Galerie", en: "Gallery" } },
  { to: "/contact", label: { ro: "Contact", en: "Contact" } },
];

export const contact = {
  name: ARTIST_NAME,
  locations: ["Trieste, Italia", "București, România"],
  email: "culoare@desenfractal.ro",
  phones: ["+39 388 589 3669", "+40 725 647 145"],
};

/** The four anchors, in the client's own words. */
export const values: { title: string; line: string }[] = [
  { title: "Prezență", line: "„A învăța să fii cu adevărat prezent.”" },
  { title: "Curiozitate", line: "„Mirarea copilului care încă poate descoperi.”" },
  { title: "Frumusețe", line: "Frumusețea care vine din autenticitate, nu din perfecțiune." },
  {
    title: "Echilibru",
    line: "Un echilibru viu între corp, minte, emoții și expresie creativă.",
  },
];

/** Three expressions of the same idea: presence. */
export const presenceMoments: {
  title: string;
  words: string[];
  placeholder: string;
}[] = [
  {
    title: "În fața unei picturi",
    words: ["Observare.", "Culoare.", "Emoție.", "Spațiu pentru ceea ce apare."],
    placeholder: "[Pictură]",
  },
  {
    title: "În timpul desenului fractal",
    words: ["Linie.", "Culoare.", "Curiozitate.", "Descoperire."],
    placeholder: "[Desen fractal]",
  },
  {
    title: "În timpul unei ședințe",
    words: ["Corp.", "Ascultare.", "Liniște.", "Prezență."],
    placeholder: "[Imagine ședință]",
  },
];

/**
 * Mărturii.
 * Textul real al mărturiilor urmează să fie completat de client — mai jos sunt
 * doar atribuirile anonime furnizate. NU se inventează conținut.
 */
export type Testimonial = { attribution: string; quote: string | null };

export const testimonials: Testimonial[] = [
  { attribution: "mamă a 3 copii, 40 de ani", quote: null },
  { attribution: "femeie, 29 de ani", quote: null },
  { attribution: "bărbat, 80 de ani", quote: null },
  { attribution: "femeie, 47 de ani", quote: null },
  { attribution: "femeie, 51 de ani", quote: null },
];

/** Galerie — locuri pregătite pentru imaginile reale. */
export type GalleryItem = {
  id: string;
  placeholder: string;
  category: "Desen Fractal" | "Pictură" | "Proces";
  ratio: string;
  caption?: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", placeholder: "[Desen fractal]", category: "Desen Fractal", ratio: "3 / 4" },
  { id: "g2", placeholder: "[Detaliu desen fractal]", category: "Desen Fractal", ratio: "1 / 1" },
  { id: "g3", placeholder: "[Pictură]", category: "Pictură", ratio: "4 / 3" },
  { id: "g4", placeholder: "[Proces creativ]", category: "Proces", ratio: "3 / 4" },
  { id: "g5", placeholder: "[Mâini și materiale]", category: "Proces", ratio: "4 / 3" },
  { id: "g6", placeholder: "[Desen fractal, culoare]", category: "Desen Fractal", ratio: "1 / 1" },
  { id: "g7", placeholder: "[Pictură, detaliu]", category: "Pictură", ratio: "4 / 5" },
  { id: "g8", placeholder: "[Atelier]", category: "Proces", ratio: "16 / 10" },
  { id: "g9", placeholder: "[Desen fractal, linie]", category: "Desen Fractal", ratio: "3 / 4" },
];
