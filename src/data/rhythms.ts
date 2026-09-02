export type Stroke = "D" | "U" | "-"; // Down, Up, silencio

export interface RhythmPattern {
  id: string;
  title: string;
  timeSignature: string;
  bpm: number;
  pattern: Stroke[]; // 8 posiciones = un compás en corcheas (4/4)
  description: string;
}

export const rhythms: RhythmPattern[] = [
  {
    id: "rh-01",
    title: "Cuatro tiempos abajo",
    timeSignature: "4/4",
    bpm: 70,
    pattern: ["D", "-", "D", "-", "D", "-", "D", "-"],
    description: "El patrón más básico: un rasgueo hacia abajo por cada tiempo.",
  },
  {
    id: "rh-02",
    title: "Abajo-arriba constante",
    timeSignature: "4/4",
    bpm: 75,
    pattern: ["D", "U", "D", "U", "D", "U", "D", "U"],
    description: "Rasgueo continuo en corcheas, base de la mayoría de canciones pop/rock.",
  },
  {
    id: "rh-03",
    title: "Patrón folk clásico",
    timeSignature: "4/4",
    bpm: 80,
    pattern: ["D", "-", "D", "U", "-", "U", "D", "U"],
    description: "Muy usado en canciones acústicas. Cuenta: 1 (2) 3 4 (+) 5(y) — practica contando en voz alta.",
  },
  {
    id: "rh-04",
    title: "Reggae / offbeat",
    timeSignature: "4/4",
    bpm: 85,
    pattern: ["-", "U", "-", "U", "-", "U", "-", "U"],
    description: "Solo rasgueos hacia arriba en los tiempos débiles (contratiempos). Practica sin sonar las notas fuertes.",
  },
  {
    id: "rh-05",
    title: "Balada 3/4",
    timeSignature: "3/4",
    bpm: 65,
    pattern: ["D", "-", "D", "U", "-", "U"],
    description: "Vals sencillo: 6 posiciones en corcheas por compás de 3/4.",
  },
  {
    id: "rh-06",
    title: "Pop rock estándar",
    timeSignature: "4/4",
    bpm: 90,
    pattern: ["D", "D", "U", "-", "U", "D", "U", "-"],
    description: "Patrón muy usado en canciones de radio. Los dos primeros golpes van juntos, sin corchea de por medio.",
  },
  {
    id: "rh-07",
    title: "Sincopado balada",
    timeSignature: "4/4",
    bpm: 72,
    pattern: ["D", "-", "D", "U", "-", "U", "D", "-"],
    description: "Deja un silencio al final del compás: crea espacio antes de repetir el patrón.",
  },
  {
    id: "rh-08",
    title: "Shuffle / blues ligero",
    timeSignature: "4/4",
    bpm: 95,
    pattern: ["D", "-", "U", "D", "-", "U", "D", "U"],
    description: "Base del blues y el rock and roll temprano. Practícalo primero muy lento.",
  },
  {
    id: "rh-09",
    title: "Punk / corcheas rápidas",
    timeSignature: "4/4",
    bpm: 140,
    pattern: ["D", "D", "D", "D", "D", "D", "D", "D"],
    description: "Todo hacia abajo, sin parar. Buen ejercicio de resistencia de muñeca a tempo alto.",
  },
  {
    id: "rh-10",
    title: "Bossa nova simplificada",
    timeSignature: "4/4",
    bpm: 100,
    pattern: ["D", "-", "U", "D", "-", "U", "D", "-"],
    description: "Un patrón sincopado con sabor latino. El hueco en cada mitad del compás es lo que le da el 'balanceo'.",
  },
  {
    id: "rh-11",
    title: "Anacrusa (entrar antes del tiempo 1)",
    timeSignature: "4/4",
    bpm: 80,
    pattern: ["-", "-", "-", "-", "-", "-", "-", "U"],
    description: "Muchas canciones no empiezan justo en el tiempo 1: entran medio pulso antes. Practica ese único golpe de entrada.",
  },
  {
    id: "rh-12",
    title: "Vals con acento y silencio",
    timeSignature: "3/4",
    bpm: 70,
    pattern: ["D", "-", "U", "-", "D", "U"],
    description: "Otra variante de vals: dejar espacio en el segundo tiempo cambia totalmente la sensación.",
  },
  {
    id: "rh-13",
    title: "Balada con impulso",
    timeSignature: "4/4",
    bpm: 76,
    pattern: ["D", "-", "D", "U", "D", "-", "D", "U"],
    description: "Un patrón denso y estable, típico de baladas que necesitan sentirse 'sólidas' de principio a fin.",
  },
];
