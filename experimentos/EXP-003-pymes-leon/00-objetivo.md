# Objetivo — EXP-003-pymes-leon

**Fecha de apertura:** 2026-07-10
**Abierto por:** Claude Code, como acción directa de la Auditoría del Consejo Estratégico (`AUDITORIA_CONSEJO_2026-07-10.md`), que convergió con 8 de 11 miembros en el mismo experimento mínimo: reactivar el sistema de agentes sobre el ICP actual y conseguir las primeras conversaciones reales.

## Objetivo del experimento
Validar si hay demanda real de FARO entre pymes de servicios con agenda en León ciudad (dental, veterinaria, fisioterapia, peluquería, talleres — ver ICP en `FARO_MODELO_NEGOCIO.md` sección 3.1), usando el mensaje ya publicado en el sitio ("que ningún cliente que te escribe se quede sin respuesta").

## Por qué ahora
Es el primer experimento ejecutado sobre el ICP leonés desde el pivote. `EXP-002-clinicas-valencia` demostró que el flujo de agentes funciona de principio a fin, pero apuntaba al ICP antiguo y se archivó sin enviar nada. Este experimento reutiliza ese mismo aprendizaje de proceso, apuntado por fin al objetivo correcto.

## Criterio de éxito
Al menos 3 llamadas de discovery agendadas sobre 15-20 contactos trabajados en 3 semanas (mismo criterio de volumen que `FARO_PROCESO_COMERCIAL.md` sección 2), o al menos 5 conversaciones informales que confirmen o refuten si el mensaje se entiende y el precio no genera rechazo inmediato (ver Auditoría del Consejo, sección "Experimento mínimo recomendado").

## Duración prevista
3 semanas, siguiendo la cadencia de `FARO_PROCESO_COMERCIAL.md`: día 0 / 4 / 9 / 16.

## Nota de trazabilidad — nivel de verificación de este dataset
El dataset (`02-investigacion/dataset.md`) se construyó con búsqueda web real (WebSearch), con nombres, teléfonos y direcciones tomados de las webs propias de cada negocio o de directorios (Páginas Amarillas). **Es un nivel de verificación más bajo que el Lote A de EXP-002**: en EXP-002, 3 contactos pasaron por una comprobación cruzada independiente (dos fuentes distintas confirmando el mismo dato) antes de pasar a "listo para contactar". Aquí, cada fila tiene una única fuente citada, sin cruce todavía. **Antes de enviar ningún mensaje real, repetir la misma disciplina de verificación cruzada que se aplicó en EXP-002** — no basta con que el dato aparezca en una búsqueda, hay que confirmarlo de forma independiente (visitar la web propia del negocio, comprobar que el teléfono corresponde, confirmar que no es una cadena corporativa).

## Filtro de ICP ya aplicado en la búsqueda
Se excluyeron explícitamente de este dataset las cadenas corporativas encontradas en la búsqueda (Vitaldent, Sanitas Milenium, Feu Vert, Norauto, Euromaster, Northgate) porque el ICP (`FARO_MODELO_NEGOCIO.md` sección 3.1) descarta franquicias y cadenas con compra centralizada — el decisor tiene que poder decidir sin aprobación externa.
