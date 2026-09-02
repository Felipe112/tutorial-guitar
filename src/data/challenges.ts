export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: "técnica" | "ritmo" | "oído" | "teoría" | "resistencia";
}

export const challenges: Challenge[] = [
  {
    id: "ch-01",
    title: "Cromático a contrarreloj",
    description: "Toca el ejercicio 1-2-3-4 en las 6 cuerdas sin errores, 3 veces seguidas.",
    category: "técnica",
  },
  {
    id: "ch-02",
    title: "5 cambios de acorde limpios",
    description: "Cambia entre Em y Am, 5 veces, sin que ninguna cuerda suene apagada por error.",
    category: "técnica",
  },
  {
    id: "ch-03",
    title: "Metrónomo a 90 BPM",
    description: "Toca el patrón 'Abajo-arriba constante' 2 minutos seguidos sin perder el tiempo.",
    category: "ritmo",
  },
  {
    id: "ch-04",
    title: "Reconoce la nota",
    description: "Cierra los ojos, pulsa cualquier cuerda al aire, di en voz alta qué nota crees que es y verifícalo con un afinador. Repite 10 veces.",
    category: "oído",
  },
  {
    id: "ch-05",
    title: "Arpegio sin mirar",
    description: "Toca el arpegio de Do mayor 5 veces seguidas sin mirar la mano derecha.",
    category: "técnica",
  },
  {
    id: "ch-06",
    title: "Melodía completa",
    description: "Toca 'Estrellita' de principio a fin sin detenerte, aunque sea lento.",
    category: "resistencia",
  },
  {
    id: "ch-07",
    title: "Nombra las notas al aire",
    description: "Di en voz alta el nombre de las 6 cuerdas al aire, de la 6ta a la 1ra y de vuelta, 3 veces.",
    category: "teoría",
  },
  {
    id: "ch-08",
    title: "Rasgueo offbeat",
    description: "Practica el patrón reggae (solo hacia arriba) durante 2 minutos sin sonar los tiempos fuertes.",
    category: "ritmo",
  },
  {
    id: "ch-09",
    title: "Resistencia de dedos",
    description: "Mantén la forma del acorde G durante 60 segundos sin soltar ni relajar los dedos.",
    category: "resistencia",
  },
  {
    id: "ch-10",
    title: "Hammer-on x20",
    description: "Haz 20 hammer-ons limpios entre traste 3 y 5 en la cuerda 3.",
    category: "técnica",
  },
  {
    id: "ch-11",
    title: "Cejilla de Fa",
    description: "Mantén el acorde F (con cejilla) sonando limpio en las 6 cuerdas durante 30 segundos seguidos.",
    category: "técnica",
  },
  {
    id: "ch-12",
    title: "Power chords veloces",
    description: "Cambia entre los power chords E5, A5 y D5 diez veces seguidas sin parar el ritmo.",
    category: "técnica",
  },
  {
    id: "ch-13",
    title: "Pull-off en cadena",
    description: "Haz 15 pull-offs limpios en la cuerda 1, del traste 5 al traste 3, sin volver a puntear con la púa.",
    category: "técnica",
  },
  {
    id: "ch-14",
    title: "Shuffle sin perder el groove",
    description: "Toca el patrón shuffle/blues 2 minutos seguidos sin que se sienta robótico ni se corte el vaivén.",
    category: "ritmo",
  },
  {
    id: "ch-15",
    title: "Cambia de compás",
    description: "Alterna 4 compases en 4/4 con 4 compases en 3/4, usando cualquier patrón de rasgueo, sin perder el pulso.",
    category: "ritmo",
  },
  {
    id: "ch-16",
    title: "Ritmo de tu género favorito",
    description: "Elige un género en Ritmos y toca sus 2 patrones seguidos, sin detenerte entre uno y otro.",
    category: "ritmo",
  },
  {
    id: "ch-17",
    title: "Palm mute constante",
    description: "Mantén el palm mute activo durante 2 minutos de rasgueo continuo, sin que se suelte ni una sola vez.",
    category: "ritmo",
  },
  {
    id: "ch-18",
    title: "Adivina el acorde",
    description: "Pide a alguien que toque Em, Am, C o G (o grábate tocándolos y escúchalos después) e identifica cuál es de oído.",
    category: "oído",
  },
  {
    id: "ch-19",
    title: "Afinación de oído",
    description: "Afina tu guitarra usando solo el truco del traste 5 (sin afinador). Verifica el resultado con un afinador al final.",
    category: "oído",
  },
  {
    id: "ch-20",
    title: "¿Mayor o menor?",
    description: "Toca 5 acordes al azar y para cada uno decide si suena 'alegre' (mayor) o 'triste' (menor) antes de mirar el nombre.",
    category: "oído",
  },
  {
    id: "ch-21",
    title: "Sigue la melodía de oído",
    description: "Escucha 'Estrellita' en Melodías una sola vez y trata de tocarla de memoria, solo guiándote por el oído.",
    category: "oído",
  },
  {
    id: "ch-22",
    title: "Explica los 3 pilares",
    description: "Explica en voz alta, con tus propias palabras, qué es el ritmo, qué es la melodía y qué es la armonía.",
    category: "teoría",
  },
  {
    id: "ch-23",
    title: "Construye una escala",
    description: "Escribe en papel las 8 notas de la escala de Do mayor, sin mirar la app. Después verifica en Teoría.",
    category: "teoría",
  },
  {
    id: "ch-24",
    title: "Intervalos a ciegas",
    description: "Elige dos trastes en la misma cuerda y calcula cuántos semitonos de distancia hay entre ellos antes de contarlos.",
    category: "teoría",
  },
  {
    id: "ch-25",
    title: "Inventa una progresión",
    description: "Arma una progresión de 4 acordes usando solo los que ya sabes tocar, y tócala en bucle 4 veces.",
    category: "teoría",
  },
  {
    id: "ch-26",
    title: "Mayor vs. menor, explicado",
    description: "Explica la diferencia entre un acorde mayor y uno menor usando el concepto de tercera mayor y tercera menor.",
    category: "teoría",
  },
  {
    id: "ch-27",
    title: "10 minutos sin parar",
    description: "Elige cualquier ejercicio, ritmo o melodía y tócalo sin detenerte durante 10 minutos seguidos.",
    category: "resistencia",
  },
  {
    id: "ch-28",
    title: "Maratón de acordes abiertos",
    description: "Cambia entre los 8 acordes abiertos, uno tras otro, sin dejar ningún silencio entre cambios.",
    category: "resistencia",
  },
  {
    id: "ch-29",
    title: "Aguanta la cejilla",
    description: "Mantén cualquier acorde con cejilla sonando limpio y sin apagarse durante 45 segundos.",
    category: "resistencia",
  },
  {
    id: "ch-30",
    title: "Repaso completo del día",
    description: "Completa todos los ejercicios clave de tu Plan de hoy, sin saltarte ninguno.",
    category: "resistencia",
  },
];

function hashStringToInt(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Reto determinístico por fecha (mismo reto todo el día, cambia cada día). */
export function challengeForDate(date: Date): Challenge {
  const iso = date.toISOString().slice(0, 10);
  const index = hashStringToInt(iso) % challenges.length;
  return challenges[index]!;
}
