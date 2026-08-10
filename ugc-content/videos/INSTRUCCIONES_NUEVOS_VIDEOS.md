# 📹 CÓMO SUBIR Y PROCESAR NUEVOS VIDEOS

## 🚀 PROCESO SIMPLE

Cuando tengas nuevos videos para tu contenido UGC:

### 1️⃣ **Súbelos aquí**
Sube los videos directamente en Claude Code - yo los procesaré automáticamente

### 2️⃣ **Qué hago con ellos**
Para cada video nuevo:
- ✅ Organizar por categoría (travel, vlogs, tutorials, etc.)
- ✅ Exportar en múltiples formatos (vertical, horizontal, square)
- ✅ Crear scripts y captions para cada plataforma
- ✅ Generar hashtag strategy (tiered por alcance)
- ✅ Integrar en calendario de posting
- ✅ Guardar en ambos repositorios

### 3️⃣ **Formatos que crearemos**

Para cada video recibirás:

| Formato | Dimensiones | Uso | Plataformas |
|---------|------------|-----|------------|
| **Vertical** | 1080x1920 | Reels/TikTok/Shorts | Instagram, TikTok, YouTube |
| **Horizontal** | 1920x1080 | Feed & Twitter | YouTube, Twitter, LinkedIn |
| **Square** | 1080x1080 | Instagram Feed | Instagram |
| **Original** | Según fuente | Archivo | Backup |

---

## 📝 ESTRUCTURA POR VIDEO

Cada video tendrá esta organización:

```
ugc-content/videos/
├── [VIDEO_NAME]/
│   ├── original/
│   │   └── video_original.mp4
│   ├── vertical/
│   │   └── video_vertical.mp4 (1080x1920)
│   ├── horizontal/
│   │   └── video_horizontal.mp4 (1920x1080)
│   ├── square/
│   │   └── video_square.mp4 (1080x1080)
│   ├── [VIDEO_NAME]_STRATEGY.json
│   │   ├── scripts para cada plataforma
│   │   ├── captions variations
│   │   ├── hashtags strategy
│   │   └── engagement tactics
│   └── clips/
│       ├── [VIDEO_NAME]_clip_15s.mp4
│       ├── [VIDEO_NAME]_clip_30s.mp4
│       └── [VIDEO_NAME]_clip_60s.mp4
```

---

## 🎬 EJEMPLO: DRONE VIDEO

Mira cómo está organizado el drone video:

**Carpeta:** `ugc-content/videos/`
- `ce2da520-DJI_20000401210240_0103_D.mp4` ← Video original
- `DRONE_DJI_STRATEGY.json` ← Toda la estrategia (5 scripts diferentes)
- `README.md` ← Guía de uso

**En el JSON tienes:**
- ✅ 5 scripts diferentes (TikTok, Reels, Shorts, Feed, Comparison)
- ✅ Captions para high engagement, high reach, branded conversion
- ✅ Hashtag strategy (tier 1, 2, 3)
- ✅ Posting schedule suggestions
- ✅ Export specs por formato
- ✅ Engagement tactics y performance tips

---

## 🎯 QUÉ DEBERÍAS INCLUIR AL SUBIR

Cuando subas un video nuevo, cuéntame:

1. **Tipo de video**
   - Travel/vlog
   - Tutorial/educativo
   - Lifestyle/day-in-life
   - Event/party
   - Product showcase
   - Otro (especificar)

2. **Duración aproximada**
   - Para saber si puede ir en TikTok (max 10 min)
   - O si es más para Reels (max 90 sec)

3. **Contexto/ubicación** (opcional)
   - "Marruecos, mercado local"
   - "Coworking Barcelona"
   - Etc.

4. **Objetivos** (opcional)
   - Alto engagement
   - Mucho alcance
   - Conversión/venta
   - Brand awareness

---

## ⚡ WORKFLOW RÁPIDO

```
TÚ: Subes video
     ↓
YO: Proceso el video
     • Exporto 4 formatos diferentes
     • Creo 2-3 clips de diferentes duraciones
     • Genero scripts para 5+ plataformas
     • Creo captions variations
     • Organizo hashtag strategy
     ↓
RESULTADO: 
     • Carpeta lista en repos
     • JSON con toda la estrategia
     • Videos listos para publicar
     • Integrated en calendario
```

---

## 📊 EJEMPLO DE STRATEGY JSON

Cada video tendrá un JSON así:

```json
{
  "video_info": {
    "filename": "...",
    "type": "...",
    "duration": "...",
    "quality": "..."
  },
  "scripts_and_captions": [
    {
      "platform": "TikTok",
      "duration": "15 seconds",
      "hook": "...",
      "caption": "...",
      "hashtags": "..."
    },
    // + más scripts para otras plataformas
  ],
  "hashtag_strategy": {
    "tier_1_reach": {...},
    "tier_2_engagement": {...},
    "tier_3_niche": {...}
  },
  "engagement_tactics": {...},
  "posting_schedule": {...}
}
```

---

## 🔄 INTEGRACIÓN CON FOTOS

Los videos se organizan **junto con las fotos**:

```
ugc-content/
├── README.md (Guía general)
├── PUBLICAR.json (Master index)
├── semana-1/ (Fotos organizadas por semana)
├── semana-2/
├── videos/ (Videos organizados por tipo)
│   ├── DRONE_DJI_STRATEGY.json
│   ├── ce2da520-DJI_20000401210240_0103_D.mp4
│   ├── [NUEVO_VIDEO]/
│   └── [OTRO_VIDEO]/
└── CALENDARIO_COMPLETO.json (Photos + Videos)
```

---

## ✅ CHECKLIST ANTES DE SUBIR

- [ ] Tengo el video en mi computadora
- [ ] Sé el tipo de video (travel, vlog, etc.)
- [ ] Tengo claro el contexto (si es importante)
- [ ] Sé qué objetivo tiene (engagement, reach, conversion)

---

## 💬 EJEMPLOS DE QUÉ DECIR

**Opción 1 - Simple:**
> "Sube este video y procésalo [adjunto]"

**Opción 2 - Con contexto:**
> "Tengo un video de aventura en Marruecos, hazlo para TikTok y Reels"

**Opción 3 - Con objetivos:**
> "Video de la playa (30 seg), alto engagement, para historias y Reels. Es travel content"

---

## 🎬 PRÓXIMOS PASOS

1. ✅ **Tengo el drone video** - Listo con scripts y captions
2. 🚀 **Súbete los nuevos videos** - Cuando los tengas listos
3. 📊 **Los proceso automáticamente** - Múltiples formatos y estrategia
4. 📅 **Los integro en el calendario** - Scheduling optimizado
5. 📱 **Publicación coordenada** - Fotos + Videos = Contenido unificado

---

**¿Listo? Súbeme los videos cuando quieras! 🚀**
