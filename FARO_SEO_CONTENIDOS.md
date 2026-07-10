# FARO — Estrategia SEO y Contenidos

**Fase 6 del ecosistema empresarial FARO**
Construye sobre la arquitectura del sitio (Fase 4) y el copy ya escrito (Fase 5). Define cómo FARO gana visibilidad orgánica sostenida, sabiendo que el canal principal de adquisición en los primeros 12 meses es el outbound directo (ver Fase 2, Canales) y que el SEO es una inversión que compone valor a partir del mes 6-9, no un canal de resultado inmediato.

**Nota de pivote (ver `FARO_MODELO_NEGOCIO.md`, sección 1.1)**: esta estrategia describía originalmente un único vertical (clínicas dentales, mercado nacional). Se actualiza para reflejar el ICP ampliado — pyme de servicios con agenda en la provincia de León — lo que cambia dos cosas de fondo: (1) el eje de especialización pasa de vertical a territorio, así que el SEO local gana peso frente al SEO nacional de categoría (ver sección 8, reescrita), y (2) el keyword research ya no puede asumir un único vocabulario de sector — varía entre dental, veterinaria, peluquería o taller, aunque el síntoma de fondo (WhatsApp sin responder, citas sin confirmar) sea el mismo.

---

## 1. Por qué SEO, y por qué no es el canal principal al inicio

El propietario de una pyme leonesa con agenda no busca en Google "software de automatización con IA para pymes" — ese término no existe en su vocabulario hasta que alguien se lo presenta. Busca, en cambio, formulaciones ligadas a síntomas concretos y, cada vez más, con intención local: "cómo evitar que los clientes no acudan a la cita", "recordatorio automático citas WhatsApp León", "reducir cancelaciones peluquería" o "clínica dental León". El SEO de FARO no compite por la categoría de producto (que el mercado todavía no busca activamente, ver tesis inicial, sección "por qué el mercado no está resuelto"), compite por el síntoma, cruzado con la geografía.

Esto tiene una consecuencia directa en la arquitectura de contenidos: el blog no existe para "hablar de IA aplicada a un sector" de forma genérica, existe para capturar al propietario o gerente leonés en el momento exacto en que busca una solución a un problema operativo concreto, y conducirlo hacia la página de servicio correspondiente (enlazado interno, ver sección 6).

## 2. Keyword research — pilares y clusters temáticos

**Nota sobre variación por vertical**: los clusters siguientes muestran keywords formuladas para dental y para el conjunto de pymes leonesas de servicios como referencia — al ejecutar el calendario editorial (sección 4), cada artículo debe adaptar el vocabulario al vertical del cliente o prospecto que se quiere atraer (paciente/cliente, gabinete/agenda, clínica/negocio), no reutilizar el término dental como genérico por defecto.

### Pilar 1 — WhatsApp y comunicación con el cliente
Cluster de keywords: *whatsapp clínica dental automático León · respuesta automática whatsapp negocio · chatbot whatsapp para pymes · cómo no perder clientes por whatsapp · atención al cliente fuera de horario negocio León*.
**Página pilar**: `/servicios/whatsapp-sin-respuesta`.

### Pilar 2 — Confirmación de citas y no-shows
Cluster de keywords: *reducir no shows negocio con agenda León · recordatorio automático de citas whatsapp · cómo confirmar citas por whatsapp · huecos de agenda pyme · clientes que no acuden a la cita*.
**Página pilar**: `/servicios/confirmacion-de-citas`.

### Pilar 3 — Gestión y eficiencia operativa del negocio
Cluster de keywords: *automatizar procesos pyme León · digitalizar recepción negocio con agenda · reducir carga administrativa negocio pequeño · software gestión clínica/veterinaria/peluquería (informativo, no transaccional) · cómo organizar mejor un negocio con agenda*.
**Página pilar**: `/como-funciona`.

### Pilar 4 — Seguimiento y retención de clientes
Cluster de keywords: *seguimiento de clientes negocio con agenda · recuperar clientes que no reservaron cita · clientes inactivos pyme · fidelizar clientes negocio de servicios*.
**Página pilar**: `/servicios/seguimiento-de-pacientes`.

### Pilar 5 — Comparativa y consideración (fondo de embudo)
Cluster de keywords: *alternativas a [herramienta genérica de automatización] para pymes · cuánto cuesta automatizar un negocio con agenda · agencia vs software de automatización · precio automatización whatsapp negocio León*.
**Página pilar**: `/precios` y artículos de blog comparativos.

**Por qué esta estructura de pilares.** Cada pilar corresponde exactamente a uno de los tres servicios (Fase 5) más un pilar de marca/categoría (Pilar 3) y un pilar de conversión (Pilar 5). Esto evita el error más común de SEO B2B: escribir contenido disperso sobre "tendencias de un sector" que no enlaza a ninguna página de conversión y no construye autoridad temática coherente.

## 3. Arquitectura de topical authority (silo structure)

```
Página pilar (servicio) ← enlaza y recibe enlaces de → Artículos de cluster (blog)
        │                                                        │
        └──────────────── enlazado interno cruzado ─────────────┘
                                    │
                        Página de Precios / Diagnóstico
                              (destino final de conversión)
```

Cada artículo de blog debe enlazar, como mínimo, a: (1) su página pilar de servicio correspondiente, (2) un artículo relacionado del mismo cluster, (3) la página de `/diagnostico` o `/precios` cuando el artículo esté en fondo de embudo. Ningún artículo se publica como pieza aislada sin estos tres enlaces mínimos — es la regla que convierte contenido disperso en autoridad temática acumulativa.

## 4. Calendario editorial — primeros 12 meses

Ritmo: 2 artículos/mes (24 artículos en el año 1), realista para una sola persona con 15-25h/semana repartidas entre producto, ventas y contenido (ver Fase 2, Actividades clave). Cada artículo se detalla con título, keyword objetivo, intención de búsqueda, esquema de contenido y objetivo comercial.

| Mes | Título | Keyword objetivo | Intención | Esquema de contenido | Objetivo comercial |
|---|---|---|---|---|---|
| 1 | ¿Cuántos clientes pierde tu negocio en León por no responder WhatsApp a tiempo? | whatsapp negocio León sin responder | Informativa | Dato de contexto → coste de la falta de respuesta → cómo medirlo en tu negocio | Enlaza a `/diagnostico` |
| 1 | Cómo reducir las cancelaciones de última hora en un negocio con agenda | reducir no shows negocio agenda | Informativa | Causas habituales de no-show → recordatorio 24h como solución → caso ilustrativo | Enlaza a `/servicios/confirmacion-de-citas` |
| 2 | Recordatorio automático de citas por WhatsApp: guía práctica | recordatorio automático de citas whatsapp | Informativa/comercial | Qué es, cómo se implementa, qué plantillas exige Meta | Enlaza a `/servicios/confirmacion-de-citas` |
| 2 | Por qué tu recepción no da abasto (y no es un problema de personal) | carga administrativa negocio pequeño León | Informativa | Diagnóstico del problema estructural → automatización como respuesta, no como recorte de personal | Enlaza a `/como-funciona` |
| 3 | WhatsApp automático para clínicas dentales: qué puede y qué no puede hacer bien | whatsapp automático clínica dental | Comercial/informativa | Expectativas realistas → honestidad de alcance → diferencia FARO/chatbot genérico | Enlaza a `/servicios/whatsapp-sin-respuesta` |
| 3 | Cuánto cuesta automatizar la atención al cliente en un negocio pequeño | precio automatización whatsapp negocio | Transaccional | Desglose de costes de hacerlo internamente vs. por suscripción | Enlaza a `/precios` |
| 4 | Clientes que preguntan y no reservan: cómo hacer seguimiento sin perseguir | recuperar clientes que no reservaron cita | Informativa | Por qué se pierden, ventana de seguimiento óptima, automatización del proceso | Enlaza a `/servicios/seguimiento-de-pacientes` |
| 4 | Guía: qué automatizar primero en una peluquería o salón de belleza | automatizar procesos peluquería | Informativa | Framework de priorización (síntoma más doloroso primero), adaptado a un vertical no dental | Enlaza a `/diagnostico` |
| 5 | ¿Se integra la automatización con el software de gestión de mi sector? La respuesta honesta | integración software gestión clínica/veterinaria/peluquería | Informativa | Estado real de las APIs de los programas de gestión más comunes en cada vertical, qué se puede hacer hoy sin integración | Enlaza a `/preguntas-frecuentes` |
| 5 | Caso práctico: el coste real de un hueco de agenda vacío | huecos de agenda negocio con citas | Informativa | Cálculo con cifras de sector (misma lógica que tesis inicial 1.4) | Enlaza a `/servicios/confirmacion-de-citas` |
| 6 | Por qué las pymes de León confían más en un referido que en un anuncio | recomendación negocios León FELE Cámara de Comercio | Comercial | El peso de la red gremial local en la decisión de compra, por qué FARO se apoya en ella | Enlaza a `/sobre-faro` |
| 6 | Cómo montar un sistema de recordatorios de cita sin contratar más personal | recordatorio de citas sin personal | Informativa | Alternativa manual vs. automatizada, coste de oportunidad | Enlaza a `/precios` |
| 7-12 | (Repetir la lógica de los 5 pilares alternando vertical — dental, veterinaria, fisioterapia/estética, peluquería, taller, academia — y formato informativo de tofu y comercial de bofu, priorizando siempre keywords con intención de búsqueda verificable sobre volumen estimado; al menos un artículo por trimestre debe llevar el ángulo local de León explícito en el título o el H1) | — | — | — | — |

**Nota sobre "100 artículos".** El calendario anterior cubre el primer año con un ritmo sostenible por una sola persona (24 artículos). El listado se extiende de forma natural repitiendo la misma matriz de 5 pilares × variaciones de síntoma, formato (guía/caso práctico/comparativa) e intención (informativa/comercial) — la vía realista para llegar a 100+ piezas es sostener este ritmo durante 24-36 meses, no producir 100 artículos de golpe con calidad decreciente. Priorizar 24 artículos bien enlazados y verificados frente a 100 artículos genéricos es, además, mejor para EEAT (ver sección 7): Google penaliza contenido masivo sin profundidad real.

## 5. SEO técnico

- **Sitemap.xml** autogenerado, resubmitido en Google Search Console tras cada publicación de contenido nuevo.
- **Robots.txt** que permite rastreo completo salvo `/gracias` y páginas de agradecimiento (ya marcadas `noindex` en Fase 5).
- **Core Web Vitals**: al ser una web mayoritariamente estática (sin dashboard de cliente en el frontend público), el objetivo es LCP <2.5s y CLS <0.1 sin esfuerzo adicional si se evita JavaScript pesado innecesario — coherente con la simplicidad del sistema de diseño de la Fase 3.
- **URLs**: minúsculas, sin acentos, con guiones (`/servicios/whatsapp-sin-respuesta`), coherente con el mapa del sitio ya definido en la Fase 4.
- **Schema markup**: `Organization` global, `Article` en cada entrada de blog (con `author`, `datePublished`, `dateModified`), `FAQPage` en la página de Preguntas Frecuentes y en los bloques de FAQ de las páginas de servicio, `Product`/`Offer` en la página de Precios (con los tres planes como `AggregateOffer`).
- **Rich snippets prioritarios**: FAQ (alta probabilidad de aparecer en resultados enriquecidos dado el volumen de preguntas long-tail del sector) y breadcrumbs (coherente con la arquitectura de silo de la sección 3).

## 6. Enlazado interno — reglas concretas

Cada página de servicio (Fase 5) enlaza a los artículos de su cluster en cuanto existen (sección de "Para saber más" al final de la página). Cada artículo de blog enlaza hacia arriba a su página pilar en el primer tercio del contenido (no solo al final, donde el lector puede no llegar). La página de Inicio enlaza directamente a los 3 servicios (ya especificado en el wireframe de la Fase 4) y a los 2-3 artículos más recientes o más relevantes del blog en una sección "Recursos". Ningún artículo nuevo se publica sin al menos un enlace entrante desde una página ya indexada (evita contenido huérfano).

## 7. E-E-A-T (Experiencia, Especialización, Autoridad, Confianza)

En los verticales del universo FARO donde el negocio del cliente trata con información de salud (dental, veterinaria, fisioterapia), Google aplica criterios YMYL (Your Money or Your Life) con más rigor, aunque FARO en sí no da consejo médico — en el resto de verticales (peluquería, taller, academia) ese nivel de exigencia adicional no aplica. Con ese matiz, las señales de E-E-A-T siguen siendo relevantes en todo el sitio:

- **Autoría visible**: cada artículo firmado con nombre real y una breve bio que explique la experiencia de quien lo escribe con procesos de pymes de servicios — nunca contenido anónimo o firmado como "Equipo FARO" sin más.
- **Evidencia antes que afirmación**: cuando el artículo cite una cifra (coste de un no-show, porcentaje de mensajes fuera de horario), debe citar la fuente igual que se hace en la tesis inicial (sección 1.1-1.4) — nunca una cifra sin respaldo.
- **Actualización de contenido**: los artículos con datos de mercado (precios, normativa de WhatsApp Business, políticas de Meta) se revisan cada 6 meses y se actualiza `dateModified` — contenido desactualizado en un artículo sobre un vertical regulado (dental, veterinario) daña la confianza más que no publicar.
- **Página "Sobre FARO"** (Fase 5) y perfil de LinkedIn de la fundadora como señales externas de autoría real, no una empresa anónima.

## 8. SEO local — ahora un eje central, no un uso puntual

**Nota de pivote**: en la versión dental/nacional de esta estrategia, el SEO local se consideraba de alcance limitado porque FARO vendía a un mercado disperso por toda España. Con el pivote a León como territorio de especialización, esto se invierte: el SEO local pasa a ser uno de los ejes principales de la estrategia, no un uso puntual, porque el propio posicionamiento de marca ("el que mejor conoce cómo operan las pymes de León", ver `FARO_ESTRATEGIA_MARCA.md`) depende de ser visible precisamente en búsquedas con intención local.

- **Google Business Profile** optimizado como empresa de servicios B2B con sede en León (categoría "consultora de software" o equivalente), activamente gestionado — reseñas de clientes piloto, publicaciones periódicas, respuesta a preguntas — no un perfil pasivo.
- **Contenido con anclaje geográfico explícito**: al menos un artículo del calendario editorial por trimestre debe incluir "León" en el título o el H1 (ver ejemplos en sección 4), y las páginas de servicio deben poder mencionar la provincia sin que suene forzado (ya reflejado en el copy de la Fase 5).
- **Señales de proximidad con la red gremial**: menciones y, cuando sea posible, enlaces desde FELE, la Cámara de Comercio de León y asociaciones sectoriales locales — más valiosas para el posicionamiento local que backlinks genéricos de directorios nacionales.
- **Google Business Profile de los propios clientes**: cuando un cliente autoriza publicar su caso de éxito (`FARO_PROCESO_COMERCIAL.md`, sección 13), reforzar el enlace hacia su ficha de Google Business si la tiene, generando una señal de red local además del caso de éxito en sí.

## 9. SEO programático (uso acotado, adaptado al pivote de territorio a vertical)

**Nota de pivote**: en la versión anterior, el eje de escalado de landing pages era geográfico (una página por ciudad española, mismo vertical dental). Con León fijo como territorio, el eje de escalado pasa a ser el vertical: landing pages generadas a partir de una plantilla común para apoyar el outbound sectorial (ver Fase 2, Canales): `/lp/automatizacion-[vertical]-leon` para cada uno de los verticales iniciales (clínicas dentales, veterinarias, fisioterapia/estética, peluquerías, talleres, academias), con el mismo copy base de la Fase 5 adaptado al vocabulario de ese vertical y, cuando exista, el caso de éxito de un negocio de ese sector en León. Esto se marca `noindex` para SEO orgánico si el contenido es sustancialmente idéntico entre verticales (evita penalización por contenido duplicado) y se usa exclusivamente como destino de campañas de outbound o anuncios segmentados por sector — no como estrategia de posicionamiento orgánico masivo, que Google penaliza cuando la diferenciación entre páginas es solo el nombre del vertical.

---

*Fin de la Fase 6 — SEO y contenidos. Próxima fase: el proceso comercial completo (Fase 7), que conecta el tráfico generado por este SEO y por el outbound directo con el cierre real de clientes.*
