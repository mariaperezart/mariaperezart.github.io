# Verificación del dataset — EXP-002-clinicas-valencia

## Resumen (actualizado tras verificación manual del usuario + comprobación cruzada de Claude, 2026-07-06)
- Total de filas recibidas: 11 (de las cuales 1, "Clínica Dental 2RP", es casi con certeza duplicada de la fila "2RPValencia" — se trata como una sola clínica, no como candidato adicional)
- Total de clínicas distintas: 10
- **Válidas (contacto real verificado de forma independiente): 3** — 2RP, Badal, Dra. Clara Martínez Valero. Ver sección "Filas válidas" abajo.
- Dudosas (señal ICP parcial, falta un dato clave, o contacto sin verificar de forma independiente): 5 (Llobell, Albalat, ARTDENTA, Dentalmedica, Dr. Pedroza, Paloma Tortosa)
- Descartadas (no cumplen ICP): 2 (Teresa Badía — tamaño; +Dental Benimaclet — cadena corporativa)

## Filas válidas — contacto verificado de forma independiente (WebSearch cruzado por Claude sobre lo aportado por el usuario)

| Nombre | Teléfono | Email | Dirección | Decisor/a | Gabinetes | Fuente de la verificación |
|---|---|---|---|---|---|---|
| Clínica Dental 2RP | 96 331 31 27 (WhatsApp también disponible) | — (no confirmado) | C/ Alfahuir, 39, Valencia | No encontrado (ni por el usuario ni por Claude) | 4 (según búsqueda del usuario — **no verificado de forma independiente por Claude**, solo el contacto/dirección) | [2rpodontologos.es/contacto](https://2rpodontologos.es/contacto/) |
| Clínica Dental Badal | 601 083 519 / 963 481 642 | clinica@clinicabadal.es | C/ Llano de Zaidía, 14 bajo, 46009 Valencia | Dra. Charo Badal (dirección compartida con su hija Marta) | No especificado en ninguna fuente — sigue pendiente | [clinicabadal.es/contacto](https://clinicabadal.es/contacto), [dentalq.es](https://dentalq.es/clinica-dental-badal-zaidia-valencia/) |
| Clínica Dental Dra. Clara Martínez Valero | 963 46 16 36 | Sin confirmar de forma independiente (el usuario reportó `info@clinicasaludental.com` — la clínica sí opera también como "Clínica Salud Dental" en Facebook/Doctoralia, así que el dominio distinto no es una inconsistencia, es una marca secundaria real) | C/ La Marina Alta, 4 bajo, 46015 Valencia | Dra. Clara Martínez Valero (directora desde 2001) | No especificado — sigue pendiente | [clinicaclaramartinezvalero.com](https://www.clinicaclaramartinezvalero.com/), [doctoralia.es](https://www.doctoralia.es/clara-martinez-valero/dentista/valencia) |

**Importante**: el nº de gabinetes de las 3 sigue sin confirmarse de forma independiente por Claude (solo teléfono/dirección/decisor). No asumir automáticamente que cumplen el rango 4-10 del ICP — es la pregunta a hacer en la propia llamada de discovery si hace falta, no algo a bloquear el envío del primer contacto.

## Filas descartadas y motivo
| Nombre | Motivo del descarte |
|---|---|
| Clínica Dental Teresa Badía | 2 gabinetes, por debajo del rango ICP 4-10. Candidata al segmento "1-3 gabinetes, paquete simplificado" del roadmap, no a este experimento. |
| +Dental Benimaclet | Franquicia de cadena nacional — el ICP excluye explícitamente cadenas corporativas (`FARO_MODELO_NEGOCIO.md` 3.1: "no cadena corporativa"), porque la decisión de compra no es local. |

## Filas dudosas y qué falta verificar
| Nombre | Qué falta |
|---|---|
| Clínica Llobell | Confirmar nº real de gabinetes (no especificado en la fuente); esta clínica puede estar posicionada por encima del ICP (marca personal/referencia internacional) — verificar antes de priorizar tiempo de outreach en ella |
| Albalat Dental | Confirmar si las dos sedes (Valencia / Puerto de Sagunto) comparten recepción o son independientes — afecta si cumple "recepción propia" del ICP |
| ARTDENTA Valencia | Señal de volumen más débil que el resto del dataset; verificar antes de invertir tiempo de contacto |
| Dentalmedica | Tiene dirección física exacta (Calle Martí 13, Ruzafa) — de las más rápidas de verificar; confirmar nº de gabinetes y teléfono |
| Centro Odontológico Dr. Pedroza | Confirmar nº de gabinetes y si las dos direcciones reportadas por el usuario (C/ Yecla y C/ Gorgos) son la misma clínica que se mudó o dos sedes distintas |
| Clínica Dental Paloma Tortosa | Confirmar si la sede de Valencia por sí sola alcanza 4+ gabinetes, o si el tamaño ICP solo se cumple sumando la sede de Ontinyent (no valdría) — nicho especializado en odontopediatría/ortodoncia, verificar encaje de mensaje |

## Dataset limpio — 3 filas listas para contactar
**2RP, Badal y Dra. Clara Martínez Valero** tienen contacto real verificado de forma independiente (ver tabla de arriba) y pasan a `06-envio/asignacion.md` como Lote A. El nº de gabinetes de las 3 sigue sin confirmar — no es un bloqueo para el primer contacto, es una pregunta legítima para la propia conversación si surge.

Las 6 filas restantes (Llobell, Albalat, ARTDENTA, Dentalmedica, Dr. Pedroza, Paloma Tortosa) tienen datos de contacto reportados por el usuario pero **sin la comprobación cruzada independiente** que sí se hizo para el Lote A — antes de enviarles nada, repetir el mismo tipo de verificación (buscar el dato de forma independiente, no solo confiar en un único reporte).

Sigue habiendo menos de las 15-20 filas válidas que `FARO_PROCESO_COMERCIAL.md` sección 2 considera volumen semanal realista — 3 es un lote inicial suficiente para probar el flujo de envío, no para cerrar el universo de contacto del experimento.
