# Plan de negocio — análisis del original y adaptación a Ponferrada 2026

**Documento de origen:** `PePérezSánchezMG.xlsx` — plantilla INCYNCO ("TRIBU"), fechada el 29/12/2023, con inicio previsto en 2T 2024.
**Documento adaptado:** `PLAN_NEGOCIO_PONFERRADA_2026.xlsx` (mismo libro, misma estructura, mismas fórmulas salvo 9 sustituciones documentadas).
**Fecha de la adaptación:** 31 de julio de 2026.
**Estructura societaria:** Sociedad Limitada con **dos socios promotores retribuidos** — María Gabriela Pérez Sánchez (producción y dirección técnica) y Wilmer José Pérez Yánez (dirección comercial).

---

## 1. Resumen en una página

El plan original era un buen esqueleto con tres problemas graves y muchos huecos:

1. **Todo el plan jurídico-fiscal era de Canarias**, no de Ponferrada. IGIC en lugar de IVA, modelos 400/420/425 en lugar de 303/390, Administración Tributaria Canaria en lugar de la AEAT, y el Régimen Especial del Pequeño Empresario canario. Esto no es un detalle de redacción: contaminaba la tesorería, la hoja de Administraciones Públicas y el balance.
2. **La cifra de ventas no era una previsión, era un despeje.** La plantilla calcula las ventas hacia atrás desde el sueldo que quiere cobrar la promotora. Los 52.172,68 € del Año 1 no salían de "voy a vender X webs a Y euros": salían de "necesito cobrar 18.000 € netos". No existía ningún modelo de unidades × precio en ninguna parte del libro.
3. **La tesis de mercado estaba caducada.** Se apoyaba en un dato de GoDaddy anterior a 2022 ("el 78 % de autónomos y pymes no tiene web") y en la aceleración digital del Covid. En 2026 alrededor del **76 % de las pymes españolas ya tiene web**. La oportunidad se ha invertido: ya no es la ausencia de web, es la mala web y la web abandonada.

Y una **contradicción estructural**: el plan listaba a un segundo socio y declaraba a la vez la forma jurídica de *empresaria individual*, que no admite socios. Ese punto se ha resuelto en la dirección que pediste — Wilmer entra como socio de verdad y cobra —, y esa decisión ha obligado a rehacer el motor fiscal del plan.

Además, aproximadamente **el 40 % del libro estaba en blanco**: mapas de empatía, tabla de competencia, política de compras, logística, prevención de riesgos laborales, legislación específica, innovación, medioambiente y los objetivos de los Años 2 y 3.

---

## 2. Errores del plan original, uno a uno

### 2.1 Fiscalidad de otro territorio (crítico)

| Constaba en el original | Correcto en Ponferrada (León, Castilla y León) |
|---|---|
| IGIC | **IVA**, tipo general 21 % |
| Modelo 420 / 425 (IGIC trimestral y anual) | **Modelo 303** (trimestral) y **390** (resumen anual) |
| Modelo 400 ante la Administración Tributaria Canaria | No existe. Alta censal con **036** en la AEAT |
| Régimen Especial del Pequeño Empresario o Profesional (exención de IGIC bajo 30.000 €) | No aplica. No hay figura equivalente en régimen común |
| "Modelo 180 ante la Agencia Tributaria Canaria (el equivalente al 347)" | Confusión doble: el 180 es el resumen anual de retenciones por arrendamiento; el 347 se presenta ante la AEAT |

El tipo del IGIC usado (21 %) coincidía numéricamente con el IVA, así que **las cifras no cambian por este motivo** — pero todas las etiquetas, modelos y trámites sí, y el plan era impresentable ante cualquier asesoría o convocatoria de subvención de Castilla y León.

### 2.2 La contradicción del segundo socio

El resumen ejecutivo listaba a **Wilmer José Pérez Yánez como Socio 2** con su experiencia comercial. Al mismo tiempo, la hoja `CÓMO` declaraba la forma jurídica **"Empresario Individual en Estimación Directa"**, que por definición no admite socios. Y las cuentas solo retribuían a un promotor: el bloque "Empresario 2" estaba entero a cero.

O sea: el socio existía en la portada, no existía en lo jurídico y no cobraba en lo financiero.

**Resuelto pasando a Sociedad Limitada con los dos socios retribuidos.** El detalle completo está en la sección 3.

### 2.3 Normativa desactualizada

- **Protección de datos:** citaba la **LO 15/1999, derogada desde 2018**. El marco vigente es el RGPD (UE) 2016/679 y la LOPDGDD 3/2018. El original tampoco distinguía las dos condiciones del negocio: *responsable* de sus propios datos y *encargado del tratamiento* de los datos de sus clientes (art. 28 RGPD, contrato obligatorio con cada uno).
- **Cuota de autónomos:** hablaba de la "tarifa plana de 60 euros". Desde 2023 rige la cotización por **ingresos reales** y la tarifa plana es de **80 €/mes** los 12 primeros meses.
- **Prevención de riesgos laborales:** apartado **vacío**, pese a que el plan contrataba a un empleado desde el Año 1.
- No mencionaba la **factura electrónica B2B obligatoria** (Ley 18/2022 "Crea y Crece" + Verifactu), que en 2026 es a la vez una obligación propia y una de las mejores excusas comerciales para llamar a un micronegocio.

### 2.4 El salario del empleado era ilegal

El original presupuestaba **11.580 € brutos anuales** para el Empleado 1. El SMI de 2026 es de **1.184 €/mes × 14 pagas = 16.576 €/año**. A jornada completa, esa cifra es ilegal. Además fijaba una retención de IRPF del 20 % que a ese nivel salarial no corresponde (la legal sería 0 %).

En el plan adaptado **no hay contratación por cuenta ajena en el Año 1**: el segundo par de manos es el Socio 2. La primera contratación se planifica para el Año 2, ya con el SMI correcto.

### 2.5 El negocio arrancaba con la caja en negativo

| | Original | Adaptado |
|---|---|---|
| Inversión total | 4.900,50 € | 5.808,00 € |
| Recursos propios | 4.330,00 € | 10.000,00 € (capital social, 5.000 por socio) |
| **Tesorería inicial** | **−570,50 €** | **+4.192,00 €** |

El plan original empezaba con 570 € de agujero el día uno, y además con un **plazo de cobro de 0 meses** (todos los clientes pagan al contado), irreal en B2B. En la adaptación el plazo de cobro es de 30 días, lo que es realista y hace necesario el colchón de tesorería.

### 2.6 Otras incoherencias internas

- **El mix de ventas era 100 % "Web básica".** Las otras tres líneas (web premium, diseño gráfico, ilustración) tenían precio y margen definidos pero **contribución del 0 %**. El negocio que modelaban las cuentas era vender 65 webs básicas al año y nada más.
- **"Cuota por mantenimiento" figuraba en el Canvas como fuente de ingresos** y no aparecía en ninguna cuenta. Cero ingreso recurrente en un plan que decía tener ingresos recurrentes.
- **El epígrafe de IAE indicado ("P763")** corresponde a la Sección 2ª (actividades profesionales), que **solo pueden ejercer personas físicas**. Con la sociedad, el alta tiene que ir necesariamente en Sección 1ª.
- **La estrategia de redes sociales hablaba de "el progreso de las reformas, el antes y el después"** — texto copiado literalmente de una plantilla de un negocio de reformas.
- **"Ilustración" a 50 €** con coste 0 y margen 100 %: por debajo de mercado y con contribución nula. Peso muerto.
- Errata "Diseo gráfico" (sin ñ) repetida en cuatro hojas.

### 2.7 Supuestos financieros irreales

| Parámetro | Original | Adaptado | Motivo |
|---|---|---|---|
| Inflación anual | 8,0 % | 3,0 % | Banco de España (jun-2026): 3,6 % en 2026 y 2,6 % en 2027 |
| Tasa de descuento del VAN | 1,5 % | 8,0 % | Al 1,5 % el VAN sale de 73.879 € y cualquier proyecto "es rentable" |
| Plazo de cobro | 0 meses | 1 mes | B2B con pymes |
| Coste de la web premium | 100 € sobre 3.500 € | 600 € sobre 3.500 € | Una tienda online de 2 meses tiene pasarela, plugins premium y subcontratación |

Sobre la **TIR del 454 %** del original: es un artefacto matemático. Sale de dividir un flujo de caja que incluye el sueldo de la promotora entre una inversión mínima de 4.330 €. No mide rentabilidad, mide que la inversión inicial es pequeña.

---

## 3. La adaptación

### 3.1 El giro estratégico

> **El original vendía webs a quien no tenía web. El adaptado vende continuidad a quien tiene una web que no funciona.**

Los datos que sostienen el giro:

- El **76 % de las pymes españolas ya tiene web**; solo un 24 % carece de ella (ONTSI / DESI).
- El **Kit Digital** financió decenas de miles de sitios entre 2022 y 2025, y "Sitio web y presencia en internet" fue la solución más demandada (**32 % de los bonos**). El programa cerró a nuevas solicitudes en octubre de 2025. Eso deja un parque instalado de webs hechas deprisa y ya sin proveedor.
- Los **constructores web con IA** (Framer, Lovable, v0, Canva, Wix ADI) han hundido el precio de la maquetación. Es la amenaza que el DAFO original ni mencionaba, y es existencial para quien solo venda "una web bonita a 800 €".

### 3.2 Wilmer entra como socio: qué cambia

Retribuirlo obliga a cambiar la forma jurídica, y eso cambia el motor fiscal del libro entero. La plantilla lo soporta —tiene un modo "Sociedad"— pero calcula de otra manera:

| | Empresaria individual (antes) | Sociedad Limitada (ahora) |
|---|---|---|
| Impuesto | IRPF, tipo plano del 20 % con bonificación del 20 % | **Impuesto sobre Sociedades**: 15 % los dos primeros ejercicios con base positiva, 25 % después |
| Retribución de los promotores | **No** es gasto deducible; se paga con el beneficio | **Sí** es gasto deducible; retención del 15 % |
| ¿Resta del EBITDA? | No | **Sí** |
| Cómo se despejan las ventas del Año 1 | Punto de equilibrio **+** lo necesario para el sueldo | **Punto de equilibrio**, que ya incluye los dos sueldos |
| Responsabilidad | Ilimitada, con el patrimonio personal | **Limitada** al capital aportado |
| Contabilidad | Libros registro | Contabilidad mercantil, cuentas anuales y depósito en el Registro |
| Modelos fiscales propios | 130 (pago fraccionado IRPF) | **200** (IS anual) y **202** (pagos fraccionados) |

Consecuencia importante y visible en las cuentas: **en el Año 1 el beneficio es cero por diseño**. No es un mal resultado, es la definición del objetivo — la sociedad factura exactamente lo necesario para pagar dos sueldos, cubrir la estructura y no consumir capital. El beneficio aparece en los Años 2 y 3.

Otras dos consecuencias que conviene tener presentes:

- **Se pierden ventajas del régimen de autónomo**: la reducción del 20 % por inicio de actividad (art. 32.3 LIRPF), los gastos de difícil justificación del 5 % y la deducción de suministros de la vivienda.
- **Sube el coste de estructura**: la asesoría pasa de 70 a 160 €/mes (contabilidad, IS y cuentas anuales), y hay 600 € de gastos de constitución.

Ambos socios cotizan como **autónomos societarios**, que sí pueden acogerse a la tarifa plana de 80 €/mes el primer año.

### 3.3 Reparto de funciones y retribución

| | Función | Líquido Año 1 | RETA Año 1 |
|---|---|---|---|
| **Socia 1 — María** | Producción y dirección técnica, dedicación completa | 15.600 € | 960 € |
| **Socio 2 — Wilmer** | Dirección comercial: prospección, visita, cierre y red de prescriptores | 12.000 € | 960 € |
| | **Total** | **27.600 €** | **1.920 €** |

Con la retención del 15 % que la sociedad practica sobre la retribución de socios, el coste bruto para la empresa es de **34.729 €**, el 72 % de toda la estructura.

Wilmer se lleva menos que María en el Año 1 porque toda la producción —y por tanto toda la capacidad de facturar— recae sobre ella; la retribución se revisa al alza en el Año 3, cuando ambas están deliberadamente por debajo de mercado.

**Esto además arregla la debilidad número uno del plan original.** En el DAFO original se leía "poco tiempo libre" y en mi primera revisión lo formulé como que la producción y la venta competían por las mismas horas de una sola persona. Con un socio dedicado a vender desde el mes uno, esa debilidad desaparece — y aparece otra, que es honesta y está recogida: ahora el cuello de botella es la **entrega**, no la venta.

### 3.4 Servicios y precios

| # | Servicio | Original | Adaptado 2026 | Coste unit. | Margen |
|---|---|---|---|---|---|
| 1 | Web esencial | 800 € | **1.200 €** | 150 € | 87,5 % |
| 2 | Web profesional / e-commerce | 3.500 € | **3.500 €** | 600 € | 82,9 % |
| 3 | Identidad visual y diseño gráfico | 950 € | **950 €** | 60 € | 93,7 % |
| 4 | ~~Ilustración (50 €)~~ → **Mantenimiento gestionado** | — | **60 €/mes** | 180 €/año | 75,0 % |
| 5 | *(línea nueva)* **SEO local y Google Business** | — | **250 €/mes** | 480 €/año | 84,0 % |

**Margen bruto medio ponderado: 85,16 %** (el original declaraba 87,5 %, pero era el margen de un único producto porque el mix era 100 % web básica).

La web esencial sube de 800 € a 1.200 € deliberadamente: a 800 € se compite de frente contra plataformas de IA, y esa batalla está perdida.

### 3.5 Ingreso recurrente

| | Año 1 | Año 2 | Año 3 |
|---|---|---|---|
| Peso del ingreso recurrente | **27,5 %** | 31 % (objetivo) | 35 % (objetivo) |

Es la diferencia entre un freelance por proyectos y un negocio. Estaba prometido en el Canvas del original y no existía en las cuentas.

### 3.6 Segmentos de cliente

Se sustituyen los tres segmentos genéricos del original por cinco del Bierzo, con estimación y fuente declarada:

| Segmento | Estimación | Fuente / advertencia |
|---|---|---|
| Pymes y micropymes de Ponferrada y El Bierzo | ~6.400 | Directorios de empresas (Iberinform / einforma). **Verificar contra DIRCE-INE** |
| Autónomos y profesionales del Bierzo | ~9.300 | **Estimación propia**: 34.349 autónomos RETA en la provincia de León (abr-2026) × 27 % de peso poblacional comarcal |
| Bodegas DO Bierzo y enoturismo | ~70 | Consejo Regulador DO Bierzo (orden de magnitud). **Confirmar en crdobierzo.es** |
| Alojamiento y hostelería del Camino de Santiago | ~260 | **Estimación propia** sobre registro de alojamientos de la Junta de CyL. **Verificar** |
| Agencias, imprentas y gestorías (prescriptores) | ~60 | Directorio provincial |

Los dos segmentos nuevos —**bodegas de la DO Bierzo** y **alojamiento del Camino**— son la adaptación específica a Ponferrada, con ticket medio superior a la media local.

**Las cifras marcadas como estimación propia son mías, derivadas de datos provinciales, no censos comarcales oficiales.** Están señaladas como tales dentro del propio Excel, en la columna de fuentes.

### 3.7 Resultado del modelo

| Magnitud | Original | Adaptado |
|---|---|---|
| Ventas Año 1 | 52.172,68 € | **56.841 €** |
| Ventas Año 2 | 65.215,86 € | **73.893 €** (+30 %) |
| Ventas Año 3 | 84.780,61 € | **88.672 €** (+20 %) |
| Retribución a promotores (Año 1) | 18.000 € (una persona) | **27.600 € (dos socios)** |
| Beneficio neto Año 1 | 17.312,50 € | **0 €** (por diseño: es el equilibrio) |
| Beneficio neto Año 2 | 25.897,72 € | **3.686 €** |
| Beneficio neto Año 3 | 36.724,89 € | **11.388 €** |
| Tesorería inicial | −570,50 € | **+4.192 €** |

Los beneficios netos del original no son comparables con los de ahora: allí el "beneficio" era el dinero del que la promotora tenía que sacar su propio sueldo, mientras que aquí los dos sueldos ya están pagados y descontados antes de llegar al beneficio.

El crecimiento del **30 % en el Año 2** es superior al 22 % que proponía mi primera versión, y tiene una razón concreta: el Año 1 carga con la rampa desde cero (la cartera recurrente se construye a lo largo del ejercicio), mientras que el Año 2 arranca con esa cartera ya instalada y con un año completo de actividad comercial de Wilmer.

**La validación cruzada que el plan original no tenía.** La plantilla despeja las ventas desde la estructura de costes. Para comprobar que esa cifra es alcanzable, se ha construido aparte la previsión ascendente que faltaba:

| Servicio | Precio | Unidades Año 1 | Ingreso |
|---|---|---|---|
| Web esencial | 1.200 € | 14 | 16.800 € |
| Web profesional / e-commerce | 3.500 € | 4 | 14.000 € |
| Identidad visual y diseño gráfico | 950 € | 11 | 10.450 € |
| Mantenimiento gestionado | 60 €/mes | 140 meses-cliente | 8.400 € |
| SEO local | 250 €/mes | 29 meses-cliente | 7.250 € |
| **Total** | | | **56.900 €** |

**56.900 € (ascendente) frente a 56.841 € (modelo): diferencia del 0,10 %.** El plan es internamente coherente.

En carga de trabajo son **29 proyectos al año, unos 2,4 al mes**, toda producida por María, con subcontratación a freelances ya presupuestada dentro del coste de ventas.

### 3.8 El riesgo número uno: el salto de cuota del mes 13

Es el hallazgo más importante de esta versión y conviene no perderlo de vista:

| | Año 1 | Año 2 |
|---|---|---|
| RETA de los dos socios | **1.920 €** (tarifa plana, 80 €/mes cada uno) | **10.732 €** (base mínima societaria 1.424 €/mes × 31,4 %) |

**Son 8.812 € más de coste fijo a partir del mes 13**, sin que nadie haya subido de sueldo. En un negocio que factura 57.000 € es el 15 % de la facturación del Año 1.

La plantilla no lo veía: solo inflacionaba la cuota del Año 1 con el IPC, lo que habría infravalorado el coste de los Años 2 y 3 en unos 4.400 € por socio y año. **He sustituido esas cuatro fórmulas por la cuota real** (celdas `D148`, `E148`, `D154` y `E154` de la hoja `CUÁNTO Y CUÁNDO`), y por eso el Año 2 sale con un beneficio modesto de 3.686 € en lugar de una cifra cómoda pero falsa.

La mitigación está en los objetivos del Año 2: subir la web esencial de 1.200 a 1.400 € y llegar al ejercicio con la cartera recurrente ya instalada.

*Matiz*: la tarifa plana puede prorrogarse otros 12 meses si el rendimiento neto no supera el SMI (1.184 €/mes). Wilmer, con 1.000 €/mes, podría cumplirlo; María, con 1.300 €/mes, no. El plan asume de forma prudente que **ninguno** la prorroga.

---

## 4. Lo que hay que decidir o verificar antes de usar el plan

1. **Firmar un pacto de socios antes de constituir la sociedad.** Es la recomendación más importante de todo el documento. Reparto de participaciones, dedicación exigible a cada uno, régimen de mayorías, política de retribución y dividendos, y cláusulas de salida. Dos socios al 50 % sin pacto es la receta clásica del bloqueo societario.
2. **El cargo de administrador debe constar como RETRIBUIDO en los estatutos**, con el sistema de retribución determinado. Si los estatutos dicen que es gratuito, Hacienda rechaza la deducción del gasto — es un error frecuente y caro.
3. **Confirmar que Wilmer puede acogerse a la tarifa plana**: exige no haber estado de alta en el RETA en los 2 años anteriores (3 si ya la disfrutó).
4. **Verificar el requisito del tipo reducido del 15 % en el IS**: la actividad no puede haber sido ejercida durante el año anterior a la constitución por un socio con participación superior al 50 %.
5. **Epígrafe de IAE**: con sociedad, el alta va necesariamente en Sección 1ª (empresarial). Confirmar los epígrafes concretos con la asesoría antes del modelo 036.
6. **Verificar las cuatro cifras de mercado** marcadas como estimación propia (sección 3.6).
7. **Capital social**: el plan prevé 10.000 € desembolsados. El mínimo legal es 1 € desde la Ley Crea y Crece, pero por debajo de 3.000 € hay que destinar el 20 % del beneficio a reserva legal. Si preferís aportar menos, la tesorería inicial baja en la misma proporción.
8. **Solicitar las subvenciones**, que el plan deliberadamente **no computa** — la viabilidad no depende de ellas. Ahora son **dos** los socios que pueden ser beneficiarios como autónomos de nueva alta:
   - Ayuntamiento de Ponferrada, consolidación del trabajo autónomo, convocatoria 2026 (plazo del 5/03/2026 al 3/09/2026, BOCYL nº 43 de 4/03/2026).
   - CONSOLIDACYL, Junta de Castilla y León.
   - Adhesión como **Agente Digitalizador** para captar bonos de Kit Digital aún pendientes de ejecutar (Orden TDF/39/2026 amplió plazos).

### Alternativa más barata, si la S.L. se hace cuesta arriba

Si los 600 € de constitución y los 160 €/mes de asesoría pesan demasiado al principio, la **Sociedad Civil** admite socios igualmente y tributa también por el Impuesto sobre Sociedades (desde 2016, si tiene objeto mercantil), sin escritura notarial obligatoria ni depósito de cuentas. La contrapartida es seria: **responsabilidad ilimitada** de ambos socios con su patrimonio personal. En un negocio que gestiona webs, datos y sistemas de terceros, la responsabilidad limitada de la S.L. vale lo que cuesta. En el libro, ambas formas se seleccionan con la misma opción de la lista desplegable y los números no cambian.

---

## 5. Cambios sobre la plantilla original

El libro conserva su estructura y sus 1.732 fórmulas. Se han escrito únicamente celdas de entrada, con **9 excepciones deliberadas**:

| Celda | Fórmula original | Sustituida por | Motivo |
|---|---|---|---|
| `PORTADA!I26` | `=TODAY()` | 31/07/2026 | Un plan de negocio lleva la fecha en que se hizo, no la de apertura del archivo |
| `CUÁNTO!E42`, `A68`, `K121`, `J178` | textos "CON/SIN IGIC" | "CON/SIN IVA" | Ponferrada está en territorio común |
| `CUÁNTO!D148`, `E148`, `D154`, `E154` | `=C148*(1+IPC)` | 5.366 € y 5.527 € | La plantilla solo inflacionaba la tarifa plana; la cuota real de autónomo societario a partir del Año 2 es muy superior (sección 3.8) |

**Nota sobre el recálculo:** el libro se entrega con el recálculo completo activado al abrir, así que Excel recalcula el modelo entero en cuanto lo abras. No fue posible recalcularlo aquí con LibreOffice (se bloquea también con el archivo original, por las cadenas de fórmulas entre hojas), así que las cifras de este documento se han verificado replicando las fórmulas de la plantilla de forma independiente.

---

## 6. Nota sobre el encaje con FARO

Este repositorio contiene la documentación de **FARO** (automatización con IA para clínicas dentales). El plan adaptado aquí **no** es FARO: es la continuación del negocio de diseño web y gráfico del documento original, actualizado a Ponferrada 2026.

Ambos son compatibles: el negocio de diseño web genera caja e independencia desde el mes uno con un modelo conocido, mientras FARO —de ticket recurrente más alto pero ciclo de validación más largo— se construye en paralelo. Las líneas recurrentes que se han introducido aquí (mantenimiento, SEO local) son además el mismo músculo comercial que necesita FARO: vender una cuota mensual, no un proyecto. Y con Wilmer dedicado a la función comercial, ese músculo se entrena antes.

---

## Fuentes

- [Cuota de autónomos 2026: tramos y tarifa plana — Infoautónomos](https://www.infoautonomos.com/seguridad-social/cuota-de-autonomos-cuanto-se-paga/)
- [Cuota del autónomo societario 2026 — Infoautónomos](https://www.infoautonomos.com/seguridad-social/cuota-autonomos-societarios/)
- [Tarifa plana para autónomos societarios — Infoautónomos](https://www.infoautonomos.com/seguridad-social/tarifa-plana-autonomos-societarios/)
- [Tarifa plana de 80 euros para autónomos en 2026 — Infoautónomos](https://www.infoautonomos.com/seguridad-social/tarifa-plana-autonomos/)
- [Cuota autónomos 2026: novedades y cambios — Wolters Kluwer](https://www.wolterskluwer.com/es-es/expert-insights/cuotas-autonomos-2026)
- [Las entidades de nueva creación: tipo reducido del 15 % en el IS — Cuatrecasas](https://www.cuatrecasas.com/es/spain/fiscalidad/art/is-reducido-entidades-nueva-creacion)
- [Tipos de gravamen del Impuesto sobre Sociedades 2026](https://interforoabogados.com/contenido-legal/tipos-de-gravamen-en-el-impuesto-de-sociedades-2026-guia-tecnica-y-practica/)
- [Crear una SL en España 2026: pasos, costes reales y errores frecuentes](https://guiajuridica.es/crear-sl-espana/)
- [Gastos de constitución de una SL (2026) — Quipu](https://getquipu.com/blog/cuanto-cuesta-crear-sl/)
- [El Banco de España eleva la inflación prevista para 2026 al 3,6 %](https://www.bolsamania.com/noticias/economia/banco-espana-revisa-alza-previsiones-pib-crecimiento-inflacion-ipc-2026--21415760.html)
- [Digitalización de pymes en España 2026: estadísticas por sector y tamaño](https://desarrollosoftware.es/digitalizacion-pymes-espana-datos/)
- [Informe de digitalización de las pymes — ONTSI](https://www.ontsi.es/sites/ontsi/files/2024-08/informe_digitalizacion_pymes.pdf)
- [Kit Digital 2026: Orden TDF/39/2026 — Oficina Acelera Pyme](https://acelerapyme-aecim.com/ayuda-digitalizacion/kit-digital-2026-ayudas-para-la-digitalizacion-de-pymes-y-autonomos-orden-tdf-39-2026-modificacion-de-bases-reguladoras/)
- [Subvenciones 2026 para la consolidación del trabajo autónomo — Ayuntamiento de Ponferrada](https://www.ponferrada.org/en/temas/ayudas-subvenciones-concursos-premios/subvenciones-ano-2026-destinadas-consolidacion-trabajo-auto)
- [CONSOLIDACYL — Junta de Castilla y León](https://www.tramitacastillayleon.jcyl.es/web/jcyl/AdministracionElectronica/es/Plantilla100Detalle/1251181050732/Ayuda012/1285613925450/Propuesta)
- [Ponferrada crece en población por tercer año consecutivo: 63.444 habitantes — Diario de León](https://www.diariodeleon.es/bierzo/260127/2073695/ponferrada-crece-habitantes-tercer-ano-consecutivo-situa-63-444-habitantes.html)
- [La afiliación a la Seguridad Social en León: 34.349 autónomos (abril 2026) — Ahora León](https://ahoraleon.com/la-afiliacion-a-la-seguridad-social-en-leon-sube-en-abril-hasta-los-171-232-trabajadores-26/)
- [Consejo Regulador de la DO Bierzo — datos](http://www.crdobierzo.es/es/denominacion-de-origen/datos/)
- [Listado de empresas de Ponferrada — Iberinform](https://www.iberinform.es/informacion-de-empresas/leon/ponferrada)
