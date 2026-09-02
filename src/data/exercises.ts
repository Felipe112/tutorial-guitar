export interface ExampleNote {
  string: number; // 0 = 6ta .. 5 = 1ra
  fret: number;
  beats?: number;
}

export interface Exercise {
  id: string;
  title: string;
  level: "principiante" | "principiante+";
  minutes: number;
  description: string;
  steps: string[];
  relatedChords?: string[]; // ids de @/data/chords, para enlazar el diagrama
  example?: { bpm: number; notes: ExampleNote[] }; // tablatura tocable de referencia
}

export const exercises: Exercise[] = [
  {
    id: "ex-00",
    title: "Afinar la guitarra",
    level: "principiante",
    minutes: 5,
    description: "Lo primero de lo primero: una guitarra desafinada hace que todo lo demás suene mal, aunque toques perfecto.",
    steps: [
      "Afinación estándar de grave a aguda: Mi-La-Re-Sol-Si-Mi (E-A-D-G-B-E).",
      "Usa un afinador (app o físico) las primeras semanas: es más confiable que el oído sin entrenar.",
      "Truco sin afinador: el traste 5 de cada cuerda debe sonar igual que la cuerda siguiente al aire (excepto entre la 3ra y 2da, que es el traste 4).",
      "Afina antes de cada sesión de práctica, no solo cuando 'suena raro'.",
    ],
  },
  {
    id: "ex-tab",
    title: "Cómo leer una tablatura",
    level: "principiante",
    minutes: 4,
    description: "Toda esta app usa tablatura (tab). Entenderla te desbloquea el resto del sitio.",
    steps: [
      "Cada fila horizontal es una cuerda. La fila de arriba es la 1ra cuerda (más aguda), la de abajo la 6ta (más grave).",
      "Un número sobre una fila indica el traste a pisar en esa cuerda. Un '0' significa tocarla al aire.",
      "Se lee de izquierda a derecha, igual que un texto: eso es el orden en el tiempo.",
      "Pon a prueba lo aprendido en Melodías → 'Recorrido de cuerdas al aire', la tablatura más simple del sitio.",
    ],
    example: {
      bpm: 90,
      notes: [
        { string: 0, fret: 0 },
        { string: 0, fret: 1 },
        { string: 0, fret: 2 },
        { string: 0, fret: 3 },
      ],
    },
  },
  {
    id: "ex-01",
    title: "Postura y agarre de púa",
    level: "principiante",
    minutes: 5,
    description: "Antes de tocar una sola nota: cómo sentarte y sostener la púa.",
    steps: [
      "Guitarra apoyada en la pierna derecha (o izquierda si eres zurdo), cintura hacia el cuerpo.",
      "Sostén la púa entre pulgar e índice, dejando ~1cm de punta libre.",
      "Muñeca relajada, sin tensión en el hombro.",
      "Practica rasgar las 6 cuerdas al aire, abajo y arriba, 20 veces.",
    ],
  },
  {
    id: "ex-02",
    title: "Cromático 1-2-3-4",
    level: "principiante",
    minutes: 8,
    description: "Ejercicio clásico de calentamiento para independencia de dedos.",
    steps: [
      "En la cuerda 6 (Mi grave), toca trastes 1-2-3-4 con dedos 1-2-3-4.",
      "Pasa a la cuerda 5 y repite. Sigue hasta la cuerda 1.",
      "Vuelve de la cuerda 1 a la 6 en reversa (4-3-2-1).",
      "Empieza lento (40 BPM) y sube 5 BPM cada día que lo domines limpio.",
    ],
    example: {
      bpm: 60,
      notes: [
        { string: 0, fret: 1 },
        { string: 0, fret: 2 },
        { string: 0, fret: 3 },
        { string: 0, fret: 4 },
      ],
    },
  },
  {
    id: "ex-03",
    title: "Cambios entre acordes abiertos",
    level: "principiante",
    minutes: 10,
    description: "El mayor freno de un principiante: cambiar de acorde sin cortar el ritmo.",
    steps: [
      "Elige dos acordes, ej. Do mayor (C) y Sol mayor (G).",
      "Forma C, rasga 4 tiempos, cambia a G, rasga 4 tiempos.",
      "Repite 10 veces sin parar el rasgueo, aunque el cambio suene sucio al inicio.",
      "Cuando esté cómodo, prueba Em → Am, luego G → D.",
    ],
    relatedChords: ["c", "g", "em", "am", "d"],
  },
  {
    id: "ex-04",
    title: "Palm mute controlado",
    level: "principiante+",
    minutes: 6,
    description: "Apagar cuerdas con la palma para rasgueos más percusivos.",
    steps: [
      "Apoya el borde de la palma justo antes del puente, sobre las cuerdas graves.",
      "Rasga las 6 cuerdas: debe sonar apagado, no un golpe seco total.",
      "Alterna 2 compases con palm mute y 2 compases sin él.",
    ],
  },
  {
    id: "ex-05",
    title: "Legato: hammer-on y pull-off",
    level: "principiante+",
    minutes: 8,
    description: "Ligados básicos para sonar más fluido sin usar la púa en cada nota.",
    steps: [
      "Cuerda 3, traste 3 con dedo 1. Sin volver a puntear, golpea el traste 5 con dedo 3 (hammer-on).",
      "Desde el traste 5, suelta tirando levemente hacia abajo para sonar el traste 3 (pull-off).",
      "Repite 10 veces por cuerda, en cuerdas 1 a 6.",
    ],
    example: {
      bpm: 70,
      notes: [
        { string: 2, fret: 3, beats: 1 },
        { string: 2, fret: 5, beats: 1 },
      ],
    },
  },
  {
    id: "ex-06",
    title: "Cromático en reversa (4-3-2-1)",
    level: "principiante",
    minutes: 6,
    description: "El mismo ejercicio cromático pero empezando por el meñique, para no depender siempre del índice.",
    steps: [
      "En la cuerda 6, toca trastes 4-3-2-1 con dedos 4-3-2-1 (empiezas con el meñique).",
      "Pasa cuerda por cuerda hasta la 1ra, luego vuelve.",
      "Mantén cada dedo cerca del traste incluso cuando no está tocando.",
    ],
    example: {
      bpm: 60,
      notes: [
        { string: 0, fret: 4 },
        { string: 0, fret: 3 },
        { string: 0, fret: 2 },
        { string: 0, fret: 1 },
      ],
    },
  },
  {
    id: "ex-07",
    title: "Secuencia de 4 acordes (C-G-Am-Em)",
    level: "principiante+",
    minutes: 12,
    description: "La progresión más famosa de la música popular. Dominarla abre cientos de canciones.",
    steps: [
      "Practica cada acorde por separado 30 segundos antes de encadenarlos.",
      "Un compás por acorde, rasgueo simple 'abajo-abajo-abajo-abajo'.",
      "C → G → Am → Em → repetir, sin detener el metrónomo aunque el cambio salga tarde.",
      "Cuando fluya a 60 BPM, sube a 70, luego 80.",
    ],
    relatedChords: ["c", "g", "am", "em"],
  },
  {
    id: "ex-08",
    title: "Silenciar cuerdas no deseadas",
    level: "principiante+",
    minutes: 7,
    description: "Evitar que suenen cuerdas que no son parte del acorde: la diferencia entre sonar 'sucio' o 'limpio'.",
    steps: [
      "Forma el acorde C. Rasguea solo de la 5ta a la 1ra cuerda, sin tocar la 6ta.",
      "Si tu dedo pulgar puede tocar apenas la 6ta cuerda para apagarla, mejor aún.",
      "Repite con Am y D, que tampoco usan todas las cuerdas.",
    ],
    relatedChords: ["c", "am", "d"],
  },
  {
    id: "ex-09",
    title: "Pentatónica menor, patrón 1",
    level: "principiante+",
    minutes: 10,
    description: "La escala más usada en solos de rock y blues. Un solo patrón de caja te sirve en toda la guitarra.",
    steps: [
      "En la cuerda 6, toca trastes 5 y 8 (dedos 1 y 4).",
      "Cuerda 5: trastes 5 y 7. Cuerda 4: trastes 5 y 7. Cuerda 3: trastes 5 y 7.",
      "Cuerda 2: trastes 5 y 8. Cuerda 1: trastes 5 y 8.",
      "Sube y baja el patrón completo (6ta a 1ra y de vuelta) muy lento, con metrónomo.",
    ],
    example: {
      bpm: 70,
      notes: [
        { string: 0, fret: 5 },
        { string: 0, fret: 8 },
        { string: 1, fret: 5 },
        { string: 1, fret: 7 },
        { string: 2, fret: 5 },
        { string: 2, fret: 7 },
        { string: 3, fret: 5 },
        { string: 3, fret: 7 },
        { string: 4, fret: 5 },
        { string: 4, fret: 8 },
        { string: 5, fret: 5 },
        { string: 5, fret: 8 },
      ],
    },
  },
  {
    id: "ex-10",
    title: "Vibrato básico",
    level: "principiante+",
    minutes: 5,
    description: "Mover ligeramente una nota sostenida para darle expresión, típico en solos.",
    steps: [
      "Pisa el traste 7 de la cuerda 2 con el dedo 3, apoyando 1 y 2 detrás como refuerzo.",
      "Empuja y suelta la cuerda hacia el techo y el piso repetidamente, sin perder la afinación base.",
      "Empieza lento (1 movimiento por segundo) y ve acelerando.",
    ],
    example: {
      bpm: 60,
      notes: [{ string: 4, fret: 7, beats: 4 }],
    },
  },
];
