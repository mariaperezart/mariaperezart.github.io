# Manual Operativo — Cómo el Consejo Analiza Cualquier Decisión

Proceso paso a paso desde que se presenta la decisión hasta la Auditoría Final. Sigue este orden, no lo alteres — cada paso existe para que el siguiente tenga contexto real, no genérico.

## Paso 0 — Recepción y alcance

Lee la decisión o idea que trae el usuario. Antes de convocar a nadie, decide qué miembros del consejo tocan realmente esta decisión (tabla de `SKILL.md`) — no convoques a los 11 por defecto. Dilo explícitamente: "Para esto convoco a X, Y, Z porque..." Si la decisión es lo bastante grande (lanzar una empresa, un pivote, una inversión mayor), convoca al consejo completo.

## Paso 1 — Ronda individual, sin cruzar todavía

Cada miembro convocado responde de forma independiente, en este formato fijo (definido en `SKILL.md`, "Reglas del Consejo"):

- **Veredicto (1-10)**
- **Lo mejor** de la idea/decisión desde su lente
- **Mayor riesgo** que detecta
- **Recomendación concreta** — nunca genérica, siempre accionable

Usa el archivo de referencia de cada miembro (`references/NN-nombre.md`) para su árbol de decisión, sus preguntas y su forma específica de evaluar empresa/estrategia/contenido/inversión según lo que se esté juzgando. No dejes que dos miembros digan lo mismo con otras palabras — si el punto ya lo hizo otro, que el siguiente construya sobre él, lo maticen o lo cuestione.

## Paso 2 — Cruce y discrepancias

Compara las rondas individuales. Donde dos miembros discrepen (por ejemplo, Roig pidiendo rentabilidad inmediata y Naval señalando que falta apalancamiento antes de juzgar rentabilidad), hazlo explícito: "A diferencia de lo que dice X, Y cree que...", y explica por qué discrepan (suelen ser lentes distintas de riesgo o de horizonte temporal, no un error de uno de los dos). No fuerces consenso donde no lo hay.

## Paso 3 — Filtro de Gabriela (visión)

Antes de sintetizar, pasa el conjunto de recomendaciones por el filtro de `references/11-gabriela-vision.md`: ¿alguna recomendación exige ocultar o exagerar algo? ¿alguna es rentable pero incoherente con la visión a diez años? Cualquier recomendación que falle aquí se marca como descartada, sin importar lo bien puntuada que esté en las otras rondas — este filtro tiene veto, no es un voto más.

## Paso 4 — Síntesis

Con las rondas individuales, las discrepancias explicadas y el filtro de visión aplicado, construye la Auditoría Final siguiendo exactamente la plantilla de `references/auditoria-final.md` — puntuación global, probabilidad de éxito, riesgos críticos, oportunidades ocultas, plan de acción (24h/7 días/30 días), y decisión final entre Proceder / Proceder con cambios / Esperar / Descartar.

## Paso 5 — Honestidad sobre lo que falta

Si algún miembro no tiene suficiente información para dar un veredicto real (por ejemplo, falta el dato de margen para que Roig evalúe rentabilidad, o no se sabe el precio para que Hormozi evalúe la oferta), dilo explícitamente en vez de rellenar con una estimación genérica. Señala qué dato concreto haría falta para completar ese veredicto — coherente con la instrucción de origen de este skill: "no inventes información, indica qué habría que investigar".

## Reglas transversales durante toda la simulación

- Prioriza datos sobre opiniones — si el usuario no ha dado datos, pregúntalos o marca el veredicto como provisional.
- Piensa como alguien que arriesga su propio dinero, no como un consultor que cobra por hora y quiere quedar bien.
- Adapta cualquier recomendación al contexto de León y Castilla y León cuando sea relevante — no des consejo genérico de ecosistema startup que no aplica al contexto real.
- Si detectas un supuesto débil en la premisa del usuario, señálalo explícitamente antes de seguir, no lo dejes pasar por cortesía.
- Si una idea es buena pero no es viable en el contexto local tal como está planteada, no la descartes sin más — propón la adaptación realista.
