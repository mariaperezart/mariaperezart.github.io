# Verificación del dataset — EXP-002-clinicas-valencia

## Resumen (actualizado tras ampliación del dataset a 11 filas)
- Total de filas recibidas: 11 (de las cuales 1, "Clínica Dental 2RP", es casi con certeza duplicada de la fila "2RPValencia" — se trata como una sola clínica, no como candidato adicional)
- Total de clínicas distintas: 10
- Válidas (cumplen ICP y tienen fuente verificable): 0 — **ninguna fila tiene contacto directo verificado ni confirmación de "recepción propia" o "uso intensivo de WhatsApp"**, ambos criterios obligatorios del ICP (`FARO_MODELO_NEGOCIO.md` 3.1)
- Dudosas (señal ICP parcial, falta un dato clave): 8 (2RPValencia/2RP fusionada, Llobell, Badal, Albalat, ARTDENTA, Dentalmedica, Dra. Clara Martínez Valero, Dr. Pedroza, Paloma Tortosa) — nota: son 9 nombres pero 2RP cuenta como 1
- Descartadas (no cumplen ICP): 2 (Teresa Badía — tamaño; +Dental Benimaclet — cadena corporativa)

## Filas descartadas y motivo
| Nombre | Motivo del descarte |
|---|---|
| Clínica Dental Teresa Badía | 2 gabinetes, por debajo del rango ICP 4-10. Candidata al segmento "1-3 gabinetes, paquete simplificado" del roadmap, no a este experimento. |
| +Dental Benimaclet | Franquicia de cadena nacional — el ICP excluye explícitamente cadenas corporativas (`FARO_MODELO_NEGOCIO.md` 3.1: "no cadena corporativa"), porque la decisión de compra no es local. |

## Filas dudosas y qué falta verificar
| Nombre | Qué falta |
|---|---|
| Clínica Dental 2RP / "2RPValencia" / "Clínica Veres" | Confirmar que 2RP y 2RPValencia son la misma clínica (muy probable) y que "Veres" es un error de una fuente distinta; luego confirmar nº de gabinetes directamente en su web y obtener contacto (teléfono/formulario) |
| Clínica Llobell | Confirmar nº real de gabinetes (no especificado en la fuente); esta clínica puede estar posicionada por encima del ICP (marca personal/referencia internacional) — verificar antes de priorizar tiempo de outreach en ella |
| Clínica Dental Badal | Confirmar nº de gabinetes y si usa WhatsApp como canal de entrada (la fuente solo confirma volumen de reseñas, no estructura operativa) |
| Albalat Dental | Confirmar si las dos sedes (Valencia / Puerto de Sagunto) comparten recepción o son independientes — afecta si cumple "recepción propia" del ICP |
| ARTDENTA Valencia | Señal de volumen más débil que el resto del dataset; verificar antes de invertir tiempo de contacto |
| Dentalmedica | Tiene dirección física exacta (Calle Martí 13, Ruzafa) — de las más rápidas de verificar; confirmar nº de gabinetes y teléfono |
| Clínica Dental Dra. Clara Martínez Valero | Confirmar si es consulta individual o clínica de varios gabinetes antes de asumir que cumple ICP — el nombre de un solo profesional es una señal de alerta |
| Centro Odontológico Dr. Pedroza | Misma reserva que la anterior: confirmar nº de gabinetes |
| Clínica Dental Paloma Tortosa | Confirmar si la sede de Valencia por sí sola alcanza 4+ gabinetes, o si el tamaño ICP solo se cumple sumando la sede de Ontinyent (no valdría) |

## Priorización sugerida para la verificación manual
Empezar por las 3 filas con dirección física exacta ya conocida (Dentalmedica, Dra. Clara Martínez Valero, Dr. Pedroza) — requieren menos pasos para confirmar teléfono/web real que el resto.

## Dataset limpio (ninguna fila lista para contacto todavía)
Ninguna fila pasa a "válida" sin verificación manual adicional. **Recomendación al Orquestador: antes de que el Redactor y el Preparador continúen, el usuario debe verificar manualmente (Google Maps / Doctoralia / la web de cada clínica) las 9 filas dudosas** (empezando por las 3 con dirección conocida) y confirmar al menos: nº de gabinetes, un canal de contacto real, y si usan WhatsApp de forma visible.

**Decisión tomada para continuar la demostración del flujo:** se avanza con las 9 filas dudosas (10 nombres, 2RP fusionada) como universo de trabajo preliminar (sin enviar nada todavía), dejando explícito en `06-envio/plan_envio.md` que el usuario debe completar esta verificación antes de cualquier envío real. Esto sigue siendo una excepción de demostración — en un experimento real, el Verificador debería bloquear el paso al Financiero/Redactor hasta tener al menos 15-20 filas válidas y verificadas (ver `FARO_PROCESO_COMERCIAL.md` sección 2, volumen realista). El dataset ha pasado de 5 a 9 candidatos dudosos tras una segunda ronda de búsqueda, pero sigue sin alcanzar ese umbral ni tener ningún contacto confirmado.
