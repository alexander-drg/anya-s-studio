import type { Copy } from "@/lib/i18n";

export const ARTIST_NAME = "Brîndușa Nicolescu";

/**
 * Navigation uses personal, editorial wording rather than service labels.
 * Routes stay the same; only the visible words changed.
 */
export const nav: { to: string; label: Copy }[] = [
  { to: "/", label: { ro: "Acasă", en: "Home", it: "Home" } },
  { to: "/desen-fractal", label: { ro: "Desen", en: "Drawing", it: "Disegno" } },
  { to: "/galerie", label: { ro: "Pânze", en: "Canvases", it: "Tele" } },
  { to: "/terapie-craniosacrala", label: { ro: "Întâlniri", en: "Encounters", it: "Incontri" } },
  { to: "/explorari", label: { ro: "Explorări", en: "Explorations", it: "Esplorazioni" } },
  { to: "/despre", label: { ro: "Povestea mea", en: "My story", it: "La mia storia" } },
  { to: "/blog", label: { ro: "Blog", en: "Blog", it: "Blog" } },
  { to: "/contact", label: { ro: "Contact", en: "Contact", it: "Contatti" } },
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
    title: { ro: "Prezență", en: "Presence", it: "Presenza" },
    line: {
      ro: "„A învăța să fii cu adevărat prezent.\"",
      en: "“Learning to be truly present.”",
      it: "“Imparare a essere davvero presenti.”",
    },
  },
  {
    title: { ro: "Curiozitate", en: "Curiosity", it: "Curiosità" },
    line: {
      ro: "„Mirarea copilului care încă poate descoperi.\"",
      en: "“The wonder of a child who can still discover.”",
      it: "“Lo stupore del bambino che può ancora scoprire.”",
    },
  },
  {
    title: { ro: "Frumusețe", en: "Beauty", it: "Bellezza" },
    line: {
      ro: "Frumusețea care vine din autenticitate, nu din perfecțiune.",
      en: "Beauty that comes from authenticity, not perfection.",
      it: "La bellezza che nasce dall'autenticità, non dalla perfezione.",
    },
  },
  {
    title: { ro: "Echilibru", en: "Balance", it: "Equilibrio" },
    line: {
      ro: "Un echilibru viu între corp, minte, emoții și expresie creativă.",
      en: "A living balance between body, mind, emotions, and creative expression.",
      it: "Un equilibrio vivo tra corpo, mente, emozioni ed espressione creativa.",
    },
  },
];

/** Atmosfera atelierului — fragmente din experiența de a crea. */
export const atelierFragments: { title: Copy; line: Copy; src: string; ratio: string }[] = [
  {
    title: { ro: "Pensule", en: "Brushes", it: "Pennelli" },
    line: {
      ro: "Aliniate pe paletă, înainte de primul gest.",
      en: "Lined up on the palette, before the first gesture.",
      it: "Allineati sulla tavolozza, prima del primo gesto.",
    },
    src: atelierPensule,
    ratio: "3 / 4",
  },
  {
    title: { ro: "Culoare, aproape", en: "Colour, up close", it: "Colore, da vicino" },
    line: {
      ro: "Tuburile deschise, urmele lăsate pe masă.",
      en: "Open tubes, the traces left on the table.",
      it: "Tubetti aperti, le tracce lasciate sul tavolo.",
    },
    src: atelierTuburi,
    ratio: "4 / 3",
  },
  {
    title: { ro: "Materie", en: "Matter", it: "Materia" },
    line: {
      ro: "Straturi, relief, lumina care intră în pastă.",
      en: "Layers, relief, light entering the paint.",
      it: "Strati, rilievo, la luce che entra nella materia.",
    },
    src: atelierTextura,
    ratio: "3 / 2",
  },
];

/** Statement-ul artistic principal — cuvintele clientei, sursă de adevăr în română. */
export const artistStatement: Copy = {
  ro: "Există momente în care culoarea spune ceea ce cuvintele nu pot spune.\nExistă momente în care liniștea devine cea mai profundă formă de dialog.\nÎntâlnirea dintre cele două este viziunea mea.",
  en: "There are moments when colour says what words cannot say.\nThere are moments when silence becomes the deepest form of dialogue.\nThe meeting of the two is my vision.",
  it: "Ci sono momenti in cui il colore dice ciò che le parole non possono dire.\nCi sono momenti in cui il silenzio diventa la forma più profonda di dialogo.\nL'incontro tra i due è la mia visione.",
};

/** Linia conceptuală recurentă. ARTA / PREZENȚA primesc accent tipografic. */
export const conceptLine: { before: Copy; a: Copy; middle: Copy; b: Copy; after: Copy } = {
  before: { ro: "Unde ", en: "Where ", it: "Dove l'" },
  a: { ro: "ARTA", en: "ART", it: "ARTE" },
  middle: { ro: " întâlnește ", en: " meets ", it: " incontra la " },
  b: { ro: "PREZENȚA", en: "PRESENCE", it: "PRESENZA" },
  after: { ro: ".", en: ".", it: "." },
};

/** Explicația scurtă a demersului. */
export const approachLine: Copy = {
  ro: "Cultivarea prezenței prin artă, percepție și experiență creativă.",
  en: "Cultivating presence through art, perception and creative experience.",
  it: "Coltivare la presenza attraverso arte, percezione ed esperienza creativa.",
};


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
