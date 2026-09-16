#!/usr/bin/env node
// Lint de contenido musical. No compila TypeScript: lee los archivos de
// src/data como texto y valida las invariantes que un error tipográfico puede
// romper sin que TypeScript se entere.
//
// Comprueba:
//   1. Índices de cuerda fuera de rango (0..5) y trastes imposibles.
//   2. Que cuando un texto dice "cuerda 3" la tablatura de al lado marque esa
//      misma cuerda (el bug clásico: texto y tab desalineados).
//   3. Que los patrones de rasgueo tengan tantas posiciones como el compás.
//   4. Que las canciones solo usen ids de acorde que existan en chords.ts.
//
// Uso: node scripts/check-tabs.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relative) => readFileSync(join(root, relative), "utf8");

const problems = [];
const fail = (file, id, message) => problems.push(`${file} · ${id}: ${message}`);

/** Índice interno (0 = 6ta) → número de cuerda como lo diría una persona. */
const toHumanString = (index) => 6 - index;

/**
 * Parte un archivo de datos en bloques, uno por cada `id: "..."`: cada bloque
 * llega hasta el siguiente id, que es donde empieza el elemento siguiente.
 */
function blocksById(source) {
  const matches = [...source.matchAll(/id:\s*"([\w-]+)"/g)];
  return matches.map((match, i) => ({
    id: match[1],
    body: source.slice(match.index, matches[i + 1]?.index ?? source.length),
  }));
}

/** Números de cuerda mencionados en prosa: "cuerda 3", "3ra cuerda", "la 6ta". */
function mentionedStrings(text) {
  const found = new Set();
  for (const m of text.matchAll(/cuerdas?\s+(\d)\b/gi)) found.add(Number(m[1]));
  // Ordinales sueltos (1ra, 2da, 6ta...): en este proyecto siempre nombran cuerdas.
  for (const m of text.matchAll(/\b([1-6])(?:ra|da|ta)\b/gi)) found.add(Number(m[1]));
  return found;
}

/** Notas `{ string: N, fret: M }` que aparecen dentro de un bloque. */
function tabNotes(body) {
  return [...body.matchAll(/\{\s*string:\s*(\d+),\s*fret:\s*(\d+)/g)].map((m) => ({
    string: Number(m[1]),
    fret: Number(m[2]),
  }));
}

// ---------- 1 y 2: cuerdas/trastes y coherencia texto ↔ tablatura ----------
const dataFiles = [
  "src/data/melodies.ts",
  "src/data/exercises.ts",
  "src/data/genreExercises.ts",
  "src/data/songs.ts",
  "src/data/chords.ts",
];

for (const file of dataFiles) {
  const source = read(file);
  for (const { id, body } of blocksById(source)) {
    const notes = tabNotes(body);

    for (const note of notes) {
      if (note.string < 0 || note.string > 5) {
        fail(file, id, `índice de cuerda fuera de rango: ${note.string} (válido 0..5)`);
      }
      if (note.fret < 0 || note.fret > 24) {
        fail(file, id, `traste fuera de rango: ${note.fret}`);
      }
    }

    // Solo tiene sentido comparar si el bloque tiene a la vez prosa y tablatura.
    const stepsMatch = body.match(/steps:\s*\[([\s\S]*?)\],/);
    if (!stepsMatch || notes.length === 0) continue;

    const mentioned = mentionedStrings(stepsMatch[1]);
    if (mentioned.size === 0) continue;

    const used = new Set(notes.map((n) => toHumanString(n.string)));
    const overlap = [...mentioned].some((s) => used.has(s));
    if (!overlap) {
      fail(
        file,
        id,
        `el texto habla de la(s) cuerda(s) ${[...mentioned].join(", ")} pero la tablatura marca la(s) ${[...used].join(", ")}`,
      );
    }
  }
}

// ---------- 3: patrones de rasgueo vs compás ----------
const EXPECTED_POSITIONS = { "4/4": 8, "3/4": 6, "6/8": 6, "2/4": 4 };

for (const file of ["src/data/rhythms.ts", "src/data/genreRhythms.ts", "src/data/songs.ts"]) {
  const source = read(file);
  for (const { id, body } of blocksById(source)) {
    const signature = body.match(/timeSignature:\s*"([\d/]+)"/)?.[1];
    const pattern = body.match(/pattern:\s*\[([^\]]*)\]/)?.[1];
    if (!signature || !pattern) continue;

    const length = pattern.split(",").filter((s) => s.trim().length > 0).length;
    const expected = EXPECTED_POSITIONS[signature];
    if (expected && length !== expected) {
      fail(file, id, `compás ${signature} debería tener ${expected} posiciones de corchea, tiene ${length}`);
    }
  }
}

// ---------- 4: las canciones solo usan acordes que existen ----------
const chordIds = new Set([...read("src/data/chords.ts").matchAll(/id:\s*"([\w-]+)"/g)].map((m) => m[1]));
const songsSource = read("src/data/songs.ts");

for (const { id, body } of blocksById(songsSource)) {
  const referenced = new Set();
  for (const barsMatch of body.matchAll(/bars:\s*\[([^\]]*)\]/g)) {
    for (const chord of barsMatch[1].matchAll(/"([\w-]+)"/g)) referenced.add(chord[1]);
  }
  for (const chordsMatch of body.matchAll(/chords:\s*\[([^\]]*)\]/g)) {
    for (const chord of chordsMatch[1].matchAll(/"([\w-]+)"/g)) referenced.add(chord[1]);
  }
  for (const chord of referenced) {
    if (!chordIds.has(chord)) fail("src/data/songs.ts", id, `usa un acorde inexistente: "${chord}"`);
  }
}

// ---------- resultado ----------
if (problems.length > 0) {
  console.error(`❌ ${problems.length} problema(s) de contenido:\n`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log("✅ Tablaturas, ritmos y cifrados coherentes.");
