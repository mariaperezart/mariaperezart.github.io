# FARO — Biblioteca de Automatizaciones

**Fase 8 (última) del ecosistema empresarial FARO**
Catálogo de casos de uso clasificados por proceso. Es el "Recurso clave" descrito en la Fase 2 (BMC, bloque 1.6): cuantas más automatizaciones de este catálogo se reutilicen sin construcción a medida, mejor es el margen del negocio.

**Nota de alcance — qué está construido y qué es catálogo de roadmap.** Solo dos automatizaciones de esta biblioteca están especificadas técnicamente y validadas en el MVP de los primeros 60 días (`FARO_TESIS_MVP_60DIAS.md`, Parte 2): **respuesta fuera de horario por WhatsApp** y **confirmación de cita 24h antes**. El resto de este catálogo es el mapa de expansión del servicio a medida que un cliente pasa de START a GROW o a OPS (Fase 2, Pricing), y a medida que el roadmap avanza (Fase 2, sección 6). Ninguna automatización de este catálogo debe ofrecerse a un cliente como disponible "ya" si no ha sido construida y probada — coherente con el pilar de honestidad de alcance de la Fase 1. El ROI expresado en cada fila es una estimación de tipo de impacto esperado según lógica de negocio (igual que el cálculo de la tesis inicial, sección 1.4), no un dato medido salvo que se indique lo contrario.

---

## 1. Captación

| # | Automatización | Problema que resuelve | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 1 | Respuesta automática a mensajes de nuevos pacientes fuera de horario *(MVP validado)* | Pacientes nuevos que escriben fuera de horario y no reciben respuesta | WhatsApp + LLM responde con info básica y deriva a urgencia si aplica | Recupera conversión de pacientes nuevos que hoy se van a la competencia (ver tesis inicial 1.4) |
| 2 | Cualificación automática de leads de formulario web | Leads de la web (`/diagnostico`, `/contacto`) que tardan en recibir respuesta | Envío automático de confirmación + notificación inmediata al equipo con los datos ya estructurados | Reduce tiempo de primera respuesta de horas a minutos |
| 3 | Enrutamiento de consultas por tipo de tratamiento | Mensajes genéricos que no llegan al gabinete adecuado (ortodoncia, implantes, general) | Clasificación del mensaje entrante y aviso al responsable del área correspondiente | Menos derivaciones internas manuales |
| 4 | Respuesta a consultas de precio orientativo | Pacientes que preguntan precio y no reciben respuesta rápida por miedo a "comprometerse" a una cifra | Prompt con rangos orientativos ya aprobados por la clínica (ver documento técnico, Flujo A) | Evita perder al paciente que compara varias clínicas por velocidad de respuesta |
| 5 | Registro automático de origen del contacto (canal) | La clínica no sabe si un paciente llegó por Google, recomendación o redes | Campo de origen capturado en el primer mensaje y guardado en `patients`/`conversations` | Permite medir qué canal de captación funciona mejor |
| 6 | Alerta de pico de mensajes entrantes | Días de mucho volumen (tras una campaña) desbordan a recepción sin aviso previo | Notificación automática si el volumen de mensajes supera un umbral diario | Permite reforzar recepción con antelación |
| 7 | Auto-respuesta a reseñas que mencionan "primera visita" | Pacientes potenciales que comentan en Google sin ser todavía pacientes | Notificación al equipo para responder de forma personalizada y rápida | Mejora percepción de capacidad de respuesta pública |
| 8 | Formulario de primera cita pre-rellenado por WhatsApp | El paciente nuevo tiene que repetir sus datos por teléfono y en recepción | Recogida conversacional de datos básicos antes de la primera visita | Reduce tiempo de registro en mostrador |
| 9 | Notificación de solicitud de cita fuera del área de cobertura geográfica | La clínica recibe consultas de pacientes muy lejanos que probablemente no acudirán | Detección de código postal/zona y aviso de baja probabilidad de conversión | Evita gestionar tiempo en leads de baja probabilidad |
| 10 | Seguimiento de campañas de captación puntuales (antes de tener marketing propio) | La clínica lanza una promo y no sabe cuántos contactos generó realmente | Etiquetado automático de conversaciones originadas en una campaña concreta | Medición de retorno de campaña |

## 2. Ventas (conversión de consulta a cita)

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 11 | Envío automático de disponibilidad de agenda | El paciente pregunta por hueco y nadie responde hasta el día siguiente | Consulta de huecos disponibles (importados, ver limitación de PMS) y respuesta con opciones | Acelera el paso de interés a cita agendada |
| 12 | Recordatorio de "cita pendiente de confirmar fecha" | El paciente mostró interés pero no llegó a fijar día y hora | Mensaje de seguimiento a las 48h si no se ha cerrado fecha | Reduce leads calientes que se enfrían por falta de seguimiento |
| 13 | Envío de comparativa de tratamientos (info, no venta) | Pacientes indecisos entre opciones (ortodoncia tradicional vs. invisible, por ejemplo) | Envío de material informativo ya validado por la clínica, sin presión comercial | Facilita decisión informada, reduce fricción en la venta de tratamientos mayores |
| 14 | Aviso interno de "paciente de alto valor potencial" | Consultas sobre tratamientos de ticket alto (implantología completa) se tratan igual que una revisión | Detección de palabras clave de tratamiento mayor y aviso prioritario al equipo comercial/clínico | Prioriza atención humana donde más aporta |
| 15 | Seguimiento de "lo voy a pensar" | El paciente pide tiempo para decidir y nadie vuelve a contactar | Secuencia de seguimiento espaciada (7 y 21 días) con tono de acompañamiento, no presión | Recupera decisiones que de otro modo se pierden por silencio |
| 16 | Registro de motivo de no conversión | La clínica no sabe por qué un lead no se convirtió en paciente | Pregunta breve automatizada al cierre de una conversación sin cita agendada | Datos para mejorar el proceso comercial de la propia clínica |
| 17 | Envío automático de testimonios relevantes al tipo de consulta | Paciente indeciso sin prueba social específica a su caso | Envío de un caso similar (con consentimiento del paciente original) | Refuerza confianza en el momento de decisión |
| 18 | Alerta de lead sin respuesta interna en más de X horas | Un mensaje de venta se queda sin gestionar por descuido humano | Escalado automático si nadie ha respondido en el tiempo definido por la clínica | Evita fugas de venta por olvido, no por falta de interés del paciente |

## 3. Recepción

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 19 | Respuesta fuera de horario *(MVP validado, ver arriba)* | — | — | — |
| 20 | Confirmación automática de recepción de documentación (seguros, consentimientos) | Recepción tiene que confirmar manualmente cada documento recibido | Acuse de recibo automático al recibir archivo adjunto por WhatsApp/email | Ahorra tiempo de gestión administrativa repetitiva |
| 21 | Respuestas a preguntas frecuentes de logística (aparcamiento, acceso, ubicación) | Recepción repite la misma información varias veces al día | Respuesta automática a palabras clave de logística | Libera tiempo de recepción para atención presencial |
| 22 | Registro automático de llamadas perdidas con seguimiento por WhatsApp | Llamadas entrantes no atendidas se pierden sin seguimiento | Integración de log de llamadas perdidas con envío automático de WhatsApp de seguimiento | Recupera contactos que de otro modo se pierden sin trazabilidad |
| 23 | Aviso de paciente en sala de espera con tiempo de espera elevado | El paciente espera más de lo previsto y nadie le informa | Notificación interna si el tiempo de espera supera un umbral, para que recepción informe proactivamente | Mejora percepción de atención sin coste de personal adicional |
| 24 | Gestión automática de solicitudes de cambio de gabinete/profesional | Peticiones de cambio de dentista se gestionan de forma dispersa | Formulario/flujo estandarizado que registra la solicitud y notifica a quien decide | Reduce fricción administrativa interna |
| 25 | Recordatorio interno de traer documentación pendiente antes de la cita | El paciente llega sin un documento necesario y se pierde tiempo de gabinete | Mensaje automático 48h antes recordando qué debe traer | Reduce tiempo de gabinete perdido por gestión administrativa en el momento de la cita |
| 26 | Checklist automático de apertura/cierre de clínica | Tareas diarias de apertura y cierre dependen de la memoria del equipo | Recordatorio diario con checklist enviado al responsable de turno | Reduce errores por olvido en procesos rutinarios |

## 4. Agenda

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 27 | Confirmación de cita 24h antes *(MVP validado, ver arriba)* | — | — | — |
| 28 | Lista de espera automática para huecos liberados | Un hueco liberado por cancelación tarda en ofrecerse a otro paciente | Notificación automática a pacientes en lista de espera compatible con el hueco liberado | Reduce huecos de agenda no facturables (ver tesis inicial 1.4) |
| 29 | Aviso de sobreocupación de un gabinete concreto | Un gabinete queda sistemáticamente más saturado que otros sin que se detecte a tiempo | Alerta cuando la ocupación de un gabinete supera un umbral en una semana | Permite redistribuir carga entre profesionales |
| 30 | Recordatorio de revisión periódica (6-12 meses) | Pacientes que deberían volver para revisión y no se les recuerda | Cálculo automático de fecha de próxima revisión según último tratamiento | Aumenta recurrencia de pacientes ya captados (menor coste que captar nuevos) |
| 31 | Sincronización de bloqueos de agenda por vacaciones/formación del profesional | Los huecos bloqueados manualmente generan errores de doble reserva | Proceso estandarizado de bloqueo con confirmación cruzada | Reduce errores de doble cita |
| 32 | Reprogramación asistida cuando un profesional cancela su turno | Cancelación de última hora de un dentista obliga a recolocar manualmente todas sus citas | Flujo de aviso a pacientes afectados con opciones de reprogramación | Reduce el tiempo de gestión de una incidencia de agenda mayor |
| 33 | Aviso de hueco corto no aprovechable (menos de 20 min) | Huecos pequeños entre citas quedan sistemáticamente vacíos | Identificación de huecos cortos y sugerencia de tareas administrativas o pacientes de revisión rápida | Mejora aprovechamiento marginal de la agenda |
| 34 | Balance semanal de ocupación de agenda por gabinete | La clínica no tiene visibilidad agregada de cómo se ocupó la agenda la semana anterior | Envío del dato agregado en el email de resumen (ver documento técnico, Flujo C) | Da visibilidad sin necesidad de dashboard |
| 35 | Alerta de cita duplicada o solapada | Error humano al introducir citas manualmente | Verificación automática de solapamientos al registrar una cita | Reduce incidencias del día de la cita |
| 36 | Recordatorio de renovación de tratamiento por fases (ortodoncia) | Pacientes en tratamiento largo pierden continuidad de visitas de control | Calendario automático de próximas revisiones según el plan de tratamiento | Reduce abandono de tratamientos en curso |

## 5. Recordatorios (más allá de la cita)

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 37 | Recordatorio de higiene dental periódica | Pacientes sin cita programada que deberían volver por rutina | Mensaje espaciado según historial de última limpieza | Genera recurrencia sin intervención comercial activa |
| 38 | Recordatorio de renovación de férula de descarga/blanqueamiento | Productos con caducidad de uso que generan una segunda venta natural | Mensaje automático según fecha de entrega del producto | Ingreso adicional de bajo esfuerzo comercial |
| 39 | Recordatorio de revisión post-tratamiento (a los 7 y 30 días) | Seguimiento post-operatorio que depende de que alguien se acuerde de contactar | Mensaje automático de seguimiento clínico básico (no diagnóstico) con opción de contacto si hay molestia | Mejora percepción de cuidado y detecta incidencias antes |
| 40 | Recordatorio de aportación de justificante de seguro dental | Pacientes con seguro que olvidan aportar documentación y retrasan el cobro de la clínica | Mensaje automático antes de la cita con lo que deben aportar | Reduce retrasos administrativos de facturación con aseguradoras |
| 41 | Recordatorio de pago aplazado pendiente | Cuotas de tratamientos financiados que se olvidan de abonar | Recordatorio automático antes de la fecha de vencimiento | Reduce impagos por olvido (no por impago intencional) |

## 6. Presupuestos

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 42 | Seguimiento de presupuestos enviados sin respuesta | Presupuestos enviados que nadie vuelve a mencionar | Secuencia de seguimiento automático a los 3, 10 y 21 días | Recupera conversión de presupuestos "dormidos" (dolor explícitamente señalado en la propuesta de valor de la Fase 1) |
| 43 | Envío de recordatorio de validez de presupuesto | El paciente no sabe que el presupuesto caduca y pierde la condición ofrecida | Aviso automático días antes del vencimiento | Genera urgencia legítima sin presión artificial |
| 44 | Registro de motivo de rechazo de presupuesto | La clínica no sabe si el rechazo es por precio, tiempo o dudas clínicas | Pregunta breve automatizada al declinar | Datos para ajustar la forma de presentar presupuestos futuros |
| 45 | Notificación interna de presupuesto de alto valor pendiente | Presupuestos de importe elevado se tratan con el mismo seguimiento estándar que uno pequeño | Aviso prioritario al equipo cuando el importe supera un umbral | Prioriza seguimiento humano en el valor más alto |
| 46 | Envío de opciones de financiación tras presupuesto elevado | El precio total frena la decisión sin que se ofrezca alternativa de pago | Mensaje automático con información de financiación ya aprobada por la clínica | Reduce abandono de tratamientos por percepción de coste elevado |

## 7. Seguimiento de pacientes

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 47 | Seguimiento de "preguntó y no reservó" *(catálogo GROW/OPS, ver Fase 5, servicio 3.4)* | Contactos que preguntaron y no se convirtieron en cita | Mensaje de seguimiento espaciado tras el primer contacto sin cita | Recupera un porcentaje de contactos fríos sin esfuerzo comercial activo |
| 48 | Encuesta breve de satisfacción post-tratamiento | La clínica no mide satisfacción de forma sistemática | Mensaje corto (1-2 preguntas) tras la cita | Detecta insatisfacción antes de que se traduzca en pérdida silenciosa del paciente |
| 49 | Seguimiento diferenciado por tipo de tratamiento | El seguimiento genérico no tiene en cuenta que ortodoncia y urgencia tienen ciclos distintos | Segmentación de la secuencia de seguimiento según tipo de tratamiento registrado | Mejora relevancia y tasa de respuesta del seguimiento |
| 50 | Alerta de paciente con múltiples citas canceladas seguidas | Un patrón de cancelaciones repetidas anticipa abandono del tratamiento | Detección de 2+ cancelaciones consecutivas y aviso al equipo clínico | Permite intervención humana antes de perder al paciente definitivamente |
| 51 | Seguimiento de menores tras primera visita (odontopediatría) | Los tratamientos infantiles requieren un ritmo de seguimiento distinto al adulto | Secuencia adaptada a revisiones más frecuentes en pacientes infantiles | Mejora continuidad de tratamiento en el segmento pediátrico |

## 8. Reseñas y reputación

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 52 | Solicitud automática de reseña tras cita positiva | Pacientes satisfechos que no dejan reseña porque nadie se lo pide en el momento adecuado | Mensaje automático horas después de una cita sin incidencias registradas | Aumenta volumen de reseñas positivas de forma pasiva |
| 53 | Filtro de satisfacción antes de pedir reseña pública | Pedir reseña a un paciente insatisfecho genera reseñas negativas evitables | Pregunta previa de satisfacción; solo se pide reseña pública si la respuesta es positiva | Reduce riesgo de reseñas negativas por mala gestión del momento de la petición |
| 54 | Notificación de reseña negativa recién publicada | La clínica tarda en enterarse de una reseña negativa y responder | Alerta inmediata al detectar una reseña de baja puntuación | Permite respuesta rápida, que mitiga el impacto reputacional |
| 55 | Agradecimiento automático a reseñas positivas | Reseñas positivas que quedan sin respuesta pública de la clínica | Plantilla de agradecimiento personalizado sugerida al equipo (no publicada sin revisión humana) | Mejora percepción de cercanía en el perfil público |
| 56 | Registro de reseñas por profesional | La clínica no sabe qué profesional genera más satisfacción reportada | Clasificación de reseñas por dentista mencionado | Información de gestión interna del equipo clínico |

## 9. Pacientes inactivos

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 57 | Detección automática de pacientes sin visita en 12+ meses | La clínica no tiene visibilidad de su propia base de pacientes inactivos | Consulta periódica sobre última fecha de cita registrada | Identifica una base de reactivación que ya existe sin coste de captación |
| 58 | Campaña de reactivación de baja fricción | Pacientes inactivos que no reciben ningún contacto de la clínica | Mensaje de reconexión simple, sin oferta agresiva, preguntando si desean agendar revisión | Reactivación de pacientes ya captados (coste muy inferior a captación nueva) |
| 59 | Segmentación de inactivos por motivo probable | No todos los pacientes inactivos lo son por la misma razón (mudanza, cambio de clínica, olvido) | Encuesta breve opcional dentro del mensaje de reactivación | Mejora la relevancia de campañas de reactivación futuras |
| 60 | Alerta de pacientes de alto valor histórico inactivos | Pacientes que gastaron mucho en el pasado y llevan tiempo sin volver, sin que se priorice su reactivación | Cruce de historial de facturación con inactividad | Prioriza esfuerzo de reactivación donde el retorno esperado es mayor |
| 61 | Reactivación estacional (antes de vacaciones de verano/Navidad) | Pacientes que posponen revisiones y se olvidan antes de fechas de mayor disponibilidad personal | Campaña automática de recordatorio estacional | Aprovecha ventanas naturales de mayor disposición a agendar |

## 10. Marketing (soporte, no sustituto de una agencia)

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 62 | Recogida automática de testimonios en vídeo/texto para uso en redes | La clínica no sistematiza la recogida de prueba social | Solicitud automática tras encuesta de satisfacción positiva (ver 48) | Alimenta contenido de marketing sin depender de una agencia |
| 63 | Envío de contenido educativo estacional (cuidado dental de vuelta al cole, etc.) | La clínica no mantiene contacto de valor con su base de pacientes fuera de las citas | Envío programado de contenido informativo relevante por temporada | Mantiene la marca presente sin ser intrusivo |
| 64 | Notificación de menciones de la clínica en redes sociales | La clínica no se entera de menciones fuera de Google/reseñas | Alerta de menciones relevantes detectadas | Permite respuesta y aprovechamiento de menciones positivas |
| 65 | Aviso de disponibilidad de huecos para campañas puntuales | La clínica quiere lanzar una promoción de un tratamiento con baja demanda estacional | Identificación automática de gabinetes/franjas con baja ocupación proyectada | Informa decisiones de campaña con datos reales de agenda |
| 66 | Registro y reparto de leads de campañas de publicidad externa | Leads de anuncios (Google/Meta Ads) gestionados manualmente y con retraso | Integración de leads de campaña directamente al flujo de respuesta automática (ver 1 y 2) | Reduce tiempo de primera respuesta a leads pagados |

## 11. Administración

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 67 | Generación automática de resumen diario para recepción/gerencia *(MVP validado, Flujo C)* | — | — | — |
| 68 | Consolidación semanal de incidencias registradas | La gerencia no tiene visión agregada de qué ha fallado en la semana | Agregación automática de alertas manuales de `conversations` en un resumen semanal | Facilita revisión periódica de retención (ver Fase 7, sección 9) |
| 69 | Archivo automático de documentación de pacientes por categoría | Documentos dispersos entre email, WhatsApp y papel | Clasificación y almacenamiento estructurado de documentos recibidos digitalmente | Reduce tiempo de búsqueda de documentación |
| 70 | Recordatorio de renovación de licencias y seguros de la clínica | Vencimientos administrativos de la propia clínica (seguro de responsabilidad civil, licencias) que se olvidan | Calendario de vencimientos con aviso anticipado | Evita incumplimientos administrativos por descuido |
| 71 | Generación automática de partes de incidencia estandarizados | Incidencias con pacientes se documentan de forma inconsistente entre el equipo | Plantilla estandarizada que se rellena a partir de la conversación registrada | Mejora trazabilidad ante posibles reclamaciones |
| 72 | Aviso de caducidad de material clínico con fecha de control | Material con caducidad que se revisa manualmente y de forma irregular | Recordatorio periódico de revisión de stock caducable | Reduce riesgo de uso de material caducado |
| 73 | Checklist de cumplimiento normativo básico (protección de datos, cartelería obligatoria) | La clínica no tiene un proceso sistemático de revisión de cumplimiento | Recordatorio periódico de puntos de revisión (sin sustituir asesoría legal) | Reduce riesgo de incumplimientos por descuido, no por desconocimiento |
| 74 | Gestión automática de solicitudes de historia clínica por parte del paciente | Solicitudes de copia de historia clínica se gestionan de forma manual y dispersa | Flujo estandarizado de recepción y confirmación de plazo de entrega | Cumplimiento más consistente de plazos legales de respuesta |
| 75 | Notificación de vencimiento de presupuestos de proveedores | La clínica pierde de vista renovaciones de contratos con proveedores | Calendario de vencimientos de contratos clave | Evita renovaciones automáticas no deseadas |
| 76 | Registro centralizado de incidencias técnicas del propio sistema FARO | Fallos del sistema (ver documento técnico, manejo de errores) requieren visibilidad para la clínica | Inclusión automática en el email de resumen diario de cualquier error de envío | Transparencia operativa, coherente con la honestidad de alcance de la Fase 1 |

## 12. RR. HH. (equipo de la clínica)

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 77 | Recordatorio de turnos y cambios de horario del equipo | Cambios de turno comunicados de forma informal generan confusión | Notificación automática al equipo ante cualquier cambio registrado en el calendario de turnos | Reduce incidencias de cobertura de recepción |
| 78 | Onboarding estandarizado de nuevo personal de recepción | Cada incorporación se forma de manera distinta, sin proceso documentado | Checklist automático de tareas de onboarding con seguimiento de progreso | Reduce tiempo de puesta en marcha de personal nuevo |
| 79 | Recordatorio de formación obligatoria o recomendada del equipo | Formaciones periódicas (protección de datos, primeros auxilios) se posponen indefinidamente | Calendario de recordatorios con registro de cumplimiento | Reduce riesgo de incumplimiento formativo |
| 80 | Encuesta breve de carga de trabajo del equipo de recepción | La gerencia no tiene visibilidad temprana de sobrecarga del equipo | Encuesta periódica corta y anónima | Detecta riesgo de rotación antes de que se traduzca en baja o renuncia |
| 81 | Registro automático de vacaciones y ausencias | Gestión de vacaciones dispersa entre WhatsApp personal y hojas de cálculo | Flujo centralizado de solicitud y aprobación | Reduce fricción administrativa interna del equipo |
| 82 | Aviso de necesidad de refuerzo de personal en fechas de alta demanda | Picos de agenda conocidos (vuelta de vacaciones) sin planificación de refuerzo | Alerta anticipada basada en el histórico de ocupación de agenda (ver 34) | Permite planificar refuerzo de personal con antelación |

## 13. Finanzas

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 83 | Recordatorio de pagos aplazados pendientes *(ver también 41)* | — | — | — |
| 84 | Consolidación semanal de facturación estimada por gabinete | La clínica no tiene visión ágil de facturación sin esperar al cierre mensual del PMS | Agregación de datos de citas completadas con importe estimado | Visibilidad financiera más temprana |
| 85 | Alerta de desviación de ingresos frente a la media histórica | Caídas de facturación se detectan tarde, al cierre del mes | Comparación automática semanal frente al histórico de la clínica | Permite reaccionar antes dentro del propio mes |
| 86 | Registro automático de impagos recurrentes | Pacientes con impagos repetidos se gestionan caso a caso sin patrón | Marcado automático tras el segundo impago registrado | Permite política diferenciada (p. ej. pago por adelantado) para casos recurrentes |
| 87 | Envío de recibos y facturas simplificadas por WhatsApp | Pacientes que piden factura y esperan días en recibirla | Envío automático del documento ya generado por el sistema de facturación de la clínica | Mejora percepción de agilidad administrativa |
| 88 | Seguimiento de rentabilidad por tipo de tratamiento (agregado, no contable) | La clínica no cruza fácilmente ocupación de agenda con tipo de tratamiento más rentable | Informe agregado simple cruzando datos de `appointments` y tipo de tratamiento | Apoya decisiones de qué tratamientos priorizar en la agenda |
| 89 | Alerta de facturas de proveedores próximas a vencer | Pagos a proveedores gestionados de forma manual y con riesgo de recargos | Calendario de vencimientos de proveedores | Evita recargos por pago tardío |
| 90 | Registro estructurado de gastos operativos recurrentes | Gastos fijos de la clínica dispersos sin categorización | Plantilla estandarizada de registro mensual | Facilita control de costes sin necesidad de un ERP complejo |

## 14. Análisis e IA aplicada (uso interno, no cara al paciente)

| # | Automatización | Problema | Cómo funciona | ROI esperado |
|---|---|---|---|---|
| 91 | Clasificación automática del motivo de contacto en `conversations` | La clínica no sabe, de forma agregada, por qué le escriben más los pacientes | Etiquetado automático del motivo de cada conversación entrante | Informa decisiones de proceso (qué automatizar a continuación, ver Fase 2, revisión periódica) |
| 92 | Detección de patrones de horas pico de contacto | La clínica no sabe a qué horas necesita más cobertura de recepción | Análisis agregado de timestamps de mensajes entrantes | Optimiza turnos de recepción con datos reales, no intuición |
| 93 | Resumen mensual de tendencias de conversación (sin exponer datos clínicos sensibles) | La gerencia no tiene síntesis periódica de qué está pasando en el canal de WhatsApp | Agregación mensual de categorías de conversación (ver 91) | Alimenta la sesión de optimización mensual del plan OPS (Fase 2, Pricing) |
| 94 | Detección de lenguaje de insatisfacción antes de que se convierta en reseña negativa | Señales de descontento en conversaciones privadas que no llegan a la gerencia a tiempo | Clasificación de tono en conversaciones entrantes con alerta si se detecta insatisfacción | Permite intervención humana antes de una reseña pública negativa |
| 95 | Priorización automática de alertas manuales en el email diario | El email de resumen (Flujo C) puede acumular muchas alertas de baja prioridad | Ordenación automática de alertas por severidad (urgencia clínica > error de envío > ambigüedad) | Mejora la utilidad práctica del email diario ya definido en el MVP |
| 96 | Detección de necesidad de nueva plantilla de WhatsApp aprobada por Meta | Se identifican casos de uso repetidos que requieren una plantilla nueva no existente | Registro de patrones de mensajes que el sistema no puede resolver con las plantillas actuales | Informa el roadmap técnico de nuevas plantillas a solicitar a Meta |
| 97 | Benchmark interno entre clínicas clientes (agregado y anonimizado) | FARO no tiene, en la fase inicial, referencia de qué es "normal" en el sector para comparar | Agregación anonimizada de métricas entre clientes con consentimiento | Alimenta el argumento de venta basado en evidencia propia (ver Fase 2, evolución de la propuesta de valor) |
| 98 | Detección de degradación de calidad de respuesta del LLM | Cambios de modelo o prompt pueden degradar silenciosamente la calidad de las respuestas | Muestreo periódico de conversaciones para revisión de calidad | Mantiene el estándar de fiabilidad que sostiene la promesa de marca (Fase 1) |
| 99 | Auditoría automática de cumplimiento del alcance prometido | Riesgo de que, con el tiempo, el sistema "prometa" cosas fuera del alcance actual sin que nadie lo note | Revisión periódica del prompt frente al listado de honestidad de alcance (Fase 1 y Fase 5) | Evita degradación silenciosa de la promesa de marca |
| 100 | Informe trimestral de impacto acumulado por cliente | El cliente no ve, de forma consolidada, el valor acumulado de varios meses de servicio | Agregación trimestral de mensajes gestionados, citas confirmadas, huecos evitados | Sostiene la percepción de valor de la suscripción a medio plazo (ver Fase 7, sección 10, renovación) |

---

## Nota de cierre del catálogo

Este catálogo llega a 100 entradas cubriendo 14 procesos. Su función no es que FARO construya las 100 de golpe — es servir de checklist de priorización en cada revisión periódica con un cliente (Fase 7, sección 9): en cada sesión de optimización, se elige la siguiente automatización de este catálogo que responda al síntoma más doloroso del momento para esa clínica concreta, exactamente igual que se hizo con la primera automatización en el MVP inicial. La disciplina de construir sobre este catálogo ya existente, en lugar de diseñar cada automatización nueva desde cero, es lo que sostiene el margen del modelo de suscripción descrito en la Fase 2.

---

*Fin de la Fase 8 y del ecosistema FARO. Los ocho documentos (Tesis y MVP técnico, Estrategia de marca, Modelo de negocio, Identidad visual, UX y arquitectura, Web completa, SEO y contenidos, Proceso comercial, y esta Biblioteca de automatizaciones) forman un conjunto coherente: ninguna decisión de un documento contradice a otro, y cada uno referencia a los anteriores en lugar de repetirlos.*
