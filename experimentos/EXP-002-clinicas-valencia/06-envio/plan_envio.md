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

## Al recibir respuesta positiva → Agendación de discovery call

Respuesta positiva = cualquier cosa que no sea "no" inmediato (abiertos a hablar, piden más info, quieren llamada).

Agenda una llamada de 30 min con la clínica donde el objetivo NO es vender FARO, sino:

**Diagnosticar el patrón sistémico detrás de "mensajes de WhatsApp sin responder"**

---

## Durante la discovery call: Protocolo de diagnóstico

**Duración:** 30 min  
**Objetivo:** Pasar de síntoma ("pacientes no responden") a patrón sistémico ("¿por qué ocurre?")  
**Documentación:** Toma notas en tiempo real en archivo `06-envio/discovery/[nombre-clinica].md` DURANTE la llamada, no después.

### Estructura de preguntas (5-7 min por sección)

**Sección 1: Síntoma confirmado (min 1-5)**
- "Me dijiste que pacientes no responden a mensajes fuera de horario. ¿Qué intentan hacer esos pacientes cuando escriben? ¿Qué necesitan?"
- "¿Quién en tu clínica revisa esos mensajes?"
- "¿Cuántos mensajes sin responder acumulas típicamente?"

**Sección 2: El patrón sistémico (min 6-15)** ← **ESTO ES LO CRÍTICO**
- "Cuando llega un mensaje a las 9 pm, ¿qué impide que se responda?"
  - *Si responden:* ¿Por qué? ¿Es rutina o excepción?
  - *Si no responden:* ¿Es por falta de sistema, por falta de persona, por falta de información? 
- "¿Cómo sabe tu equipo que hay un mensaje sin responder?"
- "¿Qué ocurre el día siguiente? ¿Alguien revisa esos mensajes?"
- "¿Has intentado algo para mejorar esto? ¿Por qué funcionó o no?"

**Sección 3: Impacto real (min 16-22)**
- "Si los pacientes RECIBIERAN respuesta a los 10 minutos, ¿qué cambiaría en tu negocio?" (presione: ingresos, retención, carga de trabajo, satisfacción del equipo)
- "¿Cuál es el costo de un paciente que no recibe respuesta rápida?" (No: sensación, sino: ¿se va a otra clínica? ¿cómo lo sabes?)

**Sección 4: Insight de capacidad de pago (min 23-27)**
- "¿Cuánto tiempo te gustaría dedicar semanalemente a esto?" (Indica urgencia + presupuesto mental)
- "¿Has considerado herramientas? ¿Cuál es tu presupuesto si esto resolviera el problema?"

**Sección 5: Cierre de diagnóstico (min 28-30)**
- Resumen: "De lo que me dices, parece que el patrón es [TU HIPÓTESIS]. ¿Es correcto?"
  - Si dice "sí": Patrón validado. Documenta.
  - Si dice "no": Reformula hasta que asinta. Ese es el patrón REAL, no el que asumiste.

---

## Después de la discovery call: Documentación del diagnóstico

**Archivo a crear:** `06-envio/discovery/[nombre-clinica].md`

**Estructura:**

```markdown
# Discovery — [Nombre Clínica]

## Síntoma inicial
[Lo que dijeron que era el problema]

## Patrón sistémico detectado
[La estructura subyacente que explica el síntoma — esto es TU diagnóstico]

## Evidencia que lo confirma
[3-5 datos concretos que mencionaron en la llamada que apuntan a este patrón]

## Hipótesis de intervención
[Si cambiamos X (el factor sistémico), esperamos que ocurra Y (el resultado)]

## Preguntas pendientes
[Qué no quedó claro, qué necesitas verificar antes de diseñar la intervención]

## Siguiente paso propuesto
[Qué debería cambiar, de forma MUY ESPECÍFICA para ESTA clínica]
```

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
