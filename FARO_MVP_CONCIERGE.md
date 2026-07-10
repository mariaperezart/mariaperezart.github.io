# FARO — MVP Concierge (Fase 0, antes del MVP técnico)

**Origen de este documento**: respuesta directa al hallazgo central de `AUDITORIA_CONSEJO_2026-07-10.md` — validar demanda real antes de construir nada técnico. No sustituye a `FARO_TESIS_MVP_60DIAS.md` (Parte 2, MVP técnico) — lo precede. El MVP técnico se construye después de este, no en paralelo.

---

## 1. Qué es

Una fase todavía más mínima que el MVP técnico ya especificado: durante 2 semanas, la propia fundadora hace de "la IA" — responde manualmente los WhatsApp fuera de horario de 1-2 negocios piloto, siguiendo un guion fijo (la versión humana del prompt del Flujo A). **Cero código. Cero infraestructura. Cero coste.** El único objetivo es confirmar en días, no en semanas, si el negocio piloto valora esto lo suficiente como para pagar por ello una vez esté automatizado.

## 2. Por qué esto y no el MVP técnico directamente

- **Roig**: no se construye nada hasta confirmar que hay un "Jefe" (cliente) que de verdad acierta y valora esto — construir la automatización sin esa confirmación es "rentable cuando escale", exactamente lo que nunca aprueba.
- **José Elías / Naval**: el apalancamiento (n8n, WhatsApp Business API, LLM) se construye después de confirmar que hay algo real que apalancar, nunca antes — invertir tiempo en infraestructura sin validar es capital mal asignado.
- **Tiago Forte**: no se automatiza un proceso que todavía no se ha hecho consistente a mano — automatizar el caos lo hace más rápido, no lo arregla.
- **Carlos Molina**: no se despliega IA de cara al cliente sin haber visto antes, con los propios ojos, qué tipo de mensajes llegan de verdad y cómo se deberían responder — el concierge es exactamente esa observación directa.

## 3. Cómo funciona operativamente

### 3.1 Acceso al WhatsApp del negocio (de menor a mayor fricción)

1. **El propietario avisa y tú respondes por él, sin compartir nada.** El negocio te dice "esta noche me llegaron 3 WhatsApp, aquí están, contesta tú por mí" (captura de pantalla o reenvío). Cero configuración. Empezar por aquí con el primer piloto.
2. **WhatsApp Web temporal.** El propietario vincula su número de negocio a WhatsApp Web en tu ordenador durante el horario acordado (p. ej. 20:00-09:00) y cierra la sesión cuando termina. Reversible en segundos, no requiere nada técnico, pero exige más confianza que la opción 1.
3. **Número nuevo dedicado al piloto.** Si el negocio no quiere compartir su número actual, una SIM de prepago nueva que se anuncia temporalmente como "línea de guardia fuera de horario" — más coordinación, pero cero riesgo de acceso a conversaciones históricas del negocio.

### 3.2 Guion de respuesta — versión humana del prompt del Flujo A

Adaptado de `FARO_TESIS_MVP_60DIAS.md` sección 2.3, para ejecutarlo en persona:

1. Confirma que el mensaje se ha recibido, lo antes posible (si llega de madrugada, a primera hora; si llega en horario razonable de noche, en minutos).
2. Da solo información básica y general (horario, si se atienden casos urgentes, dirección) — nunca precios exactos ni confirmación de citas concretas que no puedas verificar.
3. Si detectas una palabra o tono de urgencia real, avisa inmediatamente al propietario por el canal acordado — no esperes al resumen del día siguiente.
4. Tono cercano, profesional, en español, máximo 3 frases por respuesta.
5. Nunca inventes información que no tengas del negocio concreto — si no lo sabes, dilo: "Te lo confirmo en cuanto abran."

### 3.3 Qué registrar cada día — versión manual del email de resumen del MVP técnico

Una hoja de cálculo simple, una fila por mensaje:

| Hora | Resumen de qué pedía | Qué respondiste | ¿Urgente? (S/N) | ¿Hizo falta escalar al propietario? (S/N) |
|---|---|---|---|---|

Al cierre de cada semana, resumen con el propietario (10 minutos, mismo mecanismo que la revisión periódica de `FARO_PROCESO_COMERCIAL.md` sección 9): cuántos mensajes se hubieran perdido sin esto, si alguno se convirtió en cita o venta real, y cómo se sintió el propietario sabiendo que estaba cubierto.

## 4. Criterio de éxito (2 semanas)

- El propietario, sin que se lo preguntes de forma forzada, dice espontáneamente que esto le está aportando valor real.
- Al menos un mensaje fuera de horario que se hubiera perdido sin el concierge se convirtió en cliente o cita real.
- El propietario acepta seguir cuando le propongas pasar a modelo de pago (precio de "cliente fundador" ya documentado en `FARO_MODELO_NEGOCIO.md` sección 4, sin descuento, congelado hacia adelante).

## 5. Criterio de fracaso / señal de pivotar

- El propietario no nota diferencia real, o dice explícitamente que no pagaría por esto.
- El volumen de mensajes fuera de horario es tan bajo (menos de 2-3/semana) que no justifica ni el experimento — señal de que ese negocio concreto, o quizá ese vertical, no tiene el síntoma con la intensidad necesaria.

## 6. Cómo se recluta al primer piloto — pitch de mínima fricción

Distinto del script de venta de `FARO_TESIS_MVP_60DIAS.md` Anexo 4.2 (que vende la suscripción ya). Aquí el ask es mucho más pequeño y sin coste, así que la conversación es más corta y directa — casi imposible decir que no a "gratis, sin compromiso, dos semanas":

```
"Hola [Nombre], estoy probando un servicio para negocios de León con
agenda — que ningún WhatsApp fuera de horario se quede sin responder.
Todavía no lo he lanzado: busco 1-2 negocios donde pueda responder yo
misma personalmente por las noches o los fines de semana, gratis,
durante dos semanas, solo para ver si de verdad ayuda. ¿Te interesaría
probarlo sin compromiso ni coste?"
```

**Candidatos inmediatos**: el dataset de `experimentos/EXP-003-pymes-leon/02-investigacion/dataset.md` (18 negocios de 5 verticales) ya está construido. No hace falta un dataset nuevo para el concierge — de hecho, el concierge es una vía de entrada más fácil que la llamada de discovery formal para arrancar con esos mismos contactos, o con cualquier negocio de confianza cercano (conocido, recomendado) para el que este pitch de "gratis, dos semanas" resulte todavía más natural.

## 7. Después de las 2 semanas

Si el criterio de éxito se cumple: proponer pasar a precio de cliente fundador y, en paralelo, empezar a construir el Flujo A técnico (`FARO_TESIS_MVP_60DIAS.md` Parte 2) — ahora sí tiene sentido, porque ya existe un proceso consistente hecho a mano que automatizar, no un proceso inventado sobre el papel. El propio guion de la sección 3.2 se convierte casi literalmente en el prompt del sistema técnico, con la ventaja de que ya se ha probado con mensajes reales, no solo diseñado.

Si no se cumple con el primer piloto: repetir con un segundo negocio de otro vertical antes de concluir nada sobre el modelo en general — un solo piloto fallido es una observación, no un patrón (mismo principio que `FARO_NEGOCIO_SOSTENIBLE.md` aplica a no confundir un resultado puntual con una conclusión general).

---

*Este documento es la Fase 0 real del ecosistema FARO — anterior a la Fase 0 ya descrita en `FARO_TESIS_MVP_60DIAS.md`, que asumía que el MVP técnico era el primer paso. La Auditoría del Consejo (`AUDITORIA_CONSEJO_2026-07-10.md`) es la que motiva este cambio de orden.*
