# León: Playbook de Fuentes de Evidencia

## Principio operativo

Cada patrón búsqueda tiene fuentes específicas. No busques "información interesante". Busca la respuesta a una pregunta precisa.

**Regla**: Una fuente por pregunta. Una pregunta por patrón.

---

## Matriz: Patrón → Fuente → Método

### Patrón P-001: Sobrecarga operativa del propietario
**Pregunta**: ¿El dueño está respondiendo cosas que otro podría hacer?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Google Reviews | Responde todas las reseñas personalmente | Revisar últimos 6 meses. Contar respuestas del "propietario" vs otros. | >80% respuestas personales = patrón presente |
| Facebook | Respuestas a comentarios fuera de horario laboral (22:00+) | Buscar el negocio, leer comentarios recientes, fijar timestamps | 3+ respuestas nocturnas en 30 días = patrón presente |
| LinkedIn | El dueño está "siempre online" o comenta posts a horas extrañas | Revisar actividad del propietario (si perfil público) | Actividad en 7+ días no laborales/mes = patrón presente |
| Google Business | Cambios frecuentes en fotos, horarios, descripciones | Usar Wayback Machine o el historial de cambios de Maps | 4+ cambios en 90 días = patrón presente |

---

### Patrón P-002: Presión de tiempo (capacidad reducida)
**Pregunta**: ¿El negocio puede estar rechazando trabajo o alargando tiempos?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Google Reviews | Tiempo de respuesta a reseñas | Reseña publicada martes 14:00 → respuesta sábado 11:00 = 4 días | >3 días promedio en últimas 10 reseñas = patrón presente |
| Booking/TripAdvisor (hostelería) | "Fue difícil conseguir mesa" o "mucho tiempo de espera" | Buscar palabras clave: "espera", "agotado", "cita", "reserva" en últimas 20 reseñas | 4+ menciones en 50 reseñas = patrón presente |
| Web de empresa | Sección "Contacto" o "Citas online" | ¿Tiene formulario automático? ¿Teléfono? ¿Email? ¿Formulario con respuesta automática? | Sin formulario automático = riesgo de sobrecarga |
| WhatsApp Business | ¿Tiene WhatsApp activo? Velocidad de respuesta | Buscar número de negocio en WhatsApp, iniciar chat, medir respuesta | Respuesta <1h en horario laboral = gestión activa. >24h = riesgo de saturación |

---

### Patrón P-003: Envejecimiento sin sucesión
**Pregunta**: ¿La empresa es una persona, no una estructura?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| LinkedIn | Edad del gerente/propietario, tiempo en puesto | Buscar perfil del propietario. Calcular años en empresa. | Propietario >60 años + >15 años en puesto = patrón presente |
| Registro Mercantil | Cambios de administrador/gerente | Consultar expediente en Registro. Contar cambios de persona en 10 años. | 0 cambios en últimos 10 años = patrón presente |
| Google Maps | "Gerente desde hace X años" en ficha de empresa | Buscar negocio, leer sección "Acerca de" | Si dice "gerenciada por X desde 2004" sin cambios = patrón presente |
| Ofertas de empleo | ¿Buscan gerente/director? | Buscar en Indeed, LinkedIn, InfoJobs | Oferta de "director operativo" o "gerente" = señal de preparación de sucesión |

---

### Patrón P-004: Gestión manual (sistemas antiguos)
**Pregunta**: ¿El negocio usa papel, Excel y WhatsApp en lugar de software moderno?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Web de empresa | Diseño, funcionalidad, actualización | ¿Es responsive? ¿Tiene CMS moderno o es HTML años 90? ¿Última actualización? | Web sin actualización >3 años = patrón presente |
| Google Business | Fotos de mala calidad, sin estandarización | ¿Fotos profesionales o son selfis? ¿Se actualizan? | Fotos con años de antigüedad = patrón presente |
| Facebook/Instagram | Publicaciones inconsistentes, formato manual | ¿Posts bien diseñados o son capturas de pantalla? ¿Frecuencia? | <1 post/mes o diseño casero = patrón presente |
| Redes sociales | Links rotos, descripciones incompletas | Revisar todos los links en perfiles | 3+ links rotos = patrón presente |
| Búsqueda "negocio + software" | ¿Usan software conocido de su sector? | Buscar "taller mecánico software" + nombre empresa. ¿Aparece en software de gestión? | No aparece en software de sector = probablemente manual |

---

### Patrón P-005: Problemas de talento (no pueden contratar o retener)
**Pregunta**: ¿Hay rotación alta o no hay candidatos?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| LinkedIn | Cambios de empleado, tiempo promedio en puesto | Buscar empresa. Ver empleados actuales. Revisar histórico. Calcular tenencia media. | Tenencia media <1 año = rotación alta = patrón presente |
| InfoJobs/Indeed | Ofertas recurrentes | Buscar empresa. ¿Repite ofertas del mismo puesto en <6 meses? | Repetición = dificultad de retención o crecimiento = patrón presente |
| Google Reviews | "El personal cambió" o "antes había X persona" | Buscar menciones de cambio de staff en reseñas | 2+ menciones de cambios recientes = patrón presente |
| Expediente Laboral | Variación de número de empleados | Consultar datos en bases públicas (Agencia Tributaria, si disponibles) | Reducción de empleados en 2 años = patrón presente |

---

### Patrón P-006: Digitalización baja o nula
**Pregunta**: ¿El negocio está invisible en internet o apenas presente?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Google Search | Presencia en búsquedas del sector | Buscar "taller mecánico León" o "panadería Villarejo". ¿Aparece empresa en primeros 10 resultados? | No aparece = baja digitalización |
| SEO Tools (SEMrush, Ubersuggest free) | Tráfico estimado a web de empresa | Analizar dominio. Estimar tráfico orgánico. | <100 visitas/mes = prácticamente invisible |
| Kit Digital (España) | ¿Ha solicitado ayudas de digitalización? | Buscar en base de datos de organismos públicos o contactar dirección | No consta solicitud = baja prioridad digital |
| Facebook Ads Library | ¿Invierten en publicidad digital? | Buscar empresa en ads library. ¿Tiene anuncios activos? | Sin anuncios activos = sin presupuesto digital |

---

### Patrón P-007: Clientes antiguos (mercado local sin crecimiento)
**Pregunta**: ¿El negocio opera en un círculo cerrado de clientes de toda la vida?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Google Reviews | Reseñadores recurrentes | Leer reseñas. ¿Hay clientes que reseñan varias veces? ¿Mismo tono familiar? | 3+ clientes con 3+ reseñas cada uno = patrón presente |
| Facebook | Posts de clientes conocidos | ¿Comenta siempre la misma gente? ¿Parece red cerrada? | Mismo 10-15 comentadores en 20 posts = patrón presente |
| Rango de precios | Precios estancados comparado con competencia | Comparar precios con competencia nacional. ¿Empresa local es más barata o igual sin justificación? | 20%+ barato sin razón = clientes cautivos de precio |

---

### Patrón P-008: Burocracia y carga administrativa
**Pregunta**: ¿El negocio está ahogado en papeleos?

| Fuente | Indicador | Método | Validación |
|--------|-----------|--------|-----------|
| Historiales públicos | ¿Ha sufrido inspecciones o sanciones? | Búsqueda en registros públicos (Hacienda, Inspección de Trabajo) | Sanciones repetidas = probable mala gestión administrativa |
| Google Reviews | Menciones de "tramitación lenta" o "citas difíciles" | Buscar palabras: "burocracia", "cita", "tarda", "espera" | 2+ menciones = patrón presente |
| Webs de empresas similares | ¿Ofrecen gestión de trámites como servicio? | Si aparecen anuncios tipo "no te preocupes por la burocracia" = evidencia de que es un problema común | Presencia de estos servicios = validación indirecta |

---

## Instrucciones de uso

1. **Selecciona un patrón** (P-001 a P-008)
2. **Elige una empresa** en León (nombre, sector, tamaño aproximado)
3. **Sigue el método** para cada fuente
4. **Registra observación**: Sí/No para cada indicador
5. **Valida regularidad**: El patrón se confirma cuando se repite en X empresas similares

---

## Regla de oro

**No busques que la empresa se ajuste a tu teoría.**

**Busca señales de que algo está ocurriendo.**

Si no encuentras la señal después de revisar todas las fuentes, el patrón probablemente no existe en esa empresa. Registra "no confirmado" y pasa a la siguiente.

Si encuentras **contradicciones** (empresa vieja pero muy activa en redes, o empresa joven pero con web antigua), eso es oro. Investiga por qué.
