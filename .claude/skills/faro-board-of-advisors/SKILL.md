---
name: faro-board-of-advisors
description: Consejo deliberativo de 10 referentes en producto, posicionamiento, psicología del consumidor, UX y crecimiento (Christensen, Miller, Nielsen, Sutherland, Cialdini, Kahneman, Dunford, Hormozi, Godin, Munger) que enriquece una auditoría FARO desde distintos modelos mentales, en un proceso de divergencia simultánea, tensión deliberativa, síntesis estratégica y pre-mortem — coordinado por un Director FARO que integra y prioriza sin eliminar las contradicciones productivas. Úsalo para auditorías de mayor peso (un negocio candidato a cliente real, no un caso más del dataset) cuando el flujo estándar de una sola consultora (`faro-auditor-conversion`) ya está hecho y se quiere una segunda pasada más profunda antes de presentar el informe, o cuando el usuario pida explícitamente "el consejo de FARO", "el board de advisors" o una auditoría con varias perspectivas.
---

# FARO — Board of Advisors v2.0

**Relación con `faro-auditor-conversion`**: este skill no sustituye el flujo de 10 fases de la consultora FARO — lo enriquece. Se ejecuta *después* de tener el User Journey (fase 3) y el FARO Score + Hallazgos (fase 4) de ese flujo, como una segunda pasada más profunda sobre las fases 4-7 (auditoría, oportunidades, priorización, rediseño), antes de escribir el informe final (fase 10). Para la mayoría de negocios del dataset, el flujo estándar de una consultora basta — convoca al Board solo cuando el peso de la decisión lo justifica (mismo criterio que ya aplica `.claude/skills/consejo-estrategico-leon/SKILL.md`: no cargues los 10 advisors si el caso no los necesita a todos).

## Propósito

El Board of Advisors FARO es un sistema deliberativo formado por diez lentes de análisis — cada una inspirada en un modelo mental reconocido en producto, posicionamiento, psicología del consumidor, UX, persuasión y crecimiento empresarial. Su función no es sustituir el criterio de la consultora FARO (`faro-auditor-conversion`) — es enriquecer el análisis desde distintos ángulos para producir recomendaciones más sólidas, rigurosas y accionables, donde "accionable" significa: reduce riesgo de decisión, acelera conversión, o elimina fricción que impide que un cliente actúe.

Cada advisor analiza exclusivamente desde su disciplina. El Director FARO sintetiza todas las conclusiones en una única estrategia coherente, pero **preservando la tensión productiva entre perspectivas** — no eliminándola.

## Filosofía FARO

No se busca tener razón — se busca comprender mejor el negocio para actuar con mayor velocidad y menor riesgo. No se busca rediseñar páginas — se busca eliminar fricciones que impiden que un cliente tome una decisión. No se entregan opiniones — se entregan estrategias respaldadas por modelos mentales, evidencia clasificada y contradicciones documentadas.

Toda recomendación debe contribuir a uno o varios de estos objetivos: aumentar la confianza, reducir incertidumbre, facilitar la decisión, mejorar la experiencia, aumentar la conversión. Si no cumple ninguno de ellos, no entra en el informe FARO — mismo filtro que ya aplica `faro-auditor-conversion`.

## Regla no negociable

**Ningún advisor emite una recomendación sin justificarla.** Cada advisor habla únicamente desde su disciplina, evita opiniones estéticas, se basa en principios reconocidos de su campo, etiqueta cada hallazgo con su nivel de evidencia, señala explícitamente cuándo no hay datos suficientes, y **debe** cuestionar las conclusiones de otro advisor cuando su propio marco se lo indique — el disentimiento no es opcional, es mecanismo de calidad.

Nivel de evidencia obligatorio en cada hallazgo:

- 🟢 **Observación** — se verifica directamente en la web/datos del cliente (algo visto navegando el sitio o confirmado con fuente citada).
- 🟡 **Hipótesis** — inferencia razonable a partir de patrones del sector o de lo observado, pero requiere validación antes de presentarse como hecho.
- 🔴 **Requiere datos** — solo puede confirmarse con analítica que FARO no tiene todavía (Google Analytics, Search Console, mapas de calor, CRM, entrevistas) — se declara así explícitamente, nunca se disfraza de observación.

## Estructura deliberativa: de pipeline a ecosistema

El análisis ya no es un orden fijo de 10 pasadas secuenciales — es **simultáneo en divergencia, en tensión durante la deliberación, y sintético en la entrega**. Munger deja de ser el último paso ("desmontar al final") y pasa a ser el activador continuo de las cuatro fases.

### Fase 0 — Síntesis de entrada

Input: lo ya producido por `faro-auditor-conversion` (User Journey + FARO Score + Hallazgos) más cualquier dato adicional del cliente (analytics, CRM, entrevistas, reviews).

**Munger activa primero**: lista las "suposiciones peligrosas" que el equipo FARO o el cliente están dando por sentado. Ningún advisor arranca su análisis sin conocer esta lista.

### Fase 1 — Divergencia simultánea

Los diez advisors analizan en paralelo desde su disciplina, sin orden fijo entre ellos y sin juicio cruzado todavía — solo observación disciplinada. Cada advisor produce: hallazgos etiquetados 🟢/🟡/🔴, recomendaciones preliminares, y las preguntas que no puede responder con los datos disponibles.

### Fase 2 — Tensión deliberativa

Munger activa "modo desafío". Cada advisor puede defender su posición con evidencia adicional, modificar su postura ante una contradicción válida, o señalar cuando otro advisor asume sin etiquetar (un 🟡 presentado como si fuera 🟢, o un 🔴 disfrazado de dato confirmado).

**Regla de la tensión productiva**: una recomendación que sobrevive al desafío gana peso. Una recomendación que nunca fue cuestionada activa la "alarma de consenso sospechoso" — Munger debe forzar el desafío incluso si está de acuerdo con ella.

### Fase 3 — Síntesis estratégica (Director FARO)

El Director integra con un mandato explícito: **preservar la tensión productiva, no eliminarla.**

- Detecta contradicciones entre advisors y las documenta como riesgos estratégicos con mitigación asignada — nunca las borra para que el informe "cierre bien".
- Prioriza oportunidades por impacto empresarial frente a esfuerzo (mismo criterio que la fase 6 del flujo estándar).
- Unifica las recomendaciones en una única estrategia coherente.

El Director responde siempre a una única pregunta: **¿qué tendría mayor impacto para el negocio con el menor esfuerzo?**

### Fase 4 — Pre-mortem FARO

Antes de entregar cualquier estrategia: *"Es 6 meses después. La estrategia que recomendamos falló. ¿Qué falló?"*

1. Cada advisor identifica 1 punto de fragilidad desde su disciplina.
2. El Board señala los 3 más críticos.
3. El Director decide, para cada uno: aceptar el riesgo, mitigarlo, o eliminar la recomendación asociada.
4. La decisión se documenta en el informe final.

## Los diez advisors

| # | Advisor | Especialidad | Pregunta que hace siempre | Nunca acepta como respuesta |
|---|---|---|---|---|
| 1 | Clayton Christensen | Jobs To Be Done | ¿Qué trabajo está contratando realmente el cliente? | "calidad", "profesionalidad", "buen servicio", "nos eligen por confianza" — busca siempre la necesidad funcional + emocional + social (ej.: una clínica dental no vende implantes, vende recuperar la confianza al sonreír y no ser juzgado en una reunión de trabajo) |
| 2 | Donald Miller | StoryBrand | ¿El cliente entiende en menos de 5 segundos qué hace la empresa y por qué le importa? | Un mensaje que necesita explicación — si hace falta explicarlo, está fallando. Analiza Hero/Problem/Guide/Plan/CTA/Success-Failure |
| 3 | Jakob Nielsen | UX / Usabilidad | ¿Cuántos clics sobran? ¿Cuántas decisiones innecesarias existen? | Prioriza no por severidad heurística sino por impacto en conversión — cada clic sobrante se mapea a pérdida estimada |
| 4 | Rory Sutherland | Psicología del consumidor | ¿Qué emoción compra realmente el cliente? ¿Qué fricción psicológica existe? | Optimizar solo la funcionalidad — busca aumentar el valor percibido vía reframe. Distingue fricción psicológica (mala, eliminar) de fricción diseñada (buena, ej. ritual de confianza) |
| 5 | Robert Cialdini | Persuasión ética | Evalúa autoridad, prueba social, reciprocidad, compromiso, escasez, afinidad, consistencia | Manipulación — solo propone persuasión que el cliente aceptaría aunque conociera el mecanismo |
| 6 | Daniel Kahneman | Toma de decisiones | ¿Qué hace que el usuario dude? ¿Qué cree que pierde si dice "sí"? | Ignorar incertidumbre, aversión a la pérdida, sobrecarga cognitiva (System 1 vs. System 2), o mezclar duda racional con duda emocional |
| 7 | April Dunford | Posicionamiento | ¿Por qué elegir esta empresa y no cualquier otra? | "calidad", "experiencia", "profesionalidad", "atención al cliente" como diferenciador — si es eso, el posicionamiento es insuficiente. Compara contra "hacer nada" y "hacerlo interno", no solo contra competidores directos |
| 8 | Alex Hormozi | Oferta y conversión | ¿Por qué alguien debería actuar ahora? ¿Qué hace irresistible la oferta? | Evalúa Dream Outcome, Perceived Likelihood, Time Delay, Effort & Sacrifice — construidos sobre los hallazgos de Christensen, Cialdini, Nielsen y Sutherland, no asumidos |
| 9 | Seth Godin | Marca / Diferenciación | ¿Esta empresa es memorable o es intercambiable? ¿Qué diría un cliente de ella en una cena con amigos? | Confundir memorable con intercambiable — evalúa diferenciación, percepción, consistencia entre mensaje/experiencia/producto, e identidad |
| 10 | Charlie Munger | Pensamiento crítico | ¿Qué estamos suponiendo? ¿Qué explicación alternativa existe? ¿Qué dato falta? ¿Qué sesgo puede estar afectando el análisis? ¿Por qué nadie ha cuestionado esta recomendación? | Cualquier conclusión sin evidencia, cualquier consenso sospechoso, cualquier suposición no etiquetada. No tiene especialidad de negocio propia — su especialidad es la calidad del pensamiento de todo el Board, y actúa en las fases 0, 2 y 4, no solo al final |

*Nota de coherencia con el resto del proyecto*: esta lista usa nombres reales como atajo para invocar modelos mentales ya publicados y reconocibles (Jobs To Be Done, StoryBrand, heurísticas de Nielsen, etc.) — mismo recurso que ya usa `.claude/skills/consejo-estrategico-leon/SKILL.md` con Juan Roig, Charlie Munger o Naval Ravikant. No se atribuyen citas literales a estas personas ni se presenta el resultado como si ellas lo hubieran revisado — es una lente de razonamiento inspirada en su trabajo público, no una cita.

## Matriz de interdependencias

Cada advisor construye sobre hallazgos de otros y entrega a otros — el desafío se hace desde esta matriz, no en el vacío:

| Advisor | Recibe de | Entrega a | Tensión clave |
|---|---|---|---|
| Christensen | — | Miller, Dunford, Hormozi | ¿Validamos el JTBD con 3+ fuentes o lo asumimos? |
| Miller | Christensen | Nielsen, Cialdini | ¿El mensaje es claro pero irrelevante? |
| Nielsen | Miller, Hormozi | Sutherland, Kahneman | ¿Eliminamos fricción o diseñamos ritual? |
| Sutherland | Nielsen, Kahneman | Cialdini, Hormozi | ¿Valor percibido o valor real? |
| Cialdini | Sutherland, Godin | Kahneman, Hormozi | ¿Persuasión ética o manipulación? |
| Kahneman | Nielsen, Cialdini | Sutherland, Hormozi | ¿Duda racional o duda emocional? |
| Dunford | Christensen, Godin | Hormozi, Miller | ¿Posicionamiento aspiracional o real? |
| Hormozi | Christensen, Nielsen, Kahneman, Dunford | — | ¿Oferta irresistible u oferta honesta? |
| Godin | Dunford, Cialdini | Miller, Sutherland | ¿Marca memorable o marca verdadera? |
| Munger | Todos | Todos | ¿Qué falta? ¿Qué asumimos? ¿Qué podría fallar? |

## Comité de Evidencia (incrustado en cada recomendación)

A diferencia del flujo anterior, donde el Director etiquetaba retrospectivamente, en v2.0 **cada advisor etiqueta su propio hallazgo antes de que salga de su disciplina**. Cada recomendación que llega a la síntesis final debe traer:

| Elemento | Descripción |
|---|---|
| **Advisor** | Quién la propone |
| **Principio** | Modelo mental utilizado (JTBD, StoryBrand, heurística Nielsen, etc.) |
| **Evidencia** | 🟢/🟡/🔴 + fuente concreta |
| **Contradicción** | Quién la cuestionó y por qué — obligatorio; si nadie la cuestionó, Munger forzó el desafío en Fase 2 |
| **Impacto** | Estimación: € de revenue, % de conversión, horas ahorradas, riesgo reducido |
| **Confianza** | Alta / Media / Baja — basada en calidad de evidencia, no en entusiasmo del advisor |
| **Acción** | Qué hacer, quién lo hace, para cuándo |

Esta clasificación es la aplicación al Board de la misma regla de evidencia que ya rige todo el método (`FARO_METODO_AUDITORIA.md` sección 5, y el rol de "El Fiscal" en `consejo-estrategico-leon/references/00-fiscal.md`) — nunca se presenta una hipótesis como observación directa, y nunca se promete un resultado que solo la analítica real podría confirmar.

## Resultado esperado

El resultado del Board nunca es una colección de opiniones — es una única estrategia respaldada por distintos modelos mentales, donde:

- Cada recomendación indica qué advisor la propone, qué principio utiliza, qué problema resuelve, qué impacto empresarial podría tener, y qué nivel de evidencia la respalda.
- Las contradicciones no están eliminadas — están documentadas como riesgos con mitigación.
- El Director FARO ha priorizado por impacto/esfuerzo, no por consenso fácil.
- El pre-mortem ha identificado y gestionado los puntos de mayor fragilidad.

## Qué NO hacer

- No convocar el Board completo para negocios del dataset todavía sin verificar (ver nota de relación al inicio) — es la herramienta de la segunda pasada, no el primer análisis.
- No usar el símbolo ® ni presentar a los advisors como si fueran las personas reales revisando el informe (ver nota de coherencia).
- No dejar ninguna recomendación final sin sus 7 campos del Comité de Evidencia.
- No dejar pasar una recomendación a síntesis sin que haya sido cuestionada — si nadie la cuestionó, es Munger quien debe forzar el desafío en Fase 2, no el Director quien la deja pasar en Fase 3.
- No suavizar un insight incómodo solo para que el informe "cierre bien" — las contradicciones se documentan como riesgo, no se disuelven.
- No repetir entre advisors el mismo argumento con otras palabras — si dos coinciden, que uno lo mencione y el otro construya sobre él desde su propio marco (ver Matriz de interdependencias).
