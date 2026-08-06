# Estado actual de la web LUMBRE

**Última actualización:** 2026-08-06 · Rama: `claude/ponferrada-2026-analysis-jsknfv`

---

## ✅ Completado

### Estructura y contenido
- [x] 11 páginas de servicios y posicionamiento
- [x] Página `/lo-que-recibes/` con documentos públicos (diagnóstico, presupuesto, contrato)
- [x] Formulario de diagnóstico funcional (15 min, resuelto en navegador)
- [x] Navegación limpia sin teléfono ni fotos del estudio
- [x] Copy reposicionado: de miedo a orgullo
- [x] Modelo recurrente: 2,8 h/mes por cliente a 80 €/mes (con informe mensual)
- [x] Permanencia de 12 meses eliminada (solo 6 meses en SEO local con justificación)

### Contacto funcional
- [x] Correo de contacto configurado: `info@lumbre.es` en 15 lugares
- [x] Formulario de contacto marcado (requiere Formspree, Getform, o endpoint propio)
- [x] Enlaces mailto: activos

### Accesibilidad y técnica
- [x] Responsivo (móvil, tablet, desktop)
- [x] Acceso a teclado (focus-visible en todos los elementos)
- [x] Reducción de movimiento respetada
- [x] CSS limpio y modular (FARO design system)
- [x] Schema.org para motor de búsqueda

---

## ⚠️ Requiere datos del usuario para completarse

### Documentos legales (LSSI-CE obligatorio)

**`/legal/terminos/index.html`**
```html
Titular: [nombre y apellidos]
NIF: [NIF]
Domicilio: [domicilio]
Correo: [correo]  ← hoy es info@lumbre.es
```

**`/legal/privacidad/index.html`**
```html
Titular: [nombre y apellidos]
NIF: [NIF]
Domicilio: [domicilio]
Correo de contacto: [correo de contacto]  ← hoy es info@lumbre.es
```

**Qué necesitas proporcionar:**
1. Nombre y apellidos completos (probablemente María Pérez + apellido)
2. NIF (información personal sensible)
3. Domicilio del estudio en Ponferrada (calle, número, código postal)

**Notas legales:**
- La LSSI-CE obliga a estas líneas mínimas en cualquier web comercial española
- Es recomendable que un abogado o asesor revise estas páginas antes de recibir datos de clientes
- El archivo `05_CONTRATO_SERVICIOS.md` del kit también debería ser revisado profesionalmente (presupuestado: 65 €/mes asesoría)

---

## 📋 Tareas siguientes (no bloqueantes para recibir contactos)

### 1. Verificar marca LUMBRE en OEPM
**Proceso:** 15 minutos, gratuito
- Abre https://consultas2.oepm.es/
- Busca "LUMBRE" en clases 35 (servicios de diseño) y 42 (software/web)
- Si sale limpia → el nombre es tuyo para usar
- Si ya existe → necesitas cambiar de nombre antes de registrar marca

**Documento del kit:** `00_EMPIEZA_AQUI.md` (punto 3)

### 2. Comprar dominio y configurar correo
**Más barato probado:**
- **Dominio:** Namecheap.com o Godaddy.com
  - `lumbre.es`: 10-15 €/año
  - `lumbre.design`: 15-20 €/año (más memorable)
  - Alternativas: `lumbreestudio.es`, `lumbrebierzo.es`

- **Hosting:** Netlify (para HTML estático)
  - Tier gratuito: 0 € (100GB/mes ancho de banda, deploys ilimitados)
  - Tu web cabe perfectamente en gratuito

- **Correo corporativo:** Zoho Mail (gratuito primer usuario)
  - 0 € para 1 usuario + dominio
  - Configure automático con Namecheap
  - `info@lumbre.es` estará lista en 10 minutos

**Costo total año 1:** 12-15 € (dominio) + 0 € (hosting + correo gratis) = **~12 €**

**Pasos de implementación (30 min):**
1. Compra `lumbre.es` en Namecheap
2. Configura DNS apuntando a Netlify
3. Abre Zoho Mail gratis, crea `info@lumbre.es`
4. Replica el repo en Netlify (conecta GitHub, deploy automático desde `main`)
5. Apunta tu dominio a Netlify

**Documento del kit:** `00_EMPIEZA_AQUI.md` (punto 3 + Apéndice técnico)

### 3. Rellenar datos legales
Una vez que tengas los datos (nombre, NIF, domicilio), abre los dos archivos legales y sustituye los marcadores. Después haz commit:
```bash
git commit -m "Rellenar datos identificativos en documentos legales (LSSI-CE)"
```

### 4. Conectar formulario de contacto
El formulario en `/contacto/` hoy no funciona porque apunta a `TU_ID_DE_FORMSPREE`. Necesitas:
- [ ] Crear cuenta en Formspree.io (o Getform, o tu propio endpoint)
- [ ] Rellenar `data-endpoint` en `/contacto/index.html`
- [ ] Testear que los correos llegan a `info@lumbre.es`

---

## 📊 Resumen de cambios desde la auditoría

| Cambio | Antes | Después | Impacto |
|--------|-------|---------|---------|
| Copy principal (H1) | «Tu próximo cliente…» | «Tu empresa se ha ganado una reputación» | De atracción a confianza |
| Permanencia de 12 meses | Contractual + penalización | Eliminada (solo 6 en SEO) | De dependencia a valor mensual |
| Horas en 80 €/mes | 4-6h prometidas | 2,8h reales con informe | Rentabilidad del 32% de ingresos |
| Fotos del estudio | Previstas | Eliminadas (sin stock de activos) | Evita incoherencia visual |
| Teléfono visible | Presente en 11 páginas | Eliminado | Correo como único canal ahora |
| Canales de contacto | Teléfono + formulario + correo | Correo + formulario | Uno funcional, otro previsto |
| Documentación pública | Portfolio imaginario | Documentos reales del proceso | Prueba de competencia sin clientes |

---

## 🚀 Checklist para «lanzamiento» de verdad

- [ ] LUMBRE verificada en OEPM (15 min)
- [ ] Dominio comprado (lumbre.es o similar)
- [ ] Datos legales rellenados (nombre, NIF, domicilio)
- [ ] Formulario conectado a Formspree/Getform
- [ ] Testeado: envío de correo desde formulario → `info@lumbre.es`
- [ ] Testeado: mailto:info@lumbre.es funciona en móvil
- [ ] Asesor revisa `/legal/terminos/` y `/legal/privacidad/`
- [ ] Asesor revisa `/05_CONTRATO_SERVICIOS.md` del kit
- [ ] Primera llamada de diagnóstico realizada (verifica todo funciona)

---

## 📍 Estado de branches y commits

**Rama principal:** `claude/ponferrada-2026-analysis-jsknfv`

**Últimos commits:**
1. `c3272c6` — Reemplazar CORREO_REAL con info@lumbre.es en toda la web
2. `06c0b1c` — (anterior) Limpieza final de canales de contacto

**Repositorio:** `mariaperezart/mariaperezart.github.io`

Para ver cambios completos:
```bash
git log --oneline origin/claude/ponferrada-2026-analysis-jsknfv | head -10
```

---

## 📚 Documentos del kit que necesitas ahora

Según `00_EMPIEZA_AQUI.md`, estas son las acciones esta semana:

1. ✅ **Panel de tesorería** → Abierto (el plan tiene cobertura para el arranque si el primer cliente firma mes 1)
2. ✅ **Checklist de arranque** → Hecho (web estable)
3. ⚠️ **Búsqueda OEPM** → Pendiente de ejecutar
4. ⚠️ **Correo real configurado** → Pendiente (dominio + Zoho)
5. ✅ **Prospección de Ponferrada** → Archivo documentado en kit (`12_PROSPECCION_PONFERRADA.md`)
6. ✅ **Socio y figura fiscal** → Documentado en kit (`13_SOCIO_Y_FIGURA_FISCAL.md`)
7. ✅ **Cómo pagar al padre** → Documentado en kit (`14_COMO_PAGAR_A_TU_PADRE.md`)
8. ✅ **Marca LUMBRE** → Documentado en kit (`16_MARCA_LUMBRE.md`)
9. ✅ **Modelo recurrente validado** → Documentado en kit (`17_MODELO_RECURRENTE.md`)
10. ⚠️ **Entrevistas con negocios locales** → Pendiente (falsar supuestos antes del alta)

---

**Próximo paso:** Rellenar datos legales + verificar LUMBRE en OEPM + comprar dominio.
