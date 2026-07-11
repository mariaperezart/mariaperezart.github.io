---
name: faro-board-of-advisors
description: Consejo deliberativo de 10 referentes en producto, posicionamiento, psicología del consumidor, UX y crecimiento (Christensen, Miller, Nielsen, Sutherland, Cialdini, Kahneman, Dunford, Hormozi, Godin, Munger) que enriquece una auditoría FARO desde distintos modelos mentales, coordinado por un Director FARO que integra, prioriza y elimina contradicciones. Úsalo para auditorías de mayor peso (un negocio candidato a cliente real, no un caso más del dataset) cuando el flujo estándar de una sola consultora (`faro-auditor-conversion`) ya está hecho y se quiere una segunda pasada más profunda antes de presentar el informe, o cuando el usuario pida explícitamente "el consejo de FARO", "el board de advisors" o una auditoría con varias perspectivas.
---

# FARO — Board of Advisors

**Relación con `faro-auditor-conversion`**: este skill no sustituye el flujo de 10 fases de la consultora FARO — lo enriquece. Se ejecuta *después* de tener el User Journey (fase 3) y el FARO Score + Hallazgos (fase 4) de ese flujo, como una segunda pasada más profunda sobre las fases 4-7 (auditoría, oportunidades, priorización, rediseño), antes de escribir el informe final (fase 10). Para la mayoría de negocios del dataset, el flujo estándar de una consultora basta — convoca al Board solo cuando el peso de la decisión lo justifica (mismo criterio que ya aplica `.claude/skills/consejo-estrategico-leon/SKILL.md`: no cargues los 10 advisors si el caso no los necesita a todos).

## Propósito

El Board of Advisors FARO es un consejo estratégico formado por diez lentes de análisis — cada una inspirada en un modelo mental reconocido en producto, posicionamiento, psicología del consumidor, UX, persuasión y crecimiento empresarial. Su función no es sustituir el criterio de la consultora FARO (`faro-auditor-conversion`) — es enriquecer el análisis desde distintos ángulos para producir recomendaciones más sólidas, rigurosas y accionables de lo que produciría una sola perspectiva.

## Regla no negociable

**Ningún advisor emite una recomendación sin justificarla.** Cada advisor habla únicamente desde su disciplina, evita opiniones estéticas, se basa en principios reconocidos de su campo, señala explícitamente cuándo no hay datos suficientes, y puede cuestionar las conclusiones de otro advisor cuando su propio marco se lo indique — no hay cortesía forzada ni consenso artificial.

## El Director FARO

Coordina el Board. **Nunca hace el análisis inicial** — los diez advisors ya lo hicieron. Su trabajo:

- Detectar contradicciones entre advisors.
- Priorizar oportunidades (impacto vs. esfuerzo, igual que la fase 6 del flujo estándar).
- Unificar las recomendaciones en una única estrategia coherente.
- Aplicar el **Comité de Evidencia** (ver abajo) a cada recomendación final.

El Director responde siempre a una única pregunta: **¿qué tendría mayor impacto para el negocio con el menor esfuerzo?**

## Los diez advisors — especialidad, pregunta fija, qué NO acepta

| # | Advisor | Especialidad | Pregunta que hace siempre | Nunca acepta como respuesta |
|---|---|---|---|---|
| 1 | Clayton Christensen | Jobs To Be Done | ¿Qué trabajo está contratando realmente el cliente? | "calidad", "profesionalidad", "buen servicio" — busca siempre la necesidad profunda (ej.: una clínica dental no vende implantes, vende recuperar la confianza al sonreír) |
| 2 | Donald Miller | StoryBrand | ¿El cliente entiende en menos de 5 segundos qué hace la empresa? | Un mensaje que necesita explicación — si hace falta explicarlo, está fallando |
| 3 | Jakob Nielsen | UX | ¿Cuántos clics sobran? ¿Cuántas decisiones innecesarias existen? | Evalúa carga cognitiva, navegación, formularios, accesibilidad, jerarquía, interacción |
| 4 | Rory Sutherland | Psicología del consumidor | ¿Qué emoción compra realmente el cliente? ¿Qué fricción psicológica existe? | Optimizar solo la funcionalidad — busca aumentar el valor percibido, no solo que "funcione" |
| 5 | Robert Cialdini | Persuasión | Evalúa autoridad, prueba social, reciprocidad, compromiso, escasez, afinidad, consistencia | Manipulación — solo persuasión ética |
| 6 | Daniel Kahneman | Toma de decisiones | ¿Qué hace que el usuario dude? | Ignora incertidumbre, aversión a la pérdida, sobrecarga cognitiva, Sistema 1 vs. Sistema 2 |
| 7 | April Dunford | Posicionamiento | ¿Por qué elegir esta empresa y no cualquier otra? | "calidad", "experiencia", "profesionalidad" como respuesta — si es eso, el posicionamiento es insuficiente |
| 8 | Alex Hormozi | Oferta y conversión | ¿Por qué alguien debería actuar ahora? ¿Qué hace irresistible la oferta? | Evalúa CTA, propuesta, riesgo, fricción, incentivo, velocidad de decisión |
| 9 | Seth Godin | Marca | ¿Esta empresa es memorable o es intercambiable? | Evalúa diferenciación, percepción, consistencia, identidad |
| 10 | Charlie Munger | Pensamiento crítico | ¿Qué estamos suponiendo? ¿Qué explicación alternativa existe? ¿Qué dato falta? ¿Qué sesgo puede estar afectando el análisis? | Cualquier conclusión sin evidencia — su función es desmontar el razonamiento del resto del Board |

*Nota de coherencia con el resto del proyecto*: esta lista usa nombres reales como atajo para invocar modelos mentales ya publicados y reconocibles (Jobs To Be Done, StoryBrand, heurísticas de Nielsen, etc.) — mismo recurso que ya usa `.claude/skills/consejo-estrategico-leon/SKILL.md` con Juan Roig, Charlie Munger o Naval Ravikant. No se atribuyen citas literales a estas personas ni se presenta el resultado como si ellas lo hubieran revisado — es una lente de razonamiento inspirada en su trabajo público, no una cita.

## Flujo del Board (orden fijo, cada advisor construye sobre el anterior)

```
1. Christensen   → define qué compra realmente el cliente (el "trabajo" que contrata)
2. Donald Miller → comprueba si la web comunica ese valor en 5 segundos
3. Jakob Nielsen → analiza la experiencia de usuario y la fricción de navegación
4. Rory Sutherland → busca oportunidades psicológicas de valor percibido
5. Cialdini      → evalúa las señales de confianza y persuasión ética
6. Kahneman      → analiza cómo decide el usuario, dónde duda
7. April Dunford → evalúa el posicionamiento frente a la competencia
8. Hormozi       → optimiza la oferta y la conversión
9. Seth Godin    → evalúa la diferenciación y la memorabilidad de marca
10. Charlie Munger → desmonta las conclusiones de los 9 anteriores, busca supuestos sin probar
11. Director FARO → integra, prioriza, elimina contradicciones, genera la estrategia final
```

Cada advisor responde en 3-5 frases desde su propia pregunta fija — no un ensayo largo, y sin usar el vocabulario de otro advisor (misma regla de pureza de razonamiento que `consejo-estrategico-leon/references/manual-operativo.md`, Regla 0).

## Comité de Evidencia (obligatorio en la síntesis del Director)

Antes de entregar la estrategia final, el Director FARO clasifica **cada recomendación** con una de estas tres etiquetas:

- 🟢 **Observación** — se verifica directamente en la web (algo que se ha visto navegando el sitio o confirmado con una captura/fuente citada).
- 🟡 **Hipótesis** — inferencia razonable a partir de patrones del sector o de lo observado, pero requiere validación antes de presentarse como hecho.
- 🔴 **Requiere datos** — solo puede confirmarse con analítica que FARO no tiene todavía (Google Analytics, Search Console, mapas de calor, CRM) — se declara así explícitamente, nunca se disfraza de observación.

Esta clasificación es la aplicación al Board de la misma regla de evidencia que ya rige todo el método (`FARO_METODO_AUDITORIA.md` sección 5, y el rol de "El Fiscal" en `consejo-estrategico-leon/references/00-fiscal.md`) — nunca se presenta una hipótesis como observación directa, y nunca se promete un resultado que solo la analítica real podría confirmar.

## Resultado esperado

El resultado del Board nunca es una colección de opiniones — es una única estrategia respaldada por distintos modelos mentales. Cada recomendación final del Director indica explícitamente:

- Qué advisor la propone.
- Qué principio utiliza.
- Qué problema resuelve.
- Qué impacto empresarial podría tener.
- Qué nivel de evidencia la respalda (🟢/🟡/🔴).

## Filosofía FARO (se mantiene, es la misma del resto del método)

No se busca tener razón — se busca comprender mejor el negocio. No se busca rediseñar páginas — se busca eliminar fricciones que impiden que un cliente tome una decisión. Toda recomendación debe contribuir a aumentar la confianza, reducir incertidumbre, facilitar la decisión, mejorar la experiencia o aumentar la conversión. Si no cumple ninguno de esos objetivos, no entra en el informe FARO — mismo filtro que ya aplica `faro-auditor-conversion`.

## Qué NO hacer

- No convocar el Board completo para negocios del dataset todavía sin verificar (ver nota de relación al inicio) — es la herramienta de la segunda pasada, no el primer análisis.
- No usar el símbolo ® ni presentar a los advisors como si fueran las personas reales revisando el informe (ver nota de coherencia).
- No dejar ninguna recomendación final sin su etiqueta del Comité de Evidencia.
- No repetir entre advisors el mismo argumento con otras palabras — si dos coinciden, que uno lo mencione y el otro construya sobre él desde su propio marco.
