# FARO — Agentes Verticales como Ventaja Competitiva

**Fase 10 del ecosistema empresarial FARO**
Construye sobre `FARO_MODELO_NEGOCIO.md` (recursos clave, ventaja competitiva) y `FARO_SISTEMA_MULTIAGENTE.md` (el sistema de 10 agentes ya implementado). No repite esos contenidos — investiga si el propio producto de FARO (lo que se vende a la clínica, no la herramienta interna de validación) debería evolucionar hacia una arquitectura de agentes especializados, y qué implica eso para el roadmap.

> **Nivel de evidencia:** 🟡 Este documento parte de un vídeo que cita declaraciones de Eric Schmidt sobre agentes verticales. Varias afirmaciones estratégicas citadas (la ventana de 12-24 meses, "un solo ganador por vertical") son opiniones de terceros, no hechos demostrados — se tratan aquí como hipótesis a validar, no como premisas. Ver sección "Objeciones" antes de tomar cualquier decisión de producto basada en este documento.

## Importante: dos usos distintos de "agentes" que no hay que confundir

Este documento habla de agentes como **producto que la clínica usaría** (un "agente de recepción", un "agente de presupuestos" dentro del servicio de FARO). Esto es distinto del sistema de 10 agentes de `FARO_SISTEMA_MULTIAGENTE.md`, que son una herramienta **interna** para que FARO valide hipótesis de negocio (investigar nichos, calcular viabilidad, redactar mensajes). Comparten el mismo principio (responsabilidad única, proceso modelado antes que herramienta), pero uno mira hacia el cliente y el otro hacia la operación interna de FARO. Si en el futuro se decide construir agentes de cara al cliente, es razonable reutilizar el patrón de diseño (una responsabilidad, entrada/salida definidas, reglas explícitas) que ya se validó en el sistema interno.

---

## 1. Idea principal

La mayor oportunidad económica en IA no estaría en construir modelos generales, sino agentes altamente especializados que resuelvan un proceso concreto mejor que cualquier alternativa genérica.

## 2. Insight principal para FARO

El activo no es el agente. El activo es el conocimiento profundo del proceso que el agente automatiza. La IA es una capa de ejecución; la ventaja competitiva proviene del dominio de una operación específica — exactamente el argumento que ya sostiene `FARO_ESTRATEGIA_MARCA.md` ("FARO vende criterio, no ejecución técnica") y `FARO_MODELO_NEGOCIO.md` 1.6 ("de estos recursos, solo dos son defendibles a medio plazo: el conocimiento de procesos y la biblioteca de automatizaciones reutilizables"). Este documento no introduce un principio nuevo — lo refuerza con una fuente externa y lo lleva a una conclusión de arquitectura de producto más concreta.

## 3. Principios

1. **La especialización genera ventaja.** Un agente excelente para una tarea concreta suele aportar más valor que uno aceptable para cien tareas.
2. **Los procesos repetitivos son candidatos ideales para automatización.** Un proceso es automatizable cuando sigue reglas, tiene entradas identificables, produce una salida consistente, y ocurre muchas veces.
3. **El conocimiento del dominio es más escaso que la tecnología.** Los modelos de IA son cada vez más accesibles; conocer profundamente una industria sigue siendo difícil de copiar.
4. **Los agentes ejecutan procesos completos, no responden preguntas sueltas.** Ciclo: objetivo → planificación → uso de herramientas → ejecución → validación → entrega.
5. **La diferenciación aparece en el flujo de trabajo, no en el modelo.** No basta con integrar un LLM — el valor está en diseñar un sistema operativo para una tarea específica.

## 4. Framework detectado

Conocimiento experto → identificación de proceso repetitivo → modelado del flujo → construcción del agente → integración con herramientas → aprendizaje continuo → ventaja competitiva.

## 5. Patrones

- El mercado evoluciona de IA genérica hacia soluciones verticales.
- La automatización se desplaza de tareas aisladas ("responder emails") a procesos completos ("gestionar un caso completo").
- El conocimiento empresarial se convierte en software: cada procedimiento puede transformarse en un agente.

## 6. Modelos mentales

- **La empresa como colección de procesos**, cada uno observable, documentable, optimizable y automatizable.
- **El agente como empleado digital**: tiene objetivo, herramientas, memoria y capacidad de ejecución.
- **La IA es infraestructura**: el cliente compra el resultado, no el modelo.

## 7. Aplicación a FARO — hipótesis de evolución de producto

En lugar de un único asistente conversacional (el alcance actual del MVP, ver `FARO_TESIS_MVP_60DIAS.md`), la hipótesis a largo plazo es una organización de agentes especializados dentro del servicio de FARO: agente de recepción, de presupuestos, de agenda, de seguimiento, de financiación, documental, de incidencias, comercial, de métricas, de cumplimiento.

**Esto es una dirección de roadmap a largo plazo, no una revisión del alcance del MVP.** `FARO_TESIS_MVP_60DIAS.md` ya fija deliberadamente el alcance a 2 flujos (respuesta fuera de horario, confirmación de cita) y `FARO_ESTRATEGIA_MARCA.md` señala la disciplina de alcance como fuente de confianza ("no promete integrar el software de gestión dental... no promete un dashboard"). Ampliar a una familia de agentes antes de validar los 2 flujos iniciales contradice esa disciplina — ver Objeciones, punto 3.

### Ideas de producto derivadas (para el roadmap, no para el MVP actual)
- **Marketplace de agentes**: una clínica activa únicamente los agentes que necesita, coherente con el pricing por escalones ya existente (START/GROW/OPS).
- **Constructor de agentes**: cada clínica adapta los agentes a sus propios protocolos.
- **Motor de evaluación**: comparar automáticamente tiempo ahorrado, errores evitados, retorno económico, satisfacción del paciente — esto conecta directamente con la recomendación de `FARO_MODELO_NEGOCIO.md` 1.2 de pasar de propuesta de valor "por proyección" a propuesta de valor "por evidencia propia".
- **Biblioteca de procesos**: antes de crear un agente nuevo, modelar el proceso. El proceso es el activo; el agente es una implementación — mismo principio ya aplicado en `base_conocimiento/` del sistema multiagente interno.

## 8. Hipótesis a validar (no hechos)

1. La mayor barrera competitiva no será desarrollar IA, sino modelar procesos con precisión.
2. Las empresas acumularán bibliotecas de procesos antes que bibliotecas de prompts.
3. Un conjunto coordinado de agentes generará más valor que un único agente generalista.
4. El conocimiento operativo de una industria será más valioso que elegir el mejor LLM.
5. Los agentes evolucionarán continuamente mediante datos reales de ejecución.
6. Cada procedimiento interno podrá representarse como un grafo de decisiones.
7. Las empresas competirán por calidad de ejecución, no por acceso a IA.
8. La memoria organizacional será un componente esencial de los agentes.
9. Los agentes especializados tenderán a reutilizar procesos comunes mediante componentes compartidos.
10. La capacidad de medir resultados será una ventaja mayor que la capacidad de generar texto.

## 9. Objeciones — por qué no tomar esto al pie de la letra

1. **"Cada industria tendrá un único ganador."** Es una simplificación. En muchos mercados conviven múltiples empresas especializadas con propuestas diferentes — no hay evidencia de que el sector dental español vaya a converger en un solo proveedor.
2. **"La ventana dura 12-24 meses."** No existe evidencia sólida de que pueda fijarse un plazo tan concreto. `FARO_TESIS_MVP_60DIAS.md` 1.1 ya estima una ventana de 24-36 meses antes de que los PMS grandes integren esto de forma nativa — una cifra distinta, igual de especulativa, y ninguna de las dos debe tratarse como fecha límite operativa real.
3. **"Construir un agente basta para crear una empresa valiosa."** No necesariamente — también importan distribución, ventas, integración, soporte, confianza y adquisición de clientes, todo lo cual ya está desarrollado con más rigor en `FARO_PROCESO_COMERCIAL.md` que en este documento de investigación.
4. **"La IA es el principal factor."** Un agente excelente sobre un proceso mal diseñado seguirá produciendo malos resultados — refuerza por qué `FARO_MODELO_NEGOCIO.md` 1.7 coloca "análisis y diseño de procesos" antes que "implementación" como actividad clave.

## 10. Activos potenciales de largo plazo (no compromisos de roadmap)

- Ontología de procesos clínicos.
- Biblioteca de agentes especializados (de cara al cliente).
- Grafo de colaboración entre agentes.
- Motor de modelado de procesos.
- Sistema de memoria organizacional.
- Framework para convertir procedimientos en agentes reutilizables.
- Motor de evaluación del rendimiento de agentes.

Ninguno de estos es un compromiso de construcción — son candidatos a evaluar una vez que el MVP de 2 flujos (`FARO_TESIS_MVP_60DIAS.md`) haya demostrado retención real con clientes de pago (mismo criterio que ya rige la transición de pricing de validación a pricing objetivo en `FARO_MODELO_NEGOCIO.md`).

## 11. Insight clave

La investigación original pone el foco en construir agentes. Desde la perspectiva de FARO, el activo estratégico anterior al agente es el **modelo del proceso**. Los modelos de IA cambiarán con rapidez; un conocimiento profundo, estructurado y validado de cómo funciona una clínica dental puede mantenerse como ventaja competitiva durante mucho más tiempo. La aspiración de largo plazo no es que FARO sea una empresa de IA, sino un sistema operativo basado en procesos, donde los agentes sean la forma de ejecutar ese conocimiento — consistente con la Visión ya declarada en `FARO_ESTRATEGIA_MARCA.md`: que pensar en "poner en orden la operación de mi clínica" signifique pensar en FARO, no en un proveedor de software a evaluar entre varios.
