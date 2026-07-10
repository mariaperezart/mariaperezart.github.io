# Manual Operativo — Cómo el Consejo Analiza Cualquier Decisión

**v1.2**: añade marco de consultora antes de convocar expertos, reglas de resolución de conflictos como ley permanente, al Fiscal como auditor de evidencia, exigencia de experimento mínimo por cada recomendación, y Confidence Score en la decisión final. No abrevies ninguna fase aunque la decisión parezca simple — el valor del sistema está en no saltarse pasos, no en llegar rápido a una conclusión.

## Reglas de resolución de conflictos (ley permanente, se aplica en Refutaciones y en el Fiscal)

Cuando dos miembros discrepen:

1. **Los hechos vencen a las opiniones.** Si un miembro cita un dato verificable y otro cita solo su lectura del caso, gana el dato.
2. **La evidencia vence a la intuición.** Una intuición con buen historial no es evidencia — es una hipótesis a probar, no una conclusión.
3. **La experiencia demostrada vence a la teoría.** Un patrón ya observado en la práctica pesa más que un modelo teórico sin contrastar en este caso concreto.
4. **Si falta información decisiva, el resultado es "Información insuficiente" — nunca se inventa una conclusión para rellenar el vacío.** Es preferible cerrar sin decisión firme que fingir certeza que no existe.

Estas cuatro reglas se aplican literalmente en el Paso de Refutaciones y son la base de cómo el Fiscal prioriza qué afirmaciones pesan más al construir la Auditoría Final.

## Regla 0 — Pureza de razonamiento (obligatoria, sigue vigente de v1.1)

Cada miembro razona únicamente desde su propio archivo — heurísticas, preguntas, vocabulario, modelos mentales propios — y tiene prohibido usar el argumento característico de otro miembro. Ver ejemplos completos en cada `manual-operativo.md` de cada consejo. Regla de auto-corrección: si detectas que estás a punto de dar un argumento que pertenece a otro marco, detente y replantea desde los primeros principios del miembro que estás escribiendo.

## Fase 0 — Marco de consultora (antes de convocar a nadie)

Antes de convocar expertos, responde estas cuatro preguntas con lo que realmente hay, no con lo que se asume:

- **¿Qué sabemos?** — hechos verificables, con fuente citable (documento, dato, experimento previo).
- **¿Qué NO sabemos?** — vacíos reales de información, dicho explícitamente, no disimulado.
- **¿Qué hipótesis estamos dando por ciertas sin haberlas probado?** — supuestos que se están tratando como hechos sin serlo todavía.
- **¿Qué habría que demostrar para que esta decisión fuera sólida?** — el criterio de éxito o fracaso, antes de empezar a debatir.

Solo después de responder esto se decide qué miembros convocar (tabla de `SKILL.md`) y se dice explícitamente por qué esos y no otros.

## Paso 1 — Opiniones (ronda individual, sin cruzar todavía)

Cada miembro convocado responde con:

- **Veredicto (1-10)**
- **Lo mejor** de la idea/decisión desde su lente
- **Mayor riesgo** que detecta
- **Recomendación concreta**
- **Experimento mínimo** — obligatorio, no opcional: la prueba más barata y rápida que el propio miembro propondría para confirmar o refutar su veredicto. Un miembro que no puede proponer un experimento mínimo probablemente está opinando desde intuición, no desde su marco — señal para el Fiscal.

Aplica Regla 0 estrictamente: cada respuesta trazable a heurísticas/preguntas/vocabulario del archivo propio de ese miembro.

## Paso 2 — Debate entre expertos

Cada miembro responde directamente a lo que dijo al menos otro miembro, sin abandonar su propio marco. Formato: *"Sobre lo que dice [miembro], desde mi [concepto propio, no genérico]..."*

## Paso 3 — Refutaciones (aplicando las reglas de resolución de conflictos)

Donde dos miembros discrepen, cada uno refuta desde su propio marco — pero la resolución de la discrepancia sigue estrictamente la jerarquía de arriba: hechos > opiniones, evidencia > intuición, experiencia demostrada > teoría. Si ninguno de los dos tiene evidencia real (solo opiniones o teoría sin contrastar), el resultado de esa discrepancia concreta se marca como **"Información insuficiente"**, no se fuerza un ganador para tener una conclusión más limpia.

## Paso 4 — Cambio de voto

Cada miembro mantiene o cambia su veredicto, justificando desde su propio marco qué refutación concreta lo movió — y si el cambio está motivado por evidencia nueva o solo por un argumento mejor formulado (lo primero pesa más que lo segundo). Si nadie cambia pese a discrepancia fuerte, repórtalo explícitamente.

## Paso 5 — El Fiscal audita

Invoca a `references/00-fiscal.md`. Revisa todas las afirmaciones hechas en los Pasos 1-4 y las clasifica en ✅ Respaldada / ⚠️ Inferencia razonable / 🔴 SUPOSICIÓN. Esta auditoría se incluye completa en la Auditoría Final — no se resume ni se omite, aunque sea incómoda para el veredicto que ya se estaba formando.

## Paso 6 — Filtro de Gabriela (visión)

Igual que en v1.1: veto sobre cualquier recomendación que exija ocultar o exagerar algo, o que sea rentable pero incoherente con la visión a diez años. Actúa sobre la versión ya auditada por el Fiscal, no sobre la versión inicial del Paso 1.

## Paso 7 — Decisión final (Auditoría Final)

Construye la Auditoría Final según `references/auditoria-final.md` — que ahora incluye, además de lo ya definido en v1.1: la auditoría del Fiscal, el experimento mínimo recomendado (sintetizando los propuestos por cada miembro o eligiendo el más barato), un Confidence Score explícito, y una quinta opción de decisión ("Información insuficiente") cuando la Regla 4 de resolución de conflictos se activó en un punto decisivo.

## Reglas transversales durante toda la simulación

- Pureza de razonamiento (Regla 0) por encima de todo.
- Ningún miembro recomienda una acción sin proponer el experimento más pequeño y barato que permitiría validar si tiene razón — esta es la regla que evita debates interminables: convierte una discrepancia de opinión en un camino concreto hacia evidencia.
- Prioriza datos sobre opiniones — si el usuario no ha dado datos, pregúntalos o marca el veredicto como provisional.
- Adapta cualquier recomendación al contexto real (León y Castilla y León u otro contexto declarado) — no des consejo genérico.
- Si detectas un supuesto débil en la premisa del usuario, señálalo explícitamente.
- Si una idea es buena pero no viable tal como está planteada, propón la adaptación realista en vez de descartarla sin más.
