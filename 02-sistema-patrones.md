# León: Sistema de Patrones Observables

## Propósito

Catálogo centralizado de patrones confirmados y en investigación. Cada patrón:
- Tiene definición precisa (no ambigua)
- Especifica dónde aparece (sectores)
- Acumula evidencia en el tiempo
- Registra umbral de confirmación
- Vincula a implicaciones de comportamiento

---

## Template de Patrón

```
## Patrón P-XXX: [Nombre descriptivo]

### Definición operativa
[Descripción precisa, sin interpretación]

### Sectores donde esperamos encontrarlo
- Sector 1: razón
- Sector 2: razón

### Hipótesis de comportamiento
[¿Qué comportamiento de compra sugiere este patrón?]

### Fuentes de evidencia (ver Playbook)
- Fuente 1: Indicador
- Fuente 2: Indicador

### Umbral de confirmación
X de Y casos = regularidad confirmada

### Estado actual
[ ] No investigado
[ ] En investigación (Y empresas revisadas)
[ ] Confirmado en X casos (fecha)
[ ] Rechazado (razón)

### Evidencia acumulada
| Empresa | Sector | Ubicación | Indicador | Fecha | Notas |
|---------|--------|-----------|-----------|-------|-------|

### Contradicciones encontradas
[Empresas que NO encajan en el patrón pero parecen que deberían]

### Implicaciones para producto/servicio
[Si este patrón es real y repetible, ¿qué sugiere que necesita el empresario?]

### Última revisión
Fecha: YYYY-MM-DD
Revisor: 
```

---

## Patrones en catálogo

---

## P-001: Sobrecarga operativa del propietario (Responde todo personalmente)

### Definición operativa
El propietario/gerente responde >80% de interacciones con clientes (reseñas, mensajes, llamadas, emails) directamente, lo que indica que no hay delegación de atención al cliente.

### Sectores donde esperamos encontrarlo
- **Hostelería**: Pequeños hoteles, restaurantes, cafeterías (el dueño atiende mesas y responde reseñas)
- **Servicios personales**: Peluquerías, estéticas, clínicas de salud (el profesional atiende y factura)
- **Comercio minorista**: Tiendas pequeñas, panaderías (el dueño está en caja)
- **Oficios**: Carpinterías, electricistas, fontaneros (el maestro hace el trabajo y gestiona clientes)
- **Educación**: Academias pequeñas (el director enseña y gestiona administrativo)

### Hipótesis de comportamiento
Si el propietario está sobrecargado:
1. **Falla en tiempo de respuesta**: No puede contestar mails al día siguiente.
2. **Calidad inconsistente**: Días buenos y malos según su estado.
3. **No crecimiento deliberado**: Rechaza clientes para no saturarse más.
4. **Decisiones emocionales**: Cierra antes porque está cansado, no por data.
5. **Busca alivio rápido**: Paga por algo que le ahorre horas específicas.

### Fuentes de evidencia
- Google Reviews: Velocidad y patrón de respuesta
- Facebook: Respuestas nocturnas (22:00+)
- LinkedIn: Actividad fuera de horario
- WhatsApp Business: Velocidad de respuesta
- Web: Presencia de formulario automático o chatbot

### Umbral de confirmación
**Confirmado si**: 15+ empresas del mismo sector (ej: hostelería) muestran indicador en >4 fuentes

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones esperadas
- Empresa pequeña pero con web moderna y formulario automático = probablemente delegó tareas administrativas
- Empresa con respuestas rápidas pero inconsistentes = podría haber personal que atiende pero gerente no confía

### Implicaciones para producto/servicio
Si confirmado: El propietario necesita liberar tiempo de tareas reactivas (atención cliente, gestión de consultas). Paga por:
- Gestor de reseñas automático
- Chatbot de respuestas frecuentes
- Asistente virtual para agenda
- Automatización de consultas WhatsApp

---

## P-002: Presión de tiempo (rechaza trabajo o alarga tiempos)

### Definición operativa
El negocio tiene indicadores de no poder aceptar más clientes: listas de espera, "agotado", dificultad para conseguir cita, respuestas lentas a consultas.

### Sectores donde esperamos encontrarlo
- **Restauración**: Reservas necesarias, colas, "no hay mesa"
- **Servicios de salud**: Tardan meses en dar cita
- **Servicios técnicos**: Esperan semanas para reparación
- **Educación**: Academias llenas, no aceptan alumnos nuevos
- **Comercio**: Agotado de stock

### Hipótesis de comportamiento
Si hay presión de tiempo (capacidad saturada):
1. **Pierde ingresos**: No puede aceptar clientes dispuestos a pagar.
2. **Baja calidad**: Prioriza rapidez, no perfección.
3. **Cliente insatisfecho**: Espera, se irrita, da reseña negativa.
4. **No automatiza**: Podría ganar dinero fácilmente pero no lo ve.
5. **Necesita sistemas**: Colas inteligentes, agenda automática, priorización.

### Fuentes de evidencia
- Google Reviews: Menciones de espera, "difícil conseguir cita"
- TripAdvisor/Booking: "Agotado", "sin mesas", "reserva necesaria"
- Calendarios online (si están públicos): Muestra disponibilidad baja
- WhatsApp: Respuestas lentas, "estamos saturados"

### Umbral de confirmación
**Confirmado si**: 10+ empresas muestran evidencia en >2 fuentes de que "no pueden aceptar más clientes"

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Negocio saturado con web o sistemas de cita obsoletos = probablemente pierde clientes potenciales
- Negocio saturado pero sin presencia online = probablemente pierde todavía más

### Implicaciones para producto/servicio
Si confirmado: El propietario necesita **sistemas de gestión de demanda** para convertir presión en ingresos:
- Sistema de citas online inteligente
- Gestión de lista de espera
- Priorización automática
- Overbooking controlado

---

## P-003: Envejecimiento sin sucesión

### Definición operativa
El propietario/gerente tiene >60 años, lleva >15 años en el puesto, y no hay evidencia de preparación de sucesión (no hay hijo/a en dirección, no hay plan formal, gerente joven en plantilla).

### Sectores donde esperamos encontrarlo
- **Comercio familiar**: Tiendas, bares, panaderías heredadas
- **Servicios tradicionales**: Taller mecánico del barrio, peluquería antigua
- **Agricultura/ganadería**: Explotaciones familiares
- **Hostelería**: Bares de toda la vida
- **Pequeña manufactura**: Carpinterías, fundiciones

### Hipótesis de comportamiento
Si hay envejecimiento sin sucesión:
1. **Sobrecarga emocional**: La empresa es su identidad, no quiere dejarla a desconocidos.
2. **No invierte en futuro**: ¿Para qué mejorar si voy a vender o cerrar?
3. **Busca sobrevivir, no crecer**: "Que me dure hasta la jubilación".
4. **Rechazo a cambios**: Nuevo software, nuevos procesos, nuevos mercados.
5. **Valor confuso**: Cuando llegue el momento, ¿cuánto vale? (Incertidumbre).

### Fuentes de evidencia
- LinkedIn: Edad del propietario, años en puesto
- Registro Mercantil: Cambios de administrador (o falta de)
- Google Maps: "Gerenciada por X desde 2004"
- InfoJobs: ¿Buscan "director" o "heredero"?
- Reseñas: "Viejos dueños, pero excelentes"

### Umbral de confirmación
**Confirmado si**: 12+ empresas familiares de León cumplen criterio de edad >60 años + >15 años en puesto + sin sucesión aparente

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones esperadas
- Propietario >60 años que invierte en modernización = está preparando sucesión o venta
- Propietario joven que no invierte = otro patrón (falta de recursos, mentalidad antigua heredada)

### Implicaciones para producto/servicio
Si confirmado: Este grupo **no compra para crecer**, pero SÍ compra para:
- Asegurar la venta/traspaso (documentación, valuación)
- Facilitar sucesión (protocolo familiar, manual operativo)
- Jubilarse tranquilo (automatización de lo rutinario)
- Evitar sorpresas (compliance, auditoría interna)

---

## P-004: Gestión manual (sistemas antiguos o inexistentes)

### Definición operativa
El negocio usa métodos manuales (papel, Excel, teléfono, WhatsApp) para tareas que podrían automatizarse (pedidos, facturas, agenda, nóminas).

### Sectores donde esperamos encontrarlo
- **Comercio minorista**: Todo pequeño comercio sin POS integrado
- **Hostelería**: Bares y restaurantes sin software de pedidos
- **Oficios**: Talleres sin software de gestión
- **Servicios**: Consultorios sin agenda digital
- **Agricultura**: Sin software de gestión de cultivos

### Hipótesis de comportamiento
Si usa métodos manuales:
1. **Errores frecuentes**: Facturas mal contabilizadas, pedidos duplicados.
2. **Atrasos**: No envía factura a tiempo, retraso en pagos.
3. **No tiene datos**: No sabe cuál fue su mejor mes de 2024.
4. **Miedo a software**: "Es muy complicado", "mejor lo conocido".
5. **Oportunidad evidente**: Gana más si automatiza, pero no lo ve.

### Fuentes de evidencia
- Web de empresa: Diseño obsoleto, última actualización >3 años
- Google Maps: Fotos de mala calidad, información desactualizada
- Redes sociales: Posts caseros, sin diseño, inconsistentes
- Búsqueda "negocio + software sector": ¿Aparece en software moderno?
- Reseñas: Menciones de "tardó mucho en facturar", "falta información"

### Umbral de confirmación
**Confirmado si**: 20+ pequeños comercios en León muestran >3 indicadores de gestión manual

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Pequeño comercio con web moderna pero sin software interno = solo invierten en "cara" externa, no en operaciones
- Comercio con software pero mal usado (datos desactualizados) = problema de entrenamiento, no de software

### Implicaciones para producto/servicio
Si confirmado: Necesitan **herramientas fáciles** que:
- No requieran capacitación larga
- Conviertan su trabajo manual en datos automáticos
- Sean baratas para empresas pequeñas
- Se integren con lo que ya usan (WhatsApp, Excel)

---

## P-005: Problemas de talento (rotación o no encuentra candidatos)

### Definición operativa
El negocio tiene dificultad para contratar o retener empleados: publica ofertas recurrentes, empleados duran <1 año, menciones de cambio de personal en reseñas.

### Sectores donde esperamos encontrarlo
- **Restauración**: Cocineros, camareros rotativo
- **Comercio**: Dependientes rotativos
- **Servicios técnicos**: Técnicos o aprendices que se van
- **Salud**: Personal sanitario itinerante
- **Educación**: Profesores temporales

### Hipótesis de comportamiento
Si no encuentra talento:
1. **Sobrecarga permanente**: El dueño hace más trabajo.
2. **Calidad baja**: Gente menos preparada durará.
3. **No puede crecer**: Capacidad limitada por personal.
4. **Busca terciarización**: Pagar a otros que hagan el trabajo.
5. **Frustración**: Ve cerrar competencia por mismo motivo.

### Fuentes de evidencia
- LinkedIn: Cambios de empleado, tenencia media <1 año
- InfoJobs/Indeed: Misma oferta publicada 2+ veces en 6 meses
- Google Reviews: Menciones de "cambió el personal"
- Expedientes públicos: Variación de empleados registrados

### Umbral de confirmación
**Confirmado si**: 10+ empresas en León muestran rotación recurrente o ofertas duplicadas

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Rotación alta pero salarios competitivos (visible en ofertas) = Problema de cultura, no de dinero
- Sin ofertas públicas pero reseñas mencionan cambio = Buscan candidatos offline (red personal)

### Implicaciones para producto/servicio
Si confirmado: Necesitan **soluciones para terciarización**:
- Outsourcing de tareas (contabilidad, logística, atención cliente)
- Freelancers vetados por sector
- Practicantes o pasantes de programas públicos

---

## P-006: Invisibilidad digital

### Definición operativa
El negocio no aparece (o aparece mal) en búsquedas relevantes de su sector. Presencia limitada en Google Maps, web obsoleta, sin redes sociales modernas.

### Sectores donde esperamos encontrarlo
- **Cualquiera en municipios <5.000 habitantes**
- **Comercios minoristas locales**
- **Servicios tradicionales sin demanda online**
- **Negocios B2B locales**

### Hipótesis de comportamiento
Si es invisible:
1. **Pierde clientes nuevos**: Solo clientes "de toda la vida".
2. **No compite online**: Los jóvenes buscan en Google.
3. **Presupuesto limitado**: "No tengo dinero para web".
4. **Escepticismo**: "Mi gente me conoce de siempre".
5. **Busca ayuda, no inversión**: Quiere algo fácil, barato, ya.

### Fuentes de evidencia
- Google Search: No aparece en primeros 10 resultados del sector+ciudad
- SEO Tools: Tráfico estimado <100 visitas/mes
- Kit Digital: No ha solicitado ayudas de digitalización
- Google Maps: Ficha incompleta, sin fotos, sin actualizaciones

### Umbral de confirmación
**Confirmado si**: 25+ pequeños negocios en León no aparecen en búsquedas de su sector

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Negocio invisible online pero con buenas reseñas offline = probablemente solo sirve a mercado local y cautivo
- Negocio visible pero con reseñas bajas = presencia no ayuda si calidad es baja

### Implicaciones para producto/servicio
Si confirmado: Necesitan **presencia digital mínima viable** que:
- Sea muy fácil de mantener
- No requiera actualización constante
- Se integre con Google Maps
- Genere confianza básica (reseñas, fotos)

---

## P-007: Clientes cautivos (mercado cerrado)

### Definición operativa
El negocio opera básicamente en un círculo de clientes conocidos, sin crecimiento de nuevos clientes. Indicadores: mismos comentadores en redes, clientes recurrentes con reseñas, poco crecimiento de seguidores.

### Sectores donde esperamos encontrarlo
- **Comercio local**: Tiendas de barrio
- **Servicios personales**: Peluquería, barbería del pueblo
- **Hostelería**: Bar de toda la vida
- **Oficios**: Electricista que atiende al mismo círculo

### Hipótesis de comportamiento
Si tiene mercado cautivo:
1. **No crece, pero es estable**: Clientes fieles, repetitivos.
2. **Presión baja**: No necesita marketing, no necesita web.
3. **Precios fijos mentalmente**: Los clientes pagan "lo de siempre".
4. **Cuando llega cliente nuevo, no sabe convertir**: "¿Otra cuenta de Facebook?"
5. **Busca estabilidad, no crecimiento**: El producto/servicio no importa.

### Fuentes de evidencia
- Google Reviews: Mismos clientes reseñando múltiples veces
- Facebook: Misma gente comentando en posts
- Oferta de precios: Más barato que competencia nacional sin razón
- Ausencia de búsquedas nuevas: Google Analytics (si disponible) muestra tráfico estancado

### Umbral de confirmación
**Confirmado si**: 15+ comercios locales de León muestran patrones de clientes recurrentes sin crecimiento de nuevos

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Mercado cautivo pero con web moderna = probablemente heredó presencia digital de alguien, no la usa
- Mercado cautivo pero busca nuevos clientes = cambio de estrategia, investigar por qué

### Implicaciones para producto/servicio
Si confirmado: Este grupo **no quiere crecer**, pero SÍ compra para:
- Optimizar lo que tiene (mejorar reseñas, fidelizar)
- Cobrar mejor (POS, facturación)
- Reducir trabajo manual repetitivo

---

## P-008: Burocracia asfixiante

### Definición operativa
El propietario pierde tiempo significativo en trámites, impuestos, registros, permisos, inspecciones. Indicadores: menciones de complejidad en reseñas, frecuencia de inspecciones, cambios regulatorios no anticipados.

### Sectores donde esperamos encontrarlo
- **Restauración**: Permisos de salud, libro de registro, normativa
- **Servicios de salud**: Cumplimiento HIPAA local, registro profesional
- **Construcción/oficios**: Permisos municipales, seguros
- **Educación**: Cumplimiento regulatorio, expedientes
- **Agricultura**: Subsidios, permisos ambientales

### Hipótesis de comportamiento
Si está ahogado en burocracia:
1. **Gasta 200+ horas/año** en gestión administrativa.
2. **Comete errores**: Multas, sanciones, correcciones.
3. **Miedo a inspecciones**: No duerme tranquilo.
4. **Delega a gestoría**: Paga pero sigue siendo responsable.
5. **Busca alivio**: Alguien que "se encargue de todo".

### Fuentes de evidencia
- Registros públicos: Sanciones, inspecciones recientes
- Google Reviews: Menciones de "trámites complejos", "no te dejan respirar"
- Webs de empresas similares: Anuncios de "gestoría online", "compliance fácil"
- LinkedIn: Propietario sigue cursos de "normativa", "compliance"

### Umbral de confirmación
**Confirmado si**: Evidencia en registros públicos de que pequeños negocios tienen sanciones recurrentes o inspecciones frecuentes

### Estado actual
**En investigación**: 0 empresas revisadas

### Evidencia acumulada
(Se rellenará durante investigación de campo)

### Contradicciones encontradas
- Negocio con buena gestión administrativa pero pequeño = probablemente contrató gestoría, costo es relevante pero lo asume
- Negocio con sanciones pero gerente joven = falta de capacitación, no sobrecarga

### Implicaciones para producto/servicio
Si confirmado: Necesitan **servicios de compliance automatizado**:
- Gestor de documentos
- Alertas de cambios normativos
- Checklist de inspecciones
- Integración con gestoría

---

## Protocolo de investigación

Para cada patrón:

1. **Selecciona el patrón** (P-001 a P-008)
2. **Identifica 5-10 empresas** del sector relevante en León
3. **Sigue el Playbook** para cada fuente de evidencia
4. **Registra en la tabla** de Evidencia Acumulada
5. **Cuando llegues a 15 casos** con resultado SÍ/NO, analiza:
   - ¿Qué % de confirmación?
   - ¿Hay contradicciones?
   - ¿Qué matices emergieron?
6. **Actualiza estado** del patrón (Confirmado/Rechazado/En revisión)

---

## Nota importante

**No busques que los datos confirmen tu teoría.**

**Busca dónde se rompe la teoría.**

Las contradicciones son las que crean oportunidades reales.
