# 📱 DANZA CHIC EN GOOGLE SHEETS
## Para rellenar mientras hablan por teléfono

---

## ⚡ ACCESO RÁPIDO (2 opciones)

### OPCIÓN 1: Usar el Excel que te creé (RECOMENDADO)
```
1. Descarga: Danza_Chic_LEAN_Google_Sheets.xlsx
2. Ve a sheets.google.com
3. Nuevo → (arriba a la izquierda)
4. Importar → Carga archivo → Selecciona el Excel
5. Google Sheets abre automáticamente
6. ¡Listo! Empieza a rellenar amarillo
```

### OPCIÓN 2: CSV Template
```
1. Descarga: Danza_Chic_Google_Sheets_Template.csv
2. sheets.google.com → Nuevo
3. Importar → Carga archivo → CSV
4. Google Sheets crea la hoja
5. Formatea manualmente si es necesario
```

---

## 📋 ESTRUCTURA: 1 HOJA, 6 SECCIONES

```
┌─────────────────────────────────────┐
│  📋 DATOS BÁSICOS (1ª llamada)      │ ← Llenar solo 1 vez
├─────────────────────────────────────┤
│  💰 ESTADO RESULTADOS (cada mes)    │ ← Estos 2 son lo principal
│  📊 CUADRO DE MANDO (10 KPIs)       │
├─────────────────────────────────────┤
│  🔴 DECISIONES & ACCIONES           │ ← Qué hacer si rojo
├─────────────────────────────────────┤
│  🎯 EMBUDO COMERCIAL                │ ← Conversión funnel
├─────────────────────────────────────┤
│  📝 NOTAS DE LA LLAMADA             │ ← Escribe aquí mientras hablan
└─────────────────────────────────────┘
```

---

## 📞 RUTINA DE LLAMADA (20 minutos)

### INICIO (2 minutos)
**Pregunta 1:** ¿Cuántas alumnas tienes ahora?
> Escribe en "Alumnas actuales"

**Pregunta 2:** ¿Cuánto ingreso tuviste este mes?
> Escribe en "Ingreso total"

### GASTOS (5 minutos)
**Pregunta 3:** ¿Cuánto gastaste en...?
- Material, uniformes, etc → Amarillo "Gastos variables"
- Alquiler → Amarillo "Alquiler"
- Profesor (si hay) → Amarillo "Profesor"
- Marketing → Amarillo "Marketing"
- Otros (teléfono, internet) → Amarillo "Otros"

**Google Sheets calcula automáticamente:**
```
TOTAL GASTOS
MARGEN BRUTO
MARGEN %
```

### KPIs (8 minutos)
**Pregunta 4:** Para cada KPI, ¿cuál es el valor?

| KPI | Ejemplo | Cómo calcularlo |
|-----|---------|---|
| **Ocupación (%)** | 50% | (Alumnas actuales / Capacidad) × 100 |
| **Retención mes 2 (%)** | 85% | Alumnas que renovaron mes 2 / Alumnas mes 1 |
| **Referidos (%)** | 35% | Nuevas por recomendación / Total nuevas |
| **Margen bruto (%)** | 40% | (Ingreso - Costes) / Ingreso × 100 |
| **Dependencia (%)** | 70% | % de clases que da hermana |
| **NPS** | 45 | Promedio de 10 encuestas rápidas (0-10) |
| **Abandono (%)** | 12% | Alumnas que se fueron / Alumnas inicio |
| **CAC** | $8 | Gasto marketing mes / Alumnas nuevas |
| **LTV/CAC** | 3 | (Mensualidad × 6) / CAC |
| **PE vs actual** | "OK" | ¿Alumnas > Punto equilibrio? |

### DECISIÓN (5 minutos)
**Si algo está en ROJO:** ¿Qué hacemos?

Chequea la tabla "DECISIONES & ACCIONES":
```
Si ocupación ROJA → Subir marketing, ir a colegios
Si retención ROJA → Encuesta a mamás
Si margen ROJO → Subir precio O reducir gastos
...
```

**Escribe la decisión en "NOTAS DE LA LLAMADA"**

---

## 🔴 SEÑALES DE ALERTA DURANTE LA LLAMADA

Si ves **CUALQUIERA** de estas → Acción inmediata:

```
❌ Margen < 20% → "Hermana, el negocio está apretado"
❌ Ocupación < 40% → "Hay espacio. Marketing URGENTE"
❌ Retención < 70% → "Problema en primeras clases"
❌ NPS < 30 → "Mamás insatisfechas. Encuesta YA"
❌ Abandono > 20% → "Algo anda mal. Revisamos método"
❌ Dependencia > 85% → "Solo depende de ti. Crítico"
```

---

## 📱 TIPS PARA GOOGLE SHEETS EN LLAMADA

**Cambio tamaño letra si es pequeño:**
- Selecciona todo (Ctrl+A)
- Formato → Tamaño de letra → 12

**Celda amarilla = INPUT (rellenar)**
- Celda blanca = OUTPUT (fórmula, no editar)

**Fórmulas NO se ven:**
- Si ves `=SUM(B2:B5)` es normal
- Google Sheets calcula automáticamente
- Los números aparecen cuando guardas

**Compartir el link:**
- Arriba derecha → Compartir
- Invita mi email
- Así vemos los cambios en tiempo real

---

## 📊 EJEMPLO: LLAMADA CON HERMANA (JULIO 2026)

### DATOS BÁSICOS
```
- Años funcionando: 3
- Máximo histórico: 80 alumnas
- Capacidad actual: 120 (si abre horarios)
- Mensualidad: $15
```

### ESTADO RESULTADOS MES ACTUAL
```
- Alumnas presentes: 45
- Ingreso total: $675
- Gastos variables: $50
- Alquiler: $250
- Profesor: $0 (lo hace ella)
- Marketing: $30
- Otros: $100

✅ Google Sheets calcula:
   TOTAL GASTOS: $430
   MARGEN BRUTO: $245
   MARGEN %: 36%
```

### CUADRO DE MANDO
```
1. Ocupación: 45/120 = 37.5% → 🔴 ROJO
2. Retención mes 2: 40/50 = 80% → 🟢 VERDE
3. Referidos: 8/20 nuevas = 40% → 🟢 VERDE
4. Margen bruto: 36% → 🟢 VERDE
5. Dependencia: 100% (ella todo) → 🔴 ROJO
6. NPS: 48 (promedio) → 🟡 AMARILLO
7. Abandono: 10% → 🟢 VERDE
8. CAC: $30 marketing / 2 nuevas = $15 → 🟡 AMARILLO
9. LTV/CAC: ($15 × 6) / $15 = 6 → 🟢 VERDE
10. PE vs actual: 38 alumnas = equilibrio, tiene 45 → 🟢 VERDE
```

### DECISIÓN
```
🔴 Ocupación baja (37%) → Revisar precio, ir a colegios
🔴 Dependencia 100% → Normal para mes 1, pero documentar

💡 Plan:
- Contactar 5 colegios en agosto
- En septiembre: aumentar precio a nuevas ($18)
- Noviembre: contratar 1 profesor si llega a 70 alumnas
```

### NOTAS
```
DECISIÓN: 
- Vamos a crecer a 50 alumnas en 3 meses
- Prioridad: contactar colegios (sin costo)
- Si en octubre aún <50: revisar producto

PRÓXIMA ACCIÓN:
- Hermana contacta colegios próxima semana
- Encuesta NPS a 10 mamás
- Próxima llamada: 1 de octubre

PROBLEMAS:
- Ocupación muy baja (37%)
- Dependencia total (riesgo)

OPORTUNIDADES:
- Margen excelente (36%)
- Retención buena (80%)
- LTV/CAC muy alto (6x)
- Espacio para crecer (63% capacidad libre)
```

---

## ✅ CHECKLIST DESPUÉS DE LLENAR

```
□ Rellené todos los amarillos (datos)
□ Revisé que los números se calculen (blancos)
□ Identifiqué qué KPIs están en rojo
□ Escribí la decisión en NOTAS
□ Compartí el link para que vean los cambios
□ Guardé (Ctrl+S)
```

---

## 🆘 SI ALGO NO FUNCIONA

**Fórmula no calcula:**
- Haz clic en la celda blanca
- Si ves `#REF!` o `#DIV/0!`: hay un dato faltante
- Rellena los amarillos primero

**Google Sheets lento:**
- Recarga la página (F5)
- Cierra otras pestañas

**No se actualiza:**
- Algunos cambios tardan 2-3 segundos
- Espera y recarga si es necesario

**Quiero otra copia:**
- Archivo → Hacer una copia
- Renombra "Danza Chic - Octubre 2026"
- Así tienes historial por meses

---

## 📞 DURANTE LA LLAMADA: FLUJO REAL

```
TÚ: "Hola, abre Google Sheets"
HERMANA: (abre, ve la hoja)

TÚ: "¿Cuántas alumnas tienes ahora?"
HERMANA: "45"
TÚ: "Escribe 45 en Alumnas actuales"
HERMANA: (escribe en amarillo)

TÚ: "¿Cuánto ingreso?"
HERMANA: "$675"
TÚ: "En Ingreso total"
(... continúa con cada campo)

TÚ: "¿Cuánto gastaste en material?"
HERMANA: "$50"
TÚ: "Amarillo de Gastos variables"
(...rellenan todos los gastos)

(Google Sheets calcula automáticamente)

TÚ: "Mira, margen 36%, ocupación 37%..."
HERMANA: "Ah, eso es bajo"
TÚ: "Sí, es rojo. Entonces..."
```

---

## 🎯 VERSIÓN FINAL

La puedes usar durante:
- ✅ Llamada con hermana
- ✅ Reunión con asesor
- ✅ Análisis mensual
- ✅ Decisiones rápidas

No es análisis profundo (usa Excel de 17 hojas para eso), es:
**La herramienta para conversar y decidir.**

---

**¿Dudas?** Descarga el Excel LEAN y prueba.  
**¿No funciona?** Avísame el error específico.  
**¿Necesitas cambios?** Puedo personalizar las secciones.

