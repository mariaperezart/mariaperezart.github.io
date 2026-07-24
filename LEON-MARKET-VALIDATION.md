# León: Sistema de Validación de Mercado

**Propósito**: Convertir datos macro en evidencia observable y verificable sobre patrones de comportamiento empresarial en León.

**Método**: Observación sistemática → Acumulación de evidencia → Identificación de regularidades → Confirmación de patrones → Validación de comportamiento de pago.

---

## Estructura del sistema

### 📋 Documentos (léelos en este orden)

1. **00-inicio-rapido.md** (15 min)
   - Qué es, por qué importa, cómo empezar hoy
   - Para: Contexto inmediato antes de investigar

2. **01-playbook-fuentes.md** (30 min de lectura + uso durante investigación)
   - Dónde buscar para cada patrón
   - Qué indicadores específicos mirar
   - Cómo validar cada fuente
   - Para: Durante la investigación de campo

3. **02-sistema-patrones.md** (lectura de referencia)
   - 8 patrones definidos operativamente
   - Hipótesis de comportamiento para cada uno
   - Sectores donde esperamos encontrarlo
   - Umbral de confirmación
   - Para: Entender qué buscas y por qué

4. **03-tracker-evidencia.md** (uso operativo)
   - Cómo registrar observaciones con calidad
   - Templates (CSV, JSON)
   - Protocolo de análisis
   - Herramientas recomendadas
   - Para: Después de cada investigación

### 📊 Datos

- **tracker-observaciones.csv**
  - Registro centralizado de observaciones
  - Importable a Google Sheets, Excel, Airtable, Python
  - Estructura: 13 columnas, 1 fila = 1 observación

---

## Flujo operativo (semana 1)

```
Lunes
  ↓
  Leo 00-inicio-rapido.md (15 min)
  Leo 02-sistema-patrones.md (patrones P-001, P-002)
  ↓
Martes-Jueves
  ↓
  Selecciono 1 patrón (ej: P-001)
  Identifico 5-10 empresas en León
  Para CADA empresa:
    - Abro Google Maps/Facebook/LinkedIn
    - Sigo el Playbook (01-playbook-fuentes.md)
    - Registro observación en tracker-observaciones.csv
  ↓
Viernes
  ↓
  Analizo: ¿De 10 empresas, cuántas confirman el patrón?
  Si >70%: Patrón probablemente real
  Si <40%: Patrón probablemente falso
  ↓
Siguiente semana
  ↓
  Investigar siguiente patrón O
  Seguir profundizando en patrón confirmado
```

---

## Qué esperar

### Semanas 1-2: Exploración
- 5-10 observaciones por patrón
- Descubres que algunos patrones son obvios, otros no
- Refinas definiciones

### Semanas 3-4: Acumulación
- 20-30 observaciones por patrón
- Emergencias: patrones inesperados
- Contradicciones: empresas que NO encajan

### Mes 2: Análisis
- 40-60 observaciones por patrón
- Cálculos de % confirmación
- Decisión: ¿Patrón confirmado o rechazado?

### Mes 3: Validación de comportamiento
- Entrevistas con empresas que confirman patrón
- Preguntas de comportamiento observable
- Primera prueba de pago (oferta concreta)

---

## Métricas de éxito

### Patrón confirmado = 
- ✅ >15 observaciones en patrón
- ✅ >70% de confirmación (resultado=Sí)
- ✅ Aparece en ≥2 sectores diferentes
- ✅ Evidencia de ≥2 fuentes diferentes

### Negocio validado =
- ✅ Patrón confirmado
- ✅ 5+ empresas dispuestas a ser entrevistadas
- ✅ Comportamiento observable (no opinión)
- ✅ 3+ empresas pagan por solución puntual
- ✅ Solución repetible, no proyecto único

---

## Principios operativos

### 1. Observación > Interpretación
```
❌ "El dueño está estresado"
✅ "Responde reseñas a las 22:30 en día laborable"
```

### 2. Verificable > Plausible
```
❌ "Probablemente tenga problemas de talento"
✅ "Ha publicado oferta de 'cocinero' en Indeed el 15 de enero, 20 de marzo y 10 de junio"
```

### 3. Cantidad > Profundidad (al inicio)
```
Semana 1: 30 observaciones simples
Mes 2: 10 entrevistas profundas
```

### 4. Contradicciones = Oportunidad
```
Si encuentras empresa que NO encaja en patrón esperado:
  → Investiga por qué
  → Probablemente encontraste un nicho
```

### 5. Datado > Vago
```
❌ "Hace poco cambió el equipo"
✅ "En LinkedIn aparecen 4 cambios de empleado entre enero-junio 2025"
```

---

## Cómo usar los documentos

### Si tienes 5 minutos
→ Lee 00-inicio-rapido.md

### Si vas a investigar hoy
→ Abre 01-playbook-fuentes.md al lado
→ Sigue el método para tu patrón
→ Llena una fila en tracker-observaciones.csv

### Si necesitas entender un patrón
→ Busca en 02-sistema-patrones.md
→ Lee definición, hipótesis, sectores
→ Revisa casos de contradicción

### Si escribiste una observación
→ Compara con checklist en 03-tracker-evidencia.md
→ Asegúrate que es hecho, no interpretación
→ Verifica que es verificable en 5 minutos

---

## Errores que matan este proceso

### ❌ Error 1: Buscar confirmación
Vas con la idea de que el patrón existe, y solo ves evidencia que lo confirma.

**Solución**: Busca activamente donde se rompe tu teoría. Las contradicciones son valiosas.

### ❌ Error 2: Mezclar opinión con hechos
Registras "El dueño no quiere modernizarse" cuando deberías registrar "Web sin actualización desde 2019".

**Solución**: Si no puedes verificarlo en URL + timestamp, no es hecho.

### ❌ Error 3: Saltar al producto
"Ya sé que necesitan automatización, voy a construirla."

**Solución**: Primero: ¿existe el patrón? Segundo: ¿lo confirman 15+ casos? Tercero: ¿alguien pagó por solucionarlo? ENTONCES construyes.

### ❌ Error 4: Investigar empresas, no patrones
"Voy a estudiar a fondo Restaurante X."

**Solución**: Investiga el patrón en 20 restaurantes. La unidad de análisis es el patrón, no la empresa.

### ❌ Error 5: Registrar datos bonitos
"Voy a buscar solo evidencia interesante."

**Solución**: Registra TODO. Sí, No, Contradicción. La verdad estadística emerge del volumen.

---

## Preguntas frecuentes

### ¿Cuánto tiempo lleva?
- **Semana 1**: 5-10 horas (lectura + 10-15 observaciones)
- **Mes 1**: 20-30 horas (40-50 observaciones)
- **Mes 2-3**: 10-15 horas/semana (análisis, entrevistas)

### ¿Necesito estar en León?
No, pero ayuda. Puedes:
- Investigar online (Google Maps, LinkedIn, webs)
- Viajar 2-3 días/mes para entrevistas
- Delegar observación online a alguien local

### ¿Y si el patrón no existe?
Excelente. Habrás descartado una dirección en 2 meses. Mejor que 6 meses construyendo producto sin demanda.

### ¿Cuándo empiezo a vender?
Solo después de que:
1. Patrón está confirmado (>15 casos, >70%)
2. Entrevistaste 5+ empresas
3. Alguien pagó por solución puntual
4. Solución fue repetible (no fue proyecto único)

### ¿Qué pasa si encuentro 3 patrones confirmados?
Enfócate en UNO. El que tenga:
- Más confirmaciones
- Más disposición a pagar
- Menos competencia

---

## Siguiente paso

1. Abre **00-inicio-rapido.md**
2. Lee en 15 minutos
3. Elige patrón P-001 o P-002
4. Identifica 1 empresa en León
5. Sigue el Playbook por 20 minutos
6. Registra 1 observación en tracker-observaciones.csv

**Hoy: 45 minutos. Mañana: entiende por qué sí o no se confirma el patrón.**

---

## Contacto y mejoras

- Encontraste error en un patrón? → Edita 02-sistema-patrones.md
- Fuente nueva para investigar? → Agrega en 01-playbook-fuentes.md
- Mejor método de registro? → Propón en 03-tracker-evidencia.md

Este sistema vive. Mejora constantemente.

---

**Última actualización**: 2025-01-24
**Versión**: 1.0 (Cascada: Playbook → Patrones → Tracker)
