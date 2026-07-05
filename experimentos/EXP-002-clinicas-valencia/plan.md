# Plan — EXP-002-clinicas-valencia

## Objetivo
Ver `00-objetivo.md`.

## Secuencia de agentes
1. Investigador → `02-investigacion/` ✅
2. Verificador → `03-verificacion.md` ✅
3. Financiero → `04-analisis_financiero.md` ✅
4. Redactor → `05-mensajes/` ✅
5. Preparador → `06-envio/` ✅
6. (usuario envía manualmente — Fase 1) ⏸
7. Tracker → `07-resultados.md` — pendiente de que el usuario informe respuestas reales
8. Analizador → `08-analisis_resultados.md` — pendiente del paso 7
9. Aprendizaje → `09-aprendizajes.md` — pendiente del paso 8
10. Estratega → `10-recomendacion.md` — pendiente del paso 9

## Estado actual
Paso: 5 completado — Siguiente agente: ninguno (bloqueado) — Bloqueado por: el usuario debe (a) verificar manualmente los datos de contacto de cada clínica en `02-investigacion/dataset.md` y (b) enviar los mensajes de `06-envio/plan_envio.md`. El sistema no envía nada automáticamente en Fase 1. Cuando el usuario informe la primera respuesta, retoma en el paso 7 (Tracker).
