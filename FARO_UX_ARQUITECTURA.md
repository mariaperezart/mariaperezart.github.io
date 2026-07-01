# FARO — UX y Arquitectura de la Web

**Fase 4 del ecosistema empresarial FARO**
Aplica la identidad visual (Fase 3) y el modelo de negocio (Fase 2) a la estructura y los flujos del sitio web comercial de FARO.

**Nota de alcance**: el documento técnico inicial (`FARO_TESIS_MVP_60DIAS.md`) especifica deliberadamente que el MVP de los primeros 60 días **no tiene dashboard ni portal cliente** — el cliente recibe un email diario de resumen. Esta fase diseña la **web comercial pública** (que sí debe existir desde el día 1 para vender) y describe, además, un **portal cliente ligero** como visión de producto a futuro (roadmap Fase 2, mes 10+), no como parte del MVP técnico. Ambos documentos son coherentes: la web se construye ya; el portal cliente se construye cuando el volumen de clientes lo justifique.

---

## 1. Arquitectura de información — mapa del sitio

```
faro.clinic
│
├── / (Inicio)
├── /como-funciona
├── /servicios
│   ├── /servicios/whatsapp-sin-respuesta
│   ├── /servicios/confirmacion-de-citas
│   └── /servicios/seguimiento-de-pacientes
├── /precios
├── /casos-de-exito
│   └── /casos-de-exito/[slug-clinica]
├── /diagnostico (calculadora de ROI + formulario de llamada)
├── /sobre-faro
├── /preguntas-frecuentes
├── /blog
│   └── /blog/[slug-articulo]
├── /recursos
│   └── /recursos/[slug-recurso]  (guías descargables, lead magnets)
├── /contacto
├── /legal
│   ├── /legal/privacidad
│   ├── /legal/terminos
│   └── /legal/cookies
├── /gracias (página de confirmación post-formulario)
├── /404
│
└── Landing pages independientes (no en navegación principal, uso en campañas):
    ├── /lp/outbound-clinicas-[ciudad]
    ├── /lp/congreso-[nombre-evento]
    └── /lp/seo-[intencion-busqueda]
```

**Por qué esta estructura.** La navegación principal se limita a 7 elementos (Inicio, Cómo funciona, Servicios, Precios, Casos de éxito, Recursos/Blog, Contacto) porque el visitante objetivo (Marta, la buyer persona de la Fase 2) no navega un sitio B2B en profundidad — decide en los primeros 30 segundos si vale la pena seguir leyendo o agendar la llamada. Cada nivel adicional de profundidad en el menú es una oportunidad de que abandone antes de llegar al CTA. Las landing pages de campaña viven fuera de la navegación deliberadamamente: existen para tráfico de pago o de outbound con un único mensaje de entrada, sin la distracción del menú completo (principio de CRO: "attention ratio" bajo en páginas de conversión).

## 2. User flows principales

### Flujo A — Visitante frío llega por SEO/contenido

`Blog o página de servicio` → lee contenido específico a su dolor → banner/CTA contextual ("¿Esto te pasa en tu clínica? Calcula cuánto te cuesta") → `/diagnostico` → introduce datos básicos (nº de gabinetes, mensajes/día estimados) → ve cálculo de ROI personalizado en pantalla → CTA "Agenda tu llamada de 15 min" → formulario de agenda → `/gracias` con confirmación y qué esperar de la llamada.

### Flujo B — Visitante que llega por outbound/referencia (ya tiene contexto)

`Email o link directo` → aterriza en `/precios` o en landing de campaña → ya conoce el problema, busca validar precio y alcance → sección de objeciones/FAQ integrada en la misma página (evita que tenga que ir a buscarlas a otra URL) → CTA directo a agendar llamada, sin pasar necesariamente por la calculadora de ROI (que es para el visitante frío que necesita convencerse del problema antes que de la solución).

### Flujo C — Visitante que investiga antes de decidir (ciclo largo)

`Inicio` → `/como-funciona` (entiende el modelo sin fricción de precio) → `/casos-de-exito` (busca prueba social de clínicas similares) → `/preguntas-frecuentes` (resuelve objeciones de alcance: "¿Se integra con mi Gesden?") → `/precios` → agenda llamada. Este flujo es el más largo y el que más depende de que cada página responda la pregunta siguiente sin fricción — de ahí que cada página cuente con enlazado interno explícito hacia la siguiente etapa lógica del recorrido.

### Flujo D — Cliente ya en producción (portal cliente, visión futura, no MVP)

`Email de resumen diario` (MVP actual) evoluciona en el roadmap hacia `login en /portal` → vista de las automatizaciones activas de su plan (START/GROW/OPS) → historial simple de conversaciones y confirmaciones → botón de contacto directo con soporte. Se diseña deliberadamente mínimo: no es un dashboard analítico con gráficas, es una vista de estado ("qué está pasando ahora mismo en mi clínica"), coherente con la propuesta de valor de la Fase 1 de no añadir carga de gestión al cliente.

## 3. Wireframe textual por tipo de página

### 3.1 Página de Inicio

1. **Header**: logo izquierda, navegación centro-derecha, CTA "Agenda tu llamada" en botón de acento (Ámbar Señal) siempre visible.
2. **Hero**: titular de resultado (no de tecnología, ver Fase 5 para copy exacto), subtítulo de una frase, CTA primario + CTA secundario ("Ver cómo funciona").
3. **Bloque de problema**: 3 síntomas concretos en formato de tarjeta (WhatsApp sin responder, citas sin confirmar, tareas repetitivas) — cada tarjeta enlaza a su página de servicio correspondiente.
4. **Bloque "cómo funciona"**: 3 pasos horizontales (Diagnóstico → Implementación → Mejora continua), coherente con la relación de cliente de la Fase 2.
5. **Prueba social**: cita textual de un cliente piloto (o, en ausencia de clientes, dato de mercado del documento de tesis con fuente citada — nunca un testimonio inventado).
6. **Bloque de honestidad de alcance**: sección corta y explícita de "qué no hacemos (todavía)" — refuerza el pilar de comunicación de la Fase 1.
7. **CTA final de página**: repetición del CTA primario con el elevator pitch como contexto.
8. **Footer**: enlaces legales, navegación secundaria, contacto, redes sociales.

### 3.2 Página de Servicio (ej. WhatsApp sin respuesta)

1. Hero específico del síntoma con dato de contexto (ej. referencia al cálculo de ROI de la tesis inicial).
2. Explicación de la lógica del flujo en lenguaje de cliente, no técnico (evitar mencionar n8n, GPT-4o-mini como argumento de venta — sí puede mencionarse en una sección de "detalles técnicos" plegable para el usuario curioso, sin protagonismo).
3. Antes/después en formato de dos columnas (situación sin FARO / situación con FARO).
4. Objeciones específicas de este servicio en formato FAQ corto.
5. CTA a `/diagnostico`.

### 3.3 Página de Precios

1. Tres tarjetas de plan (START/GROW/OPS) con precio, para quién es cada uno y qué incluye — contenido tomado directamente de la tabla de pricing de la Fase 2.
2. Fila comparativa debajo de las tarjetas para quien quiere el detalle exacto.
3. Bloque de fee de implementación explicado aparte (evita que parezca un coste oculto).
4. Sección de objeciones de precio ("¿por qué suscripción y no un pago único?", enlazando a la lógica de relación de largo plazo de la Fase 2).
5. CTA a llamada de configuración, nunca a "comprar" directamente sin conversación — coherente con el modelo de venta consultiva de la Fase 2.

### 3.4 Página de Diagnóstico (calculadora de ROI)

1. Formulario corto (3-4 campos: nº de gabinetes, mensajes de WhatsApp/día estimados, ciudad, email).
2. Al enviar, cálculo en pantalla con el mismo modelo de ROI de la tesis inicial (sección 1.4), mostrando un rango, nunca una cifra cerrada.
3. CTA inmediato a agendar la llamada, con el cálculo ya como contexto de la conversación.

### 3.5 Página de Caso de éxito

1. Contexto de la clínica (tamaño, ciudad, anonimizado si el cliente lo pide).
2. El problema específico antes de FARO, en palabras del propio cliente si es posible.
3. Qué se implementó (con honestidad de alcance: qué automatización concreta, no genérica).
4. Resultado medido con datos reales (mensajes gestionados, citas confirmadas) — nunca proyecciones en esta sección, que es exclusivamente de evidencia.
5. Cita textual del cliente.

## 4. Jerarquía visual

En cada página, un único elemento debe dominar el primer viewport (hero): nunca el header, el hero y un banner de cookies compitiendo por atención al mismo tiempo. Orden de peso visual: titular (Fraunces, mayor tamaño) > CTA primario (color de acento, único elemento en Ámbar Señal del viewport) > imagen o ilustración de apoyo > texto secundario. Ningún viewport tiene más de un CTA en color de acento — el resto de llamadas a la acción de la misma página usan el botón secundario (borde, sin relleno) definido en la Fase 3, para no diluir la jerarquía.

## 5. Responsive

**Desktop (≥1024px)**: grid de 12 columnas (Fase 3), navegación horizontal completa, hero a dos columnas (texto + imagen/ilustración).

**Tablet (768-1023px)**: grid de 4 columnas, navegación colapsa a menú hamburguesa a partir de 900px, hero pasa a una columna con imagen debajo del texto.

**Móvil (≤767px)**: una columna, márgenes de 16px, CTA primario siempre fijo en la parte inferior de la pantalla (sticky) en páginas de conversión (Precios, Diagnóstico, landing de campaña) porque el visitante en móvil no vuelve a hacer scroll hacia arriba para encontrar el botón — regla de CRO móvil no negociable para estas páginas específicas.

Formularios en móvil: un campo por fila, sin excepción, teclado numérico forzado en campos de teléfono/número de gabinetes (`inputmode="numeric"`).

## 6. Accesibilidad

Contraste mínimo AA en todo el texto de cuerpo (ya validado en la paleta de la Fase 3). Navegación completa por teclado (tab order lógico, focus visible con el borde Azul Faro de 2px definido en componentes de la Fase 3). Todas las imágenes con `alt` descriptivo funcional (no decorativo: describe qué información aporta la imagen, no "imagen de clínica dental"). Formularios con `label` asociado a cada campo (nunca solo placeholder como única indicación). Tamaño mínimo de área táctil 44×44px en botones e inputs de móvil. Sin animaciones que dependan de hover puro sin equivalente táctil/focus en móvil.

## 7. Formularios

**Principio general**: cada formulario pide el mínimo de campos necesario para el paso siguiente, nunca todo de una vez. El formulario de `/diagnostico` pide 3-4 campos (suficiente para calcular y contactar); el formulario de agenda de llamada posterior pide solo nombre, teléfono/WhatsApp y franja horaria preferida — los datos de la clínica ya se capturaron en el paso anterior y no se vuelven a pedir.

**Validación**: en línea, al perder el foco del campo (no solo al enviar), con mensaje de error específico ("Introduce un teléfono válido de 9 dígitos", nunca "Campo inválido").

**Confirmación**: toda acción de envío lleva a `/gracias`, nunca a un simple mensaje en la misma página que pueda perderse — una URL propia permite además trackear conversión de forma limpia en analítica.

## 8. Componentes específicos de la web (más allá de la base de Fase 3)

- **Tarjeta de plan de precios**: nombre del plan, precio grande (Fraunces), lista de qué incluye con iconos de check (Verde Ancla), CTA propio por tarjeta.
- **Tarjeta de caso de éxito (preview en listado)**: nombre/ciudad de la clínica, una métrica destacada en grande, enlace a caso completo.
- **Calculadora de ROI (componente interactivo)**: inputs numéricos + resultado que se actualiza sin recargar la página, con el rango (pesimista-optimista) visualmente diferenciado, nunca una única cifra que parezca garantía.
- **Bloque de objeción/FAQ acordeón**: pregunta siempre visible, respuesta desplegable — evita que la página de precios se perciba densa por adelantado.
- **Banner de honestidad de alcance**: componente reutilizable en varias páginas (Inicio, Servicios, Precios) con icono de alerta suave (no rojo, un gris/ámbar neutro) y el texto de qué no incluye el servicio todavía.

## 9. Portal cliente (visión de producto futura, no MVP)

Cuando el volumen de clientes justifique construirlo (roadmap Fase 2, mes 10 en adelante), el portal cliente debe seguir el mismo principio que el email de resumen diario del MVP: mostrar estado, no pedir gestión. Estructura mínima: login simple (magic link por email, sin gestión de contraseñas), una vista única por clínica con las automatizaciones activas de su plan, un historial de las últimas conversaciones/confirmaciones (de solo lectura, sin edición manual de datos que rompa la automatización), y un botón de contacto directo con soporte. Deliberadamente sin gráficas ni analítica avanzada en su primera versión — el error a evitar es construir un dashboard complejo que nadie usa, cuando el cliente ya recibe la información que necesita por email.

---

*Fin de la Fase 4 — UX y arquitectura. Próxima fase: la web completa (Fase 5), que aplica esta arquitectura y estos wireframes al copy final de cada página, listo para publicar, junto con su SEO on-page.*
