// Color fijo por dedo de mano izquierda, usado en diagramas de acordes y
// tablaturas para que sea visualmente obvio qué dedo va dónde sin tener
// que leer el número.
export const FINGER_COLORS: Record<number, string> = {
  1: "#3b82f6", // índice - azul
  2: "#10b981", // medio - verde
  3: "#8b5cf6", // anular - violeta
  4: "#f43f5e", // meñique - rosa
};

export const FINGER_NAMES: Record<number, string> = {
  1: "índice",
  2: "medio",
  3: "anular",
  4: "meñique",
};

export function fingerColor(finger: number | null | undefined): string {
  if (!finger) return "#f59e0b";
  return FINGER_COLORS[finger] ?? "#f59e0b";
}
