# Plan de negocio — análisis del original y adaptación a Ponferrada 2026

**Documento de origen:** `PePérezSánchezMG.xlsx` — plantilla INCYNCO ("TRIBU"), fechada el 29/12/2023, con inicio previsto en 2T 2024.
**Documento adaptado:** `PLAN_NEGOCIO_PONFERRADA_2026.xlsx` (mismo libro, misma estructura, mismas fórmulas).
**Fecha de la adaptación:** 31 de julio de 2026.

---

## 1. Resumen en una página

El plan original era un buen esqueleto con tres problemas graves y muchos huecos:

1. **Todo el plan jurídico-fiscal era de Canarias**, no de Ponferrada. IGIC en lugar de IVA, modelos 400/420/425 en lugar de 303/390, Administración Tributaria Canaria en lugar de la AEAT, y el Régimen Especial del Pequeño Empresario canario. Esto no es un detalle de redacción: contaminaba la tesorería, la hoja de Administraciones Públicas y el balance.
2. **La cifra de ventas no era una previsión, era un despeje.** La plantilla calcula las ventas hacia atrás desde el sueldo que quiere cobrar la promotora (`C124 = F313/12`). Los 52.172,68 € del Año 1 no salían de "voy a vender X webs a Y euros": salían de "necesito cobrar 18.000 € netos". No existía ningún modelo de unidades × precio en ninguna parte del libro.
3. **La tesis de mercado estaba caducada.** Se apoyaba en un dato de GoDaddy anterior a 2022 ("el 78 % de autónomos y pymes no tiene web") y en la aceleración digital del Covid. En 2026 alrededor del **76 % de las pymes españolas ya tiene web**. La oportunidad se ha invertido: ya no es la ausencia de web, es la mala web y la web abandonada.

Además, aproximadamente **el 40 % del libro estaba en blanco**: mapas de empatía, tabla de competencia, política de compras, logística, prevención de riesgos laborales, legislación específica, innovación, medioambiente y los objetivos de los Años 2 y 3.

La adaptación corrige los tres problemas, rellena todos los huecos y añade lo que faltaba estructuralmente: **líneas de ingreso recurrente**, que en el original aparecían en el Canvas ("cuota por mantenimiento") pero no facturaban ni un euro en las cuentas.

---

## 2. Errores del plan original, uno a uno

### 2.1 Fiscalidad de otro territorio (crítico)

| Constaba en el original | Correcto en Ponferrada (León, Castilla y León) |
|---|---|
| IGIC | **IVA**, tipo general 21 % |
| Modelo 420 / 425 (IGIC trimestral y anual) | **Modelo 303** (trimestral) y **390** (resumen anual) |
| Modelo 400 ante la Administración Tributaria Canaria | No existe. Alta censal con **036/037** en la AEAT |
| Régimen Especial del Pequeño Empresario o Profesional (exención de IGIC bajo 30.000 €) | No aplica. No hay figura equivalente en régimen común |
| "Modelo 180 ante la Agencia Tributaria Canaria (el equivalente al 347)" | Confusión doble: el 180 es el resumen anual de retenciones por arrendamiento; el 347 se presenta ante la AEAT |

El tipo del IGIC usado (21 %) coincidía numéricamente con el IVA, así que **las cifras no cambian por este motivo** — pero todas las etiquetas, modelos y trámites sí, y el plan era impresentable ante cualquier asesoría o convocatoria de subvención de Castilla y León.

### 2.2 Normativa desactualizada

- **Protección de datos:** citaba la **LO 15/1999, derogada desde 2018**. El marco vigente es el RGPD (UE) 2016/679 y la LOPDGDD 3/2018. El original tampoco distinguía las dos condiciones del negocio: *responsable* de sus propios datos y *encargado del tratamiento* de los datos de sus clientes (art. 28 RGPD, contrato obligatorio con cada uno).
- **Cuota de autónomos:** hablaba de la "tarifa plana de 60 euros". Desde 2023 rige la cotización por **ingresos reales** (15 tramos, congelados en 2026 entre 200 y 601,57 €/mes) y la tarifa plana es de **80 €/mes** los 12 primeros meses, prorrogables otros 12 si el rendimiento neto no supera el SMI (1.184 €/mes en 2026).
- **Prevención de riesgos laborales:** apartado **vacío**, pese a que el plan contrataba a un empleado desde el Año 1. Con trabajador por cuenta ajena, la Ley 31/1995 es de aplicación obligatoria.
- No mencionaba la **factura electrónica B2B obligatoria** (Ley 18/2022 "Crea y Crece" + Verifactu), que en 2026 es a la vez una obligación propia y una de las mejores excusas comerciales para llamar a un micronegocio.

### 2.3 El salario del empleado era ilegal

El original presupuestaba **11.580 € brutos anuales** para el Empleado 1. El SMI de 2026 es de **1.184 €/mes × 14 pagas = 16.576 €/año**. A jornada completa, esa cifra es ilegal.

En la adaptación se resuelve declarando explícitamente **media jornada: 8.288 €/año**, que es el SMI proporcional y sí es legal. De paso se corrige la retención de IRPF, que el original fijaba en el 20 % — a ese nivel salarial la retención legal es **0 %**.

### 2.4 El negocio arrancaba con la caja en negativo

| | Original | Adaptado |
|---|---|---|
| Inversión total | 4.900,50 € | 5.082,00 € |
| Recursos propios aportados | 4.330,00 € | 8.000,00 € |
| **Tesorería inicial** | **−570,50 €** | **+2.918,00 €** |

El plan original empezaba con 570 € de agujero el día uno. Y lo hacía además con un **plazo de cobro de 0 meses**, es decir, asumiendo que todos los clientes pagan al contado — irreal en B2B. En la adaptación el plazo de cobro es de 30 días, lo que es realista y hace necesario el colchón de tesorería.

### 2.5 Incoherencias internas

- **El mix de ventas era 100 % "Web básica".** Las otras tres líneas (web premium, diseño gráfico, ilustración) tenían precio y margen definidos pero **contribución del 0 %**. El negocio real que modelaban las cuentas era vender 65 webs básicas al año y nada más.
- **"Cuota por mantenimiento" figuraba en el Canvas como fuente de ingresos** y no aparecía en ninguna cuenta. Cero ingreso recurrente en un plan que decía tener ingresos recurrentes.
- **Socio 2 (Wilmer José Pérez Yánez)** aparecía en el resumen ejecutivo, pero la forma jurídica elegida es *empresaria individual*, que **no admite socios**, y las cuentas solo retribuyen a un promotor. Hay que decidir antes del alta: colaborador externo retribuido a éxito, o constituir Sociedad Civil / S.L. y rehacer el plan fiscal.
- **El epígrafe de IAE indicado ("P763")** corresponde a la Sección 2ª (actividad profesional), mientras el resto del plan asume actividad empresarial. De ello depende si las facturas llevan retención del 15 % y si hay obligación de presentar el modelo 130. Hay que resolverlo con la asesoría antes del 036/037.
- **La estrategia de redes sociales hablaba de "el progreso de las reformas, el antes y el después"** — texto copiado literalmente de una plantilla de un negocio de reformas.
- **"Ilustración" a 50 €** con coste 0 y margen 100 %: por debajo de mercado y con contribución nula. Peso muerto.
- Errata "Diseo gráfico" (sin ñ) repetida en cuatro hojas.

### 2.6 Supuestos financieros irreales

| Parámetro | Original | Adaptado | Motivo |
|---|---|---|---|
| Inflación anual | 8,0 % | 3,0 % | Banco de España (jun-2026): 3,6 % en 2026 y 2,6 % en 2027 |
| Tasa de descuento del VAN | 1,5 % | 8,0 % | Al 1,5 % el VAN sale de 73.879 € y cualquier proyecto "es rentable". Un proyecto personal sin histórico no se descuenta al tipo de la deuda pública |
| Crecimiento Año 2 / Año 3 | +25 % / +30 % | +22 % / +18 % | Crecer un 30 % en el tercer año sin ampliar estructura no es sostenible |
| Plazo de cobro | 0 meses | 1 mes | B2B con pymes |
| Coste de la web premium | 100 € sobre 3.500 € | 600 € sobre 3.500 € | Una tienda online de 2 meses tiene pasarela, plugins premium y subcontratación |

Sobre la **TIR del 454 %** del original: es un artefacto matemático. Sale de dividir un flujo de caja que incluye el sueldo de la promotora entre una inversión mínima de 4.330 €. No mide rentabilidad, mide que la inversión inicial es pequeña. Con la tasa de descuento corregida al 8 %, las cifras siguen siendo buenas pero dejan de ser fantasía.

### 2.7 Advertencia sobre el cálculo del impuesto

La plantilla aplica un **tipo fijo del 20 % con bonificación del 20 % (16 % efectivo)** sobre el beneficio antes de impuestos. Para una autónoma en estimación directa esto es una simplificación con dos inexactitudes:

1. **El IRPF es progresivo**, no un tipo plano.
2. **La retribución de la titular no es gasto deducible.** La base imponible es el rendimiento neto de la actividad.

La plantilla acierta a medias: cuando la forma jurídica es empresario individual, **excluye la retribución de la promotora del EBITDA** (fórmula `C196`, condicionada a que la retención sea "n/a"), que es lo correcto. Pero el tipo sigue siendo plano.

Cálculo aproximado real para el Año 1 adaptado, a contrastar con asesoría:

```
Rendimiento neto previo                        ≈ 18.437 €
− 5 % gastos de difícil justificación (máx. 2.000 €)  −  922 €
− Amortizaciones                                −  705 €
= Rendimiento neto                             ≈ 16.811 €
− Reducción 20 % inicio de actividad (art. 32.3 LIRPF) − 3.362 €
= Base                                         ≈ 13.449 €
IRPF estimado (escala estatal + autonómica CyL, mínimo personal 5.550 €)  ≈ 1.500 – 1.900 €
```

Es decir, **la carga fiscal real del Año 1 es probablemente menor** que los 2.837 € que calcula la plantilla. La diferencia juega a favor, pero no debe usarse para ningún trámite sin validación profesional.

---

## 3. La adaptación: qué cambia y por qué

### 3.1 El giro estratégico

> **El original vendía webs a quien no tenía web. El adaptado vende continuidad a quien tiene una web que no funciona.**

Los datos que sostienen el giro:

- El **76 % de las pymes españolas ya tiene web**; solo un 24 % carece de ella (ONTSI / DESI).
- El **Kit Digital** financió decenas de miles de sitios entre 2022 y 2025, y "Sitio web y presencia en internet" fue la solución más demandada (**32 % de los bonos**). El programa cerró a nuevas solicitudes en octubre de 2025. Eso deja un parque instalado de webs hechas deprisa y ya sin proveedor.
- Los **constructores web con IA** (Framer, Lovable, v0, Canva, Wix ADI) han hundido el precio de la maquetación. Es la amenaza que el DAFO original ni mencionaba, y es existencial para quien solo venda "una web bonita a 800 €".

De ahí que la defensa no sea técnica sino comercial: **marca local, cartera de mantenimiento y conocimiento del sector del cliente**.

### 3.2 Servicios y precios

| # | Servicio | Original | Adaptado 2026 | Coste unit. | Margen |
|---|---|---|---|---|---|
| 1 | Web esencial | 800 € | **1.200 €** | 150 € | 87,5 % |
| 2 | Web profesional / e-commerce | 3.500 € | **3.500 €** | 600 € | 82,9 % |
| 3 | Identidad visual y diseño gráfico | 950 € | **950 €** | 60 € | 93,7 % |
| 4 | ~~Ilustración (50 €)~~ → **Mantenimiento gestionado** | — | **60 €/mes** (720 €/año) | 180 € | 75,0 % |
| 5 | *(línea nueva)* **SEO local y Google Business** | — | **250 €/mes** (3.000 €/año) | 480 € | 84,0 % |

**Margen bruto medio ponderado: 85,8 %** (el original declaraba 87,5 %, pero era el margen de un único producto porque el mix era 100 % web básica).

La web esencial sube de 800 € a 1.200 € deliberadamente: a 800 € se compite de frente contra plataformas de IA, y esa batalla está perdida. A 1.200 € con mantenimiento incluido se compite en otro terreno.

### 3.3 Ingreso recurrente: el cambio estructural

| | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| Peso del ingreso recurrente | **23 %** | 30 % (objetivo) | 35 % (objetivo) |

Es la diferencia entre un freelance por proyectos y un negocio. Reduce la dependencia de cerrar ventas nuevas cada mes y hace la caja previsible. Estaba prometido en el Canvas del original y no existía en las cuentas.

### 3.4 Segmentos de cliente

Se sustituyen los tres segmentos genéricos ("Pymes", "Autónomos", "Agencias de marketing", con fuente en un ranking de empresas de la provincia de León) por cinco segmentos del Bierzo, con estimación y fuente declarada:

| Segmento | Estimación | Fuente / advertencia |
|---|---|---|
| Pymes y micropymes de Ponferrada y El Bierzo | ~6.400 | Directorios de empresas (Iberinform / einforma). **Verificar contra DIRCE-INE** |
| Autónomos y profesionales del Bierzo | ~9.300 | **Estimación propia**: 34.349 autónomos RETA en la provincia de León (abr-2026) × 27 % de peso poblacional comarcal |
| Bodegas DO Bierzo y enoturismo | ~70 | Consejo Regulador DO Bierzo (orden de magnitud). **Confirmar en crdobierzo.es** |
| Alojamiento y hostelería del Camino de Santiago | ~260 | **Estimación propia** sobre registro de alojamientos de la Junta de CyL. **Verificar** |
| Agencias, imprentas y gestorías (prescriptores) | ~60 | Directorio provincial |

Los dos segmentos nuevos —**bodegas de la DO Bierzo** y **alojamiento del Camino**— son la adaptación específica a Ponferrada. Tienen ticket medio superior a la media local y fuerte efecto demostración dentro de su sector.

**Las cifras marcadas como estimación propia son mías, derivadas de datos provinciales, no censos comarcales oficiales.** Están señaladas como tales dentro del propio Excel, en la columna de fuentes. Conviene verificarlas antes de presentar el plan a una convocatoria.

### 3.5 Estructura y costes

| Partida | Original | Adaptado | Nota |
|---|---|---|---|
| Retribución de la promotora | 18.000 € | **15.600 €** | 1.300 €/mes, más prudente en Año 1 |
| Cuota RETA | 3.480 € | **960 €** | Tarifa plana 80 €/mes |
| Empleado | 11.580 € (ilegal) | **8.288 €** | Media jornada, SMI proporcional |
| Suministros (coworking + fibra) | 0 € | **1.560 €** | Partida que estaba vacía |
| Desplazamientos por la comarca | 0 € | **480 €** | Negocio de venta presencial |
| Licencias de software e IA | 850 € | **2.400 €** | Adobe, Figma, SEO, IA, hosting |
| Asesoría y PRL | 360 € | **840 €** | Incluye servicio de prevención ajeno |
| Seguro de RC profesional | 30 € | **250 €** | 30 € no cubre nada |

### 3.6 Resultado del modelo

El libro recalcula solo a partir de estos drivers. Cifras del Año 1:

| Magnitud | Original | Adaptado |
|---|---|---|
| Ventas Año 1 | 52.172,68 € | **≈ 46.292 €** |
| Punto de equilibrio | 28.618,26 € | **≈ 25.621 €** |
| EBITDA | 21.297,62 € | **≈ 18.437 €** |
| Beneficio neto | 17.312,50 € | **≈ 14.895 €** |
| Tesorería inicial | −570,50 € | **+2.918 €** |
| Inversión total | 4.900,50 € | **5.082 €** |

**La validación cruzada que el plan original no tenía.** La plantilla despeja las ventas desde el sueldo objetivo. Para comprobar que esa cifra es alcanzable, se ha construido aparte la previsión ascendente que faltaba:

| Servicio | Precio | Unidades Año 1 | Ingreso |
|---|---|---|---|
| Web esencial | 1.200 € | 13 | 15.600 € |
| Web profesional / e-commerce | 3.500 € | 3 | 10.500 € |
| Identidad visual y diseño gráfico | 950 € | 10 | 9.500 € |
| Mantenimiento gestionado | 60 €/mes | 92 meses-cliente | 5.520 € |
| SEO local | 250 €/mes | 21 meses-cliente | 5.250 € |
| **Total** | | | **46.370 €** |

**46.370 € (ascendente) frente a 46.292 € (modelo): diferencia del 0,2 %.** El plan es internamente coherente.

En carga de trabajo son **26 proyectos al año, algo más de 2 al mes entre 1,5 personas**, más la cartera recurrente. Es exigente pero factible. Los 65 proyectos anuales que implicaba el plan original (52.172 € ÷ 800 €) no lo eran.

---

## 4. Lo que hay que decidir o verificar antes de usar el plan

1. **Wilmer: socio o colaborador.** La forma jurídica actual no admite socios. Decidir antes del alta censal.
2. **Epígrafe de IAE y actividad empresarial vs. profesional.** Determina la retención del 15 % en factura y la obligación del modelo 130. Consultar con asesoría antes del 036/037.
3. **Verificar las cuatro cifras de mercado** marcadas como estimación propia (sección 3.4).
4. **Confirmar la tarifa plana de 80 €**: requiere no haber estado de alta en el RETA en los 2 años anteriores (3 si ya se disfrutó de la bonificación).
5. **Solicitar las subvenciones**, que el plan deliberadamente **no computa** en las proyecciones — la viabilidad no depende de ellas:
   - Ayuntamiento de Ponferrada, consolidación del trabajo autónomo, convocatoria 2026 (plazo del 5/03/2026 al 3/09/2026, BOCYL nº 43 de 4/03/2026).
   - CONSOLIDACYL, Junta de Castilla y León.
   - Adhesión como **Agente Digitalizador** para captar bonos de Kit Digital aún pendientes de ejecutar (Orden TDF/39/2026 amplió plazos).
6. **Escenario alternativo sin empleado.** Si el Año 1 se afronta en solitario, subcontratando picos a freelances, el punto de equilibrio baja de ~25.600 € a **~15.000 €** y las ventas necesarias caen a unos **35.500 €**. Es notablemente menos arriesgado. La contrapartida es que se pierde el "puesto de trabajo creado", que puntúa en varias convocatorias de subvención. El libro entregado modela la versión **con** empleado a media jornada; cambiar a la versión sin empleado solo requiere poner a cero la celda `E606` de la hoja `CÓMO`.

---

## 5. Nota sobre el encaje con FARO

Este repositorio contiene la documentación de **FARO** (automatización con IA para clínicas dentales). El plan adaptado aquí **no** es FARO: es la continuación del negocio de diseño web y gráfico del documento original, actualizado a Ponferrada 2026, que es lo que se pidió.

Ambos son compatibles y de hecho se refuerzan: el negocio de diseño web genera caja e independencia desde el mes uno con un modelo conocido, mientras FARO —de ticket recurrente más alto pero ciclo de validación más largo— se construye en paralelo. Las líneas recurrentes que se han introducido aquí (mantenimiento, SEO local) son además el mismo músculo comercial que necesita FARO: vender una cuota mensual, no un proyecto.

Si en algún momento se prefiere un plan de negocio formal **para FARO** con esta misma plantilla, es un ejercicio distinto y hay que decirlo explícitamente.

---

## Fuentes

- [Cuota de autónomos 2026: tramos y tarifa plana — Infoautónomos](https://www.infoautonomos.com/seguridad-social/cuota-de-autonomos-cuanto-se-paga/)
- [Tarifa plana de 80 euros para autónomos en 2026 — Infoautónomos](https://www.infoautonomos.com/seguridad-social/tarifa-plana-autonomos/)
- [Cuota autónomos 2026: novedades y cambios — Wolters Kluwer](https://www.wolterskluwer.com/es-es/expert-insights/cuotas-autonomos-2026)
- [El Banco de España eleva la inflación prevista para 2026 al 3,6 %](https://www.bolsamania.com/noticias/economia/banco-espana-revisa-alza-previsiones-pib-crecimiento-inflacion-ipc-2026--21415760.html)
- [Digitalización de pymes en España 2026: estadísticas por sector y tamaño](https://desarrollosoftware.es/digitalizacion-pymes-espana-datos/)
- [Informe de digitalización de las pymes — ONTSI](https://www.ontsi.es/sites/ontsi/files/2024-08/informe_digitalizacion_pymes.pdf)
- [Kit Digital 2026: Orden TDF/39/2026, modificación de bases reguladoras — Oficina Acelera Pyme](https://acelerapyme-aecim.com/ayuda-digitalizacion/kit-digital-2026-ayudas-para-la-digitalizacion-de-pymes-y-autonomos-orden-tdf-39-2026-modificacion-de-bases-reguladoras/)
- [Programa Kit Digital — España Digital 2026](http://espanadigital.gob.es/lineas-de-actuacion/programa-kit-digital)
- [Subvenciones 2026 para la consolidación del trabajo autónomo — Ayuntamiento de Ponferrada](https://www.ponferrada.org/en/temas/ayudas-subvenciones-concursos-premios/subvenciones-ano-2026-destinadas-consolidacion-trabajo-auto)
- [CONSOLIDACYL — Junta de Castilla y León](https://www.tramitacastillayleon.jcyl.es/web/jcyl/AdministracionElectronica/es/Plantilla100Detalle/1251181050732/Ayuda012/1285613925450/Propuesta)
- [Ponferrada crece en población por tercer año consecutivo: 63.444 habitantes — Diario de León](https://www.diariodeleon.es/bierzo/260127/2073695/ponferrada-crece-habitantes-tercer-ano-consecutivo-situa-63-444-habitantes.html)
- [Ponferrada recupera los 64.000 habitantes en el padrón — El Bierzo Digital](https://www.elbierzodigital.com/ponferrada-recupera-los-64-000-habitantes-en-el-padron-y-consolida-su-tendencia-de-crecimiento-poblacional/)
- [La afiliación a la Seguridad Social en León: 34.349 autónomos (abril 2026) — Ahora León](https://ahoraleon.com/la-afiliacion-a-la-seguridad-social-en-leon-sube-en-abril-hasta-los-171-232-trabajadores-26/)
- [Consejo Regulador de la DO Bierzo — datos](http://www.crdobierzo.es/es/denominacion-de-origen/datos/)
- [Ponferrada ultima el Centro de Innovación y Emprendimiento — Diario de León](https://www.diariodeleon.es/bierzo/260615/2088284/ponferrada-ultima-centro-innovacion-emprendimiento.html)
- [Listado de empresas de Ponferrada — Iberinform](https://www.iberinform.es/informacion-de-empresas/leon/ponferrada)
