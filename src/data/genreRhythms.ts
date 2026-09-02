import type { Stroke } from "@/data/rhythms";

export interface GenreRhythmPattern {
  id: string;
  title: string;
  timeSignature: string;
  bpm: number;
  pattern: Stroke[];
  description: string;
}

export interface GenreRhythmCategory {
  id: string;
  name: string;
  emoji: string;
  rhythms: GenreRhythmPattern[];
}

export const genreRhythms: GenreRhythmCategory[] = [
  {
    id: "rock",
    name: "Rock",
    emoji: "🎸",
    rhythms: [
      {
        id: "grh-rock-1",
        title: "Power rock 4x4",
        timeSignature: "4/4",
        bpm: 110,
        pattern: ["D", "-", "D", "-", "D", "-", "D", "-"],
        description: "Puro empuje: cuatro golpes firmes hacia abajo, uno por tiempo.",
      },
      {
        id: "grh-rock-2",
        title: "Rock clásico abajo-arriba",
        timeSignature: "4/4",
        bpm: 120,
        pattern: ["D", "U", "D", "U", "D", "U", "D", "U"],
        description: "El patrón continuo que sostiene la mayoría de canciones de rock clásico.",
      },
    ],
  },
  {
    id: "pop",
    name: "Pop",
    emoji: "🎤",
    rhythms: [
      {
        id: "grh-pop-1",
        title: "Pop estándar",
        timeSignature: "4/4",
        bpm: 96,
        pattern: ["D", "D", "U", "-", "U", "D", "U", "-"],
        description: "El patrón más escuchado en la radio: golpes dobles al inicio, luego fluido.",
      },
      {
        id: "grh-pop-2",
        title: "Pop sincopado",
        timeSignature: "4/4",
        bpm: 100,
        pattern: ["D", "-", "U", "-", "U", "D", "U", "-"],
        description: "Un pequeño hueco al principio le da aire al patrón antes de fluir hacia el final.",
      },
    ],
  },
  {
    id: "jazz",
    name: "Jazz",
    emoji: "🎷",
    rhythms: [
      {
        id: "grh-jazz-1",
        title: "Swing comping",
        timeSignature: "4/4",
        bpm: 90,
        pattern: ["D", "-", "-", "U", "-", "D", "-", "U"],
        description: "Golpes cortos y espaciados, como si acompañaras a una banda sin llenar todo el espacio.",
      },
      {
        id: "grh-jazz-2",
        title: "Jazz ballad",
        timeSignature: "4/4",
        bpm: 70,
        pattern: ["D", "-", "-", "-", "D", "-", "-", "-"],
        description: "Casi todo silencio: solo dos golpes suaves por compás. La contención es la técnica.",
      },
    ],
  },
  {
    id: "metal",
    name: "Metal",
    emoji: "🤘",
    rhythms: [
      {
        id: "grh-metal-1",
        title: "Palm mute metal",
        timeSignature: "4/4",
        bpm: 150,
        pattern: ["D", "D", "D", "D", "D", "D", "D", "D"],
        description: "Todo hacia abajo a tempo alto, siempre con palm mute. Resistencia de muñeca pura.",
      },
      {
        id: "grh-metal-2",
        title: "Metal sincopado",
        timeSignature: "4/4",
        bpm: 140,
        pattern: ["D", "-", "D", "D", "-", "D", "-", "D"],
        description: "Acentos irregulares que crean tensión rítmica, típico de riffs de metal moderno.",
      },
    ],
  },
  {
    id: "folclor",
    name: "Folclor",
    emoji: "🪕",
    rhythms: [
      {
        id: "grh-folclor-1",
        title: "Vals criollo",
        timeSignature: "3/4",
        bpm: 75,
        pattern: ["D", "-", "D", "U", "-", "U"],
        description: "El vaivén de 3 tiempos típico de valses y bambucos latinoamericanos.",
      },
      {
        id: "grh-folclor-2",
        title: "Aire andino",
        timeSignature: "4/4",
        bpm: 85,
        pattern: ["D", "-", "U", "D", "-", "U", "D", "-"],
        description: "Un patrón con 'rebote' que recuerda al folclor de los Andes.",
      },
    ],
  },
  {
    id: "clasica",
    name: "Clásica",
    emoji: "🎻",
    rhythms: [
      {
        id: "grh-clasica-1",
        title: "Rasgueo suave clásico",
        timeSignature: "4/4",
        bpm: 66,
        pattern: ["D", "-", "-", "U", "-", "-", "D", "-"],
        description: "Muy espaciado y controlado: prioriza el control dinámico sobre la velocidad.",
      },
      {
        id: "grh-clasica-2",
        title: "Vals clásico",
        timeSignature: "3/4",
        bpm: 70,
        pattern: ["D", "-", "-", "D", "-", "U"],
        description: "Un vals más contenido, con el acento claro en el primer tiempo de cada compás.",
      },
    ],
  },
  {
    id: "blues",
    name: "Blues",
    emoji: "🎺",
    rhythms: [
      {
        id: "grh-blues-1",
        title: "Shuffle blues",
        timeSignature: "4/4",
        bpm: 95,
        pattern: ["D", "-", "U", "D", "-", "U", "D", "U"],
        description: "El shuffle clásico: corcheas desiguales que le dan ese balanceo característico.",
      },
      {
        id: "grh-blues-2",
        title: "Blues lento",
        timeSignature: "4/4",
        bpm: 68,
        pattern: ["D", "-", "-", "D", "-", "-", "D", "U"],
        description: "Un blues lento y pesado, con mucho espacio entre golpes para respirar.",
      },
    ],
  },
  {
    id: "reggae",
    name: "Reggae",
    emoji: "🌴",
    rhythms: [
      {
        id: "grh-reggae-1",
        title: "Skank clásico",
        timeSignature: "4/4",
        bpm: 85,
        pattern: ["-", "U", "-", "U", "-", "U", "-", "U"],
        description: "Solo contratiempos, siempre hacia arriba. La base de todo el reggae.",
      },
      {
        id: "grh-reggae-2",
        title: "One drop",
        timeSignature: "4/4",
        bpm: 80,
        pattern: ["-", "-", "D", "-", "-", "-", "D", "-"],
        description: "El acento cae en el tiempo 3, dejando el 1 completamente vacío. Muy característico del reggae roots.",
      },
    ],
  },
  {
    id: "flamenco",
    name: "Flamenco",
    emoji: "💃",
    rhythms: [
      {
        id: "grh-flamenco-1",
        title: "Rasgueo rápido flamenco",
        timeSignature: "4/4",
        bpm: 160,
        pattern: ["D", "U", "D", "U", "D", "U", "D", "U"],
        description: "Velocidad y regularidad extrema: la base del rasgueo flamenco tradicional.",
      },
      {
        id: "grh-flamenco-2",
        title: "Compás flamenco simplificado",
        timeSignature: "3/4",
        bpm: 120,
        pattern: ["D", "-", "U", "D", "-", "U"],
        description: "Una aproximación sencilla al compás flamenco, a un tempo más vivo que un vals normal.",
      },
    ],
  },
  {
    id: "country",
    name: "Country",
    emoji: "🤠",
    rhythms: [
      {
        id: "grh-country-1",
        title: "Boom-chick",
        timeSignature: "4/4",
        bpm: 100,
        pattern: ["D", "-", "D", "U", "D", "-", "D", "U"],
        description: "Bajo y rasgueo alternados: la sensación de 'caminar' típica del country.",
      },
      {
        id: "grh-country-2",
        title: "Country shuffle",
        timeSignature: "4/4",
        bpm: 110,
        pattern: ["D", "-", "U", "D", "-", "U", "D", "-"],
        description: "Un shuffle más ligero y saltarín que el del blues, ideal para tempos rápidos.",
      },
    ],
  },
  {
    id: "punk",
    name: "Punk",
    emoji: "⚡",
    rhythms: [
      {
        id: "grh-punk-1",
        title: "Punk rápido",
        timeSignature: "4/4",
        bpm: 170,
        pattern: ["D", "D", "D", "D", "D", "D", "D", "D"],
        description: "Todo hacia abajo al máximo tempo cómodo. Directo, sin adornos.",
      },
      {
        id: "grh-punk-2",
        title: "Punk con acento",
        timeSignature: "4/4",
        bpm: 160,
        pattern: ["D", "D", "U", "D", "D", "U", "D", "U"],
        description: "Un patrón un poco más variado, pero igual de rápido y directo.",
      },
    ],
  },
];
