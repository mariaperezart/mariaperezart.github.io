# Plan de envío — EXP-002-clinicas-valencia

## Paso previo obligatorio (no completado todavía)
Antes de enviar cualquier mensaje: entra en la web de cada clínica de `asignacion.md`, confirma un canal de contacto real (formulario, email o teléfono) y anota el nombre del decisor si aparece. Sin esto, no envíes — la cadencia de `FARO_PROCESO_COMERCIAL.md` asume que el mensaje llega a la persona correcta.

## Día 0
Para cada clínica de `asignacion.md`, copia el bloque "Día 0" de su variante asignada (`05-mensajes/variante-X.md`), sustituye `[Nombre]` y `[Nombre de la clínica]` por los datos reales verificados, y envíalo por el canal confirmado (email o formulario de contacto).

## Día 4 (solo a quien no haya respondido)
Copia el bloque "Día 4" de la misma variante asignada a cada clínica. Es idéntico entre variantes — no depende de cuál se usó en el día 0.

## Día 9 (solo a quien no haya respondido)
Copia el bloque "Día 9" de la variante asignada. En variante B, el texto es distinto (pregunta sobre medición de huecos) — en A y C es la misma pregunta sobre gestión de WhatsApp.

## Día 16 (solo a quien no haya respondido)
Copia el bloque "Día 16" de la variante asignada. Tras esto, si no hay respuesta, la clínica pasa a la lista de nutrición pasiva (`FARO_PROCESO_COMERCIAL.md` sección 2) — no reintentar antes de 90 días.

## Al recibir respuesta positiva → Discovery asincrónico por email

Respuesta positiva = cualquier cosa que no sea "no" inmediato (abiertos a hablar, piden más info).

**NO AGENDUES UNA LLAMADA.**

Envía un segundo email con preguntas de diagnóstico estructuradas.

---

## Protocolo de diagnóstico asincrónico (por email)

**Objetivo:** Pasar de síntoma ("pacientes no responden") a patrón sistémico ("¿por qué ocurre?")

**Formato:** Email con preguntas numeradas, invitando respuesta escrita.

**Ventaja:** Totalmente asincrónico. Pueden responder cuando tengan tiempo. Tú tendrás respuestas documentadas por escrito.

### Estructura de preguntas (por email)

Envía esto dentro de 24h de recibir respuesta positiva:

---

**Asunto:** "Preguntas rápidas sobre [Nombre de la clínica] — para personalizar la propuesta"

**Cuerpo:**

Hola [Nombre],

Gracias por responder. Antes de proponerte una solución, me gustaría entender mejor tu situación. Seis preguntas rápidas (responde directamente en este email):

**1. El patrón actual**
Cuando un paciente te manda un WhatsApp a las 9 pm y es un paciente nuevo que quiere agendar, ¿qué pasa? ¿Nadie responde? ¿Alguien logra responder? ¿Cómo se entera tu equipo?

**2. Volumen**
¿Cuántos mensajes sin responder acumulas típicamente en una semana?

**3. El impacto real**
Si ese paciente RECIBIERA una respuesta en 15 minutos, ¿cómo cambiaría tu negocio? (¿más pacientes? ¿menos cancelaciones? ¿menos estrés?)

**4. El equipo**
¿Cuántas personas atienden recepción en tu clínica?

**5. Intentos previos**
¿Has intentado algo antes para resolver esto? Si sí, ¿qué y por qué funcionó o no?

**6. Urgencia**
¿En una escala del 1-10, cuán importante es resolver esto para ti ahora?

No necesita ser largo — responde con lo que tengas.

Un saludo,
[Firma]

---

### Cómo documentar la respuesta

Crea archivo `06-envio/discovery/[nombre-clinica].md` y registra:
- Respuestas literales a cada pregunta
- Tu interpretación del patrón sistémico (diferencia síntoma de causa)
- Hipótesis sobre qué cambiaría si intervinieras
- Preguntas pendientes

---

## De diagnosis a intervención: Protocolo de propuesta

Una vez documentado el diagnóstico, NO presentes una solución genérica.

Diseña una intervención específica para ESTA clínica:

- ¿Tiene 3 personas en recepción o 1? → La intervención es diferente
- ¿Ya usan software dental o quieren seguir con WhatsApp? → El sistema cambia
- ¿El dueño es obsesivo con el control o delegador? → Tu propuesta de responsabilidad cambia

Envía propuesta por email dentro de 48h de la discovery call, con asunto:

> "Diagnóstico: [Nombre clínica] — Propuesta específica para respuestas fuera de horario"

---

## Registrar resultados en 07-resultados.md

Después de cada discovery call (ejecutada o no):
- Clínica: [nombre]
- Respondieron al contacto inicial: SÍ/NO
- Accedieron a discovery call: SÍ/NO
- Síntoma inicial: [lo que reportaron]
- Patrón sistémico detectado: [tu diagnóstico, archivo discovery/[nombre].md]
- Intervención ejecutada: SÍ/NO/PENDIENTE
- Resultado observado: [métrica de impacto si aplica]
- Aprendizaje contradictorio: [qué salió diferente]

No hace falta esperar a tener todos los resultados — registra uno a uno a medida que avanzan.
