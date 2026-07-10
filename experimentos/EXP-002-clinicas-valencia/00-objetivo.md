# Objetivo — EXP-002-clinicas-valencia

**Fecha de apertura:** 2026-07-05
**Abierto por:** usuario (vía Claude Code, ejecución de demostración del sistema multiagente)

## Objetivo del experimento
Validar si hay demanda real de FARO entre clínicas dentales privadas de 4-10 gabinetes en Valencia ciudad, usando el mensaje de outbound centrado en "mensajes de WhatsApp de pacientes sin responder fuera de horario" (dolor #1 de `FARO_MODELO_NEGOCIO.md` Lean Canvas).

## Por qué ahora
Es el primer experimento ejecutado con el sistema multiagente (`FARO_SISTEMA_MULTIAGENTE.md`) recién creado — sirve para validar que el flujo de 10 agentes produce artefactos usables de principio a fin, además de generar el primer dato real para `base_conocimiento/`.

## Criterio de éxito
Al menos 3 llamadas de discovery agendadas sobre 20-30 contactos trabajados en 3 semanas (volumen realista según `FARO_PROCESO_COMERCIAL.md` sección 2).

## Duración prevista
3 semanas, siguiendo la cadencia de `FARO_PROCESO_COMERCIAL.md`: día 0 / 4 / 9 / 16.

## Nota de trazabilidad
El dataset (`02-investigacion/dataset.md`) se construyó con búsqueda web real (nombres y datos públicos de clínicas de Valencia), pero **no ha sido verificado con visita a cada web/ficha individual** — está marcado como tal en `03-verificacion.md`. Antes de enviar ningún mensaje real, el usuario debe confirmar manualmente los datos de contacto y las señales de ICP de cada clínica.

## Nota de alcance (añadida 2026-07-09 — auditoría)
Este objetivo y su criterio de éxito siguen refiriéndose solo a **Valencia ciudad** con el dataset original de 10 clínicas (Lote A de 6 ya verificado). El 2026-07-09 se añadieron a `02-investigacion/` dos datasets adicionales que **no forman parte de este objetivo tal como está escrito**:
- `dataset-ampliacion-2026-07-09.md`: 20 clínicas de la Comunidad Valenciana fuera de Valencia ciudad.
- `dataset-leon-crm-maestro-2026-07-09.md`: 57 clínicas de la **provincia de León** — una región distinta, sin relación geográfica con "Valencia ciudad".

Se guardan en esta misma carpeta por conveniencia (mismo producto, FARO, mismo ICP de clínica dental), pero son pipeline de prospección general, no parte del experimento EXP-002 tal como se definió. Si se decide ampliar formalmente el alcance geográfico de este experimento (o abrir uno nuevo, ej. "EXP-003"), es una decisión de negocio pendiente de tomar explícitamente — no se ha tomado todavía.
