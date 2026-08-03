# FARO — Tesis de Negocio, MVP Técnico y Plan de 60 Días

**Documento de referencia para la implementación real del proyecto FARO**
Automatización operativa por WhatsApp para clínicas dentales en España
Fundadora: Gabriela · Fecha: julio 2026 · Versión 1.0

---

# PARTE 1 · TESIS DE NEGOCIO

## 1.1 Por qué ahora

Tres fuerzas convergen en 2025-2026 y hacen que este sea el momento correcto para lanzar FARO, no antes ni después.

**Fuerza 1 — Madurez de los LLM para tareas conversacionales de nicho.**
GPT-4o-mini ofrece un coste por token ~15-20x menor que GPT-4 original (precio API OpenAI: ~0,15 USD / 1M tokens de entrada, ~0,60 USD / 1M de salida a mediados de 2025), con calidad suficiente para responder consultas dentales acotadas (horarios, precios orientativos, síntomas básicos, confirmaciones de cita) sin necesidad de fine-tuning. Hace 24 meses, el coste y la latencia hacían inviable este caso de uso a los precios que una clínica de 4-10 gabinetes puede pagar. Hoy, el coste marginal por conversación es de céntimos.

**Fuerza 2 — WhatsApp Business Platform como canal por defecto en España.**
España tiene una de las tasas de penetración de WhatsApp más altas de Europa (>90% de la población con smartphone lo usa a diario, fuente: We Are Social / Hootsuite Digital Report España). Para una clínica dental, el WhatsApp del número de recepción se ha convertido en el canal de entrada principal de pacientes nuevos y recurrentes, por delante del teléfono y muy por delante del email. Meta abrió la Cloud API de WhatsApp Business (sin necesidad de BSP intermediario para volúmenes bajos-medios) lo que reduce el coste de entrada técnico y elimina dependencias de terceros caras.

**Fuerza 3 — Presión de personal en clínicas dentales españolas.**
El sector dental español (más de 20.000 clínicas, mayoritariamente independientes o pequeñas cadenas) sufre rotación alta de personal de recepción/atención al paciente. Una recepcionista gestiona simultáneamente: teléfono, pacientes en mostrador, agenda de varios gabinetes y WhatsApp. El WhatsApp es, en la práctica, el canal que se abandona fuera de horario y en picos de carga — exactamente el síntoma que FARO ataca.

La confluencia de (a) IA conversacional barata y suficientemente buena, (b) canal de comunicación ya adoptado por el paciente español, y (c) un cuello de botella operativo estructural en la clínica, es la ventana de oportunidad. Esta ventana no es permanente: en 24-36 meses, los grandes software de gestión dental (PMS) integrarán esto de forma nativa. Ahora es el hueco.

## 1.2 Por qué clínicas dentales

**TAM (Total Addressable Market).**
- España tiene aproximadamente 20.000-22.000 clínicas dentales registradas (fuente: Consejo General de Dentistas de España, estimaciones sectoriales 2023-2024).
- De ellas, el segmento de 4-10 gabinetes (clínicas medianas, con estructura de recepción propia pero sin departamento de marketing/operaciones) representa aproximadamente el 15-20% del total → **3.000-4.000 clínicas objetivo directo en España**.
- A un ARPU medio realista de 150€/mes (mezcla START 99€ y GROW 249€), el TAM de este segmento específico es de **5,4M€-7,2M€ MRR** (65M€-86M€ ARR) si se capturase el 100%, cifra que no es el objetivo pero enmarca el techo teórico.
- SAM realista a 3 años (10-15% de penetración del segmento): 300-500 clínicas → 540.000€-900.000€ MRR.

**Por qué no otro sector (peluquerías, clínicas veterinarias, fisioterapia, estética).**
1. **Ticket medio alto y recurrente**: un paciente dental tiene un valor de vida (LTV) de cientos a miles de euros (ortodoncia, implantes, revisiones periódicas), lo que justifica que la clínica invierta en no perder ni un solo contacto entrante. En peluquería o estética el ticket medio es mucho menor y el margen para pagar 99-249€/mes por software es más ajustado.
2. **Estructura de cita programada estricta**: la clínica dental vive y muere por el cumplimiento de la agenda (un hueco de gabinete vacío es coste puro). Esto hace que la confirmación de cita (Flujo B del MVP) tenga un ROI cuantificable y directo (reducción de no-shows), algo que no todos los sectores tienen con la misma claridad.
3. **Volumen de mensajería suficiente pero manejable**: una clínica de 4-10 gabinetes recibe entre 30-100 mensajes de WhatsApp al día, suficiente para que doler la ausencia de respuesta, pero manejable para un sistema basado en reglas + LLM sin necesidad de infraestructura conversacional compleja.
4. **Fragmentación sin resolver**: a diferencia de peluquerías (dominadas por apps verticales tipo Booksy/Fresha con IA conversacional ya integrada), el software de gestión dental español (Gesden, Clinic Cloud, Dentalink) no tiene esta capa resuelta ni APIs públicas abiertas — ver 1.5.

**Por qué este segmento (4-10 gabinetes) y no clínicas de 1-3 o de +10.**
- Clínicas de 1-3 gabinetes: el dentista-propietario suele atender también el teléfono/WhatsApp personalmente o con una única auxiliar; el dolor existe pero el presupuesto para pagar un SaaS de automatización es más limitado y la decisión de compra es más lenta (más sensible al precio).
- Clínicas de +10 gabinetes / grupos y cadenas: ya tienen o están evaluando soluciones a medida, call centers propios, o procesos de compra corporativos largos (RFP, IT, compliance) que un fundador solo no puede sostener en los primeros 12 meses.
- 4-10 gabinetes es el punto dulce: dolor real y agudo, presupuesto suficiente, ciclo de venta corto (decisor único, normalmente el propietario o el gerente de clínica), sin proceso de compra corporativo.

## 1.3 Por qué este problema (el único: WhatsApp sin respuesta)

FARO no resuelve "la transformación digital de la clínica". Resuelve un único síntoma, elegido deliberadamente por tres razones:

1. **Es visible y doloroso sin necesidad de convencer**: el propietario de la clínica ya sabe, sin que nadie se lo explique, que "se nos escapan mensajes de WhatsApp fuera de horario y los fines de semana". No hay que educar al mercado sobre el problema, solo presentar la solución.
2. **Es medible en euros de forma directa**: cada WhatsApp sin responder es, potencialmente, un paciente nuevo perdido o una cita no confirmada que se convierte en hueco vacío. Es la puerta de entrada con el ROI más fácil de calcular (ver 1.4).
3. **Es un problema acotado técnicamente**: responder fuera de horario y confirmar citas son flujos de conversación cortos, con un espacio de respuestas limitado y predecible, lo que permite un MVP fiable con un LLM barato y sin necesidad de agentes complejos ni memoria conversacional extensa. Esto es intencional: **cualquier otro problema (gestión de historia clínica, marketing de reactivación, campañas) se deja fuera del MVP a propósito** porque introduce superficie de error y complejidad que no es necesaria para validar la tesis.

## 1.4 Por qué pagan (ROI demostrable, cálculo del propietario)

Cálculo tipo que se presenta al propietario en la llamada de venta:

**Supuestos conservadores para una clínica de 6 gabinetes:**
- Recibe ~50 mensajes de WhatsApp/día, de los cuales ~15% (7-8 mensajes) llegan fuera de horario o en momentos de saturación y no se responden en menos de 2 horas.
- De esos mensajes sin respuesta rápida, un 20-30% corresponde a pacientes nuevos que están comparando varias clínicas (no son pacientes ya fidelizados, tienen alternativas).
- Tasa de conversión de "primer contacto respondido rápido" a "cita programada": ~35-40% (benchmark de sector servicios con alta intención).
- Valor medio del primer tratamiento en una clínica dental española: 150-400€ (revisión + limpieza + posible presupuesto de tratamiento mayor).

**Cálculo simplificado (mensual):**
- Mensajes de pacientes nuevos perdidos por falta de respuesta: ~7 mensajes/día × 30 días × 20% = ~42 contactos/mes potencialmente perdidos.
- Con FARO respondiendo el 100% en <2 minutos, incluso una mejora conservadora de conversión de 10 puntos porcentuales sobre esos 42 contactos = ~4 pacientes nuevos/mes recuperados.
- 4 pacientes × 200€ valor medio primera visita = **800€/mes de ingreso incremental**, frente a un coste de 99-249€/mes.
- **ROI: 3,2x a 8x sobre la inversión mensual**, sin contar el efecto adicional en reducción de no-shows por confirmación de cita (Flujo B), que en clínicas dentales españolas se sitúa habitualmente entre 15-30% de la agenda (fuente: literatura de gestión de clínicas privadas), y cada no-show es un hueco de gabinete no facturable (coste de oportunidad estimado 80-150€ por hueco perdido en agenda dental).

Este cálculo se presenta siempre con rangos y con el propio dato del cliente cuando esté disponible (nunca como promesa cerrada, ver Script de llamada en Anexos), porque la credibilidad del cálculo es más valiosa a largo plazo que una cifra optimista.

## 1.5 Por qué el mercado no está resuelto (competidores y vacío)

**Actores existentes y por qué no cubren este hueco:**

- **PMS de gestión dental (Gesden, Clinic Cloud, Dentalink, Dentrix)**: gestionan agenda, historia clínica y facturación, pero su capa de comunicación con el paciente es débil (SMS/email genéricos, sin IA conversacional) y **no exponen API pública abierta y documentada para integración de terceros** (Gesden en particular es conocido en el sector por ser un sistema cerrado). Esto es una restricción real del MVP: FARO no se integra con el PMS en la fase inicial, y esto se comunica con transparencia al cliente (ver Restricciones).
- **Plataformas de automatización de WhatsApp genéricas (Zenvia, Wati, Respond.io, Landbot)**: son herramientas horizontales, requieren que la propia clínica configure los flujos, prompts y lógica de negocio. No son una solución llave en mano para el sector dental español; requieren conocimiento técnico que la clínica no tiene ni quiere adquirir.
- **Agencias de marketing dental (Doctoralia, Bidental, agencias locales)**: se centran en captación (SEO, ads, presencia online) y gestión de reputación, no en la operación conversacional diaria del WhatsApp entrante.
- **Recepcionistas virtuales / call centers externalizados**: existen (típicamente para sector legal o inmobiliario), pero tienen coste alto (300-600€/mes mínimo) y no están especializados en el vocabulario y flujos específicos de una clínica dental (tipos de tratamiento, urgencias dentales, terminología).

**El vacío**: nadie ofrece hoy en España un producto vertical, de precio accesible (menos de 300€/mes), sin fricción de implementación (no requiere que la clínica programe nada), especializado en el vocabulario y los flujos de una clínica dental, que resuelva específicamente "que ningún WhatsApp quede sin responder". Ese es el hueco que ocupa FARO durante la ventana de 24-36 meses antes de que los PMS o players grandes lo resuelvan de forma nativa.

## 1.6 Hipótesis a validar (ordenadas por prioridad)

| # | Hipótesis | Métrica de éxito | Métrica de fallo | Cómo se mide |
|---|---|---|---|---|
| **H1** | Las clínicas de 4-10 gabinetes reconocen el problema sin necesidad de ser educadas y aceptan una llamada de 15 min | ≥15% de tasa de respuesta positiva en outreach frío (email/LinkedIn) sobre 100 contactos | <5% de respuesta en 100 contactos | Nº de llamadas agendadas / nº de contactos realizados |
| **H2** | El cálculo de ROI (1.4) convence al propietario de pagar sin necesidad de descuento ni prueba gratuita extendida | ≥1 clínica firma en los primeros 30 días al precio de lista (START 99€) | 0 conversiones tras 15 llamadas de configuración | Conversión llamada → contrato firmado |
| **H3** | El MVP técnico (2 flujos) es suficiente para que la clínica perciba valor sin pedir más funcionalidades en las primeras 4 semanas | Clínica #1 no cancela y no exige features fuera de alcance en 30 días | Cliente pide dashboard/reactivación/integración PMS como condición para continuar | Feedback cualitativo semanal + revisión de churn |
| **H4** | El coste operativo real (infraestructura + tiempo de Gabriela) permite unit economics positivos por debajo de 400€ de CAC | Coste de servicio por clínica <20€/mes; tiempo de soporte <2h/semana por clínica tras onboarding | Coste operativo o tiempo de soporte superan el margen de la suscripción | Tracking de horas + factura de infraestructura mes 1-2 |
| **H5** | El canal de adquisición (outbound directo + llamada) es escalable más allá de las primeras 3-5 clínicas sin que Gabriela se convierta en el cuello de botella | Tasa de agendamiento se mantiene estable al escalar de 20 a 100 contactos/semana | Tasa de respuesta cae >50% al aumentar volumen (señal de saturación del mensaje o del mercado local) | Comparación de conversión por lote de outreach |

Estas hipótesis se validan en orden: H1 y H2 son bloqueantes (si fallan, no hay negocio); H3 y H4 determinan si el modelo es sostenible; H5 determina si es escalable más allá del primer cliente.

## 1.7 Escenarios financieros a 12 meses

Supuestos comunes: precio medio ponderado ~150€/mes (mezcla START/GROW), CAC 250-400€, churn anual 20-30% (≈1,8-2,5%/mes), coste de infraestructura variable ~15-20€/mes/clínica, tiempo de Gabriela valorado como coste de oportunidad, no como gasto en caja.

### Escenario pesimista
- Ritmo de adquisición: 1 clínica nueva cada 6-8 semanas.
- Mes 12: 6-7 clínicas activas (tras churn).
- MRR mes 12: ~900€-1.050€.
- Conclusión: no cubre un salario mínimo digno para Gabriela; válido solo como validación de tesis, no como negocio a tiempo completo todavía. Señal para revisar canal de adquisición (H5) o mensaje (H1/H2).

### Escenario base
- Ritmo de adquisición: 1-2 clínicas nuevas/mes desde el mes 3 (tras los primeros 60 días de validación).
- Mes 12: 14-16 clínicas activas (considerando churn del 25% anual aplicado proporcionalmente).
- ARPU medio 150€/mes.
- MRR mes 12: ~2.100€-2.400€. ARR run-rate: ~25.000-29.000€.
- Coste de infraestructura total: ~250-320€/mes. Margen bruto >85%.
- Conclusión: negocio viable a tiempo parcial que financia la transición de Gabriela a dedicación completa hacia el mes 9-12.

### Escenario optimista
- Ritmo de adquisición: 3-4 clínicas nuevas/mes desde el mes 4, impulsado por referencias de clínica #1-3 (efecto boca-oreja en sector muy gremial/colegiado).
- Mes 12: 30-35 clínicas activas.
- MRR mes 12: ~5.000-5.500€. ARR run-rate: ~60.000-66.000€.
- Conclusión: negocio a tiempo completo sólido, con caja suficiente para contratar primer soporte/ventas a partir del mes 10-12.

## 1.8 Qué tendría que pasar para ser una empresa de varios millones

FARO, tal como está definido en el MVP, es un negocio de nicho de varios cientos de miles de euros de ARR, no de varios millones. Para llegar a una escala de 5-10M€ ARR tendrían que darse, de forma secuencial, los siguientes desbloqueos:

1. **Expansión horizontal dentro del sector dental**: de "WhatsApp sin respuesta" a suite operativa completa (confirmaciones, recordatorios de higiene/revisión periódica, gestión de listas de espera, encuestas de satisfacción post-tratamiento) — siempre manteniendo el mismo canal (WhatsApp) y el mismo comprador (propietario/gerente de clínica).
2. **Integración con PMS**: si Gesden, Clinic Cloud u otros abren API (o se negocia una integración privada), FARO puede sincronizar agenda en tiempo real, eliminando fricción de doble entrada y aumentando drásticamente el valor percibido y el pricing potencial (a niveles de 400-800€/mes).
3. **Expansión geográfica**: replicar el modelo en Italia, Portugal o Latinoamérica (mercados con estructura de clínica dental independiente similar y alta penetración de WhatsApp), multiplicando el TAM por 3-5x.
4. **Expansión de vertical adyacente**: fisioterapia, clínicas veterinarias, centros de estética médica — sectores con estructura de cita programada y ticket medio-alto similares, reutilizando la misma infraestructura técnica (n8n + WhatsApp + LLM) con prompts y flujos adaptados.
5. **Cambio de modelo de distribución**: pasar de venta directa 1:1 (limitada por el tiempo de Gabriela) a un modelo de partners (agencias de marketing dental, consultoras de gestión de clínicas, asociaciones/colegios profesionales) que vendan FARO como parte de su oferta, desbloqueando escala sin escalar el equipo comercial al mismo ritmo.

Ninguno de estos pasos es parte del MVP ni debe considerarse antes de validar las hipótesis H1-H5 con los primeros 3-5 clientes reales.

## 1.9 Por qué Gabriela (capacidades y debilidades con mitigaciones)

**Capacidades a favor:**
- Perfil técnico-comercial híbrido: puede construir el MVP técnico ella misma (n8n, prompts, integración WhatsApp) sin depender de un CTO externo, y puede vender y cerrar clínicas sin depender de un comercial. Esto reduce el coste de validación a casi cero en la fase 0-60 días.
- Disponibilidad de 15-25h/semana permite iterar rápido sin la presión de un equipo que quemar runway.
- Al ser una sola persona, cada conversación con un cliente es información directa y sin intermediarios — el aprendizaje de las hipótesis H1-H5 es rápido y de primera mano.

**Debilidades y mitigaciones:**

| Debilidad | Riesgo | Mitigación |
|---|---|---|
| Dedicación parcial (15-25h/semana) | Ritmo de adquisición lento, especialmente en fase de ventas 1:1 | Priorizar estrictamente: en los primeros 60 días, 0% del tiempo en features nuevas más allá del MVP definido; 100% en outreach + onboarding de las primeras 3 clínicas |
| Una sola persona = cuello de botella en soporte | Si 5+ clínicas piden soporte simultáneo, no escala | Automatizar onboarding con checklist (Anexo), y limitar activamente el número de clientes nuevos por mes hasta validar H4 (tiempo de soporte real por clínica) |
| Sin experiencia previa demostrada vendiendo a clínicas dentales (asumido) | Ciclo de venta más largo de lo esperado, objeciones no anticipadas | Usar la llamada de 15 min como "de configuración, no de venta" (ver Anexo) para bajar la fricción inicial; documentar objeciones reales de las primeras 10 llamadas y ajustar mensaje |
| Dependencia de habilidades técnicas propias para mantener n8n/prompts en producción | Si Gabriela no puede atender un fallo técnico (enfermedad, viaje), el servicio se cae para todos los clientes a la vez | Documentar runbook de incidencias desde el día 1; monitorización básica con alertas (ver Parte 2) para detectar caídas antes que el cliente |
| Sin red de contactos previa en el sector dental (asumido) | Outreach frío tiene tasa de respuesta baja | Usar como primer canal contactos de segundo grado (colegios de dentistas, grupos de Facebook/LinkedIn de gestión de clínicas) antes que outreach 100% frío |

---

# PARTE 2 · MVP TÉCNICO REDUCIDO

## 2.1 Arquitectura mínima viable

```
                    ┌─────────────────────────┐
                    │   Meta WhatsApp Cloud    │
                    │   Business API           │
                    │  (webhook entrante/       │
                    │   saliente)               │
                    └───────────┬─────────────┘
                                │ HTTPS (webhook)
                                ▼
                    ┌─────────────────────────┐
                    │   n8n self-hosted        │
                    │   (VPS único)            │
                    │                          │
                    │  ┌────────────────────┐  │
                    │  │ Flujo A            │  │
                    │  │ Fuera de horario   │  │
                    │  └────────────────────┘  │
                    │  ┌────────────────────┐  │
                    │  │ Flujo B            │  │
                    │  │ Confirmación cita  │  │
                    │  │ (cron 24h antes)   │  │
                    │  └────────────────────┘  │
                    │  ┌────────────────────┐  │
                    │  │ Flujo C            │  │
                    │  │ Email resumen      │  │
                    │  │ diario (cron)      │  │
                    │  └────────────────────┘  │
                    └───────────┬─────────────┘
                    ┌───────────┼──────────────┐
                    ▼           ▼              ▼
            ┌──────────┐ ┌───────────┐  ┌─────────────┐
            │PostgreSQL│ │OpenAI API │  │  SMTP        │
            │(clinics, │ │GPT-4o-mini│  │(Resend/      │
            │patients, │ │           │  │ Postmark)    │
            │appts,    │ │           │  │              │
            │convers.) │ │           │  │              │
            └──────────┘ └───────────┘  └─────────────┘
```

Todo corre en un único VPS. No hay frontend, no hay dashboard, no hay app móvil. La única interfaz visible para el cliente es WhatsApp (para el paciente) y un email diario (para la recepcionista/propietario).

## 2.2 Infraestructura exacta

| Componente | Proveedor | Specs | Coste mensual |
|---|---|---|---|
| VPS | Hetzner Cloud (CX22) | 2 vCPU, 4GB RAM, 40GB SSD, ubicación Falkenstein/Nuremberg (UE, cumple RGPD) | ~4,5€/mes |
| Base de datos | PostgreSQL en el mismo VPS (Docker) | Sin servidor gestionado separado en el MVP; backup diario a almacenamiento externo | 0€ adicional (incluido en VPS) |
| Backup almacenamiento | Hetzner Storage Box (o backups nativos de Hetzner) | 100GB, snapshots diarios | ~3,5€/mes |
| n8n | Self-hosted (Docker, licencia community/fair-code) | Ilimitado nº de ejecuciones (self-hosted, sin límite de plan cloud) | 0€ (open source) |
| Dominio + certificado SSL | Namecheap/Cloudflare + Let's Encrypt | 1 dominio (ej. faro-clinicas.com) | ~1€/mes (dominio prorrateado) |
| Meta WhatsApp Business API | Meta Cloud API directo (sin BSP intermediario) | Conversation-based pricing (España: ~0,03-0,07€ por conversación de servicio de 24h, según categoría) | Variable, ~15-30€/mes por clínica activa (estimado a volumen bajo-medio) |
| OpenAI API (GPT-4o-mini) | OpenAI directo | ~0,15 USD/1M tokens entrada, ~0,60 USD/1M tokens salida | ~3-8€/mes por clínica (estimado, ver 2.9) |
| Email transaccional (resumen diario) | Resend (plan free hasta 3.000 emails/mes o Postmark) | 1 email/día/clínica | 0€ en fase inicial (dentro de free tier) |
| Monitorización básica | UptimeRobot (free tier) | Ping cada 5 min al webhook de n8n | 0€ |

**Coste de infraestructura fija mensual (independiente del nº de clínicas): ~9-10€/mes.**
**Coste variable por clínica activa: ~18-38€/mes** (WhatsApp API + OpenAI, escalando con volumen de mensajes real).

## 2.3 Flujo A — Respuesta fuera de horario

**Objetivo**: cualquier mensaje de WhatsApp que llegue fuera del horario configurado de la clínica (o durante saturación, en versión futura) recibe respuesta automática en menos de 60 segundos.

**Trigger**: Webhook de n8n conectado al webhook de Meta WhatsApp Cloud API (`messages` field). Se dispara en cada mensaje entrante nuevo.

**Lógica paso a paso:**
1. n8n recibe el payload del webhook de Meta (contiene `wa_id` del paciente, texto del mensaje, `phone_number_id` de la clínica que recibe).
2. Nodo de consulta a PostgreSQL: buscar en tabla `clinics` la fila cuyo `whatsapp_phone_number_id` coincide, para obtener `horario_json`, `nombre_clinica`, `direccion`, `precios_orientativos` (campo de texto libre para contexto del prompt).
3. Nodo de función (JavaScript/Code node): calcular si el timestamp actual (convertido a timezone Europe/Madrid) cae dentro o fuera del `horario_json` de esa clínica. Si está **dentro de horario**, el flujo termina aquí sin enviar respuesta automática (se asume que la recepcionista responde en directo) — **excepción**: si han pasado más de 15 minutos sin respuesta humana registrada en `conversations`, también se activa el flujo (ver 2.3.1 más abajo, tratado como caso simple de "fallback", no una feature de saturación completa).
4. Si está **fuera de horario**: nodo de consulta a PostgreSQL sobre tabla `conversations`, para saber si ya existe una conversación abierta con este `wa_id` en las últimas 24h (evitar responder el mismo saludo automático repetidamente a cada mensaje del mismo paciente).
   - Si es el primer mensaje de la conversación (últimas 24h): construir prompt con contexto completo de la clínica y enviar a OpenAI.
   - Si ya se respondió automáticamente en esta conversación: enviar solo un mensaje corto de confirmación ("Recibido, en cuanto abramos te contestamos personalmente 🦷") sin volver a invocar al LLM, para evitar coste y respuestas repetitivas.
5. Nodo HTTP Request a OpenAI API (`chat.completions`, modelo `gpt-4o-mini`) con el prompt (ver 2.3.2).
6. Nodo HTTP Request a Meta WhatsApp API (`POST /{phone_number_id}/messages`) para enviar la respuesta generada al paciente.
7. Nodo de inserción en PostgreSQL: guardar el mensaje entrante, el mensaje saliente generado, y el timestamp en `conversations`.
8. Nodo condicional: si el mensaje del paciente contiene palabras clave de urgencia (lista fija: "dolor fuerte", "sangre", "hinchado", "urgencia", "accidente") detectadas por el propio prompt (el LLM devuelve un campo `es_urgencia: true/false` en su respuesta estructurada), se dispara un nodo adicional de notificación inmediata (WhatsApp o SMS) al móvil personal del propietario/recepcionista, fuera del flujo normal de email diario.

**Prompt de OpenAI (system + user):**

```
SYSTEM:
Eres el asistente de recepción de {nombre_clinica}, una clínica dental en {ciudad}.
Es fuera del horario de atención ({horario_texto}). Tu única función es:
1. Confirmar al paciente que su mensaje se ha recibido.
2. Dar información básica y general si la pregunta es sencilla (horario de apertura,
   dirección, si se atienden urgencias, si necesita cita previa).
3. NUNCA dar un diagnóstico, ni confirmar precios exactos, ni prometer disponibilidad
   de cita concreta. Para presupuestos y citas, siempre indica que el equipo
   confirmará al abrir.
4. Si detectas lenguaje de urgencia dental real (dolor intenso, sangrado,
   traumatismo, hinchazón severa, fiebre con dolor dental), indica al paciente
   que si es muy grave acuda a urgencias hospitalarias, y marca la conversación
   como urgente.
5. Tono cercano, profesional, en español de España, máximo 3 frases por respuesta.
6. Responde SIEMPRE en este formato JSON:
   {"respuesta": "texto a enviar al paciente", "es_urgencia": true|false}

Información de la clínica:
- Horario: {horario_texto}
- Dirección: {direccion}
- Se atienden urgencias: {si_atiende_urgencias}
- Información de precios (solo orientativa, no citar cifras exactas salvo que
  esté aquí explícitamente): {precios_orientativos}

USER:
Mensaje del paciente: "{texto_mensaje_paciente}"
```

**Manejo de errores:**
- Si la llamada a OpenAI falla (timeout, rate limit, error 5xx): nodo de reintento automático de n8n (hasta 2 reintentos con backoff de 3s y 8s). Si tras los reintentos sigue fallando, se envía una respuesta de fallback fija (hardcoded, no generada) tipo: *"Gracias por tu mensaje. Hemos recibido tu consulta y te responderemos en cuanto abramos. Si es una urgencia, por favor llama al [teléfono de urgencias]."* Esto garantiza que el paciente NUNCA se queda sin ninguna respuesta, incluso si el LLM falla.
- Si la llamada a la API de WhatsApp falla (número inválido, ventana de 24h expirada, error de Meta): se registra el fallo en tabla `conversations` con `estado = 'error_envio'` y se incluye en el email de resumen diario como alerta para revisión manual, en vez de reintentar indefinidamente (evita bucles de reintento en Meta que pueden derivar en bloqueo de cuenta).
- Si la respuesta del LLM no es JSON válido (parseo falla): se usa el mismo mensaje de fallback fijo del punto anterior y se registra el error para revisión (no se reintenta automáticamente para evitar duplicar mensajes al paciente).
- Rate limiting propio: n8n limita a máximo 1 llamada a OpenAI por conversación cada 10 segundos (para evitar coste descontrolado si un paciente envía varios mensajes seguidos muy rápido); los mensajes intermedios se agrupan y se responde una sola vez al mensaje más reciente tras la ventana de espera.

## 2.4 Flujo B — Confirmación de cita (24h antes)

**Objetivo**: reducir no-shows enviando un recordatorio automático 24h antes de cada cita, con opción de confirmar o solicitar cambio, sin intervención humana en el caso estándar.

**Trigger**: Nodo Cron de n8n, ejecución diaria a una hora fija (ej. 09:00 Europe/Madrid). No es un webhook reactivo — es un batch diario.

**Lógica paso a paso:**
1. Cron dispara el flujo cada día a las 09:00.
2. Nodo de consulta a PostgreSQL: `SELECT * FROM appointments WHERE fecha_hora BETWEEN NOW() + INTERVAL '23 hours' AND NOW() + INTERVAL '25 hours' AND estado = 'programada'` (ventana de 2h para cubrir el batch diario sin perder citas por redondeo).
3. Para cada cita encontrada, nodo de consulta a `patients` para obtener nombre y teléfono, y a `clinics` para obtener nombre de la clínica y política de cancelación.
4. Nodo de construcción de mensaje (no requiere LLM para el envío inicial — es una plantilla fija, para minimizar coste y garantizar consistencia; ver 2.4.1). El LLM solo se usa para **interpretar la respuesta del paciente**, no para generar el recordatorio.
5. Envío del mensaje vía WhatsApp API usando **plantilla de mensaje aprobada por Meta** (obligatorio: fuera de la ventana de 24h de conversación abierta con el paciente, solo se pueden enviar mensajes usando plantillas pre-aprobadas por Meta, no texto libre — ver 2.6).
6. Se inserta el registro en `conversations` con `tipo = 'confirmacion_cita'` y `estado = 'esperando_respuesta'`.
7. **Manejo de la respuesta del paciente** (webhook separado, se dispara cuando el paciente contesta):
   - Si la respuesta es un botón de plantilla interactiva (Confirmar / Cancelar / Reprogramar — ver 2.4.2), n8n recibe directamente el `button_reply.id` sin necesidad de LLM: actualiza `appointments.estado` a `confirmada`, `cancelada` o `pendiente_reprogramacion` respectivamente.
   - Si el paciente responde con texto libre en lugar de pulsar el botón (frecuente en la práctica), se envía el texto a OpenAI con un prompt de clasificación simple (ver 2.4.3) que devuelve una de 3 categorías: `confirma`, `cancela_o_reprograma`, `no_claro`.
     - `confirma` → actualiza estado a `confirmada`, envía acuse de recibo simple.
     - `cancela_o_reprograma` → actualiza estado a `pendiente_reprogramacion`, envía mensaje indicando que el equipo le contactará para reprogramar, y lo marca como alerta en el email diario.
     - `no_claro` → no se actualiza el estado automáticamente; se marca como alerta en el email diario para que la recepcionista lo revise manualmente. Este es el caso de "no hacer nada automático si hay duda", deliberado para evitar cancelar citas por error de interpretación del LLM.

**Prompt de OpenAI (solo para clasificar respuesta en texto libre):**

```
SYSTEM:
Un paciente de una clínica dental ha recibido un recordatorio de cita y ha
respondido con texto libre en lugar de pulsar un botón. Clasifica su respuesta
en una sola categoría:
- "confirma": el paciente confirma que acudirá a la cita
- "cancela_o_reprograma": el paciente indica que no puede acudir, quiere
  cancelar, o pide cambiar la fecha/hora
- "no_claro": la respuesta es ambigua, es una pregunta no relacionada, o no
  se puede determinar con confianza

Responde SOLO con un JSON: {"categoria": "confirma|cancela_o_reprograma|no_claro"}

USER:
Respuesta del paciente: "{texto_respuesta_paciente}"
```

**Manejo de errores:**
- Si el envío de la plantilla falla (número inválido, plantilla rechazada por Meta, límite de mensajería alcanzado): se registra `estado_envio = 'fallido'` y se incluye en el email diario como cita "sin recordatorio enviado — contactar manualmente".
- Si la clasificación del LLM devuelve un JSON inválido o category fuera de las 3 esperadas: se trata como `no_claro` por defecto (fail-safe: nunca se cancela o confirma automáticamente una cita ante la duda).
- Idempotencia: el cron corre una vez al día, pero si por cualquier motivo se ejecutase dos veces (reintento manual, fallo de n8n), el nodo de consulta a PostgreSQL comprueba que no exista ya un registro de `conversations` con `tipo = 'confirmacion_cita'` para esa cita antes de reenviar, evitando duplicar recordatorios al paciente.

## 2.5 Base de datos — esquema SQL mínimo

```sql
-- Clínicas cliente de FARO
CREATE TABLE clinics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(150) NOT NULL,
    whatsapp_phone_number_id VARCHAR(50) NOT NULL UNIQUE,
    whatsapp_business_account_id VARCHAR(50) NOT NULL,
    direccion VARCHAR(255),
    ciudad VARCHAR(100),
    horario_json JSONB NOT NULL,              -- {"lunes": {"apertura":"09:00","cierre":"20:00"}, ...}
    precios_orientativos TEXT,                -- contexto libre para el prompt del Flujo A
    atiende_urgencias BOOLEAN DEFAULT true,
    telefono_urgencias VARCHAR(30),
    email_recepcion VARCHAR(150) NOT NULL,    -- destino del resumen diario
    plan VARCHAR(20) NOT NULL DEFAULT 'START', -- START | GROW
    activa BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Pacientes (mínimo necesario, no historia clínica)
CREATE TABLE patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    nombre VARCHAR(150),
    telefono_whatsapp VARCHAR(30) NOT NULL,   -- wa_id formato E.164
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE (clinic_id, telefono_whatsapp)
);

-- Citas (sincronizadas manualmente o por import CSV, sin integración PMS en MVP)
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
    fecha_hora TIMESTAMPTZ NOT NULL,
    tipo_tratamiento VARCHAR(150),
    estado VARCHAR(30) NOT NULL DEFAULT 'programada',
        -- programada | confirmada | pendiente_reprogramacion | cancelada | completada | no_show
    recordatorio_enviado BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Registro de conversaciones (ambos flujos, para trazabilidad y email diario)
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clinic_id UUID NOT NULL REFERENCES clinics(id) ON DELETE CASCADE,
    patient_id UUID REFERENCES patients(id) ON DELETE SET NULL,
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    tipo VARCHAR(30) NOT NULL,                -- fuera_horario | confirmacion_cita
    mensaje_entrante TEXT,
    mensaje_saliente TEXT,
    es_urgencia BOOLEAN DEFAULT false,
    estado VARCHAR(30) NOT NULL DEFAULT 'ok', -- ok | error_envio | esperando_respuesta | alerta_manual
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_conversations_clinic_date ON conversations (clinic_id, created_at);
CREATE INDEX idx_appointments_clinic_fecha ON appointments (clinic_id, fecha_hora);
CREATE INDEX idx_appointments_recordatorio ON appointments (fecha_hora, estado) WHERE recordatorio_enviado = false;
```

Nota deliberada: no existe tabla de "historia clínica", "tratamientos completos" ni ninguna sincronización con el PMS. `appointments` se alimenta manualmente (o por import CSV simple exportado del PMS por la propia clínica) durante el MVP — se comunica así explícitamente al cliente desde la primera llamada.

## 2.6 Integración WhatsApp Business API — setup paso a paso

1. **Crear cuenta de Meta Business Manager** (business.facebook.com) a nombre de FARO (no de la clínica cliente, para mantener control técnico centralizado).
2. **Crear una app en Meta for Developers** (developers.facebook.com) de tipo "Business", añadir el producto "WhatsApp".
3. **Añadir un número de teléfono de WhatsApp Business por clínica**: cada clínica necesita su propio número dedicado (no puede ser el número personal actual del propietario si ya usa WhatsApp normal — debe migrarse a WhatsApp Business API, proceso de Meta con verificación por SMS/llamada). Alternativa más simple para el MVP: usar el número de prueba gratuito de Meta durante la fase piloto con clínica #1, y migrar a número dedicado verificado al firmar contrato.
4. **Verificar el negocio** (Meta Business Verification): requiere documentación legal de FARO (o de la clínica, según cómo se estructure la cuenta) — proceso que puede tardar 1-5 días hábiles, por lo que debe iniciarse en la Semana 1 del plan de 60 días, no dejarlo para el onboarding de la clínica #1.
5. **Obtener credenciales**: `WHATSAPP_ACCESS_TOKEN` (token permanente de sistema, no el temporal de 24h), `PHONE_NUMBER_ID`, `BUSINESS_ACCOUNT_ID`. Guardar en variables de entorno del VPS, nunca en el propio flujo de n8n en texto plano.
6. **Configurar el webhook**: en la app de Meta, apuntar el webhook a `https://[dominio-faro]/webhook/whatsapp-incoming` (endpoint expuesto por n8n), suscribirse al campo `messages`. Configurar el `verify_token` compartido entre Meta y n8n.
7. **Crear y enviar a aprobación las plantillas de mensaje (HSM templates)** necesarias para el Flujo B (obligatorias porque el recordatorio de cita se envía fuera de la ventana de conversación de 24h abierta por el paciente):
   - Plantilla `recordatorio_cita_es` con botones interactivos: "Confirmar ✅" / "Necesito cambiarla ✏️". Texto tipo: *"Hola {{1}}, te recordamos tu cita en {{2}} el {{3}} a las {{4}}. ¿Puedes confirmarla?"*
   - Las plantillas deben enviarse a revisión de Meta (categoría "Utility", no "Marketing", para evitar coste de conversación más alto y rechazo por uso indebido de categoría). Aprobación típica: 24-48h.
8. **Probar en modo sandbox** con el número de prueba de Meta y un número personal de test antes de conectar con clínica #1 real.
9. **Dar de alta la clínica en la tabla `clinics`** con su `phone_number_id` real una vez completada la verificación y aprobación de plantillas.

## 2.7 Sin dashboard: email de resumen diario a recepcionista

**Trigger**: Cron n8n, ejecución diaria a las 20:00 (fin de jornada) hora Europe/Madrid.

**Lógica**: consulta a `conversations` y `appointments` del día para esa clínica, agrega los datos, renderiza plantilla HTML simple, envía vía Resend/Postmark al `email_recepcion` de la clínica.

**Template del email:**

```
Asunto: [FARO] Resumen de hoy — {nombre_clinica} — {fecha}

Hola,

Este es el resumen automático de hoy en {nombre_clinica}:

📩 MENSAJES FUERA DE HORARIO RESPONDIDOS: {n_respondidos}
{lista de: hora, teléfono (últimos 4 dígitos), resumen breve del mensaje}

⚠️ ALERTAS QUE REQUIEREN TU REVISIÓN: {n_alertas}
{lista de: motivo (error_envio | no_claro | urgencia detectada), teléfono, hora}

📅 CITAS DE MAÑANA — ESTADO DE CONFIRMACIÓN: {n_citas_manana}
✅ Confirmadas: {n_confirmadas}
❓ Pendientes de reprogramar: {n_pendientes}
⏳ Sin respuesta todavía: {n_sin_respuesta}

Si necesitas ayuda con algo de esto, responde a este email o escríbenos.

— FARO
```

No hay login, no hay panel web: la recepcionista/propietario recibe todo lo accionable en un único email diario, reduciendo drásticamente la superficie del MVP.

## 2.8 Presupuesto MVP mes 1 (desglose exacto)

| Concepto | Coste |
|---|---|
| VPS Hetzner CX22 | 4,50€ |
| Backup Storage Box | 3,50€ |
| Dominio (prorrateado mensual, ~12€/año) | 1,00€ |
| Meta WhatsApp Business Verification | 0€ (gratuito, solo requiere tiempo) |
| Número de teléfono WhatsApp Business dedicado (clínica piloto) | 0€ (se usa número existente de la clínica o número de prueba Meta) |
| OpenAI API (uso de pruebas + clínica piloto, estimado bajo volumen) | ~10-15€ |
| Meta Conversation costs (clínica piloto, volumen bajo mes 1) | ~10-20€ |
| Email transaccional (Resend free tier) | 0€ |
| Monitorización (UptimeRobot free tier) | 0€ |
| Herramientas de outreach (LinkedIn Sales Navigator opcional, o email tool tipo Instantly/Lemlist) | 0-30€ (opcional, puede posponerse) |
| **TOTAL MES 1 (infraestructura + operación piloto)** | **~30-45€** sin herramientas de outreach de pago; **~60-75€** con ellas |

No hay coste de nómina, oficina ni herramientas SaaS de gestión (CRM, etc.) en el mes 1 — se usa hoja de cálculo (ver Anexo de métricas).

## 2.9 Stack tecnológico con justificación

| Componente | Elección | Justificación |
|---|---|---|
| Orquestación de flujos | **n8n self-hosted** | Alternativa a Zapier/Make con coste marginal cero por ejecución (self-hosted), control total del código de los flujos, y suficiente para lógica condicional de complejidad media sin escribir un backend a medida. Evita construir infraestructura de colas/backend propia en fase de validación. |
| LLM | **OpenAI GPT-4o-mini** | Mejor relación calidad/precio para tareas conversacionales cortas y acotadas en español a mediados de 2025-2026; no requiere fine-tuning; soporta modo de salida JSON estructurado (necesario para clasificación de urgencia y de respuestas). Modelos más grandes (GPT-4o, Claude) se reservan como opción de escalado futuro si la tasa de error de clasificación es alta, no como elección por defecto en el MVP. |
| Canal de mensajería | **Meta WhatsApp Cloud API (directo, sin BSP)** | Evita cuota mensual de un Business Solution Provider (Twilio, 360dialog, etc.) en la fase de validación con pocas clínicas; el volumen bajo-medio del MVP no justifica aún el coste fijo de un BSP, que sí tendría sentido a partir de 15-20 clínicas por facilidad de gestión multi-cliente. |
| Base de datos | **PostgreSQL** | Estándar robusto, soporta JSONB (útil para `horario_json` flexible por clínica), gratuito, y corre cómodamente en el mismo VPS que n8n sin coste adicional de servicio gestionado en esta fase. |
| Hosting | **Hetzner Cloud** | Precio por especificación técnica imbatible en Europa, datacenters en la UE (relevante para RGPD y datos de pacientes), suficiente para el volumen de tráfico esperado (decenas de clínicas). |
| Email transaccional | **Resend o Postmark** | Alta entregabilidad (crítico para que el email diario no caiga en spam de la recepcionista), free tier suficiente para el volumen del MVP (1 email/día/clínica). |
| Monitorización | **UptimeRobot** | Gratuito, suficiente para detectar caídas del webhook antes que el cliente, sin necesidad de stack de observabilidad complejo (Grafana/Datadog) en esta fase. |

---

# PARTE 3 · PLAN DE ACCIÓN 60 DÍAS

## Semana 1-2

**Qué hacer:**
- Configurar VPS Hetzner, Docker, n8n self-hosted, PostgreSQL (esquema de 2.5).
- Iniciar proceso de verificación de negocio en Meta Business Manager (puede tardar días — arrancar cuanto antes).
- Construir Flujo A completo en n8n y probarlo en modo sandbox con número de prueba de Meta y un teléfono personal.
- Redactar y enviar a aprobación la plantilla de mensaje `recordatorio_cita_es` en Meta.
- Preparar lista de 100-150 clínicas objetivo (4-10 gabinetes, España) usando fuentes públicas (Google Maps, webs de clínicas, directorios como Doctoralia) y redactar el email outbound (ver Anexo).
- Iniciar outreach: enviar primeros 30-40 emails/mensajes.

**Output esperado**: Flujo A funcionando de extremo a extremo en sandbox; verificación de Meta en curso o completada; primeras respuestas de outreach empezando a llegar.

**Milestone semana 2**: Al menos 3 llamadas de configuración agendadas (valida H1 de forma temprana).

## Semana 3-4

**Qué hacer:**
- Completar Flujo B (confirmación de cita) y el email de resumen diario (Flujo C).
- Realizar las llamadas de configuración agendadas (script en Anexo) — objetivo: cerrar la primera clínica piloto.
- Dar de alta la clínica piloto en la base de datos, migrar/configurar su número de WhatsApp Business real.
- Ejecutar el checklist de onboarding completo con la clínica #1 (ver Anexo).
- Continuar outreach en paralelo (otras 40-60 clínicas) para no depender de una sola conversión.

**Output esperado**: Clínica piloto #1 en producción real con ambos flujos activos.

**Milestone semana 4**: Clínica #1 firmada y en producción; valida H2 (pago sin fricción excesiva).

## Semana 5-6

**Qué hacer:**
- Monitorizar diariamente el funcionamiento de los flujos con clínica #1: revisar logs de `conversations`, tasa de error, calidad de las respuestas del LLM (revisión manual de una muestra de conversaciones).
- Recoger feedback cualitativo semanal de la clínica #1 (llamada corta de 10 min) — registrar si pide funcionalidades fuera de alcance (señal para H3).
- Medir tiempo real que Gabriela dedica a soporte de esta clínica (señal para H4).
- Cerrar clínica piloto #2 y, si el ritmo de outreach lo permite, #3, aplicando aprendizajes del onboarding de la #1.
- Ajustar prompts de los Flujos A y B según errores observados en producción real.

**Output esperado**: 2-3 clínicas activas en producción; primeras métricas reales de coste operativo y tiempo de soporte.

**Milestone semana 6**: Tiempo de soporte por clínica <2h/semana confirmado con datos reales (valida H4); ninguna clínica ha cancelado.

## Semana 7-8

**Qué hacer:**
- Consolidar métricas de las primeras 6-8 semanas (spreadsheet de Anexo): tasa de respuesta de outreach, conversión llamada→contrato, coste real por clínica, tiempo de soporte, feedback cualitativo, incidencias técnicas.
- Continuar outreach para llegar a 4-5 clínicas activas si el ritmo lo permite.
- Documentar runbook de incidencias técnicas (qué hacer si n8n se cae, si Meta rechaza un envío, si OpenAI tiene un pico de latencia) para reducir dependencia de memoria de Gabriela.
- Preparar la revisión Go/No-Go con todos los datos de las 8 semanas.

**Output esperado**: Documento de métricas consolidado + runbook técnico + decisión Go/No-Go tomada.

**Milestone semana 8**: Decisión explícita documentada: continuar como está, pivotar mensaje/canal/segmento, o parar.

## Go/No-go decision — criterios

**GO (continuar con el modelo actual, pasar a fase de escalado de outreach):**
- Al menos 3 clínicas activas y ninguna ha cancelado en las primeras 8 semanas.
- Tasa de conversión llamada→contrato ≥15-20% (sobre llamadas realizadas, no sobre contactos totales).
- Tiempo de soporte real ≤2h/semana por clínica.
- Ninguna clínica ha exigido, como condición de continuidad, una funcionalidad fuera del alcance del MVP (dashboard, integración PMS, reactivación).

**PIVOTAR mensaje o segmento (mantener el producto, cambiar el enfoque comercial):**
- Tasa de respuesta a outreach <5% pero las llamadas que sí se logran cierran bien (>20% conversión) → el problema es alcance/canal, no la propuesta de valor. Probar canales alternativos (colegios profesionales, referencias, eventos del sector) antes de tocar el producto.

**PIVOTAR producto (el mensaje funciona pero el producto no retiene):**
- Se logran llamadas y cierres, pero 2 de las primeras 3 clínicas cancelan o exigen funcionalidad fuera de alcance en las primeras 4-6 semanas → revisar si el MVP de 2 flujos es realmente suficiente o si falta una tercera pieza mínima antes de escalar adquisición.

**NO-GO / pausa para replantear tesis completa:**
- Tras 8 semanas y outreach a 150+ clínicas, cero contratos firmados, o tasa de respuesta a outreach por debajo del 3% de forma sostenida → señal fuerte de que H1 o H2 fallan de raíz. No seguir invirtiendo tiempo en escalar adquisición sin antes revisar el problema, el segmento o el precio con entrevistas cualitativas adicionales.

---

# PARTE 4 · ANEXOS

## 4.1 Template de email outbound a clínicas dentales

```
Asunto: ¿Cuántos WhatsApp se os escapan fuera de horario?

Hola [Nombre],

Te escribo porque llevo tiempo hablando con clínicas dentales de [ciudad/
zona] y hay un patrón que se repite: el WhatsApp de la clínica recibe
mensajes de pacientes fuera de horario y en fines de semana, y muchos se
quedan sin respuesta hasta el día siguiente (o se pierden directamente).

He montado un sistema (FARO) que responde automáticamente esos mensajes
en el momento — de forma profesional, sin prometer nada que no se pueda
cumplir, y avisando al equipo si detecta una urgencia real. También
manda recordatorio de confirmación de cita 24h antes, para reducir
huecos de agenda por no-shows.

No es un chatbot genérico ni un dashboard más que aprender a usar: se
configura una vez y no hace falta tocar nada.

¿Te viene bien una llamada de 15 minutos esta semana? No es una venta —
es para ver si tiene sentido para vuestro caso concreto y, si no,
decírtelo con honestidad.

Un saludo,
Gabriela
FARO — para que ningún WhatsApp de un paciente se quede sin responder
[teléfono] · [email]
```

## 4.2 Script de la "llamada de configuración" (15 min, no venta)

```
[MIN 0-2 — Apertura]
"Gracias por sacar 15 minutos. Antes de nada: esto no es una llamada de
venta, es para entender cómo gestionáis hoy el WhatsApp de la clínica y
ver honestamente si esto os puede servir o no. Si no encaja, te lo digo
directamente."

[MIN 2-6 — Diagnóstico (preguntas, escuchar más que hablar)]
- "¿Quién responde hoy los WhatsApp de pacientes? ¿Una persona, varias?"
- "¿Qué pasa cuando llega un mensaje fuera de horario o el fin de semana?"
- "¿Tenéis una idea de cuántos mensajes recibís al día, más o menos?"
- "¿Cómo gestionáis hoy las confirmaciones de cita? ¿Llamáis, WhatsApp,
   nada?"
- "¿Diríais que tenéis problema de huecos de agenda por gente que no
   viene sin avisar?"

[MIN 6-11 — Presentación acotada a lo que han dicho]
"Con lo que comentas, esto es exactamente lo que hace FARO: [repetir en
sus palabras el dolor mencionado]. Responde automáticamente fuera de
horario con la info básica de la clínica, y si detecta algo que suena a
urgencia real, os avisa a vosotros directamente. Y manda un recordatorio
de confirmación 24h antes de cada cita, para que si alguien va a fallar,
os enteréis con tiempo de ofrecer el hueco a otro paciente."

[Cálculo de ROI en vivo, usando sus propios números si los han dado]
"Si decías que os llegan unos [X] mensajes fuera de horario a la semana,
y aunque solo 1 de cada 4-5 se convirtiera en paciente nuevo por
responder rápido, con un valor medio de primera visita de unos 200€,
estamos hablando de [cálculo simple en voz alta]. Frente a eso, el coste
es de 99€/mes."

[MIN 11-14 — Alcance honesto (gestionar expectativas)]
"Para que quede claro qué SÍ y qué NO hace ahora mismo: no sustituye
vuestro programa de gestión (Gesden/Clinic Cloud/etc.), no tiene
dashboard todavía — os llega un email cada tarde con el resumen del día
— y las citas hay que subirlas o pasarlas de forma sencilla, no hay
integración automática con vuestro sistema actual. Es intencionadamente
simple para que funcione bien desde el primer día."

[MIN 14-15 — Cierre]
"¿Tiene sentido para vosotros probarlo? Si quieres, empezamos esta misma
semana con la configuración, que no os lleva más de [X] de vuestro
tiempo — el resto lo hago yo."
```

## 4.3 Checklist de onboarding para clínica #1

```
[ ] Contrato/acuerdo firmado (plan START o GROW) y método de pago activo
[ ] Datos de la clínica recogidos: nombre, dirección, horario exacto por
    día de la semana, política de urgencias, teléfono de urgencias
[ ] Precios orientativos redactados (para el prompt del Flujo A) y
    validados por el propietario (qué se puede decir y qué no)
[ ] Email de la recepción/propietario confirmado para el resumen diario
[ ] Número de WhatsApp Business dedicado configurado y verificado en
    Meta (o plan de migración del número actual)
[ ] Plantilla de confirmación de cita aprobada por Meta y probada
[ ] Alta de la clínica en tabla `clinics` con todos los campos completos
[ ] Import inicial de citas próximas (CSV exportado del PMS o
    introducido manualmente) en tabla `appointments`
[ ] Prueba end-to-end del Flujo A con un mensaje de test real fuera de
    horario
[ ] Prueba end-to-end del Flujo B con una cita de test a 24h
[ ] Explicación de 10 minutos a la recepcionista: qué va a ver en el
    email diario y qué hacer con cada tipo de alerta
[ ] Acuerdo de check-in semanal las primeras 4 semanas (10 min por
    llamada o WhatsApp)
[ ] Número de contacto directo de Gabriela entregado para incidencias
    urgentes
```

## 4.4 Métricas a trackear desde día 1 (spreadsheet simple)

Una única hoja de cálculo (Google Sheets), con estas pestañas mínimas:

**Pestaña "Outreach"**
| Fecha envío | Clínica | Ciudad | Canal | Respuesta (Sí/No) | Llamada agendada (Sí/No) | Resultado llamada | Fecha cierre |

**Pestaña "Clínicas activas"**
| Clínica | Plan | Fecha alta | MRR | Estado (activa/cancelada) | Fecha cancelación (si aplica) | Motivo cancelación (si aplica) |

**Pestaña "Operación semanal"** (una fila por clínica por semana)
| Semana | Clínica | Mensajes Flujo A gestionados | Nº alertas manuales | Nº citas con recordatorio enviado | Nº confirmadas | Nº canceladas/reprogramadas | Horas de soporte de Gabriela |

**Pestaña "Costes"**
| Mes | Coste VPS/infra fija | Coste OpenAI total | Coste Meta conversaciones total | Coste por clínica (calculado) | MRR total | Margen bruto |

Estas 4 pestañas son suficientes para validar H1-H5 sin necesidad de ninguna herramienta de analítica o CRM en los primeros 60 días.

---

*Fin del documento. Este documento es una guía de implementación viva: debe actualizarse con datos reales a partir de la Semana 2, especialmente las secciones de escenarios financieros (1.7) y costes de infraestructura (2.8), en cuanto existan cifras reales de la clínica piloto.*
