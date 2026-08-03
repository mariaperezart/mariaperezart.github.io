# FARO — Identidad Visual

> **Este documento sigue vigente: es el sistema visual que usa la web actual del estudio de diseño.** Logo, paleta, tipografías, escala de espaciado y componentes están implementados tal cual en `assets/css/styles.css`.
>
> Lo que sí quedó del proyecto anterior de clínicas dentales, y hay que leer con esa salvedad: los ejemplos de iconografía (sección 6), el estilo fotográfico (sección 7) y el moodboard (sección 12) están redactados para el sector sanitario. El resto es independiente del sector y no cambia.

**Fase 3 del ecosistema empresarial FARO**
Traduce a sistema visual el posicionamiento de la Fase 1 (socio de confianza, criterio antes que tecnología, cercanía profesional) y la estructura de negocio de la Fase 2. Este documento es una especificación de diseño lista para que un diseñador gráfico o una herramienta de generación de imágenes la ejecute directamente — no bocetos ni ideas sueltas.

---

## 1. Naming

FARO se mantiene como nombre de marca. No hay razón para evolucionarlo: es corto, pronunciable en español sin ambigüedad, no requiere explicación y ya condensa la idea central de la narrativa de marca (una señal que evita que la clínica choque con problemas ya conocidos, sin pilotar el barco por ella — ver Fase 1, Historia de la marca). Se descarta cualquier sufijo tipo "FARO AI", "FARO Dental" o "FARO Ops": añadir la tecnología o el sector al nombre contradice el pilar de comunicación "resultado antes que tecnología" y encierra a la marca en una categoría de la que el roadmap prevé salir (ver Fase 2, sección 6, expansión a otros verticales).

**Dominio recomendado**: faro.clinic o farosalud.com si faro.com/faro.es no están disponibles — se evita deliberadamente "farodental" por la misma razón que se evita en el naming.

## 2. Dirección creativa

La dirección creativa se resume en una tensión deliberada: **cálido pero riguroso**. La mayoría de marcas de software para sanidad caen en uno de dos extremos — el azul corporativo-clínico que transmite frialdad institucional, o el estilo "startup SaaS" con degradados violeta/turquesa que no dice nada específico del sector dental. FARO evita ambos.

La referencia conceptual es la señalización marítima: un faro no decora la costa, orienta en la oscuridad con una señal simple y reconocible a distancia. Esa idea se traduce visualmente en formas geométricas simples, alto contraste, un uso del color deliberadamente restringido (uno o dos tonos, no una paleta arcoíris) y tipografía que prioriza la legibilidad sobre la personalidad.

**Lo que la identidad visual de FARO NO es**: no es lúdica ni "amigable" al estilo de una app de consumo (nada de ilustraciones de dientes sonrientes ni mascotas), no es fría ni distante al estilo de un ERP hospitalario, y no imita el imaginario visual genérico de "IA" (redes neuronales, degradados morados, partículas brillantes) — coherente con el pilar de comunicación de la Fase 1 de no vender tecnología como argumento.

## 3. Logotipo

**Concepto.** Un isotipo geométrico que representa un haz de luz mínimo — no un faro literal (torre con base), que se asociaría demasiado a turismo o inmobiliaria costera, sino la abstracción del haz: una forma que sugiere un punto de origen y una proyección direccional, construida con las mismas reglas de geometría simple que el resto del sistema (círculo + triángulo truncado, sin curvas orgánicas ni detalles decorativos).

**Construcción.** Un círculo pequeño (el origen de la luz) del que emerge un triángulo isósceles truncado y muy abierto (el haz), inscrito en una retícula cuadrada. El isotipo debe funcionar reducido a 16×16 px (favicon) sin perder legibilidad — se valida dibujándolo primero a esa escala mínima y escalando hacia arriba, no al revés.

**Logotipo completo.** Isotipo + wordmark "FARO" en versalitas (mayúsculas de la misma altura que las minúsculas, sin distinción de caja), con tracking (espaciado entre letras) ligeramente abierto, +40 a +60 unidades, para reforzar la sensación de señal/baliza más que de palabra escrita a mano.

**Versiones del logo.** Horizontal (isotipo + wordmark en línea, uso por defecto en web y papelería), apilado (isotipo sobre wordmark, para formatos cuadrados: redes sociales, favicon ampliado), y solo isotipo (para favicon, avatar, marca de agua en documentos).

**Zona de seguridad y usos incorrectos.** Margen mínimo alrededor del logo equivalente a la altura de la "F" del wordmark en cualquier dirección. Prohibido: aplicar sombra o efecto 3D, rotar el isotipo, separar el isotipo del wordmark en el uso horizontal por defecto, recolorear el isotipo con un color fuera de la paleta definida en la sección 4.

## 4. Paleta de colores

| Rol | Nombre | Hex | Uso |
|---|---|---|---|
| Primario | Azul Faro | `#1B3A4B` | Wordmark, fondos de sección oscura, CTAs principales |
| Acento | Ámbar Señal | `#E8A33D` | Isotipo (el "haz de luz"), CTAs secundarios, elementos de énfasis puntual — nunca como color de fondo extenso |
| Neutro oscuro | Grafito | `#20262B` | Texto principal sobre fondo claro |
| Neutro claro | Niebla | `#F4F1EA` | Fondo por defecto de la web (cálido, no blanco puro — evita la frialdad clínica) |
| Blanco funcional | Blanco | `#FFFFFF` | Tarjetas, formularios, contraste sobre Azul Faro |
| Éxito | Verde Ancla | `#3E7A5C` | Confirmaciones, estados positivos (ej. "cita confirmada") |
| Alerta | Rojo Baliza | `#B4453A` | Errores, alertas que requieren revisión manual (coherente con el email de resumen diario del MVP técnico) |

**Regla de uso.** El Ámbar Señal es el único acento y debe usarse con moderación — es la "luz" en un sistema por lo demás sobrio; si aparece en más del 10% de una composición, deja de funcionar como señal y se convierte en ruido. El Azul Faro es el color de mayor peso visual y debe dominar cabeceras, footer y CTAs primarios. Niebla, no blanco puro, es el fondo por defecto: el blanco puro se reserva para superficies que necesitan destacar sobre el fondo cálido (tarjetas, inputs de formulario).

**Contraste y accesibilidad.** Grafito sobre Niebla cumple WCAG AA para texto de cuerpo; Blanco sobre Azul Faro cumple AA para texto grande y AAA para texto de cuerpo. Ámbar Señal nunca se usa como color de texto sobre fondo claro (contraste insuficiente) — solo como relleno de forma o borde.

## 5. Tipografía

**Tipografía de titulares**: **Fraunces** (serif contemporánea, variable, con detalle suficiente para transmitir criterio y solidez sin caer en el clasicismo corporativo de una serif tradicional tipo Georgia). Uso en H1/H2, peso 500-600, tracking neutro.

**Tipografía de cuerpo e interfaz**: **Inter** (sans-serif de alta legibilidad, estándar de facto en producto digital, con soporte completo de acentos y ñ en español). Uso en cuerpo de texto, formularios, navegación, peso 400-500.

**Por qué esta combinación.** Una serif en titulares y una sans neutra en cuerpo comunica exactamente la tensión "cálido pero riguroso" de la dirección creativa (sección 2): la serif aporta carácter y evita que la marca se lea como "otra startup SaaS con Inter en todo", mientras que Inter en el cuerpo garantiza legibilidad funcional en formularios, tablas y contenido largo (blog, FAQ).

**Escala tipográfica** (base 16px, ratio 1.25): H1 40px/48px, H2 32px/40px, H3 24px/32px, cuerpo 16px/26px, texto pequeño/microcopy 14px/20px.

## 6. Iconografía

Set de iconos de trazo (stroke, no relleno), grosor de trazo constante 1.5px, esquinas ligeramente redondeadas (2px de radio) para que dialoguen con la geometría del isotipo sin ser completamente angulosas. Se prohíben los iconos de "IA genérica" (chips de circuito, cerebros, redes neuronales) — cada icono debe representar el proceso o resultado concreto de la clínica (un calendario para citas, un globo de mensaje para WhatsApp, un check para confirmación), nunca la tecnología subyacente. Fuente recomendada como base: Phosphor Icons (familia "regular"), adaptada al grosor de trazo del sistema.

## 7. Estilo fotográfico

Fotografía documental, no de stock genérico de "sonrisas perfectas de dentista de stock". Cuando se use fotografía real de clínica (con permiso del cliente, en casos de éxito), debe mostrar el contexto operativo real: recepción, agenda, el equipo trabajando — nunca primeros planos de dentaduras ni instrumental clínico, que pertenecen al imaginario de marketing dental al paciente final, no al imaginario B2B de FARO (que se dirige al propietario/gerente, no al paciente). Paleta de color de la fotografía tratada en tonos cálidos y desaturados que casen con Niebla y Grafito — nunca con la saturación azul-turquesa típica de fotografía de stock sanitario.

Cuando no exista fotografía real disponible (fase inicial, sin casos de éxito con fotos cedidas), se usa exclusivamente el sistema gráfico (formas geométricas del isotipo, color plano) en lugar de fotografía de stock genérica — es preferible una web sin fotos a una web con fotos de stock reconocibles que rompen la credibilidad del posicionamiento de especialización.

## 8. Ilustraciones

Ilustraciones vectoriales planas, construidas con las mismas formas geométricas simples del isotipo (círculos, triángulos truncados, líneas rectas), en la paleta de la sección 4, usadas exclusivamente para representar flujos y procesos de forma esquemática (por ejemplo, el recorrido de un mensaje de WhatsApp desde el paciente hasta la respuesta automática) — nunca ilustraciones decorativas sin función explicativa. Cada ilustración debe poder explicarse en una frase; si no, se elimina.

## 9. Animación y microinteracción

Animaciones funcionales, no decorativas: transiciones de 150-200ms en hover/focus de botones y enlaces, aparición de contenido al hacer scroll limitada a un fade + desplazamiento vertical de 8-12px (nunca rotaciones, rebotes ni efectos "playful"), y una única animación de marca permitida: el haz de luz del isotipo puede animarse sutilmente (barrido de opacidad) exclusivamente en el favicon/loader de la web, nunca repetido dentro del contenido de página.

## 10. Sistema de diseño — grid y espaciado

**Grid.** 12 columnas en desktop (máximo de contenido 1200px, márgenes laterales mínimos de 24px), 4 columnas en tablet, 1 columna con márgenes de 16px en móvil.

**Escala de espaciado** (base 8px): 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px. Todo margen, padding y separación entre secciones debe tomar un valor de esta escala — ninguna medida arbitraria fuera de ella, para mantener ritmo visual consistente entre páginas construidas en momentos distintos.

**Radio de esquina.** 8px para tarjetas y botones, 4px para inputs de formulario, 2px para iconos (coherente con sección 6) — nunca esquinas totalmente cuadradas (fricción visual con la geometría suavizada del isotipo) ni excesivamente redondeadas (asociadas a estética "app de consumo").

## 11. Componentes de interfaz (especificación base)

- **Botón primario**: fondo Azul Faro, texto Blanco, radio 8px, padding 12px/24px, hover con oscurecimiento del 8%.
- **Botón secundario**: borde 1.5px Azul Faro, texto Azul Faro, fondo transparente, hover con fondo Niebla.
- **Botón de acento** (uso muy limitado, solo CTA principal de conversión: "Agenda tu llamada"): fondo Ámbar Señal, texto Grafito (no blanco, por contraste).
- **Tarjeta**: fondo Blanco, borde 1px `#E4DFD3`, radio 8px, sombra suave `0 2px 8px rgba(27,58,75,0.08)`.
- **Formulario**: inputs con fondo Blanco, borde 1px Grafito al 20% de opacidad, radio 4px, foco con borde Azul Faro de 2px.
- **Badge de estado** (confirmada/pendiente/alerta): pastilla con radio completo (999px), fondo al 12% de opacidad del color de estado (Verde Ancla, Ámbar Señal, Rojo Baliza respectivamente), texto en el color sólido correspondiente.

## 12. Moodboard (descripción para dirección de arte)

Referencia visual: la sobriedad tipográfica de una consultora estratégica (Bain, McKinsey en sus materiales públicos más recientes) cruzada con la calidez cromática de marcas de servicios profesionales de proximidad (gestorías, notarías modernas) — nunca el imaginario de un SaaS de Silicon Valley. Superficies planas, mucho espacio en blanco (Niebla), un único acento cálido (Ámbar) usado como una luz real se usaría: puntual, no decorativo. Fotografía (cuando exista) documental y con luz natural, nunca de estudio con iluminación artificial de producto tecnológico.

## 13. Brandbook — estructura del documento maestro

El brandbook formal (documento PDF de aplicación práctica para cualquier diseñador o colaborador externo) debe incluir, en este orden: portada y propósito de marca (remite a Fase 1) · construcción y usos del logotipo (sección 3) · zona de seguridad y usos incorrectos · paleta de color con valores Hex/RGB/CMYK para impresión · tipografía y jerarquía · iconografía y su regla de uso · fotografía e ilustración · componentes de interfaz base · ejemplos de aplicación (sección 14) · contacto de referencia para dudas de marca.

## 14. Aplicaciones de marca

**Papelería y tarjetas de visita.** Fondo Niebla, isotipo en Azul Faro esquina superior izquierda, wordmark centrado en Fraunces, datos de contacto en Inter 10px en Grafito al pie — diseño deliberadamente austero, sin elementos decorativos adicionales.

**Presentaciones comerciales (pitch/propuesta).** Portada con fondo Azul Faro sólido, isotipo en Ámbar Señal centrado, wordmark en Blanco debajo — única combinación del sistema donde el acento ocupa un rol protagonista, reservada para la portada y separadores de sección, nunca en slides de contenido denso.

**Firma de correo electrónico.** Isotipo pequeño (24px) + nombre en Inter 600 + cargo en Inter 400 Grafito al 70% + enlace a la web en Azul Faro subrayado — sin banners promocionales ni iconos de redes sociales saturando la firma.

**Redes sociales (LinkedIn, principal canal B2B de FARO).** Foto de perfil: isotipo apilado sobre fondo Azul Faro. Imagen de portada: wordmark horizontal sobre Niebla con el elevator pitch de la Fase 1 como texto de apoyo, sin más elementos gráficos.

---

*Fin de la Fase 3 — Identidad visual. Esta especificación es ejecutable directamente por un diseñador gráfico o por una herramienta de generación de imágenes con estas instrucciones como prompt de dirección de arte. Próxima fase: UX y arquitectura de la web (Fase 4), que aplica esta identidad a la estructura y los flujos del sitio.*
