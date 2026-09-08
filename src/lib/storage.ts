// Progreso del usuario persistido en localStorage. Todo del lado cliente,
// no hay backend: cada navegador guarda su propio avance.

const KEYS = {
  completedItems: "tg:completed", // Set<string> de ids "seccion:itemId"
  challengeLog: "tg:challenges", // Record<isoDate, challengeId>
  selectedPlan: "tg:selected-plan", // "semanal" | "quincenal" | "mensual"
} as const;

/** Lee y parsea un valor JSON de localStorage; devuelve `fallback` si no existe o falla. */
function readJSON<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

/** Serializa `value` como JSON y lo guarda en localStorage. */
function writeJSON(key: string, value: unknown): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

/** ¿Está este item ("seccion:itemId") marcado como hecho? */
export function isCompleted(id: string): boolean {
  const set = readJSON<string[]>(KEYS.completedItems, []);
  return set.includes(id);
}

/** Marca o desmarca explícitamente un item como hecho (sin alternar). */
export function setCompleted(id: string, done: boolean): void {
  const set = new Set(readJSON<string[]>(KEYS.completedItems, []));
  if (done) {
    set.add(id);
  } else {
    set.delete(id);
  }
  writeJSON(KEYS.completedItems, [...set]);
}

/** Alterna el estado hecho/no-hecho de un item y devuelve el nuevo valor. */
export function toggleCompleted(id: string): boolean {
  const set = new Set(readJSON<string[]>(KEYS.completedItems, []));
  let nowDone: boolean;
  if (set.has(id)) {
    set.delete(id);
    nowDone = false;
  } else {
    set.add(id);
    nowDone = true;
  }
  writeJSON(KEYS.completedItems, [...set]);
  return nowDone;
}

/** Cuántos items hechos tienen un id que empieza con `prefix` (ej. "exercises:"). */
export function countCompletedByPrefix(prefix: string): number {
  const set = readJSON<string[]>(KEYS.completedItems, []);
  return set.filter((id) => id.startsWith(prefix)).length;
}

/** Total de items marcados como hechos en todo el sitio. */
export function totalCompleted(): number {
  return readJSON<string[]>(KEYS.completedItems, []).length;
}

/** Cuántos de estos ids exactos están marcados como hechos. */
export function countCompletedAmong(ids: string[]): number {
  const set = new Set(readJSON<string[]>(KEYS.completedItems, []));
  return ids.filter((id) => set.has(id)).length;
}

export type PlanId = "semanal" | "quincenal" | "mensual";

/** Plan elegido en /plan (semanal/quincenal/mensual), recordado entre visitas. */
export function getSelectedPlan(): PlanId {
  const value = typeof localStorage === "undefined" ? null : localStorage.getItem(KEYS.selectedPlan);
  return value === "quincenal" || value === "mensual" ? value : "semanal";
}

/** Guarda el plan elegido en /plan para recordarlo en la próxima visita. */
export function setSelectedPlan(plan: PlanId): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(KEYS.selectedPlan, plan);
}

/** Fecha de hoy en formato ISO corto (YYYY-MM-DD), clave del log de retos. */
function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Registra el reto de hoy como completado (sobreescribe si ya había uno). */
export function markChallengeDone(challengeId: string): void {
  const log = readJSON<Record<string, string>>(KEYS.challengeLog, {});
  log[todayIso()] = challengeId;
  writeJSON(KEYS.challengeLog, log);
}

/** ¿Ya se completó el reto diario de hoy? */
export function isChallengeDoneToday(): boolean {
  const log = readJSON<Record<string, string>>(KEYS.challengeLog, {});
  return todayIso() in log;
}

/** Racha de días consecutivos (incluyendo hoy si ya se completó) con reto hecho. */
export function currentStreak(): number {
  const log = readJSON<Record<string, string>>(KEYS.challengeLog, {});
  let streak = 0;
  const cursor = new Date();
  // Si hoy no está hecho todavía, la racha se cuenta desde ayer hacia atrás.
  if (!(todayIso() in log)) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (true) {
    const iso = cursor.toISOString().slice(0, 10);
    if (iso in log) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}
