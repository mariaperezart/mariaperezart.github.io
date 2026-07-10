# Objetivo — EXP-002-clinicas-valencia

**Fecha de apertura:** 2026-07-05
**Abierto por:** usuario (vía Claude Code, ejecución de demostración del sistema multiagente)
**Estado: ARCHIVADO (2026-07-10)** — superado por el pivote de ICP a pymes leonesas con agenda. Ver detalle en `plan.md`, sección "Estado: ARCHIVADO". No se envió el Lote A.

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
