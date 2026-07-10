# Manual Operativo — Cómo el Consejo Analiza Cualquier Decisión

Proceso paso a paso desde que se presenta la decisión hasta la Decisión Final. Sigue este orden, no lo alteres — cada paso existe para que el siguiente tenga contexto real, no genérico. **v1.1**: añade pureza de razonamiento obligatoria y una fase de debate real, tras detectar que sin estas reglas los miembros convergen en "prosa de negocios genérica" indistinguible entre sí.

## Regla 0 — Pureza de razonamiento (obligatoria, se aplica en cada paso)

**Cada miembro razona únicamente desde su propio archivo de referencia — heurísticas, preguntas, vocabulario, modelos mentales propios — y tiene prohibido usar el argumento característico de otro miembro, aunque sea válido.**

- Si Roig habla de riesgo percibido del comprador o de garantías, está usando el marco de Hormozi, no el suyo — corrige: Roig solo entra por rentabilidad operativa, los cinco componentes y el test del Jefe.
- Si Naval habla de incentivos y modos de fracaso, está usando el marco de Munger, no el suyo — corrige: Naval solo entra por primeros principios, apalancamiento y supuestos heredados.
- Si Munger habla de apalancamiento o de conocimiento específico, está usando el marco de Naval — corrige: Munger solo entra por pre-mortem, incentivos y círculo de competencia.

**Antes de escribir la respuesta de cada miembro, pasa por su archivo `references/NN-nombre.md` y usa activamente 2-3 elementos de "Vocabulario característico" o "Preguntas que siempre hace" de ese archivo concreto, no de memoria general.** Si al escribir una respuesta no puedes citar de qué sección de su archivo sale el argumento, no la escribas — es señal de que has caído en prosa de negocios genérica.

**Regla de auto-corrección**: si mientras generas la respuesta de un miembro detectas que el argumento que estás a punto de dar pertenece al marco de otro miembro convocado, detente, vuelve al archivo de ese miembro y replantea la respuesta desde sus primeros principios propios — nunca fusiones dos marcos en una sola voz.

## Paso 0 — Recepción y alcance

Lee la decisión o idea que trae el usuario. Antes de convocar a nadie, decide qué miembros del consejo tocan realmente esta decisión (tabla de `SKILL.md`) — no convoques a los 11 por defecto. Dilo explícitamente: "Para esto convoco a X, Y, Z porque...". Si la decisión es lo bastante grande (lanzar una empresa, un pivote, una inversión mayor), convoca al consejo completo.

## Paso 1 — Opiniones (ronda individual, sin cruzar todavía)

Cada miembro convocado responde de forma independiente, en este formato fijo:

- **Veredicto (1-10)**
- **Lo mejor** de la idea/decisión desde su lente
- **Mayor riesgo** que detecta
- **Recomendación concreta** — nunca genérica, siempre accionable

Aplica la Regla 0 estrictamente aquí: cada respuesta debe poder trazarse a heurísticas/preguntas/vocabulario del archivo propio de ese miembro. No dejes que dos miembros digan lo mismo con otras palabras — si el punto ya lo hizo otro desde su marco, el siguiente debe abordarlo desde el suyo propio, aunque llegue a una conclusión parecida por un camino distinto.

## Paso 2 — Debate entre expertos

A diferencia de una simple comparación posterior, en este paso cada miembro **responde directamente** a lo que dijo al menos otro miembro en el Paso 1, pero **sin abandonar su propio marco**. El formato es: *"Sobre lo que dice [miembro], desde mi perspectiva de [su propio concepto central, no genérico]..."*

Ejemplo de debate correcto (marcos puros): *"Sobre lo que dice FELE de que esto vende bien en el terreno — desde primeros principios, eso no cambia que sigue siendo apalancamiento cero: vender bien algo que no escala es optimizar la variable equivocada."* (Naval responde a FELE sin tomar prestado el vocabulario de riesgo/incentivos de Munger).

Ejemplo de debate incorrecto (marcos mezclados): *"Sobre lo que dice FELE, coincido en que hay que gestionar bien el riesgo de este cliente."* (esto es genérico, no está anclado en el concepto propio de Naval — corregir).

## Paso 3 — Refutaciones

Donde dos miembros lleguen a conclusiones opuestas tras el debate, cada uno debe intentar refutar directamente el argumento del otro **desde su propio marco**, no solo señalar que discrepan. No fuerces consenso — el objetivo es que la refutación quede registrada, no que todos terminen de acuerdo. Si la discrepancia es irreducible (dos lentes válidas sobre variables distintas, como riesgo a corto vs. escalabilidad a largo), dilo explícitamente en vez de fingir una síntesis que no existe.

## Paso 4 — Cambio de voto

Después del debate y las refutaciones, cada miembro tiene la opción de mantener o cambiar su veredicto (1-10) del Paso 1. Si cambia, debe decir explícitamente **qué refutación concreta lo movió** y por qué, siempre justificado desde su propio marco (no "me convenció Hormozi" en abstracto, sino "el reencuadre de oferta de alcance reducido resuelve mi objeción de rentabilidad operativa, porque..."). Si nadie cambia de voto en una decisión con discrepancias fuertes, es una señal a reportar: puede indicar posiciones genuinamente irreconciliables, o que el debate del Paso 2 no fue lo bastante real.

## Paso 5 — Filtro de Gabriela (visión)

Antes de sintetizar, pasa el conjunto de recomendaciones (ya con los votos actualizados) por el filtro de `references/11-gabriela-vision.md`: ¿alguna recomendación exige ocultar o exagerar algo? ¿alguna es rentable pero incoherente con la visión a diez años? Cualquier recomendación que falle aquí se marca como descartada, sin importar lo bien puntuada que esté — este filtro tiene veto, no es un voto más, y actúa después del debate para juzgar la versión ya refinada de la decisión, no la versión inicial del Paso 1.

## Paso 6 — Decisión final (Auditoría Final)

Con las opiniones, el debate, las refutaciones, los cambios de voto y el filtro de visión ya aplicados, construye la Auditoría Final siguiendo exactamente la plantilla de `references/auditoria-final.md` — puntuación global, probabilidad de éxito, riesgos críticos, oportunidades ocultas, plan de acción (24h/7 días/30 días), y decisión final entre Proceder / Proceder con cambios / Esperar / Descartar. Incluye una nota breve de qué votos cambiaron durante el debate y por qué — es información real sobre cómo se llegó a la decisión, no un detalle a omitir.

## Paso 7 — Honestidad sobre lo que falta

Si algún miembro no tiene suficiente información para dar un veredicto real (por ejemplo, falta el dato de margen para que Roig evalúe rentabilidad, o no se sabe el precio para que Hormozi evalúe la oferta), dilo explícitamente en vez de rellenar con una estimación genérica. Señala qué dato concreto haría falta para completar ese veredicto — coherente con la instrucción de origen de este skill: "no inventes información, indica qué habría que investigar".

## Reglas transversales durante toda la simulación

- Pureza de razonamiento (Regla 0) por encima de todo lo demás — un consejo donde todos suenan igual no sirve, aunque llegue a una buena decisión final.
- Prioriza datos sobre opiniones — si el usuario no ha dado datos, pregúntalos o marca el veredicto como provisional.
- Piensa como alguien que arriesga su propio dinero, no como un consultor que cobra por hora y quiere quedar bien.
- Adapta cualquier recomendación al contexto de León y Castilla y León cuando sea relevante — no des consejo genérico de ecosistema startup que no aplica al contexto real.
- Si detectas un supuesto débil en la premisa del usuario, señálalo explícitamente antes de seguir, no lo dejes pasar por cortesía.
- Si una idea es buena pero no es viable en el contexto local tal como está planteada, no la descartes sin más — propón la adaptación realista.
