# FARO — MVP Landing de Captación + Seguimiento (Fase 0, oferta de entrada)

**Origen de este documento**: sustituye al concierge de WhatsApp (`FARO_MVP_CONCIERGE.md`) como primera oferta de validación, por decisión explícita tras evaluar ambas opciones — la landing tiene menor fricción de entrada (el cliente ve el resultado antes de comprometerse, no exige acceso a sus comunicaciones) y permite construir cartera de casos más rápido. El concierge de WhatsApp no se descarta: pasa a ser el mecanismo de seguimiento *detrás* de la landing, no la oferta de entrada.

**Principio que gobierna este documento, no negociable**: esto no reemplaza el producto de FARO, es su primer escalón. Vender "una landing" sin más es vender un commodity — cualquiera la hace con una IA o "el sobrino". Lo que se vende es **una landing conectada a un sistema de seguimiento que garantiza que ningún contacto que llega se pierde** — eso es, literalmente, el servicio 3 ya publicado en el sitio (`/servicios/seguimiento-de-pacientes/`, "Seguimiento de clientes") y catalogado en `FARO_BIBLIOTECA_AUTOMATIZACIONES.md` sección 7. Si en algún momento la conversación con un cliente se reduce a "te hago una web bonita", se ha perdido el hilo — hay que devolverla a "consigues más citas, y ninguna se pierde por falta de seguimiento".

---

## 1. Qué es

Un producto de entrada de dos piezas inseparables:

1. **La landing** — una página simple, de una sola pantalla, centrada en un único objetivo de conversión (reservar cita / pedir presupuesto / llamar por WhatsApp), no un sitio corporativo de varias secciones. El cliente la ve antes de pagar nada — reduce el riesgo percibido a casi cero.
2. **El seguimiento** — cada contacto que entra por la landing (formulario, clic a WhatsApp, llamada) queda registrado, y si no se convierte en cita en un plazo razonable, recibe un seguimiento automático o manual (concierge, ver sección 5) para que no se pierda. Esto es lo que hace que no sea "solo una web".

## 2. Por qué esta oferta y no el concierge de WhatsApp como entrada

- **Visibilidad antes del compromiso**: el cliente puede ver una landing de ejemplo o un borrador real de la suya antes de decidir — el concierge exige confiar primero y ver resultado después, orden invertido y más difícil de vender en frío.
- **No exige acceso a sistemas internos**: no hay que compartir WhatsApp Business, ni generar la relación de alta confianza que el concierge necesita desde el primer día.
- **Riesgo percibido bajo**: "si no te gusta, no la publicas" es una objeción fácil de resolver; "dame acceso a mis conversaciones con clientes" no lo es.
- **Cartera rápida**: cada landing entregada es un caso de éxito visual y enseñable de inmediato — a diferencia del concierge, cuyo resultado (mensajes gestionados) no es visualmente demostrable a un tercero.

## 3. El riesgo real de esta oferta, y cómo se mitiga

Una landing sola es un commodity — la objeción más probable no es de precio, es de categoría: *"esto me lo hace mi sobrino"* o *"lo monto yo con una IA en una tarde"*. Ambas son ciertas para una landing estática. **La mitigación no es defender que la landing es mejor — es no vender la landing como producto.** Se vende el resultado (más citas, ningún contacto perdido), con la landing como el mecanismo visible y el seguimiento como el mecanismo invisible que la diferencia de lo que hace el sobrino. El pitch nunca es "te hago una página" — siempre es una de estas tres formulaciones, adaptadas al vertical del cliente:

- *"Una landing para que más gente te pida cita, y que ninguna consulta se quede sin respuesta."*
- *"Una landing para captar presupuestos por WhatsApp, con seguimiento automático de quien pregunta y no reserva."*
- *"Una landing conectada a tu WhatsApp y a Google, para que sepas exactamente cuántos contactos entran y cuántos se están perdiendo."*

## 4. Cómo funciona operativamente

### 4.1 Construcción de la landing
- Una sola pantalla: titular de resultado (no de producto), un único CTA claro (reservar / pedir presupuesto / WhatsApp), 2-3 razones de confianza (ubicación en León, teléfono real, horario), y el formulario o botón de WhatsApp click-to-chat.
- Reutiliza el mismo sistema de diseño y disciplina de honestidad de alcance ya definidos en `FARO_IDENTIDAD_VISUAL.md` y `FARO_ESTRATEGIA_MARCA.md`, pero con la identidad visual del *cliente*, no la de FARO — FARO no firma la landing como "hecha por FARO" de forma prominente, es la herramienta del negocio, no un escaparate de FARO (mismo principio que el email de resumen diario: la herramienta se nota por el resultado, no por la marca de quien la construye).
- Tiempo de construcción objetivo: menos de un día por landing, gracias a una plantilla base reutilizable (ver `plantillas/landing-cliente-demo/` para el ejemplo de partida).

### 4.2 El seguimiento detrás de la landing (fase 0: manual, no automatizado todavía)
Igual que el concierge de WhatsApp, **el seguimiento arranca siendo manual** — no se construye la automatización completa hasta validar que el propio mecanismo de seguimiento aporta valor real:
- Cada contacto que entra por la landing se registra en una hoja simple (nombre, contacto, qué pidió, fecha).
- Si no se convierte en cita en 48-72h, la propia fundadora hace el seguimiento manual (un WhatsApp o llamada corta) — literalmente el mismo mecanismo que el concierge, pero aplicado solo a los leads de la landing, no a todo el WhatsApp del negocio, lo que reduce drásticamente la fricción de acceso.
- Solo cuando este seguimiento manual demuestre que recupera contactos que se habrían perdido, se automatiza (biblioteca de automatizaciones, categoría 7, ya catalogada).

### 4.3 Métrica que se enseña al cliente
La landing se entrega con un compromiso simple y verificable: cuántos contactos entraron, cuántos se convirtieron en cita, y cuántos se hubieran perdido sin el seguimiento — el mismo principio de "evidencia antes que promesa" que rige todo el resto de FARO.

## 5. Pitch de reclutamiento del primer cliente

Menor fricción que el concierge de WhatsApp, porque no pide acceso a nada, solo una conversación corta:

```
"Hola [Nombre], estoy montando páginas sencillas para negocios de
León pensadas para conseguir más citas o presupuestos — no una web
corporativa, una sola página con un objetivo claro. Te la enseño ya
montada, sin compromiso, y si te gusta seguimos; si no, no pasa nada.
Además, hago seguimiento de quien pregunta y no reserva, para que no
se te escape ningún contacto. ¿Te la enseño esta semana?"
```

Diferencia clave con el pitch del concierge: aquí se puede enseñar algo construido (la landing de ejemplo, `plantillas/landing-cliente-demo/`) en la propia conversación, en vez de pedir una prueba a ciegas.

## 6. Criterio de éxito (primeras 2-3 landings)

- Al menos un cliente publica la landing y la usa activamente (no la deja sin publicar).
- Al menos un contacto capturado por la landing se convierte en cita gracias al seguimiento manual, de forma verificable.
- El cliente pregunta espontáneamente por "qué más se puede automatizar" — la señal de que hay apertura a subir del producto de entrada al resto del catálogo (WhatsApp fuera de horario, confirmación de citas).

## 7. Criterio de fracaso / señal de replantear

- Los clientes tratan la landing como un encargo puntual de diseño ("hazme la web") sin interés en el seguimiento — señal de que se está vendiendo el commodity, no el resultado, y hay que corregir el pitch antes de seguir.
- Ningún contacto capturado por la landing se convierte en cita pese al seguimiento — señal de que el problema no es de captación sino de otra parte del negocio del cliente, fuera del alcance de FARO.

## 8. Cómo escala hacia el resto del catálogo FARO

Una vez el cliente confía (landing entregada, seguimiento demostrado), la conversación natural de upsell —no forzada, coherente con `FARO_PROCESO_COMERCIAL.md` sección 11— es: *"Ahora que ves cuántos contactos te llegan, ¿sabías que la mayoría de negocios como el tuyo pierden también mensajes de WhatsApp fuera de horario y citas sin confirmar? Es el mismo principio que ya ves funcionando aquí."* La landing deja de ser el producto y se convierte en la prueba viva de por qué el resto del catálogo (`FARO_MODELO_NEGOCIO.md`, Pricing) también vale la pena.

---

*Este documento no sustituye la posición de marca de FARO (`FARO_ESTRATEGIA_MARCA.md`) — la landing es la oferta de entrada de menor fricción, no una redefinición de qué es FARO. Ver `FARO_MVP_CONCIERGE.md` para el mecanismo de seguimiento manual reutilizado aquí en la sección 4.2.*
