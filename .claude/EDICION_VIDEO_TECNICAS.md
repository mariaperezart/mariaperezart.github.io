# Técnicas y Procesos de Edición de Video — Referencia Consolidada

## 1. Filosofía de Edición

**Disciplina de edición (sistema Jenny Hoyos):**
- Diseña el vídeo desde el último plano hacia atrás, no al revés
- Cada segundo sin aportar al gancho o al cierre se corta
- El vídeo termina justo después del payoff, sin despedida larga
- El primer fotograma es gancho visual por sí solo, antes de cualquier texto o palabra
- Simplicidad sobre ingenio

**Verificación de cambios:**
- Extraer y analizar fotogramas reales antes de aceptar sugerencias externas
- Medir timestamps con precisión de fotograma antes de aplicar cortes
- Cross-check: una sugerencia externa se verifica contra al menos 2 clips distintos
- No asumir que timestamps proporcionados externamente son exactos — pueden estar desplazados 1-2s

## 2. Estructura de Clips y Concatenación

**Proceso:**
1. Exportar cada clip editado a archivo temporal con codec H.264 (yuv420p)
2. Crear archivo de demuxing (`concat.txt`) con rutas relativas a los clips
3. Usar `concat demuxer` en ffmpeg (más rápido que re-encodear):
   ```bash
   ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4
   ```
4. Si los clips tienen diferente formato/fps, usar `concat filter` en su lugar

**Manejo de audio sincronizado con cambios de velocidad:**
- Cuando apliques atempo (audio time-stretching), asegúrate de que la duración de audio coincida con la de vídeo
- Ejemplo: si aceleras vídeo 1.15x, acelera audio también 1.15x
- Usa `setpts` para ajustar timing de fotogramas; `atempo` para audio

## 3. Speed y Timing

**Acelerar clip sin re-encodear (si es posible):**
```bash
# Video 1.15x más rápido (fotogramas se reproducen más rápido)
ffmpeg -i input.mp4 -filter:v "setpts=PTS/1.15" -filter:a "atempo=1.15" output.mp4
```

**Ajustar timing de fotogramas sin cambiar velocidad:**
```bash
ffmpeg -i input.mp4 -filter:v "setpts=(RTCTIME-RTCSTART)/1000/TB/1000" output.mp4
```

## 4. Zoom Progresivo y Crop

**Problema:** ffmpeg no puede evaluar variable `t` (tiempo) en parámetros `w`/`h` de crop en este entorno.

**Solución:** Usar crop con valores fijos por segmento:
```bash
# Zoom al 96% (recorte 4% total)
-filter:v "crop=iw*0.96:ih*0.96:0:0,scale=1080:1920"

# Zoom al 90% (recorte 10% total)
-filter:v "crop=iw*0.90:ih*0.90:0:0,scale=1080:1920"
```

**Para zoom en diferentes segmentos:** Edita cada clip por separado, luego concatena.

**Sharpening:** Usar `unsharp` después de crop para recuperar nitidez:
```bash
-filter:v "crop=iw*0.96:ih*0.96,scale=1080:1920,unsharp=5:5:1"
```

## 5. Color Grading

**Aproximación moderna (teal-orange):**
```bash
# EQ: contraste, saturación, brillo, gamma
-filter:v "eq=contrast=1.10:saturation=1.08:brightness=0:gamma=1.0"

# Color balance: sombras (azul/frío), medios y luces (cálido/naranja)
-filter:v "colorbalance=bs=0.2:ms=0.1:hs=-0.1"
```

**Valores típicos:**
- `contrast=1.10` → +10% contraste
- `saturation=1.08` → +8% saturación
- `colorbalance=bs=0.2` → sombras más azules (0.2 = +20% hacia azul)
- `colorbalance=hs=-0.1` → highlights más cálidos (-0.1 = -10% hacia azul = más naranja)

**Aplicar sharpening después:**
```bash
-filter:v "eq=...,colorbalance=...,unsharp=5:5:1"
```

## 6. Text Overlay con Subtítulos (ASS)

**Formato ASS (Advanced SubStation Alpha):**
- Soporte nativo en ffmpeg con filtro `subtitles`
- Define fuente, tamaño, color, posición, sombra y contorno

**Ejemplo de archivo `.ass`:**
```
[Script Info]
ScriptType: v4.00+
PlayResX: 720
PlayResY: 1280
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Center,DejaVu Sans,38,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,1,0,0,0,100,100,0,0,1,3,0,2,50,50,200,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:01.60,0:00:03.10,Center,,0,0,0,,{\fad(200,200)}Todo empieza aquí
```

**Valores clave:**
- `Fontsize: 38` — tamaño visible en mobile (1080x1920)
- `&H00FFFFFF` — blanco puro (RGB en hex invertido, con HH adicional)
- `Shadow=0` — sin sombra (más limpio)
- `Outline=3` — contorno de 3px para legibilidad
- `\fad(200,200)` — fade in/out de 200ms (0.2s)
- `MarginV=200` — margen vertical inferior (para evitar que se corte en mobile)

**Aplicar en ffmpeg:**
```bash
-filter:v "subtitles=archivo.ass"
```

**Fuentes disponibles:** DejaVu Sans, Liberation Sans, Noto Sans (verificar instalación en container).

## 7. Codec y Formatos Móviles

**Salida recomendada (TikTok/Reels/YouTube Shorts):**
```bash
-pix_fmt yuv420p -profile:v high
```

- `yuv420p` → Color space compatible con todos los dispositivos
- `profile:v high` → H.264 High Profile para máxima compatibilidad

**Bitrate:** Ajusta según contenido:
- Clip corto (15-20s) con mucho movimiento: `-b:v 8M` (8 Mbps)
- Clip largo (30-40s) con panorámicas: `-b:v 5M` (5 Mbps)

**Audio:** `-c:a aac -b:a 192k` (AAC estéreo 192 kbps)

## 8. Manejo de Errores y Limitaciones

**Filter variables no soportadas:**
- `t` (tiempo) no funciona en parámetros `w`/`h` de crop en algunos entornos
- Solución: Procesa cada segmento por separado o usa overlay con múltiples comandos ffmpeg

**Fuentes no instaladas:**
- Si Work Sans u otra fuente no existe, substituir con DejaVu Sans Bold
- Documentar la substitución en el log de edición

**Música y SFX:**
- Las librerías de efectos de sonido con licencia pueden no estar disponibles
- Usar solo audio que ya existe en el vídeo original o que está license-free verificado

## 9. Verificación Pre-Export

**Antes de exportar versión final:**
1. Extraer frames de 5-10 puntos clave: `ffmpeg -i video.mp4 -vf fps=1/frame_seconds frame_%03d.jpg`
2. Revisar que timing de texto coincida con contenido visual
3. Verificar que zoom/crop no corte partes importantes
4. Comprobar que color grading se ve coherente en dispositivo/pantalla

**Comando de verificación:**
```bash
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.mp4
```

## 10. Exportación Eficiente (Pipeline Típico)

```bash
# Ejemplo: clip con speed, crop, color grading, texto, audio
ffmpeg \
  -i input.mp4 \
  -filter:v "setpts=PTS/1.15,crop=iw*0.96:ih*0.96:0:0,scale=1080:1920,eq=contrast=1.10:saturation=1.08,colorbalance=bs=0.2:ms=0.1:hs=-0.1,unsharp=5:5:1,subtitles=textos.ass" \
  -filter:a "atempo=1.15" \
  -pix_fmt yuv420p -profile:v high \
  -c:v libx264 -crf 23 \
  -c:a aac -b:a 192k \
  output.mp4
```

**CRF (Constant Rate Factor):**
- `crf=23` → Defecto (calidad visual muy buena)
- `crf=18-20` → Más calidad (archivo más grande)
- `crf=28` → Menor calidad (archivo más pequeño)

---

## Referencia Rápida: Comandos Comunes

| Tarea | Comando |
|-------|---------|
| Acelerar 1.15x | `setpts=PTS/1.15,atempo=1.15` |
| Crop 96% + sharpen | `crop=iw*0.96:ih*0.96,scale=1080:1920,unsharp=5:5:1` |
| Color grading teal-orange | `eq=contrast=1.10:saturation=1.08,colorbalance=bs=0.2:hs=-0.1` |
| Añadir texto ASS | `subtitles=archivo.ass` |
| Fade in/out 0.2s | `\fad(200,200)` (en archivo ASS) |
| Concatenar clips | `ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4` |
| Exportar frames | `ffmpeg -i video.mp4 -vf fps=1/N frame_%03d.jpg` |
| Mobile safe export | `-pix_fmt yuv420p -profile:v high -c:v libx264 -crf 23` |
