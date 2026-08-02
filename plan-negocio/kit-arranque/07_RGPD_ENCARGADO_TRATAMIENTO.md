# RGPD: contrato de encargado de tratamiento y registro de actividades

> **Plantillas, no documentos definitivos.** El contrato de encargado de tratamiento es una obligación legal con sanciones reales detrás. **Revísalo con un profesional antes de usarlo.** Aquí tienes una base sólida y las explicaciones para que entiendas qué estás firmando.

---

## Por qué esto te afecta (y por qué mucha gente lo ignora)

Tu negocio tiene **dos condiciones distintas** frente al RGPD, y confundirlas es el error más caro del sector:

### 1. Eres RESPONSABLE de tus propios datos

Los de tus clientes, proveedores y contactos comerciales. Tus obligaciones:

- Llevar un **registro de actividades de tratamiento** (plantilla más abajo)
- Informar de para qué usas los datos y con qué base jurídica
- Atender los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad
- Aplicar medidas de seguridad proporcionadas

### 2. Eres ENCARGADA del tratamiento de los datos de tus clientes

En el momento en que gestionas la web de un cliente, tocas los datos de **sus** clientes: formularios de contacto, pedidos de la tienda online, suscriptores del boletín.

**Eso exige un contrato firmado con CADA cliente** (artículo 28 del RGPD). No es opcional y no vale un párrafo en el presupuesto.

Y hay más: tú a su vez contratas a terceros (hosting, herramientas de correo, pasarelas de pago). Esos son **subencargados**, y necesitas autorización del cliente para usarlos.

> **Esto es también un argumento de venta.** Buena parte de las webs de León no cumple nada de esto, y la AEPD sanciona. Cuando hagas el diagnóstico de 15 minutos, míralo: es un hallazgo que asusta y que vende.

---

## A) Contrato de encargado de tratamiento

*Se firma como anexo del contrato de servicios, con cada cliente cuyos datos vayas a tratar.*

### CONTRATO DE ENCARGADO DE TRATAMIENTO

En León, a `[FECHA]`

**RESPONSABLE DEL TRATAMIENTO:** `[NOMBRE / RAZÓN SOCIAL DEL CLIENTE]`, NIF `[NIF]`, domicilio `[DIRECCIÓN]`

**ENCARGADA DEL TRATAMIENTO:** `[TU NOMBRE]`, NIF `[NIF]`, domicilio `[DIRECCIÓN]`

#### 1. Objeto

La ENCARGADA tratará por cuenta del RESPONSABLE los datos personales necesarios para prestar los servicios de `[diseño, desarrollo y/o mantenimiento del sitio web]`.

#### 2. Detalle del tratamiento

| | |
|---|---|
| **Finalidad** | Desarrollo, alojamiento y mantenimiento del sitio web del RESPONSABLE |
| **Duración** | La del contrato principal de servicios |
| **Naturaleza** | Acceso, conservación, copia de seguridad y, en su caso, migración |
| **Tipo de datos** | Identificativos y de contacto de los usuarios del sitio: nombre, correo, teléfono, dirección postal si hay comercio electrónico |
| **Categorías de interesados** | Usuarios del sitio web, clientes y contactos del RESPONSABLE |
| **Categorías especiales** | `[NO / SÍ — especificar]`. Si hay datos de salud, ideología, biometría u otros del art. 9, **avísalo: cambian las medidas exigibles** |

#### 3. Obligaciones de la ENCARGADA

1. Tratar los datos **únicamente siguiendo instrucciones documentadas** del RESPONSABLE.
2. **No usar los datos para fin propio alguno** ni cederlos a terceros, salvo obligación legal.
3. Garantizar que quien acceda a los datos se compromete a la **confidencialidad**.
4. Aplicar las **medidas de seguridad** del artículo 32 del RGPD, detalladas en el punto 6.
5. No subcontratar sin autorización, salvo los subencargados ya autorizados en el punto 5.
6. Asistir al RESPONSABLE en la atención de los **derechos de los interesados**.
7. **Notificar cualquier brecha de seguridad sin dilación indebida y, como máximo, en 24 horas** desde que tenga conocimiento, para que el RESPONSABLE pueda notificar a la AEPD en el plazo legal de 72 horas.
8. A la finalización del contrato, **devolver o suprimir** los datos según elija el RESPONSABLE, salvo obligación legal de conservación.
9. Poner a disposición del RESPONSABLE la información necesaria para demostrar el cumplimiento.

#### 4. Obligaciones del RESPONSABLE

1. Entregar a la ENCARGADA únicamente datos **obtenidos lícitamente** y con base jurídica válida.
2. Informar a los interesados y recabar los consentimientos que procedan.
3. Realizar, cuando proceda, la evaluación de impacto.

#### 5. Subencargados autorizados

El RESPONSABLE autoriza expresamente a la ENCARGADA a servirse de:

| Servicio | Proveedor | Finalidad | Ubicación |
|---|---|---|---|
| Alojamiento web | `[p. ej. Webempresa]` | Hosting del sitio | UE |
| Copias de seguridad | `[proveedor]` | Respaldo | UE |
| Correo transaccional | `[proveedor]` | Envío de formularios | `[UE / EEUU con garantías]` |
| Pasarela de pago | `[proveedor]` | Cobros de la tienda | `[…]` |

La ENCARGADA comunicará cualquier cambio con **30 días** de antelación, pudiendo el RESPONSABLE oponerse.

> **Rellena esta tabla de verdad.** Es donde más se falla, y basta con listar lo que ya usas. Prioriza proveedores con servidores en la UE: te ahorra la justificación de las transferencias internacionales.

#### 6. Medidas de seguridad

La ENCARGADA aplicará, como mínimo:

- Acceso mediante credenciales individuales y **doble factor de autenticación**
- **Gestor de contraseñas**; nunca contraseñas compartidas por correo o mensajería
- **Cifrado del disco** del equipo de trabajo
- Copias de seguridad periódicas y verificadas, con restauración probada
- Actualizaciones de seguridad de plataforma y componentes
- Certificado TLS (HTTPS) en todos los sitios
- Cuenta de usuario del equipo **separada del uso doméstico y familiar**
- Registro de accesos a los sistemas del RESPONSABLE

*Este último punto importa especialmente al trabajar desde casa: el ordenador donde tratas datos de clientes no puede ser el que usa el resto de la familia con la misma sesión.*

#### 7. Responsabilidad

Cada parte responde de los incumplimientos que le sean imputables, conforme al artículo 82 del RGPD.

<br>

| EL RESPONSABLE | LA ENCARGADA |
|---|---|
| <br><br>Fdo.: | <br><br>Fdo.: |

---

## B) Tu registro de actividades de tratamiento

*Documento interno tuyo. No se presenta en ningún sitio, pero la AEPD puede pedírtelo. Mantenlo actualizado.*

**Responsable:** `[TU NOMBRE]` · NIF `[NIF]` · `[DIRECCIÓN]` · `[EMAIL]`

### Actividad 1 — Clientes y facturación

| | |
|---|---|
| Finalidad | Gestión de la relación comercial, prestación del servicio y facturación |
| Base jurídica | Ejecución de contrato (art. 6.1.b) y obligación legal en lo fiscal (art. 6.1.c) |
| Interesados | Clientes y personas de contacto |
| Datos | Identificativos, de contacto y de facturación |
| Cesiones | Asesoría fiscal, AEAT, entidad bancaria |
| Transferencias internacionales | No |
| Plazo de conservación | 4 años a efectos fiscales; 6 a efectos mercantiles |
| Medidas de seguridad | Las del punto 6 anterior |

### Actividad 2 — Contactos comerciales y prospección

| | |
|---|---|
| Finalidad | Prospección comercial de negocios |
| Base jurídica | Interés legítimo (art. 6.1.f) para contacto B2B |
| Interesados | Personas de contacto de empresas y autónomos |
| Datos | Nombre, cargo, empresa, teléfono y correo profesionales |
| Plazo de conservación | Hasta que la persona se oponga, o 2 años sin interacción |

> **Al prospectar en frío**: informa en el primer contacto de dónde has obtenido sus datos y de su derecho a oponerse. Es obligación del artículo 14 del RGPD y evita el 90 % de los problemas.

### Actividad 3 — Usuarios de la web propia

| | |
|---|---|
| Finalidad | Atender consultas del formulario de contacto |
| Base jurídica | Consentimiento (art. 6.1.a) |
| Datos | Nombre, correo, teléfono, mensaje |
| Plazo de conservación | 1 año desde el último contacto |

---

## C) Checklist de RGPD por cada web que entregues

Úsalo como control de calidad antes de publicar. También es un buen guion para el diagnóstico de 15 minutos:

- [ ] **Aviso legal** con los datos del titular (art. 10 de la LSSI)
- [ ] **Política de privacidad** con finalidad, base jurídica, plazos, destinatarios y derechos
- [ ] **Política de cookies** con banner de consentimiento **válido**: opción de rechazar tan visible como la de aceptar, sin casillas premarcadas y sin muro de cookies
- [ ] **Las cookies no analíticas no se cargan** hasta que el usuario acepta
- [ ] Formularios con **información en capas** y casilla de aceptación **sin premarcar**
- [ ] Certificado **HTTPS** activo y redirección forzada
- [ ] Formularios que **no envían datos por correo sin cifrar** a cuentas personales
- [ ] Si hay tienda: condiciones de venta y **derecho de desistimiento de 14 días**
- [ ] **Contrato de encargado de tratamiento firmado** con el cliente
- [ ] Copias de seguridad configuradas y **restauración probada**
