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

## Estado actual (revisado 2026-07-09, auditoría)
Paso 5 completado para el Lote A. Las 6 clínicas de Valencia ciudad (2RP, Badal, Dra. Clara Martínez Valero, Dentalmedica, Albalat Dental, Dr. Pedroza) tienen contacto verificado de forma independiente, mensaje final generado en `06-envio/lote-a-mensajes-finales.md` y borrador creado en Gmail para las 4 que tienen email real confirmado (Badal, Dentalmedica, Albalat, Pedroza) — 2RP y Clara Martínez Valero tienen el borrador apuntando provisionalmente al propio email de la usuaria hasta confirmar el suyo. Quedan 3 filas dudosas sin tocar (Llobell, ARTDENTA, Paloma Tortosa).

**Ampliación del pipeline (fuera del objetivo original de este experimento, ver `00-objetivo.md` §"Nota de alcance")**: el 2026-07-09 se añadieron dos datasets más grandes a `02-investigacion/`: 20 clínicas de la Comunidad Valenciana fuera de Valencia ciudad (`dataset-ampliacion-2026-07-09.md`) y 57 clínicas de la provincia de León importadas de un CRM externo (`dataset-leon-crm-maestro-2026-07-09.md`, solo 3 de 57 filas verificadas de forma independiente). Ninguna de estas 77 filas ha pasado todavía la comprobación cruzada completa ni tiene mensaje ni borrador generado — son candidatos a investigar, no Lote A.

**`04-analisis_financiero.md` sigue siendo razonable para el alcance real de Valencia ciudad** (su supuesto de "9 candidatos dudosos" coincide con las 6 válidas + 3 dudosas actuales), pero no se ha vuelto a pasar el Agente Financiero desde la verificación del Lote A ni contempla los 77 candidatos del pipeline ampliado (Comunidad Valenciana + León). Si en algún momento se decide ampliar formalmente el alcance del experimento (ver `00-objetivo.md` §"Nota de alcance"), hay que re-ejecutarlo con el universo nuevo antes de usar esas cifras para decidir nada.

**Nota de proceso importante**: durante esta verificación, una herramienta externa que el usuario estaba consultando en paralelo generó al menos dos veces datos completamente inventados (un "EXP-001 en León" con clínicas y cifras financieras fabricadas de la nada) presentados con total confianza junto a datos reales. Quedó descartado tras verificación exhaustiva — no existe, nunca existió. Se deja constancia aquí para que quede claro por qué cada lote pasa por una comprobación cruzada independiente antes de aceptarse.

Siguiente agente: ninguno (bloqueado) — Bloqueado por: (a) el usuario debe enviar los mensajes del Lote A (rellenando `[Firma]` y confirmando el email de 2RP/Clara Martínez Valero antes de enviar los suyos), (b) decidir si quiere invertir tiempo en verificar de forma independiente el resto del pipeline (77 candidatos sin verificar) antes de tratarlo como contactable, y (c) si se usa el pipeline ampliado, re-ejecutar el Agente Financiero con el universo real. El sistema no envía nada automáticamente en Fase 1. Cuando el usuario informe la primera respuesta, retoma en el paso 7 (Tracker).
