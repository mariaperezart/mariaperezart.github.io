# Verificación del dataset — EXP-002-clinicas-valencia

## Resumen
- Total de filas recibidas: 6
- Válidas (cumplen ICP y tienen fuente verificable): 0 — **ninguna fila tiene contacto directo verificado ni confirmación de "recepción propia" o "uso intensivo de WhatsApp"**, ambos criterios obligatorios del ICP (`FARO_MODELO_NEGOCIO.md` 3.1)
- Dudosas (señal ICP parcial, falta un dato clave): 5 (2RPValencia/Veres, Llobell, Badal, Albalat, ARTDENTA)
- Descartadas (no cumplen ICP): 1 (Teresa Badía — 2 gabinetes, por debajo del rango 4-10)

## Filas descartadas y motivo
| Nombre | Motivo del descarte |
|---|---|
| Clínica Dental Teresa Badía | 2 gabinetes, por debajo del rango ICP 4-10. Candidata al segmento "1-3 gabinetes, paquete simplificado" del roadmap, no a este experimento. |

## Filas dudosas y qué falta verificar
| Nombre | Qué falta |
|---|---|
| Clínica Dental 2RPValencia / "Clínica Veres" | Resolver la discrepancia de nombre entre fuentes; confirmar nº de gabinetes directamente en su web/ficha; obtener contacto (teléfono/formulario) |
| Clínica Llobell | Confirmar nº real de gabinetes (no especificado en la fuente); esta clínica puede estar posicionada por encima del ICP (marca personal/referencia internacional) — verificar antes de priorizar tiempo de outreach en ella |
| Clínica Dental Badal | Confirmar nº de gabinetes y si usa WhatsApp como canal de entrada (la fuente solo confirma volumen de reseñas, no estructura operativa) |
| Albalat Dental | Confirmar si las dos sedes (Valencia / Puerto de Sagunto) comparten recepción o son independientes — afecta si cumple "recepción propia" del ICP |
| ARTDENTA Valencia | Señal de volumen más débil que el resto del dataset; verificar antes de invertir tiempo de contacto, o dejarla como reserva si las otras 4 no dan suficiente volumen |

## Dataset limpio (ninguna fila lista para contacto todavía)
Ninguna fila pasa a "válida" sin verificación manual adicional. **Recomendación al Orquestador: antes de que el Redactor y el Preparador continúen, el usuario debe verificar manualmente (Google Maps / Doctoralia / la web de cada clínica) las 5 filas dudosas** y confirmar al menos: nº de gabinetes, un canal de contacto real, y si usan WhatsApp de forma visible.

**Decisión tomada para continuar la demostración del flujo:** se avanza con las 5 filas dudosas como universo de trabajo preliminar (sin enviar nada todavía), dejando explícito en `06-envio/plan_envio.md` que el usuario debe completar esta verificación antes de cualquier envío real. Esto es una excepción de demostración — en un experimento real, el Verificador debería bloquear el paso al Financiero/Redactor hasta tener al menos 15-20 filas válidas (ver `FARO_PROCESO_COMERCIAL.md` sección 2, volumen realista).
