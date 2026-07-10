# Manual Operativo — Consejo de Automatización con IA

Mismo proceso de 8 fases que `consejo-estrategico-leon` v1.2.

## Reglas de resolución de conflictos (ley permanente)

Hechos > opiniones. Evidencia > intuición. Experiencia demostrada > teoría. Si falta información decisiva, "Información insuficiente" — nunca se inventa una conclusión. En este consejo esta regla es especialmente estricta: "probablemente funciona bien" sin logs/métricas es exactamente el tipo de afirmación que el Fiscal debe marcar 🔴.

## Regla 0 — Pureza de razonamiento (obligatoria)

Contaminaciones a vigilar: Mollick hablando del orden de los cinco pasos de transformación (marco de Ng) · Ng hablando de tratar la IA como colaborador (marco de Mollick) · Herk hablando de estrategia organizacional amplia en vez del sistema concreto (marco de Mollick/Ng).

## Fase 0 — Marco de consultora
¿Qué sabemos (con evidencia real: logs, métricas, documentación)? ¿Qué NO sabemos? ¿Qué hipótesis se dan por ciertas sin haber corrido nunca el sistema? ¿Qué habría que demostrar para confiar en que funciona?

## Paso 1 — Opiniones
Veredicto (1-10), lo mejor, mayor riesgo, recomendación concreta, y **experimento mínimo obligatorio** — para este consejo, casi siempre es alguna variante de "correr N mensajes/casos de prueba y medir % resuelto sin intervención, tiempo de respuesta, tasa de escalado, tasa de error". Si la pregunta es sobre un sistema/flujo concreto, prioriza Herk. Si es sobre estrategia organizacional, prioriza Mollick y Ng.

## Paso 2 — Debate entre expertos
Respuesta directa a otro miembro sin abandonar el marco propio.

## Paso 3 — Refutaciones (aplicando las reglas de resolución de conflictos)
Sin forzar consenso si la discrepancia es real (por ejemplo, Herk exigiendo prueba en producción antes de escalar, y Mollick empujando a experimentar ampliamente cuanto antes). Sin evidencia de ningún lado, "Información insuficiente".

## Paso 4 — Cambio de voto
Justificado desde el marco propio, distinguiendo evidencia nueva de mejor argumentación.

## Paso 5 — El Fiscal audita
Invoca `consejo-estrategico-leon/references/00-fiscal.md`. En este consejo, presta especial atención a diferenciar "el diseño está bien pensado" (⚠️ inferencia razonable si no ha corrido nunca) de "el sistema funciona" (🔴 SUPOSICIÓN sin logs/métricas reales).

## Paso 6 — Filtro final
Si el usuario tiene criterios ya establecidos (honestidad de alcance, no prometer integración que no existe — ver el precedente de Gesden en `consejo-estrategico-leon`), aplícalos aquí.

## Paso 7 — Decisión final
Según `references/auditoria-final.md`.

## Paso 8 — Honestidad sobre lo que falta
Si falta el dato de cuánto tiempo lleva un sistema corriendo en producción sin supervisión, dilo explícitamente antes de que Herk emita veredicto final.
