# Flujos n8n de FARO

Workflows exportables para el MVP técnico descrito en `FARO_TESIS_MVP_60DIAS.md` (Parte 2). Son plantillas de partida, no un producto terminado: antes de usarlos con pacientes reales hay que configurar credenciales, revisar el manejo de errores y probarlos en modo sandbox.

## Qué contiene esta carpeta

- `flujo-a-respuesta-fuera-de-horario.json` — responde automáticamente los mensajes de WhatsApp que llegan fuera del horario de la clínica (ver spec en `FARO_TESIS_MVP_60DIAS.md`, sección 2.3).
- `flujo-b-confirmacion-cita.json` — envía recordatorio de cita 24h antes y procesa la respuesta del paciente (botón o texto libre) (ver spec, sección 2.4).

## Requisitos previos (acciones que solo tú puedes hacer)

Ninguno de estos pasos puede completarlos un asistente por ti — requieren tu identidad legal, tu método de pago y tus propias cuentas:

1. **VPS**: contratar el servidor (recomendado Hetzner CX22, ver `FARO_TESIS_MVP_60DIAS.md` sección 2.2) e instalar Docker + n8n self-hosted + PostgreSQL.
2. **Base de datos**: ejecutar `sql/schema.sql` (en la raíz del repo) contra tu instancia de PostgreSQL.
3. **Meta Business Manager**: crear la cuenta, verificar el negocio, dar de alta el número de WhatsApp Business y obtener el `access_token` permanente, el `phone_number_id` y el `business_account_id` (ver `FARO_TESIS_MVP_60DIAS.md`, sección 2.6, paso a paso).
4. **Plantilla de Meta**: dar de alta y esperar aprobación de la plantilla `recordatorio_cita_es` (categoría Utility) usada por el Flujo B.
5. **Cuenta de OpenAI**: obtener una API key con acceso a `gpt-4o-mini` y saldo de facturación activo.
6. **Dominio y SSL**: apuntar tu dominio al VPS y configurar HTTPS (Let's Encrypt) — el webhook de Meta exige HTTPS válido.

## Cómo importar

1. En tu instancia de n8n: **Workflows → Import from File** → selecciona cada `.json` de esta carpeta.
2. Cada nodo con `"id": "REPLACE_ME"` en sus credenciales necesita que crees la credencial correspondiente en n8n y la asignes:
   - **Postgres FARO** — credencial de tipo Postgres, apuntando a tu base de datos.
   - **OpenAI FARO** — credencial de tipo OpenAI API, con tu API key.
   - **WhatsApp Cloud API - Bearer token** — credencial de tipo "Header Auth" con cabecera `Authorization: Bearer TU_ACCESS_TOKEN` de Meta.
3. En el nodo **Notificar urgencia al equipo** (Flujo A), sustituye `NUMERO_MOVIL_CLINICA` por el número real al que debe llegar la alerta de urgencia.
4. Activa cada webhook copiando su URL de producción (`https://tu-dominio/webhook/faro/...`) y configurándola en el panel de Meta for Developers como webhook de la app de WhatsApp, suscrita al campo `messages`.
5. Prueba de extremo a extremo en modo sandbox (número de prueba de Meta) **antes** de conectar el número real de una clínica — ver checklist de onboarding en `FARO_TESIS_MVP_60DIAS.md`, Anexo 4.3.

## Limitaciones deliberadas de esta versión

- El Flujo B modela la recepción de respuestas del paciente en un webhook separado por claridad pedagógica; en producción, ambos flujos (A y B) deben fusionarse en un único webhook de entrada de WhatsApp con enrutamiento por tipo de conversación, para evitar que Meta rechace webhooks duplicados sobre el mismo número.
- Los nodos HTTP Request a la API de Meta usan autenticación por cabecera (Bearer token) en lugar del nodo nativo `WhatsApp Business Cloud` de n8n, para garantizar compatibilidad con cualquier versión de n8n self-hosted.
- El nodo `Actualizar estado de la cita` del Flujo B simplifica la búsqueda de la cita asociada a la conversación; en producción, pasa el `appointment_id` explícitamente entre nodos en lugar de re-derivarlo por subconsulta, para evitar ambigüedad si un paciente tiene más de una cita pendiente de confirmar.
- No incluye el Flujo C (email de resumen diario) como JSON todavía — su lógica (sección 2.7 del documento técnico) es más sencilla (una consulta agregada + envío de email) y se recomienda construirlo directamente en tu instancia de n8n una vez estén operativos A y B.
