export interface GenreExampleNote {
  string: number; // 0 = 6ta .. 5 = 1ra
  fret: number;
  beats?: number;
}

export interface GenreExercise {
  id: string;
  title: string;
  level: "principiante" | "principiante+";
  minutes: number;
  description: string;
  steps: string[];
  relatedChords?: string[];
  example?: { bpm: number; notes: GenreExampleNote[] };
}

export interface GenreCategory {
  id: string;
  name: string;
  emoji: string;
  blurb: string;
  exercises: GenreExercise[];
}

export const genreExercises: GenreCategory[] = [
  {
    id: "rock",
    name: "Rock",
    emoji: "🎸",
    blurb: "Power chords, riffs simples y palm mute.",
    exercises: [
      {
        id: "rock-1",
        title: "Power chord básico (5ta)",
        level: "principiante+",
        minutes: 8,
        description: "El acorde de dos notas que sostiene la mitad del rock.",
        steps: [
          "Pisa la 6ta cuerda con el dedo 1 (empieza en el traste 0 = power chord E5).",
          "Con el dedo 3, pisa la 5ta cuerda dos trastes más arriba (traste 2 para E5).",
          "No toques las cuerdas 4, 3, 2 ni 1. Rasguea solo esas dos cuerdas graves con fuerza.",
          "Mueve la misma forma al traste 3 (G5) y al traste 5 (A5) sin cambiar los dedos.",
        ],
      },
      {
        id: "rock-2",
        title: "Riff en una cuerda",
        level: "principiante+",
        minutes: 8,
        description: "Un patrón repetitivo simple en la cuerda grave, la base de miles de canciones.",
        steps: [
          "En la cuerda 6, toca: 0-0-3-0-0-2-0 (todas negras) y repítelo en bucle.",
          "Usa el metrónomo a 100 BPM, todas las notas con la misma duración.",
          "Cuando salga limpio, agrégale palm mute (ver ejercicio de palm mute).",
        ],
        example: {
          bpm: 100,
          notes: [
            { string: 0, fret: 0 },
            { string: 0, fret: 0 },
            { string: 0, fret: 3 },
            { string: 0, fret: 0 },
            { string: 0, fret: 0 },
            { string: 0, fret: 2 },
            { string: 0, fret: 0 },
          ],
        },
      },
      {
        id: "rock-3",
        title: "Palm mute rítmico",
        level: "principiante+",
        minutes: 8,
        description: "Power chords con la palma apagando: el sonido 'chugga' característico del rock.",
        steps: [
          "Apoya el borde de la palma sobre las cuerdas graves, cerca del puente.",
          "Alterna power chords E5 → A5 → D5, dos tiempos cada uno, con palm mute constante.",
          "Tempo sugerido: 100–120 BPM.",
        ],
      },
      {
        id: "rock-4",
        title: "Rasgueo con acentos",
        level: "principiante",
        minutes: 6,
        description: "No todos los golpes de rasgueo pesan igual: marcar acentos le da 'empuje' al rock.",
        steps: [
          "Sobre Em, toca el patrón D-D-U-U-D-U.",
          "Golpea más fuerte el primer y el cuarto rasgueo, más suave los demás.",
          "Exagera la diferencia al principio: luego se vuelve natural.",
        ],
        relatedChords: ["em"],
      },
    ],
  },
  {
    id: "pop",
    name: "Pop",
    emoji: "🎤",
    blurb: "Progresiones pegajosas y rasgueo claro.",
    exercises: [
      {
        id: "pop-1",
        title: "Progresión I-V-vi-IV",
        level: "principiante+",
        minutes: 10,
        description: "La progresión más usada en la radio: C-G-Am-F. Aparece en cientos de éxitos pop.",
        steps: [
          "Un compás por acorde: C → G → Am → F, rasgueo simple abajo-abajo-abajo-abajo.",
          "Repite el ciclo sin parar, aunque el cambio a F (con cejilla) salga sucio al inicio.",
          "Cuando fluya, prueba cantar cualquier melodía simple encima.",
        ],
        relatedChords: ["c", "g", "am", "f"],
      },
      {
        id: "pop-2",
        title: "Fingerpicking básico pop",
        level: "principiante+",
        minutes: 8,
        description: "Un patrón de dedos suave, típico de baladas pop acústicas.",
        steps: [
          "Sobre Do mayor (C), pulsa con el pulgar la cuerda 5, luego i-m-a las cuerdas 3-2-1 en orden.",
          "Repite el patrón 8 veces seguidas sin perder el pulso, a 70 BPM.",
          "Cuando esté cómodo, pruébalo también sobre Am.",
        ],
        relatedChords: ["c", "am"],
      },
      {
        id: "pop-3",
        title: "Cambios rápidos a tempo",
        level: "principiante+",
        minutes: 8,
        description: "El pop suele cambiar de acorde cada 1-2 tiempos: hay que ser rápido.",
        steps: [
          "Alterna Am → F cada 2 tiempos (medio compás cada uno) a 100 BPM.",
          "Si te atrasas, sigue el metrónomo igual: no te detengas a corregir.",
          "Sube de tempo solo cuando lo domines limpio 5 veces seguidas.",
        ],
        relatedChords: ["am", "f"],
      },
      {
        id: "pop-4",
        title: "Rasgueo sincopado pop",
        level: "principiante",
        minutes: 6,
        description: "Un patrón con un pequeño 'salto' rítmico, muy común en canciones actuales.",
        steps: [
          "Sobre Sol mayor (G), toca el patrón D-D-U-(silencio)-U-D-U.",
          "Cuenta en voz alta '1-2-+-4-+' mientras rasgueas para sentir el hueco.",
          "Practícalo con metrónomo antes de intentarlo de memoria.",
        ],
        relatedChords: ["g"],
      },
    ],
  },
  {
    id: "jazz",
    name: "Jazz",
    emoji: "🎷",
    blurb: "Acordes de color y swing, simplificados para empezar.",
    exercises: [
      {
        id: "jazz-1",
        title: "De Am a 'Am7' simplificado",
        level: "principiante+",
        minutes: 6,
        description: "Los acordes de séptima le dan ese color 'jazz'. Empieza con la versión más simple.",
        steps: [
          "Forma el acorde Am normal.",
          "Levanta solo el dedo 3 (deja sonar la 3ra cuerda al aire): eso ya suena distinto, más 'abierto'.",
          "Alterna Am y esta versión simplificada, escuchando la diferencia de color.",
        ],
        relatedChords: ["am"],
      },
      {
        id: "jazz-2",
        title: "Comping suave (acompañamiento corto)",
        level: "principiante+",
        minutes: 8,
        description: "En vez de rasguear todo el tiempo, el jazz suele tocar acordes cortos y precisos.",
        steps: [
          "Sobre Em, rasguea un solo golpe corto y apagado en el tiempo 2 y otro en el tiempo 4.",
          "Deja silencio en los tiempos 1 y 3: esa es la sensación de 'comping'.",
          "Practica con metrónomo a 80 BPM hasta que se sienta relajado, no apurado.",
        ],
        relatedChords: ["em"],
      },
      {
        id: "jazz-3",
        title: "Sensación de swing",
        level: "principiante+",
        minutes: 8,
        description: "En vez de corcheas parejas, el swing las toca 'larga-corta', como un vaivén.",
        steps: [
          "En la cuerda 1 al aire, toca 8 corcheas seguidas pero alargando la primera de cada par y acortando la segunda.",
          "Cuenta mentalmente 'DUM-da, DUM-da' en vez de 'ta-ta-ta-ta'.",
          "Practica muy lento antes de subir el tempo: el swing se siente, no se apura.",
        ],
      },
      {
        id: "jazz-4",
        title: "Caminata de bajo simple",
        level: "principiante+",
        minutes: 8,
        description: "Una aproximación sencilla al 'walking bass' que conecta acordes por abajo.",
        steps: [
          "Sobre C, toca en orden: cuerda 5 al aire, cuerda 4 al aire, cuerda 4 traste 2, cuerda 3 al aire.",
          "Una nota por tiempo, en bucle, muy relajado.",
          "Esto imita cómo un bajista 'camina' entre acordes en una progresión de jazz.",
        ],
        relatedChords: ["c"],
        example: {
          bpm: 80,
          notes: [
            { string: 1, fret: 0 },
            { string: 2, fret: 0 },
            { string: 2, fret: 2 },
            { string: 3, fret: 0 },
          ],
        },
      },
    ],
  },
  {
    id: "metal",
    name: "Metal",
    emoji: "🤘",
    blurb: "Velocidad, precisión y palm mute agresivo.",
    exercises: [
      {
        id: "metal-1",
        title: "Power chords rápidos",
        level: "principiante+",
        minutes: 8,
        description: "La versión veloz del power chord de rock, con más tensión en la palma.",
        steps: [
          "Forma el power chord E5 (cuerda 6 al aire + cuerda 5 traste 2).",
          "Cambia a G5 (traste 3) en cada compás, con palm mute agresivo y firme.",
          "Tempo sugerido: 140 BPM. Prioriza que suene limpio antes que rápido.",
        ],
      },
      {
        id: "metal-2",
        title: "Riff cromático simple",
        level: "principiante+",
        minutes: 8,
        description: "Un riff de práctica que sube medio tono a la vez, muy usado como calentamiento de metal.",
        steps: [
          "En la cuerda 6, toca: 0-1-2-0-1-2, todo hacia abajo (down-picking).",
          "Repite en bucle, manteniendo cada púa firme y pareja.",
          "Sube el tempo gradualmente cada vez que salga limpio 4 veces seguidas.",
        ],
        example: {
          bpm: 100,
          notes: [
            { string: 0, fret: 0 },
            { string: 0, fret: 1 },
            { string: 0, fret: 2 },
            { string: 0, fret: 0 },
            { string: 0, fret: 1 },
            { string: 0, fret: 2 },
          ],
        },
      },
      {
        id: "metal-3",
        title: "Alternate picking en una cuerda",
        level: "principiante+",
        minutes: 8,
        description: "Alternar púa abajo-arriba constantemente: la base de la velocidad en metal.",
        steps: [
          "En la cuerda 6 al aire, alterna púa: abajo-arriba-abajo-arriba, sin parar.",
          "Empieza a 60 BPM (una púa por click) y sube de 5 en 5 BPM.",
          "Si empieza a sonar desparejo, baja el tempo: la precisión manda sobre la velocidad.",
        ],
      },
      {
        id: "metal-4",
        title: "Cambio de power chords veloz",
        level: "principiante+",
        minutes: 8,
        description: "Encadenar 3 power chords rápido, como en un riff de verso típico.",
        steps: [
          "E5 (traste 0) → G5 (traste 3) → A5 (traste 5) en la 6ta y 5ta cuerda, un tiempo cada uno.",
          "Repite el ciclo completo en bucle a 110 BPM.",
          "Mantén el palm mute activo todo el tiempo, incluso al cambiar de forma.",
        ],
      },
    ],
  },
  {
    id: "folclor",
    name: "Folclor",
    emoji: "🪕",
    blurb: "Rasgueos tradicionales y arpegios con bajo alternante.",
    exercises: [
      {
        id: "folclor-1",
        title: "Rasgueo de vals criollo (3/4)",
        level: "principiante",
        minutes: 6,
        description: "El compás de 3 tiempos típico de valses y bambucos latinoamericanos.",
        steps: [
          "Sobre Am, toca el patrón D-(silencio)-D-U-(silencio)-U (6 posiciones, compás de 3/4).",
          "Cuenta '1-2-3' en voz alta, sintiendo el vaivén de un vals.",
          "Practica con el metrónomo de la sección Ritmos en 3/4.",
        ],
        relatedChords: ["am"],
      },
      {
        id: "folclor-2",
        title: "Arpegio con bajo alternante",
        level: "principiante+",
        minutes: 8,
        description: "El pulgar 'camina' entre dos cuerdas graves mientras los otros dedos tejen la melodía.",
        steps: [
          "Sobre Am, alterna el pulgar entre la cuerda 5 y la cuerda 4.",
          "Entre cada golpe de pulgar, pulsa con i-m-a las cuerdas 3, 2 y 1 en orden.",
          "Repite muy lento hasta que el patrón se sienta automático.",
        ],
        relatedChords: ["am"],
      },
      {
        id: "folclor-3",
        title: "Rasgueo con acento de tresillo",
        level: "principiante+",
        minutes: 8,
        description: "Grupos de 3 golpes que le dan ese 'aire' de música andina o llanera.",
        steps: [
          "Rasguea D-D-D en grupos de 3, contando '1-2-3, 1-2-3' sin parar.",
          "Acentúa siempre el primer golpe de cada grupo de 3.",
          "Practica sobre Em antes de aplicarlo a una progresión completa.",
        ],
        relatedChords: ["em"],
      },
      {
        id: "folclor-4",
        title: "Progresión Am-Dm-E",
        level: "principiante+",
        minutes: 10,
        description: "Un giro armónico menor muy típico de la música folk latinoamericana.",
        steps: [
          "Un compás por acorde: Am → Dm → E → Am, en bucle.",
          "Rasgueo simple abajo-abajo-abajo-abajo mientras te acostumbras al cambio.",
          "Fíjate en cómo E (mayor) crea tensión antes de volver a Am.",
        ],
        relatedChords: ["am", "dm", "e"],
      },
    ],
  },
  {
    id: "clasica",
    name: "Clásica",
    emoji: "🎻",
    blurb: "Técnica de mano derecha: apoyando, arpegios y escalas.",
    exercises: [
      {
        id: "clasica-1",
        title: "Apoyando (rest stroke)",
        level: "principiante+",
        minutes: 8,
        description: "La técnica clásica de pulsar apoyándote en la cuerda siguiente, para un sonido más lleno.",
        steps: [
          "En la cuerda 3, pulsa con el dedo i y deja que termine apoyado sobre la cuerda 4.",
          "Alterna i-m-i-m, siempre apoyando el dedo que acaba de sonar.",
          "Repite 20 veces, muy lento, cuidando que el sonido sea limpio y lleno.",
        ],
      },
      {
        id: "clasica-2",
        title: "Arpegio clásico sobre Am",
        level: "principiante+",
        minutes: 8,
        description: "Usa el arpegio de La menor de la sección Arpegios como estudio de dinámica.",
        steps: [
          "Toca el arpegio de Am (ver sección Arpegios) muy suave (piano) 4 veces.",
          "Luego tócalo fuerte (forte) 4 veces, sin cambiar el tempo.",
          "Alterna piano y forte: controlar el volumen es tan importante como las notas.",
        ],
        relatedChords: ["am"],
      },
      {
        id: "clasica-3",
        title: "Escala de Do mayor en una cuerda",
        level: "principiante+",
        minutes: 8,
        description: "Tocar una escala completa en una sola cuerda ayuda a interiorizar las distancias entre notas.",
        steps: [
          "En la cuerda 3, toca Do-Re-Mi-Fa-Sol-La-Si-Do usando los dedos i-m alternados.",
          "Sube y luego baja la escala completa, muy lento y parejo.",
          "Apóyate en un afinador o piano para verificar que cada nota suene correcta.",
        ],
      },
      {
        id: "clasica-4",
        title: "Ligados sin púa",
        level: "principiante+",
        minutes: 8,
        description: "La técnica clásica evita la púa: todo el ligado depende de la fuerza de la mano izquierda.",
        steps: [
          "Repite el ejercicio de hammer-on y pull-off (traste 3 a 5, cuerda 3) sin usar la mano derecha en absoluto.",
          "Pulsa la primera nota con el pulgar y deja que el resto suene solo por los dedos de la izquierda.",
          "Repite en cada cuerda, de la 6ta a la 1ra.",
        ],
      },
    ],
  },
  {
    id: "blues",
    name: "Blues",
    emoji: "🎺",
    blurb: "Shuffle, bends y la caja pentatónica.",
    exercises: [
      {
        id: "blues-1",
        title: "Shuffle con palm mute",
        level: "principiante+",
        minutes: 8,
        description: "El ritmo 'shuffle' es el corazón del blues: corcheas desiguales, con swing.",
        steps: [
          "Aplica el patrón Shuffle/blues (sección Ritmos) sobre la cuerda 6 con palm mute ligero.",
          "Cuenta 'DUM-da' en vez de corcheas parejas, igual que en la sensación de swing.",
          "Practica 2 minutos seguidos sin perder el groove.",
        ],
      },
      {
        id: "blues-2",
        title: "Bend suave de medio tono",
        level: "principiante+",
        minutes: 6,
        description: "Empujar la cuerda para 'doblar' la nota es la firma sonora del blues.",
        steps: [
          "Pisa el traste 7 de la cuerda 3 con el dedo 3, apoyando 1 y 2 detrás como refuerzo.",
          "Empuja la cuerda hacia arriba medio tono (una nota) y suelta de vuelta.",
          "Repite despacio, escuchando que la nota 'doblada' suene afinada, no desafinada.",
        ],
      },
      {
        id: "blues-3",
        title: "Caja pentatónica con bend",
        level: "principiante+",
        minutes: 10,
        description: "El patrón de pentatónica menor, ahora con un bend expresivo al final de cada frase.",
        steps: [
          "Repite el patrón de pentatónica menor (sección Ejercicios) de la 6ta a la 1ra cuerda.",
          "En la última nota de cada frase (cuerda 2, traste 8), agrégale un bend suave.",
          "Practica muy lento: el bend necesita más control que velocidad.",
        ],
      },
      {
        id: "blues-4",
        title: "12 compases de blues simplificado",
        level: "principiante+",
        minutes: 12,
        description: "La estructura armónica más famosa de la música popular, en su versión más simple.",
        steps: [
          "Progresión: E (4 compases) → A (2) → E (2) → B (1) → A (1) → E (2).",
          "Un rasgueo shuffle simple en cada compás, sin parar el pulso.",
          "No te preocupes por memorizar la estructura de una vez: repite el ciclo varias veces.",
        ],
        relatedChords: ["e", "a", "b"],
      },
    ],
  },
  {
    id: "reggae",
    name: "Reggae",
    emoji: "🌴",
    blurb: "Todo pasa en el contratiempo.",
    exercises: [
      {
        id: "reggae-1",
        title: "Skank en contratiempo",
        level: "principiante",
        minutes: 6,
        description: "El golpe corto y apagado que define el reggae: solo en los tiempos débiles.",
        steps: [
          "Usa el patrón Reggae / offbeat (sección Ritmos) sobre Em.",
          "Rasguea SOLO hacia arriba, en los contratiempos — nunca en el tiempo fuerte.",
          "Mantén el golpe corto y apagado, casi percusivo.",
        ],
        relatedChords: ["em"],
      },
      {
        id: "reggae-2",
        title: "Acento en el 'y' del tiempo",
        level: "principiante+",
        minutes: 8,
        description: "Sentir exactamente dónde cae el contratiempo es la clave de todo el género.",
        steps: [
          "Cuenta en voz alta '1-y-2-y-3-y-4-y' de forma pareja.",
          "Rasguea solo en cada 'y', dejando los números en silencio.",
          "Practica primero sin guitarra, solo contando y chasqueando, hasta que se sienta natural.",
        ],
      },
      {
        id: "reggae-3",
        title: "Cambio rápido en el offbeat",
        level: "principiante+",
        minutes: 8,
        description: "Cambiar de acorde sin perder el contratiempo: el verdadero reto del reggae.",
        steps: [
          "Alterna Em → C, pero toca solo en los contratiempos de cada compás.",
          "Los tiempos fuertes quedan en silencio total: no rasguees ahí.",
          "Empieza muy lento; es más difícil de lo que parece.",
        ],
        relatedChords: ["em", "c"],
      },
      {
        id: "reggae-4",
        title: "Golpe percusivo (chuck)",
        level: "principiante+",
        minutes: 6,
        description: "Un golpe seco y corto que se usa como acento rítmico, casi como un tambor.",
        steps: [
          "Relaja la mano izquierda sobre las cuerdas para apagarlas por completo (sin pisar ningún traste).",
          "Rasguea un solo golpe corto y seco en el tiempo 3 de cada compás.",
          "Combínalo con el skank de los otros ejercicios de esta sección.",
        ],
      },
    ],
  },
  {
    id: "flamenco",
    name: "Flamenco",
    emoji: "💃",
    blurb: "Rasgueos rápidos y percusión sobre la guitarra.",
    exercises: [
      {
        id: "flamenco-1",
        title: "Rasgueo básico de un dedo",
        level: "principiante+",
        minutes: 8,
        description: "La base del rasgueo flamenco: velocidad y regularidad con un solo dedo.",
        steps: [
          "Sobre Am, rasguea rápido con el dedo índice: abajo-arriba-abajo-arriba sin parar.",
          "Mantén el mismo volumen y velocidad en cada golpe, sin acelerar ni frenar.",
          "Practica 1 minuto seguido, descansa, repite.",
        ],
        relatedChords: ["am"],
      },
      {
        id: "flamenco-2",
        title: "Golpe percusivo en la tapa",
        level: "principiante+",
        minutes: 6,
        description: "El flamenco usa la guitarra como instrumento de percusión además de melódico.",
        steps: [
          "Sostén un acorde simple (Em) con la mano izquierda.",
          "Entre rasgueos, da un golpecito corto con el borde de la mano derecha sobre la tapa.",
          "Alterna: rasgueo, golpe, rasgueo, golpe, manteniendo el pulso.",
        ],
        relatedChords: ["em"],
      },
      {
        id: "flamenco-3",
        title: "Picado simple i-m",
        level: "principiante+",
        minutes: 8,
        description: "Notas sueltas y rápidas alternando dos dedos, la base de las melodías flamencas.",
        steps: [
          "En la cuerda 1 al aire, alterna dedos i-m repetidamente.",
          "Mantén el pulso muy parejo, sin que un dedo 'pese' más que el otro.",
          "Sube el tempo gradualmente con el metrónomo.",
        ],
      },
      {
        id: "flamenco-4",
        title: "Cadencia andaluza simplificada",
        level: "principiante+",
        minutes: 8,
        description: "El cambio Am-E aparece en miles de canciones flamencas y de raíz española.",
        steps: [
          "Alterna Am → E, un compás cada uno, en bucle.",
          "Rasgueo simple al principio; cuando esté cómodo, usa el rasgueo del ejercicio 1.",
          "Escucha la tensión que crea E antes de resolver de vuelta a Am.",
        ],
        relatedChords: ["am", "e"],
      },
    ],
  },
  {
    id: "country",
    name: "Country",
    emoji: "🤠",
    blurb: "Bajo alternante y licks con hammer-on.",
    exercises: [
      {
        id: "country-1",
        title: "Patrón boom-chick",
        level: "principiante+",
        minutes: 8,
        description: "Bajo grave seguido de un rasgueo de cuerdas agudas: el sonido clásico del country.",
        steps: [
          "Sobre Sol mayor (G), pulsa solo la cuerda 6 ('boom').",
          "Inmediatamente después, rasguea las cuerdas 3, 2 y 1 juntas ('chick').",
          "Repite boom-chick-boom-chick en un patrón constante y relajado.",
        ],
        relatedChords: ["g"],
      },
      {
        id: "country-2",
        title: "Escala mayor para licks",
        level: "principiante",
        minutes: 6,
        description: "La escala mayor es la base de casi todos los licks melódicos de country.",
        steps: [
          "En la cuerda 2, toca Do-Re-Mi-Fa-Sol-La-Si-Do de ida y de vuelta.",
          "Mantén un tempo constante, sin apurar las notas más fáciles.",
          "Cuando la domines, intenta tocarla de memoria sin mirar la mano.",
        ],
      },
      {
        id: "country-3",
        title: "Hammer-on rápido estilo country",
        level: "principiante+",
        minutes: 6,
        description: "Un lick corto y característico: la base de muchos riffs country.",
        steps: [
          "En la cuerda 2, alterna rápido entre el traste 2 y el traste 3 usando hammer-on.",
          "No vuelvas a puntear con la púa entre nota y nota: solo el hammer-on debe sonar la segunda.",
          "Repite muchas veces seguidas hasta que salga fluido, casi mecánico.",
        ],
        example: {
          bpm: 90,
          notes: [
            { string: 1, fret: 2 },
            { string: 1, fret: 3 },
            { string: 1, fret: 2 },
            { string: 1, fret: 3 },
          ],
        },
      },
      {
        id: "country-4",
        title: "Progresión G-C-D",
        level: "principiante+",
        minutes: 10,
        description: "La progresión más típica del country: aparece en cientos de canciones clásicas.",
        steps: [
          "Un compás por acorde: G → C → D → G, en bucle.",
          "Rasgueo simple abajo-abajo-abajo-abajo mientras te acostumbras al cambio.",
          "Cuando fluya, prueba combinarlo con el patrón boom-chick.",
        ],
        relatedChords: ["g", "c", "d"],
      },
    ],
  },
  {
    id: "punk",
    name: "Punk",
    emoji: "⚡",
    blurb: "Rápido, directo, sin adornos.",
    exercises: [
      {
        id: "punk-1",
        title: "Todo hacia abajo, rápido",
        level: "principiante+",
        minutes: 8,
        description: "La filosofía punk en una frase: pura energía, sin complicarse.",
        steps: [
          "Forma el power chord E5 (cuerda 6 al aire + cuerda 5 traste 2).",
          "Usa el patrón Punk / corcheas rápidas (sección Ritmos): todo hacia abajo, sin parar.",
          "Aguanta 2 minutos seguidos sin que la muñeca se tense de más.",
        ],
      },
      {
        id: "punk-2",
        title: "Cambio de 2 power chords veloz",
        level: "principiante+",
        minutes: 8,
        description: "Velocidad de cambio, no de dedos complicados: así suena el punk clásico.",
        steps: [
          "Alterna E5 (traste 0) → A5 (traste 5), un compás cada uno.",
          "Tempo sugerido: 150 BPM.",
          "Si pierdes el tiempo, baja el tempo 10 BPM y vuelve a intentarlo.",
        ],
      },
      {
        id: "punk-3",
        title: "Palm mute constante",
        level: "principiante+",
        minutes: 8,
        description: "El palm mute nunca se suelta en punk: mantiene la energía apretada todo el tiempo.",
        steps: [
          "Toca power chords a tempo alto sin levantar la palma en ningún momento.",
          "Revisa que las cuerdas no 'timbreen' sueltas por falta de presión.",
          "Practica primero lento, y solo sube el tempo cuando el mute se mantenga firme.",
        ],
      },
      {
        id: "punk-4",
        title: "3 acordes, progresión punk",
        level: "principiante+",
        minutes: 10,
        description: "Tres power chords en bucle: la fórmula de incontables canciones punk-rock.",
        steps: [
          "E5 → A5 → B5, un compás cada uno, en bucle constante.",
          "Rasgueo todo hacia abajo, sin parar entre acordes.",
          "Cuando lo domines, prueba cantar cualquier frase corta encima.",
        ],
      },
    ],
  },
];
