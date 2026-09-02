export interface PlanItem {
  label: string;
  href: string;
  icon?: string; // emoji del género (mismo que en /ejercicios), solo para optionalItems
}

export interface DayPlan {
  key: string;
  day: string;
  weekdayKey: string; // lunes..domingo, usado para resaltar "hoy" en el plan semanal
  dayNumber?: number; // 1..N, usado para resaltar "hoy" en quincenal/mensual (por fecha del mes)
  focus: string;
  warmup: PlanItem;
  keyItems: PlanItem[];
  alwaysDo: PlanItem;
  optionalItems: PlanItem[]; // ejercicios por género, opcionales, no cuentan para el total fijo del día
  minutes: number;
}

const ALWAYS_DO: PlanItem = {
  label: "Cambios entre acordes abiertos",
  href: "/ejercicios#ex-03",
};

interface DayTemplate extends Omit<DayPlan, "key"> {}

const WEEKDAY_TEMPLATES: DayTemplate[] = [
  {
    weekdayKey: "lunes",
    day: "Lunes",
    focus: "Dedos y digitación",
    warmup: { label: "Cromático 1-2-3-4", href: "/ejercicios#ex-02" },
    keyItems: [
      { label: "Cromático en reversa (4-3-2-1)", href: "/ejercicios#ex-06" },
      { label: "Pentatónica menor, patrón 1", href: "/ejercicios#ex-09" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Metal: Alternate picking en una cuerda", href: "/ejercicios#metal-3", icon: "🤘" },
      { label: "Clásica: Apoyando (rest stroke)", href: "/ejercicios#clasica-1", icon: "🎻" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "martes",
    day: "Martes",
    focus: "Cambios de acorde",
    warmup: { label: "Postura y agarre de púa", href: "/ejercicios#ex-01" },
    keyItems: [
      { label: "Secuencia de 4 acordes (C-G-Am-Em)", href: "/ejercicios#ex-07" },
      { label: "Silenciar cuerdas no deseadas", href: "/ejercicios#ex-08" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Pop: Cambios rápidos a tempo", href: "/ejercicios#pop-3", icon: "🎤" },
      { label: "Punk: Cambio de 2 power chords veloz", href: "/ejercicios#punk-2", icon: "⚡" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "miercoles",
    day: "Miércoles",
    focus: "Ritmo y rasgueo",
    warmup: { label: "Cromático 1-2-3-4", href: "/ejercicios#ex-02" },
    keyItems: [
      { label: "Ritmo: Abajo-arriba constante", href: "/ritmos#rh-02" },
      { label: "Ritmo: Patrón folk clásico", href: "/ritmos#rh-03" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Reggae: Skank en contratiempo", href: "/ejercicios#reggae-1", icon: "🌴" },
      { label: "Blues: Shuffle con palm mute", href: "/ejercicios#blues-1", icon: "🎺" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "jueves",
    day: "Jueves",
    focus: "Arpegios",
    warmup: { label: "Cromático 1-2-3-4", href: "/ejercicios#ex-02" },
    keyItems: [
      { label: "Arpegio: Mi menor (Em)", href: "/arpegios#arp-em" },
      { label: "Arpegio: La menor (Am)", href: "/arpegios#arp-am" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Clásica: Arpegio clásico sobre Am", href: "/ejercicios#clasica-2", icon: "🎻" },
      { label: "Folclor: Arpegio con bajo alternante", href: "/ejercicios#folclor-2", icon: "🪕" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "viernes",
    day: "Viernes",
    focus: "Técnica: ligados y expresión",
    warmup: { label: "Cromático 1-2-3-4", href: "/ejercicios#ex-02" },
    keyItems: [
      { label: "Legato: hammer-on y pull-off", href: "/ejercicios#ex-05" },
      { label: "Vibrato básico", href: "/ejercicios#ex-10" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Country: Hammer-on rápido estilo country", href: "/ejercicios#country-3", icon: "🤠" },
      { label: "Blues: Bend suave de medio tono", href: "/ejercicios#blues-2", icon: "🎺" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "sabado",
    day: "Sábado",
    focus: "Melodía",
    warmup: { label: "Cromático 1-2-3-4", href: "/ejercicios#ex-02" },
    keyItems: [
      { label: "Melodía: Recorrido de cuerdas al aire", href: "/melodias#mel-cuerdas-al-aire" },
      { label: "Melodía: Estrellita", href: "/melodias#mel-estrellita" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Country: Escala mayor para licks", href: "/ejercicios#country-2", icon: "🤠" },
      { label: "Jazz: Caminata de bajo simple", href: "/ejercicios#jazz-4", icon: "🎷" },
    ],
    minutes: 25,
  },
  {
    weekdayKey: "domingo",
    day: "Domingo",
    focus: "Repaso libre",
    warmup: { label: "Postura y agarre de púa", href: "/ejercicios#ex-01" },
    keyItems: [
      { label: "Palm mute controlado", href: "/ejercicios#ex-04" },
      { label: "Ritmo: Pop rock estándar", href: "/ritmos#rh-06" },
    ],
    alwaysDo: ALWAYS_DO,
    optionalItems: [
      { label: "Rock: Power chord básico (5ta)", href: "/ejercicios#rock-1", icon: "🎸" },
      { label: "Flamenco: Rasgueo básico de un dedo", href: "/ejercicios#flamenco-1", icon: "💃" },
    ],
    minutes: 20,
  },
];

/** Plan semanal: 7 días, uno por cada día real de la semana. */
export const weeklyPlan: DayPlan[] = WEEKDAY_TEMPLATES.map((t) => ({
  ...t,
  key: t.weekdayKey,
}));

/**
 * Genera un plan más largo repitiendo el ciclo semanal de 7 temas
 * (quincenal = 2 vueltas + 1 día, mensual = 4 vueltas + 2 días).
 * Cada entrada tiene un id único (namespace:dia-N) para que el progreso
 * de "Día 8" no se confunda con el de "Día 1", aunque compartan tema.
 */
export function buildExtendedPlan(totalDays: number, namespace: string): DayPlan[] {
  return Array.from({ length: totalDays }, (_, i) => {
    const template = WEEKDAY_TEMPLATES[i % 7]!;
    const dayNumber = i + 1;
    return {
      ...template,
      key: `${namespace}:dia-${dayNumber}`,
      day: `Día ${dayNumber}`,
      dayNumber,
    };
  });
}
