# León: Tracker de Evidencia Acumulativa

## Propósito

Registro centralizado y reproducible de cada observación de campo. No es opinión, es hechos.

**Cada fila = Una observación verificable de un patrón en una empresa.**

---

## Instrucciones de uso

### Antes de llenar

1. **Lee el Playbook** (01-playbook-fuentes.md)
2. **Entiende el patrón** (02-sistema-patrones.md)
3. **Identifica la fuente específica**: ¿De dónde sacas el dato?
4. **Verifica la observación**: ¿Es un hecho o una interpretación?

### Cómo registrar

**HECHO**: "Google Review respondida 48 horas después, 15 de diciembre 2025"

**INTERPRETACIÓN** (❌ evitar): "La empresa responde lentamente"

---

## Archivo CSV: tracker-observaciones.csv

Copiar y rellenar. Se puede importar en Google Sheets, Excel, o herramienta de análisis.

```csv
fecha_observacion,empresa_nombre,sector,municipio,tamaño_aprox,patron_id,fuente,indicador_especifico,resultado,notas,url_fuente,validacion_adicional,investigador,fecha_validacion
2025-01-15,Restaurante El Camino,Hostelería,León,3-5 empleados,P-001,Google Reviews,Responde todas reseñas personalmente,Sí,"Últimas 10 reseñas respondidas por 'propietario'. Tono personal, firma con nombre.",https://maps.google.com/?cid=xxx,Revisor: 3 reseñas confirmadas,María,2025-01-16
2025-01-15,Taller Mecánico García,Oficios,Villamanín,2-3 empleados,P-002,Google Reviews,Mención de "espera" o "saturado",Sí,"Dos clientes mencionan: 'estaban saturados, tardamos una semana en arreglarlo'",https://maps.google.com/?cid=yyy,Una mención es suficiente para investigar más,Juan,
2025-01-16,Panadería López,Comercio,León,1-2 empleados,P-004,Web de empresa,Última actualización >3 años,Sí,"Footer dice 'última actualización 2021'. Web es HTML estático, sin CMS.",https://www.panaderialopez.es,No tiene Google Analytics público,Ana,2025-01-17
2025-01-16,Boutique María,Comercio,Astorga,1-2 empleados,P-003,LinkedIn,Gerente >60 años + >15 años en puesto,Sí,"LinkedIn: María García Ruiz, 67 años, 'Propietaria desde 2007'. 18 años en puesto.",https://linkedin.com/in/mariagarcia,Perfil público. Confirmar con Registro Mercantil.,Pedro,2025-01-17
2025-01-17,Bar La Taberna,Hostelería,León,2-3 empleados,P-007,Facebook,Mismos comentadores recurrentes,Sí,"Últimas 20 posts: 12 personas diferentes cometan 50+ veces combinadas. Círculo cerrado.",https://www.facebook.com/lataberna,Patrón clarísimo. Mismo grupo social.,Carlos,2025-01-18
2025-01-17,Clínica Dental García,Servicios,León,5-7 empleados,P-002,Google Maps,Mención de 'difícil conseguir cita',Sí,"3 reseñas en últimos 30 días: 'tuve que esperar 3 meses', 'no hay citas disponibles'",https://maps.google.com/?cid=zzz,Indicador de saturación. Investigar calendario online.,Laura,2025-01-18
```

---

## Estructura de datos (para análisis)

```json
{
  "observacion_id": "OBS-2025-0001",
  "fecha_observacion": "2025-01-15",
  "empresa": {
    "nombre": "Restaurante El Camino",
    "sector": "Hostelería",
    "municipio": "León",
    "tamaño_aproximado": "3-5 empleados",
    "ubicacion_url": "https://maps.google.com/?cid=xxx"
  },
  "patron": {
    "id": "P-001",
    "nombre": "Sobrecarga operativa del propietario"
  },
  "observacion": {
    "fuente": "Google Reviews",
    "tipo_fuente": "reseñas_online",
    "indicador": "Propietario responde todas las reseñas personalmente",
    "dato_especifico": "Últimas 10 reseñas (desde dic 2024): 100% respondidas por 'propietario'. Firma con nombre personal. Tono informal.",
    "resultado": "confirmado",
    "confianza": "alta"
  },
  "validacion": {
    "url_fuente": "https://maps.google.com/reviews/...",
    "fecha_validacion": "2025-01-16",
    "revisor": "María",
    "notas_validacion": "Revisé 3 respuestas personalmente. Timestamps: 15 dic 14:23, 16 dic 22:15, 17 dic 08:45. Respuestas fuera de horario laboral (22:15) = indicador de sobrecarga."
  },
  "contexto": {
    "investigador": "María",
    "hipotesis_previa": "Propietario sobrecargado",
    "confirmacion_o_sorpresa": "Confirmado. Además, responde a horas inusuales (22:15) = está respondiendo en su tiempo libre.",
    "proximos_pasos": "Contactar empresa para entrevista de comportamiento. Preguntar: '¿Cuánto tiempo dedicas a responder reseñas?'"
  }
}
```

---

## Checklist de calidad para cada observación

Antes de registrar, verifica:

- ✅ **¿Es un hecho, no una interpretación?**
  - BIEN: "Respondió reseña en 48 horas"
  - MAL: "Responden lentamente"

- ✅ **¿Puedo verificarlo en 5 minutos?**
  - BIEN: Ir a Google Reviews y contar respuestas
  - MAL: "Probablemente estén estresados"

- ✅ **¿Está datado?**
  - BIEN: "15 de diciembre 2025"
  - MAL: "Hace poco"

- ✅ **¿Hay URL o referencia?**
  - BIEN: Link directo a reseña, post, o perfil
  - MAL: "Vi algo en Facebook"

- ✅ **¿Es reproducible por otro investigador?**
  - BIEN: "En Google Reviews, últimas 10 reseñas de Restaurante X, todas respondidas por propietario (nombre visible)"
  - MAL: "El dueño está todo el día respondiendo"

---

## Patrones de confirmación

### Cuándo puedo decir "Patrón confirmado"

Un patrón pasa de "En investigación" a "Confirmado" cuando:

1. **Número de casos**: Mínimo 15 observaciones en el mismo patrón
2. **Porcentaje**: >70% de los casos muestran resultado "Sí"
3. **Sectores**: Patrón aparece en ≥2 sectores diferentes
4. **Fuentes múltiples**: Evidencia viene de ≥2 tipos de fuentes diferentes
5. **Regularidad**: El patrón se repite de forma consistente

**Ejemplo**:
- 22 restaurantes observados
- 18 de 22 (81%) muestran indicador P-001
- Evidencia de Google Reviews + LinkedIn + Facebook
- Patrón aparece también en peluquerías y clínicas
- **RESULTADO**: Patrón P-001 Confirmado en León

### Cuándo debo "Rechazar" un patrón

Un patrón se rechaza cuando:

1. He revisado 15+ casos
2. <40% muestran el indicador
3. Las excepciones no tienen patrón lógico
4. No hay relación con sectores específicos

**Ejemplo**:
- 18 pequeños comercios visitados
- Solo 5 de 18 (28%) tienen web obsoleta
- Las otras 13 usan Shopify, Wix, o similar
- **RESULTADO**: Patrón P-004 Rechazado (digitalización es más común de lo esperado)

---

## Análisis de contradicciones

Cuando encuentres casos que **NO encajan** en el patrón esperado, regístralos como una observación separada bajo "Contradicciones".

**Ejemplo de contradicción valiosa**:

```json
{
  "observacion_id": "CONT-2025-0001",
  "tipo": "Contradicción",
  "patrón_esperado": "P-003 (Envejecimiento sin sucesión)",
  "empresa": "Carpintería García",
  "hallazgo": "Propietario 68 años, 25 años en negocio. Pero invierte 2.000€/mes en formación online en software CAD. Hijo (28 años) trabaja como técnico en plantilla.",
  "interpretacion": "No es envejecimiento pasivo. Es preparación activa de sucesión. Invierte en mejorar capacidad técnica para heredar.",
  "implicacion": "Refina patrón P-003: no es 'edad', es 'preparación de sucesión'. Algunos propietarios viejos SÍ invierten si tienen heredero."
}
```

---

## Plantilla vacía (copiar y rellenar)

| Fecha | Empresa | Sector | Municipio | Tamaño | Patrón | Fuente | Indicador | Resultado | Notas | URL | Revisor | Validado |
|-------|---------|--------|-----------|--------|--------|--------|-----------|-----------|-------|-----|---------|----------|
| YYYY-MM-DD | Nombre | | | | P-### | | | Sí/No | | | | YYYY-MM-DD |
| | | | | | | | | | | | | |

---

## Herramientas recomendadas

### Opción 1: Google Sheets
- Copiar CSV aquí
- Filtros automáticos
- Gráficos de confirmación (% por patrón)
- Compartible con equipo

### Opción 2: Airtable
- Crear tabla con campos del CSV
- Agregar campos de "Validación" automáticos
- Vincular a 02-sistema-patrones.md
- Visualizar patrones confirmados vs. en investigación

### Opción 3: Notion
- Database con propiedades
- Relations a empresa, patrón, fuente
- Timeline de observaciones por patrón
- Análisis cualitativo en bloques de texto

### Opción 4: Script Python (para análisis avanzado)
```python
import pandas as pd

# Cargar
obs = pd.read_csv('tracker-observaciones.csv')

# Análisis por patrón
patron_stats = obs.groupby('patron_id').agg({
    'resultado': lambda x: (x == 'Sí').sum() / len(x) * 100,
    'empresa_nombre': 'count'
}).rename(columns={'resultado': 'confirmacion_%', 'empresa_nombre': 'n_casos'})

# Patrón listo para confirmar (>70% + >15 casos)
confirmados = patron_stats[(patron_stats['confirmacion_%'] > 70) & (patron_stats['n_casos'] > 15)]

print(confirmados)
```

---

## Workflow semanal recomendado

**Lunes**: Identificar 5-10 empresas nuevas del patrón objetivo

**Martes-Jueves**: Investigar usando Playbook. 1-2 empresas/día

**Viernes**: Registrar observaciones en tracker. Validar calidad.

**Cada 4 semanas**: Analizar si patrón alcanzó umbral de confirmación.

---

## Nota final

**Este tracker es tu activo más valioso.**

No es un ejercicio académico. Es la base de evidencia que:
- Demuestra si existe un patrón real
- Valida si hay negocio
- Muestra dónde ganar dinero
- Convierte observaciones en decisiones

Cada fila es una oportunidad para aprender algo que otros (competidores, inversores, consultores) no saben aún.
