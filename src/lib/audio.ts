// Motor de audio compartido: sintetiza notas de guitarra y clicks de metrónomo
// con Web Audio API. Un solo AudioContext reutilizado por toda la app.

let ctx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  return ctx;
}

const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

export type NoteName = (typeof NOTE_NAMES)[number];

/** Semitonos desde A4 para una nota+octava dada. */
function semitonesFromA4(note: NoteName, octave: number): number {
  const noteIndex = NOTE_NAMES.indexOf(note);
  const aIndex = NOTE_NAMES.indexOf("A");
  return (octave - 4) * 12 + (noteIndex - aIndex);
}

/** Frecuencia en Hz para nota+octava (A4 = 440Hz). */
export function noteToFrequency(note: NoteName, octave: number): number {
  const n = semitonesFromA4(note, octave);
  return 440 * Math.pow(2, n / 12);
}

/** Nombre + octava para un semitono absoluto dado (0 = C0). */
export function semitoneToNote(semitoneFromC0: number): { note: NoteName; octave: number } {
  const octave = Math.floor(semitoneFromC0 / 12);
  const note = NOTE_NAMES[((semitoneFromC0 % 12) + 12) % 12]!;
  return { note, octave };
}

function noteOctaveToSemitoneFromC0(note: NoteName, octave: number): number {
  return octave * 12 + NOTE_NAMES.indexOf(note);
}

/**
 * Cuerdas al aire en afinación estándar, de la 6ta (grave) a la 1ra (aguda).
 */
export const STANDARD_TUNING: Array<{ note: NoteName; octave: number }> = [
  { note: "E", octave: 2 },
  { note: "A", octave: 2 },
  { note: "D", octave: 3 },
  { note: "G", octave: 3 },
  { note: "B", octave: 3 },
  { note: "E", octave: 4 },
];

/** Nota resultante al pisar `fret` en la cuerda `stringIndex` (0=6ta..5=1ra). */
export function fretToNote(stringIndex: number, fret: number): { note: NoteName; octave: number } {
  const open = STANDARD_TUNING[stringIndex]!;
  const semitone = noteOctaveToSemitoneFromC0(open.note, open.octave) + fret;
  return semitoneToNote(semitone);
}

export function fretToFrequency(stringIndex: number, fret: number): number {
  const { note, octave } = fretToNote(stringIndex, fret);
  return noteToFrequency(note, octave);
}

/**
 * Toca una nota tipo "pulsación de cuerda": oscilador con ataque rápido
 * y decaimiento exponencial, sumando un armónico para dar cuerpo.
 */
export function pluckNote(frequency: number, durationSeconds = 1.1): void {
  const audioCtx = getCtx();
  const now = audioCtx.currentTime;

  const master = audioCtx.createGain();
  master.gain.setValueAtTime(0, now);
  master.connect(audioCtx.destination);

  const fundamental = audioCtx.createOscillator();
  fundamental.type = "triangle";
  fundamental.frequency.setValueAtTime(frequency, now);

  const harmonic = audioCtx.createOscillator();
  harmonic.type = "sine";
  harmonic.frequency.setValueAtTime(frequency * 2, now);
  const harmonicGain = audioCtx.createGain();
  harmonicGain.gain.setValueAtTime(0.18, now);

  fundamental.connect(master);
  harmonic.connect(harmonicGain);
  harmonicGain.connect(master);

  master.gain.linearRampToValueAtTime(0.5, now + 0.008);
  master.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);

  fundamental.start(now);
  harmonic.start(now);
  fundamental.stop(now + durationSeconds);
  harmonic.stop(now + durationSeconds);
}

/** Click de metrónomo: tono corto, más agudo en el primer tiempo (acento). */
export function playClick(accent: boolean): void {
  const audioCtx = getCtx();
  const now = audioCtx.currentTime;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(accent ? 1500 : 1000, now);

  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.06);
}

export function unlockAudio(): void {
  getCtx();
}

// Frecuencias del acorde Em abierto (6 cuerdas), usado por defecto para simular rasgueos.
const EM_CHORD_FREQUENCIES = [0, 1, 2, 3, 4, 5].map((s) => fretToFrequency(s, 0));

/**
 * Simula un rasgueo sobre un set de frecuencias dado: las pulsa en rápida
 * sucesión. "D" (abajo) va de grave a agudo, "U" (arriba) va de agudo a grave.
 */
export function strumFrequencies(frequencies: number[], direction: "D" | "U"): void {
  const order = direction === "D" ? frequencies : [...frequencies].reverse();
  const staggerMs = 9;
  order.forEach((freq, i) => {
    window.setTimeout(() => pluckNote(freq, 0.6), i * staggerMs);
  });
}

/** Rasgueo genérico sobre Em abierto, usado en la sección de ritmos. */
export function playStrum(direction: "D" | "U"): void {
  strumFrequencies(EM_CHORD_FREQUENCIES, direction);
}
