# Plan — EXP-003-pymes-leon

## Objetivo
Ver `00-objetivo.md`.

## Secuencia de agentes
1. Investigador → `02-investigacion/dataset.md` ✅ (primera pasada, sin comprobación cruzada)
2. Verificador → `03-verificacion.md` — pendiente
3. Financiero → `04-analisis_financiero.md` — pendiente
4. Redactor → `05-mensajes/` — pendiente
5. Preparador → `06-envio/` — pendiente
6. (usuario envía manualmente — Fase 1) ⏸
7. Tracker → `07-resultados.md` — pendiente de envíos reales
8. Analizador → `08-analisis_resultados.md` — pendiente del paso 7
9. Aprendizaje → `09-aprendizajes.md` — pendiente del paso 8
10. Estratega → `10-recomendacion.md` — pendiente del paso 9

## Estado actual

Paso 1 completado por Claude Code (2026-07-10), como acción directa de `AUDITORIA_CONSEJO_2026-07-10.md`: 18 negocios de 5 verticales de León (peluquería, veterinaria, fisioterapia, dental, taller), con fuente citada por fila, cadenas corporativas ya excluidas por ICP.

**Siguiente agente: Verificador (paso 2)** — bloqueado por: alguien (el usuario, o Claude Code en una próxima sesión si se pide explícitamente) debe repetir la comprobación cruzada independiente que se hizo en EXP-002 para cada fila del dataset — segunda fuente, nombre del decisor, y clasificación Válida/Dudosa/Descartada — antes de que cualquier contacto pase a un lote de envío real.

**Nota importante de la Auditoría del Consejo**: el experimento mínimo recomendado no termina en tener un dataset — el paso que de verdad cierra la brecha señalada por los 11 miembros del consejo es la **primera conversación real**, no otro documento más. Completar el paso 2-5 de este experimento sin llegar nunca a la conversación real repetiría exactamente el patrón que Charlie Munger y Gabriela señalaron como el riesgo activo número uno (ver Auditoría del Consejo, riesgo crítico #5). Este experimento debe moverse con más urgencia hacia el envío real que EXP-002, no quedarse en la misma fase de preparación indefinida.

## Actualización — pivote de oferta a landing + seguimiento (ver `FARO_MVP_LANDING.md`)

Tras evaluar el concierge de WhatsApp (`FARO_MVP_CONCIERGE.md`) frente a una landing de captación con seguimiento, se decidió empezar por la landing — menor fricción de confianza, visible antes del compromiso. Esto cambia el paso 4-5 de este experimento: en vez de una secuencia de outbound formal (día 0/4/9/16), el primer contacto real es más directo — enseñar una landing ya construida en la conversación (ver pitch en `FARO_MVP_LANDING.md` sección 5).

**Primer borrador de propuesta ya construido**: `propuestas/clinica-veterinaria-centro-leon/index.html`, para **Clínica Veterinaria Centro León** (Roa de la Vega 30, León — fila del dataset con mejor calidad de fuente: web propia + búsqueda cruzada de horario/servicios). Es un borrador construido con información pública, no verificado con el negocio todavía — antes de enseñarlo en cualquier conversación, confirmar si el teléfono 987 228 801 tiene WhatsApp Business activo (ver nota dentro del propio HTML). Este es ahora el candidato más avanzado del dataset para la primera conversación real.
