# FARO — Modelo de Negocio

**Fase 2 del ecosistema empresarial FARO**
Construye sobre `FARO_ESTRATEGIA_MARCA.md` (Fase 1). No repite el posicionamiento ni la narrativa ya definidos allí — los aplica a las decisiones de negocio.

**Nota de consistencia de precios**: el primer documento técnico (`FARO_TESIS_MVP_60DIAS.md`) trabajaba con un pricing de validación temprana (START 99€ / GROW 249€, sin setup fee) para el MVP de 2 flujos. Este documento refleja la siguiente etapa de madurez del modelo, con tres planes (START 149€ / GROW 299€ / OPS 499€) y un fee de implementación de 300€, una vez el alcance del servicio crece más allá de los dos flujos iniciales. Ambos son válidos en su momento: el primero es el pricing de la fase de validación (día 1-60), este es el pricing objetivo una vez el MVP ha demostrado retención (mes 3 en adelante).

---

## 1. Business Model Canvas — los nueve bloques en profundidad

### 1.1 Segmentos de clientes

**Qué incluye.** El cliente objetivo de FARO son clínicas dentales privadas de 4 a 10 gabinetes en España, con volumen de pacientes medio-alto, uso intensivo de WhatsApp como canal de entrada, recepción administrativa propia (una o más personas dedicadas a ello) y un software de gestión ya implantado (Gesden, Clinic Cloud, Dentalink u otro). Dentro de ese segmento, FARO distingue tres roles: el **decisor** (propietario, director o gerente de clínica, quien firma y paga), el **usuario** (recepción, atención al paciente, administración, quienes conviven con el sistema cada día) y los **influenciadores** (consultores de gestión dental, empresas de software del sector, responsables de marketing que trabajan con la clínica y pueden recomendar o bloquear la adopción).

**Por qué se diseña así.** Separar decisor de usuario no es un matiz académico: determina cómo se vende y cómo se onboarda. La venta se dirige al decisor con lenguaje de resultado económico (ver Fuentes de ingresos y Pricing), pero el onboarding y el uso diario se diseñan para el usuario, que no eligió el sistema y puede resistirse a él si le genera más trabajo en vez de menos. Ignorar esta distinción es la causa más común de que una automatización bien vendida fracase en la práctica: se convence al propietario y se abandona a la recepcionista con una herramienta que no entendió ni pidió.

**Ventajas de este segmento.** Ticket medio de tratamiento alto (permite que el ROI de FARO se demuestre con pocos casos), ciclo de venta corto (decisor único, sin comité de compra), estructura de agenda estricta (hace tangible el coste de cada hueco vacío), y tamaño de equipo suficiente para que un fallo de proceso sea doloroso pero no tan grande como para tener ya un departamento de operaciones propio que resuelva esto internamente.

**Riesgos.** Concentrarse en un segmento tan estrecho limita el TAM inmediato (ver Estructura de costes y Roadmap para la expansión). Además, dentro de "4 a 10 gabinetes" hay heterogeneidad real: una clínica de 4 gabinetes en una ciudad pequeña no tiene el mismo volumen de WhatsApp que una de 10 en Madrid o Barcelona, lo que obliga a validar el ICP (ver 3) con más granularidad de la que sugiere el rango numérico.

**Evolución futura.** El roadmap contempla expandir primero dentro del propio sector dental (clínicas de 1-3 gabinetes con paquete simplificado, grupos de +10 con paquete a medida) antes que saltar a otro vertical — ver Fase de escalabilidad en el documento de roadmap.

### 1.2 Propuesta de valor

**Qué incluye.** FARO no vende automatización, vende la ausencia de un problema: que ningún proceso operativo de la clínica se caiga por falta de tiempo o de personal disponible. Esto se traduce en cuatro capas ya desarrolladas en la Fase 1 (funcional, económica, emocional, estratégica) que aquí se conectan directamente con el modelo de ingresos: cada capa de valor debe poder mapearse a un motivo de pago recurrente, no solo a un beneficio abstracto.

**Por qué se diseña así.** Una propuesta de valor que solo enumera funcionalidades ("respondemos WhatsApp", "confirmamos citas") compite en el terreno de las herramientas, donde siempre habrá una alternativa más barata. Una propuesta de valor anclada en el resultado operativo y económico compite en un terreno donde FARO tiene ventaja: conocimiento del proceso, no del código.

**Ventajas.** Facilita justificar precio por encima de herramientas genéricas de automatización (Zenvia, Wati) porque el ítem que se compra no es "mensajes automatizados" sino "un proceso que ya no falla".

**Riesgos.** Si la ejecución técnica falla (un mensaje mal respondido, una cita cancelada por error), el coste reputacional es mayor que en una herramienta genérica, porque el cliente compró la promesa de que "esto no falla", no una herramienta que él mismo configura y de la que asume el riesgo.

**Evolución futura.** A medida que se acumulan datos reales de clientes (mensajes gestionados, citas confirmadas, huecos evitados), la propuesta de valor pasa de estar basada en proyección ("esto podría ahorrarte X") a estar basada en evidencia propia de FARO ("clientes similares al tuyo evitan de media X huecos al mes") — un salto cualitativo en poder de venta que no está disponible en el día 1.

### 1.3 Canales

**Qué incluye.** Tres frentes: digital (web propia, SEO, Google Business Profile, LinkedIn, email outbound), presencial (visitas comerciales directas, ferias y congresos odontológicos — como Expodental —, asociaciones y colegios profesionales de dentistas) y partners (empresas de software de gestión dental, consultoras de gestión de clínicas, agencias de marketing dental especializadas que no compiten directamente con FARO porque su foco es captación, no operación).

**Por qué se diseña así.** En una fase temprana con un solo fundador, el canal presencial y el outbound directo dominan porque generan la primera decena de clientes con control total sobre el mensaje y el aprendizaje cualitativo (objeciones reales, lenguaje que resuena). El canal digital (SEO, contenido) se construye en paralelo porque tarda meses en producir resultado, pero compone valor de forma pasiva. El canal de partners se reserva para cuando exista prueba social suficiente (casos de éxito reales) como para que un tercero arriesgue su reputación recomendando FARO.

**Ventajas.** Tres canales con dinámicas de coste y velocidad distintas reducen la dependencia de uno solo; si el outbound se satura o deja de convertir, el canal orgánico y de partners no dependen del tiempo de venta 1:1 de la fundadora.

**Riesgos.** El canal presencial y el outbound no escalan linealmente con el tiempo de una sola persona — es el cuello de botella identificado ya en la tesis de validación (H5). El canal de partners tiene el riesgo inverso: escala rápido si funciona, pero diluye el control sobre cómo se posiciona FARO frente al cliente final si el partner no transmite el mensaje correctamente.

**Evolución futura.** El roadmap prioriza formalizar el canal de partners a partir de la clínica #10-15, momento en el que existen casos de éxito documentados que un partner puede presentar con crédito real.

### 1.4 Relación con clientes

**Qué incluye.** Un modelo de relación de largo plazo estructurado en cuatro etapas recurrentes: implementación inicial (onboarding), suscripción mensual con servicio activo, optimización continua (revisión periódica de qué automatizar a continuación) y renovación — sin fecha de fin del ciclo, a diferencia de un proyecto de consultoría cerrado.

**Por qué se diseña así.** El valor de FARO no es un entregable puntual, es una mejora acumulativa. Estructurar la relación como cuatro etapas que se repiten (no un proyecto lineal con final) refuerza en la práctica comercial y operativa lo que la Fase 1 define como narrativa: FARO no entrega y desaparece.

**Ventajas.** Genera ingresos recurrentes predecibles (base del modelo de suscripción) y una razón legítima de contacto periódico con el cliente (revisión de optimización) que sirve tanto para retención como para upselling natural, sin que se perciba como venta forzada.

**Riesgos.** Un modelo de relación de largo plazo exige que el coste marginal de mantener a cada cliente activo (soporte, ajustes, revisión) se mantenga bajo control — si cada revisión periódica se convierte en una sesión de trabajo extenso no facturado, el modelo de suscripción deja de ser rentable (ver Estructura de costes, sección 1.9, y Riesgos, sección 8).

**Evolución futura.** A medida que crece la base de clientes, la revisión periódica individual (llamada 1:1) debe evolucionar hacia un proceso semi-estandarizado (checklist de optimización por tipo de clínica) para que la relación de largo plazo no dependa linealmente del tiempo de un humano por cliente.

### 1.5 Fuentes de ingresos

**Qué incluye.** Un fee de implementación único (setup) más una suscripción mensual en tres planes: **START** (149€/mes), **GROW** (299€/mes) y **OPS** (499€/mes), diferenciados por número de automatizaciones activas y nivel de soporte, no por límites arbitrarios de uso. A futuro, fuentes adicionales: marketplace de automatizaciones, plantillas, automatizaciones premium bajo demanda, formación y auditorías operativas puntuales para clínicas que no quieren suscripción completa.

**Por qué se diseña así.** El fee de implementación (300€) cubre el coste real de configuración inicial (credenciales de WhatsApp, integración con el calendario, primeras automatizaciones) y actúa como filtro de compromiso: un cliente que paga un fee de entrada, por pequeño que sea, se compromete más con el proceso de onboarding que uno que empieza gratis. La suscripción en tres escalones (en lugar de un precio único) permite capturar tanto a la clínica que solo quiere resolver el síntoma más doloroso (START) como a la que quiere convertir a FARO en su equipo de operaciones de facto (OPS), sin tener que rediseñar el pricing cuando un cliente pide "más".

**Ventajas.** Ingreso recurrente y predecible (a diferencia de un modelo de proyectos puntuales), con expansión de ingreso natural dentro de la misma cuenta (upsell de START a GROW a OPS) en lugar de depender exclusivamente de nueva adquisición.

**Riesgos.** El riesgo central, señalado explícitamente en la validación de hipótesis (ver 4), es si 149€/mes deja margen suficiente si el cliente exige soporte desproporcionado o automatizaciones nuevas constantes fuera de lo pactado. Esto exige definir con precisión qué incluye cada plan y estandarizar entre el 80% y el 90% del servicio — la personalización es el enemigo silencioso del margen en un modelo de suscripción con precio fijo.

**Evolución futura.** El marketplace de automatizaciones y las plantillas reutilizables (ver Recursos clave) son la vía para que el ingreso adicional no dependa de horas de trabajo humano por cliente, sino de activos ya construidos que se venden repetidamente con coste marginal casi nulo.

### 1.6 Recursos clave

**Qué incluye.** El conocimiento acumulado de procesos clínicos (el activo menos replicable), la infraestructura técnica (n8n, OpenAI/Claude, WhatsApp Business API, Google Workspace), la documentación y metodología propia, la marca FARO (ver Fase 1) y, de forma creciente, una biblioteca de automatizaciones reutilizables ya probadas en clientes reales.

**Por qué se diseña así.** De estos recursos, solo dos son defendibles a medio plazo: el conocimiento de procesos y la biblioteca de automatizaciones reutilizables. La infraestructura técnica (n8n, OpenAI) es un commodity al alcance de cualquier competidor con tiempo y conocimiento técnico equivalente — ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md` (Fase 1) y su desarrollo ampliado en la sección 8 de este documento (Riesgos del modelo → Competencia).

**Ventajas.** Cada nueva automatización construida para un cliente, si se diseña de forma reutilizable desde el principio (parametrizada, no hardcodeada a un cliente concreto), se convierte en un activo que reduce el coste marginal de servir al siguiente cliente similar.

**Riesgos.** Si las automatizaciones se construyen de forma ad-hoc para cada clínica sin disciplina de reutilización, el "recurso clave" se convierte en una carga de mantenimiento que crece linealmente con cada cliente nuevo, erosionando el margen exactamen el punto señalado como riesgo en Fuentes de ingresos.

**Evolución futura.** La meta a medio plazo es que el 80-90% de cada implementación nueva provenga de la biblioteca ya existente, reservando el trabajo a medida solo para el 10-20% que de verdad diferencia a una clínica de otra.

### 1.7 Actividades clave

**Qué incluye.** Análisis de procesos de la clínica, diseño de la automatización (no solo construcción técnica), implementación, integración con las herramientas ya usadas por la clínica, mantenimiento, optimización continua, soporte al cliente, e investigación y desarrollo de nuevas automatizaciones reutilizables.

**Por qué se diseña así.** La actividad que más valor genera y menos se parece a lo que hace un desarrollador freelance de automatizaciones es el análisis y diseño de procesos — decidir qué automatizar y en qué orden, no solo cómo construirlo. Colocar esta actividad explícitamente en primer lugar (antes de "implementación") reafirma la posición estratégica de la Fase 1: FARO vende criterio, no ejecución técnica.

**Ventajas.** Separar análisis/diseño de implementación permite, a futuro, que la implementación se delegue (a un colaborador técnico, a plantillas ya construidas) sin perder el activo diferencial, que es el criterio de diseño.

**Riesgos.** Mientras exista una sola persona en FARO, estas siete actividades compiten por el mismo tiempo finito. El riesgo de sobrecarga operativa que FARO vende resolver a sus clientes es exactamente el riesgo que FARO corre internamente si crece sin disciplina de priorización.

**Evolución futura.** La incorporación de un primer colaborador (soporte técnico o implementación) se plantea en el roadmap en cuanto el tiempo dedicado a mantenimiento y soporte reactivo supere de forma sostenida el tiempo dedicado a análisis y diseño — señal de que la fundadora se está convirtiendo en operadora en lugar de estratega.

### 1.8 Socios clave

**Qué incluye.** Proveedores de infraestructura de IA (OpenAI, Anthropic), la plataforma de automatización (n8n), proveedores de infraestructura (Google Workspace, hosting), Meta (WhatsApp Business Platform), software de gestión dental (como aliados potenciales, no como integraciones técnicas actuales — ver restricción de PMS en el documento de MVP técnico), consultores legales (protección de datos de pacientes, contratos de suscripción) y empresas informáticas locales que ya atienden a clínicas dentales y pueden actuar como canal (ver 1.3).

**Por qué se diseña así.** Ninguno de los socios tecnológicos (OpenAI, Anthropic, n8n, Meta) es una alianza estratégica en el sentido clásico — son proveedores intercambiables, y tratarlos como "socios clave" en el Canvas no debe confundirse con dependencia estratégica: si mañana cambia el proveedor de LLM, el negocio no cambia, porque el valor no está ahí (ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md`, Fase 1). El socio verdaderamente estratégico a cultivar es el software de gestión dental, no como integración técnica (bloqueada hoy por la falta de API pública de la mayoría), sino como relación institucional que podría abrirse en el futuro.

**Riesgos.** Dependencia operativa (no estratégica) de proveedores de IA y de Meta: un cambio de política de precios de WhatsApp Business API o de OpenAI afecta directamente al margen por cliente. El riesgo se mitiga manteniendo la arquitectura técnica desacoplada de un proveedor único (ver documento técnico: el prompt y la lógica de negocio no están atados irreversiblemente a un modelo concreto).

**Evolución futura.** Negociar acuerdos formales con software de gestión dental (incluso sin API pública, un acuerdo de exportación/importación de datos estructurado) es el hito que desbloquea el salto de pricing hacia el plan OPS y hacia clientes de mayor tamaño (ver Roadmap y la sección "Qué tendría que pasar para ser empresa de varios millones" del documento de tesis inicial).

### 1.9 Estructura de costes

**Qué incluye.** Costes fijos bajos (autónomo, dominio, hosting, herramientas de gestión básicas, contabilidad) y costes variables ligados directamente al número de clínicas activas (consumo de LLM, WhatsApp Business API, tiempo de soporte). A esto se suman costes de adquisición (CAC: outreach, tiempo comercial, eventualmente publicidad y viajes a congresos).

**Por qué se diseña así.** Un modelo de coste variable ligado al uso (pagar por conversación y por token, no por licencia fija de una plataforma cara) es deliberado: mantiene el punto de equilibrio por cliente bajo desde el primer cliente, sin necesidad de un volumen mínimo para que la unidad económica funcione — coherente con la filosofía de MVP como servicio gestionado, no como SaaS con coste fijo de plataforma.

**Ventajas.** Márgenes brutos altos por cliente individual una vez superado el coste fijo de la estructura (ver Presupuesto MVP en el documento técnico), lo que permite que el negocio sea rentable incluso a escala reducida (5-10 clientes), sin necesidad de una ronda de inversión para sobrevivir.

**Riesgos.** El coste variable más difícil de controlar no es la infraestructura (predecible y barata), es el tiempo humano de soporte y personalización por cliente — el mismo riesgo señalado en Fuentes de ingresos. Sin estandarización, el coste marginal por cliente puede superar silenciosamente al ingreso marginal.

**Evolución futura.** A medida que la biblioteca de automatizaciones reutilizables crece (ver Recursos clave), el coste marginal de cada cliente nuevo tiende a caer, mientras que el ingreso marginal se mantiene o crece (upsell). Ese es el mecanismo concreto por el que este negocio mejora su margen con la escala, no solo con el volumen.

---

## 2. Lean Canvas

| Bloque | Contenido |
|---|---|
| **Problema** | (1) Mensajes de WhatsApp de pacientes sin respuesta fuera de horario o en picos de carga. (2) Citas no confirmadas que generan huecos de agenda no facturables. (3) Tareas administrativas repetitivas que consumen el tiempo del equipo de recepción sin generar valor diferencial. |
| **Segmentos de clientes** | Clínicas dentales privadas de 4-10 gabinetes en España, con recepción propia y uso intensivo de WhatsApp (ver detalle en BMC 1.1 e ICP en sección 3). |
| **Propuesta única de valor** | "Nos convertimos en el equipo externo que se asegura de que ningún proceso operativo de tu clínica se caiga — sin que tengas que aprender ni gestionar nada nuevo." |
| **Solución** | Servicio gestionado de automatización de procesos (WhatsApp, confirmaciones, seguimiento) construido y mantenido por FARO, entregado por suscripción mensual con mejora continua. |
| **Canales** | Outbound directo, visitas y eventos del sector, SEO/contenido propio, partners tecnológicos y de consultoría dental (ver BMC 1.3). |
| **Fuentes de ingresos** | Setup 300€ + suscripción mensual en tres planes (149€ / 299€ / 499€) — ver Pricing, sección 4. |
| **Estructura de costes** | Infraestructura variable por cliente (LLM, WhatsApp API), costes fijos mínimos, tiempo de soporte y coste de adquisición (ver BMC 1.9). |
| **Métricas clave** | Nº de clínicas activas, MRR, churn mensual, tiempo de soporte por clínica, tasa de conversión de llamada a contrato, % de servicio estandarizado vs. a medida. |
| **Ventaja injusta** | Conocimiento acumulado y verificado de qué automatizar en una clínica dental española y en qué orden — biblioteca de procesos y automatizaciones ya probadas, no replicable con solo copiar la tecnología (ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md`, Fase 1). |

---

## 3. ICP (Ideal Customer Profile) y Buyer Persona

### 3.1 ICP — perfil de cliente ideal

- Clínica dental privada española, independiente o parte de un grupo pequeño (no cadena corporativa).
- Entre 4 y 10 gabinetes activos, con al menos 2 dentistas trabajando de forma simultánea la mayoría de días.
- Recepción propia con 1-3 personas dedicadas a atención al paciente y agenda.
- Volumen estimado de 30-100 mensajes de WhatsApp al día.
- Software de gestión ya implantado (indicador de que la clínica ya invierte en herramientas, no de que vaya a integrarse con FARO).
- Propietario o gerente con capacidad de decisión de compra sin necesidad de aprobación externa (descarta franquicias o cadenas con proceso de compra centralizado).
- Señal de dolor explícita y verbalizable: menciona espontáneamente, sin que se le pregunte de forma dirigida, que "se les escapan mensajes" o que "tienen problemas con los huecos de agenda".

### 3.2 Buyer persona — "Marta, gerente de clínica"

Marta tiene 42 años y gestiona, junto al dentista propietario (su pareja o socio), una clínica de 6 gabinetes en una ciudad española de tamaño medio. No es la dueña en el papel, pero es quien decide sobre proveedores, herramientas y procesos del día a día — el propietario confía en su criterio y rara vez revisa estas decisiones en detalle. Su jornada se reparte entre supervisar a las dos recepcionistas, resolver incidencias de agenda y, cada vez con más frecuencia, revisar personalmente el WhatsApp de la clínica los domingos por la noche porque sabe que si no lo hace, el lunes hay mensajes de pacientes nuevos sin respuesta desde el viernes.

Marta no busca "un chatbot" ni "más tecnología" — de hecho, ha rechazado antes propuestas de agencias que le vendían dashboards que nunca llegó a abrir. Lo que busca es dejar de ser la última línea de defensa de un proceso que debería sostenerse solo. Decide comprar cuando alguien le demuestra, con sus propios números, que el problema tiene un coste concreto y que la solución no le va a generar más trabajo de gestión del que ya tiene.

### 3.3 Customer Journey

**Conciencia.** Marta no busca activamente "automatización para clínicas dentales" — el problema se le presenta como frustración recurrente (WhatsApp del fin de semana), no como una categoría de compra. La conciencia se genera por contacto directo (outbound, evento del sector) o por búsqueda tangencial ("cómo evitar no-shows en clínica dental").

**Consideración.** Marta agenda la llamada de configuración de 15 minutos precisamente porque no se le pide comprar nada todavía — el marco de "diagnóstico, no venta" (ver Fase 1, narrativa) reduce la fricción de este paso más que cualquier argumento de producto.

**Decisión.** El cierre ocurre cuando el cálculo de ROI se hace con sus propios números (no una proyección genérica) y cuando queda claro, sin ambigüedad, qué NO incluye el servicio todavía — la honestidad de alcance reduce el riesgo percibido de la decisión.

**Onboarding.** Las primeras dos semanas son críticas: si el sistema falla o genera trabajo extra a la recepción en este periodo, la relación se rompe antes de generar valor. El checklist de onboarding (ver documento técnico) existe precisamente para blindar esta etapa.

**Retención y expansión.** La revisión periódica de optimización (ver BMC 1.4) es el mecanismo formal por el que Marta pasa de START a GROW o a OPS — no por presión comercial, sino porque ve, con datos propios, qué otro proceso merece automatizarse a continuación.

**Referencia.** El sector dental español es gremial: los propietarios se conocen entre sí a través de colegios profesionales y proveedores comunes. Una Marta satisfecha es el canal de adquisición más barato y de mayor confianza disponible a partir del tercer o cuarto cliente.

---

## 4. Pricing

| Plan | Precio | Para quién | Qué incluye |
|---|---|---|---|
| **Setup** | 300€ (pago único) | Todos los planes | Configuración de credenciales (WhatsApp Business, calendario), primera automatización activa, prueba end-to-end antes de producción. |
| **START** | 149€/mes | Clínica que quiere resolver el síntoma más doloroso (WhatsApp sin respuesta) | 1 automatización principal activa, soporte por email, revisión trimestral. |
| **GROW** | 299€/mes | Clínica que ya confía en el modelo y quiere ampliar cobertura | Hasta 3 automatizaciones activas (WhatsApp + confirmación de cita + seguimiento de presupuestos, por ejemplo), soporte prioritario, revisión mensual. |
| **OPS** | 499€/mes | Clínica que quiere que FARO actúe como su equipo de operaciones externo | Automatizaciones ilimitadas dentro del catálogo estandarizado, soporte directo, sesión mensual de optimización de procesos, prioridad en nuevas automatizaciones del catálogo. |

El fee de setup no es un ítem de beneficio para FARO — es un filtro de compromiso y una cobertura del coste real de las primeras horas de implementación, que no deben subsidiarse con el margen de la suscripción desde el primer mes.

**Mientras no exista ningún cliente de pago**, este pricing no cambia — ver `FARO_PROCESO_COMERCIAL.md` sección 13 (Fase de clientes fundadores) para qué se ofrece a los primeros clientes sin tocar estos precios ni recurrir a descuentos.

### 4.1 Plan LITE — diseñado, no activado

Existe un cuarto plan ya diseñado (procedente de un kit de prospección presencial, `Kit 3.0 — One-pager A4 + Tarjeta`, hoy retirado) que no forma parte del pricing activo hasta que se decida activarlo explícitamente:

| Plan | Precio | Para quién | Qué incluye |
|---|---|---|---|
| **LITE** | 99€/mes · 0€ setup ahora (después 150€) · fase de validación, máx. 6 meses | Clínica que quiere probar con el mínimo riesgo posible | 1 automatización, soporte por email, onboarding presencial reducido a 1h |

A diferencia de la nota de "clientes fundadores" (sección 13 de `FARO_PROCESO_COMERCIAL.md`, que congela precio pero no lo reduce), LITE sí es un precio de entrada más bajo y con setup diferido — es una estructura de pricing distinta (coherente con `FARO_VENTA_ADAPTATIVA.md`, principio 5: "el pricing debería poder adaptarse en estructura antes que en precio base, según el perfil"), pensada para el comprador más conservador del espectro de riesgo, no para todos los primeros clientes por defecto. El mismo material de origen definía una prospección presencial acotada a León y Castilla y León (visita física con one-pager y tarjeta), más estrecha que el ICP nacional ya definido en la sección 3.1 — válida como canal complementario local, no como sustituto del outbound digital de `FARO_PROCESO_COMERCIAL.md` sección 2.

**Antes de activar LITE**, decidir explícitamente: (1) si convive con la Fase de clientes fundadores o la sustituye para el perfil conservador, (2) qué pasa a los 6 meses si el cliente quiere continuar, (3) si el fee de 150€ diferido se cobra igual si el cliente cancela antes del mes 6.

---

## 5. MVP — por qué no un SaaS

**Por qué no construir un SaaS desde el día 1.** Un SaaS exige que el cliente configure, entienda y mantenga la herramienta — exactamente lo contrario de la propuesta de valor de FARO ("sin que tengas que aprender ni gestionar nada nuevo"). Construir un SaaS también obliga a invertir en interfaz, en soporte de autoservicio y en generalización del producto antes de saber, con datos reales, qué automatización concreta genera retención. Validar primero como servicio gestionado invierte el orden de riesgo: se aprende qué automatizar y por qué el cliente paga, antes de invertir en construir una plataforma que generalice ese aprendizaje.

**Objetivo del MVP.** No es "que a las clínicas les guste la IA" ni "que les guste n8n". Es una pregunta más estrecha y más dura: **¿paga la clínica una suscripción mensual, de forma sostenida, porque siente que su clínica funciona mejor?** Concretamente: conseguir diez clínicas que paguen todos los meses sin necesidad de perseguir el cobro ni justificar el valor cada vez.

**Alcance.** Una sola automatización principal por cliente en la fase de validación (por ejemplo, seguimiento automático de pacientes que escribieron y no llegaron a reservar cita, o el par de flujos descritos en el documento técnico: respuesta fuera de horario y confirmación de cita), sin dashboard — el resumen llega por email, tal como se especifica en el documento técnico de la Fase 0.

**Tecnología.** n8n, Claude u OpenAI, Google Sheets, Google Calendar, Gmail y WhatsApp Business API — el mismo stack ya descrito en el documento técnico, deliberadamente simple y sin infraestructura de plataforma multi-tenant compleja.

**Tiempos.** Implementación de 24-48 horas por clínica una vez firmado el acuerdo, gracias a que la mayor parte de la automatización es reutilizable entre clientes similares (ver Recursos clave, 1.6) y no se construye desde cero cada vez.

**Costes.** Ver desglose detallado en `FARO_TESIS_MVP_60DIAS.md`, sección 2.8 — del orden de 30-75€ en el primer mes de infraestructura y operación piloto.

**Hipótesis que valida.** Las mismas cinco hipótesis (H1-H5) desarrolladas en el documento de tesis inicial, con un matiz adicional que este documento incorpora explícitamente: **¿prefieren las clínicas pagar una suscripción o un proyecto puntual?** No todos los sectores de servicios aceptan con naturalidad una cuota recurrente por algo que perciben como "ya resuelto" tras la implementación inicial — esta es una hipótesis de forma de pago, distinta de la hipótesis de precio, y debe validarse por separado observando si los clientes piloto cuestionan la recurrencia del cobro una vez pasado el primer mes.

---

## 6. Roadmap (síntesis — desarrollo completo en el documento de escalabilidad, Fase futura)

1. **Meses 1-3**: validar con 3-10 clínicas el modelo de suscripción con una automatización principal (fase ya cubierta en el plan de 60 días del documento inicial).
2. **Meses 4-9**: introducir los tres planes (START/GROW/OPS) una vez exista evidencia de qué automatizaciones adicionales piden los clientes con más frecuencia, y formalizar el catálogo reutilizable.
3. **Meses 10-18**: primer colaborador (soporte/implementación), inicio de canal de partners con casos de éxito documentados.
4. **Año 2 en adelante**: marketplace de automatizaciones, exploración de acuerdos con software de gestión dental, expansión geográfica o de vertical adyacente (ver tesis inicial, sección "qué tendría que pasar para ser empresa de varios millones").

---

## 7. KPIs a trackear

MRR, número de clínicas activas, churn mensual, CAC, LTV, tiempo de soporte por clínica/mes, % de automatizaciones servidas desde catálogo estandarizado vs. a medida, tasa de conversión de llamada de configuración a contrato firmado, Net Revenue Retention (expansión menos churn dentro de la base ya existente).

---

## 8. Riesgos del modelo

**Adopción del mercado.** El riesgo no es que el problema no exista, es que el propietario lo tolere como "coste de hacer negocio" en vez de buscar activamente una solución — de ahí que H1 (tasa de respuesta a outreach) sea la primera hipótesis a validar, antes que cualquier decisión de producto.

**Rentabilidad.** Ya señalado en Fuentes de ingresos y Estructura de costes: el margen depende de estandarizar el 80-90% del servicio. Sin esa disciplina, cada cliente nuevo erosiona el margen del anterior en vez de mejorarlo.

**Escalabilidad.** Un modelo que depende del tiempo de una sola persona para vender, implementar y dar soporte no escala más allá de 10-15 clientes sin incorporar a alguien más — el roadmap lo anticipa (sección 6), pero el riesgo real es no reconocer la señal a tiempo y sobrecargar al fundador hasta el punto de degradar el servicio a los clientes existentes.

**Dependencia tecnológica.** FARO no depende de un proveedor de IA concreto en términos de producto (ver BMC 1.8), pero sí depende de las políticas de precio y de uso de Meta para WhatsApp Business — un cambio unilateral de precios de conversación por parte de Meta afecta directamente al margen variable por cliente, sin que FARO tenga capacidad de negociarlo.

**Personalización excesiva.** El riesgo silencioso más peligroso: cada cliente, de forma razonable, pedirá ajustes específicos a su caso. Sin un proceso explícito de decir "no" o de cobrar aparte por lo que no está en el catálogo estandarizado, el negocio deriva hacia un modelo de consultoría a medida disfrazado de suscripción, con la estructura de costes de una consultora pero el precio de un SaaS.

**Competencia.** El moat de FARO (ver Fase 1, Diferenciación) es de conocimiento y metodología, no de tecnología — lo que significa que la barrera de entrada para un competidor con el mismo criterio y la misma dedicación es baja en el corto plazo. La defensa no es impedir que aparezcan competidores, es acumular más rápido que ellos evidencia real de qué funciona (biblioteca de automatizaciones, casos documentados) y relación de confianza en el sector.

**Pricing.** El riesgo de fijar 149€ como entrada es doble: si es demasiado bajo, no cubre el coste real de soporte no estandarizado (ver Rentabilidad); si se percibe como alto frente a alternativas genéricas de automatización sin especialización, el cliente compara precio de herramienta en vez de valor de resultado — de ahí la importancia de que toda comunicación (ver Fase 1, pilares) anclada en resultado, no en funcionalidad.

**Retención.** Un cliente que no ve, con datos concretos, qué ha mejorado en su clínica mes a mes tiende a cuestionar la recurrencia del cobro a partir del tercer o cuarto mes — el mecanismo de revisión periódica (BMC 1.4) y el email de resumen (documento técnico) existen específicamente para hacer visible ese progreso sin necesidad de un dashboard.

---

*Fin de la Fase 2 — Modelo de negocio. Próxima fase: identidad visual (Fase 3), que traduce el posicionamiento (Fase 1) y la estructura de negocio (Fase 2) en un sistema visual coherente.*
