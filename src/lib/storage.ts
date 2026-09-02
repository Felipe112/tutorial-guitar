// Progreso del usuario persistido en localStorage. Todo del lado cliente,
// no hay backend: cada navegador guarda su propio avance.

const KEYS = {
  completedItems: "tg:completed", // Set<string> de ids "seccion:itemId"
  challengeLog: "tg:challenges", // Record<isoDate, challengeId>
  selectedPlan: "tg:selected-plan", // "semanal" | "quincenal" | "mensual"
} as const;

function readJSON<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function isCompleted(id: string): boolean {
  const set = readJSON<string[]>(KEYS.completedItems, []);
  return set.includes(id);
}

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

export function countCompletedByPrefix(prefix: string): number {
  const set = readJSON<string[]>(KEYS.completedItems, []);
  return set.filter((id) => id.startsWith(prefix)).length;
}

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

export function setSelectedPlan(plan: PlanId): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(KEYS.selectedPlan, plan);
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function markChallengeDone(challengeId: string): void {
  const log = readJSON<Record<string, string>>(KEYS.challengeLog, {});
  log[todayIso()] = challengeId;
  writeJSON(KEYS.challengeLog, log);
}

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
