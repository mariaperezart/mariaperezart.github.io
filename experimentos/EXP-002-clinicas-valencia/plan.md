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
Paso: 5 completado, investigación ampliada el 2026-07-09. El usuario verificó manualmente el contacto de las 9 clínicas (con ayuda de otra herramienta externa); Claude hizo comprobación cruzada independiente por WebSearch sobre 6 de ellas: 2RP, Badal, Dra. Clara Martínez Valero (2026-07-06) y, ahora también, Dentalmedica, Albalat Dental, Dr. Pedroza (2026-07-09) — las 6 confirmaron los datos reportados y pasan a "Lote A" en `06-envio/asignacion.md`, listas para el primer envío, con reparto 2/2/2 entre variantes. Quedan 3 filas en Lote B sin comprobación cruzada o con duda de tamaño ICP (Llobell, ARTDENTA, Paloma Tortosa), sin tocar.

**Nota de proceso importante**: durante esta verificación, una herramienta externa que el usuario estaba consultando en paralelo generó al menos dos veces datos completamente inventados (un "EXP-001 en León" con clínicas y cifras financieras fabricadas de la nada) presentados con total confianza junto a datos reales. Quedó descartado tras verificación exhaustiva — no existe, nunca existió. Se deja constancia aquí para que quede claro por qué cada lote pasa por una comprobación cruzada independiente antes de aceptarse, y por qué el mismo criterio debe aplicarse al Lote B restante antes de contactarlo.

Siguiente agente: ninguno (bloqueado) — Bloqueado por: el usuario debe (a) decidir fecha de envío para el Lote A (ahora 6 clínicas) y enviar los mensajes correspondientes de `06-envio/`, generando primero los mensajes finales para las 3 clínicas nuevas igual que se hizo en `06-envio/lote-a-mensajes-finales.md` para las 3 originales, y (b) si quiere ampliar el lote, repetir la comprobación cruzada independiente sobre las 3 filas restantes en duda antes de enviarles nada. El sistema no envía nada automáticamente en Fase 1. Cuando el usuario informe la primera respuesta, retoma en el paso 7 (Tracker).
