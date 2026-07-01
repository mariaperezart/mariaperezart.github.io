# FARO — Estrategia SEO y Contenidos

**Fase 6 del ecosistema empresarial FARO**
Construye sobre la arquitectura del sitio (Fase 4) y el copy ya escrito (Fase 5). Define cómo FARO gana visibilidad orgánica sostenida, sabiendo que el canal principal de adquisición en los primeros 12 meses es el outbound directo (ver Fase 2, Canales) y que el SEO es una inversión que compone valor a partir del mes 6-9, no un canal de resultado inmediato.

---

## 1. Por qué SEO, y por qué no es el canal principal al inicio

El propietario de una clínica dental de 4-10 gabinetes no busca en Google "software de automatización con IA para clínicas dentales" — ese término no existe en su vocabulario hasta que alguien se lo presenta. Busca, en cambio, formulaciones ligadas a síntomas concretos: "cómo evitar que pacientes no acudan a la cita", "recordatorio automático citas WhatsApp", "reducir cancelaciones clínica dental". El SEO de FARO no compite por la categoría de producto (que el mercado todavía no busca activamente, ver tesis inicial, sección "por qué el mercado no está resuelto"), compite por el síntoma.

Esto tiene una consecuencia directa en la arquitectura de contenidos: el blog no existe para "hablar de IA aplicada a odontología" de forma genérica, existe para capturar al propietario o gerente en el momento exacto en que busca una solución a un problema operativo concreto, y conducirlo hacia la página de servicio correspondiente (enlazado interno, ver sección 6).

## 2. Keyword research — pilares y clusters temáticos

### Pilar 1 — WhatsApp y comunicación con el paciente
Cluster de keywords: *whatsapp clínica dental automático · respuesta automática whatsapp negocio · chatbot whatsapp para clínicas · cómo no perder pacientes por whatsapp · atención al paciente fuera de horario clínica*.
**Página pilar**: `/servicios/whatsapp-sin-respuesta`.

### Pilar 2 — Confirmación de citas y no-shows
Cluster de keywords: *reducir no shows clínica dental · recordatorio automático de citas · cómo confirmar citas por whatsapp · huecos de agenda clínica dental · pacientes que no acuden a la cita*.
**Página pilar**: `/servicios/confirmacion-de-citas`.

### Pilar 3 — Gestión y eficiencia operativa de la clínica
Cluster de keywords: *automatizar procesos clínica dental · digitalizar recepción clínica dental · reducir carga administrativa clínica · software gestión clínica dental (informativo, no transaccional) · cómo organizar mejor una clínica dental*.
**Página pilar**: `/como-funciona`.

### Pilar 4 — Seguimiento y retención de pacientes
Cluster de keywords: *seguimiento pacientes clínica dental · recuperar pacientes que no reservaron cita · pacientes inactivos clínica dental · fidelizar pacientes clínica dental*.
**Página pilar**: `/servicios/seguimiento-de-pacientes`.

### Pilar 5 — Comparativa y consideración (fondo de embudo)
Cluster de keywords: *alternativas a [herramienta genérica de automatización] para clínicas · cuánto cuesta automatizar una clínica dental · agencia vs software de automatización dental · precio automatización whatsapp clínica*.
**Página pilar**: `/precios` y artículos de blog comparativos.

**Por qué esta estructura de pilares.** Cada pilar corresponde exactamente a uno de los tres servicios (Fase 5) más un pilar de marca/categoría (Pilar 3) y un pilar de conversión (Pilar 5). Esto evita el error más común de SEO B2B: escribir contenido disperso sobre "tendencias del sector dental" que no enlaza a ninguna página de conversión y no construye autoridad temática coherente.

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
| 1 | ¿Cuántos pacientes pierde tu clínica por no responder WhatsApp a tiempo? | whatsapp clínica dental sin responder | Informativa | Dato de contexto → coste de la falta de respuesta → cómo medirlo en tu clínica | Enlaza a `/diagnostico` |
| 1 | Cómo reducir las cancelaciones de última hora en una clínica dental | reducir no shows clínica dental | Informativa | Causas habituales de no-show → recordatorio 24h como solución → caso ilustrativo | Enlaza a `/servicios/confirmacion-de-citas` |
| 2 | Recordatorio automático de citas por WhatsApp: guía práctica | recordatorio automático de citas whatsapp | Informativa/comercial | Qué es, cómo se implementa, qué plantillas exige Meta | Enlaza a `/servicios/confirmacion-de-citas` |
| 2 | Por qué tu recepción no da abasto (y no es un problema de personal) | carga administrativa clínica dental | Informativa | Diagnóstico del problema estructural → automatización como respuesta, no como recorte de personal | Enlaza a `/como-funciona` |
| 3 | Chatbot para clínica dental: qué puede y qué no puede hacer bien | chatbot whatsapp para clínicas | Comercial/informativa | Expectativas realistas → honestidad de alcance → diferencia FARO/chatbot genérico | Enlaza a `/servicios/whatsapp-sin-respuesta` |
| 3 | Cuánto cuesta automatizar la atención al paciente en una clínica dental | precio automatización whatsapp clínica | Transaccional | Desglose de costes de hacerlo internamente vs. por suscripción | Enlaza a `/precios` |
| 4 | Pacientes que preguntan y no reservan: cómo hacer seguimiento sin perseguir | recuperar pacientes que no reservaron cita | Informativa | Por qué se pierden, ventana de seguimiento óptima, automatización del proceso | Enlaza a `/servicios/seguimiento-de-pacientes` |
| 4 | Guía: qué automatizar primero en una clínica dental de 4 a 10 gabinetes | automatizar procesos clínica dental | Informativa | Framework de priorización (síntoma más doloroso primero) | Enlaza a `/diagnostico` |
| 5 | ¿Se integra la automatización con Gesden o Clinic Cloud? La respuesta honesta | integración software gestión dental | Informativa | Estado real de las APIs de PMS en España, qué se puede hacer hoy sin integración | Enlaza a `/preguntas-frecuentes` |
| 5 | Caso práctico: el coste real de un hueco de agenda vacío | huecos de agenda clínica dental | Informativa | Cálculo con cifras de sector (misma lógica que tesis inicial 1.4) | Enlaza a `/servicios/confirmacion-de-citas` |
| 6 | Agencia de marketing dental vs. automatización operativa: no es lo mismo | agencia marketing dental vs automatización | Comercial | Diferencia de foco (captación vs. operación), por qué se necesitan ambas pero no son sustitutas | Enlaza a `/sobre-faro` |
| 6 | Cómo montar un sistema de recordatorios de cita sin contratar más personal | recordatorio de citas sin personal | Informativa | Alternativa manual vs. automatizada, coste de oportunidad | Enlaza a `/precios` |
| 7-12 | (Repetir la lógica de los 5 pilares, alternando formato informativo de tofu y comercial de bofu, priorizando siempre keywords con intención de búsqueda verificable sobre volumen estimado) | — | — | — | — |

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

Dado que el sector trata con información de salud (aunque FARO no da consejo médico, el contexto es sanitario y Google aplica criterios YMYL —Your Money or Your Life— con más rigor), las señales de E-E-A-T son especialmente relevantes:

- **Autoría visible**: cada artículo firmado con nombre real y una breve bio que explique la experiencia de quien lo escribe con procesos de clínicas dentales — nunca contenido anónimo o firmado como "Equipo FARO" sin más.
- **Evidencia antes que afirmación**: cuando el artículo cite una cifra (coste de un no-show, porcentaje de mensajes fuera de horario), debe citar la fuente igual que se hace en la tesis inicial (sección 1.1-1.4) — nunca una cifra sin respaldo.
- **Actualización de contenido**: los artículos con datos de mercado (precios, normativa de WhatsApp Business, políticas de Meta) se revisan cada 6 meses y se actualiza `dateModified` — contenido desactualizado en un sector regulado daña la confianza más que no publicar.
- **Página "Sobre FARO"** (Fase 5) y perfil de LinkedIn de la fundadora como señales externas de autoría real, no una empresa anónima.

## 8. SEO local (alcance limitado, uso puntual)

FARO no es un negocio de atención presencial al público final, por lo que el SEO local clásico (Google Business Profile optimizado para búsquedas "cerca de mí") no es prioritario. Sin uso limitado y específico: perfil de Google Business Profile como empresa de servicios B2B (categoría "consultora de software" o equivalente), útil principalmente para reforzar señales de confianza (reseñas de clientes piloto) más que para captar tráfico de búsqueda local directa.

## 9. SEO programático (uso acotado, no masivo)

Landing pages generadas a partir de una plantilla común para apoyar el canal de outbound geográfico (ver Fase 2, Canales): `/lp/automatizacion-clinica-dental-[ciudad]` para las 15-20 ciudades españolas con mayor densidad de clínicas medianas (Madrid, Barcelona, Valencia, Sevilla, Bilbao, Zaragoza, Málaga...), con el mismo copy base de la Fase 5 adaptado con el nombre de la ciudad y, cuando exista, el caso de éxito de una clínica de esa zona. Esto se marca `noindex` para SEO orgánico si el contenido es sustancialmente idéntico entre ciudades (evita penalización por contenido duplicado) y se usa exclusivamente como destino de campañas de outbound o anuncios segmentados por geografía — no como estrategia de posicionamiento orgánico masivo, que Google penaliza cuando la diferenciación entre páginas es solo el nombre de la ciudad.

---

*Fin de la Fase 6 — SEO y contenidos. Próxima fase: el proceso comercial completo (Fase 7), que conecta el tráfico generado por este SEO y por el outbound directo con el cierre real de clientes.*
