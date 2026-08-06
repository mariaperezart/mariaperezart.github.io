# Auditoría Shark Tank — Resultados

**Fecha:** 2026-08-06  
**Veredicto:** De "no está listo" a "casi listo". Falta la prueba.

---

## ✅ Lo que cambió

### 1. Identidad clara: FARO (final)
- Revertido de LUMBRE a FARO
- Decisión sin ambigüedad
- Documentado: `info@faro.es`

### 2. Copy realineado a resultados
**Antes:**
```
"Tu empresa merece una presencia digital que crezca con ella"
"Somos un estudio pequeño y queremos seguir siéndolo"
```

**Ahora:**
```
"Webs que generan contactos. Año uno, año cinco, año diez."
"Año 1: contactos nuevos. Año 5: contactos que vuelven."
```

**Cambio:** De aspiraciones a métricas. De quiénes somos a qué vende.

### 3. Narrativo: valor acumulado
**Nueva sección (reemplazó "Quiénes somos"):**
- Año 1: La web genera contactos (obvio)
- Año 5: Sigue generando, pero porque FARO conoce el negocio
- Métrica: LTV es 1200€ + 960€/año + evolución

**Shark Tank:** Esto es lo que invierte. El LTV, no el pitch.

### 4. Límite de 3 proyectos/mes: reposicionado
**Antes:** "Somos pequeños y queremos quedarnos así" (defensa, no beneficio)  
**Ahora:** "3 proyectos permite estar en tu negocio como si fuéramos vosotros" (ventaja competitiva)

---

## 🔴 Lo que falta (bloqueadores)

### 1. Prueba de concepto: cliente ejemplo
**Status:** No existe  
**Qué necesita:** Una timeline ficticia pero realista de cómo evoluciona un cliente en 5 años

**Ejemplo:**
```
Cliente: Restaurante Ejemplo (anonimizado)

Mes 1: Web esencial 1.200 €
  Resultado: Aparece en Google. 15 contactos/mes.

Mes 3: + Mantenimiento 80 €/mes
  Cambios menores. Formulario funciona. 18 contactos/mes.

Mes 6: + SEO local 250 €/mes (300 €/mes total)
  Contenido optimizado. Aparece en 5 búsquedas nuevas. 35 contactos/mes.

Año 2: Identidad visual (950 €) opcional
  Rediseño branding. Reservas online (+500 €/mes). 80 contactos/mes.

Año 3: Rediseño homepage
  Nuevas funcionalidades. 150 contactos/mes.

Año 5: Nueva web completa (2.900 €)
  Arquitectura completa. 300 contactos/mes.

TOTAL 5 AÑOS: 1.200 + (80×48 meses) + (250×24) + 950 + 2.900 = 12.940 €
CONTACTOS GENERADOS: 2.000+ (ROI: 1 € de web = 0,15 € en contactos)
```

**Por qué es crítico:** Esto es lo único que convence a Shark Tank. No es el copy. Es el dato.

### 2. Formulario de contacto funcional
**Status:** Apunta a `TU_ID_DE_FORMSPREE` (no funciona)  
**Qué necesita:** 
- Crear cuenta en Formspree.io gratis
- Pegar ID real en `/contacto/index.html`
- Testear que los correos llegan a `info@faro.es`

### 3. Datos legales completos
**Status:** Sigue con placeholders  
**Ubicación:** `/legal/terminos/` y `/legal/privacidad/`  
**Qué falta:**
```
[nombre y apellidos]  → Nombre completo (ej: María Pérez García)
[NIF]                 → NIF real
[domicilio]           → Dirección del estudio en Ponferrada
```

**Por qué importa:** No puedes recibir clientes legalmente sin esto. Es LSSI-CE obligatorio.

### 4. Dominio y correo corporativo
**Status:** Pendiente setup  
**Plan:** 
- Comprar `faro.es` en Namecheap (12€/año)
- Configurar Zoho Mail gratis (info@faro.es)
- Apuntar DNS a Netlify
- Total: 30 minutos

**Veredicto:** Esto NO bloquea la auditoría, pero sí la recepción de clientes reales.

---

## 🟡 Coherencia visual (revisada)

### Sistema de color: está bien
- Azul Faro (#1B3A4B): profesional, utilizado correctamente
- Ámbar Señal (#E8A33D): CTA claro, usado en botones correctos
- Tipografía: Fraunces + Inter es equilibrada

**Recomendación Shark Tank:** Los colores están bien. El problema no es visual, es que nadie confunde FARO con otro estudio porque no transmite diferenciación.

### Espaciado y layout: correcto
- Escala 8px: consistente
- Grilla: funciona en móvil y desktop
- Cards: legibles

**No hay cambios necesarios en diseño.**

---

## ¿Qué va a decidir Shark Tank?

**No será:**
- El nombre (FARO está bien)
- Los colores (están bien)
- El layout (funciona)
- El copy (mejorado)

**Será:**
1. **¿Tienes un cliente real?** (o un cliente ejemplo que demuestre que funciona)
2. **¿Cuánto dinero dejó cada cliente después de 5 años?** (LTV real)
3. **¿Por qué tú y no otra agencia?** (diferenciación)
4. **¿Funciona el modelo de 3 proyectos/mes?** (sostenibilidad)

---

## Tareas finales (en orden de crítico)

### BLOQUEADOR 1: Cliente ejemplo
**Impacto:** Sin esto, Shark Tank dice "vuelve cuando tengas traction".  
**Esfuerzo:** 2 horas (crear narrative + diseñar tabla de evolución)  
**Resultado:** Página `/cliente-ejemplo/` con timeline de 5 años

### BLOQUEADOR 2: Formulario funcional
**Impacto:** No puedes recibir solicitudes reales.  
**Esfuerzo:** 15 minutos (registrarse en Formspree)  
**Resultado:** Correos de contacto llegan a `info@faro.es`

### BLOQUEADOR 3: Datos legales
**Impacto:** No puedes facturar sin esto.  
**Esfuerzo:** 5 minutos (rellenar 3 campos)  
**Resultado:** Web cumple LSSI-CE

### NO BLOQUEADOR: Dominio + correo
**Impacto:** Es lo próximo después de lo anterior.  
**Esfuerzo:** 30 minutos  
**Resultado:** `faro.es` + `info@faro.es` funcional

---

## Resumen ejecutivo

**Shark Tank:** "Idea buena. Modelo sólido. Pero no tienes prueba de que funciona. Vuelve con un cliente."

**Siguiente paso:** Crear cliente ejemplo de 5 años. Ese es el cambio que convence.

---

**Rama:** `claude/ponferrada-2026-analysis-jsknfv`  
**Commits aplicados:** 3 (reposicionamiento, cambio LUMBRE→FARO, auditoría)  
**Estado:** Listo para hacer diagnósticos reales y validar modelo
