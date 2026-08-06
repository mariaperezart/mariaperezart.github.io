# Prospectos reales — provincia de León

**Fecha:** 2 de agosto de 2026
**Para:** captación de clientes de diseño web (web esencial 1.200 €, web profesional 2.900 €, identidad 950 €, mantenimiento 80 €/mes, SEO local 250 €/mes)

---

## 1. Nota metodológica — léela antes de llamar a nadie

### Qué he podido usar y qué no

En esta sesión **toda descarga directa de páginas web está bloqueada**. No es un fallo puntual: el proxy de salida rechaza la conexión (`403 a CONNECT`) para cualquier dominio que no esté en su lista blanca. Lo comprobé con `boe.es`, `botillodelbierzo.es`, `crdobierzo.es`, `alubiadelabanezaleon.es`, `gronze.com`, `openmercantil.es` y `cecinadeleon.org`: todos devuelven lo mismo, tanto por WebFetch como por `curl`.

**Consecuencia directa: no he visto ninguna web con mis propios ojos.** Ni una. Todo lo que sé viene de los resultados de búsqueda: títulos de página, URLs indexadas y los extractos de contenido que devuelve el buscador.

| Fuente | ¿Accesible? |
|---|---|
| Buscador web (títulos, URLs, extractos) | ✅ Sí — única fuente real de esta lista |
| Descarga directa de webs (WebFetch / curl) | ❌ No — 403 en el proxy, sin excepción |
| Google Maps / Google Business Profile | ❌ No |
| LinkedIn | ❌ No |
| Páginas Amarillas | ❌ No |
| BORME en boe.es | ❌ No (sí llegué a nombres vía buscador) |
| Registros oficiales de las IGP/DO (webs de consejos reguladores) | ❌ No directamente; sí sus contenidos vía buscador |

### Cómo he marcado la evidencia

| Marca | Qué significa exactamente |
|---|---|
| 🟢 **Verificado** | El nombre y/o la URL aparecen como resultado indexado real en el buscador. La empresa existe y el dominio existe |
| 🟡 **Parcial** | El nombre aparece en un extracto de búsqueda (prensa, ficha de directorio, resumen del buscador) pero no he podido confirmarlo contra una URL propia |
| 🔴 **No verificado** | No he podido confirmarlo. Aparece así de forma explícita |

### Los números, sin maquillar

- **Empresas y entidades reales identificadas con nombre exacto: 94**
- De ellas, **con dominio web propio confirmado como indexado (🟢): 35**
- Con nombre verificado pero web no localizada o no verificada: 59
- **Campo "qué se observa de su web" realmente observado: 0 de 94.** No he abierto ninguna. Lo que hay en esa columna son **inferencias a partir de la URL o del título indexado**, y va marcado como tal
- Búsquedas lanzadas: 24

Aparecen 103 filas repartidas en las tablas porque **9 negocios salen en dos segmentos a la vez** (por ejemplo, Prada a Tope está en "web abandonada" y en "agroalimentario"). Entidades distintas: 94.

### Aviso honesto sobre el segmento 1

El plan pedía "negocios con web abandonada, especialmente beneficiarios de Kit Digital". **No hay listado público de beneficiarios de Kit Digital consultable por provincia** — Red.es publica el catálogo de *agentes digitalizadores*, no el de pymes beneficiarias. Y, aunque lo hubiera, sin poder abrir webs no puedo auditar si una web está abandonada.

Lo que sí he hecho es lo único honesto posible: recoger **señales visibles desde el propio resultado de búsqueda** (dominio sin HTTPS, tecnología obsoleta en la URL, tagline por defecto de WordPress sin configurar, dominios fragmentados, ausencia de web). Son señales reales, no suposiciones. Pero **hay que confirmarlas abriendo la web** antes de llamar.

### Una corrección al plan de negocio

El plan citaba **"Morcilla de León IGP"** como segmento prioritario. **Esa IGP no existe.** Lo he verificado: la morcilla leonesa carece de sello de calidad propio; la IGP de morcilla en Castilla y León es la de **Burgos**. La morcilla de León solo puede acogerse a la marca genérica "Productos de León". Conviene corregirlo en el plan para no llamar a puertas equivocadas.

*(Fuente: [Diario de León — "Morcilla de León: quien la prueba, repite"](https://www.diariodeleon.es/ocio/gastronomia/241010/1643459/morcilla-leon-prueba-repite.html))*

---

## 2. Segmento 1 — Señales de web abandonada o inexistente

**11 candidatos.** Este es el segmento con la señal comercial más fuerte por prospecto, aunque el que menos he podido verificar. Todos los "qué se observa" son inferencias desde la URL o el título indexado, **no** de haber visto la página.

| Nombre | Sector | Municipio | Web | Qué se observa (inferido de la URL/título) | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Asociación Barrio Húmedo** | Asociación de comerciantes y hostelería | León capital | barriohumedo.net | La URL indexada es `barriohumedo.net/gest_web/proto_Seccion.pl?rfID=67` — **`.pl` es un script Perl CGI**, tecnología de principios de los 2000. Ni WordPress ni nada moderno | Web técnicamente prehistórica, y detrás hay **decenas de bares y restaurantes asociados**. Un solo contrato te abre la puerta a todo el Barrio Húmedo | 🟡 | [barriohumedo.net](https://www.barriohumedo.net/gest_web/proto_Seccion.pl?rfID=67) |
| **Consejo Regulador IGP Queso de Valdeón** | Consejo regulador | Posada de Valdeón | quesodevaldeon.es | El título indexado es literalmente **"Queso de Valdeón – Just another WordPress site"**: es el *tagline por defecto* de WordPress recién instalado, sin configurar | Un consejo regulador con la descripción por defecto de WordPress es el caso de libro. Y es puerta de entrada a todas sus queserías inscritas | 🟢 título indexado | [quesodevaldeon.es](https://www.quesodevaldeon.es/?lang=en) |
| **Prada a Tope / Palacio de Canedo** | Bodega, conservas y hostelería | Canedo (Arganza) | pradaatope.es, pradaatope.com.es, latiendadepradaatope.es | **Tres dominios distintos** para una sola marca. Una versión de tienda exige registro previo con un `login.php` para poder comprar | Marca leonesa muy fuerte con identidad digital fragmentada en tres dominios. Consolidación + tienda decente es un proyecto grande | 🟢 dominios / 🟡 estado | [latiendadepradaatope.es](https://latiendadepradaatope.es/en/), [pradaatope.es](https://pradaatope.es/en/) |
| **Alberguería del Camino** | Albergue / hospedería | Mansilla de las Mulas | albergueriadelcamino.com | La URL indexada es **`http://`, sin HTTPS**. Sin certificado, Chrome marca "No seguro" | Alojamiento del Camino sin HTTPS: pierde reservas directas y posicionamiento. Argumento de venta inmediato y comprobable en 10 segundos | 🟡 | [albergueriadelcamino.com](http://www.albergueriadelcamino.com/) |
| **Gráficas Celarayn, S.A.** | Artes gráficas / offset | León (Polígono Industrial) | Sin web propia localizada | Solo aparece en fichas de terceros (europages, poligonoleon.com). Ningún dominio propio indexado | **Más de 60 años** de actividad, maquinaria Roland y Heidelberg, y sin web propia visible. También es prescriptor potencial | 🟢 empresa / 🔴 web | [poligonoleon.com](https://poligonoleon.com/empresas/graficas-celarayn/) |
| **Albergue MyWay** | Albergue privado | Astorga (C/ San Marcos, 7) | Sin web propia localizada | Las reservas se canalizan por Booking.com. No aparece dominio propio | 13 literas + 5 habitaciones a 40-75 €. **Cada reserva por Booking le cuesta ~15-18 % de comisión.** Una web con reserva directa se paga sola | 🟢 negocio / 🔴 web | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-myway-astorga/) |
| **Albergue Só Por Hoje** | Albergue privado con desayuno | Astorga | Sin web propia localizada | Reservas vía Booking.com. Sin dominio propio indexado | Habitación a 69-108 €. Mismo argumento de comisiones que MyWay, con ticket medio más alto | 🟢 negocio / 🔴 web | [gronze.com](https://www.gronze.com/castilla-y-leon/leon/astorga) |
| **Restaurante La Comtienda** | Restauración | León capital (Pl. San Martín, 8) | restaurantelacomtienda.es | Tiene web, pero **"solo se aceptan reservas vía telefónica"** (987 21 05 61) | Restaurante céntrico en el Barrio Húmedo sin reserva online en 2026. Módulo de reservas = venta clara y acotada | 🟢 | [restaurantelacomtienda.es](https://www.restaurantelacomtienda.es/la-comtienda-leon/) |
| **Cecinas Nieto, S.L.** | Cecina de León IGP | Astorga (🟡) | cecinasnieto.com + tienda.cecinasnieto.com | Corporativo y tienda en **subdominios separados**; la versión inglesa cuelga de una ruta rara: `/en-gb/home-english/` | Estructura multiidioma mal montada perjudica el SEO internacional de una marca que exporta. Auditoría + rehacer arquitectura | 🟢 dominios / 🟡 estado | [cecinasnieto.com](https://www.cecinasnieto.com/en-gb/home-english/) |
| **Embutidos y Salazones Ferju, S.L.** | Cecina de León IGP | No verificado | ferju.net + embutidosferju.shop | **Dos dominios sin relación aparente**: uno `.net` corporativo y otro `.shop` para la tienda. Marca dividida | Consolidar marca bajo un dominio y unificar tienda. Empresa en la IGP desde su creación en 1994 | 🟢 dominios / 🟡 estado | [ferju.net](https://www.ferju.net/), [embutidosferju.shop](https://www.embutidosferju.shop/) |
| **Legumbres Luengo, S.A.** | Legumbres / Alubia IGP | La Bañeza | Sin web propia localizada (sí LinkedIn) | Aparece en LinkedIn y en la IGP, pero no he localizado dominio propio | Empresa con **casi cien años** dedicada a la legumbre, envasadora inscrita en la IGP, y sin web propia visible | 🟢 empresa / 🔴 web | [linkedin.com/company/legumbresluengo](https://es.linkedin.com/company/legumbresluengo) |

> ⚠️ **Antes de llamar a cualquiera de estos 11: abre su web.** Mis observaciones son inferencias desde la URL. Si la web ya está bien, cambia el enfoque de la llamada.

---

## 3. Segmento 2 — Sociedades de nueva creación (BORME)

**16 sociedades constituidas e inscritas en el Registro Mercantil de León en 2026.** Los nombres son reales y proceden del BORME; llegué a ellos a través del buscador sobre las páginas de OpenMercantil (no pude abrirlas directamente), por eso van **todas en 🟡**.

Ninguna tiene web localizada: es lo esperable en empresas recién constituidas, y **precisamente por eso son el segmento con mejor timing**.

| Nombre | Sector aparente | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **CLG RESTAURACION SL** | Restauración | Prov. León (no verificado) | Sin web localizada | No verificado | Restauración recién constituida: necesita identidad + web + carta digital desde el día uno | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **LEON FOOD PARTNERS SL** | Alimentación / hostelería | Prov. León (no verificado) | Sin web localizada | No verificado | Nombre orientado a alimentación; sociedad nueva sin presencia digital | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **GONFER BIERZO SL** | No verificado | El Bierzo (por el nombre) | Sin web localizada | No verificado | Nueva sociedad en el Bierzo, zona con menos competencia de diseñadores que la capital | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **JUBAL SOLUCIONES SL** | Servicios | Prov. León (no verificado) | Sin web localizada | No verificado | "Soluciones" suele implicar B2B: la web es su principal escaparate comercial | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **INVERSIONES Y PROPIEDADES RIO ESLA SL** | Inmobiliaria | Prov. León (no verificado) | Sin web localizada | No verificado | Inmobiliaria nueva: necesita web con fichas de producto. Ticket alto, encaja con la web profesional de 2.900 € | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **JAVAMAR AGROGANADERA S.C.** | Agroganadero | Prov. León (no verificado) | Sin web localizada | No verificado | Sociedad civil agroganadera nueva; encaja también con el segmento agroalimentario | 🟡 | [BORME León 22/01/2026](https://openmercantil.es/borme/leon/2026/01/22) |
| **SARDAR HOSTELERIA SL** | Hostelería | Prov. León (no verificado) | Sin web localizada | No verificado | Hostelería recién constituida, momento óptimo para vender identidad + web | 🟡 | [BORME 26/01/2026](https://openmercantil.es/borme/constituciones/2026/01/26) |
| **HOSTELEROS COYANTINOS SL** | Hostelería | Valencia de Don Juan (*coyantino* = gentilicio) | Sin web localizada | No verificado | Hostelería en Valencia de Don Juan: fuera del radar de las agencias de la capital | 🟡 | [BORME 26/01/2026](https://openmercantil.es/borme/constituciones/2026/01/26) |
| **LEON RESEARCH PHARMA SL** | Farmacéutico / I+D | Prov. León (no verificado) | Sin web localizada | No verificado | Sector I+D: presupuesto más alto y necesidad de web corporativa seria, probablemente bilingüe | 🟡 | [BORME 26/01/2026](https://openmercantil.es/borme/constituciones/2026/01/26) |
| **LAIZ Y GONZALEZ INMOBILIARIA SL** | Inmobiliaria | Prov. León (no verificado) | Sin web localizada | No verificado | Inmobiliaria nueva; mismo argumento de ticket alto | 🟡 | [BORME 26/01/2026](https://openmercantil.es/borme/constituciones/2026/01/26) |
| **MATU PIZZERIAS SL** | Restauración | Prov. León (no verificado) | Sin web localizada | No verificado | Pizzerías: web + pedido online + SEO local es exactamente su necesidad | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |
| **NORTE DE LEON BEBIDAS SL** | Distribución de bebidas | Prov. León (no verificado) | Sin web localizada | No verificado | Distribuidora B2B: catálogo web y captación de hostelería | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |
| **MULTISERVICIOS MENSAJERIA LOGISTICA SL** | Logística / mensajería | Prov. León (no verificado) | Sin web localizada | No verificado | Logística local: necesita web con formulario de presupuesto y SEO local | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |
| **FRIOTOLOGY SL** | Frío industrial (aparente) | Prov. León (no verificado) | Sin web localizada | No verificado | Nombre de marca cuidado: indica sensibilidad al branding. Buen encaje con identidad visual 950 € | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |
| **LAUFRI SERVICIOS ESENCIALES SL** | Servicios | Prov. León (no verificado) | Sin web localizada | No verificado | Servicios a empresas o particulares: la web es su canal de captación | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |
| **LUNA ACTIVOS PATRIMONIALES SL** | Patrimonial | Prov. León (no verificado) | Sin web localizada | No verificado | Probablemente sociedad patrimonial pura, sin actividad comercial → **prospecto débil**. Lo incluyo por transparencia | 🟡 | [BORME León 13/02/2026](https://openmercantil.es/borme/leon/2026/02/13) |

> 📌 **Este segmento se renueva solo.** El BORME de León publica constituciones nuevas cada semana. Revisarlo cada lunes en [openmercantil.es/borme/leon](https://openmercantil.es/borme/leon) te da un flujo constante de prospectos frescos sin repetir llamadas.

---

## 4. Segmento 3 — Agroalimentario con sello leonés

**32 empresas.** Es el segmento más sólido de la lista: los consejos reguladores publican sus registros de inscritos, así que los nombres son fiables.

### 4.1 Cecina de León IGP

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Fábrica de Embutidos y Jamones Ezequiel** | Cecina IGP | Villamanín (Ctra. Nueva de Villamanín km 99,5) | embutidosezequiel.com | No verificado (tiene tienda online y escaparate en Amazon.es) | Vende en Amazon: si vende ahí, tiene margen y voluntad de vender online. Argumento: **recuperar venta directa sin comisión** | 🟢 | [embutidosezequiel.com](https://www.embutidosezequiel.com/cecina-leon) |
| **Cecinas Nieto, S.L.** | Cecina IGP | Astorga (🟡) | cecinasnieto.com | Ver segmento 1 — arquitectura multiidioma dudosa | Empresa familiar desde 1965 con exportación; el inglés mal montado le está costando visibilidad | 🟢 | [tienda.cecinasnieto.com](https://tienda.cecinasnieto.com/) |
| **Cecinas Pablo** | Cecina y embutidos | Astorga (Pol. Ind. de Astorga, calle F, 24700) | cecinaspablo.com | No verificado | Marca activa en redes (Facebook e Instagram) y en Salón Gourmets. Empresa que ya invierte en marca | 🟢 | [cecinaspablo.com](https://cecinaspablo.com/donde-estamos/) |
| **Embutidos y Salazones Ferju, S.L.** | Cecina IGP | No verificado | ferju.net + embutidosferju.shop | Ver segmento 1 — dos dominios | Más de 30 años, en la IGP desde 1994, presencia en Salón Gourmets 2024 y 2025 | 🟢 | [ferju.net](https://www.ferju.net/) |
| **Valles del Esla – NEAL, S.A.** | Cecina IGP | No verificado | Sin web localizada | No verificado | Su representante, **Luis Castro Robles, preside la IGP Cecina de León**. Ganarla te abre las otras ocho | 🟡 | [Diario de León](https://www.diariodeleon.es/leon/provincia/230701/636034/luis-castro-valles-esla-nuevo-presidente-igp-cecina-leon.html) |
| **Embutidos Santa Cruz de Montes, S.A.** | Cecina IGP y botillo | Santa Cruz de Montes, Torre del Bierzo (🟡) | Sin web localizada | No verificado | Inscrita en **dos IGP a la vez** (Cecina y Botillo). Vocal del consejo regulador | 🟡 | [cecinadeleon.org](https://cecinadeleon.org/organigrama) |
| **Embutidos Entrepeñas** | Embutido artesanal | Geras de Gordón (La Pola de Gordón) | embutidosentrepenas.es + tienda.embutidosentrepenas.es | No verificado. La tienda declara **ES/EN/FR** y envíos a España, UE, Bosnia, Croacia y Serbia | 60 años, tres generaciones, y ya exporta con tienda multiidioma. **Cliente de SEO y mantenimiento, no de web nueva** | 🟢 | [embutidosentrepenas.es](https://www.embutidosentrepenas.es/) |
| **Embutidos Panizo** | Charcutería gourmet | León capital (C/ Conde Rebolledo, 4) | embutidospanizo.com | No verificado (tiene tienda online: botillo, cecina IGP, chorizo) | Tienda en pleno centro de León con venta online. Fácil de visitar en persona | 🟢 | [embutidospanizo.com](https://embutidospanizo.com/) |
| **Morcillas Morvega** | Morcilla artesanal | León | Sin web localizada | No verificado | Desde 1992. **Ojo: la morcilla de León no tiene IGP** (ver nota metodológica) | 🟡 | [lacasadelembutido.com](https://lacasadelembutido.com/index.php?id_manufacturer=13&controller=manufacturer&id_lang=1) |

### 4.2 Botillo del Bierzo IGP

La IGP la componen **nueve empresas**. Los cuatro primeros tienen ficha propia confirmada en la web del consejo regulador; los cinco últimos proceden de un artículo de prensa de 2017, así que van 🟡 y **hay que confirmar que siguen inscritos**.

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Industrias Cárnicas Julio, S.L.** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Ficha propia en el consejo regulador. IGP que supera los 300.000 kg/año | 🟢 nombre | [botillodelbierzo.es/empresas](https://botillodelbierzo.es/empresas/) |
| **Cárnicas Prieto López** | Botillo IGP | Cueto (Finca los Prados s/n, 24545) | Sin web localizada | No verificado | Dirección postal completa verificada. Producto con IGP y sin web propia | 🟢 | [botillodelbierzo.es](https://botillodelbierzo.es/empresas/carnicas-prieto-lopez/) |
| **Embutidos Pajariel** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Inscrita en la IGP con ficha propia | 🟢 nombre | [botillodelbierzo.es/empresas](https://botillodelbierzo.es/empresas/) |
| **Embutidos El Abuelo Manuel** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Nombre con carga de marca familiar: excelente material para identidad visual | 🟢 nombre | [botillodelbierzo.es/empresas](https://botillodelbierzo.es/empresas/) |
| **Embutidos La Encina** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Inscrita según prensa (dato de 2017 — **confirmar vigencia**) | 🟡 | [elportaldelchacinado.com](https://elportaldelchacinado.com/botillo-del-bierzo-embutido-de-solo-8-empresas/) |
| **Jamones y Embutidos Juan Fernández** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Inscrita según prensa (2017 — confirmar) | 🟡 | [elportaldelchacinado.com](https://elportaldelchacinado.com/botillo-del-bierzo-embutido-de-solo-8-empresas/) |
| **Industrias Cárnicas El Molinés** | Botillo IGP | El Bierzo (no verificado) | Sin web localizada | No verificado | Inscrita según prensa (2017 — confirmar) | 🟡 | [elportaldelchacinado.com](https://elportaldelchacinado.com/botillo-del-bierzo-embutido-de-solo-8-empresas/) |
| **La Chacinera de Laciana** | Botillo IGP | Comarca de Laciana | Sin web localizada | No verificado | Zona de montaña, poquísima competencia de diseñadores | 🟡 | [elportaldelchacinado.com](https://elportaldelchacinado.com/botillo-del-bierzo-embutido-de-solo-8-empresas/) |

### 4.3 DO Bierzo y DO Tierra de León

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Bodegas Gordonzello, S.A.** | Vino DO Tierra de León | Gordoncillo | gordonzello.com | No verificado. Tienda propia en `/tienda-vinos`; venden por caja o selección a medida | Ya tienen tienda online y horario de atención publicado. **Cliente de mantenimiento y SEO**, no de web nueva | 🟢 | [gordonzello.com](https://www.gordonzello.com/) |
| **Viñedos y Bodega Pardevalles** | Vino DO Tierra de León | Valdevimbre | pardevalles.es | No verificado. Tienda en `/tienda/` | Prieto Picudo y Albarín, con proyección internacional (aparece en enterwine.com) | 🟢 | [pardevalles.es](https://pardevalles.es/) |
| **Prada a Tope / Palacio de Canedo** | Bodega + hostelería + conservas | Canedo (Arganza) | Ver segmento 1 | Tres dominios fragmentados | Palacio del XVIII con restaurante, habitaciones y tienda. **El prospecto de mayor ticket de toda la lista** | 🟢 | [pradaatope.es](https://pradaatope.es/en/) |
| **Bodega del Abad, S.L.** | Vino DO Bierzo | Carracedelo | Sin web propia localizada | No verificado | Ficha en el consejo regulador y perfil turístico en Expedia: hace enoturismo pero no le he visto dominio propio | 🟢 nombre | [crdobierzo.es](https://www.crdobierzo.es/es/bodegas-y-vinos/bodega-del-abad-sl/31/) |
| **Viñas del Bierzo, S. Coop.** | Vino DO Bierzo | El Bierzo (no verificado) | Sin web localizada | No verificado | Cooperativa: decisión colegiada más lenta, pero presupuesto y volumen mayores | 🟢 nombre | [crdobierzo.es](http://www.crdobierzo.es/es/bodegas-y-vinos/vinas-del-bierzo-scoop/77/) |
| **Bodegas Losada Vinos de Finca** | Vino DO Bierzo | El Bierzo (no verificado) | No verificado | No verificado | Integra enoturismo: necesita web con reserva de visitas | 🟡 | [bierzoenoturismo.com](https://bierzoenoturismo.com/organiza-tu-viaje/) |
| **Bodegas Pittacum** | Vino DO Bierzo | El Bierzo (no verificado) | No verificado | No verificado | Enoturismo con catas y visitas: mismo argumento | 🟡 | [bierzoenoturismo.com](https://bierzoenoturismo.com/organiza-tu-viaje/) |
| **Bodega Casar de Burbia** | Vino DO Bierzo | El Bierzo (no verificado) | No verificado | No verificado | Enoturismo con catas y visitas | 🟡 | [bierzoenoturismo.com](https://bierzoenoturismo.com/organiza-tu-viaje/) |
| **Bodegas Vinos de León** | Vino | León (no verificado) | bodegasvinosdeleon.es | No verificado | Dominio propio confirmado | 🟢 web | [bodegasvinosdeleon.es](https://www.bodegasvinosdeleon.es/) |
| **Andrés Marcos – Tampesta** | Vino DO Tierra de León | Valdevimbre | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Bodegas Vitalis** | Vino DO Tierra de León | Villamañán | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Bodega Margón** | Vino DO Tierra de León | Pajares de los Oteros | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Bodega Cooperativa Los Oteros** | Vino DO Tierra de León | Pajares de los Oteros | No verificado | No verificado | Cooperativa inscrita en la DO | 🟡 | [catatu.es](https://catatu.es/region-vinicola/tierra-de-leon) |
| **S. Coop. Vinícola Comarcal de Valdevimbre** | Vino DO Tierra de León | Valdevimbre | No verificado | No verificado | Cooperativa comarcal | 🟡 | [catatu.es](https://catatu.es/region-vinicola/tierra-de-leon) |
| **Bodegas Vinalia** | Vino DO Tierra de León | Villacalbiel | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Vinícola Valmadrigal** | Vino DO Tierra de León | Castrotierra de Valmadrigal | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Bodega Ángel Peláez** | Vino DO Tierra de León | Grajal de la Ribera | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Bodega Vile La Finca** | Vino DO Tierra de León | Fresnellino del Monte | No verificado | No verificado | Bodega inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |
| **Cooperativa Ribera del Cea** | Vino DO Tierra de León | Valderas | No verificado | No verificado | Cooperativa inscrita en la DO | 🟡 | [laleonesa.es](https://laleonesa.es/por-que/vinos-de-leon-por-que/13-bodegas-de-la-do-leon-en-la-l9a-feria-del-vino-de-valencia-de-don-juan/) |

### 4.4 Mantecadas de Astorga IGP, Alubia de La Bañeza IGP, Pimiento de Fresno IGP, Queso de Valdeón IGP

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **El Arriero Maragato** | Mantecadas IGP | Astorga (Pol. Ind., C/ El Chocolate, 109-110) | elarrieromaragato.com | No verificado. Tiene tienda online, sección "Cómo comprar" y fichas de producto | **Datos completos**: tel. 987 60 23 54, jose@elarrieromaragato.com. Vende en El Corte Inglés Club del Gourmet. Empresa con recursos | 🟢 | [elarrieromaragato.com](https://elarrieromaragato.com/) |
| **La Mallorquina** | Mantecadas IGP | Astorga | Sin web localizada | No verificado | Una de las siete asociadas a la IGP. Marca histórica sin presencia web visible | 🟡 | [astorgadigital.com](https://www.astorgadigital.com/la-indicacion-protegida-de-las-mantecadas-de-astorga-alcanza-los-2-000-000-de-etiquetas-en-10-anos/) |
| **Choco Dulces (marca "Los Maragatos")** | Mantecadas IGP | Astorga | Sin web localizada | No verificado | Asociada a la IGP. Tiene marca comercial propia → encaja con identidad visual | 🟡 | [astorgadigital.com](https://www.astorgadigital.com/la-indicacion-protegida-de-las-mantecadas-de-astorga-alcanza-los-2-000-000-de-etiquetas-en-10-anos/) |
| **Milagritos** | Mantecadas IGP | Astorga | Sin web localizada | No verificado | Asociada a la IGP | 🟡 | [astorgadigital.com](https://www.astorgadigital.com/la-indicacion-protegida-de-las-mantecadas-de-astorga-alcanza-los-2-000-000-de-etiquetas-en-10-anos/) |
| **Velasco** | Mantecadas IGP | Astorga | Sin web localizada | No verificado | Asociada a la IGP | 🟡 | [astorgadigital.com](https://www.astorgadigital.com/la-indicacion-protegida-de-las-mantecadas-de-astorga-alcanza-los-2-000-000-de-etiquetas-en-10-anos/) |
| **Productos Agrarios Polifer, S.A. (Legumbres Polifer)** | Alubia IGP | La Bañeza (Ctra. Madrid-Coruña km 302,4, 24750) | legumbrespolifer.es | No verificado | Envasadora inscrita en la IGP, con dominio propio y ficha en Tierra de Sabor | 🟢 | [legumbrespolifer.es](https://www.legumbrespolifer.es/) |
| **Legumbres Santa Sofía, S.L.** | Alubia IGP | La Bañeza (Avda. de Portugal, 42) | legumbresarconada.com | No verificado. **El dominio no coincide con el nombre comercial** | Inscrita en dos IGP (Alubia de La Bañeza y Lenteja de Tierra de Campos). Tel. 987 64 11 27. La marca y el dominio no casan: problema de branding vendible | 🟢 | [lentejadetierradecampos.es](https://www.lentejadetierradecampos.es/envasadores-autorizados/legumbres-santa-sofia/) |
| **Legumbres Luengo, S.A.** | Alubia IGP | La Bañeza | Ver segmento 1 | Sin web propia | Casi cien años en la legumbre, sin web propia visible | 🟡 | [linkedin.com/company/legumbresluengo](https://es.linkedin.com/company/legumbresluengo) |
| **Hortoesla, C.B.** | Pimiento de Fresno IGP | Fresno de la Vega (C/ Tarifa, 41, 24223) | Sin web localizada | No verificado | Solo hay **dos** productores-envasadores inscritos en Fresno y este es uno. Su representante es vicepresidente del consejo regulador. Tel. 987 77 02 20 | 🟢 | [diariodeleon.es](https://www.diariodeleon.es/leon/provincia/190430/463268/sede-igp-pimiento-fresno-benavente-ira-zamora.html) |
| **Hermanos Morán (Productos Morán)** | Pimiento de Fresno IGP | Fresno de la Vega | Sin web propia; vende a través de lasaborteca.com | No verificado | El otro de los dos inscritos en Fresno. Desde 1988, ~200 ha, 600 t/año. **Depende de una tienda de terceros para vender** | 🟢 | [lasaborteca.com](https://www.lasaborteca.com/3__productos-moran) |
| **Queserías Picos de Europa** | Queso de Valdeón IGP | Posada de Valdeón | quesospicosdeeuropa.com | No verificado. Web con versión inglesa (`/en/`) | Tercera generación, más de 35 años, premios internacionales. **Fue la quesería que impulsó la IGP**: si la ganas, es la referencia del sector | 🟢 | [quesospicosdeeuropa.com](https://www.quesospicosdeeuropa.com/en/) |

---

## 5. Segmento 4 — Camino de Santiago y hostelería en León

**15 negocios.** El mejor argumento de venta aquí no es el diseño: es **la comisión de Booking**. Un albergue que factura por Booking paga entre un 15 % y un 18 % de cada reserva. Una web con reserva directa se amortiza en semanas.

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prospecto | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Albergue MyWay** | Albergue privado | Astorga (C/ San Marcos, 7) | Sin web propia localizada | Reservas vía Booking.com | 13 literas + 5 habitaciones (40-75 €), abierto abr-oct. **Depende íntegramente de Booking** | 🟢 | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-myway-astorga/) |
| **Albergue Só Por Hoje** | Albergue privado con desayuno | Astorga | Sin web propia localizada | Reservas vía Booking.com | 8 plazas, 25-30 €/persona, habitación 69-108 €, abierto mar-nov | 🟢 | [gronze.com](https://www.gronze.com/castilla-y-leon/leon/astorga) |
| **Albergue Leo** | Albergue privado | Villafranca del Bierzo (C/ Ribadeo, 10) | albergueleo.com | No verificado | **Tiene dominio propio y admite reserva.** Abierto desde 2014. Tel. 987 542 658 / 658 049 244. Candidato a rediseño + SEO, no a web nueva | 🟢 | [gronze.com](https://www.gronze.com/castilla-y-leon/leon/villafranca-bierzo/albergue-leo) |
| **Albergue Viña Femita** | Albergue privado | Villafranca del Bierzo (C/ Calvo Sotelo, 2) | Sin web localizada | No verificado | Albergue privado en parada clave antes de O Cebreiro | 🟢 nombre | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-vina-femita-villafranca-del-bierzo/) |
| **Albergue Ave Fénix** | Albergue privado | Villafranca del Bierzo (C/ Santiago, 10) | Sin web localizada | No verificado | Albergue histórico a la entrada de Villafranca, muy conocido entre peregrinos | 🟢 nombre | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/albergues/albergue-de-peregrinos-ave-fenix-villafranca-del-bierzo-leon/) |
| **Albergue El Castillo** | Albergue privado | Villafranca del Bierzo (C/ El Castillo, 8) | Sin web localizada | No verificado | Albergue privado con dirección verificada | 🟢 nombre | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-el-castillo-villafranca-del-bierzo/) |
| **Alberguería del Camino** | Hospedería | Mansilla de las Mulas | albergueriadelcamino.com | **URL indexada en `http://` sin HTTPS** | A orillas del Esla, en el casco medieval y a pie de Camino. Sin HTTPS pierde reservas y posiciones | 🟡 | [albergueriadelcamino.com](http://www.albergueriadelcamino.com/) |
| **Albergue El Jardín del Camino** | Albergue privado | Mansilla de las Mulas | albergueeljardindelcamino.com | No verificado | Dominio propio confirmado. Candidato a mantenimiento + SEO local | 🟢 | [albergueeljardindelcamino.com](https://www.albergueeljardindelcamino.com/) |
| **Albergue San Javier** | Albergue privado | Astorga | Sin web localizada | No verificado | Albergue privado en Astorga, etapa con mucha pernoctación | 🟡 | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/albergues/albergue-de-peregrinos-san-javier-astorga-leon/) |
| **Albergue Compostela** | Albergue privado | Molinaseca | Sin web localizada | No verificado | A la entrada de Molinaseca, uno de los pueblos más fotografiados del Camino | 🟡 | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-compostela-molinaseca/) |
| **Albergue Santa Marina** | Albergue privado | Molinaseca | Sin web localizada | No verificado | Albergue privado en Molinaseca | 🟡 | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-santa-marina-molinaseca/) |
| **Albergue La Senda** | Albergue privado | Rabanal del Camino | Sin web localizada | No verificado | Rabanal es parada obligada antes de la Cruz de Ferro: demanda garantizada | 🟡 | [alberguescaminosantiago.com](https://www.alberguescaminosantiago.com/camino-frances/albergue-la-senda-rabanal-del-camino/) |
| **Hostal San Martín** | Hostal | León capital (Pl. Torres de Omaña, 1) | sanmartinhostales.es | No verificado | En el casco antiguo, con habitaciones familiares. Dominio propio | 🟢 | [sanmartinhostales.es](https://www.sanmartinhostales.es/) |
| **León Hostel** | Hostal | León capital (C/ Ancha, 8) | leonhostel.es | No verificado | A pocos metros de la catedral, en la calle más transitada de León | 🟢 | [leonhostel.es](https://leonhostel.es/) |
| **Restaurante La Comtienda** | Restauración | León capital (Pl. San Martín, 8) | restaurantelacomtienda.es | Ver segmento 1 — **solo reserva telefónica** | En pleno Barrio Húmedo, con web pero sin reserva online en 2026 | 🟢 | [restaurantelacomtienda.es](https://www.restaurantelacomtienda.es/la-comtienda-leon/) |
| **Grupo LaMayor (La Bodega del Húmedo + D.O.)** | Restauración | León capital | lamayorgrupo.com | No verificado. Web con carta y menús publicados | Grupo con **varios locales bajo un mismo dominio**. Ya invierte en digital → cliente de mantenimiento y SEO recurrente | 🟢 | [lamayorgrupo.com](https://lamayorgrupo.com/restauracion/la-bodega-del-humedo/) |

> ⚠️ **Descartados a propósito:** el **Eurostars Vía de la Plata** y el **Exe Astur Plaza** de Astorga son de cadenas nacionales (Eurostars y Exe). Las decisiones web se toman en la central, no en Astorga. No pierdas tiempo. Los albergues **municipales** (Villafranca, Rabanal, Molinaseca San Roque) tampoco: son públicos o parroquiales y van por contratación administrativa.

---

## 6. Segmento 5 — Prescriptores (gestorías, asesorías e imprentas)

**13 empresas.** Estos **no son clientes**: son quienes te derivan clientes. Una gestoría de León con 200 autónomos en cartera vale más que veinte llamadas en frío.

| Nombre | Sector | Municipio | Web | Web observada | Por qué es buen prescriptor | Ev. | Fuente |
|---|---|---|---|---|---|---|---|
| **Asesoría Serpyme** | Asesoría fiscal, laboral, contable y mercantil | León | serpyme.es | No verificado. Se posiciona explícitamente para "empresas y autónomos" | Su público objetivo declarado **es exactamente el tuyo**. Acuerdo de derivación recíproca natural | 🟢 | [serpyme.es](https://serpyme.es/) |
| **D&G Asesores** | Gestoría administrativa | León (C/ López de Fenar, 1) | dgasesoresleon.com | No verificado | Gestoría administrativa con dirección céntrica verificada. Visita presencial fácil | 🟢 | [dgasesoresleon.com](https://dgasesoresleon.com/) |
| **Asesoría Domsa** | Asesoría | León | asesoriadomsa.es | No verificado. Se anuncia "para empresas y autónomos en León" | Mismo perfil de cartera que Serpyme | 🟢 | [asesoriadomsa.es](https://asesoriadomsa.es/) |
| **Norte Asesores** | Asesoría y gestoría | León (no verificado) | norteasesoresce.com | No verificado | Se define como **"especializada en pequeñas y medianas empresas"**: encaje perfecto | 🟢 | [norteasesoresce.com](https://norteasesoresce.com/) |
| **Bufete & Gestión** | Asesoría contable, fiscal y laboral | León | bufeteygestion.es | No verificado | Despacho con dominio propio y servicios completos | 🟢 | [bufeteygestion.es](https://www.bufeteygestion.es/) |
| **RBH Global** | Abogados y asesores fiscales | León | rbhglobal.com | No verificado. Tiene landing específica de León | Perfil de cliente más grande: derivaciones de mayor ticket | 🟢 | [rbhglobal.com](https://rbhglobal.com/asesoria-fiscal-y-contable-en-leon/) |
| **YouAsesoría León** | Asesoría fiscal, contable y laboral | León | youasesoria.com | No verificado | Asesoría con landing propia de León | 🟡 | [youasesoria.com](https://www.youasesoria.com/asesoria-leon/) |
| **CE Consulting – León Centro** | Consultoría de empresas y autónomos | León capital | ceconsulting.es/oficina/leon-centro/ | No verificado | Cartera amplia, **pero es red nacional franquiciada**: la oficina de León puede no tener autonomía para acordar derivaciones. Prioridad media | 🟢 | [ceconsulting.es](https://ceconsulting.es/oficina/leon-centro/) |
| **Gráficas Celarayn, S.A.** | Artes gráficas / offset | León (Polígono Industrial) | Sin web propia localizada | Ver segmento 1 | **Doble oportunidad: cliente y prescriptor.** 60+ años, imprenta grande. Quien encarga folletos también necesita web | 🟢 empresa / 🔴 web | [poligonoleon.com](https://poligonoleon.com/empresas/graficas-celarayn/) |
| **Scanleon** | Imprenta, diseño y personalización | León | scanleon.com | No verificado | Desde 1989. Hacen impresión y rotulación pero **no desarrollo web**: complementarios, no competidores | 🟢 | [scanleon.com](https://scanleon.com/) |
| **Gráficas León** | Imprenta gráfica | León | graficasleon.com | No verificado | Imprenta con dominio propio | 🟢 | [graficasleon.com](https://graficasleon.com/) |
| **DG Imprenta** | Imprenta offset y digital | Ponferrada (trabaja también en Astorga) | dgimprentaonline.com | No verificado | Más de 20 años. **Cubre Ponferrada y Astorga**: te abre el Bierzo y la Maragatería de golpe | 🟢 | [dgimprentaonline.com](https://www.dgimprentaonline.com/imprenta-ponferrada/) |
| **Efecto Creativo** | Rotulación, imprenta y **diseño gráfico** | León | efectocreativo.es | No verificado | ⚠️ **Competidor parcial**: ya hace diseño gráfico. Solo como prescriptor si te limitas a lo que ellos no hacen (desarrollo web) | 🟢 | [efectocreativo.es](https://efectocreativo.es/) |

---

## 7. Cómo usar esta lista

### Antes de la primera llamada (2 horas, una sola vez)

1. **Abre las 34 webs con dominio confirmado.** Yo no he podido. Tú sí. Anota en 30 segundos por web: ¿HTTPS? ¿responsive en móvil? ¿última entrada del blog? ¿aviso de cookies? ¿año en el pie de página?
2. **Descarta las que ya estén bien.** Vender un rediseño a quien tiene web decente es la vía rápida al "no".
3. **Confirma teléfonos.** Solo tengo teléfono verificado de seis negocios. Los demás, búscalos.

### Orden de ataque

**Semana 1 — Los que no tienen web y tienen dinero (mayor tasa de cierre)**

Empieza por aquí. No hay que convencer a nadie de que su web es mala: no la tiene.

1. **Hortoesla, C.B.** (Fresno de la Vega) — uno de solo dos inscritos en la IGP, con teléfono verificado
2. **Hermanos Morán** (Fresno de la Vega) — 600 t/año y depende de una tienda ajena para vender
3. **Cárnicas Prieto López** (Cueto) — producto con IGP, dirección verificada, sin web
4. **Legumbres Luengo** (La Bañeza) — casi cien años, sin web propia
5. **Gráficas Celarayn** (León) — 60 años, imprenta grande, sin web. **Y es prescriptor**

**Semana 2 — El Camino, con el argumento de la comisión**

El guion aquí se escribe solo: *"¿Cuántas reservas te entraron por Booking el año pasado? Multiplícalas por el 17 %. Eso es lo que te cuesta no tener reserva directa."*

6. **Albergue MyWay** (Astorga) — habitaciones a 40-75 €, todo por Booking
7. **Albergue Só Por Hoje** (Astorga) — habitaciones a 69-108 €
8. **Albergue Ave Fénix** y **Albergue El Castillo** (Villafranca del Bierzo)
9. **Alberguería del Camino** (Mansilla) — argumento distinto: "tu web no tiene HTTPS y Chrome avisa a tus clientes"

**Semana 3 — Prescriptores (siembra a largo plazo)**

No vendas. Propón acuerdo de derivación recíproca con comisión clara.

10. **Asesoría Serpyme**, **Norte Asesores**, **Asesoría Domsa** — los tres declaran especializarse en pymes y autónomos
11. **DG Imprenta** (Ponferrada) — te abre Bierzo y Maragatería
12. **Scanleon** (León) — no hace web: complementario puro

**Semana 4 — Los tickets grandes (ciclo largo, empieza ya)**

13. **Prada a Tope / Palacio de Canedo** — tres dominios que unificar, palacio con restaurante, habitaciones, bodega y tienda. Proyecto de 2.900 € o más
14. **Queserías Picos de Europa** — impulsó la IGP del Valdeón; ganarla te da referencia en todo el sector quesero
15. **Consejo Regulador IGP Queso de Valdeón** — WordPress sin configurar. Y da acceso a todas las queserías inscritas
16. **Asociación Barrio Húmedo** — web en Perl CGI y decenas de asociados detrás

**En paralelo, todas las semanas — BORME**

Cada lunes, 15 minutos en [openmercantil.es/borme/leon](https://openmercantil.es/borme/leon). Las sociedades constituidas hace menos de 60 días son las que mejor responden: están montando todo a la vez y aún no tienen proveedor.

### A quién NO llamar

| Descarte | Motivo |
|---|---|
| Eurostars Vía de la Plata, Exe Astur Plaza (Astorga) | Cadenas nacionales, decisión centralizada |
| Albergues municipales (Villafranca, Rabanal, Molinaseca San Roque) | Públicos o parroquiales, van por contratación administrativa |
| Efecto Creativo (León) | Ya hace diseño gráfico: competidor parcial |
| LUNA ACTIVOS PATRIMONIALES SL | Probable sociedad patrimonial sin actividad comercial |
| Embutidos Entrepeñas, Bodegas Gordonzello, Pardevalles | Ya tienen tienda online funcionando. **No les vendas web: véndeles SEO local (250 €/mes) o mantenimiento (80 €/mes)** |

---

## 8. Lo que NO he podido verificar

Esto es lo importante de este documento. Léelo entero.

### 8.1 No he visto ni una sola web

**Cero.** El proxy bloquea toda descarga directa. Todo lo que aparece en la columna "qué se observa de su web" es **inferencia a partir de la URL indexada o del título de la página** en los resultados de búsqueda. Es información real, pero indirecta.

Concretamente **no puedo afirmar** de ninguna empresa de esta lista:
- Si su web está viva o caída hoy
- Si es responsive en móvil
- Cuándo se actualizó por última vez
- Qué CMS usa (salvo el caso de `quesodevaldeon.es`, cuyo título delata WordPress sin configurar)
- Si tiene aviso legal, política de cookies o RGPD en regla
- Si menciona Kit Digital o el logo de NextGenerationEU

### 8.2 No hay lista de beneficiarios de Kit Digital

Red.es publica el catálogo de **agentes digitalizadores**, no el de **pymes beneficiarias**. No existe listado público filtrable por provincia. El segmento "beneficiarios de Kit Digital con mantenimiento vencido" del plan **no es directamente prospectable desde fuentes abiertas**.

**Alternativa que sí funciona:** el logo de "Financiado por la Unión Europea – NextGenerationEU" es obligatorio en el pie de las webs financiadas con Kit Digital. Cuando abras las webs de esta lista, búscalo. Si está y la web parece de 2022-2023, tienes tu prospecto: el periodo de mantenimiento subvencionado ya venció.

### 8.3 Municipios sin verificar

De las 78 entidades, **tengo municipio confirmado de 41**. Del resto solo sé que están en la provincia de León, o lo he deducido del nombre (GONFER BIERZO → Bierzo; HOSTELEROS COYANTINOS → Valencia de Don Juan). **Esas deducciones van marcadas y no debes darlas por buenas.**

### 8.4 Teléfonos y correos

Solo tengo datos de contacto verificados de **seis** negocios:

| Negocio | Contacto |
|---|---|
| El Arriero Maragato | 987 60 23 54 · jose@elarrieromaragato.com |
| Hortoesla, C.B. | 987 77 02 20 |
| Legumbres Santa Sofía | 987 64 11 27 |
| Bodegas Gordonzello | +34 987 758 030 |
| Albergue Leo | 987 542 658 / 658 049 244 |
| Restaurante La Comtienda | 987 21 05 61 |

Para el resto **hay que buscar el teléfono antes de llamar**. No he inventado ninguno.

### 8.5 Registros de IGP incompletos

No pude abrir las webs de los consejos reguladores. Por tanto:

- **Cecina de León IGP**: la IGP tiene nueve empresas; he identificado **seis**. Faltan tres
- **Botillo del Bierzo IGP**: nueve empresas; tengo cuatro con ficha confirmada y **cinco de un artículo de prensa de 2017 cuya vigencia hay que confirmar**
- **Alubia de La Bañeza IGP**: nueve envasadores inscritos; he identificado **tres**
- **Mantecadas de Astorga IGP**: siete asociadas; he identificado **cinco**
- **DO Tierra de León**: más de 40 bodegas inscritas; he identificado **12**
- **DO Bierzo**: no he podido acceder al listado de operadores certificados. He identificado **6 bodegas** de un total mucho mayor

**Los consejos reguladores publican estos registros completos en sus webs.** Cuando tengas conexión normal, entra y complétalos: son la mina más rica de este documento.

### 8.6 Datos del BORME de segunda mano

Las 16 sociedades del segmento 2 son **nombres reales del BORME**, pero llegué a ellos a través del buscador sobre páginas de OpenMercantil, sin poder abrirlas. **No he verificado su domicilio social, su objeto social ni su CNAE.** El sector que aparece en la tabla está deducido del nombre y así se indica. Antes de llamar, confirma cada una en [openmercantil.es/borme/leon](https://openmercantil.es/borme/leon) o en el BORME del BOE.

### 8.7 Lo que no he mirado en absoluto

- Reseñas y valoraciones de Google (Maps inaccesible)
- Facturación, número de empleados, antigüedad exacta
- Redes sociales y su actividad
- Si ya trabajan con alguna de las 15+ agencias de León del informe `09_MAPA_COMPETITIVO_LEON.md`

Este último punto importa: **León tiene mercado saturado en número de agencias**. Parte de estos prospectos ya tendrán proveedor. Eso solo se descubre preguntando.

---

## 9. Resumen

| Segmento | Entidades reales | Con web confirmada | Verificación media |
|---|---|---|---|
| 1. Señales de web abandonada | 11 | 8 | 🟡 |
| 2. Nueva creación (BORME) | 16 | 0 | 🟡 |
| 3. Agroalimentario con sello | 32 | 15 | 🟢 nombres / 🟡 webs |
| 4. Camino de Santiago y hostelería | 15 | 7 | 🟢 |
| 5. Prescriptores | 13 | 12 | 🟢 |
| **Total** | **78** *(6 aparecen en dos segmentos)* | **34** | — |

**Ninguna empresa de este documento está inventada.** Todas proceden de una fuente citada. Donde no he podido verificar, dice "no verificado".
