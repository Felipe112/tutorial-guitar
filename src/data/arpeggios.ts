import { chordById, type ChordShape } from "@/data/chords";

export interface ArpeggioNote {
  string: number; // 0 = 6ta (grave) .. 5 = 1ra (aguda)
  fret: number;
}

export interface Arpeggio {
  id: string;
  chordName: string;
  chordId: string;
  description: string;
  sequence: ArpeggioNote[];
  leftFingers: string[]; // dedo de mano izquierda por nota: 1-4, o "-" si es al aire
  fingering: string[]; // dedo de mano derecha por nota: p/i/m/a
}

/**
 * Construye un arpegio ascendente (6ta→1ra) a partir de la forma real del
 * acorde: usa exactamente los mismos trastes y dedos que tocarías si
 * rasguearas el acorde, pero pulsando cuerda por cuerda.
 * Reparte la mano derecha: pulgar (p) en las cuerdas graves, luego i/m/a en
 * las últimas 3 cuerdas agudas tocadas.
 */
function buildArpeggioFromChord(chord: ChordShape): { sequence: ArpeggioNote[]; leftFingers: string[]; fingering: string[] } {
  const sounding = chord.positions
    .filter((p) => p.fret !== null)
    .sort((a, b) => a.string - b.string);

  const sequence = sounding.map((p) => ({ string: p.string, fret: p.fret! }));
  const leftFingers = sounding.map((p) => (p.finger ? String(p.finger) : "-"));

  const trebleCount = Math.min(3, sounding.length);
  const bassCount = sounding.length - trebleCount;
  const trebleLabels = ["i", "m", "a"].slice(-trebleCount);
  const fingering = [...Array(bassCount).fill("p"), ...trebleLabels];

  return { sequence, leftFingers, fingering };
}

const emShape = chordById("em")!;
const amShape = chordById("am")!;
const cShape = chordById("c")!;
const gShape = chordById("g")!;
const dShape = chordById("d")!;
const aShape = chordById("a")!;
const eShape = chordById("e")!;
const dmShape = chordById("dm")!;
const fShape = chordById("f")!;
const bShape = chordById("b")!;
const bmShape = chordById("bm")!;

export const arpeggios: Arpeggio[] = [
  {
    id: "arp-em",
    chordName: "Mi menor (Em)",
    chordId: "em",
    description: "El arpegio más sencillo: solo 2 dedos en la mano izquierda, el resto son cuerdas al aire.",
    ...buildArpeggioFromChord(emShape),
  },
  {
    id: "arp-am",
    chordName: "La menor (Am)",
    chordId: "am",
    description: "No toques la 6ta cuerda. Arpegio de 5 notas sobre la forma de Am.",
    ...buildArpeggioFromChord(amShape),
  },
  {
    id: "arp-c",
    chordName: "Do mayor (C)",
    chordId: "c",
    description: "Arpegio clásico de estudio sobre la forma de Do mayor, cuerdas 5 a 1.",
    ...buildArpeggioFromChord(cShape),
  },
  {
    id: "arp-g",
    chordName: "Sol mayor (G)",
    chordId: "g",
    description: "Arpegio de 6 cuerdas: ideal para practicar el recorrido completo con la mano derecha.",
    ...buildArpeggioFromChord(gShape),
  },
  {
    id: "arp-d",
    chordName: "Re mayor (D)",
    chordId: "d",
    description: "Arpegio corto de 4 notas, solo cuerdas 4 a 1. Bueno para practicar precisión.",
    ...buildArpeggioFromChord(dShape),
  },
  {
    id: "arp-a",
    chordName: "La mayor (A)",
    chordId: "a",
    description: "Tres dedos en la misma línea de traste: buen ejercicio de apertura de mano.",
    ...buildArpeggioFromChord(aShape),
  },
  {
    id: "arp-e",
    chordName: "Mi mayor (E)",
    chordId: "e",
    description: "Arpegio de 6 cuerdas sobre la forma más usada en toda la guitarra: la base de la cejilla de Fa.",
    ...buildArpeggioFromChord(eShape),
  },
  {
    id: "arp-dm",
    chordName: "Re menor (Dm)",
    chordId: "dm",
    description: "El único acorde menor con tercera 'triste' entre los abiertos básicos. Arpegio de 4 notas.",
    ...buildArpeggioFromChord(dmShape),
  },
  {
    id: "arp-f",
    chordName: "Fa mayor (F)",
    chordId: "f",
    description: "Tu primer arpegio con cejilla: el dedo 1 sostiene varias cuerdas mientras las otras cantan por turnos.",
    ...buildArpeggioFromChord(fShape),
  },
  {
    id: "arp-b",
    chordName: "Si mayor (B)",
    chordId: "b",
    description: "Arpegio con cejilla en forma de La movida: no toques la 6ta cuerda.",
    ...buildArpeggioFromChord(bShape),
  },
  {
    id: "arp-bm",
    chordName: "Si menor (Bm)",
    chordId: "bm",
    description: "Uno de los acordes con cejilla más usados en canciones. Arpegio de 5 notas.",
    ...buildArpeggioFromChord(bmShape),
  },
];
