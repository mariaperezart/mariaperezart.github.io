# Auditoría del sistema multiagente de FARO — Fase 0-10 + Compost Loop

*Realizada a petición del usuario, con el marco "Arquitecto Jefe del Sistema". Alcance: los 17 agentes de `.claude/agents/`, `base_conocimiento/`, y el estado real de `experimentos/EXP-002-clinicas-valencia` (el único experimento avanzado). No se auditan en esta pasada `estudio` ni `amazon-kdp-publishing` — quedan pendientes si se piden después.*

## 1. Inventario del sistema

### Archivos recibidos
- 17 definiciones de agente (`01-orquestador.md` a `17-correo.md`), todas con frontmatter `description/tools/model` y estructura idéntica (Responsabilidad única / NO DEBES / ENTRADA / SALIDA / REGLAS).
- 4 archivos de `base_conocimiento/` (patrones, mensajes efectivos, métricas históricas, sectores validados) — **los cuatro vacíos**, sin una sola fila de dato real todavía.
- 2 experimentos en `experimentos/`: `EXP-001-ejemplo` (plantilla, no ejecutar) y `EXP-002-clinicas-valencia` (real, en curso, bloqueado en el paso 6 de 10 — envío manual pendiente).
- 13 documentos `FARO_*.md` de estrategia (referenciados por los agentes como fuente de verdad de pricing, ICP, tono de marca, cadencia comercial).
- `sql/schema.sql`, sitio web estático, sin datos de negocio real registrados (`finanzas/registro.md`, `rrhh/necesidades.md`, `producto/peticiones-catalogo.md`, `exito-cliente/calendario-revisiones.md` — ninguno de estos cuatro existe todavía como archivo real, porque ninguno de sus agentes ha tenido nunca un disparador real).

### Archivos faltantes / información insuficiente
- **Cero clientes de pago reales** — todo el tramo de negocio operativo (13-finanzas, 14-rrhh, 15-producto, 16-exito-cliente) no tiene ni un solo dato que auditar más allá de su propia definición, porque su condición de activación explícita ("primer cliente real") nunca se ha cumplido.
- No hay telemetría de uso real de los agentes (cuántas veces se invocó cada uno, tokens consumidos, coste real) — solo puedo evaluar diseño, no comportamiento en producción.
- No hay historial de errores fuera de una nota de proceso encontrada en `EXP-002/plan.md` (ver Fase 2 más abajo) — es la única evidencia real de fallo en todo el sistema, y es significativa.

## 2. Mapa de arquitectura

| # | Agente | Responsabilidad | Entrada clave | Salida | Frecuencia real hasta hoy | Valor con evidencia hoy |
|---|---|---|---|---|---|---|
| 01 | Orquestador | Secuenciar el experimento, no ejecutar contenido | Objetivo del usuario | `plan.md` | 2 veces (EXP-001 plantilla, EXP-002 real) | Alto — sin él no habría estructura común entre experimentos |
| 02 | Investigador | Dataset de prospectos | Objetivo + ICP | `dataset.md` | 1 vez real (EXP-002) | Alto, ya generó las 9 clínicas de Valencia |
| 03 | Verificador | Auditar el dataset | Dataset del Investigador | `verificacion.md` | 1 vez real | Alto — y con evidencia añadida de que hacía falta (ver Fase 2) |
| 04 | Financiero (experimentos) | Viabilidad económica estimada | Dataset verificado + pricing | `analisis_financiero.md` | 1 vez real | Medio — sin clientes reales, todo el output es proyección |
| 05 | Redactor | Mensajes de prospección | Dataset + tono de marca | `05-mensajes/` variantes A/B/C | 1 vez real | Alto — output ya generado y en uso |
| 06 | Preparador | Cruzar dataset + mensajes en plan de envío | Dataset + mensajes | `06-envio/` | 1 vez real | Alto — es el paso donde EXP-002 está bloqueado ahora mismo |
| 07 | Tracker | Registrar respuestas reales | Confirmación del usuario | `07-resultados.md` | 0 veces (tabla vacía) | Sin evidencia todavía — depende 100% de que el usuario envíe |
| 08 | Analizador | Métricas del embudo | Resultados del Tracker | `08-analisis_resultados.md` | 0 veces | Sin evidencia — bloqueado detrás del Tracker |
| 09 | Aprendizaje | Cerrar experimento, alimentar `base_conocimiento/` | Análisis + financiero + mensajes | `09-aprendizajes.md` + edita `base_conocimiento/` | 0 veces | Sin evidencia — es el agente que haría que el sistema empezara a "aprender de verdad", y todavía no ha corrido ni una vez |
| 10 | Estratega | Proponer el siguiente experimento | Aprendizajes + base de conocimiento | `10-recomendacion.md` | 0 veces | Sin evidencia |
| 11 | Marketing (SEO/contenidos) | Un artículo de blog por invocación | Calendario editorial | `blog/borradores/` | Sin evidencia de invocación en esta sesión, pero **es operable ya**, no depende de clientes | Potencial alto, no bloqueado por nada externo |
| 12 | Legal | Checklist de revisión legal pendiente | Estado de `/legal/*` | `legal/checklist-revision-abogado.md` | 0 veces — el propio agente documenta que "hoy tiene poco que hacer" | Bajo hoy, por diseño explícito |
| 13 | Finanzas (real) | Registro de ingresos/gastos reales | Confirmación de cobro/gasto real | `finanzas/registro.md` | 0 veces — no existe el archivo, cero clientes | Nulo hoy, por diseño explícito |
| 14 | RRHH | Preparar incorporación de colaboradores | Señal de sobrecarga | `rrhh/necesidades.md` | 0 veces | Nulo hoy, por diseño explícito |
| 15 | Producto (catálogo) | Priorizar automatizaciones del catálogo | Peticiones de clientes reales | `producto/peticiones-catalogo.md` | 0 veces | Nulo hoy, por diseño explícito |
| 16 | Éxito de Cliente | Revisiones periódicas, upsell, referidos | Cliente activo real | `exito-cliente/calendario-revisiones.md` | 0 veces | Nulo hoy, por diseño explícito |
| 17 | Correo (Gmail) | Borradores reales + búsqueda de respuestas en Gmail | Plan de envío + conector Gmail activo | `borradores-gmail.md` / `hallazgos-bandeja.md` | No usado en EXP-002 todavía (el envío ahí sigue siendo 100% manual) | Sin evidencia de uso, pero es el único agente con integración real conectada (Gmail vía MCP) |

**Lectura del mapa**: los 10 agentes de la secuencia de experimento (01-10) tienen una cadena de dependencia estricta y lineal — cada uno bloquea al siguiente. Hoy esa cadena está cortada exactamente en la mitad (pasos 1-5 hechos, 6-10 en cero). Los 7 agentes "independientes" (11-17) se dividen en dos grupos muy distintos: **uno operable ya** (11-Marketing, 17-Correo) y **cinco completamente dormidos por diseño** (12 a 16), todos con la misma frase de fondo: "sin clientes de pago, este documento no tiene nada que registrar".

## 3. Auditoría de agentes

### Los 10 de la secuencia (01-10)
No hay duplicación entre ellos — cada uno tiene una entrada/salida distinta y una regla explícita de "NO DEBES" que cede la tarea contigua al vecino correcto (ej. el Verificador no genera prospectos, el Analizador no registra interacciones). Es una cadena bien separada por responsabilidad única, sin solapes. Ninguno "hace demasiado". El diseño en sí no muestra señales de sobre-ingeniería.

**Hallazgo real de fallo (no hipotético)**, encontrado en `EXP-002/plan.md`: una herramienta externa que el usuario consultaba en paralelo generó dos veces datos completamente inventados (un "EXP-001 en León" con clínicas y cifras fabricadas), presentados con la misma confianza que los datos reales. El sistema ya reaccionó bien ante esto — exigió una comprobación cruzada independiente antes de aceptar el Lote A — pero es la prueba de que **el riesgo de alucinación de fuentes externas es real, no teórico**, y de que la regla "nunca aceptar un dato sin fuente verificable" (repetida en el Investigador, el Verificador y el Financiero) está haciendo trabajo real, no decorativo.

**Cuello de botella real, no hipotético**: el sistema completo está parado en el paso 6 (envío manual) desde que se generó el paquete de envío. Los agentes 07-10 no tienen ningún dato que procesar y no pueden generar valor hasta que el usuario envíe los 3 mensajes del Lote A. Esto no es un fallo del diseño — es exactamente la barrera que el propio sistema declara como "acción del usuario, nunca automática" — pero como hallazgo de auditoría, es el punto de mayor fricción real hoy: **cinco de diez agentes de la secuencia (50%) llevan cero ejecuciones porque dependen de una acción manual que aún no ha ocurrido.**

### Los 7 independientes (11-17)

| Pregunta de auditoría | Respuesta |
|---|---|
| ¿12, 13, 14, 15, 16 duplican algo? | No — cada uno cubre un dominio distinto (legal, finanzas, personas, producto, cuentas). |
| ¿Hacen demasiado poco? | Sí, y lo reconocen ellos mismos explícitamente en su propia definición ("con cero clientes, este documento debe estar vacío honestamente"). Esto es honestidad de diseño, no un defecto oculto. |
| ¿Podrían fusionarse? | **Es la pregunta real de esta auditoría.** Los cinco comparten el mismo patrón exacto: "mantén un archivo casi vacío hasta que ocurra el disparador X (primer cliente de pago)". Hoy son 5 archivos de agente, 5 prompts, 5 "NO DEBES" independientes — para sostener, en la práctica, una sola idea: *nada de esto tiene trabajo real hasta que exista un cliente*. |
| ¿Cuál es el coste de mantenerlos separados? | Bajo en tokens (no se invocan), pero real en superficie de mantenimiento: son 5 archivos más que revisar, versionar y explicar cada vez que se audita el sistema (como ahora). |
| ¿Cuál sería el coste de fusionarlos? | Se perdería la separación de responsabilidad el día que sí haya cliente real — ese día, Finanzas, RRHH, Producto y Éxito de Cliente sí necesitan lógicas y cadencias distintas (mensual/trimestral, disparadores de upsell a mes 3-4, etc.), que ya están bien especificadas en cada uno. Fusionarlos ahora ahorraría 4 archivos, pero habría que volver a separarlos en cuanto llegue el primer cliente — trabajo duplicado en la dirección contraria. |
| ¿11-Marketing y 17-Correo pertenecen al mismo grupo que los otros cinco? | No deberían auditarse igual — ninguno de los dos depende de que exista un cliente de pago. Marketing puede escribir contenido SEO hoy mismo; Correo puede operar en cuanto haya un plan de envío (ya lo hay, en EXP-002, pendiente de ejecutar). |

## Veredicto de esta pasada (Fase 0-2, sin entrar todavía en rediseño)

El sistema no muestra sobre-ingeniería evidente en los 10 agentes secuenciales — es una cadena limpia, sin duplicación, con reglas anti-alucinación que ya demostraron su utilidad una vez. El área real de tensión son los cinco agentes dormidos (12-16): están bien diseñados individualmente, pero **como grupo** son el candidato más claro a la pregunta de Fase 8 ("¿los volvería a crear hoy, o esperaría a que el primer cliente real haga evidente cuál de ellos hace falta primero?") — eso ya es Fase 8, no esta pasada.

**Pendiente real, más urgente que cualquier rediseño**: nada en los agentes 07-10 puede generar valor mientras el Lote A de EXP-002 siga sin enviarse. Ese es el cuello de botella del sistema completo hoy, no un problema de arquitectura.

---

## 4. Auditoría de procesos (Fase 3)

**Redundancias**: ninguna real. Cada paso de la secuencia 01-10 consume la salida del anterior y nada más — no hay información que se recalcule dos veces en distintos agentes.

**Esperas y cuellos de botella**: uno solo, pero estructural — el paso 6 (envío manual). El diseño lo deja así a propósito ("nunca se envía nada automáticamente sin confirmación explícita", regla repetida en 06-preparador y 17-correo), lo cual es correcto para una acción de cara al exterior. El problema de proceso real es que **no existe ningún mecanismo de recordatorio o SLA** sobre cuánto tiempo lleva un experimento parado ahí — hoy solo se sabe que EXP-002 está bloqueado porque el `plan.md` lo dice, no porque el sistema lo señale de forma proactiva.

**Aprobaciones innecesarias**: no se detectan. Las únicas puertas de aprobación humana (enviar mensajes reales, confirmar clasificación de una respuesta encontrada en Gmail) están donde deberían estar — acciones irreversibles o de cara a terceros.

**Dependencias frágiles**: una, real y ya materializada — el Verificador (03) audita duplicados, ICP y "dato claramente erróneo", pero **no tiene una regla explícita de contrastar el contacto con una segunda fuente independiente**. Fue el propio usuario quien improvisó esa comprobación cruzada al enterarse de que una herramienta externa había fabricado datos (ver Fase 2) — no estaba en el SOP del agente. Es una mejora concreta y de bajo coste: añadir esa regla a `03-verificador.md` para que la próxima vez no dependa de que el usuario se acuerde de hacerlo por su cuenta.

**Secuencial vs. paralelo**: la cadena 01-10 es correctamente secuencial — cada paso depende de datos que solo existen tras el anterior (no hay falso secuencialismo que podría paralelizarse sin perder integridad).

**Errores recurrentes**: uno documentado (la fabricación de datos externa, Fase 2), sin repetirse una segunda vez gracias a la verificación cruzada — pero esa verificación fue reactiva, no está todavía institucionalizada como regla del agente.

**Procesos sin métricas**: el ciclo completo (tiempo desde dataset hasta primera respuesta, tiempo bloqueado en cada paso) no se mide en ningún archivo. `base_conocimiento/metricas_historicas.md` solo registrará resultados de experimentos *cerrados* — no hay visibilidad de cuánto tiempo tarda un experimento en moverse entre pasos mientras está en curso.

## 5. Auditoría de prompts (Fase 4)

Los 17 agentes comparten una plantilla idéntica (frontmatter → Responsabilidad ÚNICA → NO DEBES → ENTRADA → SALIDA → REGLAS), en Markdown puro, sin XML. Evaluación:

- **Claridad y estructura**: alta. La sección "NO DEBES" en cada agente es, de hecho, el mecanismo anti-solapamiento que hace innecesaria más coordinación explícita entre agentes — cumple dos funciones a la vez (delimita responsabilidad y previene duplicación) con muy poco texto.
- **Longitud**: ningún prompt es excesivo (rango ~1,3-3,5 KB); no encontré ningún candidato real a "recortar un 30% sin perder rendimiento" — son ya prompts de responsabilidad única, ajustados a su tarea. Esto es una fortaleza, no algo a corregir.
- **Riesgo de alucinación**: mitigado de forma consistente y repetida — "nunca inventes", "marca (estimación)", "no completes campos sin fuente" aparece, con variaciones, en Investigador, Verificador, Financiero, Marketing y Correo.
- **Repetición real encontrada (con evidencia, no supuesta)**: **no existe un `CLAUDE.md` en la raíz del repositorio.** Eso significa que la regla "nunca fabricar datos sin fuente" no vive en ningún lugar compartido — se repite, redactada de forma distinta, en al menos 5 de los 17 agentes. Es exactamente el tipo de contexto repetido que Fase 4 pide detectar: **oportunidad concreta y de bajo riesgo** — crear un `CLAUDE.md` con las 3-4 reglas transversales (nunca fabricar sin fuente, marcar estimaciones explícitamente, nunca enviar/publicar sin confirmación humana, distinguir hipótesis de hecho validado) y aligerar la repetición en cada agente individual a una remisión corta. No cuantifico un % de ahorro de tokens porque no tengo forma de medirlo con evidencia real en esta sesión — lo dejo como oportunidad cualitativa, no como cifra inventada.
- **Prompt caching / pocos ejemplos / few-shot**: ningún agente usa ejemplos few-shot ni bloques de "thinking" explícitos — son instrucciones directas, lo cual es coherente con tareas de responsabilidad única y bajo riesgo de ambigüedad de formato (todas piden una tabla Markdown concreta como salida).

## Veredicto ampliado (Fase 0-4)

Dos recomendaciones concretas y accionables salen de este bloque, ambas de bajo riesgo y bajo esfuerzo:

1. **Crear `CLAUDE.md`** en la raíz con las reglas transversales repetidas hoy en 5+ agentes distintos.
2. **Añadir a `03-verificador.md`** una regla explícita de contrastar contacto/dato crítico con una segunda fuente independiente antes de marcar una fila como válida — ya se demostró necesaria una vez, de forma reactiva.

Ninguna de las dos cambia la arquitectura ni el número de agentes — son mejoras de Fase 9 (quick wins), no de Fase 8 (rediseño). La pregunta de fondo sobre si fusionar los 5 agentes dormidos (12-16) sigue abierta para cuando se aborde Fase 8.

---

## 6. Auditoría de memoria (Fase 5)

Los 4 archivos de `base_conocimiento/` (patrones, mensajes efectivos, métricas históricas, sectores validados) están **todos vacíos** — no hay duplicados, obsoletos ni contradicciones que auditar porque no hay contenido todavía. Lo único evaluable es el esquema en sí:

- No hay solape entre los cuatro — cada uno tiene un formato y propósito distinto (patrón de comportamiento / mensaje ganador / serie histórica comparable / nicho probado).
- Es ya una "memoria mínima": cuatro archivos finos, de propósito único, sin campos genéricos de relleno. No encuentro nada que recortar aquí.
- **Riesgo a vigilar, no a corregir todavía**: la regla del agente de Aprendizaje ("solo promueve un aprendizaje si tiene un dato del Analizador que lo respalde") es correcta, pero nunca se ha ejecutado — no hay forma de confirmar con evidencia que el proceso de promoción a `base_conocimiento/` funcione como está descrito hasta que cierre el primer experimento real.

## 7. Auditoría de costes (Fase 6)

Los 17 agentes usan `model: sonnet` sin excepción. Con la evidencia disponible (sin telemetría real de uso), la única observación defendible es cualitativa, no una cifra de ahorro:

- Agentes de razonamiento real (Financiero, Verificador cuando detecta anomalías, Estratega, Analizador interpretando cuellos de botella) justifican un modelo capaz.
- Agentes de mantenimiento casi mecánico (Tracker rellenando una tabla con datos ya confirmados por el usuario; Legal/RRHH/Finanzas manteniendo un checklist casi vacío) son tareas de estructura y formato, no de razonamiento complejo — candidatos razonables a un modelo más barato/rápido si la plataforma lo permite por agente. Lo marco como hipótesis a probar, no como ahorro confirmado — no tengo datos de calidad comparada entre modelos para estas tareas concretas en esta sesión.
- No se detectan llamadas redundantes ni contexto innecesario cargado — cada agente lee solo sus propios archivos de entrada declarados.
- Oportunidad de caching de prompt: los 17 prompts son estáticos y se reutilizan en cada invocación futura — se benefician de forma natural de prompt caching si la plataforma de ejecución lo aplica, sin que haga falta ningún cambio de diseño.

## 8. Auditoría de errores (Fase 7)

Con un solo experimento real avanzado (EXP-002, pasos 1-5 de 10) no hay muestra suficiente para generalizar sobre "errores repetitivos", "respuestas inconsistentes" o "fallos de coordinación" — indicarlo explícitamente en vez de especular, como pide el propio marco.

**El único fallo real documentado** (ya descrito en Fase 2/3):
- **Causa raíz**: una herramienta externa, fuera de este sistema, generó datos completamente fabricados (un experimento y clínicas inexistentes) y los presentó con la misma confianza que datos reales.
- **Impacto**: si no se detecta, el Lote A podría haber incluido contactos falsos — outreach desperdiciado y, peor, contaminación de `base_conocimiento/metricas_historicas.md` con una tasa de respuesta calculada sobre destinatarios que no existen.
- **Probabilidad de que se repita**: media-alta si se sigue usando esa herramienta externa en paralelo sin un paso de verificación formal dentro del sistema (hoy depende de que el usuario se acuerde de pedirlo).
- **Corrección ya aplicada**: verificación cruzada manual + WebSearch sobre 3 de 9 clínicas antes de aceptar el Lote A.
- **Prevención pendiente de formalizar**: la regla ya propuesta en la Fase 3 para `03-verificador.md`.

## 9. Rediseño desde cero (Fase 8)

Pregunta guía: si tuviera que construir esto hoy, ¿lo haría igual?

**La cadena de 10 agentes (01-10)**: sí, la volvería a construir igual. Es responsabilidad única real, sin duplicación, y ya demostró que atrapa un error real. No hay una arquitectura más simple que no pierda la trazabilidad "cada paso audita al anterior".

**Los 5 agentes dormidos (12-16)**: **no los crearía como 5 archivos separados hoy.** Los cinco comparten exactamente una idea — "sin cliente de pago, aquí no hay nada que hacer" — y hoy pagan un coste de mantenimiento (5 archivos que releer, versionar y explicar en cada auditoría) por una separación que todavía no aporta nada, porque el disparador común (primer cliente real) no ha ocurrido ni una vez. Diseño alternativo: **un único agente "Operaciones post-cliente"** que documente la misma idea que hoy repiten los cinco, y que se divida en Legal/Finanzas/RRHH/Producto/Éxito de Cliente **en el momento real en que llegue el primer cliente** — la especificación detallada que ya tiene cada uno de los cinco no se pierde, se congela como sección de ese único agente hasta que haga falta separarla. Es exactamente el tipo de "no añadas complejidad sin evidencia" que pide el propio marco.

**11-Marketing y 17-Correo**: los mantendría igual — no dependen del disparador de cliente y ya son operables.

**Algo que añadiría y no existe hoy**: ningún mecanismo de recordatorio para experimentos bloqueados en un paso manual (el caso real de EXP-002 ahora mismo). Esta sesión sí tiene una herramienta real para eso (rutinas programadas) — una recomendación concreta y de bajo riesgo es crear un recordatorio periódico que pregunte "¿ya se envió el Lote A de EXP-002?" en lugar de que el estado bloqueado solo se sepa si alguien abre `plan.md`.

### Arquitectura propuesta (vNext) — resumen
- Igual: 01-10 (secuencia de experimento), 11-Marketing, 17-Correo.
- Fusionar: 12+13+14+15+16 → 1 agente "Operaciones post-cliente", que se vuelve a dividir en 5 el día del primer cliente real.
- Añadir: regla de verificación cruzada en 03-verificador.md; `CLAUDE.md` con las reglas transversales (Fase 4); recordatorio periódico sobre experimentos bloqueados en paso manual.
- Nada que eliminar sin sustituto — no encontré ningún agente de la secuencia principal sin valor demostrado.

---

## 10. Backlog priorizado (Fase 9)

| # | Problema | Solución | Impacto | Esfuerzo | Riesgo | Prioridad | Dependencias | Estado |
|---|---|---|---|---|---|---|---|---|
| 1 | Sin mecanismo que avise cuando un experimento queda bloqueado en un paso manual | Rutina programada que revisa `experimentos/` y avisa por email si sigue bloqueado | Alto (desbloquea el cuello de botella real de hoy) | Bajo | Ninguno (solo lectura, no envía nada) | **Hecho** | Ninguna | ✅ Implementado en esta sesión (`trig_01KDWbWKNFYA99L5y2aKsVDY`, lunes 9:00) |
| 2 | La regla anti-fabricación vive repetida en 5+ agentes, en ningún sitio central | Crear `CLAUDE.md` con las 3-4 reglas transversales | Medio (mantenimiento, no funcionalidad) | Bajo | Ninguno | Alta | Ninguna | ✅ Implementado (`CLAUDE.md`, 5 reglas) |
| 3 | El Verificador no contrasta el contacto con una segunda fuente — ya falló una vez por esto | Añadir esa regla explícita a `03-verificador.md` | Alto (previene el único fallo real ya documentado) | Bajo | Ninguno | **Alta** | Ninguna | ✅ Implementado (regla 5 añadida) |
| 4 | 5 agentes (12-16) mantienen una separación que hoy no aporta nada, sin cliente real todavía | Fusionar en "Operaciones post-cliente"; re-dividir cuando llegue el primer cliente | Medio (reduce superficie de mantenimiento) | Medio (reescribir 5 archivos en 1, sin perder el detalle ya especificado) | Bajo (nada roto si se pospone) | Media | Ninguna | Pendiente (no es quick win, requiere decisión de fusión) |
| 5 | Sin dato de cuánto tarda cada paso del pipeline | Añadir timestamp simple a cada paso de `plan.md` al completarse | Bajo-medio (solo visibilidad, no cambia el resultado) | Bajo | Ninguno | Media-baja | Ninguna | ✅ Implementado (plantilla del Orquestador + EXP-002 actualizados; timestamps pasados no reconstruidos, por honestidad) |
| 6 | Modelo Sonnet para todos los agentes, incluidos los de tarea mecánica (Tracker, Legal, RRHH, Finanzas) | Probar un modelo más barato en 1-2 agentes de bajo riesgo como piloto | Desconocido todavía — es hipótesis, no ahorro confirmado | Bajo (piloto acotado) | Bajo (agentes de bajo riesgo, fácil de revertir) | Baja (no bloquea nada, solo cuando haya tiempo) | Ítem 2 recomendable primero (mismo tipo de cambio de bajo riesgo) | Pendiente, marcado explícitamente como experimento, no como certeza |

**Nota de honestidad**: no incluyo en este backlog nada que no tenga una razón trazable a un hallazgo real de las fases anteriores — no hay ítems de relleno para completar la sección.

## 11. Plan de evolución (Fase 10)

**Versión actual**: 17 agentes (10 en secuencia + 7 independientes), un experimento real a mitad de camino (EXP-002, bloqueado en paso 6), memoria compartida vacía, sin `CLAUDE.md`, sin mecanismo de recordatorio — este último ya resuelto en esta sesión.

↓

**Versión siguiente** (quick wins, esfuerzo bajo, sin tocar arquitectura — ítems 2, 3 y 5 del backlog):
- `CLAUDE.md` con las reglas transversales.
- Regla de verificación cruzada añadida a `03-verificador.md`.
- Timestamps simples por paso en los `plan.md` de experimento.
- Qué cambia: los archivos de agente y el `plan.md`. Qué desaparece: nada. Qué se crea: `CLAUDE.md`. Qué permanece: los 17 agentes, la secuencia completa, la memoria vacía (todavía sin datos reales que migrar).

↓

**Versión objetivo** (una vez exista al menos un experimento cerrado con datos reales y, idealmente, el primer cliente de pago — ítem 4 del backlog, y la validación real del ítem 6):
- `base_conocimiento/` con datos reales de 2-3 experimentos cerrados (no antes — no se puede llegar aquí sin pasar primero por cerrar EXP-002).
- Los 5 agentes dormidos, consolidados en uno hasta ese momento, se dividen de nuevo en Legal/Finanzas/RRHH/Producto/Éxito de Cliente en cuanto el primer cliente real lo exija — migración de la especificación ya escrita, no trabajo desde cero.
- Decisión ya informada (no hipótesis) sobre si algún agente puede moverse a un modelo más barato, con datos reales de calidad comparada.
- Qué cambia: estructura de agentes 12-16 (de 1 a 5, en el momento correcto). Qué desaparece: nada de lo ya construido — todo se reactiva, no se descarta. Qué se crea: los KPIs reales en `finanzas/registro.md` y el resto de archivos que hoy no existen porque su disparador no ha ocurrido. Qué permanece: la cadena 01-10 y los agentes 11/17, sin cambios.

## 12. Compost Loop

- **¿Mantengo algún componente solo porque ya existe?** Sí — los 5 agentes dormidos (12-16). Es el único caso detectado en todo el sistema.
- **¿Qué eliminaría si tuviera que reducir el sistema un 50%?** Fusionaría 12-16 en 1 (de 17 a 13 agentes). No eliminaría ninguno de la cadena 01-10 ni 11/17 — no encontré redundancia real ahí que cortar sin perder capacidad ya demostrada.
- **¿Qué añadiría si empezara de cero?** Exactamente lo que ya añadí hoy: el recordatorio de experimentos bloqueados. Es la única pieza que faltaba y que ya era técnicamente posible con las herramientas disponibles.
- **Nuevas reglas permanentes propuestas (máximo 3)**:
  1. Ningún dato de contacto o prospecto se acepta como válido sin verificación de al menos dos fuentes independientes cuando provenga de una herramienta externa al sistema — regla nacida directamente del único fallo real ya ocurrido.
  2. Ningún agente nuevo se crea como archivo separado hasta que exista al menos una evidencia real (no hipotética) de que necesita una lógica distinta a la de un agente ya existente — la regla que habría evitado crear 5 agentes dormidos como archivos separados desde el principio.
  3. Toda regla repetida en 3 o más agentes se promueve a `CLAUDE.md` en vez de mantenerse copiada — para que este mismo hallazgo de la Fase 4 no tenga que volver a descubrirse en la próxima auditoría.

---

*Auditoría completa (Fase 0-10 + Compost Loop). Un ítem del backlog ya implementado en esta misma sesión (recordatorio de EXP-002). Los demás quedan priorizados y con su propia justificación trazable — ninguno se ejecuta automáticamente sin que el usuario lo apruebe.*
