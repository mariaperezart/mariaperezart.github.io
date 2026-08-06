# FARO — Venta Adaptativa según Perfil de Riesgo del Comprador

**Fase 13 del ecosistema empresarial FARO**
Construye sobre `FARO_MODELO_NEGOCIO.md` (Fase 2, buyer persona "Marta"), `FARO_PROCESO_COMERCIAL.md` (Fase 7, manejo de objeciones en la discovery call) y `FARO_SISTEMA_MULTIAGENTE.md` (Fase 9, Tracker/Aprendizaje). No repite esos contenidos — propone tratar el perfil de riesgo del comprador, no la geografía ni una única buyer persona, como la variable que debería organizar cómo se vende y qué se aprende de cada venta.

> **Nivel de evidencia:** 🟠 Opinión basada en experiencia personal de un tercero. Las afirmaciones sobre diferencias entre países son generalizaciones sin evidencia sólida y no deben convertirse en estrategia sin datos propios — ver Objeciones.

## 1. Insight principal

La variable que predice cómo comprar no es la nacionalidad ni el sector — es la psicología del comprador: liquidez, tolerancia al riesgo, urgencia, madurez empresarial, experiencia previa con proveedores similares. Toda venta es una reducción de incertidumbre, no una explicación del producto; el comprador está optimizando algo (precio, tiempo, riesgo, tranquilidad, crecimiento) y vender bien consiste en descubrir qué es.

## 2. Dónde encaja esto en lo que FARO ya tiene

`FARO_MODELO_NEGOCIO.md` 3.2 define una única buyer persona ("Marta, gerente de clínica"). Eso es correcto como punto de partida para un ICP estrecho (`FARO_MODELO_NEGOCIO.md` 3.1), pero este documento sugiere tratar a "Marta" como un punto en un espectro de tolerancia al riesgo, no como el único perfil: dentro del mismo ICP (clínica dental de 4-10 gabinetes), habrá gerentes más conservadores (necesitan piloto, garantías, referencias) y gerentes más orientados a crecimiento (les importa más el ROI y la velocidad que la garantía).

`FARO_PROCESO_COMERCIAL.md` sección 4 ya tiene manejo de objeciones específicas ("Ya tenemos [software de gestión]...", "¿Cómo sé que esto no va a sonar robótico?", etc.) — es, de hecho, una versión ya construida de "argumentos que cambian según la objeción". Lo que este documento añade es la idea de agrupar esas objeciones por el perfil de riesgo que las genera, no tratarlas como una lista plana: un cliente conservador y uno orientado a crecimiento no solo dicen objeciones distintas, probablemente necesitan un orden distinto de argumentos en la misma llamada.

`FARO_SISTEMA_MULTIAGENTE.md` ya construye, sin llamarlo así, una versión primitiva exacta de lo que este documento pide: el Tracker registra cada respuesta en categorías estandarizadas (`llamada_agendada`, `objecion_precio`, `objecion_ya_tiene_solucion`, `interes_sin_agendar`, `no_interesado`, `sin_respuesta` — ver `.claude/agents/07-tracker.md`), y el Agente de Aprendizaje actualiza `base_conocimiento/mensajes_efectivos.md` con qué variante funcionó mejor y por qué. Eso ya es "cada venta debería mejorar la siguiente" (Principio 5 de este documento) aplicado a mensajes de prospección. Lo que falta, y es la propuesta concreta de este documento, es una dimensión más: registrar no solo qué variante ganó, sino para qué tipo de objeción/perfil ganó.

## 3. Principios

1. Toda venta es una reducción de incertidumbre, no una explicación del producto.
2. El comprador optimiza algo (precio, tiempo, riesgo, prestigio, crecimiento, tranquilidad) — vender es descubrir qué.
3. Los argumentos cambian según el riesgo: un cliente conservador necesita prueba piloto, garantías, resultados rápidos, baja inversión inicial; un cliente orientado al crecimiento necesita ROI, escalabilidad, velocidad, ventaja competitiva.
4. El pricing comunica posicionamiento, no solo coste.
5. El proceso comercial debería aprender — cada venta debería mejorar la siguiente.

## 4. Propuesta concreta y acotada: extender el Tracker, no construir un "agente de perfilado"

La investigación original propone un "agente de perfilado comercial" y un "motor de ventas adaptativo" que analicen leads automáticamente y generen propuestas distintas por perfil. **Esto es prematuro para FARO hoy** (ver Objeciones) — con cero llamadas de discovery realizadas todavía, no hay datos de qué predice conversión. La aplicación acotada y realista, coherente con la disciplina de `FARO_SISTEMA_MULTIAGENTE.md` de no inventar herramientas sin datos que las justifiquen:

- Cuando el Tracker (`.claude/agents/07-tracker.md`) registre una objeción, añadir opcionalmente una nota de una frase sobre la señal de perfil que la acompañó (ej. "pidió garantías y preguntó por el coste antes que por el ROI" → conservador; "preguntó directamente por escalar a más de una clínica" → orientado a crecimiento). No como categoría cerrada nueva — como texto libre que el Agente de Aprendizaje revise al cerrar el experimento.
- El Agente de Aprendizaje, al escribir `base_conocimiento/mensajes_efectivos.md`, puede empezar a anotar si hay una correlación visible entre el tipo de objeción/perfil y qué variante de mensaje funcionó — pero solo como observación cualitativa hasta tener suficientes casos (ver regla 1 del propio agente: solo promueve hallazgos respaldados por datos).
- No construir un "grafo de objeciones" ni una "ontología de compradores" formal hasta que existan al menos 10-15 llamadas de discovery reales que registrar — antes de eso, cualquier segmentación sería una taxonomía inventada, no aprendida.

## 5. Modelo mental

No segmentar solo por país o idioma (irrelevante para FARO, que opera en un único mercado, España). Segmentar por comportamiento dentro del ICP ya definido: explorador/escéptico/pragmático/visionario, o más simple para el volumen de FARO, un eje único de "conservador ↔ orientado a crecimiento" que es suficiente para decidir qué argumento liderar en la discovery call.

## 6. Hipótesis a validar (no hechos)

1. La tolerancia al riesgo predice mejor la conversión que cualquier variable demográfica.
2. El mejor argumento depende del perfil de riesgo del comprador, no de un guion único.
3. Las objeciones contienen información más valiosa que los cierres para aprender a vender mejor.
4. Cada conversación comercial puede, con suficiente volumen, mejorar el guion siguiente.
5. El pricing debería poder adaptarse en estructura (piloto, financiación, fases) antes que en precio base, según el perfil.

## 7. Objeciones — por qué no tomar esto al pie de la letra

1. **"Los estadounidenses tienen mentalidad de abundancia" / generalizaciones por país.** Sin evidencia sólida, y en cualquier caso irrelevante para FARO, que vende solo en España — la variable de riesgo debe observarse dentro del propio ICP, no importarse de un estereotipo geográfico ajeno al mercado real de FARO.
2. **"El acceso al crédito explica el comportamiento."** Puede influir, pero también la cultura empresarial, el momento económico de la clínica y la experiencia previa con proveedores tecnológicos que prometieron de más — `FARO_ESTRATEGIA_MARCA.md` ya identifica esto último como una objeción de fondo frecuente en el sector.
3. **Construir un "agente de perfilado" o "motor de ventas adaptativo" ahora sería prematuro.** FARO no ha hecho ninguna llamada de discovery real todavía (el primer experimento, `EXP-002-clinicas-valencia`, sigue en la fase de verificación de contactos). Cualquier modelo de perfil construido hoy sería una taxonomía inventada sin datos, exactamente el error que `FARO_SISTEMA_MULTIAGENTE.md` ya está diseñado para evitar (regla: "toda cifra... debe trazarse a un documento o al dataset del experimento, nunca a una estimación genérica").

## 8. Insight clave

La oportunidad no es vender distinto por país — es acumular, llamada a llamada, qué tipo de objeción y qué tipo de comprador convierte mejor con qué argumento. Ese conocimiento acumulativo (no un guion de ventas fijo) es lo difícil de copiar, y encaja exactamente en el mecanismo que `FARO_SISTEMA_MULTIAGENTE.md` ya construyó para mensajes de prospección (Tracker → Analizador → Aprendizaje → `base_conocimiento/`). La extensión correcta no es un agente nuevo, es una dimensión más de datos dentro del flujo que ya existe, y solo cuando haya volumen real de llamadas para justificarlo.
