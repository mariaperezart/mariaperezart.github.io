# FARO — Ecosistema completo del proyecto

Este repositorio contiene todo lo construido para FARO: la tesis de negocio, el modelo de negocio, la marca, el sitio web y los flujos técnicos del MVP. Este README es el punto de entrada: qué es cada cosa, y qué queda pendiente de que tú actives con tus propias cuentas y dinero real.

## 1. Documentos de estrategia

| Documento | Contenido |
|---|---|
| `FARO_IDENTIDAD_VISUAL.md` | **Vigente.** Logo, paleta, tipografía y sistema de diseño que usa la web actual, implementado en `assets/css/styles.css` |
| `archivo-clinicas/` | Los 13 documentos del proyecto anterior de automatización para clínicas dentales. Archivados, no borrados: ver `archivo-clinicas/README.md` para qué se puede reutilizar de cada uno |

## 1.1 Sistema multiagente de validación (`.claude/agents/`, `experimentos/`, `base_conocimiento/` — del proyecto de clínicas)

Construido para el proyecto de clínicas y todavía sin adaptar al estudio de diseño. Ejecuta el proceso comercial y de validación de `archivo-clinicas/FARO_PROCESO_COMERCIAL.md` con 10 agentes de Claude Code de responsabilidad única en secuencia (Orquestador, Investigador, Verificador, Financiero, Redactor, Preparador, Tracker, Analizador, Aprendizaje, Estratega), más 7 agentes independientes que no siguen esa secuencia (Marketing, Legal, Finanzas, RRHH, Producto, Éxito de Cliente, Correo/Gmail — ver la nota de honestidad en `archivo-clinicas/FARO_SISTEMA_MULTIAGENTE.md` sección 2.1: la mayoría de estos últimos tienen poco que hacer hasta que exista el primer cliente de pago, y lo dicen explícitamente en su propia definición). El Agente de Correo es el único que ya usa una integración real (Gmail: crea borradores, nunca envía) — el resto sigue en modo manual y está pensado para conectar más integraciones de forma gradual, sin rediseñar los agentes. Ver `archivo-clinicas/FARO_SISTEMA_MULTIAGENTE.md` para el protocolo completo de uso.

## 2. Sitio web (`index.html` y carpetas de página)

Sitio estático (HTML/CSS/JS, sin dependencias de build).

> 📍 **Dónde está publicado.** El sitio se sirve desde **`faroconsultoria.vercel.app`**, que Vercel despliega desde la rama `main` del repositorio **`mariaperezart/faro-app`**. GitHub Pages sigue desactivado aquí. Este repositorio es la **fuente**: se edita aquí y se copia a `faro-app` (raíz), donde la plataforma anterior de clínicas se conserva bajo `/plataforma/`, `/checkout/`, `/onboarding/` y `/dashboard/`. Si editas la web directamente en `faro-app`, los dos repos divergen.

> ⚠️ **El sitio ya no es el de la automatización para clínicas dentales.** Desde agosto de 2026 la web es la del **estudio de diseño web y gráfico de El Bierzo y León** (`plan-negocio/`), que es el negocio que se va a arrancar de verdad. Se mantiene el nombre FARO y el sistema visual completo de `FARO_IDENTIDAD_VISUAL.md` — logo, paleta, tipografías y componentes no han cambiado.
>
> Los documentos de la tesis anterior están en `archivo-clinicas/`, con un índice de qué se puede reutilizar de cada uno. Si algún día se retoma el proyecto de clínicas, hay que decidir antes si comparte marca con el estudio.

| Página | Contenido |
|---|---|
| `/` | Portada: propuesta de valor, tres problemas típicos, proceso, precios y alcance |
| `/servicios/` + 4 subpáginas | Diseño web · Identidad visual · Mantenimiento · SEO local |
| `/precios/` | Hoja de precios completa (1.200 € / desde 2.900 € / 950 € / 80 €/mes / 250 €/mes) |
| `/como-funciona/` | El proceso en 6 pasos y qué se necesita del cliente |
| `/quienes-somos/` | El estudio, los compromisos y la zona de trabajo |
| `/diagnostico/` | Autodiagnóstico de 8 preguntas (se resuelve en el navegador, no envía nada) |
| `/preguntas-frecuentes/` | 14 preguntas con datos estructurados `FAQPage` |
| `/contacto/`, `/gracias/`, `/404.html`, `/legal/*` | Resto del sitio |

Los precios y plazos publicados son exactamente los del plan de negocio (`plan-negocio/kit-arranque/06_PRESUPUESTO_TIPO.md`): si se cambian ahí, hay que cambiarlos aquí.

## 2.1 Plan de negocio de diseño web (`plan-negocio/`)

Adaptación a **León 2026** del plan de negocio original (plantilla INCYNCO, 2023). **Es el negocio que hay detrás de la web actual**, no un proyecto aparte.

El modelo financiero está construido sobre una hipótesis concreta: **una sola persona retribuida, trabajando desde casa, con tarifa plana de autónomos y sin capital inicial** (ordenador y conexión ya en propiedad). El punto de equilibrio sale en 9.082 € anuales, el 26 % de la facturación prevista.

| Archivo | Contenido |
|---|---|
| `plan-negocio/ANALISIS_Y_ADAPTACION_LEON_2026.md` | Análisis de los errores del plan original (fiscalidad canaria, salario bajo SMI, ventas despejadas en lugar de previstas, estructura sobredimensionada) y justificación de cada cambio |
| `plan-negocio/PLAN_NEGOCIO_LEON_2026.xlsx` | El libro adaptado: misma plantilla y mismas fórmulas, con los datos, la normativa y el mercado de 2026 |
| `plan-negocio/kit-arranque/` | Kit de arranque completo: checklist, guía fiscal, contrato, RGPD, prospección de León y Ponferrada, y los documentos 13 y 14 sobre el segundo socio |

**Nota:** el arranque comercial se hace en **Ponferrada y El Bierzo** con un segundo socio (labor comercial), figura fiscal aún sin formalizar. El modelo financiero del `.xlsx` sigue calculado para **una sola persona retribuida**; los documentos 13 y 14 del kit explican el umbral de facturación a partir del cual puede retribuirse al segundo.

Contiene datos personales y financieros reales — este repositorio es privado y no tiene GitHub Pages activo, así que no se publica.

## 3. Automatización técnica (`n8n/`, `sql/`)

- `sql/schema.sql` — esquema de base de datos del MVP.
- `n8n/flujo-a-respuesta-fuera-de-horario.json` y `n8n/flujo-b-confirmacion-cita.json` — workflows importables en n8n.
- `n8n/README.md` — instrucciones de importación y configuración.

---

## 4. Checklist de puesta en marcha real

Todo lo de arriba es código y contenido — está terminado. Lo que sigue son acciones que **solo tú puedes ejecutar**, porque requieren tu identidad legal, tu método de pago o tus propias cuentas. Ningún asistente puede completarlas por ti.

### Publicar la web (ya desplegada, queda comprobarla)
- [x] La web está empujada a `main` de `mariaperezart/faro-app`; Vercel la despliega sola en cada push.
- [ ] **Abrir `faroconsultoria.vercel.app` y comprobar que sirve la web nueva.** No se ha podido verificar desde la sesión: la política de red del entorno bloquea `vercel.app`.
- [ ] Comprobar que las tipografías cargan (Google Fonts se sirve desde fuera y aquí estaba bloqueado).
- [ ] Fusionar a `main` de este repositorio la rama `claude/ponferrada-2026-analysis-jsknfv`, que es donde vive la fuente.
- [ ] Si quieres un dominio propio (ej. `faroconsultoria.es`), registrarlo y añadirlo en el proyecto de Vercel → Settings → Domains. Al hacerlo, actualizar la constante `BASE` de los `canonical`, `og:url` y `sitemap.xml`.

### Conectar los formularios (gratis o de bajo coste, ~20 minutos)
- [ ] Crear una cuenta en un servicio de formularios (Formspree, Getform, o similar).
- [ ] Sustituir `https://formspree.io/f/TU_ID_DE_FORMSPREE` en `contacto/index.html` por tu endpoint real.
- [ ] Sustituir `hola@faro.es` por el correo real en `contacto/index.html` (aparece 2 veces) y añadir teléfono si quieres recibir llamadas. El autodiagnóstico de `/diagnostico/` no necesita backend: se resuelve entero en el navegador y no envía nada.

### Antes de dar la web por buena
- [ ] Confirmar si el estudio se va a llamar FARO de cara al cliente. Si cambia, hay que tocar el logo (`assets/img/`), el `<title>` de las 15 páginas y el JSON-LD.
- [ ] **Salir a hacer las 20-30 visitas antes de volver a tocar el copy.** La web está escrita por criterio, no por evidencia. El registro de objeciones de `plan-negocio/kit-arranque/11_GUION_ENTREVISTAS.md` sección 7 dice cuándo reescribirla y con qué: cuando la misma objeción salga en 6 de 10 visitas.
- [ ] **Decidir el ángulo de diferenciación** con lo que salga de esas visitas. Hoy la web compite con cualquier freelance de la zona: la única afirmación diferenciadora y comprobable que hace es que el dominio y los accesos quedan a nombre del cliente.

### Revisión legal (coste variable, antes de publicar)
- [ ] Completar en `/legal/terminos/` y `/legal/privacidad/` los datos identificativos reales (nombre, NIF, domicilio, correo): la Ley 34/2002 los exige y hoy son marcadores de posición.
- [ ] Que la asesoría o un abogado revise los tres textos legales antes de operar con datos de clientes. Están alineados con `plan-negocio/kit-arranque/08_TEXTOS_LEGALES_WEB.md`.

### Infraestructura técnica del MVP (~30-75€/mes, ver `FARO_TESIS_MVP_60DIAS.md` sección 2.8)
- [ ] Contratar un VPS (recomendado Hetzner CX22).
- [ ] Instalar Docker, n8n self-hosted y PostgreSQL; ejecutar `sql/schema.sql`.
- [ ] Crear cuenta de Meta Business Manager y verificar el negocio (gratuito, 1-5 días hábiles).
- [ ] Dar de alta un número de WhatsApp Business y solicitar aprobación de la plantilla `recordatorio_cita_es`.
- [ ] Crear cuenta de OpenAI con facturación activa para la API de `gpt-4o-mini`.
- [ ] Importar y configurar los flujos de `n8n/` siguiendo `n8n/README.md`.
- [ ] Probar todo en modo sandbox antes de conectar el número real de una clínica.

### Validación comercial (tiempo, no dinero — ver `FARO_TESIS_MVP_60DIAS.md`, Plan de 60 días)
- [ ] Preparar la lista de 100-150 clínicas objetivo.
- [ ] Iniciar outreach siguiendo `FARO_PROCESO_COMERCIAL.md`.
- [ ] Cerrar la primera clínica piloto y ejecutar el checklist de onboarding (Anexo 4.3 de la tesis inicial).

---

*Ningún paso de esta lista está hecho todavía — son las acciones concretas que convierten este repositorio de "documentación y código" en "negocio en marcha". El orden sugerido prioriza lo gratuito y reversible (publicar la web) antes que lo que cuesta dinero real (VPS, verificación de Meta).*
