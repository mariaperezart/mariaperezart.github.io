# Dataset — EXP-003-pymes-leon

**Método:** WebSearch (Claude Code), 2026-07-10. Cada fila cita su fuente. **Ninguna fila ha pasado todavía por comprobación cruzada independiente** (ver nota en `00-objetivo.md`) — este es el trabajo del Agente Verificador, siguiente paso pendiente, no completado en esta pasada.

Cadenas corporativas (Vitaldent, Sanitas Milenium, Feu Vert, Norauto, Euromaster, Northgate) se excluyeron ya en la búsqueda por no cumplir ICP (sección 3.1: "descarta franquicias o cadenas con compra centralizada").

## Peluquerías

| Nombre | Teléfono | Dirección | Fuente |
|---|---|---|---|
| Blanco Peluqueros | 987 24 47 06 | León (dirección exacta no confirmada en la búsqueda) | Resultado de búsqueda agregada, sin URL directa a ficha propia |
| Peluquería Emma Hidalgo | 987 21 62 96 | Calle Conde Guillén, 16, León | Resultado de búsqueda agregada |
| Origen Estilistas León | 987 22 54 73 | León (dirección exacta no confirmada) | Resultado de búsqueda agregada |
| Cutfy León | 987 79 19 10 | Calle Burgo Nuevo 3, León | [cutfy.eu](https://cutfy.eu/cutfy-peluqueria-en-leon-cut-hair-cut-cost-cut-time/) — web propia |

## Veterinarias

| Nombre | Teléfono | Dirección | Fuente |
|---|---|---|---|
| Clínica Veterinaria Ricardo Díez | 987 22 99 32 / 608 78 72 24 | Santo Domingo, Gran Vía de San Marcos, 3, 24001 León | [clinicaveterinariaricardodiez.es](https://clinicaveterinariaricardodiez.es/) — web propia |
| Clínica Veterinaria Centro León | 987 22 88 01 | Roa de la Vega 30, León | [leonveterinaria.com](https://leonveterinaria.com/) — web propia |
| Clínica Veterinaria San Pedro | 987 260 805 | C/ San Pedro, 20, León | [cvsanpedro.com](https://www.cvsanpedro.com/) — web propia |
| Clínica Veterinaria Barroso | 987 222 166 | Calle Los Osorios, 6 (Pz. del Espolón), León | [clinicaveterinariabarroso.com](https://www.clinicaveterinariabarroso.com/) — web propia |
| Sanivet Veterinarios | Urgencias: 622 28 51 90 | Av. del Alcalde Miguel Castaño, 29, León | [sanivet.es](https://sanivet.es/) — web propia |

## Fisioterapia

| Nombre | Teléfono | Dirección | Fuente |
|---|---|---|---|
| Centro de Fisioterapia y Osteopatía León | 987 23 14 65 | C/ Lucas de Tuy nº7, Bajo, 24002 León | [cefisleon.com/contacto](http://www.cefisleon.com/contacto/) — web propia |
| Centro Fisiomedic León | 987 23 10 12 | C/ Alcazar de Toledo 7, León | Resultado de búsqueda agregada |
| OseoActive | 987 104 834 / 667 713 605 | C/ Limonar de Cuba, 69, 24010 Trobajo del Camino, León | [oseoactive.com](https://oseoactive.com/) — web propia |

## Clínicas dentales

| Nombre | Teléfono | Dirección | Fuente |
|---|---|---|---|
| Clínica Dental Clidenin (Ortodoncia León) | 987 21 01 32 | Avenida Independencia 6, 6ºE, León | [ortodoncialeon.org](https://ortodoncialeon.org/) — web propia |
| Clínica Dental Venedent | 987 107 123 / 661 636 888 | Centro de León, cerca de Plaza Mayor (dirección exacta no confirmada) | [clinicadentalvenedent.es](https://www.clinicadentalvenedent.es/) — web propia |
| Clínica Dental Dr. Juan José Cachero | 987 232 336 | Avda. Ordoño II, 30, León | [clinicadentalcachero.com](https://clinicadentalcachero.com/) — web propia |
| Berciano Dental | 987 35 59 24 | C/Los Osorios, 2 (Plaza del Espolón), León | [bercianodental.com](https://www.bercianodental.com/) — web propia |
| Clínica DentFamily | 987 01 45 46 | León (dirección exacta no confirmada) | [clinicadentfamily.com](https://clinicadentfamily.com/) — web propia |

## Talleres mecánicos (independientes, no cadena)

| Nombre | Teléfono | Dirección | Fuente |
|---|---|---|---|
| LeonCar | 987 251 156 / 663 022 727 | Av. del Alcalde Miguel Castaño, 28, 24005 León | [leoncar.es](https://leoncar.es/) — web propia |

*(El resto de resultados de talleres — Feu Vert, Norauto, Euromaster, Northgate — son cadenas y quedan excluidos del ICP.)*

## Resumen
- Total de filas: 18, en 5 verticales distintos (peluquería, veterinaria, fisioterapia, dental, taller).
- Con web propia citada como fuente (más fiable): 13.
- Solo con resultado de búsqueda agregada, sin web propia confirmada (menos fiable, verificar primero): 5 (Blanco Peluqueros, Emma Hidalgo, Origen Estilistas, Fisiomedic León, Venedent-dirección).
- Ninguna fila tiene todavía el nombre del decisor/propietario confirmado — es el primer dato a añadir en la fase de verificación, junto con la comprobación cruzada de teléfono/dirección.

## Siguiente paso (Agente Verificador — pendiente)
Repetir el proceso de `EXP-002-clinicas-valencia/03-verificacion.md`: para cada fila, buscar una segunda fuente independiente que confirme el dato (Google Maps, Google Business Profile, reseñas recientes), identificar quién es el decisor si es posible, y clasificar cada fila en Válida / Dudosa / Descartada antes de que cualquiera pase a un lote de contacto real.
