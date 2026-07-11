# FARO — Método de Auditoría de Conversión (caballo de Troya del embudo comercial)

**Origen de este documento**: formaliza y reemplaza la sección 9 de `FARO_MVP_LANDING.md` ("Puntuación FARO"), tras validarse con dos casos reales (Clínica Veterinaria Centro León, Berciano Dental — ver `experimentos/EXP-003-pymes-leon/`) que un informe de auditoría gratuito es un ask mucho más fácil de aceptar que enseñar una landing ya construida, y que posiciona a FARO como quien diagnostica el negocio, no como quien vende páginas o IA.

**Nota sobre el nombre**: se llama "Método FARO", sin símbolo ®. FARO no tiene una marca registrada — usar ® sin registro real ya fue un error cometido y corregido en este mismo proyecto (ver `.claude/skills/consejo-estrategico-leon/references/11-gabriela-vision.md`, sección "Casos reales": "la corrección del símbolo ® falso... rentables a corto plazo pero incoherentes con la honestidad de alcance ya declarada"). No se repite ese error aquí.

---

## 1. Por qué la auditoría, y no vender IA/landings directamente

| Vender directamente | Auditoría de conversión |
|---|---|
| "Automatizamos procesos con IA" | "Analizamos vuestra web y encontramos N oportunidades para conseguir más clientes" |
| Exige explicar qué hace la IA | El valor se entiende en 30 segundos |
| El cliente tiene que imaginar el resultado | El cliente ve el resultado delante de él, sobre su propio negocio |
| Mucha competencia (cualquiera "hace IA" o "hace webs") | Poca competencia local con un método propio y repetible |
| Genera confianza con dificultad | La auditoría genera confianza *antes* de pedir nada a cambio |

Esto no es una idea nueva sobre FARO — es la aplicación literal de `FARO_ESTRATEGIA_MARCA.md` ("FARO vende criterio, no ejecución técnica") al primer contacto comercial. La IA y las automatizaciones quedan invisibles en la conversación de entrada: si una automatización aporta valor, se usa; si no hace falta, no se menciona. El cliente compra el resultado, nunca la tecnología.

## 2. Suposición que hay que descartar: la auditoría NO es el producto final

Es fácil quedarse en "hacer informes" — un informe bien hecho se siente como un trabajo terminado, y por eso mismo es una trampa cómoda (mismo patrón de riesgo que señaló Charlie Munger en `AUDITORIA_CONSEJO_2026-07-10.md`: seguir produciendo documentos se siente como progreso, contactar da miedo). **La auditoría es el caballo de Troya del embudo comercial, no el negocio.** El dinero está en la implementación: landing, automatización de WhatsApp, seguimiento de contactos, confirmación de citas — el catálogo ya documentado en `FARO_MODELO_NEGOCIO.md` y `FARO_BIBLIOTECA_AUTOMATIZACIONES.md`.

Consecuencia práctica: **ningún informe se diseña como pieza aislada** — desde la primera línea, tiene que desembocar de forma natural en una oferta de implementación, no terminar en "espero que os sea útil" sin más.

## 3. El recorrido completo

```
1. Detectar el negocio (dataset de EXP-003 o equivalente para otros territorios/verticales)
                    ↓
2. Preparar la auditoría (6-10 páginas, información pública, metodología estándar — sección 5)
                    ↓
3. Entregar gratis o presentar en 10-15 minutos (guion en experimentos/EXP-003-pymes-leon/05-mensajes/)
                    ↓
4. Preguntar explícitamente: "¿Queréis que os ayudemos a implementar estas mejoras?"
                    ↓
5. Vender el proyecto de implementación (landing / WhatsApp / seguimiento / confirmación de citas)
```

El paso 4 no es opcional ni se deja para "si sale el tema" — es un paso estructural del método, con su propia sección en la plantilla del informe (ver sección 6).

## 4. Las 10 dimensiones de la Puntuación FARO

Amplía las 5 dimensiones iniciales de `FARO_MVP_LANDING.md` v1 a un rubric completo, pensado para ser aplicable a cualquier vertical con agenda (dental, veterinaria, abogados, fisioterapia, hostales, restaurantes), no solo a las ya trabajadas:

| # | Dimensión | Qué mide |
|---|---|---|
| 1 | Claridad del mensaje | ¿Se entiende en 5 segundos qué resuelve el negocio y para quién? |
| 2 | Facilidad para contactar | ¿Cuántos pasos/decisiones hay entre "quiero esto" y "he contactado"? |
| 3 | Reducción de incertidumbre | ¿Sabe el visitante qué va a pasar después de contactar (cuándo le responden, qué le van a preguntar)? |
| 4 | Conversión móvil | ¿El recorrido funciona igual de bien en el móvil, canal de entrada real de la mayoría? |
| 5 | Llamadas a la acción | ¿Los CTA dicen el resultado ("Quiero hablar con un especialista") o son genéricos ("Más información")? |
| 6 | Prueba social y confianza | ¿Hay fotos reales, años de experiencia, certificaciones, testimonios verificables? |
| 7 | Fricción técnica de entrada | ¿Pop-ups, banners de cookies o widgets bloquean el contenido antes de que el visitante vea nada? |
| 8 | Canal adecuado al momento | ¿Hay un canal directo (WhatsApp, llamada) visible y coherente con la urgencia real del servicio? |
| 9 | Cobertura de objeciones frecuentes | ¿Responde a precio orientativo, política de cancelación, dudas típicas, sin que el visitante tenga que preguntar? |
| 10 | Consistencia entre canales | ¿La web, Google Business y redes sociales cuentan la misma historia y dan la misma disponibilidad? |

Cada dimensión se puntúa 0-10 con una nota razonada de una frase. Nota global sobre 100 = suma simple de las diez — nunca se redondea al alza (ver `FARO_MVP_LANDING.md` sección 9.2, regla que se mantiene).

## 5. Regla de evidencia (se mantiene sin cambios)

Cada hallazgo debe ser trazable a algo verificado: una captura, una búsqueda web con fuente citada, o la propia navegación del sitio. Si una parte no es accesible o no se ha visto, se marca explícitamente como *"patrón típico del sector, pendiente de confirmar con una captura real"* — nunca se presenta una suposición como observación directa. Validado en la práctica: el informe de Berciano Dental v1 tuvo que corregirse en cuanto llegó una captura real, precisamente porque los hallazgos pendientes estaban marcados como tales y no mezclados con los confirmados (ver commit de corrección).

## 6. Estructura estándar del informe (actualizada — añade el paso 4 del embudo)

1. **Portada** — título con la tensión central detectada (no genérico: "¿cuántas decisiones le pedimos al visitante antes de que decida contactar?", no "Auditoría de [Negocio]").
2. **Nota de transparencia** — qué está confirmado (✅) y qué pendiente de confirmar.
3. **🟢 Lo que funciona** — 3-5 puntos, siempre antes de las críticas.
4. **Hallazgos** — cada uno con situación actual + impacto, nunca "esto es feo", siempre "esto añade fricción/duda/un paso".
5. **Oportunidad FARO** — ejemplo concreto de hero/CTA corregido, no solo crítica abstracta.
6. **Puntuación FARO** — tabla de 10 dimensiones + nota global.
7. **Menú de implementación (nuevo, obligatorio)** — ver sección 7. Traduce cada hallazgo relevante a un servicio concreto del catálogo FARO, con la pregunta explícita de si quieren ayuda para implementarlo.
8. **Frase de cierre** — variante de: *"Nuestro trabajo no consiste en hacer una web nueva. Consiste en conseguir que más personas que ya llegan a vuestra web den el siguiente paso."*

## 7. Menú de implementación — el paso que faltaba

Sección nueva, obligatoria en todo informe a partir de ahora. Convierte cada bloque de hallazgos en una línea de servicio ya existente en el catálogo de FARO, para que la pregunta "¿queréis que os ayudemos?" tenga una respuesta concreta delante, no abstracta:

| Si el informe encontró... | El siguiente paso es... | Servicio FARO (ya documentado) |
|---|---|---|
| CTA débiles, mensaje poco claro, fricción de entrada | Una landing de un único objetivo, con el mensaje corregido | `FARO_MVP_LANDING.md` — landing + seguimiento |
| Canal de WhatsApp ausente o mal gestionado fuera de horario | Respuesta automática fuera de horario | `/servicios/whatsapp-sin-respuesta/`, catálogo sección 1 |
| No hay confirmación ni recordatorio de citas | Confirmación automática 24h antes | `/servicios/confirmacion-de-citas/`, catálogo sección 4 |
| Contactos que preguntan y no reservan, sin seguimiento | Seguimiento automático de clientes | `/servicios/seguimiento-de-pacientes/`, catálogo sección 7 |
| Inconsistencia entre web, Google Business y redes | Auditoría ampliada + alineación de mensaje (fuera del MVP técnico actual, se declara como tal) | Roadmap, no servicio activo todavía — no prometer lo que no existe |

En el propio informe, esta tabla se presenta de forma resumida y personalizada — no se pega la tabla completa, se seleccionan solo las filas que aplican a los hallazgos reales de ese negocio concreto.

## 8. Escalabilidad — por qué este método sí compone

Cada auditoría completada dentro de la misma metodología (mismas 10 dimensiones, misma estructura, mismo menú de implementación) reduce el coste marginal de la siguiente: el mismo criterio de evaluación, la misma plantilla de informe, el mismo guion de entrega. Esto es literalmente el mecanismo que `FARO_MODELO_NEGOCIO.md` sección 1.6 ya identifica como el recurso clave defendible de FARO — conocimiento de proceso reutilizable, no herramienta. La auditoría de conversión es, en sí misma, la primera automatización interna de FARO sobre su propio proceso comercial.

## 9. Qué NO hacer (riesgos ya detectados)

- **No convertir el informe en un fin en sí mismo.** Un informe sin la sección 7 (menú de implementación) es un regalo bonito, no un embudo comercial.
- **No usar ® ni ninguna reivindicación de marca registrada** que no sea real (ver nota inicial).
- **No estandarizar hasta el punto de repetir hallazgos genéricos entre negocios distintos.** Cada informe se basa en evidencia real de ese negocio concreto (sección 5) — la metodología se repite, los hallazgos no se copian de un informe a otro.
- **No prometer servicios que no existen todavía** (fila de "Roadmap" en la sección 7) — coherente con la honestidad de alcance de toda la documentación FARO.

---

*Este documento sustituye la sección 9 de `FARO_MVP_LANDING.md`, que queda reducida a una referencia cruzada para no duplicar contenido. Aplicar esta metodología a los 16 negocios restantes del dataset de `EXP-003-pymes-leon` es el siguiente paso natural del experimento.*
