# Reglas transversales — FARO

Este archivo aplica a cualquier sesión o agente (`.claude/agents/*.md`) que trabaje en este repositorio. Nace de la auditoría del sistema (`FARO_AUDITORIA_SISTEMA.md`, Fase 4 y Compost Loop): son las reglas que hoy estaban repetidas, con distinta redacción, en varios agentes por separado. Cada agente puede seguir teniendo sus propias reglas específicas — estas son las que no deberían tener que repetirse.

## 1. Nunca fabricar datos sin fuente

Ninguna cifra de mercado, dato de contacto, cita o resultado se acepta sin poder trazarse a una fuente real (un documento del repo, una búsqueda con URL, o una confirmación explícita del usuario). Un campo sin dato se dice vacío o "pendiente" — nunca se rellena con algo plausible. Cualquier cifra que sea una estimación propia (no un dato verificado) se marca explícitamente como "(estimación)".

## 2. Verificación cruzada de datos externos

Cualquier dato de contacto o prospecto que provenga de una herramienta externa a este sistema (no generado por los propios agentes) se contrasta con al menos una segunda fuente independiente antes de tratarse como válido — no se acepta solo porque se presente con confianza. Esta regla nace de un caso real: una herramienta externa fabricó un experimento y clínicas inexistentes durante EXP-002, detectado solo por verificación cruzada manual.

## 3. Ninguna acción de cara al exterior sin confirmación humana

Enviar un mensaje real a un prospecto o cliente, publicar contenido en el sitio, o ejecutar cualquier acción irreversible o visible fuera de este repositorio, requiere confirmación explícita del usuario — sin excepción, incluso si existe una integración real conectada (ej. Gmail) que técnicamente lo permitiría.

## 4. Distinguir hipótesis de hecho validado

Una proyección, estimación o hipótesis de negocio nunca se presenta con el mismo peso que un dato confirmado con clientes/ventas reales. `base_conocimiento/metricas_historicas.md` solo se actualiza con datos de experimentos ya cerrados con resultados reales — nunca con proyecciones previas a la validación.

## 5. No añadir complejidad sin evidencia

Ningún agente, documento o automatización nuevo se crea como componente separado hasta que exista evidencia real (no hipotética) de que necesita una lógica distinta a la de algo que ya existe. Ver `FARO_AUDITORIA_SISTEMA.md` sección "Compost Loop" para el caso concreto que motivó esta regla.
