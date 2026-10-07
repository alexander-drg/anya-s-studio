import fluid01 from "@/assets/fluid_01.jpeg";
import fluid02 from "@/assets/fluid_02.jpeg";
import fluid03 from "@/assets/fluid_03.jpeg";
import fluid04 from "@/assets/fluid_04.jpeg";
import fluid05 from "@/assets/fluid_05.jpeg";
import fluid06 from "@/assets/fluid_06.jpeg";
import fluid07 from "@/assets/fluid_07.jpeg";
import fluid08 from "@/assets/fluid_08.jpeg";
import fluid09 from "@/assets/fluid_09.jpeg";
import fluid10 from "@/assets/fluid_10.jpeg";
import fluid11 from "@/assets/fluid_11.jpeg";
import fluid12 from "@/assets/fluid_12.jpeg";
import fluid13 from "@/assets/fluid_13.jpeg";
import fluid14 from "@/assets/fluid_14.jpeg";
import fluid15 from "@/assets/fluid_15.jpeg";
import fluid16 from "@/assets/fluid_16.jpeg";
import fluid17 from "@/assets/fluid_17.jpeg";
import fluid18 from "@/assets/fluid_18.jpeg";
import fluid19 from "@/assets/fluid_19.jpeg";
import fluid20 from "@/assets/fluid_20.jpeg";
import fluid21 from "@/assets/fluid_21.jpeg";
import fluid22 from "@/assets/fluid_22.jpeg";
import fluid23 from "@/assets/fluid_23.jpeg";
import fluid24 from "@/assets/fluid_24.jpeg";
import fluid25 from "@/assets/fluid_25.jpeg";
import fluid26 from "@/assets/fluid_26.jpeg";
import fluid27 from "@/assets/fluid_27.jpeg";
import fluid28 from "@/assets/fluid_28.jpeg";
import fluid29 from "@/assets/fluid_29.jpeg";
import fluid30 from "@/assets/fluid_30.jpeg";
import type { Copy } from "@/lib/i18n";

/**
 * Nav = meniul principal. Pânze rămâne în afara meniului (accesibilă de pe
 * prima pagină și din subsol); Blog este retras de pe site, deocamdată.
 */
export const nav: { to: string; label: Copy }[] = [
  { to: "/", label: { ro: "Acasă", en: "Home", it: "Home" } },
  { to: "/desen-fractal", label: { ro: "Desen", en: "Drawing", it: "Disegno" } },
  { to: "/terapie-craniosacrala", label: { ro: "Întâlniri", en: "Encounters", it: "Incontri" } },
  { to: "/explorari", label: { ro: "Explorări", en: "Explorations", it: "Esplorazioni" } },
  { to: "/despre", label: { ro: "Povestea mea", en: "My story", it: "La mia storia" } },
  { to: "/contact", label: { ro: "Contact", en: "Contact", it: "Contatti" } },
];

/** Subsolul păstrează și Pânze (scoasă doar din meniul principal). */
export const footerNav: { to: string; label: Copy }[] = [
  ...nav.slice(1, 3),
  { to: "/galerie", label: { ro: "Pânze", en: "Canvases", it: "Tele" } },
  ...nav.slice(3),
];

/**
 * Descriptorul profesional — text provizoriu, clientul încă nu a ales formularea.
 * Rămâne un simplu șir de conținut localizat, ușor de schimbat.
 */
export const professionalDescriptor: Copy = {
  ro: "Artist vizual, terapeut craniosacral și facilitator de experiențe creative",
  en: "Visual artist, craniosacral therapist, facilitator of creative experiences",
  it: "Artista visiva, terapeuta craniosacrale, facilitatrice di esperienze creative",
};

export const ARTIST_NAME = "Brîndușa Nicolescu";

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

/** Statement-ul artistic principal — cuvintele clientei, sursă de adevăr în română. */
export const artistStatement: Copy = {
  ro: "Există momente în care culoarea spune ceea ce cuvintele nu pot spune.\nExistă momente în care liniștea devine cea mai profundă formă de dialog.\nÎntâlnirea dintre cele două este viziunea mea.",
  en: "There are moments when colour says what words cannot say.\nThere are moments when silence becomes the deepest form of dialogue.\nThe meeting of the two is my vision.",
  it: "Ci sono momenti in cui il colore dice ciò che le parole non possono dire.\nCi sono momenti in cui il silenzio diventa la forma più profonda di dialogo.\nL'incontro tra i due è la mia visione.",
};

/**
 * Povestea mea — textul complet al clientei, structurat editorial.
 * RO este sursa de adevărat; en/it sunt traduceri atente, nu adaptări.
 */
export const myStory: {
  opening: Copy;
  rhythm: Copy[];
  discovery: Copy[];
  visual: Copy[];
  pullQuote: Copy;
  closing: Copy;
} = {
  opening: {
    ro: "Pictez pentru că mă conectez la un ritm organic, fizic și psihic.",
    en: "I paint because I connect with an organic rhythm, physical and psychic.",
    it: "Dipingo perché mi connetto a un ritmo organico, fisico e psichico.",
  },
  rhythm: [
    {
      ro: "Îl simt ca pe un ritm profund, în care se întâlnesc respirația, pulsația și acel ritm subtil pe care îl percep în practica mea craniosacrală.",
      en: "I feel it as a deep rhythm, in which breathing, pulsation and that subtle rhythm I perceive in my craniosacral practice meet.",
      it: "Lo sento come un ritmo profondo, in cui si incontrano il respiro, la pulsazione e quel ritmo sottile che percepisco nella mia pratica craniosacrale.",
    },
    {
      ro: "Un ritm care mă aduce înapoi în corp și în prezent, cu bucurie.",
      en: "A rhythm that brings me back into my body and into the present, with joy.",
      it: "Un ritmo che mi riporta nel corpo e nel presente, con gioia.",
    },
  ],
  discovery: [
    {
      ro: "Pictez pentru că, în acest spațiu, mă pot întâlni cu părți din mine pe care încă nu le cunosc.",
      en: "I paint because, in this space, I can meet parts of myself I do not yet know.",
      it: "Dipingo perché, in questo spazio, posso incontrare parti di me che non conosco ancora.",
    },
    {
      ro: "Unele îmi sunt familiare și plăcute, altele mă surprind sau mă provoacă.",
      en: "Some are familiar and pleasant; others surprise me or challenge me.",
      it: "Alcune mi sono familiari e piacevoli, altre mi sorprendono o mi mettono alla prova.",
    },
    {
      ro: "Pictura îmi oferă posibilitatea de a le descoperi fără să trebuiască să le explic imediat.",
      en: "Painting gives me the possibility to discover them without having to explain them right away.",
      it: "La pittura mi dà la possibilità di scoprirle senza doverle spiegare subito.",
    },
  ],
  visual: [
    {
      ro: "Pictez pentru că, prin culori, linii și puncte, mă apropii de ceva foarte sincer din mine.",
      en: "I paint because, through colours, lines and points, I come close to something very sincere in me.",
      it: "Dipingo perché, attraverso colori, linee e punti, mi avvicino a qualcosa di molto sincero in me.",
    },
    {
      ro: "Nu prin forță și nici prin analiză, ci într-un mod tandru și sigur.",
      en: "Not through force, nor through analysis, but in a tender and certain way.",
      it: "Non con la forza e nemmeno con l'analisi, ma in modo tenero e sicuro.",
    },
  ],
  pullQuote: {
    ro: "Uneori, imaginea ajunge înaintea cuvintelor.",
    en: "Sometimes, the image arrives before the words.",
    it: "A volte, l'immagine arriva prima delle parole.",
  },
  closing: {
    ro: "Poate că, în fond, pictez pentru a mă întâlni cu mine însămi într-un limbaj pe care nu trebuie să-l traduc.",
    en: "Perhaps, in the end, I paint to meet myself in a language I do not need to translate.",
    it: "Forse, in fondo, dipingo per incontrare me stessa in un linguaggio che non devo tradurre.",
  },
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

/**
 * Seria Fluid Art — Trieste, 2024.
 * Titlurile individuale urmează să fie furnizate de clientă; `title` rămâne
 * `null` până atunci și se afișează „[Titlul lucrării]". NU se inventează titluri.
 */
export type Artwork = {
  id: string;
  src: string;
  /** Titlul real, cu traduceri opționale. `null` = încă nefurnizat. */
  title: Copy | null;
};

export const seriesInfo = {
  title: { ro: "Trieste, 2024", en: "Trieste, 2024", it: "Trieste, 2024" } as Copy,
  technique: { ro: "Acrilic · Fluid Art", en: "Acrylic · Fluid Art", it: "Acrilico · Fluid Art" } as Copy,
  techniqueLong: {
    ro: "Acrilic, tehnica Fluid Art",
    en: "Acrylic, Fluid Art technique",
    it: "Acrilico, tecnica Fluid Art",
  } as Copy,
  size: { ro: "50 cm", en: "50 cm", it: "50 cm" } as Copy,
  place: { ro: "Trieste, Italia · 2024", en: "Trieste, Italy · 2024", it: "Trieste, Italia · 2024" } as Copy,
  intro: {
    ro: "Lucrări în acrilic, tehnica Fluid Art, de aproximativ 50 cm, parte dintr-o expoziție din 2024, la Trieste. Fiecare poartă un titlu legat de o emoție și/sau un sentiment.",
    en: "Acrylic works in the Fluid Art technique, around 50 cm, part of a 2024 exhibition in Trieste. Each carries a title connected to an emotion and/or a feeling.",
    it: "Opere in acrilico, tecnica Fluid Art, di circa 50 cm, parte di una mostra del 2024 a Trieste. Ognuna porta un titolo legato a un'emozione e/o a un sentimento.",
  } as Copy,
};

export const untitledLabel: Copy = {
  ro: "[Titlul lucrării]",
  en: "[Titlul lucrării]",
  it: "[Titlul lucrării]",
};

export const artworks: Artwork[] = [
  { id: "fa-01", src: fluid01, title: null },
  { id: "fa-02", src: fluid02, title: null },
  { id: "fa-03", src: fluid03, title: null },
  { id: "fa-04", src: fluid04, title: null },
  { id: "fa-05", src: fluid05, title: null },
  { id: "fa-06", src: fluid06, title: null },
  { id: "fa-07", src: fluid07, title: null },
  { id: "fa-08", src: fluid08, title: null },
  { id: "fa-09", src: fluid09, title: null },
  { id: "fa-10", src: fluid10, title: null },
  { id: "fa-11", src: fluid11, title: null },
  { id: "fa-12", src: fluid12, title: null },
  { id: "fa-13", src: fluid13, title: null },
  { id: "fa-14", src: fluid14, title: null },
  { id: "fa-15", src: fluid15, title: null },
  { id: "fa-16", src: fluid16, title: null },
  { id: "fa-17", src: fluid17, title: null },
  { id: "fa-18", src: fluid18, title: null },
  { id: "fa-19", src: fluid19, title: null },
  { id: "fa-20", src: fluid20, title: null },
  { id: "fa-21", src: fluid21, title: null },
  { id: "fa-22", src: fluid22, title: null },
  { id: "fa-23", src: fluid23, title: null },
  { id: "fa-24", src: fluid24, title: null },
  { id: "fa-25", src: fluid25, title: null },
  { id: "fa-26", src: fluid26, title: null },
  { id: "fa-27", src: fluid27, title: null },
  { id: "fa-28", src: fluid28, title: null },
  { id: "fa-29", src: fluid29, title: null },
  { id: "fa-30", src: fluid30, title: null },
];
