# FARO — Ecosistema completo del proyecto

Este repositorio contiene todo lo construido para FARO: la tesis de negocio, el modelo de negocio, la marca, el sitio web y los flujos técnicos del MVP. Este README es el punto de entrada: qué es cada cosa, y qué queda pendiente de que tú actives con tus propias cuentas y dinero real.

## 1. Documentos de estrategia (`FARO_*.md`)

| Documento | Contenido |
|---|---|
| `FARO_TESIS_MVP_60DIAS.md` | Tesis de negocio, especificación técnica del MVP (2 flujos) y plan de 60 días |
| `FARO_ESTRATEGIA_MARCA.md` | Propósito, posicionamiento, narrativa, elevator pitch |
| `FARO_MODELO_NEGOCIO.md` | Business Model Canvas, Lean Canvas, ICP, buyer persona, pricing, riesgos |
| `FARO_IDENTIDAD_VISUAL.md` | Logo, paleta, tipografía, sistema de diseño |
| `FARO_UX_ARQUITECTURA.md` | Mapa del sitio, user flows, wireframes |
| `FARO_WEB_COPY.md` | Copy final de cada página + SEO on-page |
| `FARO_SEO_CONTENIDOS.md` | Keyword research, calendario editorial |
| `FARO_PROCESO_COMERCIAL.md` | Embudo comercial completo, outbound → referidos |
| `FARO_BIBLIOTECA_AUTOMATIZACIONES.md` | 100 casos de uso de automatización clasificados |
| `FARO_SISTEMA_MULTIAGENTE.md` | Sistema de 10 agentes de Claude Code para ejecutar experimentos de validación/crecimiento de forma repetible |
| `FARO_AGENTES_VERTICALES.md` | Investigación (nivel de evidencia 🟡, tratar como hipótesis) sobre si el propio producto de FARO debería evolucionar hacia una familia de agentes especializados de cara al cliente |
| `FARO_MARCA_Y_MARGEN.md` | Investigación (nivel de evidencia 🟡, tratar como hipótesis) sobre si la marca debería gestionarse como palanca de margen y de capacidad, no solo de captación |

Cada documento referencia a los anteriores en vez de repetirlos — léelos en este orden si es tu primera vez.

## 1.1 Sistema multiagente de validación (`.claude/agents/`, `experimentos/`, `base_conocimiento/`)

Ejecuta el proceso comercial y de validación de `FARO_PROCESO_COMERCIAL.md` con 10 agentes de Claude Code de responsabilidad única (Orquestador, Investigador, Verificador, Financiero, Redactor, Preparador, Tracker, Analizador, Aprendizaje, Estratega). Funciona hoy en modo manual (sin APIs) y está pensado para conectar integraciones (búsqueda, CRM, WhatsApp Business) de forma gradual, sin rediseñar los agentes. Ver `FARO_SISTEMA_MULTIAGENTE.md` para el protocolo completo de uso.

## 2. Sitio web (`index.html` y carpetas de página)

Sitio estático (HTML/CSS/JS, sin dependencias de build) que implementa el copy y diseño de los documentos anteriores. Pensado para publicarse vía GitHub Pages directamente desde este repositorio.

## 3. Automatización técnica (`n8n/`, `sql/`)

- `sql/schema.sql` — esquema de base de datos del MVP.
- `n8n/flujo-a-respuesta-fuera-de-horario.json` y `n8n/flujo-b-confirmacion-cita.json` — workflows importables en n8n.
- `n8n/README.md` — instrucciones de importación y configuración.

---

## 4. Checklist de puesta en marcha real

Todo lo de arriba es código y contenido — está terminado. Lo que sigue son acciones que **solo tú puedes ejecutar**, porque requieren tu identidad legal, tu método de pago o tus propias cuentas. Ningún asistente puede completarlas por ti.

### Publicar la web (gratis, ~15 minutos)
- [ ] Fusionar a `main` la pull request abierta con el trabajo más reciente (o la rama activa en ese momento, si hay una PR sin fusionar — revisa qué rama tiene los últimos commits antes de publicar, `main` puede estar por detrás de una rama `claude/...` en curso).
- [ ] En GitHub: **Settings → Pages** de este repositorio → fuente = rama `main` → carpeta raíz.
- [ ] Confirmar que `mariaperezart.github.io` sirve la web (puede tardar unos minutos en propagarse).
- [ ] Si quieres un dominio propio (ej. `faro.clinic`), registrarlo y configurarlo en Settings → Pages → Custom domain.

### Conectar los formularios (gratis o de bajo coste, ~20 minutos)
- [ ] Crear una cuenta en un servicio de formularios (Formspree, Getform, o similar).
- [ ] Sustituir `https://formspree.io/f/TU_ID_DE_FORMSPREE` en `contacto/index.html` por tu endpoint real.
- [ ] Repetir para el formulario de `/diagnostico/` si decides conectarlo a un backend real (hoy calcula en el navegador sin enviar datos a ningún sitio).
- [ ] Sustituir el email y teléfono de ejemplo en `/contacto/` por los reales.

### Revisión legal (coste variable, recomendable antes de operar con datos de pacientes)
- [ ] Encargar a un abogado especializado en protección de datos sanitarios la redacción de `/legal/privacidad/`, `/legal/terminos/` y `/legal/cookies/` (hoy son marcadores de posición, ver `FARO_WEB_COPY.md`, sección 12).

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
