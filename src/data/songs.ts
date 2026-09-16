import type { Stroke } from "@/data/rhythms";

export interface SongNote {
  string: number; // 0 = 6ta (grave) .. 5 = 1ra (aguda), igual que en melodías
  fret: number;
  beats: number; // duración relativa (1 = negra)
}

/** Un bloque de la canción (verso, estribillo, puente) como lista de compases. */
export interface SongSection {
  name: string;
  bars: string[]; // un id de acorde (@/data/chords) por compás
  note?: string;
}

export interface Song {
  id: string;
  title: string;
  origin: string; // autoría/procedencia; todas son tradicionales o de dominio público
  level: 1 | 2 | 3;
  minutes: number;
  bpm: number;
  timeSignature: "4/4" | "3/4" | "6/8";
  chords: string[]; // ids de acordes usados, en el orden en que aparecen
  strumming: { label: string; pattern: Stroke[]; rhythmId?: string };
  sections: SongSection[];
  /** Riff o arpegio característico, tocable nota por nota. */
  tab?: { label: string; bpm: number; notes: SongNote[] };
  /** Si la melodía ya existe en la sección Melodías, se enlaza en vez de duplicarla. */
  melodyLink?: { label: string; href: string };
  why: string; // por qué vale la pena empezar por esta
  tips: string[];
}

// Todas las canciones de esta sección son tradicionales o de dominio público, y
// se publican solo como cifrado (acordes + ritmo) y tablatura propia: no se
// reproduce ninguna letra.
export const songs: Song[] = [
  // ===================== NIVEL 1: dos o tres acordes =====================
  {
    id: "song-la-bamba",
    title: "La Bamba",
    origin: "Son jarocho tradicional (Veracruz, México)",
    level: 1,
    minutes: 10,
    bpm: 100,
    timeSignature: "4/4",
    chords: ["c", "f", "g7"],
    strumming: {
      label: "Abajo-arriba constante",
      pattern: ["D", "U", "D", "U", "D", "U", "D", "U"],
      rhythmId: "rh-02",
    },
    sections: [
      {
        name: "Ciclo único (se repite de principio a fin)",
        bars: ["c", "f", "g7", "f"],
        note: "Toda la canción son estos 4 compases en bucle. Si los tocas, ya tocas la canción entera.",
      },
    ],
    tab: {
      label: "Riff de introducción (arpegio de cada acorde)",
      bpm: 90,
      notes: [
        { string: 1, fret: 3, beats: 1 }, // Do (5ta cuerda)
        { string: 2, fret: 2, beats: 1 }, // Mi
        { string: 3, fret: 0, beats: 1 }, // Sol
        { string: 2, fret: 2, beats: 1 }, // Mi
        { string: 2, fret: 3, beats: 1 }, // Fa (4ta cuerda)
        { string: 3, fret: 2, beats: 1 }, // La
        { string: 4, fret: 1, beats: 1 }, // Do
        { string: 3, fret: 2, beats: 1 }, // La
        { string: 0, fret: 3, beats: 1 }, // Sol (6ta cuerda)
        { string: 1, fret: 2, beats: 1 }, // Si
        { string: 2, fret: 0, beats: 1 }, // Re
        { string: 1, fret: 2, beats: 1 }, // Si
      ],
    },
    why: "Es la canción de 3 acordes más famosa del mundo y el ciclo nunca cambia: perfecta como primera canción completa.",
    tips: [
      "Practica solo el cambio C → F durante 2 minutos antes de intentar la canción entera.",
      "Si el F con cejilla aún no sale, usa la versión fácil (F sin cejilla) de la sección Acordes.",
      "Empieza a 70 BPM con el metrónomo flotante y sube de 10 en 10.",
    ],
  },
  {
    id: "song-la-cucaracha",
    title: "La Cucaracha",
    origin: "Corrido tradicional mexicano",
    level: 1,
    minutes: 8,
    bpm: 100,
    timeSignature: "4/4",
    chords: ["c", "g7"],
    strumming: {
      label: "Cuatro tiempos abajo",
      pattern: ["D", "-", "D", "-", "D", "-", "D", "-"],
      rhythmId: "rh-01",
    },
    sections: [
      { name: "Verso", bars: ["c", "c", "g7", "g7"] },
      { name: "Respuesta", bars: ["g7", "g7", "c", "c"] },
    ],
    why: "Solo dos acordes y un cambio por cada dos compases: la forma más suave de empezar a cambiar de acorde a tempo.",
    tips: [
      "C y G7 comparten el dedo 1 casi en el mismo sitio: muévelo lo mínimo posible.",
      "Cuenta '1-2-3-4' en voz alta y cambia de acorde justo en el '4' para llegar a tiempo al '1'.",
    ],
  },
  {
    id: "song-oh-susana",
    title: "Oh! Susanna",
    origin: "Stephen Foster, 1848 (dominio público)",
    level: 1,
    minutes: 10,
    bpm: 110,
    timeSignature: "4/4",
    chords: ["c", "f", "g7"],
    strumming: {
      label: "Patrón folk clásico",
      pattern: ["D", "-", "D", "U", "-", "U", "D", "U"],
      rhythmId: "rh-03",
    },
    sections: [
      { name: "Verso (se toca dos veces)", bars: ["c", "c", "g7", "c"] },
      { name: "Estribillo", bars: ["f", "f", "c", "c"] },
      { name: "Cierre del estribillo", bars: ["c", "g7", "c", "c"] },
    ],
    why: "El patrón folk clásico encaja perfecto aquí: es la canción ideal para dejar de rasguear solo hacia abajo.",
    tips: [
      "Mantén la mano derecha bajando y subiendo siempre, aunque no toques las cuerdas en los silencios.",
      "Si pierdes el patrón, vuelve a 'todo abajo' un par de vueltas y luego reintenta.",
    ],
  },
  {
    id: "song-when-saints",
    title: "When the Saints Go Marching In",
    origin: "Espiritual tradicional estadounidense",
    level: 1,
    minutes: 10,
    bpm: 108,
    timeSignature: "4/4",
    chords: ["c", "f", "g7"],
    strumming: {
      label: "Cuatro tiempos abajo",
      pattern: ["D", "-", "D", "-", "D", "-", "D", "-"],
      rhythmId: "rh-01",
    },
    sections: [
      { name: "Frase 1", bars: ["c", "c", "c", "c"] },
      { name: "Frase 2", bars: ["c", "f", "f", "c"] },
      { name: "Frase 3 (cierre)", bars: ["c", "g7", "g7", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-when-saints" },
    why: "Ya tienes la melodía en la sección Melodías: esta es tu primera oportunidad de tocarla y acompañarla con acordes.",
    tips: [
      "Primero toca la melodía, luego los acordes, y si tienes con quién, túrnense.",
      "Los 4 primeros compases son todos C: úsalos para acomodar el pulso antes del primer cambio.",
    ],
  },
  {
    id: "song-jingle-bells",
    title: "Jingle Bells",
    origin: "James Lord Pierpont, 1857 (dominio público)",
    level: 1,
    minutes: 10,
    bpm: 120,
    timeSignature: "4/4",
    chords: ["c", "f", "g7"],
    strumming: {
      label: "Abajo-arriba constante",
      pattern: ["D", "U", "D", "U", "D", "U", "D", "U"],
      rhythmId: "rh-02",
    },
    sections: [
      { name: "Estribillo, frase 1", bars: ["c", "c", "c", "c"] },
      { name: "Estribillo, frase 2", bars: ["f", "f", "c", "c"] },
      { name: "Estribillo, frase 3", bars: ["g7", "g7", "c", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-jingle-bells" },
    why: "Todo el mundo la reconoce al primer compás: es la que mejor funciona para tocarle a alguien cuando llevas pocas semanas.",
    tips: [
      "A 120 BPM el rasgueo continuo cansa: relaja la muñeca y baja el tempo si se tensa.",
      "Mismos 3 acordes que 'Oh! Susanna' y 'When the Saints': ya llevas 3 canciones con los mismos dedos.",
    ],
  },
  {
    id: "song-cumpleanos",
    title: "Cumpleaños feliz",
    origin: "Melodía tradicional (Hill, 1893; hoy de dominio público)",
    level: 1,
    minutes: 8,
    bpm: 100,
    timeSignature: "3/4",
    chords: ["c", "g7", "f"],
    strumming: {
      label: "Balada 3/4",
      pattern: ["D", "-", "D", "U", "-", "U"],
      rhythmId: "rh-05",
    },
    sections: [
      { name: "Primera mitad", bars: ["c", "g7", "g7", "c"] },
      { name: "Segunda mitad", bars: ["c", "f", "g7", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-cumpleanos-feliz" },
    why: "La canción más útil del planeta: en algún cumpleaños te la van a pedir, y son 8 compases en 3/4.",
    tips: [
      "Es en 3/4: cuenta '1-2-3' y no '1-2-3-4'.",
      "La canción entra antes del tiempo 1 (anacrusa): practica el ejercicio de anacrusa en Ritmos.",
    ],
  },

  // ===================== NIVEL 2: cuatro acordes y vals =====================
  {
    id: "song-cielito-lindo",
    title: "Cielito Lindo",
    origin: "Quirino Mendoza y Cortés, 1882 (dominio público)",
    level: 2,
    minutes: 12,
    bpm: 120,
    timeSignature: "3/4",
    chords: ["c", "g7"],
    strumming: {
      label: "Vals con acento y silencio",
      pattern: ["D", "-", "U", "-", "D", "U"],
      rhythmId: "rh-12",
    },
    sections: [
      { name: "Verso (frase 1)", bars: ["c", "c", "g7", "g7"] },
      { name: "Verso (frase 2)", bars: ["g7", "g7", "c", "c"] },
      { name: "Estribillo (frase 1)", bars: ["c", "c", "g7", "g7"] },
      { name: "Estribillo (frase 2)", bars: ["g7", "g7", "c", "c"] },
    ],
    why: "Dos acordes, pero en vals rápido: el salto de dificultad está en la mano derecha, no en la izquierda.",
    tips: [
      "Acentúa el primer golpe de cada compás: sin ese acento un vals no suena a vals.",
      "Si a 120 BPM se te enreda la mano, practícalo a 80 con el metrónomo antes.",
    ],
  },
  {
    id: "song-las-mananitas",
    title: "Las Mañanitas",
    origin: "Tradicional mexicana",
    level: 2,
    minutes: 12,
    bpm: 110,
    timeSignature: "3/4",
    chords: ["c", "g7", "f"],
    strumming: {
      label: "Balada 3/4",
      pattern: ["D", "-", "D", "U", "-", "U"],
      rhythmId: "rh-05",
    },
    sections: [
      { name: "Frase 1", bars: ["c", "g7", "g7", "c"] },
      { name: "Frase 2", bars: ["c", "f", "c", "g7"] },
      { name: "Cierre", bars: ["c", "g7", "c", "c"] },
    ],
    why: "La otra canción de cumpleaños. Con estos 3 acordes y el vals ya cubres cualquier celebración.",
    tips: [
      "Comparte acordes y compás con 'Cumpleaños feliz': practícalas seguidas, una detrás de otra.",
      "El cambio C → F es el único difícil: aíslalo y repítelo 20 veces antes de tocar la canción.",
    ],
  },
  {
    id: "song-noche-de-paz",
    title: "Noche de Paz",
    origin: "Franz Xaver Gruber, 1818 (dominio público)",
    level: 2,
    minutes: 10,
    bpm: 80,
    timeSignature: "3/4",
    chords: ["c", "g7", "f"],
    strumming: {
      label: "Vals clásico, muy suave",
      pattern: ["D", "-", "-", "D", "-", "U"],
    },
    sections: [
      { name: "Frase 1 (se repite)", bars: ["c", "c", "g7", "c"] },
      { name: "Frase 2", bars: ["f", "f", "c", "c"] },
      { name: "Frase 3", bars: ["f", "f", "c", "c"] },
      { name: "Cierre", bars: ["g7", "c", "c", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-silent-night" },
    why: "A 80 BPM tienes tiempo de sobra para cada cambio: es la mejor canción para tocar limpio en vez de rápido.",
    tips: [
      "Rasguea muy suave, casi acariciando las cuerdas: aquí el volumen bajo es parte del estilo.",
      "Deja sonar el acorde completo antes de rasguear otra vez; no llenes todos los huecos.",
    ],
  },
  {
    id: "song-michael-row",
    title: "Michael, Row the Boat Ashore",
    origin: "Espiritual tradicional estadounidense",
    level: 2,
    minutes: 12,
    bpm: 90,
    timeSignature: "4/4",
    chords: ["c", "f", "am", "g"],
    strumming: {
      label: "Patrón folk clásico",
      pattern: ["D", "-", "D", "U", "-", "U", "D", "U"],
      rhythmId: "rh-03",
    },
    sections: [
      { name: "Verso (frase 1)", bars: ["c", "f", "c", "am"] },
      { name: "Verso (frase 2)", bars: ["c", "f", "g", "c"] },
    ],
    why: "Tu primera canción con 4 acordes y con un menor: el Am le cambia el color a toda la frase.",
    tips: [
      "C → Am es casi gratis: solo mueves un dedo. Aprovecha ese cambio para respirar.",
      "Cuando fluya, cambia G por G7 y escucha cómo empuja más hacia el C final.",
    ],
  },
  {
    id: "song-amazing-grace",
    title: "Amazing Grace (Sublime Gracia)",
    origin: "Melodía tradicional 'New Britain', 1835 (dominio público)",
    level: 2,
    minutes: 12,
    bpm: 76,
    timeSignature: "3/4",
    chords: ["c", "f", "g7"],
    strumming: {
      label: "Balada 3/4",
      pattern: ["D", "-", "D", "U", "-", "U"],
      rhythmId: "rh-05",
    },
    sections: [
      { name: "Frase 1", bars: ["c", "c", "c", "f"] },
      { name: "Frase 2", bars: ["c", "c", "g7", "g7"] },
      { name: "Frase 3", bars: ["c", "c", "c", "f"] },
      { name: "Cierre", bars: ["c", "g7", "c", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-amazing-grace" },
    why: "Melodía y acordes ya están los dos en la app: es la primera donde puedes tocar el tema y luego acompañarlo.",
    tips: [
      "Empieza en el tiempo 3 del compás (anacrusa), no en el 1.",
      "A 76 BPM cada compás dura casi 2,4 segundos: úsalo para preparar el dedo del cambio con calma.",
    ],
  },
  {
    id: "song-himno-alegria",
    title: "Himno a la Alegría",
    origin: "Ludwig van Beethoven, 1824 (dominio público)",
    level: 2,
    minutes: 12,
    bpm: 96,
    timeSignature: "4/4",
    chords: ["c", "g7", "f", "am"],
    strumming: {
      label: "Cuatro tiempos abajo",
      pattern: ["D", "-", "D", "-", "D", "-", "D", "-"],
      rhythmId: "rh-01",
    },
    sections: [
      { name: "Frase A", bars: ["c", "c", "g7", "c"] },
      { name: "Frase A'", bars: ["c", "g7", "c", "c"] },
      { name: "Frase B", bars: ["c", "g7", "am", "f"] },
      { name: "Cierre", bars: ["c", "g7", "c", "c"] },
    ],
    melodyLink: { label: "Melodía completa en tablatura", href: "/melodias#mel-oda-alegria" },
    why: "Tocar la melodía ya la tenías; acompañarla con acordes es el paso que convierte un ejercicio en música.",
    tips: [
      "Armonización simplificada: sirve para acompañar, no es la partitura original de Beethoven.",
      "Toca la melodía dos veces: la primera con acordes, la segunda solo la melodía.",
    ],
  },

  // ===================== NIVEL 3: arpegios, menores y blues =====================
  {
    id: "song-house-rising-sun",
    title: "The House of the Rising Sun",
    origin: "Balada folk tradicional estadounidense",
    level: 3,
    minutes: 15,
    bpm: 72,
    timeSignature: "6/8",
    chords: ["am", "c", "d", "f", "e"],
    strumming: {
      label: "Arpegio en 6/8 (6 pulsos por compás)",
      pattern: ["D", "-", "-", "D", "-", "-"],
    },
    sections: [
      { name: "Verso (frase 1)", bars: ["am", "c", "d", "f"] },
      { name: "Verso (frase 2)", bars: ["am", "c", "e", "e"] },
      { name: "Verso (frase 3)", bars: ["am", "c", "d", "f"] },
      { name: "Cierre", bars: ["am", "e", "am", "e"] },
    ],
    tab: {
      label: "Arpegio de Am en 6/8 (mismo patrón para cada acorde)",
      bpm: 72,
      notes: [
        { string: 1, fret: 0, beats: 0.5 }, // La (5ta al aire)
        { string: 2, fret: 2, beats: 0.5 }, // Mi
        { string: 3, fret: 2, beats: 0.5 }, // La
        { string: 4, fret: 1, beats: 0.5 }, // Do
        { string: 3, fret: 2, beats: 0.5 }, // La
        { string: 2, fret: 2, beats: 0.5 }, // Mi
      ],
    },
    why: "El arpegio de guitarra más reconocible del folk. Es el puente natural entre la sección Arpegios y tocar una canción de verdad.",
    tips: [
      "6/8 se cuenta '1-2-3-4-5-6' seguido, con acento en el 1 y en el 4.",
      "Mantén el mismo movimiento de dedos en los 5 acordes: solo cambia la mano izquierda.",
      "El F es el compás complicado: si hace falta usa la versión sin cejilla.",
    ],
  },
  {
    id: "song-greensleeves",
    title: "Greensleeves",
    origin: "Melodía tradicional inglesa (s. XVI)",
    level: 3,
    minutes: 15,
    bpm: 100,
    timeSignature: "3/4",
    chords: ["am", "g", "e7", "c"],
    strumming: {
      label: "Balada 3/4",
      pattern: ["D", "-", "D", "U", "-", "U"],
      rhythmId: "rh-05",
    },
    sections: [
      { name: "Parte A", bars: ["am", "g", "am", "e7"] },
      { name: "Parte A (repite)", bars: ["am", "g", "am", "e7"] },
      { name: "Parte B", bars: ["c", "g", "am", "e7"] },
      { name: "Parte B (cierre)", bars: ["c", "g", "am", "e7"] },
    ],
    why: "Tu primera canción en tonalidad menor con un acorde de séptima que crea tensión real (E7 → Am).",
    tips: [
      "Escucha lo que hace el E7: 'pide' volver al Am. Ese tirón es el motor de toda la canción.",
      "Am → G → Am → E7 es un bucle: repítelo solo, sin contar compases, hasta que salga automático.",
    ],
  },
  {
    id: "song-scarborough-fair",
    title: "Scarborough Fair",
    origin: "Balada tradicional inglesa",
    level: 3,
    minutes: 15,
    bpm: 96,
    timeSignature: "3/4",
    chords: ["am", "c", "g", "d"],
    strumming: {
      label: "Vals con acento y silencio",
      pattern: ["D", "-", "U", "-", "D", "U"],
      rhythmId: "rh-12",
    },
    sections: [
      { name: "Frase 1", bars: ["am", "am", "g", "am"], note: "Versión simplificada: un acorde por compás." },
      { name: "Frase 2", bars: ["c", "g", "am", "am"] },
      { name: "Frase 3", bars: ["am", "c", "d", "am"] },
      { name: "Cierre", bars: ["am", "g", "am", "am"] },
    ],
    why: "Suena antigua y misteriosa con solo 4 acordes abiertos. Además el D mayor en medio de una canción menor es un cambio de color muy educativo.",
    tips: [
      "Es una versión simplificada: la original mueve los acordes dentro del compás.",
      "Prueba tocarla también con arpegio (p-i-m-a) en vez de rasgueo: cambia por completo el carácter.",
    ],
  },
  {
    id: "song-blues-12-mi",
    title: "Blues de 12 compases en Mi",
    origin: "Estructura tradicional del blues (dominio público)",
    level: 3,
    minutes: 15,
    bpm: 90,
    timeSignature: "4/4",
    chords: ["e7", "a7", "b7"],
    strumming: {
      label: "Shuffle / blues ligero",
      pattern: ["D", "-", "U", "D", "-", "U", "D", "U"],
      rhythmId: "rh-08",
    },
    sections: [
      { name: "Compases 1-4", bars: ["e7", "e7", "e7", "e7"] },
      { name: "Compases 5-8", bars: ["a7", "a7", "e7", "e7"] },
      { name: "Compases 9-12", bars: ["b7", "a7", "e7", "b7"], note: "El B7 del final es el 'turnaround': devuelve el ciclo al compás 1." },
    ],
    tab: {
      label: "Riff boogie sobre E (6ta y 5ta cuerda)",
      bpm: 90,
      notes: [
        { string: 0, fret: 0, beats: 0.5 },
        { string: 1, fret: 2, beats: 0.5 },
        { string: 0, fret: 0, beats: 0.5 },
        { string: 1, fret: 4, beats: 0.5 },
        { string: 0, fret: 0, beats: 0.5 },
        { string: 1, fret: 4, beats: 0.5 },
        { string: 0, fret: 0, beats: 0.5 },
        { string: 1, fret: 2, beats: 0.5 },
      ],
    },
    why: "No es una canción, es LA estructura: con estos 12 compases puedes improvisar, tocar con otros y usar la pentatónica que ya practicaste.",
    tips: [
      "Sobre estos 12 compases encaja la pentatónica menor de Mi (ejercicio ex-09) para improvisar.",
      "Toca el riff boogie con palm mute ligero: es el sonido clásico del acompañamiento de blues.",
      "Cuenta los 12 compases en voz alta las primeras vueltas hasta que el ciclo se sienta solo.",
    ],
  },
];

export const songLevels: { level: Song["level"]; label: string; blurb: string }[] = [
  {
    level: 1,
    label: "Nivel 1 · dos o tres acordes",
    blurb: "Cambios lentos y estructuras que se repiten. Si ya tocas C, F y G7, puedes tocarlas hoy.",
  },
  {
    level: 2,
    label: "Nivel 2 · cuatro acordes y vals",
    blurb: "Aparecen los acordes menores, el compás de 3/4 y cambios más seguidos.",
  },
  {
    level: 3,
    label: "Nivel 3 · arpegios, menores y blues",
    blurb: "Tonalidades menores, séptimas, 6/8 y la estructura de blues para improvisar.",
  },
];

/** Busca una canción por id. */
export function songById(id: string): Song | undefined {
  return songs.find((s) => s.id === id);
}

/** Número total de compases de una canción (para estimar su duración). */
export function totalBars(song: Song): number {
  return song.sections.reduce((sum, s) => sum + s.bars.length, 0);
}
