export interface MelodyNote {
  string: number; // 0 = 6ta (grave) .. 5 = 1ra (aguda)
  fret: number;
  beats: number; // duración relativa (1 = negra)
}

export interface Melody {
  id: string;
  title: string;
  level: "principiante" | "medio" | "avanzado";
  bpm: number;
  notes: MelodyNote[];
}

// Notas usadas en la mayoría de estas melodías, todas en primera posición
// (cuerdas 4/3ra, 5/2da y 6/1ra, trastes 0-8), con su equivalente real según
// la afinación estándar (verificado con @/lib/audio fretToNote):
//   Sol3=(3,0)  La3=(3,2)  Si3=(4,0)  Do4=(4,1)  Re4=(4,3)
//   Mi4=(5,0)   Fa4=(5,1)  Sol4=(5,3) La4=(5,5)  Do5=(5,8)

export const melodies: Melody[] = [
  // ============== PRINCIPIANTE (10) ==============
  {
    id: "mel-cuerdas-al-aire",
    title: "Recorrido de cuerdas al aire",
    level: "principiante",
    bpm: 90,
    notes: [
      { string: 0, fret: 0, beats: 1 },
      { string: 1, fret: 0, beats: 1 },
      { string: 2, fret: 0, beats: 1 },
      { string: 3, fret: 0, beats: 1 },
      { string: 4, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 0, beats: 1 },
      { string: 3, fret: 0, beats: 1 },
      { string: 2, fret: 0, beats: 1 },
      { string: 1, fret: 0, beats: 1 },
      { string: 0, fret: 0, beats: 2 },
    ],
  },
  {
    id: "mel-estrellita",
    title: "Estrellita (Twinkle Twinkle)",
    level: "principiante",
    bpm: 100,
    notes: [
      // Do Do Sol Sol La La Sol(mitad) Fa Fa Mi Mi Re Re Do(mitad)
      { string: 4, fret: 1, beats: 1 }, // Do4
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 }, // Sol4
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 }, // La4
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 2 }, // Sol4
      { string: 5, fret: 1, beats: 1 }, // Fa4
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 }, // Mi4
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re4
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 }, // Do4
    ],
  },
  {
    id: "mel-hot-cross-buns",
    title: "Panecillos Calientes (Hot Cross Buns)",
    level: "principiante",
    bpm: 90,
    notes: [
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 2 }, // Do
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-mary-lamb",
    title: "Mi Corderito (Mary Had a Little Lamb)",
    level: "principiante",
    bpm: 100,
    notes: [
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 2 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-old-macdonald",
    title: "La Granja de MacDonald",
    level: "principiante",
    bpm: 100,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 0, beats: 1 }, // Sol3
      { string: 3, fret: 2, beats: 1 }, // La3
      { string: 3, fret: 2, beats: 1 },
      { string: 3, fret: 0, beats: 2 },
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-row-row-boat",
    title: "Rema, Rema tu Bote",
    level: "principiante",
    bpm: 90,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 2 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-escala-do",
    title: "Escala de Do mayor (subida y bajada)",
    level: "principiante",
    bpm: 90,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 5, beats: 2 }, // La
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-arpegio-do-mi-sol",
    title: "Arpegio melódico Do-Mi-Sol",
    level: "principiante",
    bpm: 90,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 2 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-grados-conjuntos",
    title: "Secuencia por grados conjuntos",
    level: "principiante",
    bpm: 92,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-bienvenida",
    title: "Melodía de bienvenida",
    level: "principiante",
    bpm: 100,
    notes: [
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 2 }, // La
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },

  // ============== MEDIO (10) ==============
  {
    id: "mel-frere-jacques",
    title: "Martinillo (Frère Jacques)",
    level: "medio",
    bpm: 100,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 2 }, // Sol
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 3, beats: 0.5 },
      { string: 5, fret: 5, beats: 0.5 }, // La
      { string: 5, fret: 3, beats: 0.5 },
      { string: 5, fret: 1, beats: 0.5 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 0.5 },
      { string: 5, fret: 5, beats: 0.5 },
      { string: 5, fret: 3, beats: 0.5 },
      { string: 5, fret: 1, beats: 0.5 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 0, beats: 1 }, // Sol3 (grave)
      { string: 4, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-london-bridge",
    title: "El Puente de Londres",
    level: "medio",
    bpm: 96,
    notes: [
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 2 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 4, fret: 3, beats: 1 },
      { string: 3, fret: 0, beats: 1 }, // Sol3
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-this-old-man",
    title: "This Old Man",
    level: "medio",
    bpm: 100,
    notes: [
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 }, // Do
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 2 },
    ],
  },
  {
    id: "mel-itsy-spider",
    title: "La Araña Pequeñita",
    level: "medio",
    bpm: 100,
    notes: [
      // Climbed up the water spout
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
      // Down came the rain and washed the spider out
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      // Out came the sun and dried up all the rain
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      // And the itsy bitsy spider climbed up the spout again
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-jingle-bells",
    title: "Cascabel (Jingle Bells)",
    level: "medio",
    bpm: 108,
    notes: [
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 2 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 3, fret: 0, beats: 2 }, // Sol3
    ],
  },
  {
    id: "mel-pentatonica-do",
    title: "Escala pentatónica mayor en Do",
    level: "medio",
    bpm: 96,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 5, beats: 2 }, // La
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-saltos-terceras",
    title: "Saltos de tercera en Do mayor",
    level: "medio",
    bpm: 92,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 5, beats: 2 }, // La
    ],
  },
  {
    id: "mel-intervalos-cuartas",
    title: "Práctica de intervalos: cuartas",
    level: "medio",
    bpm: 90,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 5, beats: 2 }, // La
    ],
  },
  {
    id: "mel-arpegio-escala",
    title: "Melodía con arpegio y escala combinados",
    level: "medio",
    bpm: 94,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 2 }, // Do
    ],
  },
  {
    id: "mel-yankee-doodle",
    title: "Yankee Doodle",
    level: "medio",
    bpm: 108,
    notes: [
      // Yankee doodle went to town, riding on a pony
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 0, beats: 1 }, // Si3
      { string: 3, fret: 2, beats: 2 }, // La3
      // Stuck a feather in his hat and called it macaroni
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 0, beats: 1 },
      { string: 3, fret: 2, beats: 2 },
    ],
  },

  // ============== AVANZADO (10) ==============
  {
    id: "mel-oda-alegria",
    title: "Himno a la Alegría",
    level: "avanzado",
    bpm: 96,
    notes: [
      // Frase A
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1.5 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 4, fret: 3, beats: 2 },
      // Frase A' (variación del final)
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1.5 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 1, beats: 2 },
      // Frase B (contraste, más grave)
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 3, fret: 0, beats: 2 }, // Sol3
      // Frase A' (repite)
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 3, beats: 1.5 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-cumpleanos-feliz",
    title: "Cumpleaños Feliz",
    level: "avanzado",
    bpm: 100,
    notes: [
      { string: 4, fret: 1, beats: 0.5 }, // Do
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 2 }, // Mi
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 5, fret: 8, beats: 1 }, // Do5
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 2 },
      { string: 5, fret: 3, beats: 0.5 }, // Sol
      { string: 5, fret: 3, beats: 0.5 },
      { string: 5, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 2 },
    ],
  },
  {
    id: "mel-fur-elise",
    title: "Para Elisa (tema principal)",
    level: "avanzado",
    bpm: 100,
    notes: [
      { string: 5, fret: 0, beats: 0.5 }, // Mi
      { string: 4, fret: 3, beats: 0.5 }, // Re
      { string: 5, fret: 0, beats: 0.5 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 4, fret: 0, beats: 0.5 }, // Si3
      { string: 4, fret: 3, beats: 0.5 },
      { string: 4, fret: 1, beats: 0.5 }, // Do
      { string: 3, fret: 2, beats: 1 }, // La3
      { string: 4, fret: 1, beats: 0.5 }, // Do
      { string: 5, fret: 0, beats: 0.5 }, // Mi
      { string: 5, fret: 5, beats: 1 }, // La4
      { string: 5, fret: 0, beats: 0.5 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 5, fret: 0, beats: 0.5 },
      { string: 4, fret: 0, beats: 0.5 },
      { string: 4, fret: 3, beats: 0.5 },
      { string: 4, fret: 1, beats: 0.5 },
      { string: 3, fret: 2, beats: 2 }, // La3 (resolución final)
    ],
  },
  {
    id: "mel-silent-night",
    title: "Noche de Paz",
    level: "avanzado",
    bpm: 80,
    notes: [
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 0, beats: 3 }, // Mi
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 0, beats: 3 },
      { string: 5, fret: 8, beats: 1 }, // Do5
      { string: 5, fret: 8, beats: 1 },
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 2 },
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 3, fret: 2, beats: 2 }, // La3
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 2, beats: 2 },
    ],
  },
  {
    id: "mel-amazing-grace",
    title: "Sublime Gracia",
    level: "avanzado",
    bpm: 76,
    notes: [
      { string: 3, fret: 0, beats: 1 }, // Sol3
      { string: 4, fret: 1, beats: 2 }, // Do
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1.5 },
      { string: 4, fret: 3, beats: 0.5 }, // Re
      { string: 4, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 2, beats: 2 }, // La3
      { string: 3, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 3, fret: 2, beats: 2 },
      { string: 3, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-when-saints",
    title: "When the Saints Go Marching In",
    level: "avanzado",
    bpm: 108,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 2 }, // Sol
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 3, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
  {
    id: "mel-pop-weasel",
    title: "Pop Goes the Weasel",
    level: "avanzado",
    bpm: 112,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 8, beats: 1 }, // Do5 — el "POP" final
      { string: 5, fret: 5, beats: 2 },
    ],
  },
  {
    id: "mel-la-menor",
    title: "Melodía en La menor",
    level: "avanzado",
    bpm: 88,
    notes: [
      { string: 3, fret: 2, beats: 1 }, // La3
      { string: 4, fret: 0, beats: 1 }, // Si3
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 2 }, // Mi
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 1 },
      { string: 4, fret: 0, beats: 1 },
      { string: 3, fret: 2, beats: 2 },
    ],
  },
  {
    id: "mel-digitacion-primera-posicion",
    title: "Estudio de digitación en primera posición",
    level: "avanzado",
    bpm: 92,
    notes: [
      { string: 5, fret: 3, beats: 1 }, // Sol4
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 0, beats: 1 }, // Si3
      { string: 3, fret: 2, beats: 1 }, // La3
      { string: 3, fret: 0, beats: 2 }, // Sol3
    ],
  },
  {
    id: "mel-escala-extendida",
    title: "Estudio final: escala extendida",
    level: "avanzado",
    bpm: 96,
    notes: [
      { string: 4, fret: 1, beats: 1 }, // Do
      { string: 4, fret: 3, beats: 1 }, // Re
      { string: 5, fret: 0, beats: 1 }, // Mi
      { string: 5, fret: 1, beats: 1 }, // Fa
      { string: 5, fret: 3, beats: 1 }, // Sol
      { string: 5, fret: 5, beats: 1 }, // La
      { string: 5, fret: 8, beats: 2 }, // Do5 — primer salto fuera de primera posición
      { string: 5, fret: 5, beats: 1 },
      { string: 5, fret: 3, beats: 1 },
      { string: 5, fret: 1, beats: 1 },
      { string: 5, fret: 0, beats: 1 },
      { string: 4, fret: 3, beats: 1 },
      { string: 4, fret: 1, beats: 2 },
    ],
  },
];
