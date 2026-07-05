# Análisis Financiero — EXP-002-clinicas-valencia

## Aviso de alcance
Este análisis se basa en un dataset de 9 candidatos dudosos (ver `03-verificacion.md`), ampliado de los 5 iniciales tras una segunda ronda de búsqueda, pero todavía no en un dataset verificado de 15-20+ clínicas. Las cifras de mercado son, por tanto, una **estimación de orden de magnitud para decidir si vale la pena verificar e invertir tiempo en Valencia como zona**, no una proyección fiable de facturación. Se marca explícitamente cada cifra que es estimación propia.

## Tamaño de mercado direccionable
- Clínicas de Valencia ciudad con señal ICP parcial o fuerte encontradas en cuatro búsquedas: 9 de 13 nombres distintos localizados (se descartaron 2 por tamaño/franquicia, se fusionó 1 duplicado).
- Fuentes agregadoras (DentalQuality, Top Doctors, DocDental, Doctoralia) listan entre 13 y 20 clínicas "destacadas" en Valencia ciudad — sugiere que un barrido manual completo (Google Maps + Doctoralia, ver `02-investigacion/queries.md`) probablemente produzca 15-30 candidatos dentro del rango ICP (estimación, no verificado). Dos rondas de búsqueda web ya cubren cerca de la mitad de ese rango, lo que hace razonable esperar alcanzar 15-20 con un barrido manual adicional en Google Maps/Doctoralia.
- **SOM realista para este experimento:** de un universo estimado de 20-30 clínicas ICP en Valencia ciudad, y con la tasa de cierre histórica de FARO todavía sin datos propios (primer experimento del sistema), se usa como referencia el criterio de éxito ya fijado en `00-objetivo.md`: 3 llamadas agendadas sobre 20-30 contactos.

## Escenarios de facturación
Asumiendo que las llamadas agendadas convierten a cierre con la tasa de embudo típica de venta consultiva de ciclo corto descrita en `FARO_PROCESO_COMERCIAL.md` (sin dato propio de FARO todavía — estimación conservadora del 30-50% de llamada→cierre):

| Escenario | Llamadas agendadas | Cierres estimados | Plan medio (estimación: mezcla START/GROW) | MRR generado | Facturación año 1 (MRR × 12 + setup) |
|---|---|---|---|---|---|
| Pesimista | 3 | 1 | 149€ (START) | 149€ | 149€×12 + 300€ = 2.088€ |
| Realista | 3 | 2 | ~224€ (media START/GROW) | 448€ | 448€×12 + 600€ = 5.976€ |
| Optimista | 5 (si el universo real es mayor al estimado) | 3 | 299€ (GROW) | 897€ | 897€×12 + 900€ = 11.664€ |

## Métricas económicas
- **CAC estimado (estimación):** ~15-25h de trabajo de prospección/verificación manual por cada 20-30 contactos (búsqueda, verificación, redacción, seguimiento en 4 puntos de contacto) + coste de oportunidad del tiempo de la fundadora (sin coste de herramientas de pago en Fase 1). No se incluye coste de anuncios porque el canal es outbound directo, no pago (`FARO_PROCESO_COMERCIAL.md` sección 2).
- **LTV estimado:** usando el plan medio realista (224€/mes) y una permanencia media conservadora de 12 meses (sin permanencia forzada, `FARO_MODELO_NEGOCIO.md`): LTV ≈ 2.688€ (estimación, sin dato de churn propio todavía).
- **Payback period:** con el fee de implementación de 300€ cubriendo gran parte del coste de onboarding, el payback en el escenario realista se alcanza en el primer mes de suscripción cobrada (300€ setup + 224€ mes 1 ≈ cubre un CAC bajo, dado que no hay gasto en ads).
- **Margen bruto objetivo:** se mantiene la referencia de `FARO_MODELO_NEGOCIO.md` 1.9 (márgenes altos por cliente individual gracias a coste variable bajo de infraestructura); este experimento no aporta datos nuevos de margen porque no involucra clientes activos todavía, solo prospección.

## Supuestos críticos
1. El universo real de clínicas ICP en Valencia ciudad es de 20-30 (estimación a partir de agregadores del sector, no verificado con barrido manual completo — fuente: `02-investigacion/dataset.md`).
2. La tasa de conversión llamada→cierre (30-50%) es una estimación de referencia sectorial, no un dato propio de FARO — este es precisamente el dato que este experimento debe generar.
3. El plan medio de cierre (mezcla START/GROW) asume que clínicas de 4-10 gabinetes con volumen medio-alto de WhatsApp tienden a necesitar más de una automatización desde el inicio — no verificado todavía.

## Recomendación
**GO CONDICIONADO.** El tamaño de mercado estimado (20-30 candidatos ICP en Valencia ciudad) es suficiente para justificar el tiempo de un experimento de 3 semanas, pero la recomendación es condicionada a completar primero la verificación manual pendiente en `03-verificacion.md` (ninguna fila del dataset actual tiene contacto confirmado) — sin eso, el Redactor y el Preparador están trabajando sobre un universo no confirmado.
