# FARO — Modelo de Negocio

**Fase 2 del ecosistema empresarial FARO**
Construye sobre `FARO_ESTRATEGIA_MARCA.md` (Fase 1). No repite el posicionamiento ni la narrativa ya definidos allí — los aplica a las decisiones de negocio.

**Nota de consistencia de precios**: el primer documento técnico (`FARO_TESIS_MVP_60DIAS.md`) trabajaba con un pricing de validación temprana (START 99€ / GROW 249€, sin setup fee) para el MVP de 2 flujos. Este documento refleja la siguiente etapa de madurez del modelo, con tres planes (START 149€ / GROW 299€ / OPS 499€) y un fee de implementación de 300€, una vez el alcance del servicio crece más allá de los dos flujos iniciales. Ambos son válidos en su momento: el primero es el pricing de la fase de validación (día 1-60), este es el pricing objetivo una vez el MVP ha demostrado retención (mes 3 en adelante).

---

## 1. Business Model Canvas — los nueve bloques en profundidad

### 1.1 Segmentos de clientes

> **Nota de pivote (ver Fase de escalabilidad más abajo y `FARO_PROCESO_COMERCIAL.md` sección 13-bis)**: esta sección describía originalmente un único vertical (clínicas dentales, mercado nacional). Se amplía a pyme de servicios con agenda en la provincia de León, tras validar con FELE y la Cámara de Comercio de León (ver `consejo-estrategico-leon`) que el mecanismo de FARO —WhatsApp sin respuesta, confirmación de citas, seguimiento de clientes— no depende de que el cliente final sea una clínica dental, depende de que el negocio gestione una agenda de citas o reservas con recepción limitada. Dental sigue siendo un segmento válido dentro de este universo más amplio, no se descarta.

**Qué incluye.** El cliente objetivo de FARO es una pyme de servicios en la provincia de León con una agenda de citas o reservas activa: clínicas dentales, veterinarias, centros de fisioterapia y estética, peluquerías y salones de belleza, talleres mecánicos, academias y autoescuelas, entre otros negocios con el mismo patrón operativo. Uso intensivo de WhatsApp o teléfono como canal de entrada, recepción limitada (a menudo el propio dueño, o una sola persona administrativa), y con o sin software de gestión ya implantado — a diferencia del vertical dental, donde casi siempre existía un programa de gestión previo, muchas pymes leonesas de otros sectores no tienen ningún sistema todavía, lo que cambia el punto de partida de la conversación comercial (ver 3.1). Dentro de ese segmento, FARO distingue tres roles: el **decisor** (propietario o gerente del negocio, quien firma y paga — casi siempre la misma persona en una pyme pequeña), el **usuario** (recepción o el propio decisor cuando no hay recepción separada, quienes conviven con el sistema cada día) y los **influenciadores** (gremios y asociaciones sectoriales de León, la Cámara de Comercio, otros propietarios de negocios de la misma zona que recomiendan por confianza personal).

**Por qué se diseña así.** Separar decisor de usuario sigue siendo relevante incluso cuando ambos roles recaen en la misma persona (frecuente en pyme pequeña): determina si el onboarding se diseña para alguien con tiempo de sobra para aprender un sistema nuevo (casi nunca) o para alguien que necesita valor inmediato y fricción mínima (casi siempre). La venta se dirige al decisor con lenguaje de resultado económico (ver Fuentes de ingresos y Pricing), pero el onboarding se diseña asumiendo que quien lo usa cada día tiene, de media, menos tiempo y menos tolerancia a la complejidad que en el vertical dental original.

**Ventajas de este segmento.** Universo de clientes potenciales mucho mayor dentro de un territorio pequeño y de alta confianza (León), lo que reduce el coste de adquisición vía referido y red local (FELE, Cámara de Comercio, gremios) frente a un vertical único disperso por toda España. Ciclo de venta corto (decisor único, sin comité de compra) se mantiene igual que en el modelo original. La estructura de agenda estricta que hacía tangible el coste de cada hueco vacío en dental se mantiene en la mayoría de estos negocios (veterinaria, fisioterapia, peluquería), aunque no en todos (un taller mecánico tiene una lógica de agenda más flexible).

**Riesgos.** La heterogeneidad entre verticales es mayor que la heterogeneidad dentro de "4 a 10 gabinetes dentales": el volumen de WhatsApp, el ticket medio y la urgencia del dolor varían mucho entre una veterinaria y una academia. Esto obliga a validar el ICP con más cuidado por vertical (ver 3.1) en vez de asumir que el mismo mensaje sirve para todos. Además, sin software de gestión previo en muchos casos, la barrera de entrada tecnológica de FARO como "primera herramienta digital" del negocio es mayor que cuando ya existía un programa de gestión que demostraba predisposición a invertir en tecnología.

**Evolución futura.** El roadmap prioriza primero validar 2-3 verticales dentro de León (con el propio FELE o la Cámara ayudando a identificar cuáles tienen más señal de dolor real) antes de expandir a otras provincias de Castilla y León o de replicar el modelo dental original a nivel nacional en paralelo — no son mutuamente excluyentes, pero no se persiguen los dos a la vez sin evidencia de cuál da mejor retorno por hora de trabajo comercial.

### 1.2 Propuesta de valor

**Qué incluye.** FARO no vende automatización, vende la ausencia de un problema: que ningún proceso operativo del negocio se caiga por falta de tiempo o de personal disponible. Esto se traduce en cuatro capas ya desarrolladas en la Fase 1 (funcional, económica, emocional, estratégica) que aquí se conectan directamente con el modelo de ingresos: cada capa de valor debe poder mapearse a un motivo de pago recurrente, no solo a un beneficio abstracto.

**Por qué se diseña así.** Una propuesta de valor que solo enumera funcionalidades ("respondemos WhatsApp", "confirmamos citas") compite en el terreno de las herramientas, donde siempre habrá una alternativa más barata. Una propuesta de valor anclada en el resultado operativo y económico compite en un terreno donde FARO tiene ventaja: conocimiento del proceso, no del código.

**Ventajas.** Facilita justificar precio por encima de herramientas genéricas de automatización (Zenvia, Wati) porque el ítem que se compra no es "mensajes automatizados" sino "un proceso que ya no falla".

**Riesgos.** Si la ejecución técnica falla (un mensaje mal respondido, una cita cancelada por error), el coste reputacional es mayor que en una herramienta genérica, porque el cliente compró la promesa de que "esto no falla", no una herramienta que él mismo configura y de la que asume el riesgo.

**Evolución futura.** A medida que se acumulan datos reales de clientes (mensajes gestionados, citas confirmadas, huecos evitados), la propuesta de valor pasa de estar basada en proyección ("esto podría ahorrarte X") a estar basada en evidencia propia de FARO ("clientes similares al tuyo evitan de media X huecos al mes") — un salto cualitativo en poder de venta que no está disponible en el día 1.

### 1.3 Canales

**Qué incluye.** Tres frentes: digital (web propia, SEO, Google Business Profile, LinkedIn, email outbound), presencial (visitas comerciales directas en León, FELE, Cámara de Comercio de León, asociaciones y gremios sectoriales locales — dental, veterinario, estética, etc.) y partners (empresas de software de gestión sectorial, consultoras de gestión de negocio, agencias de marketing local que no compiten directamente con FARO porque su foco es captación, no operación).

**Por qué se diseña así.** En una fase temprana con un solo fundador, el canal presencial y el outbound directo dominan porque generan la primera decena de clientes con control total sobre el mensaje y el aprendizaje cualitativo (objeciones reales, lenguaje que resuena). El canal digital (SEO, contenido) se construye en paralelo porque tarda meses en producir resultado, pero compone valor de forma pasiva. El canal de partners se reserva para cuando exista prueba social suficiente (casos de éxito reales) como para que un tercero arriesgue su reputación recomendando FARO.

**Ventajas.** Tres canales con dinámicas de coste y velocidad distintas reducen la dependencia de uno solo; si el outbound se satura o deja de convertir, el canal orgánico y de partners no dependen del tiempo de venta 1:1 de la fundadora.

**Riesgos.** El canal presencial y el outbound no escalan linealmente con el tiempo de una sola persona — es el cuello de botella identificado ya en la tesis de validación (H5). El canal de partners tiene el riesgo inverso: escala rápido si funciona, pero diluye el control sobre cómo se posiciona FARO frente al cliente final si el partner no transmite el mensaje correctamente.

**Evolución futura.** El roadmap prioriza formalizar el canal de partners a partir del cliente #10-15, momento en el que existen casos de éxito documentados que un partner puede presentar con crédito real.

### 1.4 Relación con clientes

**Qué incluye.** Un modelo de relación de largo plazo estructurado en cuatro etapas recurrentes: implementación inicial (onboarding), suscripción mensual con servicio activo, optimización continua (revisión periódica de qué automatizar a continuación) y renovación — sin fecha de fin del ciclo, a diferencia de un proyecto de consultoría cerrado.

**Por qué se diseña así.** El valor de FARO no es un entregable puntual, es una mejora acumulativa. Estructurar la relación como cuatro etapas que se repiten (no un proyecto lineal con final) refuerza en la práctica comercial y operativa lo que la Fase 1 define como narrativa: FARO no entrega y desaparece.

**Ventajas.** Genera ingresos recurrentes predecibles (base del modelo de suscripción) y una razón legítima de contacto periódico con el cliente (revisión de optimización) que sirve tanto para retención como para upselling natural, sin que se perciba como venta forzada.

**Riesgos.** Un modelo de relación de largo plazo exige que el coste marginal de mantener a cada cliente activo (soporte, ajustes, revisión) se mantenga bajo control — si cada revisión periódica se convierte en una sesión de trabajo extenso no facturado, el modelo de suscripción deja de ser rentable (ver Estructura de costes, sección 1.9, y Riesgos, sección 8).

**Evolución futura.** A medida que crece la base de clientes, la revisión periódica individual (llamada 1:1) debe evolucionar hacia un proceso semi-estandarizado (checklist de optimización por tipo de negocio) para que la relación de largo plazo no dependa linealmente del tiempo de un humano por cliente.

### 1.5 Fuentes de ingresos

**Qué incluye.** Un fee de implementación único (setup) más una suscripción mensual en tres planes: **START** (149€/mes), **GROW** (299€/mes) y **OPS** (499€/mes), diferenciados por número de automatizaciones activas y nivel de soporte, no por límites arbitrarios de uso. A futuro, fuentes adicionales: marketplace de automatizaciones, plantillas, automatizaciones premium bajo demanda, formación y auditorías operativas puntuales para negocios que no quieren suscripción completa.

**Por qué se diseña así.** El fee de implementación (300€) cubre el coste real de configuración inicial (credenciales de WhatsApp, integración con el calendario, primeras automatizaciones) y actúa como filtro de compromiso: un cliente que paga un fee de entrada, por pequeño que sea, se compromete más con el proceso de onboarding que uno que empieza gratis. La suscripción en tres escalones (en lugar de un precio único) permite capturar tanto al negocio que solo quiere resolver el síntoma más doloroso (START) como al que quiere convertir a FARO en su equipo de operaciones de facto (OPS), sin tener que rediseñar el pricing cuando un cliente pide "más".

**Ventajas.** Ingreso recurrente y predecible (a diferencia de un modelo de proyectos puntuales), con expansión de ingreso natural dentro de la misma cuenta (upsell de START a GROW a OPS) en lugar de depender exclusivamente de nueva adquisición.

**Riesgos.** El riesgo central, señalado explícitamente en la validación de hipótesis (ver 4), es si 149€/mes deja margen suficiente si el cliente exige soporte desproporcionado o automatizaciones nuevas constantes fuera de lo pactado. Esto exige definir con precisión qué incluye cada plan y estandarizar entre el 80% y el 90% del servicio — la personalización es el enemigo silencioso del margen en un modelo de suscripción con precio fijo.

**Evolución futura.** El marketplace de automatizaciones y las plantillas reutilizables (ver Recursos clave) son la vía para que el ingreso adicional no dependa de horas de trabajo humano por cliente, sino de activos ya construidos que se venden repetidamente con coste marginal casi nulo.

### 1.6 Recursos clave

**Qué incluye.** El conocimiento acumulado de procesos operativos de pyme de servicios (el activo menos replicable), la infraestructura técnica (n8n, OpenAI/Claude, WhatsApp Business API, Google Workspace), la documentación y metodología propia, la marca FARO (ver Fase 1) y, de forma creciente, una biblioteca de automatizaciones reutilizables ya probadas en clientes reales.

**Por qué se diseña así.** De estos recursos, solo dos son defendibles a medio plazo: el conocimiento de procesos y la biblioteca de automatizaciones reutilizables. La infraestructura técnica (n8n, OpenAI) es un commodity al alcance de cualquier competidor con tiempo y conocimiento técnico equivalente — ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md` (Fase 1) y su desarrollo ampliado en la sección 8 de este documento (Riesgos del modelo → Competencia).

**Ventajas.** Cada nueva automatización construida para un cliente, si se diseña de forma reutilizable desde el principio (parametrizada, no hardcodeada a un cliente concreto), se convierte en un activo que reduce el coste marginal de servir al siguiente cliente similar.

**Riesgos.** Si las automatizaciones se construyen de forma ad-hoc para cada negocio sin disciplina de reutilización, el "recurso clave" se convierte en una carga de mantenimiento que crece linealmente con cada cliente nuevo, erosionando el margen exactamen el punto señalado como riesgo en Fuentes de ingresos.

**Evolución futura.** La meta a medio plazo es que el 80-90% de cada implementación nueva provenga de la biblioteca ya existente, reservando el trabajo a medida solo para el 10-20% que de verdad diferencia a un negocio de otro.

### 1.7 Actividades clave

**Qué incluye.** Análisis de procesos del negocio, diseño de la automatización (no solo construcción técnica), implementación, integración con las herramientas ya usadas por el negocio, mantenimiento, optimización continua, soporte al cliente, e investigación y desarrollo de nuevas automatizaciones reutilizables.

**Por qué se diseña así.** La actividad que más valor genera y menos se parece a lo que hace un desarrollador freelance de automatizaciones es el análisis y diseño de procesos — decidir qué automatizar y en qué orden, no solo cómo construirlo. Colocar esta actividad explícitamente en primer lugar (antes de "implementación") reafirma la posición estratégica de la Fase 1: FARO vende criterio, no ejecución técnica.

**Ventajas.** Separar análisis/diseño de implementación permite, a futuro, que la implementación se delegue (a un colaborador técnico, a plantillas ya construidas) sin perder el activo diferencial, que es el criterio de diseño.

**Riesgos.** Mientras exista una sola persona en FARO, estas siete actividades compiten por el mismo tiempo finito. El riesgo de sobrecarga operativa que FARO vende resolver a sus clientes es exactamente el riesgo que FARO corre internamente si crece sin disciplina de priorización.

**Evolución futura.** La incorporación de un primer colaborador (soporte técnico o implementación) se plantea en el roadmap en cuanto el tiempo dedicado a mantenimiento y soporte reactivo supere de forma sostenida el tiempo dedicado a análisis y diseño — señal de que la fundadora se está convirtiendo en operadora en lugar de estratega.

### 1.8 Socios clave

**Qué incluye.** Proveedores de infraestructura de IA (OpenAI, Anthropic), la plataforma de automatización (n8n), proveedores de infraestructura (Google Workspace, hosting), Meta (WhatsApp Business Platform), software de gestión sectorial (dental, veterinario, de peluquerías, de talleres — como aliados potenciales, no como integraciones técnicas actuales — ver restricción de PMS en el documento de MVP técnico), consultores legales (protección de datos de clientes, contratos de suscripción) y empresas informáticas locales que ya atienden a pymes de servicios en León y pueden actuar como canal (ver 1.3).

**Por qué se diseña así.** Ninguno de los socios tecnológicos (OpenAI, Anthropic, n8n, Meta) es una alianza estratégica en el sentido clásico — son proveedores intercambiables, y tratarlos como "socios clave" en el Canvas no debe confundirse con dependencia estratégica: si mañana cambia el proveedor de LLM, el negocio no cambia, porque el valor no está ahí (ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md`, Fase 1). El socio verdaderamente estratégico a cultivar es el software de gestión sectorial, no como integración técnica (bloqueada hoy por la falta de API pública de la mayoría), sino como relación institucional que podría abrirse en el futuro.

**Riesgos.** Dependencia operativa (no estratégica) de proveedores de IA y de Meta: un cambio de política de precios de WhatsApp Business API o de OpenAI afecta directamente al margen por cliente. El riesgo se mitiga manteniendo la arquitectura técnica desacoplada de un proveedor único (ver documento técnico: el prompt y la lógica de negocio no están atados irreversiblemente a un modelo concreto).

**Evolución futura.** Negociar acuerdos formales con software de gestión sectorial (incluso sin API pública, un acuerdo de exportación/importación de datos estructurado) es el hito que desbloquea el salto de pricing hacia el plan OPS y hacia clientes de mayor tamaño (ver Roadmap y la sección "Qué tendría que pasar para ser empresa de varios millones" del documento de tesis inicial).

### 1.9 Estructura de costes

**Qué incluye.** Costes fijos bajos (autónomo, dominio, hosting, herramientas de gestión básicas, contabilidad) y costes variables ligados directamente al número de negocios activos (consumo de LLM, WhatsApp Business API, tiempo de soporte). A esto se suman costes de adquisición (CAC: outreach, tiempo comercial, eventualmente publicidad y participación en eventos sectoriales locales).

**Por qué se diseña así.** Un modelo de coste variable ligado al uso (pagar por conversación y por token, no por licencia fija de una plataforma cara) es deliberado: mantiene el punto de equilibrio por cliente bajo desde el primer cliente, sin necesidad de un volumen mínimo para que la unidad económica funcione — coherente con la filosofía de MVP como servicio gestionado, no como SaaS con coste fijo de plataforma.

**Ventajas.** Márgenes brutos altos por cliente individual una vez superado el coste fijo de la estructura (ver Presupuesto MVP en el documento técnico), lo que permite que el negocio sea rentable incluso a escala reducida (5-10 clientes), sin necesidad de una ronda de inversión para sobrevivir.

**Riesgos.** El coste variable más difícil de controlar no es la infraestructura (predecible y barata), es el tiempo humano de soporte y personalización por cliente — el mismo riesgo señalado en Fuentes de ingresos. Sin estandarización, el coste marginal por cliente puede superar silenciosamente al ingreso marginal.

**Evolución futura.** A medida que la biblioteca de automatizaciones reutilizables crece (ver Recursos clave), el coste marginal de cada cliente nuevo tiende a caer, mientras que el ingreso marginal se mantiene o crece (upsell). Ese es el mecanismo concreto por el que este negocio mejora su margen con la escala, no solo con el volumen.

---

## 2. Lean Canvas

| Bloque | Contenido |
|---|---|
| **Problema** | (1) Mensajes de WhatsApp de clientes sin respuesta fuera de horario o en picos de carga. (2) Citas no confirmadas que generan huecos de agenda no facturables. (3) Tareas administrativas repetitivas que consumen el tiempo de quien atiende (a menudo el propio dueño) sin generar valor diferencial. |
| **Segmentos de clientes** | Pymes de servicios con agenda en la provincia de León (dental, veterinaria, fisioterapia/estética, peluquería, talleres, academias), con recepción limitada y uso intensivo de WhatsApp (ver detalle en BMC 1.1 e ICP en sección 3). |
| **Propuesta única de valor** | "Nos convertimos en el equipo externo que se asegura de que ningún proceso operativo de tu negocio se caiga — sin que tengas que aprender ni gestionar nada nuevo." |
| **Solución** | Servicio gestionado de automatización de procesos (WhatsApp, confirmaciones, seguimiento) construido y mantenido por FARO, entregado por suscripción mensual con mejora continua. |
| **Canales** | Outbound directo local, gremios y Cámara de Comercio de León, SEO/contenido propio, partners tecnológicos y de consultoría sectorial (ver BMC 1.3). |
| **Fuentes de ingresos** | Setup 300€ + suscripción mensual en tres planes (149€ / 299€ / 499€) — ver Pricing, sección 4. |
| **Estructura de costes** | Infraestructura variable por cliente (LLM, WhatsApp API), costes fijos mínimos, tiempo de soporte y coste de adquisición (ver BMC 1.9). |
| **Métricas clave** | Nº de negocios activos, MRR, churn mensual, tiempo de soporte por cliente, tasa de conversión de llamada a contrato, % de servicio estandarizado vs. a medida. |
| **Ventaja injusta** | Conocimiento acumulado y verificado de qué automatizar en una pyme leonesa con agenda y en qué orden, más una red de confianza local (FELE, Cámara de Comercio) difícil de replicar por un competidor de fuera del territorio — no solo la tecnología (ver Diferenciación en `FARO_ESTRATEGIA_MARCA.md`, Fase 1). |

---

## 3. ICP (Ideal Customer Profile) y Buyer Persona

### 3.1 ICP — perfil de cliente ideal

*(Actualizado tras el pivote — ver nota en 1.1. Versión anterior, específica de clínicas dentales a nivel nacional, archivada en el historial de git de este documento, no se repite aquí.)*

- Pyme de servicios con sede en la provincia de León (ciudad de León o alrededores en una primera fase), de cualquiera de estos verticales iniciales: clínicas dentales, veterinarias, centros de fisioterapia/estética, peluquerías y salones de belleza, talleres mecánicos, academias — la lista se amplía según lo que confirmen FELE/Cámara de Comercio como sectores con más señal de dolor real, no es cerrada.
- Equipo pequeño: entre el propietario en solitario y hasta 5-6 empleados, sin departamento administrativo dedicado — la recepción o atención al cliente la hace el propio dueño o, como mucho, una persona.
- Volumen de contactos (WhatsApp, teléfono, presencial) suficiente para que perder uno duela de verdad — el número exacto varía mucho por vertical, no se fija un rango único como en el ICP dental original; se valida caso a caso en la sesión de diagnóstico.
- Puede o no tener ya un software de gestión implantado — a diferencia del ICP dental, no es un requisito, es una variable a identificar en la conversación (cambia el enfoque de "conectar con lo que ya tienes" a "ser la primera herramienta digital del negocio").
- Propietario o gerente con capacidad de decisión de compra sin aprobación externa — igual que en el ICP original, descarta franquicias o cadenas con compra centralizada.
- Señal de dolor explícita y verbalizable: menciona espontáneamente que "se le escapan clientes por WhatsApp", "no da abasto respondiendo fuera de horario", o "se le olvida confirmar/recordar citas" — el síntoma es el mismo en cualquier vertical, cambia solo el contexto.

### 3.2 Buyer persona — "el dueño que hace de todo"

*(Sustituye a "Marta, gerente de clínica" del ICP dental original — la psicología de fondo es la misma, el contexto de negocio ya no es fijo.)*

Representa a un propietario o gerente de una pyme leonesa pequeña — puede ser dueño de una peluquería, una clínica veterinaria o un taller, hombre o mujer, entre 30 y 55 años — que hace de todo: atiende al cliente, lleva la agenda, y además ejerce su oficio (corta pelo, opera animales, repara coches). No tiene tiempo ni ganas de aprender "otra herramienta más" y, como Marta en el modelo original, a menudo ya ha probado y abandonado algún software o app que prometía mucho y le generó más trabajo de gestión, no menos. Revisa el WhatsApp del negocio a deshora — por la noche, el fin de semana — porque sabe que si no lo hace, pierde clientes que no van a esperar a que abra al día siguiente.

No busca "digitalizarse" como objetivo en sí — busca dejar de ser el cuello de botella de su propio negocio. Decide comprar cuando alguien le demuestra, con números de su propio negocio (no una proyección genérica), que el problema tiene un coste concreto, y cuando la recomendación viene de alguien de confianza en su misma red — un gremio, la Cámara de Comercio, u otro propietario de León al que conoce.

### 3.3 Customer Journey

**Conciencia.** El propietario no busca activamente "automatización para pymes" — el problema se presenta como frustración recurrente (WhatsApp fuera de horario, cita olvidada), no como categoría de compra. En León, la conciencia se genera sobre todo por contacto directo (outbound local, gremios, Cámara de Comercio) más que por búsqueda online — el territorio pequeño hace que el boca a boca pese más que en un mercado nacional disperso.

**Consideración.** Se agenda la llamada de diagnóstico de 15-30 minutos precisamente porque no se pide comprar nada todavía — el marco de "diagnóstico, no venta" reduce la fricción más que cualquier argumento de producto, y en León se refuerza si la introducción viene de un gremio o de un propietario conocido, no en frío.

**Decisión.** El cierre ocurre cuando el cálculo de ROI se hace con los números reales de ese negocio concreto (no un ejemplo genérico de otro vertical) y cuando queda claro qué NO incluye el servicio todavía — la honestidad de alcance sigue reduciendo el riesgo percibido, igual que en el modelo original.

**Onboarding.** Las primeras dos semanas siguen siendo críticas, con un matiz nuevo: si no había software de gestión previo, el onboarding tiene que cubrir también la curva de aprendizaje de "primera herramienta digital", no solo la conexión con un sistema ya conocido.

**Retención y expansión.** Igual que en el modelo original — la revisión periódica (BMC 1.4) es el mecanismo por el que se pasa de START a GROW/OPS, con datos propios como argumento, no presión comercial.

**Referencia.** León es, si acaso, más gremial que el sector dental nacional: la red de FELE, la Cámara de Comercio y las asociaciones sectoriales locales conectan a propietarios de negocios muy distintos entre sí en un territorio pequeño. Un cliente satisfecho en León es, potencialmente, un canal de adquisición todavía más barato que en el modelo dental disperso por España, precisamente por lo compacta que es la red de confianza local.

---

## 4. Pricing

| Plan | Precio | Para quién | Qué incluye |
|---|---|---|---|
| **Setup** | 300€ (pago único) | Todos los planes | Configuración de credenciales (WhatsApp Business, calendario), primera automatización activa, prueba end-to-end antes de producción. |
| **START** | 149€/mes | Negocio que quiere resolver el síntoma más doloroso (WhatsApp sin respuesta) | 1 automatización principal activa, soporte por email, revisión trimestral. |
| **GROW** | 299€/mes | Negocio que ya confía en el modelo y quiere ampliar cobertura | Hasta 3 automatizaciones activas (WhatsApp + confirmación de cita + seguimiento de presupuestos, por ejemplo), soporte prioritario, revisión mensual. |
| **OPS** | 499€/mes | Negocio que quiere que FARO actúe como su equipo de operaciones externo | Automatizaciones ilimitadas dentro del catálogo estandarizado, soporte directo, sesión mensual de optimización de procesos, prioridad en nuevas automatizaciones del catálogo. |

El fee de setup no es un ítem de beneficio para FARO — es un filtro de compromiso y una cobertura del coste real de las primeras horas de implementación, que no deben subsidiarse con el margen de la suscripción desde el primer mes.

**Mientras no exista ningún cliente de pago**, este pricing no cambia — ver `FARO_PROCESO_COMERCIAL.md` sección 13 (Fase de clientes fundadores) para qué se ofrece a los primeros clientes sin tocar estos precios ni recurrir a descuentos.

### 4.1 Plan LITE — diseñado, no activado

Existe un cuarto plan ya diseñado (procedente de un kit de prospección presencial, `Kit 3.0 — One-pager A4 + Tarjeta`, hoy retirado) que no forma parte del pricing activo hasta que se decida activarlo explícitamente:

| Plan | Precio | Para quién | Qué incluye |
|---|---|---|---|
| **LITE** | 99€/mes · 0€ setup ahora (después 150€) · fase de validación, máx. 6 meses | Negocio que quiere probar con el mínimo riesgo posible | 1 automatización, soporte por email, onboarding presencial reducido a 1h |

A diferencia de la nota de "clientes fundadores" (sección 13 de `FARO_PROCESO_COMERCIAL.md`, que congela precio pero no lo reduce), LITE sí es un precio de entrada más bajo y con setup diferido — es una estructura de pricing distinta (coherente con `FARO_VENTA_ADAPTATIVA.md`, principio 5: "el pricing debería poder adaptarse en estructura antes que en precio base, según el perfil"), pensada para el comprador más conservador del espectro de riesgo, no para todos los primeros clientes por defecto. El mismo material de origen definía una prospección presencial acotada a León y Castilla y León (visita física con one-pager y tarjeta), más estrecha que el ICP nacional ya definido en la sección 3.1 — válida como canal complementario local, no como sustituto del outbound digital de `FARO_PROCESO_COMERCIAL.md` sección 2.

**Antes de activar LITE**, decidir explícitamente: (1) si convive con la Fase de clientes fundadores o la sustituye para el perfil conservador, (2) qué pasa a los 6 meses si el cliente quiere continuar, (3) si el fee de 150€ diferido se cobra igual si el cliente cancela antes del mes 6.

---

## 5. MVP — por qué no un SaaS

**Por qué no construir un SaaS desde el día 1.** Un SaaS exige que el cliente configure, entienda y mantenga la herramienta — exactamente lo contrario de la propuesta de valor de FARO ("sin que tengas que aprender ni gestionar nada nuevo"). Construir un SaaS también obliga a invertir en interfaz, en soporte de autoservicio y en generalización del producto antes de saber, con datos reales, qué automatización concreta genera retención. Validar primero como servicio gestionado invierte el orden de riesgo: se aprende qué automatizar y por qué el cliente paga, antes de invertir en construir una plataforma que generalice ese aprendizaje.

**Objetivo del MVP.** No es "que a los negocios les guste la IA" ni "que les guste n8n". Es una pregunta más estrecha y más dura: **¿paga el negocio una suscripción mensual, de forma sostenida, porque siente que su negocio funciona mejor?** Concretamente: conseguir diez negocios que paguen todos los meses sin necesidad de perseguir el cobro ni justificar el valor cada vez.

**Alcance.** Una sola automatización principal por cliente en la fase de validación (por ejemplo, seguimiento automático de clientes que escribieron y no llegaron a reservar cita, o el par de flujos descritos en el documento técnico: respuesta fuera de horario y confirmación de cita), sin dashboard — el resumen llega por email, tal como se especifica en el documento técnico de la Fase 0.

**Tecnología.** n8n, Claude u OpenAI, Google Sheets, Google Calendar, Gmail y WhatsApp Business API — el mismo stack ya descrito en el documento técnico, deliberadamente simple y sin infraestructura de plataforma multi-tenant compleja.

**Tiempos.** Implementación de 24-48 horas por negocio una vez firmado el acuerdo, gracias a que la mayor parte de la automatización es reutilizable entre clientes similares (ver Recursos clave, 1.6) y no se construye desde cero cada vez.

**Costes.** Ver desglose detallado en `FARO_TESIS_MVP_60DIAS.md`, sección 2.8 — del orden de 30-75€ en el primer mes de infraestructura y operación piloto.

**Hipótesis que valida.** Las mismas cinco hipótesis (H1-H5) desarrolladas en el documento de tesis inicial, con un matiz adicional que este documento incorpora explícitamente: **¿prefieren los negocios pagar una suscripción o un proyecto puntual?** No todos los sectores de servicios aceptan con naturalidad una cuota recurrente por algo que perciben como "ya resuelto" tras la implementación inicial — esta es una hipótesis de forma de pago, distinta de la hipótesis de precio, y debe validarse por separado observando si los clientes piloto cuestionan la recurrencia del cobro una vez pasado el primer mes.

---

## 6. Roadmap (síntesis — desarrollo completo en el documento de escalabilidad, Fase futura)

1. **Meses 1-3**: validar con 3-10 negocios el modelo de suscripción con una automatización principal (fase ya cubierta en el plan de 60 días del documento inicial).
2. **Meses 4-9**: introducir los tres planes (START/GROW/OPS) una vez exista evidencia de qué automatizaciones adicionales piden los clientes con más frecuencia, y formalizar el catálogo reutilizable.
3. **Meses 10-18**: primer colaborador (soporte/implementación), inicio de canal de partners con casos de éxito documentados.
4. **Año 2 en adelante**: marketplace de automatizaciones, exploración de acuerdos con software de gestión sectorial, expansión geográfica o de vertical adyacente (ver tesis inicial, sección "qué tendría que pasar para ser empresa de varios millones").

---

## 7. KPIs a trackear

MRR, número de negocios activos, churn mensual, CAC, LTV, tiempo de soporte por negocio/mes, % de automatizaciones servidas desde catálogo estandarizado vs. a medida, tasa de conversión de llamada de configuración a contrato firmado, Net Revenue Retention (expansión menos churn dentro de la base ya existente).

---

## 8. Riesgos del modelo

**Adopción del mercado.** El riesgo no es que el problema no exista, es que el propietario lo tolere como "coste de hacer negocio" en vez de buscar activamente una solución — de ahí que H1 (tasa de respuesta a outreach) sea la primera hipótesis a validar, antes que cualquier decisión de producto.

**Rentabilidad.** Ya señalado en Fuentes de ingresos y Estructura de costes: el margen depende de estandarizar el 80-90% del servicio. Sin esa disciplina, cada cliente nuevo erosiona el margen del anterior en vez de mejorarlo.

**Escalabilidad.** Un modelo que depende del tiempo de una sola persona para vender, implementar y dar soporte no escala más allá de 10-15 clientes sin incorporar a alguien más — el roadmap lo anticipa (sección 6), pero el riesgo real es no reconocer la señal a tiempo y sobrecargar al fundador hasta el punto de degradar el servicio a los clientes existentes.

**Dependencia tecnológica.** FARO no depende de un proveedor de IA concreto en términos de producto (ver BMC 1.8), pero sí depende de las políticas de precio y de uso de Meta para WhatsApp Business — un cambio unilateral de precios de conversación por parte de Meta afecta directamente al margen variable por cliente, sin que FARO tenga capacidad de negociarlo.

**Personalización excesiva.** El riesgo silencioso más peligroso: cada cliente, de forma razonable, pedirá ajustes específicos a su caso. Sin un proceso explícito de decir "no" o de cobrar aparte por lo que no está en el catálogo estandarizado, el negocio deriva hacia un modelo de consultoría a medida disfrazado de suscripción, con la estructura de costes de una consultora pero el precio de un SaaS.

**Competencia.** El moat de FARO (ver Fase 1, Diferenciación) es de conocimiento y metodología, no de tecnología — lo que significa que la barrera de entrada para un competidor con el mismo criterio y la misma dedicación es baja en el corto plazo. La defensa no es impedir que aparezcan competidores, es acumular más rápido que ellos evidencia real de qué funciona (biblioteca de automatizaciones, casos documentados) y relación de confianza en el sector.

**Pricing.** El riesgo de fijar 149€ como entrada es doble: si es demasiado bajo, no cubre el coste real de soporte no estandarizado (ver Rentabilidad); si se percibe como alto frente a alternativas genéricas de automatización sin especialización, el cliente compara precio de herramienta en vez de valor de resultado — de ahí la importancia de que toda comunicación (ver Fase 1, pilares) anclada en resultado, no en funcionalidad.

**Retención.** Un cliente que no ve, con datos concretos, qué ha mejorado en su negocio mes a mes tiende a cuestionar la recurrencia del cobro a partir del tercer o cuarto mes — el mecanismo de revisión periódica (BMC 1.4) y el email de resumen (documento técnico) existen específicamente para hacer visible ese progreso sin necesidad de un dashboard.

---

*Fin de la Fase 2 — Modelo de negocio. Próxima fase: identidad visual (Fase 3), que traduce el posicionamiento (Fase 1) y la estructura de negocio (Fase 2) en un sistema visual coherente.*
