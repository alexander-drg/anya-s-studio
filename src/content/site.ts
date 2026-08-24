import type { Copy } from "@/lib/i18n";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import heroArtwork from "@/assets/hero-artwork.jpg";

export const ARTIST_NAME = "[NUME ARTIST]";

export const nav: { to: string; label: Copy }[] = [
  { to: "/work", label: { ro: "Lucrări", en: "Work" } },
  { to: "/about", label: { ro: "Despre", en: "About" } },
  { to: "/fractal-drawing", label: { ro: "Desen fractal", en: "Fractal Drawing" } },
  { to: "/sessions", label: { ro: "Sesiuni", en: "Sessions" } },
  { to: "/journal", label: { ro: "Jurnal", en: "Journal" } },
  { to: "/contact", label: { ro: "Contact", en: "Contact" } },
];

export type Artwork = {
  slug: string;
  title: Copy;
  year: string;
  medium: Copy;
  dimensions: string;
  category: Copy;
  description: Copy;
  image: string;
  detail: string;
  orientation: "landscape" | "portrait" | "wide";
};

export const artworks: Artwork[] = [
  {
    slug: "linie-de-orizont",
    title: { ro: "Linie de orizont", en: "Horizon Line" },
    year: "2024",
    medium: { ro: "Acuarelă și grafit pe hârtie", en: "Watercolour and graphite on paper" },
    dimensions: "120 × 85 cm",
    category: { ro: "Picturi", en: "Paintings" },
    description: {
      ro: "O respirație lungă. Pământul și apa se ating fără să se explice.",
      en: "One long breath. Land and water touching without explanation.",
    },
    image: work1,
    detail: work3,
    orientation: "landscape",
  },
  {
    slug: "un-singur-gest",
    title: { ro: "Un singur gest", en: "A Single Gesture" },
    year: "2024",
    medium: { ro: "Ulei pe pânză", en: "Oil on canvas" },
    dimensions: "90 × 130 cm",
    category: { ro: "Picturi", en: "Paintings" },
    description: {
      ro: "Tot ce a rămas după ce am șters restul.",
      en: "Everything that remained after erasing the rest.",
    },
    image: work2,
    detail: work3,
    orientation: "portrait",
  },
  {
    slug: "textura-timpului",
    title: { ro: "Textura timpului", en: "The Texture of Time" },
    year: "2023",
    medium: { ro: "Ulei și cretă pe lemn", en: "Oil and chalk on wood" },
    dimensions: "60 × 45 cm",
    category: { ro: "Detalii", en: "Details" },
    description: {
      ro: "Un fragment privit de foarte aproape, până devine peisaj.",
      en: "A fragment seen up close, until it becomes a landscape.",
    },
    image: work3,
    detail: work1,
    orientation: "landscape",
  },
  {
    slug: "dupa-amiaza-lunga",
    title: { ro: "După-amiază lungă", en: "Long Afternoon" },
    year: "2023",
    medium: { ro: "Pigment și liant pe pânză", en: "Pigment and binder on canvas" },
    dimensions: "200 × 100 cm",
    category: { ro: "Picturi", en: "Paintings" },
    description: {
      ro: "Lumina care se retrage încet, fără grabă.",
      en: "Light withdrawing slowly, in no hurry.",
    },
    image: work4,
    detail: work3,
    orientation: "wide",
  },
  {
    slug: "cercuri-imperfecte",
    title: { ro: "Cercuri imperfecte", en: "Imperfect Circles" },
    year: "2022",
    medium: { ro: "Grafit și tuș pe hârtie de bumbac", en: "Graphite and ink on cotton paper" },
    dimensions: "70 × 100 cm",
    category: { ro: "Lucrări pe hârtie", en: "Works on paper" },
    description: {
      ro: "Am desenat același cerc până am încetat să îl corectez.",
      en: "I drew the same circle until I stopped correcting it.",
    },
    image: work5,
    detail: work3,
    orientation: "portrait",
  },
  {
    slug: "camera-de-lumina",
    title: { ro: "Cameră de lumină", en: "Room of Light" },
    year: "2025",
    medium: { ro: "Ulei pe in", en: "Oil on linen" },
    dimensions: "160 × 120 cm",
    category: { ro: "Picturi", en: "Paintings" },
    description: {
      ro: "Un spațiu în care nu se întâmplă nimic și tocmai de aceea se poate întâmpla totul.",
      en: "A space where nothing happens, and precisely for that reason everything can.",
    },
    image: heroArtwork,
    detail: work3,
    orientation: "landscape",
  },
];

export const values: { title: Copy; text: Copy }[] = [
  {
    title: { ro: "Prezență", en: "Presence" },
    text: {
      ro: "Să fim cu adevărat aici — în fața unei picturi, într-o sesiune, sau cu creionul pe hârtie.",
      en: "To be truly here — before a painting, in a session, or with a pencil on paper.",
    },
  },
  {
    title: { ro: "Curiozitate", en: "Curiosity" },
    text: {
      ro: "Nu curiozitate intelectuală, ci mirarea copilărească ce ne lasă să descoperim mai departe.",
      en: "Not intellectual curiosity, but the childlike wonder that lets us keep discovering.",
    },
  },
  {
    title: { ro: "Frumusețe", en: "Beauty" },
    text: {
      ro: "Nu frumusețea decorativă, ci cea care apare atunci când ceva este autentic.",
      en: "Not decorative beauty, but the kind that appears when something is authentic.",
    },
  },
  {
    title: { ro: "Echilibru", en: "Balance" },
    text: {
      ro: "Nu perfecțiune, ci un echilibru viu între corp, minte, emoție și expresie.",
      en: "Not perfection, but a living balance between body, mind, emotion and expression.",
    },
  },
];

export const journalEntries: { title: Copy; date: string; excerpt: Copy }[] = [
  {
    title: { ro: "Despre a începe din nou", en: "On beginning again" },
    date: "2025",
    excerpt: {
      ro: "Fiecare pânză goală cere aceeași întrebare: pot să nu știu, încă puțin?",
      en: "Every empty canvas asks the same question: can I not know, a little longer?",
    },
  },
  {
    title: { ro: "Note dintr-un atelier de iarnă", en: "Notes from a winter studio" },
    date: "2025",
    excerpt: {
      ro: "Lumina scurtă schimbă culorile. Lucrez mai încet și văd mai mult.",
      en: "Short light changes the colours. I work slower and see more.",
    },
  },
  {
    title: { ro: "Cercul care nu se închide", en: "The circle that never closes" },
    date: "2024",
    excerpt: {
      ro: "Despre desenul fractal și despre ce se întâmplă când repetăm un gest suficient de mult.",
      en: "On fractal drawing, and what happens when we repeat a gesture long enough.",
    },
  },
];
