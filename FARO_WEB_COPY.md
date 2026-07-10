# FARO — Web Completa: Copy y SEO por Página

**Fase 5 del ecosistema empresarial FARO**
Copy final, listo para publicar, para cada página del sitio definido en `FARO_UX_ARQUITECTURA.md` (Fase 4). Aplica la voz de marca de la Fase 1 (resultado antes que tecnología, honestidad de alcance, cercanía profesional) y el pricing de la Fase 2.

**Nota sobre páginas legales**: las páginas de Privacidad, Términos y Cookies (protección de datos de pacientes, responsabilidad del servicio, LOPD-GDD/RGPD) no se redactan en este documento como texto definitivo. Son documentos con implicaciones legales reales para FARO y sus clientes — deben redactarse o al menos revisarse por un abogado especializado en protección de datos sanitarios antes de publicarse. Aquí se especifica solo qué debe cubrir cada una (ver sección 12).

---

## 0. Convenciones globales de SEO

- **Patrón de meta title**: `{Título específico de la página} — FARO` o `{Título específico} — {contexto de la página}` con "FARO" en el título (al inicio o al final, según lo que lea mejor en cada página) — separador em dash (`—`), no barra vertical. Ver los ejemplos de cada página en este documento, que son los que se implementaron literalmente.
- **Meta description por defecto** (fallback): "FARO automatiza y mejora continuamente los procesos operativos de tu clínica dental: WhatsApp, confirmaciones de cita y seguimiento de pacientes. Sin software que aprender."
- **Open Graph**: imagen por defecto = wordmark horizontal sobre fondo Azul Faro (`#1B3A4B`), 1200×630px. **Pendiente**: hoy todas las páginas usan `/assets/img/favicon.svg` como `og:image` (un SVG no se renderiza en la mayoría de redes sociales) — falta encargar/generar el PNG 1200×630 real antes de compartir enlaces de FARO en redes.
- **Idioma**: `es-ES` en todo el sitio, `hreflang` no aplica en el lanzamiento (mercado único España).
- **Schema global**: `Organization` (nombre, logo, descripción) repetido en el `<head>` de cada página de contenido — el sitio no tiene un layout compartido real (es HTML estático sin build), así que "global" significa "el mismo bloque copiado en cada página", no un include único. `sameAs` de LinkedIn queda pendiente de añadir cuando exista el perfil. `LocalBusiness` no aplica (FARO no atiende presencialmente al público, es B2B remoto).

---

## 1. Página de Inicio (`/`)

**Objetivo**: que un propietario/gerente de clínica entienda en 15 segundos qué resuelve FARO y decida si vale la pena seguir leyendo o agendar directamente.

**Meta title**: `FARO — Ningún WhatsApp de tu clínica se queda sin responder`
**Meta description**: `FARO es el equipo externo que automatiza y mejora cada mes los procesos de tu clínica dental: WhatsApp, confirmaciones de cita y seguimiento de pacientes. Agenda un diagnóstico gratuito de 15 minutos.`

### Hero

**H1**: Que ningún paciente que te escribe se quede sin respuesta.

**Subhero**: FARO es el equipo externo que automatiza y mejora, mes a mes, los procesos que hoy dependen de que tu recepción llegue a todo. Sin software que aprender. Sin proyectos eternos.

**CTA primario**: Agenda tu diagnóstico gratuito (15 min)
**CTA secundario**: Ver cómo funciona

### Bloque de problema ("¿Te suena esto?")

- **Un sábado por la noche, un paciente nuevo escribe por WhatsApp.** Nadie lo ve hasta el lunes. Para entonces, ya ha escrito a otra clínica.
- **Un paciente tiene cita el martes y no la confirma.** El hueco se descubre vacío el mismo martes, cuando ya no hay tiempo de ofrecerlo a nadie más.
- **Tu recepción hace, cada día, las mismas quince tareas repetitivas.** El tiempo que eso consume es tiempo que no dedican a los pacientes que ya están delante.

### Cómo funciona (3 pasos)

1. **Diagnóstico** — Una llamada de 15 minutos, sin compromiso, para ver dónde se te escapan pacientes o citas.
2. **Implementación** — Configuramos la primera automatización en 24-48 horas. Tú no tienes que aprender nada nuevo.
3. **Mejora continua** — Cada mes revisamos qué más se puede automatizar. Tu clínica funciona un poco mejor que el mes anterior.

### Honestidad de alcance

**No prometemos lo que no podemos cumplir.** Hoy, FARO no se integra con tu programa de gestión (Gesden y similares no lo permiten todavía), no tiene un dashboard que tengas que aprender a usar, y no gestiona campañas de marketing. Hace una cosa muy concreta, muy bien: que los procesos que hoy dependen de que una persona esté disponible las 24 horas, dejen de fallar.

### CTA final

**H2**: ¿Cuánto te está costando cada mensaje sin responder?
Calcula tu caso en 2 minutos y agenda una llamada para verlo con detalle.
**CTA**: Calcular ahora

---

## 2. Cómo funciona (`/como-funciona`)

**Meta title**: `Cómo funciona FARO — Automatización operativa para clínicas dentales`
**Meta description**: `Descubre cómo FARO analiza, automatiza y mejora los procesos de tu clínica dental cada mes: sin dashboards que aprender, sin proyectos técnicos que gestionar.`

**H1**: No te vendemos una herramienta. Nos hacemos cargo del proceso.

**Introducción**: La mayoría de soluciones de automatización te entregan un panel de control y te dejan a ti la responsabilidad de configurarlo, revisarlo y ajustarlo. FARO funciona al revés: nosotros analizamos qué proceso se está cayendo en tu clínica, lo automatizamos, y seguimos ajustándolo cada mes. Tu única tarea es decirnos qué te está pasando.

**Bloque "Lo que hacemos por ti"** (con iconos de proceso, no de tecnología, según Fase 3):
- Analizamos cómo funciona hoy tu recepción y tu WhatsApp.
- Diseñamos la automatización concreta que resuelve el punto que más te duele.
- La implementamos y la probamos antes de que la vea un solo paciente real.
- Te avisamos cada día de lo que ha pasado, en un email de dos minutos de lectura.
- Cada mes, revisamos contigo qué más merece automatizarse.

**Bloque "Lo que no hacemos (todavía)"**: reutiliza el componente de honestidad de alcance de la Fase 4 — integración con tu programa de gestión, dashboard, marketing y captación de pacientes nuevos.

**CTA**: Ver qué automatizaciones incluye cada plan → `/precios`

---

## 3. Servicios

### 3.1 Página general de Servicios (`/servicios`)

**Meta title**: `Servicios FARO — Automatizaciones para clínicas dentales`
**Meta description**: `WhatsApp sin respuesta, confirmación de citas y seguimiento de pacientes: las automatizaciones de FARO para que tu clínica no pierda ni un paciente por un proceso que falla.`

**H1**: Tres procesos que, sin automatizar, cuestan dinero todos los meses.

Tarjetas hacia las 3 sub-páginas, cada una con el titular de dolor + un dato de impacto (tomado de la tesis inicial, sección 1.4) + enlace "Ver cómo funciona".

### 3.2 WhatsApp sin respuesta (`/servicios/whatsapp-sin-respuesta`)

**Meta title**: `WhatsApp sin respuesta en tu clínica dental — Solución FARO`
**Meta description**: `El WhatsApp de tu clínica no descansa, pero tu equipo sí. FARO responde automáticamente fuera de horario para que ningún paciente nuevo se quede sin respuesta.`

**H1**: Fuera de horario, tu clínica sigue respondiendo.

**Cuerpo**: Un paciente que escribe un sábado a las 22:00 no está pensando en tu horario de apertura — está decidiendo, en ese momento, si confía en tu clínica o prueba con la siguiente de la lista. FARO responde en menos de un minuto, de forma profesional, sin prometer nada que no se pueda cumplir: confirma que el mensaje se ha recibido, da la información básica que el paciente necesita, y si detecta una urgencia real, avisa a tu equipo de inmediato — no espera al lunes.

**Antes / Después**:
- **Antes**: el mensaje se queda sin leer hasta que alguien abre WhatsApp el lunes por la mañana, junto a otros veinte mensajes acumulados.
- **Después**: el paciente recibe respuesta en el momento, y tu equipo llega el lunes con la conversación ya avanzada, no con una bandeja de entrada que gestionar desde cero.

**FAQ de esta página**:
- *¿El paciente sabe que le responde un sistema automático?* Sí — la comunicación es transparente sobre esto cuando es relevante, nunca se hace pasar por una persona en una conversación que lo requiera.
- *¿Qué pasa si el paciente pregunta algo que el sistema no sabe responder?* Se le indica que el equipo le contestará personalmente en cuanto abra la clínica, y queda registrado para que lo veas en tu resumen diario.

**CTA**: Ver precio de este servicio → `/precios`

### 3.3 Confirmación de citas (`/servicios/confirmacion-de-citas`)

**Meta title**: `Reduce los huecos de agenda por no-shows — FARO`
**Meta description**: `FARO envía recordatorios automáticos 24h antes de cada cita y gestiona la confirmación por WhatsApp, para que los huecos de agenda se detecten con tiempo de reaccionar.`

**H1**: Que un hueco de agenda se sepa el día antes, no el mismo día.

**Cuerpo**: Cada cita a la que un paciente no acude sin avisar es un gabinete parado que no factura. FARO envía un recordatorio 24 horas antes, con opción de confirmar con un botón. Si el paciente indica que no puede venir, tu equipo lo sabe con tiempo suficiente para ofrecer ese hueco a otro paciente en lista de espera — en vez de descubrirlo cuando ya es tarde para hacer nada.

**Antes / Después**:
- **Antes**: el hueco se descubre a la hora de la cita, sin margen para reaccionar.
- **Después**: sabes con 24 horas de antelación qué citas están confirmadas, cuáles necesitan seguimiento y cuáles se han caído — todo en el email de resumen del día anterior.

**FAQ de esta página**:
- *¿Qué pasa si el paciente no responde al recordatorio?* Queda marcado como "sin respuesta" en tu resumen diario para que tu equipo decida si llamar.
- *¿Puede el paciente cancelar directamente por WhatsApp?* Puede indicar que necesita cambiarla; la reprogramación la gestiona tu equipo, FARO no mueve citas de forma autónoma sin confirmación humana.

**CTA**: Ver precio de este servicio → `/precios`

### 3.4 Seguimiento de pacientes (`/servicios/seguimiento-de-pacientes`)

**Meta title**: `Seguimiento automático de pacientes — FARO`
**Meta description**: `Pacientes que preguntaron y no reservaron, presupuestos que nadie volvió a mencionar: FARO hace seguimiento automático para que ningún contacto se pierda por falta de tiempo.`

**H1**: El paciente que preguntó y no volvió a saber de ti.

**Cuerpo**: No todos los contactos se pierden por falta de respuesta inmediata — muchos se pierden después, cuando alguien preguntó, recibió un presupuesto o mostró interés, y nadie tuvo tiempo de volver a escribirle. FARO hace ese seguimiento por ti, en el momento adecuado, sin que dependa de que tu equipo se acuerde entre paciente y paciente. *(Disponible en los planes GROW y OPS — ver `/precios`.)*

**CTA**: Ver precio de este servicio → `/precios`

---

## 4. Precios (`/precios`)

**Meta title**: `Precios FARO — Planes desde 149€/mes para clínicas dentales`
**Meta description**: `START, GROW y OPS: tres planes de suscripción para automatizar los procesos de tu clínica dental. Sin permanencia forzada, con implementación en 24-48 horas.`

**H1**: Un plan para cada momento de tu clínica.

**Subhero**: Todos los planes incluyen implementación, soporte y mejora continua. La diferencia está en cuántos procesos automatizamos y con qué prioridad.

### Tarjetas de plan

**START — 149€/mes**
*Para empezar a resolver el síntoma que más te duele.*
- 1 automatización activa (a elegir: WhatsApp fuera de horario o confirmación de cita)
- Soporte por email
- Revisión de resultados cada trimestre

**GROW — 299€/mes** — *el más elegido*
*Para cubrir todo el recorrido del paciente.*
- Hasta 3 automatizaciones activas
- Soporte prioritario
- Revisión de resultados cada mes

**OPS — 499€/mes**
*Para que FARO sea tu equipo de operaciones externo.*
- Automatizaciones ilimitadas dentro de nuestro catálogo
- Soporte directo
- Sesión mensual de optimización de procesos

**Implementación inicial**: 300€ (pago único, todos los planes) — cubre la configuración de tu WhatsApp Business, la primera automatización activa y las pruebas antes de ponerla en marcha con pacientes reales.

**Nota de clientes fundadores** (mientras no exista ningún caso de éxito público, ver `FARO_PROCESO_COMERCIAL.md` sección 13): *Eres de las primeras clínicas con las que trabajamos: el precio no cambia respecto al de arriba, pero si más adelante sube para clientes nuevos, el tuyo queda congelado mientras sigas con nosotros — y la implementación la llevas directamente con la fundadora, no con un proceso de soporte todavía por rodar.* Retirar esta nota en cuanto se cierre la fase de clientes fundadores (hito definido en esa misma sección, no una fecha).

### Objeciones de precio (acordeón)

- **¿Por qué suscripción y no un pago único?** Porque el trabajo no termina en la implementación. Cada mes revisamos qué está funcionando y qué se puede mejorar — igual que un gestor no te hace la contabilidad de un año y desaparece.
- **¿Hay permanencia mínima?** No. Si en cualquier momento decides que no te aporta valor, puedes darte de baja sin penalización a partir del segundo mes.
- **¿Qué pasa si necesito algo que no está en el catálogo?** Lo hablamos en la sesión de optimización y te decimos con honestidad si encaja en tu plan actual o si requiere un desarrollo aparte.
- **No tenéis casos de éxito, ¿cómo sé que esto funciona?** *(retirar cuando se cierre la fase de clientes fundadores)* Tienes razón, sois de las primeras clínicas con las que trabajamos, y no te lo vamos a esconder. A cambio, tienes atención directa de la fundadora desde el primer día y un cálculo de ROI hecho con tus números reales, no con los de otra clínica. Y como no hay permanencia, si en las primeras semanas ves que no aporta valor, lo dejamos ahí.

**CTA**: Agenda tu diagnóstico gratuito antes de decidir → `/diagnostico`

---

## 5. Diagnóstico (`/diagnostico`)

**Meta title**: `Calcula cuánto te cuesta un WhatsApp sin responder — FARO`
**Meta description**: `Calculadora gratuita: descubre cuánto le puede estar costando a tu clínica cada mensaje de WhatsApp sin responder y cada cita sin confirmar.`

**H1**: ¿Cuánto te cuesta, en euros, lo que hoy se te escapa?

**Formulario** (campos: nº de gabinetes, mensajes de WhatsApp/día aproximados, ciudad, email de contacto).

**Resultado** (tras enviar el formulario): presenta un rango estimado de ingreso potencial recuperable al mes, usando la misma lógica de cálculo de la tesis inicial (sección 1.4), con la nota explícita: *"Esto es una estimación con datos de sector, no una promesa. En tu llamada de diagnóstico ajustamos el cálculo con tus números reales."*

**CTA post-cálculo**: Agenda tu llamada de 15 minutos para revisarlo con detalle.

---

## 6. Casos de éxito (`/casos-de-exito`)

**Meta title**: `Casos de éxito — Clínicas que ya trabajan con FARO`
**Meta description**: `Cómo clínicas dentales de tamaño medio han reducido mensajes sin responder y huecos de agenda con FARO.`

**H1**: Clínicas reales, resultados reales.

**Nota de implementación**: esta página no debe publicarse con casos inventados. Hasta que existan clientes piloto reales con datos y permiso explícito de publicación, la página se sustituye por una versión honesta: *"Estamos trabajando con las primeras clínicas piloto. En cuanto tengamos resultados que podamos compartir con nombre y datos reales, los publicaremos aquí."* — coherente con el pilar de comunicación "prueba antes que promesa" de la Fase 1. Cuando existan casos reales, cada uno sigue la plantilla del wireframe de la Fase 4 (contexto, problema, solución, resultado medido, cita textual).

---

## 7. Sobre FARO (`/sobre-faro`)

**Meta title**: `Sobre FARO — Por qué existimos`
**Meta description**: `FARO nace para que las clínicas dentales dejen de perder pacientes por procesos que se caen, no por falta de pacientes interesados.`

**H1**: No creemos que tu clínica necesite más tecnología. Creemos que necesita que nada se caiga.

**Cuerpo**: usa la Historia de la marca desarrollada en la Fase 1 (sección "Historia de la marca"), adaptada a segunda persona y tono directo al lector, cerrando con el propósito ("Por qué existimos") también de la Fase 1.

**CTA**: Habla con nosotros → `/contacto`

---

## 8. Preguntas frecuentes (`/preguntas-frecuentes`)

**Meta title**: `Preguntas frecuentes sobre FARO`
**Meta description**: `Resolvemos las dudas más habituales sobre cómo funciona FARO, qué incluye cada plan y qué no hacemos todavía.`

**H1**: Antes de que preguntes, probablemente ya lo hemos pensado.

**Sobre el servicio**
- *¿FARO reemplaza a mi recepcionista?* No. FARO se encarga de lo que nadie puede atender las 24 horas — tu equipo sigue siendo quien atiende al paciente en persona y decide sobre los casos que requieren criterio humano.
- *¿Se integra con mi programa de gestión (Gesden, Clinic Cloud...)?* Hoy no, porque la mayoría de estos programas no ofrecen una vía abierta para ello. Las citas se gestionan de forma sencilla en paralelo, sin doble trabajo significativo para tu equipo.
- *¿Qué pasa si el sistema entiende mal a un paciente?* Está diseñado para no actuar cuando hay duda: si no está seguro de lo que quiere decir un paciente, lo marca para que tu equipo lo revise, en vez de arriesgarse a una respuesta incorrecta.

**Sobre precio y contrato**
- *¿Hay permanencia?* No, ver `/precios`.
- *¿Qué incluye el fee de implementación?* Ver `/precios`, sección de implementación inicial.

**Sobre datos y privacidad**
- *¿Dónde se guardan los datos de mis pacientes?* En infraestructura ubicada en la Unión Europea, con las medidas de protección de datos aplicables a datos de salud. *(Enlazar a `/legal/privacidad` una vez redactada por asesoría legal — ver sección 12.)*

**CTA**: ¿Tu pregunta no está aquí? → `/contacto`

---

## 9. Contacto (`/contacto`)

**Meta title**: `Contacto — FARO`
**Meta description**: `Habla con FARO. Agenda una llamada de 15 minutos o escríbenos directamente.`

**H1**: Hablemos de tu clínica, no de tecnología.

**Formulario**: nombre, clínica, email, teléfono, mensaje (opcional).
**Alternativa directa**: email y teléfono visibles, sin obligar a pasar por formulario.

---

## 10. Página de Gracias (`/gracias`)

**Meta title**: `Gracias — FARO` *(con `noindex` — página transaccional, no de posicionamiento)*

**H1**: Recibido. Te contactamos en menos de 24 horas laborables.

**Cuerpo**: Mientras tanto, esto es lo que puedes esperar de la llamada: 15 minutos, sin presentación de ventas, para entender cómo gestionas hoy tu WhatsApp y tus citas, y decirte con honestidad si FARO encaja en tu caso.

**Enlace secundario**: Mientras esperas, puedes leer cómo funciona → `/como-funciona`

---

## 11. Página 404

**Meta title**: `Página no encontrada — FARO` *(con `noindex`)*

**H1**: Esta página se nos ha escapado a nosotros también.

**Cuerpo**: Irónico, lo sabemos — pero esta sí la vemos nosotros, no un paciente tuyo. Vuelve al inicio o dinos qué buscabas.

**CTA**: Volver al inicio · Contactar

---

## 12. Páginas legales (`/legal/*`) — qué deben cubrir, no texto final

**Privacidad**: base legal de tratamiento de datos de pacientes finales (que FARO procesa por cuenta de la clínica, no como responsable directo — figura de encargado de tratamiento bajo RGPD), plazo de conservación, ubicación de los servidores (UE), derechos del interesado y procedimiento de ejercicio. **Requiere redacción/revisión de un abogado especializado en protección de datos sanitarios antes de publicar** — los datos de pacientes de una clínica dental incluyen categorías especiales de datos de salud bajo el RGPD, con requisitos reforzados.

**Términos y condiciones**: duración de la suscripción, condiciones de baja (ver "sin permanencia" en `/precios`), límites de responsabilidad del servicio (especialmente relevante dado que el sistema interactúa directamente con pacientes), condiciones de pago del fee de implementación y de la mensualidad.

**Cookies**: banner de consentimiento (solo cookies necesarias en el lanzamiento si no hay analítica de terceros con tracking; si se usa Google Analytics u otra herramienta con cookies no esenciales, banner de consentimiento previo obligatorio bajo la normativa española de cookies).

---

## 13. Footer (global)

**Columna 1**: Logo + elevator pitch corto (una frase de la Fase 1).
**Columna 2 — Producto**: Cómo funciona, Servicios, Precios.
**Columna 3 — Empresa**: Sobre FARO, Casos de éxito, Contacto.
**Columna 4 — Recursos**: Blog, Preguntas frecuentes.
**Línea legal inferior**: © FARO [año]. Enlaces a Privacidad, Términos, Cookies.

---

*Fin de la Fase 5 — Web completa. Próxima fase: estrategia SEO y calendario de contenidos (Fase 6), que define qué artículos de blog alimentan el enlazado interno ya previsto en esta fase.*
