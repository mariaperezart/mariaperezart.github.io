# Dataset — EXP-002-clinicas-valencia

Generado por búsqueda web (WebSearch, 2026-07-05). Ningún dato de contacto directo (teléfono/email/nombre del decisor) se ha podido verificar por esta vía — queda pendiente de confirmación manual antes de cualquier envío (ver `03-verificacion.md`).

| Nombre | Zona | Nº gabinetes (estimado) | Señal ICP detectada | Fuente | Contacto (si disponible) | Notas |
|---|---|---|---|---|---|---|
| Clínica Dental 2RPValencia (también referida como "Clínica Veres" en otra fuente) | Valencia ciudad | 4 (declarado en su propia web) | TAC propio + 4 gabinetes + todas las especialidades in-house → volumen y estructura compatibles con ICP | [dentalq.es](https://dentalq.es/mejores-clinicas-dentales-en-valencia/) | No verificado | Dos fuentes distintas citan "4 gabinetes" con nombres ligeramente distintos — verificar cuál es el nombre correcto antes de contactar |
| Clínica Dental Teresa Badía | Valencia ciudad | 2 | Por debajo del rango ICP (4-10); posible candidata al "paquete simplificado 1-3 gabinetes" del roadmap (`FARO_MODELO_NEGOCIO.md` 1.1) | [dentalq.es](https://dentalq.es/mejores-clinicas-dentales-en-valencia/) | No verificado | No cumple ICP estricto — incluir solo si el experimento amplía el rango |
| Clínica Llobell (Dr. Andrés Llobell) | Valencia ciudad | No especificado; descrita como "gabinete integral multidisciplinar" con proyección internacional | Reseñas de Google citadas textualmente ("cliente desde hace 30 años") → volumen de pacientes alto y sostenido | [clinicallobell.es](https://clinicallobell.es/cuales-son-las-mejores-clinicas-dentales-de-valencia/) | No verificado | Posible tamaño mayor al ICP objetivo (más orientada a marca personal/referencia) — verificar nº real de gabinetes antes de priorizar |
| Clínica Dental Badal | Valencia ciudad | No especificado | Más de 350 reseñas en Google a 5 estrellas → señal fuerte de volumen de pacientes | [akeito.com](https://www.akeito.com/blog/clinicas-dentales-valencia/) | No verificado | Volumen de reseñas es la señal más fuerte del dataset; falta confirmar nº de gabinetes y uso de WhatsApp como canal |
| Albalat Dental (Valencia y Puerto de Sagunto) | Valencia ciudad + Puerto de Sagunto | No especificado; "diferentes gabinetes" y equipo "multidisciplinar" | Dos sedes → estructura y volumen probablemente compatibles con ICP | [albalatdental.com](https://albalatdental.com/) | No verificado | Al tener dos sedes, verificar si cada una opera con recepción propia o compartida (afecta el ICP de "recepción propia") |
| ARTDENTA Valencia (Benimaclet) | Valencia, barrio Benimaclet | No especificado; "gabinetes individuales" (plural) | Ubicación de barrio (no céntrica) → posible menor volumen, a verificar | [artdenta.es](https://artdenta.es/) | No verificado | Menor señal de volumen que Badal/Llobell; candidata secundaria |

## Resumen
- Total de filas: 6
- Con señal ICP fuerte (volumen de reseñas o nº de gabinetes ≥ 4 confirmado por la propia clínica): 2 (2RPValencia/Veres, Badal)
- Por debajo del rango ICP: 1 (Teresa Badía, 2 gabinetes)
- Señal ICP no concluyente con esta búsqueda: 3 (Llobell, Albalat, ARTDENTA)
- Ninguna fila tiene contacto verificado — es un dataset de **candidatos a investigar**, no un dataset listo para contactar.
