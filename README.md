# Tutorial Guitar 🎸

App estática (Astro + Tailwind) para aprender guitarra desde cero. Todo corre en
el navegador: no hay backend y el progreso se guarda en `localStorage`.

## Secciones

| Ruta | Qué hay |
| :--- | :--- |
| `/` | Progreso: racha, ejercicios, canciones y plan elegido |
| `/plan` | Rutina semanal, quincenal o mensual |
| `/ejercicios` | Ejercicios generales + ejercicios por género musical |
| `/acordes` | Mayores, menores, séptimas, cejilla y alternativas sin cejilla |
| `/ritmos` | Patrones de rasgueo con audio, más ritmos por género |
| `/teoria` | Ritmo, melodía, armonía, compases, escalas |
| `/arpegios` | Arpegios generados a partir de la forma real de cada acorde |
| `/melodias` | 30 melodías en tablatura tocable |
| `/canciones` | Canciones completas: cifrado por compases, rasgueo, riffs y play-along |
| `/retos` | Reto diario y racha |
| `/afinador` | Tonos de referencia por cuerda y afinador por micrófono |

## Convención de cuerdas (importante)

En todos los datos (`src/data/*.ts`) el índice de cuerda es **0 = 6ta (Mi grave)
… 5 = 1ra (Mi aguda)**. La tablatura se dibuja al revés (arriba la 1ra), igual
que en cualquier tab impresa. Confundir ambas numeraciones es el error más fácil
de cometer al escribir contenido nuevo, por eso existe el lint de abajo.

## Comandos

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm check:tabs` | Lint de contenido musical (ver abajo) |
| `pnpm check` | Lint de contenido + `astro check` (tipos) |
| `pnpm build` | Lint de contenido + build a `./dist/` |
| `pnpm preview` | Previsualiza el build |

### Lint de contenido musical

`scripts/check-tabs.mjs` corre automáticamente antes de cada build y verifica:

1. Índices de cuerda dentro de 0..5 y trastes posibles.
2. Que si un texto dice "cuerda 3", la tablatura de ese mismo bloque marque esa
   cuerda (el desajuste texto ↔ tablatura).
3. Que cada patrón de rasgueo tenga tantas posiciones como su compás (8 en 4/4,
   6 en 3/4 y 6/8).
4. Que las canciones solo usen ids de acorde que existan en `src/data/chords.ts`.

## Contenido y derechos

Las canciones de `/canciones` son tradicionales o de dominio público, y se
publican solo como cifrado, patrón de rasgueo y tablatura propia: no se
reproduce ninguna letra.
