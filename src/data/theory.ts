export interface TheoryTopic {
  id: string;
  title: string;
  summary: string;
  points: string[];
  category: "pilar" | "general";
}

/** Los 3 pilares: toda pieza musical se explica combinando estos tres elementos. */
export const pillarTopics: TheoryTopic[] = [
  {
    id: "th-ritmo",
    title: "Ritmo",
    summary: "La organización de la música en el tiempo: cuándo suena cada nota y cuánto dura.",
    points: [
      "Es el 'esqueleto' de una canción — lo que haces con la mano derecha al rasguear.",
      "Se mide en pulsos (beats) agrupados en compases, ej. 4/4 = 4 pulsos por compás.",
      "Puedes tener ritmo sin melodía (percusión), pero no melodía sin ritmo.",
      "Practica ritmo con la sección de Ritmos y el metrónomo, aunque toques una sola cuerda.",
    ],
    category: "pilar",
  },
  {
    id: "th-melodia",
    title: "Melodía",
    summary: "Una sucesión de notas, una detrás de otra, que forman una frase reconocible.",
    points: [
      "Es lo que tarareas de una canción — la parte 'cantable'.",
      "Se toca nota por nota (no varias a la vez, como un acorde).",
      "En la guitarra, las melodías simples suelen tocarse en 1 o 2 cuerdas.",
      "La sección de Melodías tiene ejemplos para practicar esto directamente.",
    ],
    category: "pilar",
  },
  {
    id: "th-armonia",
    title: "Armonía",
    summary: "Varias notas sonando juntas (acordes) que acompañan y le dan 'color' a la melodía.",
    points: [
      "Es la base que sostiene la canción — normalmente lo que rasgueas con acordes.",
      "Una progresión de acordes (ej. C-G-Am-Em) es una secuencia armónica.",
      "La misma melodía suena distinta según qué acordes la acompañen.",
      "Practica armonía en la sección de Acordes y en los ejercicios de cambios.",
    ],
    category: "pilar",
  },
];

export const theoryTopics: TheoryTopic[] = [
  {
    id: "th-compas",
    title: "Compás y tiempo",
    summary: "El compás organiza la música en grupos de pulsos regulares.",
    points: [
      "4/4 (el más común): 4 pulsos por compás, cada pulso es una negra.",
      "3/4: 3 pulsos por compás — el 'vals'.",
      "El metrónomo marca el pulso; cuenta '1, 2, 3, 4' en voz alta mientras rasgueas.",
    ],
    category: "general",
  },
  {
    id: "th-acordes",
    title: "Acordes mayores y menores",
    summary: "Un acorde mayor suena 'alegre', uno menor suena 'triste' o melancólico.",
    points: [
      "Se forman apilando notas de una escala: tónica, tercera y quinta.",
      "Un acorde mayor tiene tercera mayor; uno menor tiene tercera menor (medio tono más abajo).",
      "Empieza memorizando 4 acordes abiertos: Em, Am, C, G — cubren cientos de canciones.",
    ],
    category: "general",
  },
  {
    id: "th-escala",
    title: "Escala mayor (patrón básico)",
    summary: "La escala mayor es la base de la melodía occidental.",
    points: [
      "Patrón de tonos y semitonos: T-T-S-T-T-T-S.",
      "Escala de Do mayor: Do-Re-Mi-Fa-Sol-La-Si-Do (sin sostenidos, ideal para empezar).",
      "Practícala en una sola cuerda antes de intentarla en varias posiciones.",
    ],
    category: "general",
  },
  {
    id: "th-intervalos",
    title: "Intervalos básicos",
    summary: "Un intervalo es la distancia entre dos notas.",
    points: [
      "Semitono = 1 traste. Tono = 2 trastes.",
      "Octava = 12 trastes (misma nota, más aguda).",
      "Reconocer intervalos de oído ayuda a improvisar y a afinar mejor.",
    ],
    category: "general",
  },
  {
    id: "th-tempo",
    title: "Tempo (BPM)",
    summary: "La velocidad a la que se toca la música, medida en pulsos por minuto.",
    points: [
      "BPM = beats per minute. 60 BPM = 1 pulso por segundo.",
      "Practicar lento y subir gradualmente es la forma más rápida de aprender bien.",
      "La mayoría de canciones pop/rock están entre 90 y 130 BPM.",
    ],
    category: "general",
  },
  {
    id: "th-progresiones",
    title: "Progresiones de acordes",
    summary: "El orden en que se encadenan los acordes a lo largo de una canción.",
    points: [
      "Una progresión es simplemente una lista de acordes que se repite, ej. C-G-Am-F.",
      "Muchísimas canciones populares comparten las mismas 4-5 progresiones básicas.",
      "Cambiar el orden de los mismos acordes puede cambiar totalmente el 'sentimiento' de la canción.",
    ],
    category: "general",
  },
  {
    id: "th-cejilla",
    title: "Cejilla (barré)",
    summary: "Un solo dedo (normalmente el índice) pisa varias cuerdas a la vez, haciendo de 'cejuela móvil'.",
    points: [
      "Permite tocar cualquier acorde mayor o menor en cualquier tonalidad, moviendo la misma forma por el mástil.",
      "Las formas más comunes se basan en los acordes abiertos de Mi (E) y La (A).",
      "Al principio suena apagada: es normal, la fuerza y la posición del dedo mejoran con práctica.",
      "Revisa la sección Acordes: cada acorde con cejilla tiene una alternativa más fácil marcada con ⭐.",
    ],
    category: "general",
  },
  {
    id: "th-septima",
    title: "Acordes de séptima",
    summary: "Agregar la séptima nota de la escala a un acorde le da un color más 'jazzy' o de tensión.",
    points: [
      "Un acorde de séptima dominante (ej. G7) crea tensión que 'pide' resolver a otro acorde (ej. C).",
      "Cm7, Am7... son versiones menores con séptima, más suaves que el acorde menor simple.",
      "Muchas canciones usan V7 (quinto grado con séptima) justo antes de volver a la tónica.",
    ],
    category: "general",
  },
  {
    id: "th-power-chords",
    title: "Power chords",
    summary: "Un acorde de solo 2 notas (raíz y quinta) que no es ni mayor ni menor.",
    points: [
      "Se escribe con un '5' (ej. E5, A5): son la base del rock y el metal.",
      "Al no tener tercera, no define si el acorde es mayor o menor — funciona en casi cualquier contexto.",
      "Se toca muy seguido con palm mute, para un sonido más compacto y percusivo.",
    ],
    category: "general",
  },
  {
    id: "th-palm-mute",
    title: "Palm mute",
    summary: "Apoyar el borde de la mano derecha sobre las cuerdas cerca del puente para apagarlas parcialmente.",
    points: [
      "Da un sonido más corto y percusivo, muy usado en rock, metal y punk.",
      "No es apagar del todo: la nota debe seguir sonando, solo más corta y opaca.",
      "Practica alternando compases con y sin palm mute para notar bien la diferencia.",
    ],
    category: "general",
  },
  {
    id: "th-ligados",
    title: "Ligados: hammer-on y pull-off",
    summary: "Sonar una nota sin volver a puntear con la púa, usando solo la mano izquierda.",
    points: [
      "Hammer-on: 'golpeas' un traste más arriba dejando sonar la cuerda ya pulsada.",
      "Pull-off: sueltas un dedo tirando levemente para sonar una nota más grave.",
      "Dan fluidez a una frase: suena más 'ligado' que tocar nota por nota con la púa.",
    ],
    category: "general",
  },
  {
    id: "th-bend",
    title: "Bend (doblar la cuerda)",
    summary: "Empujar una cuerda hacia arriba o abajo para subir su altura sin cambiar de traste.",
    points: [
      "Un bend de 'un tono' sube la nota lo mismo que si pisaras 2 trastes más arriba.",
      "Es una de las técnicas más expresivas del blues y el rock.",
      "Necesita fuerza y control: practica primero bends pequeños (medio tono) antes de un tono completo.",
    ],
    category: "general",
  },
  {
    id: "th-vibrato",
    title: "Vibrato",
    summary: "Oscilar rápidamente la altura de una nota sostenida para darle vida y expresión.",
    points: [
      "Se hace moviendo la cuerda de lado a lado, o empujándola y soltándola repetidamente.",
      "Un buen vibrato es parejo: misma velocidad y amplitud durante toda la nota.",
      "Úsalo en notas largas, sobre todo al final de una frase, no en cada nota que toques.",
    ],
    category: "general",
  },
  {
    id: "th-arpegio",
    title: "Arpegio",
    summary: "Tocar las notas de un acorde una por una, en vez de todas juntas.",
    points: [
      "Un acorde de Do mayor (Do-Mi-Sol) tocado en arpegio suena Do, luego Mi, luego Sol, por separado.",
      "Es una forma de acompañar una canción con más textura que un simple rasgueo.",
      "Practica en la sección Arpegios: cada uno usa exactamente la forma real del acorde correspondiente.",
    ],
    category: "general",
  },
  {
    id: "th-pentatonica-menor",
    title: "Escala pentatónica menor",
    summary: "Una escala de solo 5 notas, la más usada para improvisar solos de rock y blues.",
    points: [
      "Se llama 'pentatónica' porque tiene 5 notas por octava, en vez de las 7 de la escala mayor.",
      "Al no tener semitonos 'raros', es difícil que suene mal aunque improvises con libertad.",
      "El patrón de caja que se practica en Ejercicios es el punto de partida clásico.",
    ],
    category: "general",
  },
  {
    id: "th-pentatonica-mayor",
    title: "Escala pentatónica mayor",
    summary: "La versión 'alegre' de la pentatónica, muy usada en country, pop y rock suave.",
    points: [
      "Comparte notas con la pentatónica menor de su relativo (ej. Do mayor y La menor).",
      "Suena más brillante y abierta que la pentatónica menor.",
      "Es una buena escala para empezar a improvisar melodías simples y optimistas.",
    ],
    category: "general",
  },
  {
    id: "th-relativo-menor",
    title: "Relativo menor",
    summary: "Cada tonalidad mayor tiene una tonalidad menor 'hermana' que comparte exactamente las mismas notas.",
    points: [
      "La menor es el relativo menor de Do mayor: ambas usan solo notas naturales, sin sostenidos.",
      "Empiezan en un lugar distinto de la escala, pero comparten las 7 mismas notas.",
      "Por eso Am y C suenan tan bien juntos: pertenecen a la misma familia de notas.",
    ],
    category: "general",
  },
  {
    id: "th-circulo-quintas",
    title: "Círculo de quintas (básico)",
    summary: "Un mapa que muestra qué tan 'cerca' están las tonalidades entre sí.",
    points: [
      "Cada paso en el círculo sube o baja una quinta (7 semitonos).",
      "Tonalidades vecinas en el círculo comparten casi todas sus notas — combinan bien entre sí.",
      "No hace falta memorizarlo completo: saber que existe ayuda a entender por qué ciertos acordes 'quedan bien' juntos.",
    ],
    category: "general",
  },
  {
    id: "th-cadencia",
    title: "Cadencia",
    summary: "La forma en que una frase musical 'termina' o resuelve, dando sensación de descanso o de continuidad.",
    points: [
      "Una cadencia perfecta (V-I) suena a final definitivo, como un punto final.",
      "Una cadencia que termina en un acorde inesperado suena 'abierta', como si continuara.",
      "Escucha el final de tus progresiones favoritas: casi siempre hay una cadencia justo ahí.",
    ],
    category: "general",
  },
  {
    id: "th-funciones-armonicas",
    title: "Tónica, subdominante y dominante",
    summary: "En cualquier tonalidad, los acordes I, IV y V cumplen roles distintos: reposo, movimiento y tensión.",
    points: [
      "I (tónica) = 'casa', el acorde que se siente como punto de partida y de llegada.",
      "IV (subdominante) = movimiento, aleja un poco de la tónica sin crear mucha tensión.",
      "V (dominante) = tensión, 'pide' resolver de vuelta a la tónica.",
      "En Do mayor: I=C, IV=F, V=G — la base armónica de miles de canciones.",
    ],
    category: "general",
  },
  {
    id: "th-tonica",
    title: "Nota tónica",
    summary: "La nota que da nombre a una tonalidad y funciona como su 'centro de gravedad'.",
    points: [
      "En 'Do mayor', Do es la tónica: todo suena en relación a ella.",
      "Una melodía casi siempre empieza o termina en la tónica, o muy cerca de ella.",
      "Encontrar la tónica de oído es el primer paso para aprender a tocar canciones de oído.",
    ],
    category: "general",
  },
  {
    id: "th-afinacion",
    title: "Por qué la guitarra se afina así",
    summary: "La afinación estándar (Mi-La-Re-Sol-Si-Mi) no es aleatoria: está pensada para que los acordes sean cómodos.",
    points: [
      "Entre la mayoría de cuerdas hay una distancia de 4ta justa (5 trastes).",
      "Entre la 3ra y la 2da cuerda (Sol-Si) hay una excepción: solo 4 trastes de distancia.",
      "Esa distribución es justo lo que hace posible tocar acordes abiertos con formas relativamente simples.",
    ],
    category: "general",
  },
  {
    id: "th-cifrado",
    title: "Cifrado americano",
    summary: "El sistema de letras (C, Am, G7...) que se usa para nombrar acordes en canciones.",
    points: [
      "Letra mayúscula sola = acorde mayor (C = Do mayor).",
      "Letra + 'm' = acorde menor (Am = La menor).",
      "Números añadidos (7, maj7, sus4...) agregan color: indican qué notas extra tiene el acorde.",
    ],
    category: "general",
  },
  {
    id: "th-anacrusa",
    title: "Anacrusa",
    summary: "Cuando una canción o frase empieza antes del primer tiempo fuerte del compás.",
    points: [
      "Es muy común: muchas canciones 'entran' medio pulso o un pulso antes del '1'.",
      "Si tocas junto a una grabación y sientes que 'no encajas', puede que la canción tenga anacrusa.",
      "Practica el ritmo de Anacrusa en la sección Ritmos para sentirlo directamente en la guitarra.",
    ],
    category: "general",
  },
  {
    id: "th-sincopa",
    title: "Síncopa",
    summary: "Acentuar un tiempo débil (o un contratiempo) en vez del tiempo fuerte esperado.",
    points: [
      "Le da 'groove' y sorpresa a un ritmo que de otra forma sonaría predecible.",
      "El reggae y el funk usan síncopa todo el tiempo.",
      "Se siente antes de entenderse del todo: escúchala en tus canciones favoritas e intenta identificarla.",
    ],
    category: "general",
  },
  {
    id: "th-subdivision",
    title: "Subdivisión del pulso",
    summary: "Dividir cada tiempo en partes más pequeñas: corcheas, tresillos, semicorcheas.",
    points: [
      "Una negra (1 tiempo) dividida en 2 = corcheas. Dividida en 3 = tresillo.",
      "El shuffle y el blues usan subdivisión en tresillos, lo que le da ese 'balanceo' característico.",
      "Contar en voz alta ('1-y-2-y' o '1-tri-plet-2-tri-plet') ayuda a sentir la subdivisión.",
    ],
    category: "general",
  },
  {
    id: "th-dinamica",
    title: "Dinámica (piano y forte)",
    summary: "Variar el volumen con el que tocas para darle expresión a la música.",
    points: [
      "Piano (suave) y forte (fuerte) son los dos extremos básicos.",
      "Tocar todo al mismo volumen suena plano, aunque las notas sean correctas.",
      "En la guitarra, la dinámica se controla con la fuerza del rasgueo o de la pulsación.",
    ],
    category: "general",
  },
  {
    id: "th-textura",
    title: "Textura musical",
    summary: "Cómo se combinan melodía y acompañamiento: una sola voz, o varias capas sonando juntas.",
    points: [
      "Melodía sola (una guitarra tocando solo notas) es una textura simple.",
      "Melodía + acordes (cantar mientras rasgueas) agrega una capa de acompañamiento.",
      "Un arpegio bajo una melodía cantada es una textura todavía más rica.",
    ],
    category: "general",
  },
  {
    id: "th-forma-cancion",
    title: "Forma de canción (verso-coro)",
    summary: "La estructura típica en la que se organiza una canción popular.",
    points: [
      "Verso → Coro → Verso → Coro → Puente → Coro es una estructura muy clásica.",
      "El coro suele repetir la misma progresión y melodía cada vez; el verso puede variar la letra.",
      "Reconocer la forma de una canción te ayuda a memorizarla completa mucho más rápido.",
    ],
    category: "general",
  },
  {
    id: "th-transposicion",
    title: "Transposición",
    summary: "Cambiar una canción de tonalidad, moviendo todos sus acordes la misma distancia.",
    points: [
      "Se hace para adaptar una canción a tu rango vocal, o para que sea más fácil de tocar.",
      "Un capo es la forma más simple de transportar sin cambiar las formas de acorde que ya sabes.",
      "Ej: si G-C-D no te queda cómodo para cantar, transportarlo puede volverlo mucho más simple.",
    ],
    category: "general",
  },
  {
    id: "th-capo",
    title: "Capotraste (capo)",
    summary: "Una pinza que 'acorta' el mástil, subiendo la afinación de todas las cuerdas a la vez.",
    points: [
      "Te deja seguir usando las formas de acorde abierto que ya sabes, en una tonalidad más alta.",
      "Muy usado en canciones acústicas y de cantautor.",
      "Cada traste que subes el capo, sube un semitono la tonalidad completa de la canción.",
    ],
    category: "general",
  },
  {
    id: "th-digitacion",
    title: "Digitación",
    summary: "Qué dedo usas para tocar cada nota, y por qué eso importa tanto como tocar la nota correcta.",
    points: [
      "Una buena digitación evita saltos innecesarios y hace las transiciones mucho más fluidas.",
      "En primera posición, cada dedo suele ser 'dueño' de un traste fijo (dedo 1 = traste 1, etc.).",
      "Los ejercicios cromáticos existen justo para entrenar esta independencia de dedos.",
    ],
    category: "general",
  },
  {
    id: "th-picking-alterno",
    title: "Púa alterna (alternate picking)",
    summary: "Alternar constantemente entre golpe de púa hacia abajo y hacia arriba.",
    points: [
      "Es más eficiente que puntear todo hacia abajo: permite tocar mucho más rápido.",
      "Se practica primero muy lento con metrónomo, cuidando que ambos golpes suenen igual de parejos.",
      "Es la base técnica detrás de la mayoría de riffs y solos rápidos.",
    ],
    category: "general",
  },
  {
    id: "th-fingerstyle",
    title: "Fingerstyle (púa con los dedos)",
    summary: "Tocar la guitarra usando los dedos de la mano derecha en vez de una púa.",
    points: [
      "El pulgar suele encargarse de las cuerdas graves, y los demás dedos de las agudas.",
      "Permite tocar varias voces a la vez: bajo, acordes y melodía al mismo tiempo.",
      "Los arpegios de la sección Arpegios son un buen punto de entrada al fingerstyle.",
    ],
    category: "general",
  },
  {
    id: "th-groove",
    title: "Groove / feel",
    summary: "La sensación rítmica particular que hace que un estilo musical 'se sienta' de una forma reconocible.",
    points: [
      "No es solo el tempo: es CÓMO se acentúan y se sienten los pulsos.",
      "El mismo acorde tocado con groove de reggae o de rock suena completamente distinto.",
      "Escuchar mucha música de un género es la mejor forma de interiorizar su groove.",
    ],
    category: "general",
  },
  {
    id: "th-improvisacion",
    title: "Improvisación básica",
    summary: "Crear melodías propias en el momento, usando una escala como 'mapa' de notas seguras.",
    points: [
      "Elige una escala (ej. pentatónica menor) que combine con la progresión que estás tocando.",
      "No hace falta tocar rápido: unas pocas notas bien colocadas suenan mejor que muchas al azar.",
      "Empieza repitiendo pequeñas frases (2-3 notas) antes de intentar solos largos.",
    ],
    category: "general",
  },
];
