# Verificación del dataset — EXP-002-clinicas-valencia

## Resumen (actualizado 2026-07-09 — Lote B verificado de forma independiente por Claude; corregido error aritmético en esta misma fecha, ver nota)
- Total de filas recibidas: 11 (de las cuales 1, "Clínica Dental 2RP", es casi con certeza duplicada de la fila "2RPValencia" — se trata como una sola clínica, no como candidato adicional)
- Total de clínicas distintas dentro de la tabla de `dataset.md`: 10
- **Válidas (contacto real verificado de forma independiente): 6** — 2RP, Badal, Dra. Clara Martínez Valero (verificadas 2026-07-06), Dentalmedica, Albalat Dental, Dr. Pedroza (verificadas 2026-07-09). Ver sección "Filas válidas" abajo.
- Dudosas (señal ICP parcial, falta un dato clave, o contacto sin verificar de forma independiente): 2 (Llobell, ARTDENTA)
- Sin encaje claro de tamaño: 1 (Paloma Tortosa — ver nota)
- Descartada dentro de las 10 (no cumple ICP): 1 (Teresa Badía — tamaño)
- 6 + 2 + 1 + 1 = 10 ✓

**Nota de corrección (2026-07-09)**: la versión anterior de este resumen contaba "+Dental Benimaclet" como una de las 10 clínicas distintas descartadas, pero esa fila nunca estuvo en la tabla de `dataset.md` — está en su sección aparte "Candidatos descartados en la propia búsqueda (no incluidos en la tabla)". Se mantiene como referencia (es una franquicia de cadena nacional, no encaja en el ICP), pero no cuenta dentro del total de 10.

## Filas válidas — contacto verificado de forma independiente (WebSearch cruzado por Claude sobre lo aportado por el usuario)

| Nombre | Teléfono | Email | Dirección | Decisor/a | Gabinetes | Fuente de la verificación |
|---|---|---|---|---|---|---|
| Clínica Dental 2RP | 96 331 31 27 (WhatsApp también disponible) | — (no confirmado) | C/ Alfahuir, 39, Valencia | No encontrado (ni por el usuario ni por Claude) | 4 (según búsqueda del usuario — **no verificado de forma independiente por Claude**, solo el contacto/dirección) | [2rpodontologos.es/contacto](https://2rpodontologos.es/contacto/) |
| Clínica Dental Badal | 601 083 519 / 963 481 642 | clinica@clinicabadal.es | C/ Llano de Zaidía, 14 bajo, 46009 Valencia | Dra. Charo Badal (dirección compartida con su hija Marta) | No especificado en ninguna fuente — sigue pendiente | [clinicabadal.es/contacto](https://clinicabadal.es/contacto), [dentalq.es](https://dentalq.es/clinica-dental-badal-zaidia-valencia/) |
| Clínica Dental Dra. Clara Martínez Valero | 963 46 16 36 | Sin confirmar de forma independiente (el usuario reportó `info@clinicasaludental.com` — la clínica sí opera también como "Clínica Salud Dental" en Facebook/Doctoralia, así que el dominio distinto no es una inconsistencia, es una marca secundaria real) | C/ La Marina Alta, 4 bajo, 46015 Valencia | Dra. Clara Martínez Valero (directora desde 2001) | No especificado — sigue pendiente | [clinicaclaramartinezvalero.com](https://www.clinicaclaramartinezvalero.com/), [doctoralia.es](https://www.doctoralia.es/clara-martinez-valero/dentista/valencia) |
| Dentalmedica | 963 52 01 52 (también +34 659 77 66 67) | hola@dentalmedica.es | Calle Martí, 13, Ruzafa, Valencia | Directores reportados por el usuario (Raúl Jiménez y David García) — **no confirmados de forma independiente**, solo teléfono/email/dirección | No especificado — sigue pendiente | [dentalmedica.es](https://dentalmedica.es/clinica-valencia/) |
| Albalat Dental | 96 352 81 19 | albalat@albalatdental.com | C/ Cirilo Amorós, 21 bajo, 46004 Valencia (sede Valencia; sede secundaria en Puerto de Sagunto) | Dr. Salvador Albalat | No especificado — sigue pendiente | [albalatdental.com/contacto](https://albalatdental.com/contacto/), [implantesdentales-valencia.es](https://www.implantesdentales-valencia.es/dr-salvador-albalat/) |
| Centro Odontológico Dr. Pedroza | 963 62 17 06 | integraldental@yeclaintegral.com | C/ del Gorgos, 25, Valencia | Dr. Federico Ezequiel Pedroza Semerena | No especificado — sigue pendiente | [topdoctors.es](https://www.topdoctors.es/clinica-dental/centro-odontologico-dr-pedroza/), [doctoralia.es](https://www.doctoralia.es/federico-ezequiel-pedroza-semerena/dentista/valencia) |

**Importante**: el nº de gabinetes de las 6 sigue sin confirmarse de forma independiente por Claude (solo teléfono/dirección/decisor). No asumir automáticamente que cumplen el rango 4-10 del ICP — es la pregunta a hacer en la propia llamada de discovery si hace falta, no algo a bloquear el envío del primer contacto.

**Nota sobre Dr. Pedroza**: la duda original era si "C/ Yecla" y "C/ Gorgos" eran dos sedes distintas o la misma clínica mudada. La verificación independiente aclara que es una sola clínica física (C/ Gorgos) que opera bajo el nombre comercial/dominio "Yecla Integral" (marca de un grupo, visible en su email y redes) — no hay dos sedes.

## Filas descartadas y motivo
| Nombre | ¿Estaba en la tabla de `dataset.md`? | Motivo del descarte |
|---|---|---|
| Clínica Dental Teresa Badía | Sí, es una de las 10 | 2 gabinetes, por debajo del rango ICP 4-10. Candidata al segmento "1-3 gabinetes, paquete simplificado" del roadmap, no a este experimento. |
| +Dental Benimaclet | No — venía ya descartada aparte en `dataset.md` §"Candidatos descartados en la propia búsqueda" | Franquicia de cadena nacional — el ICP excluye explícitamente cadenas corporativas (`FARO_MODELO_NEGOCIO.md` 3.1: "no cadena corporativa"), porque la decisión de compra no es local. Se mantiene aquí solo como referencia, no resta del total de 10. |

## Filas dudosas y qué falta verificar
| Nombre | Qué falta |
|---|---|
| Clínica Llobell | Confirmar nº real de gabinetes (no especificado en la fuente); esta clínica puede estar posicionada por encima del ICP (marca personal/referencia internacional) — verificar antes de priorizar tiempo de outreach en ella |
| ARTDENTA Valencia | Señal de volumen más débil que el resto del dataset; verificar antes de invertir tiempo de contacto |

## Fila con duda de tamaño (no de contacto)
| Nombre | Qué falta |
|---|---|
| Clínica Dental Paloma Tortosa | Confirmar si la sede de Valencia por sí sola alcanza 4+ gabinetes, o si el tamaño ICP solo se cumple sumando la sede de Ontinyent (no valdría) — nicho especializado en odontopediatría/ortodoncia, verificar encaje de mensaje |

## Dataset limpio — 6 filas listas para contactar (actualizado 2026-07-09)
**2RP, Badal, Dra. Clara Martínez Valero, Dentalmedica, Albalat Dental y Dr. Pedroza** tienen contacto real verificado de forma independiente (ver tabla de arriba). Las 3 primeras ya están en `06-envio/asignacion.md` como Lote A; las 3 nuevas pasan de Lote B a Lote A también, con este mismo cambio. El nº de gabinetes de las 6 sigue sin confirmar — no es un bloqueo para el primer contacto, es una pregunta legítima para la propia conversación si surge.

Las 2 filas restantes en duda (Llobell, ARTDENTA) más Paloma Tortosa (duda de tamaño, no de contacto) no tienen la comprobación cruzada independiente ni el encaje de ICP confirmado — antes de enviarles nada, repetir el mismo tipo de verificación.

Con 6 clínicas seguimos por debajo de las 15-20 filas válidas que `FARO_PROCESO_COMERCIAL.md` sección 2 considera volumen semanal realista, pero ya es un lote razonable para el primer ciclo de envío.
