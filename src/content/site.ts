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
export const values: { title: Copy; line: Copy }[] = [
  {
    title: { ro: "Prezență", en: "Presence" },
    line: {
      ro: "„A învăța să fii cu adevărat prezent.\"",
      en: "“Learning to be truly present.”",
    },
  },
  {
    title: { ro: "Curiozitate", en: "Curiosity" },
    line: {
      ro: "„Mirarea copilului care încă poate descoperi.\"",
      en: "“The wonder of a child who can still discover.”",
    },
  },
  {
    title: { ro: "Frumusețe", en: "Beauty" },
    line: {
      ro: "Frumusețea care vine din autenticitate, nu din perfecțiune.",
      en: "Beauty that comes from authenticity, not perfection.",
    },
  },
  {
    title: { ro: "Echilibru", en: "Balance" },
    line: {
      ro: "Un echilibru viu între corp, minte, emoții și expresie creativă.",
      en: "A living balance between body, mind, emotions, and creative expression.",
    },
  },
];

/** Three expressions of the same idea: presence. */
export const presenceMoments: {
  title: Copy;
  words: Copy[];
  placeholder: string;
}[] = [
  {
    title: { ro: "În fața unei picturi", en: "In front of a painting" },
    words: [
      { ro: "Observare.", en: "Observation." },
      { ro: "Culoare.", en: "Colour." },
      { ro: "Emoție.", en: "Emotion." },
      { ro: "Spațiu pentru ceea ce apare.", en: "Space for what arises." },
    ],
    placeholder: "[Pictură]",
  },
  {
    title: { ro: "În timpul desenului fractal", en: "During fractal drawing" },
    words: [
      { ro: "Linie.", en: "Line." },
      { ro: "Culoare.", en: "Colour." },
      { ro: "Curiozitate.", en: "Curiosity." },
      { ro: "Descoperire.", en: "Discovery." },
    ],
    placeholder: "[Desen fractal]",
  },
  {
    title: { ro: "În timpul unei ședințe", en: "During a session" },
    words: [
      { ro: "Corp.", en: "Body." },
      { ro: "Ascultare.", en: "Listening." },
      { ro: "Liniște.", en: "Stillness." },
      { ro: "Prezență.", en: "Presence." },
    ],
    placeholder: "[Imagine ședință]",
  },
];

/**
 * Mărturii.
 * Textul real al mărturiilor urmează să fie completat de client — mai jos sunt
 * doar atribuirile anonime furnizate. NU se inventează conținut.
 */
export type Testimonial = { attribution: Copy; quote: Copy | null };

export const testimonials: Testimonial[] = [
  {
    attribution: { ro: "mamă a 3 copii, 40 de ani", en: "mother of 3, 40" },
    quote: null,
  },
  {
    attribution: { ro: "femeie, 29 de ani", en: "woman, 29" },
    quote: null,
  },
  {
    attribution: { ro: "bărbat, 80 de ani", en: "man, 80" },
    quote: null,
  },
  {
    attribution: { ro: "femeie, 47 de ani", en: "woman, 47" },
    quote: null,
  },
  {
    attribution: { ro: "femeie, 51 de ani", en: "woman, 51" },
    quote: null,
  },
];

/** Galerie — locuri pregătite pentru imaginile reale. */
export type GalleryItem = {
  id: string;
  placeholder: string;
  category: Copy;
  ratio: string;
  caption?: Copy;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    placeholder: "[Desen fractal]",
    category: { ro: "Desen Fractal", en: "Fractal Drawing" },
    ratio: "3 / 4",
  },
  {
    id: "g2",
    placeholder: "[Detaliu desen fractal]",
    category: { ro: "Desen Fractal", en: "Fractal Drawing" },
    ratio: "1 / 1",
  },
  {
    id: "g3",
    placeholder: "[Pictură]",
    category: { ro: "Pictură", en: "Painting" },
    ratio: "4 / 3",
  },
  {
    id: "g4",
    placeholder: "[Proces creativ]",
    category: { ro: "Proces", en: "Process" },
    ratio: "3 / 4",
  },
  {
    id: "g5",
    placeholder: "[Mâini și materiale]",
    category: { ro: "Proces", en: "Process" },
    ratio: "4 / 3",
  },
  {
    id: "g6",
    placeholder: "[Desen fractal, culoare]",
    category: { ro: "Desen Fractal", en: "Fractal Drawing" },
    ratio: "1 / 1",
  },
  {
    id: "g7",
    placeholder: "[Pictură, detaliu]",
    category: { ro: "Pictură", en: "Painting" },
    ratio: "4 / 5",
  },
  {
    id: "g8",
    placeholder: "[Atelier]",
    category: { ro: "Proces", en: "Process" },
    ratio: "16 / 10",
  },
  {
    id: "g9",
    placeholder: "[Desen fractal, linie]",
    category: { ro: "Desen Fractal", en: "Fractal Drawing" },
    ratio: "3 / 4",
  },
];
