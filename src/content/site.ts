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
import panzaClient01 from "@/assets/panza_client_01.jpeg";
import panzaClient02 from "@/assets/panza_client_02.jpeg";
import panzaClient03 from "@/assets/panza_client_03.jpeg";
import panzaClient04 from "@/assets/panza_client_04.jpeg";
import panzaClient05 from "@/assets/panza_client_05.jpeg";
import panzaClient06 from "@/assets/panza_client_06.jpeg";
import acrilicSelectat01 from "@/assets/acrilic_selectat_01.jpeg";
import acrilicSelectat02 from "@/assets/acrilic_selectat_02.jpeg";
import acrilicSelectat03 from "@/assets/acrilic_selectat_03.jpeg";
import acuarela01 from "@/assets/acuarela_01.jpeg";
import acuarela02 from "@/assets/acuarela_02.jpeg";
import acuarela03 from "@/assets/acuarela_03.jpeg";
import grafica01 from "@/assets/grafica_01.jpeg";
import grafica02 from "@/assets/grafica_02.jpeg";
import grafica03 from "@/assets/grafica_03.jpeg";
import type { Copy } from "@/lib/i18n";

/**
 * Nav = meniul public complet. Desen Fractal, Terapie craniosacrală, Explorări și Blog
 * rămân în proiect, dar nu sunt legate de nicăieri (doar trimiterile externe din Povestea mea).
 */

export type NavItem = { to: string; label: Copy; children?: { to: string; label: Copy }[] };

export const exhibitionsLabel: Copy = { ro: "Expoziții alese", en: "Chosen exhibitions", it: "Mostre scelte" };

export const nav: NavItem[] = [
  { to: "/", label: { ro: "Acasă", en: "Home", it: "Home" } },
  {
    to: "/picturi",
    label: { ro: "Picturi", en: "Paintings", it: "Dipinti" },
    children: [
      { to: "/picturi/acrilice", label: { ro: "Acrilice", en: "Acrylics", it: "Acrilici" } },
      { to: "/picturi/acuarela", label: { ro: "Acuarelă", en: "Watercolour", it: "Acquerello" } },
      { to: "/picturi/grafica", label: { ro: "Grafică", en: "Graphic works", it: "Grafica" } },
      { to: "/picturi/fascinatii", label: { ro: "Fascinații", en: "Fascinations", it: "Fascinazioni" } },
    ],
  },
  {
    to: "/expozitii",
    label: exhibitionsLabel,
    children: [
      { to: "/expozitii/personale", label: { ro: "Expoziție personală", en: "Solo exhibition", it: "Mostra personale" } },
      { to: "/expozitii/de-grup", label: { ro: "Expoziții de grup", en: "Group exhibitions", it: "Mostre collettive" } },
      { to: "/expozitii/internationale", label: { ro: "Expoziții internaționale", en: "International exhibitions", it: "Mostre internazionali" } },
    ],
  },
  { to: "/despre", label: { ro: "Povestea mea", en: "My story", it: "La mia storia" } },
  { to: "/contact", label: { ro: "Contact", en: "Contact", it: "Contatti" } },
];

/** Subsolul: fără Acasă, restul meniului. */
export const footerNav: { to: string; label: Copy }[] = [
  ...nav.slice(1),
];

/**
 * Descriptorul profesional · text provizoriu, clientul încă nu a ales formularea.
 * Rămâne un simplu șir de conținut localizat, ușor de schimbat.
 */
export const professionalDescriptor: Copy = {
  ro: "Artist vizual, terapeut craniosacral și facilitator de experiențe creative",
  en: "Visual artist, craniosacral therapist, facilitator of creative experiences",
  it: "Artista visiva, terapeuta craniosacrale, facilitatrice di esperienze creative",
};

export const ARTIST_NAME = "Brîndușa Nicolescu";

/** Cele trei registre distincte ale practicii · nu sunt aceeași practică. */
export const registers: { to: string; word: Copy; title: Copy; line: Copy }[] = [
  {
    to: "/picturi",
    word: { ro: "Culoare", en: "Colour", it: "Colore" },
    title: { ro: "Artă", en: "Art", it: "Arte" },
    line: {
      ro: "Lucrări vizuale, pictură, culoare și practică artistică.",
      en: "Visual work, painting, colour and artistic practice.",
      it: "Opere visive, pittura, colore e pratica artistica.",
    },
  },
  {
    to: "/terapie-craniosacrala",
    word: { ro: "Corp", en: "Body", it: "Corpo" },
    title: { ro: "Terapie craniosacrală", en: "Craniosacral therapy", it: "Terapia craniosacrale" },
    line: {
      ro: "Lucrul prin corp, prezență și practica craniosacrală.",
      en: "Work through the body, presence and craniosacral practice.",
      it: "Il lavoro attraverso il corpo, la presenza e la pratica craniosacrale.",
    },
  },
  {
    to: "/desen-fractal",
    word: { ro: "Creativitate", en: "Creativity", it: "Creatività" },
    title: { ro: "Experiențe creative", en: "Creative experiences", it: "Esperienze creative" },
    line: {
      ro: "Desen Fractal, ateliere și experiențe creative facilitate.",
      en: "Fractal Drawing, workshops and facilitated creative experiences.",
      it: "Disegno Frattale, laboratori ed esperienze creative facilitate.",
    },
  },
];

/** Cuvintele clientei: ce leagă cele trei registre. */
export const connectionLine: Copy = {
  ro: "„Legătura sunt eu și felul în care privesc omul: prin corp, culoare, percepție, creativitate și atenție.”",
  en: "“The connection is me, and the way I look at the human being: through body, colour, perception, creativity and attention.”",
  it: "“Il legame sono io e il modo in cui guardo l'essere umano: attraverso il corpo, il colore, la percezione, la creatività e l'attenzione.”",
};

/** Descriptorul împărțit în cele trei registre, pentru afișare pe rânduri separate. */
export const descriptorParts: Copy[] = [
  { ro: "Artist vizual", en: "Visual artist", it: "Artista visiva" },
  { ro: "Terapeut craniosacral", en: "Craniosacral therapist", it: "Terapeuta craniosacrale" },
  { ro: "Facilitator de experiențe creative", en: "Facilitator of creative experiences", it: "Facilitatrice di esperienze creative" },
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

/** Statement-ul artistic principal · cuvintele clientei, sursă de adevăr în română. */
export const artistStatement: Copy = {
  ro: "Prin culoare, linie și punct mă apropii de ceva foarte sincer din mine.\nNu prin forță și nici prin analiză, ci cu tandrețe, răbdare și libertatea de a descoperi.",
  en: "Through colour, line and dot I draw closer to something very sincere within me.\nNot through force or analysis, but with tenderness, patience and the freedom to discover.",
  it: "Attraverso colore, linea e punto mi avvicino a qualcosa di molto sincero dentro di me.\nNon con la forza e nemmeno con l'analisi, ma con tenerezza, pazienza e la libertà di scoprire.",
};

/**
 * Povestea mea · textul complet al clientei, structurat editorial.
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
 * Textul real al mărturiilor urmează să fie completat de client · mai jos sunt
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
 * Seria Fluid Art · Trieste, 2024.
 * Titlurile individuale urmează să fie furnizate de clientă; `title` rămâne
 * `null` până atunci și se afișează „[Titlul lucrării]". NU se inventează titluri.
 */
export type Artwork = {
  id: string;
  src: string;
  /** Titlul real, cu traduceri opționale. `null` = încă nefurnizat. */
  title: Copy | null;
  /** Vizibilă public pe site. `false` = păstrată în proiect, ascunsă. */
  published: boolean;
  /** Afișată pe pagina principală. Contează doar dacă `published` e `true`. */
  featured: boolean;
  /** Fotografia originală (de ex. cu ramă), păstrată pentru referință. */
  originalSrc?: string;
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
    ro: "„Mi-a fost străin, dar în acel moment l-am lăsat liber să curgă împreună cu clipa, răscolind dorurile.”",
    en: "“It was foreign to me, but in that moment I let it flow freely together with the instant, stirring up longings.”",
    it: "«Mi era estraneo, ma in quel momento l'ho lasciato libero di scorrere insieme all'attimo, risvegliando nostalgie.»",
  } as Copy,
};

export const untitledLabel: Copy = {
  ro: "[Titlul lucrării]",
  en: "[Titlul lucrării]",
  it: "[Titlul lucrării]",
};

export const artworks: Artwork[] = [
  { id: "fa-01", src: fluid01, title: null, published: false, featured: false },
  { id: "fa-02", src: acrilicSelectat01, originalSrc: fluid02, title: null, published: true, featured: true },
  { id: "fa-03", src: fluid03, title: null, published: false, featured: false },
  { id: "fa-04", src: fluid04, title: null, published: false, featured: false },
  { id: "fa-05", src: fluid05, title: null, published: false, featured: false },
  { id: "fa-06", src: fluid06, title: null, published: false, featured: false },
  { id: "fa-07", src: fluid07, title: null, published: false, featured: false },
  { id: "fa-08", src: fluid08, title: null, published: false, featured: false },
  { id: "fa-09", src: fluid09, title: null, published: false, featured: false },
  { id: "fa-10", src: fluid10, title: null, published: false, featured: false },
  { id: "fa-11", src: fluid11, title: null, published: false, featured: false },
  { id: "fa-12", src: fluid12, title: null, published: false, featured: false },
  { id: "fa-13", src: fluid13, title: null, published: false, featured: false },
  { id: "fa-14", src: fluid14, title: null, published: false, featured: false },
  { id: "fa-15", src: fluid15, title: null, published: false, featured: false },
  { id: "fa-16", src: fluid16, title: null, published: false, featured: false },
  { id: "fa-17", src: fluid17, title: null, published: false, featured: false },
  { id: "fa-18", src: fluid18, title: null, published: false, featured: false },
  { id: "fa-19", src: acrilicSelectat02, originalSrc: fluid19, title: null, published: true, featured: true },
  { id: "fa-20", src: fluid20, title: null, published: false, featured: false },
  { id: "fa-21", src: fluid21, title: null, published: false, featured: false },
  { id: "fa-22", src: acrilicSelectat03, originalSrc: fluid22, title: null, published: true, featured: true },
  { id: "fa-23", src: fluid23, title: null, published: false, featured: false },
  { id: "fa-24", src: fluid24, title: null, published: false, featured: false },
  { id: "fa-25", src: fluid25, title: null, published: false, featured: false },
  { id: "fa-26", src: fluid26, title: null, published: false, featured: false },
  { id: "fa-27", src: fluid27, title: null, published: false, featured: false },
  { id: "fa-28", src: fluid28, title: null, published: false, featured: false },
  { id: "fa-29", src: fluid29, title: null, published: false, featured: false },
  { id: "fa-30", src: fluid30, title: null, published: false, featured: false },
];

/**
 * Acuarele · lucrări aflate astăzi în colecții private (ale unor clienți ai artistei).
 * Titlurile și detaliile (dimensiuni, ani) NU sunt furnizate; NU se inventează.
 */
export type SeriesInfo = {
  title: Copy;
  technique: Copy;
  techniqueLong: Copy;
  size?: Copy;
  place?: Copy;
  intro: Copy;
};

export const watercolorSeriesInfo: SeriesInfo = {
  title: { ro: "Acuarelă", en: "Watercolour", it: "Acquerello" } as Copy,
  technique: { ro: "Acuarelă", en: "Watercolour", it: "Acquerello" } as Copy,
  techniqueLong: {
    ro: "Acuarelă pe hârtie",
    en: "Watercolour on paper",
    it: "Acquerello su carta",
  } as Copy,
  intro: {
    ro: "„De când am întâlnit-o prima dată, m-au sedus transparența, claritatea și prospețimea ei.\nCât control, câtă apă, câtă întâmplare?”",
    en: "“From the first time I met it, I was seduced by its transparency, clarity and freshness.\nHow much control, how much water, how much chance?”",
    it: "«Da quando l'ho incontrato la prima volta, mi hanno sedotta la sua trasparenza, la sua chiarezza e la sua freschezza.\nQuanto controllo, quanta acqua, quanto caso?»",
  } as Copy,
};

export const watercolors: Artwork[] = [
  { id: "ac-01", src: acuarela01, originalSrc: panzaClient01, title: null, published: true, featured: false },
  { id: "ac-02", src: acuarela02, originalSrc: panzaClient02, title: null, published: true, featured: false },
  { id: "ac-03", src: acuarela03, originalSrc: panzaClient03, title: null, published: true, featured: false },
];

/** Grafică · lucrări cu liner / fineliner. Titluri și detalii nefurnizate; NU se inventează. */
export const graphicSeriesInfo: SeriesInfo = {
  title: { ro: "Grafică", en: "Graphic works", it: "Grafica" },
  technique: { ro: "Grafică · liner", en: "Graphic · fineliner", it: "Grafica · fineliner" },
  techniqueLong: { ro: "Grafică, liner pe hârtie", en: "Graphic work, fineliner on paper", it: "Grafica, fineliner su carta" },
  intro: {
    ro: "„O obsesie, poate. O rutină aproape obligatorie. O construcție din fire de linii, în care fiecare gest adaugă ceva, iar repetiția deschide drumuri neașteptate, infinite.”",
    en: "“An obsession, perhaps. An almost compulsory routine. A construction of threads of lines, in which every gesture adds something, and repetition opens unexpected, infinite paths.”",
    it: "«Un'ossessione, forse. Una routine quasi obbligatoria. Una costruzione di fili di linee, in cui ogni gesto aggiunge qualcosa e la ripetizione apre strade inaspettate, infinite.»",
  },
};

/** Fascinații · 1–2 lucrări în curs. Imaginile reale nu au fost încă furnizate; NU se inventează. */
export const fascinationsSeriesInfo: SeriesInfo = {
  title: { ro: "Fascinații", en: "Fascinations", it: "Fascinazioni" },
  technique: { ro: "Lucrare în curs", en: "Work in progress", it: "Opera in corso" },
  techniqueLong: { ro: "Lucrare în curs", en: "Work in progress", it: "Opera in corso" },
  intro: {
    ro: "„Sunt lucruri care mă atrag fără să știu imediat de ce. O formă, o culoare, un detaliu. Le privesc, mă privesc și jocul începe.”",
    en: "“There are things that draw me in without my knowing right away why. A shape, a colour, a detail. I look at them, I look at myself, and the game begins.”",
    it: "«Ci sono cose che mi attirano senza che io sappia subito perché. Una forma, un colore, un dettaglio. Le guardo, mi guardo e il gioco comincia.»",
  },
};

export const fascinations: Artwork[] = [];

export const graphics: Artwork[] = [
  { id: "gr-01", src: grafica01, originalSrc: panzaClient04, title: null, published: true, featured: false },
  { id: "gr-02", src: grafica02, originalSrc: panzaClient05, title: null, published: true, featured: false },
  { id: "gr-03", src: grafica03, originalSrc: panzaClient06, title: null, published: true, featured: false },
];

/** Colecții / Donații · conținut de la clientă (încă nefurnizat). */
export type CollectionEntry = {
  id: string;
  src?: string;
  title: Copy;
  context?: Copy;
  recipient?: Copy;
  year?: string;
  published: boolean;
};
export const collections: CollectionEntry[] = [];

/** Expoziții alese · conținut furnizat de clientă. */
export type Exhibition = {
  id: string;
  title: Copy;
  year?: string;
  location?: Copy;
  text?: Copy;
  photo?: string;
  /** Link extern, doar dacă a fost furnizat de clientă. */
  link?: string;
  published: boolean;
};
export type ExhibitionCategory = { slug: "personale" | "de-grup" | "internationale"; title: Copy; entries: Exhibition[] };
export const exhibitionCategories: ExhibitionCategory[] = [
  { slug: "personale", title: { ro: "Expoziție personală", en: "Solo exhibition", it: "Mostra personale" }, entries: [
    { id: "ex-2024-sedimenti", title: { ro: "„I sedimenti della Vita”", en: "“I sedimenti della Vita”", it: "«I sedimenti della Vita»" }, year: "2024", location: { ro: "Hilton, Trieste, Italia", en: "Hilton, Trieste, Italy", it: "Hilton, Trieste, Italia" }, link: "https://www.leviedellefoto.it/2024/07/01/i-sedimenti-della-vita-mostra-personale-di-brindusa-nicolescu-a-cura-de-le-vie-delle-foto/", published: true },
  ] },
  { slug: "de-grup", title: { ro: "Expoziții de grup", en: "Group exhibitions", it: "Mostre collettive" }, entries: [
    { id: "ex-2025-oltre", title: { ro: "„Oltre il Silenzio”", en: "“Oltre il Silenzio”", it: "«Oltre il Silenzio»" }, year: "2025", location: { ro: "Hilton, Trieste, Italia", en: "Hilton, Trieste, Italy", it: "Hilton, Trieste, Italia" }, link: "https://www.leviedellefoto.it/2025/10/26/oltre-il-silenzio-2025-evento-benefico-a-favore-del-centro-antiviolenza-goap-di-trieste/", published: true },
    { id: "ex-2025-espressioni", title: { ro: "„Espressioni a Confronto”", en: "“Espressioni a Confronto”", it: "«Espressioni a Confronto»" }, year: "2025", location: { ro: "Magazin 26, Trieste, Italia", en: "Magazin 26, Trieste, Italy", it: "Magazin 26, Trieste, Italia" }, published: true },
    { id: "ex-2026-golfo", title: { ro: "„I magici colori del nostro golfo”", en: "“I magici colori del nostro golfo”", it: "«I magici colori del nostro golfo»" }, year: "2026", location: { ro: "Sala Veruda Palazzo Costanzi, Trieste, Italia", en: "Sala Veruda Palazzo Costanzi, Trieste, Italy", it: "Sala Veruda Palazzo Costanzi, Trieste, Italia" }, link: "https://bora.la/2026/01/29/i-magici-colori-del-nostro-golfo-mostra-darte-contemporanea/", published: true },
  ] },
  { slug: "internationale", title: { ro: "Expoziții internaționale", en: "International exhibitions", it: "Mostre internazionali" }, entries: [
    { id: "ex-2026-femailart", title: { ro: "„Fe-Mail-Art”", en: "“Fe-Mail-Art”", it: "«Fe-Mail-Art»" }, year: "2026", location: { ro: "Muzeul de Artă, Constanța, România", en: "Muzeul de Artă (Art Museum), Constanța, Romania", it: "Muzeul de Artă (Museo d'Arte), Costanza, Romania" }, published: true },
  ] },
];

/** Lucrări oferite · secțiune secundară la finalul paginii Expoziții alese. */
export const offeredWorksTitle: Copy = { ro: "Lucrări oferite", en: "Donated works", it: "Opere donate" };
export const offeredWorks: Exhibition[] = [
    { id: "of-2025-attesa", title: { ro: "„Il tempo dell'attesa”", en: "“Il tempo dell'attesa”", it: "«Il tempo dell'attesa»" }, year: "2025", location: { ro: "IRCCS Burlo Garofolo, Trieste, Italia", en: "IRCCS Burlo Garofolo, Trieste, Italy", it: "IRCCS Burlo Garofolo, Trieste, Italia" }, published: true },
    { id: "of-2025-religione", title: { ro: "„La nuova religione”", en: "“La nuova religione”", it: "«La nuova religione»" }, year: "2025", location: { ro: "Accademia Cranio Sacrale, Trieste, Italia", en: "Accademia Cranio Sacrale, Trieste, Italy", it: "Accademia Cranio Sacrale, Trieste, Italia" }, published: true },
];

/** Povestea mea · linia de apartenență UAP (furnizată de clientă). */
export const uapMembership: Copy = {
  ro: "Sunt membră a Uniunii Artiștilor Plastici din România din 1997, la secția Pictură.",
  en: "I have been a member of the Union of Fine Artists of Romania (Uniunea Artiștilor Plastici din România) since 1997, in the Painting section.",
  it: "Sono membro dell'Unione degli Artisti Plastici di Romania (Uniunea Artiștilor Plastici din România) dal 1997, nella sezione Pittura.",
};

/**
 * Povestea mea · structura finală (textul integral al clientei).
 * RO este sursa de adevăr; en/it sunt traduceri fidele.
 */
export const artistPath: { heading: Copy; paragraphs: Copy[] } = {
  heading: { ro: "Parcursul meu artistic", en: "My artistic path", it: "Il mio percorso artistico" },
  paragraphs: [
    {
      ro: "Mi s-a povestit că am început să desenez de la vârsta de doi ani. Mai târziu, am urmat Liceul de Arte Plastice Nicolae Tonitza și Școala Populară de Artă, secția Canto clasic.",
      en: "I was told that I started drawing at the age of two. Later, I attended the Nicolae Tonitza Fine Arts High School and the Folk School of Arts, in the Classical Singing section.",
      it: "Mi è stato raccontato che ho iniziato a disegnare all'età di due anni. Più tardi ho frequentato il Liceo di Arti Plastiche Nicolae Tonitza e la Scuola Popolare d'Arte, sezione Canto classico.",
    },
    {
      ro: "Muzica și activitatea corală, care m-au însoțit timp de mulți ani, au adăugat o altă dimensiune sensibilității mele: ritmul, armonia, respirația și bucuria de a crea împreună.",
      en: "Music and choral singing, which accompanied me for many years, added another dimension to my sensitivity: rhythm, harmony, breath and the joy of creating together.",
      it: "La musica e l'attività corale, che mi hanno accompagnata per molti anni, hanno aggiunto un'altra dimensione alla mia sensibilità: il ritmo, l'armonia, il respiro e la gioia di creare insieme.",
    },
    {
      ro: "În 1997 am absolvit Academia de Artă din București, în care formarea artistică mi-a oferit o bază solidă pentru explorarea limbajului vizual și pentru înțelegerea procesului creativ.",
      en: "In 1997 I graduated from the Academy of Art in Bucharest, where my artistic training gave me a solid foundation for exploring visual language and for understanding the creative process.",
      it: "Nel 1997 mi sono laureata all'Accademia d'Arte di Bucarest, dove la formazione artistica mi ha dato una base solida per esplorare il linguaggio visivo e per comprendere il processo creativo.",
    },
    {
      ro: "Ulterior, experiența în design grafic mi-a deschis drumul către mediul digital, unde am continuat să explorez relația dintre formă, culoare, compoziție și mesaj. A fost o altă modalitate de a privi și construi imaginea, completând experiența mea artistică.",
      en: "Later, my experience in graphic design opened the way to the digital medium, where I continued to explore the relationship between form, colour, composition and message. It was another way of looking at and building the image, completing my artistic experience.",
      it: "In seguito, l'esperienza nel design grafico mi ha aperto la strada verso il mondo digitale, dove ho continuato a esplorare il rapporto tra forma, colore, composizione e messaggio. È stato un altro modo di guardare e costruire l'immagine, a completamento della mia esperienza artistica.",
    },
    {
      ro: "Participarea la expoziții a început încă din primii ani ai parcursului meu artistic. În 2002 am participat, în cadrul Asociației Femeilor Creatoare în Arta Plastică din România, la Expoziția Internațională de Artă București, ediția a II-a, „REMEMBER · Femei creatoare la Marea Mediterană și Marea Neagră”. În 2007 am participat la expoziția internațională de artă feminină contemporană „Poduri Europene”, organizată în cadrul aceleiași asociații.",
      en: "Taking part in exhibitions began in the very first years of my artistic path. In 2002, within the Association of Women Creators in the Fine Arts of Romania, I took part in the Bucharest International Art Exhibition, 2nd edition, „REMEMBER · Women creators at the Mediterranean and the Black Sea”. In 2007 I took part in the international exhibition of contemporary women's art „Poduri Europene” (European Bridges), organised by the same association.",
      it: "La partecipazione a mostre è iniziata fin dai primi anni del mio percorso artistico. Nel 2002 ho partecipato, nell'ambito dell'Associazione delle Donne Creatrici nelle Arti Plastiche di Romania, all'Esposizione Internazionale d'Arte di Bucarest, II edizione, „REMEMBER · Donne creatrici sul Mar Mediterraneo e sul Mar Nero”. Nel 2007 ho partecipato alla mostra internazionale d'arte femminile contemporanea „Poduri Europene” (Ponti Europei), organizzata dalla stessa associazione.",
    },
    {
      ro: "În ultimii ani m-am întors cu mai multă implicare către pictură, participând la expoziții personale și de grup în România, Slovenia și Italia.",
      en: "In recent years I have returned to painting with deeper commitment, taking part in solo and group exhibitions in Romania, Slovenia and Italy.",
      it: "Negli ultimi anni sono tornata alla pittura con maggiore coinvolgimento, partecipando a mostre personali e collettive in Romania, Slovenia e Italia.",
    },
  ],
};

export const whyIPaint: { heading: Copy; paragraphs: Copy[] } = {
  heading: { ro: "Pictez deoarece…", en: "I paint because…", it: "Dipingo perché…" },
  paragraphs: [
    {
      ro: "Pictez deoarece mă conectez la un ritm organic, fizic și interior, pe care îl simt în respirație, în pulsație și în mișcarea subtilă a corpului. Este un ritm care mă readuce în prezent și îmi aduce bucurie.",
      en: "I paint because I connect with an organic rhythm, physical and inner, which I feel in my breath, in the pulse and in the subtle movement of the body. It is a rhythm that brings me back to the present and gives me joy.",
      it: "Dipingo perché mi connetto a un ritmo organico, fisico e interiore, che sento nel respiro, nella pulsazione e nel movimento sottile del corpo. È un ritmo che mi riporta al presente e mi dà gioia.",
    },
    {
      ro: "În pictură mă pot întâlni cu părți din mine pe care încă nu le cunosc. Unele îmi sunt familiare și plăcute, altele mă surprind sau mă provoacă. Le pot descoperi fără să trebuiască să le explic imediat.",
      en: "In painting I can meet parts of myself I do not yet know. Some are familiar and pleasant; others surprise me or challenge me. I can discover them without having to explain them right away.",
      it: "Nella pittura posso incontrare parti di me che non conosco ancora. Alcune mi sono familiari e piacevoli, altre mi sorprendono o mi mettono alla prova. Posso scoprirle senza doverle spiegare subito.",
    },
    {
      ro: "Prin culoare, linie și punct mă apropii de ceva foarte sincer din mine. Nu prin forță și nici prin analiză, ci cu tandrețe, răbdare și libertatea de a descoperi.",
      en: "Through colour, line and point I come close to something very sincere in me. Not through force, nor through analysis, but with tenderness, patience and the freedom to discover.",
      it: "Attraverso il colore, la linea e il punto mi avvicino a qualcosa di molto sincero in me. Non con la forza e nemmeno con l'analisi, ma con tenerezza, pazienza e la libertà di scoprire.",
    },
  ],
};

/** Trimiteri externe de la finalul paginii Povestea mea. */
export const externalWork: [{ label: Copy; href: string }, { label: Copy; href: string }] = [
  {
    label: {
      ro: "Descoperă activitatea mea în terapia Craniosacrală",
      en: "Discover my work in Craniosacral therapy",
      it: "Scopri la mia attività nella terapia Craniosacrale",
    },
    href: "https://www.iahp.com/brindusa-nicolescu",
  },
  {
    label: {
      ro: "Explorează atelierele de Desen Fractal",
      en: "Explore the Fractal Drawing workshops",
      it: "Esplora i laboratori di Disegno Frattale",
    },
    href: "https://www.desenfractal.ro",
  },
];

/** Ordinea de afișare a lucrărilor publicate (ordinea trimisă de clientă). Restul urmează ordinea din listă. */
export const artworkOrder = ["fa-19", "fa-02", "fa-22"];
const orderIndex = (a: Artwork) => {
  const i = artworkOrder.indexOf(a.id);
  return i === -1 ? artworkOrder.length : i;
};
export const sortArtworks = (list: Artwork[]) =>
  [...list].sort((a, b) => orderIndex(a) - orderIndex(b));

/** Doar lucrările publicate apar pe site. */
export const isPublished = (a: Artwork) => a.published;
/** Lucrările de pe pagina principală: publicate și marcate featured. */
export const isFeatured = (a: Artwork) => a.published && a.featured;
