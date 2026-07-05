# FARO — Sistema Multiagente de Validación y Crecimiento

**Fase 9 del ecosistema empresarial FARO**
Construye sobre `FARO_PROCESO_COMERCIAL.md` (embudo comercial), `FARO_MODELO_NEGOCIO.md` (ICP y pricing) y `FARO_TESIS_MVP_60DIAS.md` (hipótesis de negocio a validar). No repite esos contenidos — los convierte en un proceso operativo de 10 agentes especializados de Claude Code que ejecutan experimentos de validación y crecimiento de forma repetible.

## 1. Qué resuelve

Cada vez que hay que probar algo de FARO (un nicho nuevo, un mensaje nuevo, un pricing nuevo), el trabajo se repite: buscar prospectos, verificar el dataset, calcular si compensa, escribir mensajes, enviarlos, registrar respuestas, medir y decidir qué probar después. Este sistema divide ese trabajo en 10 agentes de responsabilidad única (`.claude/agents/`) que se ejecutan en secuencia dentro de una carpeta de experimento (`experimentos/EXP-XXX-.../`), y acumula lo aprendido en `base_conocimiento/` para que cada experimento nuevo parta de más información que el anterior.

## 2. Los 10 agentes

| # | Agente | Responsabilidad |
|---|---|---|
| 01 | Orquestador | Abre el experimento y decide qué agente actúa a continuación |
| 02 | Financiero | Viabilidad económica: TAM/SAM/SOM, escenarios de facturación, CAC/LTV, GO/NO-GO |
| 03 | Investigador | Genera el dataset de prospectos del nicho/zona a validar |
| 04 | Verificador | Audita el dataset: descarta duplicados, marca datos no verificables |
| 05 | Redactor | Escribe hasta 3 variantes de mensaje de prospección |
| 06 | Preparador | Reparte prospectos entre variantes y arma el plan de envío |
| 07 | Tracker | Registra las respuestas que el usuario informa |
| 08 | Analizador | Calcula tasas de respuesta/conversión y el cuello de botella del embudo |
| 09 | Aprendizaje | Extrae qué funcionó y actualiza `base_conocimiento/` |
| 10 | Estratega | Propone el siguiente experimento con hipótesis refinadas |

Cada definición en `.claude/agents/NN-nombre.md` sigue el mismo formato: Responsabilidad única, qué NO debe hacer, entrada, salida (ruta exacta del archivo que produce) y reglas. Puedes pedirle a Claude Code que actúe como uno solo de estos agentes sin ejecutar el flujo completo — por ejemplo, para un análisis financiero puntual sin abrir un experimento nuevo.

## 3. Estructura de carpetas

```
.claude/agents/           10 definiciones de agente (ver tabla arriba)
experimentos/
  EXP-001-ejemplo/        plantilla — cópiala para cada experimento nuevo
    00-objetivo.md        define el usuario
    plan.md               mantiene el Orquestador (secuencia + estado actual)
    02-investigacion/     Investigador
    03-verificacion.md    Verificador
    04-analisis_financiero.md   Financiero
    05-mensajes/          Redactor
    06-envio/             Preparador
    07-resultados.md      Tracker
    08-analisis_resultados.md   Analizador
    09-aprendizajes.md    Aprendizaje
    10-recomendacion.md   Estratega
base_conocimiento/
  patrones_detectados.md
  mensajes_efectivos.md
  sectores_validados.md
  metricas_historicas.md
```

## 4. Fase 1 — modo manual (sin APIs, disponible ya)

El flujo completo funciona hoy sin ninguna integración: el Investigador entrega queries y plantillas para que el usuario busque manualmente (Google Maps, Doctoralia, LinkedIn); el Preparador entrega mensajes listos para copiar/pegar en email o WhatsApp Web; el Tracker registra lo que el usuario informa a mano.

**Cómo lanzar un experimento:**
1. Copia `experimentos/EXP-001-ejemplo/` a `experimentos/EXP-XXX-<slug-descriptivo>/` (o pide al Orquestador que lo haga).
2. Rellena `00-objetivo.md` con el objetivo real.
3. Pide a Claude Code, en orden: "actúa como el Agente Investigador para EXP-XXX", luego Verificador, Financiero, Redactor, Preparador.
4. Envía los mensajes manualmente siguiendo `06-envio/plan_envio.md`.
5. Informa las respuestas a medida que lleguen — pide "actúa como el Tracker" para registrarlas.
6. Al terminar la ventana del experimento (ver `00-objetivo.md`), pide Analizador → Aprendizaje → Estratega, en ese orden.
7. Revisa `10-recomendacion.md` y decide si abres el siguiente experimento.

## 5. Fase 2 — con APIs (transición gradual, no requiere rediseñar los agentes)

Las definiciones de agente no cambian; cambia solo su capacidad de actuar. Conecta las integraciones una a una, en el orden que más outreach manual te esté costando hoy:

| Agente | Fase 1 (manual) | Fase 2 (con API) |
|---|---|---|
| Investigador | Queries para búsqueda manual | Apollo.io / SerpAPI / scraping de Google Maps |
| Preparador | `plan_envio.md` para copiar/pegar | CRM (HubSpot, Pipedrive) o API de email/WhatsApp Business |
| Tracker | El usuario informa respuestas | Webhook de email/calendario/WhatsApp |
| Analizador | Lee archivos `.md` del experimento | Lee de base de datos/API si el volumen ya lo justifica |

Antes de activar cualquier envío automático real (email masivo, WhatsApp Business API), confirma explícitamente con el usuario — es una acción de cara al exterior y no reversible una vez enviada.

## 6. Reglas del sistema

1. Ningún agente ejecuta el trabajo de otro — si necesitas que alguien investigue y calcule viabilidad a la vez, invoca a los dos agentes en secuencia, no le pidas a uno que haga ambas cosas.
2. Toda cifra de mercado o pricing debe trazarse a un documento `FARO_*.md` o al dataset del experimento — nunca a una estimación genérica de "el sector dental en España".
3. La base de conocimiento (`base_conocimiento/`) solo se actualiza con aprendizajes respaldados por datos del Analizador, para que no se llene de opiniones no verificadas.
4. El usuario aprueba siempre el paso de "proponer próximo experimento" a "abrir próximo experimento" — el Estratega recomienda, no decide.
