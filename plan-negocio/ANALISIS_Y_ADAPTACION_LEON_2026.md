# Plan de negocio — análisis del original y adaptación a León 2026

**Documento de origen:** `PePérezSánchezMG.xlsx` — plantilla INCYNCO ("TRIBU"), fechada el 29/12/2023, con inicio previsto en 2T 2024.
**Documento adaptado:** `PLAN_NEGOCIO_LEON_2026.xlsx` (mismo libro, misma estructura, mismas fórmulas salvo 7 sustituciones documentadas).
**Fecha de la adaptación:** 31 de julio de 2026.

**Realidad sobre la que está construido:**

| | |
|---|---|
| Ubicación | **León capital** |
| Estructura | **Una sola persona**: sin socios y sin empleados |
| Espacio de trabajo | **El propio domicilio**: sin local, sin coworking, sin alquiler |
| Cotización | **Tarifa plana de 80 €/mes** el primer año |
| Equipo | **Ordenador y conexión ya en propiedad** |
| Capital inicial | **Ninguno.** Solo el material que ya tiene |
| Herramienta central | **Suscripción de Claude Pro**, como coste recurrente explícito |

---

## 1. Resumen en una página

El plan original era un buen esqueleto con tres problemas graves y muchos huecos:

1. **Todo el plan jurídico-fiscal era de Canarias**, no de León. IGIC en lugar de IVA, modelos 400/420/425 en lugar de 303/390, Administración Tributaria Canaria en lugar de la AEAT, y el Régimen Especial del Pequeño Empresario canario.
2. **La cifra de ventas no era una previsión, era un despeje.** La plantilla calcula las ventas hacia atrás desde el sueldo que quiere cobrar la promotora. Los 52.172,68 € del Año 1 salían de "necesito cobrar 18.000 € netos", no de "voy a vender X webs a Y euros". No existía ningún modelo de unidades × precio en ninguna parte del libro.
3. **La tesis de mercado estaba caducada.** Se apoyaba en un dato de GoDaddy anterior a 2022 ("el 78 % de autónomos y pymes no tiene web"). En 2026 alrededor del **76 % de las pymes españolas ya tiene web**. La oportunidad se ha invertido: ya no es la ausencia de web, es la mala web y la web abandonada.

Y estaba dimensionado para una empresa que no existe: **presupuestaba un empleado, un local alquilado y 4.330 € de inversión inicial**. Nada de eso encaja con trabajar sola desde casa y sin dinero para empezar.

El resultado de ajustarlo a tu realidad es un plan mucho más pequeño y mucho más sólido:

> **Punto de equilibrio: 8.047 € al año.** El 24 % de la facturación prevista. El negocio no necesita crecer para sobrevivir; necesita crecer para pagarte un sueldo digno. Es lo que convierte la falta de capital en resiliencia.

---

## 2. Errores del plan original

### 2.1 Fiscalidad de otro territorio (crítico)

| Constaba en el original | Correcto en León (Castilla y León) |
|---|---|
| IGIC | **IVA**, tipo general 21 % |
| Modelo 420 / 425 | **Modelo 303** (trimestral) y **390** (anual) |
| Modelo 400 ante la Administración Tributaria Canaria | No existe. Alta censal con **036/037** en la AEAT de León |
| Régimen Especial del Pequeño Empresario (exención de IGIC bajo 30.000 €) | No aplica. No hay figura equivalente en régimen común |
| "Modelo 180 ante la Agencia Tributaria Canaria (el equivalente al 347)" | Confusión doble: el 180 es el resumen de retenciones por arrendamiento; el 347 va a la AEAT |

Un detalle que juega a favor: el original ponía "IGIC" pero tenía metido un **21 %**, que es el tipo del IVA (el IGIC general es del 7 %). Es decir, el modelo llevaba desde el principio calculando con tipos peninsulares. **Ninguna cifra cambia** al corregirlo; lo que estaba mal eran los rótulos, los modelos y todo el texto legal.

### 2.2 Normativa desactualizada

- **Protección de datos:** citaba la **LO 15/1999, derogada desde 2018**. El marco vigente es el RGPD y la LOPDGDD 3/2018. Tampoco distinguía las dos condiciones del negocio: *responsable* de sus propios datos y *encargada del tratamiento* de los de sus clientes (art. 28 RGPD, contrato obligatorio con cada uno).
- **Cuota de autónomos:** hablaba de la "tarifa plana de 60 euros". Hoy son **80 €/mes** y rige la cotización por ingresos reales (15 tramos en 2026, de 205,88 a 607,35 €/mes con el MEI del 0,9 %).
- **Prevención de riesgos laborales:** apartado **vacío**, pese a presupuestar un empleado. Sin empleados deja de ser un incumplimiento.
- No mencionaba **Verifactu** (Ley 18/2022 + RD 1007/2023), la factura verificable con software homologado: obligatoria para sociedades desde el **1/01/2027** y para autónomos desde el **1/07/2027**. No urge para el Año 1, pero conviene elegir ya un programa adaptado para no migrar después — y es una de las mejores excusas comerciales para llamar a un micronegocio.

### 2.3 Estaba dimensionado para otra empresa

| | Original | Tu realidad |
|---|---|---|
| Personas | Promotora + 1 empleado | **Solo tú** |
| Empleado | 11.580 €/año — **por debajo del SMI 2026** (16.576 €), ilegal a jornada completa | Ninguno |
| Espacio | Local con arrendamiento | **Tu casa** |
| Inversión inicial | 4.900,50 € | **121 €** |
| Tesorería inicial | **−570,50 €** | +179 € |
| Segundo socio | Listado en portada, sin encaje jurídico ni retribución | Ninguno |

El plan original arrancaba con 570 € de agujero el día uno y con un **plazo de cobro de 0 meses** sin justificarlo.

### 2.4 Otras incoherencias

- **El mix de ventas era 100 % "Web básica".** Las otras tres líneas tenían precio y margen pero **contribución del 0 %**. El negocio que modelaban las cuentas era vender 65 webs básicas al año y nada más — imposible para una persona sola.
- **"Cuota por mantenimiento" figuraba en el Canvas** como fuente de ingresos y no aparecía en ninguna cuenta.
- **El epígrafe de IAE indicado ("P763")** es de Sección 2ª (profesional) mientras el resto del plan asume actividad empresarial.
- **La estrategia de redes sociales hablaba de "el progreso de las reformas"** — copiada de una plantilla de un negocio de reformas.
- **"Ilustración" a 50 €** con margen 100 % y contribución nula. Peso muerto.
- Inflación al **8 %** (real prevista: 3,6 % en 2026) y tasa de descuento del VAN al **1,5 %**, con la que cualquier proyecto "es rentable".
- La **TIR del 454 %** es un artefacto: sale de dividir un flujo que incluye tu sueldo entre una inversión mínima. No mide rentabilidad.

---

## 3. La adaptación

### 3.1 El giro estratégico

> **El original vendía webs a quien no tenía web. El adaptado vende continuidad a quien tiene una web que no funciona.**

- El **76 % de las pymes españolas ya tiene web**; solo un 24 % carece de ella.
- El **Kit Digital** financió decenas de miles de sitios entre 2022 y 2025 (32 % de los bonos fueron "sitio web y presencia en internet") y cerró a nuevas solicitudes en octubre de 2025. Queda un parque instalado de webs hechas deprisa y ya sin proveedor.
- Los **constructores web con IA** han hundido el precio de la maquetación. Es la amenaza que el DAFO original ni mencionaba, y es existencial para quien solo venda "una web bonita a 800 €".

### 3.2 León da más mercado que Ponferrada

| | Provincia de León |
|---|---|
| Empresas | **27.825** (18,8 % de Castilla y León) |
| Densidad empresarial | **62,2 por cada mil habitantes**, sobre la media autonómica |
| Autónomos afiliados al RETA | **34.349** (abril 2026) |
| Sociedades creadas en el 1.er semestre de 2026 | **361**, la 2.ª provincia de la comunidad |

Segmentos, con fuente declarada:

| Segmento | Estimación | Fuente |
|---|---|---|
| Pymes y micropymes de León capital y alfoz | ~11.100 | **Estimación propia**: 40 % de las 27.825 de la provincia. **Verificar en DIRCE-INE** |
| Autónomos y profesionales de la provincia | **34.349** | Seguridad Social, abril 2026. Dato oficial |
| Alojamiento y hostelería del Camino a su paso por León | ~340 | **Estimación propia** sobre el registro turístico de la Junta. **Verificar** |
| Agroalimentario con sello leonés (Cecina IGP, Morcilla IGP, DO Tierra de León, Mantecadas de Astorga…) | ~200 | **Estimación propia** sumando operadores de los consejos reguladores. **Confirmar** |
| Gestorías, imprentas y agencias (prescriptoras) | ~90 | Directorio provincial |

Las verticales de Ponferrada (bodegas de la DO Bierzo) se sustituyen por las dos que tienen sentido desde León: **el Camino de Santiago** y el **agroalimentario leonés con IGP/DO**.

**Las cifras marcadas como estimación propia son mías, derivadas de datos provinciales.** Están señaladas como tales dentro del Excel, en la columna de fuentes.

### 3.3 Servicios y precios

| # | Servicio | Original | Adaptado | Coste unit. | Margen |
|---|---|---|---|---|---|
| 1 | Web esencial | 800 € | **1.200 €** | 150 € | 87,5 % |
| 2 | Web profesional / e-commerce | 3.500 € | **3.500 €** | 600 € | 82,9 % |
| 3 | Identidad visual y diseño gráfico | 950 € | **950 €** | 60 € | 93,7 % |
| 4 | ~~Ilustración (50 €)~~ → **Mantenimiento gestionado** | — | **60 €/mes** | 180 €/año | 75,0 % |
| 5 | *(línea nueva)* **SEO local y Google Business** | — | **250 €/mes** | 480 €/año | 84,0 % |

**Margen bruto medio ponderado: 84,76 %.** La web esencial sube de 800 € a 1.200 € deliberadamente: a 800 € se compite de frente contra plataformas de IA, y esa batalla está perdida.

Las dos líneas recurrentes suponen el **29 % de la facturación del Año 1**. Trabajando sola valen aún más que con equipo: el ingreso recurrente no exige volver a vender cada mes, que es justo lo que escasea.

### 3.4 La estructura de costes

Sin local, sin nóminas, sin deuda y sin inversión:

| Partida | Año 1 |
|---|---|
| **Suscripciones de software** | **1.430 €** |
| ↳ Claude Pro (~19 €/mes) | 230 € |
| ↳ Adobe Creative Cloud (~62 €/mes) | 740 € |
| ↳ Herramientas de SEO local | 300 € |
| ↳ Hosting y dominios propios | 160 € |
| Publicidad y marketing | 1.500 € |
| Cuota de autónomos (tarifa plana 80 €/mes) | 960 € |
| Asesoría | 780 € |
| Desplazamientos a cliente | 600 € |
| Material de oficina | 480 € |
| Suministros (parte afecta de la vivienda) | 480 € |
| Seguro de responsabilidad civil profesional | 250 € |
| Varios | 240 € |
| Gastos previos iniciales | 100 € |
| **Total** | **6.820 €** |

**Presupuestado con el plan Pro** (~19 €/mes, 230 €/año), que es el que usas. Con el plan Max (~95 €/mes) el coste anual subiría a 1.140 € y el punto de equilibrio pasaría de 8.047 € a unos 9.100 €: seguiría siendo asumible, pero es una decisión que debe justificarse en horas. La celda es `I271` de la hoja `CÓMO`.

Está justificado en el plan como condición de viabilidad, no como capricho: una sola persona no produce 17 proyectos al año, sostiene una cartera de mantenimiento y SEO, escribe contenido propio y dedica dos mañanas semanales a vender, con los métodos de 2020. El criterio para renovarla: **si no ahorra al menos una jornada al mes, sobra.**

### 3.5 Inversión inicial: prácticamente cero

Como no hay dinero para empezar y el ordenador y la conexión ya están en propiedad, **el plan no compra nada**:

| | |
|---|---|
| Hardware | 0 € — ya lo tienes |
| Software | 0 € — todo es suscripción mensual, que es gasto, no inversión |
| Mobiliario | 0 € |
| Gastos previos (dominio, tarjetas) | 100 € |
| IVA | 21 € |
| **Inversión total** | **121 €** |
| Aportación | 300 € |
| **Tesorería inicial** | **179 €** |

Con 179 € de caja, lo que financia el negocio no es el capital: **es el anticipo del 50 % de los primeros clientes.** Por eso en el plan el anticipo pasa de ser una buena práctica a ser el mecanismo de financiación, y por eso el plazo de cobro se fija en 0 meses (medio proyecto se cobra al firmar y el resto antes de entregar accesos; las cuotas van domiciliadas).

*Nota fiscal que sí puedes aprovechar:* puedes **afectar tu ordenador actual a la actividad** y amortizarlo. El efecto es pequeño (del orden de 175 €/año de gasto deducible, unos 28 € de ahorro real), así que el plan **no lo computa** y se queda del lado prudente. Coméntalo igualmente con la asesoría.

### 3.6 Trabajar desde casa

Se ha ajustado todo lo que dependía del local:

- **Fuera el arrendamiento.** En su lugar, la parte afecta de los suministros de tu vivienda.
- **Deducción fiscal:** el 30 % de la parte proporcional de luz, agua, gas, internet y teléfono según los **metros cuadrados afectos declarados en el modelo 036**. Ejemplo: vivienda de 90 m² con 15 m² afectos (16,7 %) y 2.000 € de suministros → unos 100 € deducibles. El IBI, la comunidad y el seguro del hogar se deducen por la parte proporcional completa, sin el 30 %. Son cantidades pequeñas, pero **si no declaras los metros afectos en el 036 no puedes deducir nada.**
- **Comprueba dos cosas antes:** el criterio del Ayuntamiento de León (para una actividad sin atención al público suele bastar la declaración responsable) y **los estatutos de tu comunidad de propietarios**, que a veces prohíben la actividad profesional.
- **En lo comercial**, la regla del plan es que **las reuniones se hacen siempre en el local del cliente.** En un negocio B2B local eso es una ventaja, no una carencia, y evita tener que justificar dónde trabajas.
- **En prevención**, sin empleados no hay obligaciones como empleadora. Pero la ergonomía deja de ser un trámite legal para ser continuidad del negocio: **aquí no hay quien te sustituya si te lesionas.**

### 3.7 Resultado del modelo

| Magnitud | Original | Adaptado |
|---|---|---|
| Ventas Año 1 | 52.172,68 € | **33.329 €** |
| **Punto de equilibrio** | 28.618,26 € | **8.047 €** |
| Retribución (líquido anual) | 18.000 € | **18.000 €** = 1.500 €/mes |
| Inversión total | 4.900,50 € | **121 €** |
| Tesorería inicial | −570,50 € | **+179 €** |

Trayectoria a tres años:

| | Ventas | Disponible para ti |
|---|---|---|
| **Año 1** | 33.329 € | 18.000 € — **1.500 €/mes** |
| **Año 2** (+20 %) | 39.995 € | 20.165 € — **1.680 €/mes** |
| **Año 3** (+15 %) | 45.995 € | 23.034 € — **1.919 €/mes** |

**La validación cruzada que el plan original no tenía.** La plantilla despeja las ventas desde el sueldo objetivo; para comprobar que la cifra es alcanzable, se ha construido aparte la previsión ascendente que faltaba:

| Servicio | Precio | Unidades Año 1 | Ingreso |
|---|---|---|---|
| Web esencial | 1.200 € | 10 | 12.000 € |
| Web profesional / e-commerce | 3.500 € | 2 | 7.000 € |
| Identidad visual y diseño gráfico | 950 € | 5 | 4.750 € |
| Mantenimiento gestionado | 60 €/mes | 97 meses-cliente | 5.820 € |
| SEO local | 250 €/mes | 15 meses-cliente | 3.750 € |
| **Total** | | | **33.320 €** |

**33.320 € (ascendente) frente a 33.329 € (modelo): diferencia del 0,03 %.**

Son **17 proyectos al año, 1,4 al mes.** Deliberadamente conservador: trabajando sola, la capacidad real no es producir 17 proyectos, es producirlos **dejando tiempo para vender los del año siguiente**.

### 3.8 Los dos riesgos que hay que vigilar

**1. El salto de cuota del mes 13.** No es un error del plan: es cómo funciona la tarifa plana.

La tarifa plana de 80 €/mes dura **12 meses**. A partir del mes 13 pasas al sistema ordinario de **cotización por ingresos reales**, donde la cuota depende del tramo en que caiga tu rendimiento neto. Con el rendimiento previsto en este plan (unos 1.786 €/mes) caes en el tramo 7-8, de unos **330 €/mes**.

| | Año 1 | Año 2 |
|---|---|---|
| Cuota mensual | 80 € | ~330 € |
| Coste anual | **960 €** | **~3.960 €** |

Son **3.000 € más de coste fijo** sin que hayas subido de sueldo, y llegan de golpe el mes 13.

La plantilla no lo veía: solo inflacionaba la cuota del Año 1 con el IPC, lo que habría dejado el Año 2 en unos 990 € en lugar de 3.960 €. **He sustituido esas dos fórmulas por la cuota real** (`D148` y `E148` de la hoja `CUÁNTO Y CUÁNDO`). La mitigación está en los objetivos del Año 1: **apartar 250 € al mes** durante el primer año son exactamente los 3.000 € del salto.

**Hay una salida, y hay que pedirla.** La tarifa plana se prorroga otros 12 meses si tu rendimiento neto no supera el SMI (1.184 €/mes, 14.208 €/año). El plan proyecta 1.786 €/mes, así que asume prudentemente que no la tendrás — pero el primer año arrancas de cero clientes y es perfectamente posible que el rendimiento real se quede por debajo. **Revísalo en el mes 10**: si vas por debajo del SMI, solicita la prórroga. No es automática, hay que pedirla. Está puesto como objetivo del Año 1 en el libro.

**2. Que la venta se coma a la producción, o al revés.** Es la debilidad estructural de trabajar sola y no tiene solución barata. La defensa del plan son **dos mañanas semanales bloqueadas para prospección, tratadas como si fueran una entrega con fecha**, y usar la IA para comprimir producción y liberar horas de venta — no para bajar el precio.

---

## 4. Lo que hay que decidir o verificar

1. **Confirmar que tienes derecho a la tarifa plana**: exige no haber estado de alta en el RETA en los 2 años anteriores (3 si ya la disfrutaste). Todo el Año 1 depende de esto.
2. **Declarar los metros afectos en el 036**, o no podrás deducir nada de los suministros de casa.
3. **Revisar los estatutos de tu comunidad de propietarios** y el criterio del Ayuntamiento de León sobre actividad en el domicilio.
4. **Epígrafe de IAE**: determina si las facturas llevan retención del 15 % y si tienes que presentar el modelo 130. Resolver con la asesoría antes del 036.
5. **Vigilar si Pro te llega.** El plan va con Pro (230 €/año). Si el volumen te obliga a pasar a Max, son 910 € más al año y el punto de equilibrio sube a unos 9.100 €.
6. **Verificar las tres cifras de mercado** marcadas como estimación propia (sección 3.2).
7. **Solicitar las ayudas.** El plan **no computa ninguna** — la viabilidad no depende de ellas. Pero sin capital inicial, una subvención es la vía más rápida de crear el colchón de tesorería que hoy no existe:
   - **CONSOLIDACYL** (Junta de Castilla y León), con atención especial a la reincorporación de la mujer.
   - **ECYL**: subvenciones al autoempleo.
   - **Cámara de Comercio de León** y **Diputación de León**: programas de emprendimiento.
   - Adhesión como **Agente Digitalizador** para captar bonos de Kit Digital aún pendientes de ejecutar.
8. **No montes una S.L. todavía.** Solo compensa a partir de unos 60.000 € de beneficio anual. Antes de eso solo añade contabilidad, cuentas anuales y costes.

---

## 5. Cambios sobre la plantilla original

El libro conserva su estructura y sus 1.732 fórmulas. Se han escrito únicamente celdas de entrada, con **7 excepciones deliberadas**:

| Celda | Fórmula original | Sustituida por | Motivo |
|---|---|---|---|
| `PORTADA!I26` | `=TODAY()` | 31/07/2026 | Un plan lleva la fecha en que se hizo, no la de apertura del archivo |
| `CUÁNTO!E42`, `A68`, `K121`, `J178` | textos "CON/SIN IGIC" | "CON/SIN IVA" | León está en territorio común |
| `CUÁNTO!D148`, `E148` | `=C148*(1+IPC)` | 3.960 € y 4.080 € | La plantilla solo inflacionaba la tarifa plana; la cuota real a partir del Año 2 es muy superior (sección 3.8) |

**Nota sobre el recálculo:** el libro se entrega con el recálculo completo activado al abrir, así que Excel recalcula el modelo entero en cuanto lo abras. No fue posible recalcularlo aquí con LibreOffice (se bloquea también con el archivo original, por las cadenas de fórmulas entre hojas), así que las cifras de este documento se han verificado replicando las fórmulas de la plantilla de forma independiente. La comprobación clave sale exacta: **flujo de caja del Año 1 = 18.000,00 €**, idéntico a la retribución objetivo.

---

## 6. Nota sobre el encaje con FARO

Este repositorio contiene la documentación de **FARO** (automatización con IA para clínicas dentales). El plan adaptado aquí **no** es FARO: es la continuación del negocio de diseño web y gráfico del documento original.

Y con esta estructura son más compatibles que nunca: un punto de equilibrio de 8.047 € significa que el negocio de diseño web se sostiene con muy poca facturación, dejando margen de tiempo y de riesgo para construir FARO en paralelo. Las líneas recurrentes que se han introducido aquí (mantenimiento, SEO local) son además el mismo músculo comercial que necesita FARO: vender una cuota mensual, no un proyecto.

---

## Fuentes

- [Cuota de autónomos 2026: tramos y tarifa plana — Infoautónomos](https://www.infoautonomos.com/seguridad-social/cuota-de-autonomos-cuanto-se-paga/)
- [Tarifa plana de 80 euros para autónomos en 2026 — Infoautónomos](https://www.infoautonomos.com/seguridad-social/tarifa-plana-autonomos/)
- [Tramos cuota autónomos 2026: tabla completa (205,88 €–607,35 €)](https://invoo.es/es/blog/guias/tramos-cuota-autonomos-2026-tabla-completa/)
- [Cuota autónomos 2026: novedades y cambios — Wolters Kluwer](https://www.wolterskluwer.com/es-es/expert-insights/cuotas-autonomos-2026)
- [León concentra 27.825 empresas, el 18,8 % del total autonómico — Heraldo de León](https://www.heraldodeleon.es/articulo/economia/leon-concentra-27825-empresas-188-total-autonomico/20260302173631076491.html)
- [León constituye 361 empresas en el primer semestre del año — leonoticias](https://www.leonoticias.com/leon/leon-constituye-361-empresas-primer-semestre-ano-20260718130452-nt.html)
- [La afiliación a la Seguridad Social en León: 34.349 autónomos (abril 2026) — Ahora León](https://ahoraleon.com/la-afiliacion-a-la-seguridad-social-en-leon-sube-en-abril-hasta-los-171-232-trabajadores-26/)
- [El Banco de España eleva la inflación prevista para 2026 al 3,6 %](https://www.bolsamania.com/noticias/economia/banco-espana-revisa-alza-previsiones-pib-crecimiento-inflacion-ipc-2026--21415760.html)
- [Digitalización de pymes en España 2026: estadísticas por sector y tamaño](https://desarrollosoftware.es/digitalizacion-pymes-espana-datos/)
- [Informe de digitalización de las pymes — ONTSI](https://www.ontsi.es/sites/ontsi/files/2024-08/informe_digitalizacion_pymes.pdf)
- [Kit Digital 2026: Orden TDF/39/2026 — Oficina Acelera Pyme](https://acelerapyme-aecim.com/ayuda-digitalizacion/kit-digital-2026-ayudas-para-la-digitalizacion-de-pymes-y-autonomos-orden-tdf-39-2026-modificacion-de-bases-reguladoras/)
- [CONSOLIDACYL — Junta de Castilla y León](https://www.tramitacastillayleon.jcyl.es/web/jcyl/AdministracionElectronica/es/Plantilla100Detalle/1251181050732/Ayuda012/1285613925450/Propuesta)
- [Autoempleo — Cámara de Comercio de León](https://camaraleon.com/ayudas-y-subvenciones-2/autoempleo/)
- [IGIC Canarias 2026: tipo general 7 %](https://guiafiscal.es/iva/canarias/)
