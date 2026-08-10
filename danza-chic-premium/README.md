# Danza Chic — Website Premium

## 📋 Descripción

Sitio web profesional y premium para **Danza Chic**, academia de danza infantil en Mérida, Venezuela. Diseñado con máxima calidad visual, optimizado para conversión y responsive en todos los dispositivos.

## 🎨 Características

- ✨ **Diseño Premium**: Glassmorphism, gradientes elegantes, animaciones suaves
- 📱 **Mobile-First**: Totalmente responsivo en teléfonos, tablets y desktop
- ⚡ **Rápido**: Optimizado sin dependencias complejas
- 🎯 **Conversión**: CTAs claros, formularios directos a WhatsApp
- 🎭 **Marca**: Colores Rosa #D946A6 + Azul #7C3AED del logo
- 📸 **Galería**: Espacio para fotos profesionales de clases y eventos
- 💬 **Testimonios**: Historias reales de madres
- 👩‍🏫 **Profesoras**: Sección con perfiles del equipo

## 📁 Estructura de Archivos

```
/root/danza-chic-premium/
├── index.html          # Página principal (HTML5 semántico)
├── styles.css          # Estilos completos con cache-buster
├── main.js            # JavaScript con animaciones GSAP
├── .htaccess          # Configuración Hostinger (cache busting)
├── README.md          # Este archivo
├── assets/
│   └── img/           # Carpeta para imágenes
└── lib/
    └── manifest.js    # Cargador de librerías
```

## 🖼️ Integración de Imágenes

Para que la web se vea perfectamente, coloca las fotos en `assets/img/`:

### Imágenes Requeridas:

1. **hero-placeholder.jpg** — Foto principal (hero) de niña bailando
2. **gallery-1.jpg** a **gallery-6.jpg** — Galería de fotos de clases y eventos
3. **profesora-1.jpg**, **profesora-2.jpg**, **profesora-3.jpg** — Fotos de las profesoras

**Tamaños recomendados:**
- Hero: 1920x2400px (optimizado para móvil)
- Galería: 1200x900px (paisaje) o 900x1200px (vertical)
- Profesoras: 800x800px

**Formato:** JPG o PNG (se convertirán automáticamente a WebP en producción)

## 🚀 Despliegue en Hostinger

### Opción 1: FTP (Recomendado)

1. Conéctate a tu Hostinger via FTP
2. Crea una carpeta llamada `danza-chic`
3. Copia todos los archivos (index.html, styles.css, main.js, .htaccess, assets/)
4. Tu sitio estará en: `tu-dominio.com/danza-chic/` o `danza-chic.tu-dominio.com`

### Opción 2: File Manager de Hostinger

1. Accede al panel de Hostinger → File Manager
2. Navega a `public_html`
3. Crea carpeta `danza-chic` y copia los archivos

### Opción 3: Git Deploy (si Hostinger lo soporta)

1. Sube a un repositorio GitHub
2. Configura deploy automático en Hostinger

## ⚙️ Configuración

### Cambiar Número de WhatsApp

Edita `index.html` y busca `584124567890` reemplaza por tu número:
```html
+584124567890  →  +58XXXXXXXXXXX
```

También está en varias secciones:
- Hero CTA
- Contacto
- Footer

### Cambiar Correo

Busca `contacto@danzachic.ve` y reemplaza por tu email.

### Cambiar Ubicación

Busca `Av. 4 entre Calles 22-23` y actualiza la dirección.

## 🔧 Tecnología

- **HTML5 Semántico** — Estructura limpia y accesible
- **CSS3 Moderno** — Flexbox, Grid, variables CSS, animaciones nativas
- **Vanilla JavaScript** — Sin dependencias npm, cero build step
- **GSAP 3.12** — Animaciones scroll-driven (CDN)
- **Cache Busting** — `?v=YYYYMMDD` en assets (actualiza diariamente en producción)
- **Responsive Design** — Mobile-first, breakpoints en 640px, 768px, 1200px

## 📊 Optimizaciones

- Fuentes de Google (Playfair Display + Inter)
- Imágenes lazy-loaded
- Gzip compression (.htaccess)
- Cache headers inteligentes
- CORS habilitado para fuentes
- Security headers básicos

## 🎯 Conversión

### CTAs Principales:

1. **WhatsApp en Hero** — "Contactar por WhatsApp"
2. **Agendar Clase Gratis** — Scroll hacia formulario
3. **Formulario de Contacto** — Envía directo a WhatsApp con datos pre-llenados
4. **WhatsApp en Footer** — Link siempre accesible

### Estrategia:
- Ofertas claras (clase gratis sin costo)
- Testimonios de madres reales
- Profesoras con credibilidad
- Grupos pequeños (máximo 12 niñas)

## 📱 Testing

### Local (en desarrollo):
```bash
cd /root/danza-chic-premium
python3 -m http.server 8765
# Abre: http://localhost:8765
```

### Antes de Publicar Checklist:

- [ ] Todas las imágenes se cargan correctamente
- [ ] Links de WhatsApp funcionan
- [ ] Formulario envía información
- [ ] Responsive se ve bien en móvil
- [ ] Animaciones no se comen contenido (es accesible sin JS)
- [ ] Velocidad de carga es rápida (<2s first paint)
- [ ] SEO: title, description, og:image tags presentes

## 🎨 Colores del Sistema

```css
--rosa-primary: #D946A6    /* Primario del logo */
--azul-secondary: #7C3AED /* Secundario del logo */
--crema-light: #FFF9F5     /* Fondo claro */
--crema-medium: #FAF3ED    /* Fondo secciones alternadas */
--gray-dark: #2D2D2D       /* Textos oscuros */
--text-secondary: #666666  /* Textos secundarios */
```

Para cambiar paleta, edita `:root { }` al inicio de `styles.css`.

## 📞 Soporte

### Errores Comunes:

**"Las imágenes no se cargan"**
- Verifica que están en `assets/img/` con los nombres exactos
- Verifica rutas relativas en HTML

**"La web se ve lenta"**
- Comprime imágenes a <200KB cada una
- Usa JPG para fotos, PNG para gráficos
- Considera convertir a WebP

**"WhatsApp no abre"**
- Verifica número sin espacios: `+58412456789`
- Usa protocolo `https://wa.me/`

**"Formulario no funciona"**
- Debe enviarse a WhatsApp (lee main.js)
- Verifica que el número esté actualizado

## 🔐 Seguridad

- Ningún dato se almacena en servidor (formulario va directo a WhatsApp)
- HTTPS recomendado en Hostinger
- Sin base de datos = sin vulnerabilidades SQL
- Headers de seguridad en .htaccess

## 📈 Próximos Pasos

1. **Sube fotos** profesionales a `assets/img/`
2. **Prueba local** en `http://localhost:8765`
3. **Actualiza contactos** (WhatsApp, email, ubicación)
4. **Publica en Hostinger** via FTP o File Manager
5. **Monitorea** primeras visitas y conversiones

## 📧 Contacto del Sitio

**Ubicación:** Av. 4 entre Calles 22-23, Mérida, Venezuela  
**WhatsApp:** +58 412 456 7890  
**Email:** contacto@danzachic.ve  
**Teléfono:** +58 412 456 7890

---

**Versión:** 1.0.0  
**Fecha:** 09 Agosto 2026  
**Último Update:** Cache buster `?v=20250809`

---

## 🎓 Notas Técnicas

- El sitio usa **IIFE pattern** para evitar conflictos globales
- **IntersectionObserver** para reveal animations como fallback si GSAP falla
- **Safe wrappers** en todas las inicializaciones (un error no rompe todo)
- Cumple **WCAG 2.1** básico (accesibilidad)
- Respeta `prefers-reduced-motion` para usuarios con sensibilidad

---

**¡Listo para deslumbrar! 💃✨**
