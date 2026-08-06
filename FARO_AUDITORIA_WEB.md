# FARO — Auditoría de web

**Fecha:** agosto 2026
**Material auditado:** capturas de Inicio, Servicios, Precios, Quiénes somos y Contacto.
**Método:** tres auditorías independientes (UX/CRO · dueño de pyme · agencia competidora) y cruce final.

---

## 0. Aviso metodológico — léelo antes que nada

Tres cosas antes de empezar, porque cambian cómo hay que leer el resto.

**0.1. La web de las capturas no está en este repositorio, y lo que sí está es material muerto.** El `index.html` de las dos ramas de `mariaperezart.github.io` corresponde a una dirección anterior y ya descartada del proyecto, con otra navegación y otro H1. Las capturas —el estudio de diseño web y marca para Ponferrada, El Bierzo y León— son el negocio real, y no están versionadas aquí.

Eso importa por un motivo muy concreto y urgente: **puede que lo que está publicado en Internet ahora mismo no sea la web que me has enseñado.** Si alguien busca FARO y aterriza en la versión antigua, ese contacto está perdido, y ni te enteras.

No he podido comprobar cuál de las dos está en producción: la petición a `mariaperezart.github.io` sale bloqueada por el proxy de este entorno. **Ábrela tú hoy mismo en el móvil y comprueba qué se ve.** Si sale la versión vieja, eso pasa por delante de todo lo demás de esta auditoría.

Y aparte: el sitio bueno no está en control de versiones. Si se pierde el ordenador donde está, se pierde la web.

**0.2. No me has dado todas las páginas.** Faltan: FAQ, Cómo trabajamos, Diagnóstico, las cinco páginas de detalle de servicio (los cinco «Ver detalle» de Precios y los cinco «Ver en detalle →» de Servicios apuntan a algún sitio), Gracias y las tres legales. Todo lo que digo sobre ellas es inferencia y lo marco como tal. Si alguna de esas diez páginas no existe, tienes diez enlaces rotos en las dos páginas donde el usuario está más cerca de comprar.

**0.3. Los datos técnicos que doy (contrastes, comportamiento en móvil) salen del CSS de este repositorio**, que comparte tokens y componentes con lo que se ve en las capturas (`#1B3A4B`, `#E8A33D`, `#F4F1EA`, Fraunces/Inter, `--radius-card: 8px`). Si la versión de las capturas usa otra hoja de estilos, verifica esos puntos concretos. Los marco con ⚙️.

---

# AUDITORÍA A — Director de UX + Head of Conversion

## A1. Primera impresión (5 segundos)

Lo que un usuario entiende en cinco segundos, mirando solo lo que entra por encima del pliegue en la home:

| Pregunta | Respuesta real |
|---|---|
| ¿Qué vende? | Webs. Lo dice el eyebrow, no el H1. El H1 habla de Google. |
| ¿A quién ayuda? | «Negocios de Ponferrada, El Bierzo y León» — pero eso está en la línea 3 del párrafo, no en el titular. |
| ¿Qué genera confianza? | Los tres ticks: presupuesto cerrado, van a verte, el dominio es tuyo. El diagrama de tres pasos a la derecha. |
| ¿Qué genera desconfianza? | Que no se vea ni un solo trabajo. Que no haya teléfono. Que no haya nadie. |
| ¿Qué parece caro? | Nada. Y eso es un problema, no un elogio. |
| ¿Qué parece barato? | El vacío. Cero imágenes, cero fotos, cero capturas de webs. Una web de diseñador sin diseño que enseñar parece un plantilla. |
| ¿Qué parece improvisado? | El dominio `github.io`, si es el que está publicado. Y `hola@faro.es`, que no coincide con él. |
| ¿Qué parece profesional? | La tipografía (Fraunces para titulares es una decisión de alguien con criterio), la paleta y la disciplina de no gritar. |

**El veredicto de los cinco segundos:** el usuario entiende *qué* vendes, no entiende *por qué tú*. Y sobre todo: **no ve ni una sola prueba de que sepas hacerlo.** Una web de un estudio de diseño sin una sola imagen de una web hecha por ellos es el equivalente a un restaurante con las ventanas tapadas. La gente no entra.

Esto es, con diferencia, el problema número uno de todo el sitio, y lo van a repetir las tres auditorías.

## A2. Propuesta de valor y hero

**H1 actual:** «Tu próximo cliente te está buscando en Google ahora mismo.»

Por qué no funciona, punto por punto:

1. **No es tuyo.** Esa frase, o una variante a un sinónimo de distancia, la usan cientos de agencias españolas. Es la frase por defecto del sector. Si la copias y la pegas en Google entrecomillada, sales tú y sale medio mercado. Un titular que podría estar en la web de tu competidor no es un titular, es relleno.
2. **Habla del problema, no de ti.** Está bien empezar por el dolor cuando el dolor es desconocido. Este no lo es: cualquier dueño de negocio en 2026 ya sabe que sus clientes están en Google. Le estás gastando la línea más cara de la web en decirle algo que ya sabe.
3. **«Ahora mismo» es una promesa que no puedes sostener.** No sabes si alguien está buscando su servicio en ese instante. Es puffery. Y está a dos pantallas de un bloque titulado «No prometemos lo que no podemos cumplir». Esa incoherencia la nota el lector aunque no sepa señalarla.
4. **No dice dónde estás.** El ancla local es lo único que un estudio de El Bierzo tiene contra una agencia de Madrid o un freelance de Buenos Aires a mitad de precio. Está en el eyebrow (13 px, mayúsculas, gris) y en la tercera línea del párrafo. Debería estar en el H1.
5. **Entierra la diferenciación real.** Presupuesto cerrado por escrito, vamos a verte en persona, el dominio y los accesos son tuyos. Esos tres ticks son lo mejor de la web y están en 14 px debajo de los botones, donde el 60 % de los usuarios no llega antes de decidir si se queda.

**Lo que falta en el hero:** un precio, una prueba, un teléfono y una cara.

### Reescritura del hero

**Versión A — recomendada. Ángulo: transparencia de precio + proximidad.**

> **Eyebrow:** DISEÑO WEB Y MARCA · PONFERRADA, EL BIERZO Y LEÓN
>
> **H1:** Una web desde 1.200 €, con el precio y la fecha por escrito antes de empezar.
>
> **Párrafo:** Vamos a tu negocio, miramos lo que ya tienes y te decimos qué arreglaríamos primero y por qué. El informe te lo quedas, nos contrates o no. Si seguimos, el dominio y las contraseñas van a tu nombre desde el primer día — no al nuestro.
>
> **CTA 1:** Pide tu diagnóstico gratis (15 min, en tu negocio)
> **CTA 2:** Ver los cinco precios
>
> **Debajo:** O llámanos al 6XX XXX XXX. Contesta la persona que hará tu web.
>
> **Ticks:** ✓ Precio cerrado por escrito ✓ Vamos a verte, no llamamos ✓ Dominio y accesos a tu nombre ✓ Contestamos en 24 h

Por qué es mejor: pone el número en el titular. Publicar el precio en el H1 es una decisión que casi ninguna agencia toma, y en el mercado local funciona como filtro y como imán a la vez — espanta al que busca 300 € y tranquiliza al que teme que le claven 6.000. Es específico, es verificable y es tuyo. Además convierte tu mejor argumento («por escrito antes de empezar») en la promesa principal en lugar de en una nota al pie.

**Versión B — ángulo proximidad, si quieres proteger el margen y no liderar con precio.**

> **H1:** El único estudio de diseño web que va a ir a tu negocio antes de cobrarte nada.
>
> **Párrafo:** Quince minutos, en tu local, mirando tu web contigo. Salimos de ahí con un informe de una página: los tres fallos que más te están costando y qué haríamos con cada uno. Te lo quedas aunque no nos contrates. Trabajamos en Ponferrada, El Bierzo y León.

Por qué funciona: es la única de tus tres ventajas que un competidor remoto **no puede copiar**. Precio cerrado lo copia cualquiera en una tarde; los accesos a tu nombre también. Ir en persona a Bembibre, no.

**Versión C — si insistes en el ángulo del miedo, al menos hazlo específico.**

> **H1:** Escribe en Google tu servicio y «Ponferrada». ¿Sales tú, o salen ellos?

Por qué es mejor que la actual: convierte una afirmación genérica en una instrucción que el lector puede ejecutar en cinco segundos desde el móvil. Y el que la ejecuta y no se encuentra ya está medio vendido. Pero sigue siendo un hero de agencia de SEO, no de estudio de diseño, y no arregla nada de lo demás.

**Mi recomendación: A para la home, y B como titular de Quiénes somos.**

## A3. Copy, sección por sección

### Home · «Tres formas de perder un cliente que ya te estaba buscando»

**Qué intenta:** activar el dolor con escenarios reconocibles. **Lo consigue** — es la mejor sección de la web. Los escenarios son concretos, no abstractos, y cualquiera de tus clientes se reconoce en al menos uno.

Dónde pierde fuerza:

- *«Lo probamos en casi todos los diagnósticos que hacemos, y falla más veces de las que parece.»* → **Implica un volumen de diagnósticos que no tienes.** Dos páginas más allá dices «FARO acaba de empezar». Es la misma contradicción que te voy a marcar tres veces más. Además, «más veces de las que parece» es una cifra que no das: si es un dato, dilo («de las siete webs que hemos revisado, tres tenían el formulario roto»); si no lo es, quítalo.
- *«un gestor de contenidos de hace tres versiones»* → jerga. Un electricista no sabe qué es un gestor de contenidos. Di «un WordPress que nadie actualiza desde 2021».
- *«Es la vía de entrada más común para que te tumben la web.»* → «tumbar la web» es ambiguo: ¿se cae, o la hackean? Di lo que quieres decir.
- Los tres enlaces dicen lo mismo: «Cómo lo resolvemos →». Tres enlaces idénticos en fila son tres enlaces que el usuario lee como uno. Diferéncialos: «Cómo arreglamos tu ficha de Google →», «Cómo probamos que el formulario llega →».

### Home · «Sin sorpresas en el precio ni en la fecha»

**Sobra entera.** Es literalmente el mismo contenido que el diagrama de tres pasos del hero, 600 píxeles más abajo. Diagnóstico → Presupuesto cerrado → Entrega, dicho dos veces en la misma página. El usuario que llega aquí ya lo leyó. Elige uno de los dos: mi recomendación es **quitar el diagrama del hero** (que está compitiendo con el H1 por la atención en la zona más valiosa de la web) y quedarte con esta sección, que además enlaza al proceso completo.

### Home · «No prometemos lo que no podemos cumplir»

**Estratégicamente, lo mejor que hay en toda la web.** Es honestidad de alcance ejecutada bien, es GOV.UK puro, y es lo único que te separa de verdad del ruido. Dos problemas de ejecución:

- **Está mal colocada.** Va justo después de los precios, o sea, en el momento exacto en el que el usuario está evaluando si le encaja el número. Le das cuatro negativas seguidas en el peor instante posible. Súbela a antes de precios, o bájala a después de «Quiénes somos».
- **Es un muro de texto.** Cuatro negaciones seguidas en un párrafo corrido de siete líneas. Nadie lo lee entero. Conviértelo en lista:

> **Lo que FARO no hace**
> - No llevamos campañas de publicidad de pago.
> - No publicamos tus redes sociales.
> - No hacemos aplicaciones móviles.
> - No te vamos a poner el primero en España en una búsqueda competida. En Ponferrada, probablemente sí.
>
> Hacemos una cosa: que tu negocio de aquí tenga una web que se encuentre, funcione en el móvil y no se quede abandonada al mes siguiente.

Ese último matiz («en Ponferrada, probablemente sí») convierte una lista de negativas en un argumento de venta sin romper la honestidad. Es la clase de frase que hace que alguien te contrate.

### Home · «Hablas siempre con quien hace el trabajo»

**Qué intenta:** vender la cercanía. **No lo consigue del todo**, por una razón sencilla: lo dice sin enseñar a nadie.

- *«Sin comerciales, sin gestor de cuentas, sin intermediarios»* → tres negativas seguidas de un marco mental que tu cliente no tiene. Un dueño de taller en Camponaraya no ha tenido nunca un «gestor de cuentas» y no sabe por qué debería alegrarse de no tener uno. Estás argumentando contra las agencias grandes delante de alguien que nunca ha hablado con una.
- Reescribe en positivo y en concreto: **«Cuando llames, te coge el teléfono la persona que hizo tu web. Somos dos: [Nombre] va a verte y [Nombre] la construye.»** Con dos fotos.
- El botón dice «Conócenos». Es el CTA más débil de la página y compite con el CTA principal. O lo conviertes en enlace de texto, o lo quitas.

### Home · CTA final «Empecemos por mirar lo que ya tienes»

El titular es vago. «Lo que ya tienes» puede ser cualquier cosa. Y este bloque, **palabra por palabra, aparece idéntico en Home, Servicios, Precios y Quiénes somos.** Cuatro veces el mismo párrafo. El efecto no es refuerzo, es ceguera de banner: el usuario aprende a saltárselo en la segunda página y ya no lo ve nunca más. Varíalo por página:

- Home: «Quince minutos en tu negocio y sabrás qué te está fallando.»
- Precios: «¿No sabes cuál de los cinco te toca? Para eso está el diagnóstico.»
- Servicios: «Te decimos cuál necesitas. A veces la respuesta es ninguno.»
- Quiénes somos: «Ven, míranos trabajar quince minutos y decide.»

### Servicios

**Error factual en la primera línea.** Dice: *«Cinco cosas... Dos son proyectos con principio y final; tres son cuotas mensuales.»* Debajo hay **tres proyectos** (Web esencial 1.200 €, Web profesional desde 2.900 €, Identidad visual 950 €) y **dos cuotas** (Mantenimiento 80 €/mes, SEO local 250 €/mes). Los números están invertidos.

Es un error de dos palabras. Pero está en la primera frase de la página de servicios, en una web cuyo argumento central es «somos los que no te engañan con los números». Alguien que lo pilla ya no se cree lo demás. **Arréglalo hoy.**

**Contradicción, misma frase:** *«cuotas mensuales que puedes dejar cuando quieras avisando con un mes»*. La página de Precios dice, para esos mismos dos productos: **«Permanencia mínima 12 meses»** y **«Permanencia mínima 6 meses»**. Las dos afirmaciones no pueden ser ciertas. Un cliente que compare las dos páginas —y comparar precios es exactamente lo que hace la gente antes de contratar— encuentra letra pequeña en la web del estudio que presume de no tener letra pequeña. **Esto es más grave que un error de copy: es una grieta en la única cosa que estás vendiendo.**

Elige una. Mi recomendación: **quita la permanencia**. Un compromiso de 960 € en mantenimiento o de 1.500 € en SEO es la principal objeción de compra de un negocio pequeño, y la permanencia es justo lo que tus competidores sí tienen. Renunciar a ella es diferenciación gratis. Si tu modelo financiero no aguanta sin permanencia, entonces dilo en grande y explica por qué («la ficha de Google no da resultados en menos de seis meses; cobrar tres sería venderte humo»), que es un argumento razonable y honesto.

### Precios

- *«Lo más pedido»* en la tarjeta de 2.900 €. **No tienes clientes.** Lo dices tú en Quiénes somos: «FARO acaba de empezar. No vamos a inventarnos una lista de clientes». Y aquí te inventas una estadística de popularidad. Es la contradicción más cara de la web, porque está en la página donde el usuario está decidiendo, y porque desmonta la única credencial que tienes: que no mientes. Cámbialo por **«Recomendado si vendes o reservas online»**, que dice lo mismo comercialmente y es verdad.
- *«desde 2.900 €»* — y luego reconocéis en Servicios que «el "desde" es deliberado». Un «desde» en una web que se vende por publicar los precios es la excepción que anula la regla. Sustitúyelo por un **rango con dos ejemplos reales**: «Entre 2.900 € y 4.500 €. Una tienda de 40 productos con pasarela de pago: 3.400 €. Un restaurante con reservas y carta en tres idiomas: 3.100 €.» Los rangos con ejemplos convierten mejor que los «desde», porque el «desde» se lee como cebo.
- *«Si el precio no te encaja, dilo»* — el bloque es de una honestidad excelente y **contiene un error táctico grave**: menciona «una web de 700 €». Acabas de anclar a la baja tu propio producto de 1.200 €. Todo el que lea ese párrafo va a pedir la de 700. Di lo mismo sin el número: «Ajustamos el alcance o lo hacemos por fases. Preferimos hacerte algo más pequeño que puedas pagar entero que algo grande que se quede a medias.»
- **Falta el coste del primer año.** 1.200 € + 12 × 80 € = **2.160 €**. Un negocio pequeño piensa en caja mensual, no en precio de proyecto. Si no se lo pones tú, se lo calcula él en la cocina de su casa y el número le sorprende. Póntelo tú: da menos miedo un número que tú controlas que uno que descubre solo.
- **Falta el coste de dominio y alojamiento.** Vendes que «el dominio y el alojamiento se contratan a tu nombre». Perfecto. ¿Y cuánto cuestan al año? ¿Los pago yo aparte? Es la primera pregunta que hace cualquiera que ya ha tenido una web. La página no la responde.
- **Faltan facilidades de pago.** «Mitad y mitad» significa 600 € por adelantado para la web más barata. Para un bar de pueblo, eso es la objeción. Tres pagos en lugar de dos, o el segundo a 30 días, mueve más ventas que cualquier cambio de copy de esta lista.
- **Cinco tarjetas de precio + tres de condiciones + un banner + un CTA = diez bloques con borde.** Fatiga de tarjeta. Las condiciones no necesitan ser tarjetas; son tres líneas de texto.

### Quiénes somos

- *«Somos dos: uno va a verte y el otro construye.»* **La mejor frase de la web.** Corta, concreta, humana, imposible de decir para una agencia de veinte personas. Debería estar en la home.
- Y a continuación **no aparece ninguno de los dos.** Ni nombres, ni caras, ni qué hacían antes. Una página entera cuyo argumento es «hablas con las personas» y en la que las personas no existen. El lector no concluye «qué discretos»; concluye «¿por qué se esconden?».
- *«Por qué se llama FARO»* aparece **dos veces**: en esta página y, casi palabra por palabra, en la home. Elige una. La metáfora es buena, pero es un argumento de marca, no de venta: ocupa el primer bloque de la página y no responde a ninguna pregunta que el cliente se esté haciendo. Bájala.
- *«Somos nuevos, y lo decimos»* — la decisión es correcta y valiente, y a la vez está a medio ejecutar. Decir «no tenemos clientes» sin decir **qué sí tienes** deja al lector con la peor interpretación posible: que nunca habéis hecho una web. Casi seguro que eso no es cierto. Todo el mundo tiene un pasado: años de oficio, trabajos por cuenta ajena, proyectos propios. «Somos nuevos como FARO. No como diseñadores: [Nombre] lleva ocho años haciendo esto para X.» Eso es igual de honesto y vale diez veces más.
- *«no podemos llevar veinte proyectos a la vez... cuando estamos llenos, lo decimos»* — buenísimo, y desaprovechado por abstracto. **Hazlo un número:** «Aceptamos tres proyectos al mes. En septiembre quedan dos.» Escasez verificable, honesta y actualizable. Es el único mecanismo de urgencia legítimo que tiene un estudio pequeño, y no lo estás usando.

### Contacto

- *«Hablemos»* como H1: simpático y **cero útil**. No confirma al usuario que está donde quería, y no dice nada a Google. Usa «Contacto» como H1 (o «Contacto — diseño web en Ponferrada») y deja «Hablemos» de subtítulo.
- «Te contestamos en menos de 24 horas laborables» aparece **dos veces** en la misma pantalla: en el párrafo de intro y en el punto 1 de la tarjeta. Quita una.
- *«No hay llamadas de seguimiento insistentes. Si no nos dices nada, no volvemos a escribirte.»* — excelente, desactiva el miedo real (que le persigan). Es la mejor frase de la página. Súbela: ahora está enterrada al final de una tarjeta.
- «Qué pasa cuando escribes» es un acierto de UX: gestiona la expectativa post-envío, que es donde más gente abandona. Mantenlo.

## A4. Jerarquía visual

**Dónde se va la vista primero:** al botón ámbar de la cabecera. Es el único elemento saturado sobre un fondo crema en toda la parte superior, y está en la esquina superior derecha. **Dónde debería ir:** al H1. Ahora mismo el elemento más llamativo de tu web es un botón que dice «Diagnóstico gratis» antes de que el usuario sepa qué es FARO ni qué es un diagnóstico.

Problemas concretos:

1. **Ámbar sobreexpuesto.** El acento se usa para: el CTA de cabecera, el CTA primario del hero, la insignia «Lo más pedido», las flechas del diagrama, el borde del banner de precios, el borde del banner de servicios, el punto del logo del pie y todos los CTA de cierre. Cuando el color de énfasis está en ocho sitios, no enfatiza nada. Redúcelo a **una cosa por pantalla**.
2. **Todo es una tarjeta.** Blanco, borde `#E4DFD3`, radio 8 px, sombra suave. Home: 3 + 3 + 3. Servicios: 6. Precios: 5 + 3. Quiénes somos: 2 + 3 + 1. El resultado es una retícula uniforme sin relieve: el ojo no encuentra un punto de entrada porque todos los bloques pesan lo mismo. **Rompe el ritmo:** contenido más importante sin tarjeta y a mayor tamaño, contenido secundario en tarjeta.
3. **El diagrama del hero compite con el H1.** Tres tarjetas apiladas con sombra a la derecha del titular, en la zona de mayor valor. Y su contenido está repetido más abajo. Quítalo y deja el hero respirar, o sustitúyelo por **la captura de una web que hayáis hecho** — que es lo que el usuario ha venido a ver.
4. **Los eyebrows son ruido.** «¿TE SUENA ESTO?», «CÓMO TRABAJAMOS», «PRECIOS», «QUIÉNES SOMOS», «CÓMO LO HACEMOS», «DÓNDE TRABAJAMOS». Mayúsculas, 13 px, marrón dorado, encima de cada H2. Aportan casi nada y añaden una línea de altura y una jerarquía extra a cada sección. Quita al menos la mitad.
5. **Contacto está desequilibrada.** El formulario ocupa una columna estrecha ⚙️ (`form { max-width: 480px }`) alineada a la izquierda; la columna derecha se queda vacía a partir de la mitad de la página, con casi 700 px de aire muerto junto a los últimos cuatro campos del formulario. Rellénala con lo que falta: teléfono, WhatsApp, horario, zona, mapa.
6. **Precios: el bloque «Condiciones, en tres líneas» ocupa tres tarjetas grandes** para lo que son tres frases. Está robando espacio y atención a las tarjetas de precio, que es lo que la gente ha venido a leer.

**Qué bloques deberían subir:** los ticks de confianza del hero (o mejor, integrarlos en el párrafo). La escasez real («quedan dos plazas»). El teléfono. **Qué bloques deberían bajar o desaparecer:** el diagrama del hero, «Sin sorpresas en el precio ni en la fecha» (duplicado), «Por qué se llama FARO» en una de las dos páginas, el CTA de cierre repetido en cuatro páginas.

## A5. UX — el recorrido completo

**Llegada → hero.** Fricción inmediata: dos CTA con peso visual parecido («Pide tu diagnóstico gratuito» y «Ver precios»). El segundo se lleva a mucha gente, porque el precio es lo que todo el mundo quiere saber primero. No es malo — pero significa que **la página de Precios es tu verdadera landing** y no está construida como tal (no tiene el argumento de por qué tú, solo los números).

**Colisión de nombres, la fricción más cara del sitio.** Tienes dos cosas distintas llamadas casi igual:

- «Diagnóstico gratis» / «Pide tu diagnóstico gratuito (15 min)» = **una visita presencial de quince minutos** con informe escrito.
- «Hacer el autodiagnóstico» = **un test de ocho preguntas** que se responde solo, en un minuto, sin dar el correo.

Comparten palabra, están en la misma web y **el usuario no puede distinguirlos desde el botón**. Alguien que pulsa «Diagnóstico gratis» en la cabecera esperando un test rápido se encuentra un formulario para que vayan a su local; alguien que quería la visita hace el test y cree que ya está. Renombra el segundo: **«Test rápido: ¿cómo está tu web?» (1 minuto, sin dejar el correo)**.

**Etiquetas de CTA inconsistentes.** He contado seis formulaciones para la misma acción: «Diagnóstico gratis», «Pide tu diagnóstico gratuito (15 min)», «Pide tu diagnóstico gratuito», «Pide el diagnóstico», «Diagnóstico gratuito», «Pide tu diagnóstico gratuito». Cada variante obliga al usuario a reevaluar si es lo mismo que ya vio. Unifica a una sola etiqueta en todo el sitio.

**Servicios ↔ Precios: duplicidad estructural.** Las dos páginas listan los mismos cinco productos, con los mismos cinco precios, con enlaces a las mismas cinco páginas de detalle. La diferencia es que Servicios describe y Precios tabula — pero Servicios lleva el precio en cada tarjeta y Precios lleva descripción en cada tarjeta. **El usuario que las visita en orden siente que ha vuelto a la misma página.** Es la causa de abandono más previsible de la navegación.

**Fatiga de scroll.** Home: siete secciones y unos 3.000 px en escritorio. Precios: seis bloques. Servicios: cuatro. Y todas terminan con el mismo CTA idéntico. Un usuario que visita tres páginas lee ese párrafo tres veces.

**Problemas de accesibilidad** ⚙️:

- **El breadcrumb falla el contraste AA.** `rgba(32,38,43,0.6)` sobre crema `#F4F1EA` da **3,99:1**, por debajo del 4,5:1 exigido, a 13 px. Súbelo a opacidad 0,75 y a 14 px.
- **El indicador de foco de los campos es débil y provoca salto.** El CSS hace `outline: none` y cambia el borde de 1 px a 2 px al enfocar: eso elimina el indicador nativo, lo sustituye por un cambio de color de borde poco visible, y desplaza el contenido 1 px. Usa `outline: 2px solid` con `outline-offset`, sin tocar el borde.
- **El botón de menú móvil no comunica su estado.** Tiene `aria-label` pero no `aria-expanded`; un lector de pantalla no sabe si el menú está abierto o cerrado.
- **`scroll-behavior: smooth` sin excepción para `prefers-reduced-motion`.** Molesto para usuarios con sensibilidad al movimiento.
- El logo lleva `alt=""` (decorativo) junto al texto «FARO», lo cual es correcto. Bien.

**Problemas de móvil deducidos** ⚙️ — y este apartado importa más que ninguno, porque tu público (dueños de negocio local) entra desde el móvil entre cliente y cliente:

1. **El botón principal desaparece en móvil.** El CSS oculta `.nav__cta` por debajo de 900 px. Es decir: en la pantalla donde más falta hace un CTA siempre visible, tu CTA principal no existe. En su lugar hay una hamburguesa. **Esto solo puede estar costándote conversión de forma continua.** Solución: barra fija inferior en móvil con dos botones, «Llamar» y «Pedir diagnóstico».
2. **No hay tipografía responsive.** Los tamaños son fijos (h1 40 px, h2 32 px, h3 24 px) y las únicas media queries del sistema son de layout a 900 px. En un móvil de 360 px, un H1 de 40 px en Fraunces con el texto «Tu próximo cliente te está buscando en Google ahora mismo» ocupa siete u ocho líneas y se come la pantalla entera antes del párrafo. Usa `clamp()`.
3. **El diagrama del hero se apila debajo del texto** y añade tres tarjetas (~400 px) entre el CTA y el resto de la página.
4. **En Precios, cinco tarjetas en una columna** = una página muy larga sin poder comparar. Considera una tabla comparativa o un carrusel en móvil.
5. **La hamburguesa es un carácter «☰»**, no un icono: hereda la métrica de fuente y suele quedar con área táctil por debajo de los 44 px recomendados.

## A6. Arquitectura de la información

Estructura actual: Inicio · Servicios (+5 detalles) · Cómo trabajamos · Precios · Quiénes somos · FAQ · Contacto · Diagnóstico · Gracias · 3 legales. **Unas 18 páginas para un estudio de dos personas sin portfolio.** Es demasiada superficie para la poca sustancia que hay que repartir, y por eso hay tanta repetición: el contenido no da para llenarla, así que se repite entre páginas.

- **Fusiona Servicios y Precios en una sola página.** No hay dos intenciones distintas aquí; hay una: «qué hacéis y cuánto vale». Separarlas te obliga a duplicar los cinco productos y a duplicar los precios, y crea el bucle de navegación del punto A5.
- **Fusiona «Cómo trabajamos» dentro de Quiénes somos** o déjalo como una sección de la home con ancla. No aguanta como página propia.
- **Falta la página que decide la venta: Trabajos.** Aunque solo tenga tres piezas. Sin ella, todo lo demás da igual.
- **Faltan páginas de localidad**, que es el activo SEO obvio de un negocio local: `/diseno-web-ponferrada/`, `/diseno-web-leon/`, `/diseno-web-el-bierzo/`.
- **Faltan páginas de sector**, que es lo que convierte: `/web-para-restaurantes/`, `/web-para-talleres/`, `/web-para-clinicas/`. Un dueño de restaurante que ve «web para restaurantes» con un ejemplo de carta y reservas convierte al triple que uno que ve «Web esencial».
- **Falta el aviso legal con razón social y NIF.** Tienes privacidad, términos y cookies. En España, la LSSI-CE obliga a identificar al prestador del servicio (nombre o razón social, NIF, domicilio, contacto). Si eso no está en «Términos», te falta. Y para una web que vende confianza legal a otros negocios, es un fallo especialmente visible.

## A7. Confianza — las dos listas

**Genera confianza:**

1. Precios publicados, en la navegación principal, sin formulario de por medio. Es lo mejor que haces.
2. «Presupuesto cerrado por escrito» antes de empezar.
3. «El dominio y los accesos son tuyos.» Toca un trauma real: casi todo dueño de negocio conoce a alguien a quien el que le hizo la web desapareció con el dominio.
4. «No prometemos lo que no podemos cumplir», con una lista de negativas concretas.
5. «Te decimos que no» — renunciar a una venta es la señal de confianza más cara que existe.
6. «Somos nuevos, y lo decimos.»
7. «Te dejamos el informe aunque no nos contrates.»
8. «No hay llamadas de seguimiento insistentes.»
9. IVA explicado, IRPF mencionado, 50/50 explicado, «lo que no incluye, por escrito».
10. Ir en persona.
11. Tres páginas legales y checkbox de privacidad sin premarcar.
12. Tono sobrio, sin superlativos, sin «soluciones digitales 360».

Es una lista larga y buena. **Y aun así el balance neto es negativo**, por lo siguiente:

**Genera desconfianza:**

1. **Cero trabajos.** Un estudio de diseño que no enseña diseño. Insalvable.
2. **Cero personas.** Ni nombres ni caras, en una web cuyo argumento es «hablas con las personas».
3. **Cero teléfono.** Para un público local que llama, no tener número es una barrera y una señal.
4. **`hola@faro.es` sobre un sitio en `github.io`** ⚙️. Si el dominio no es tuyo, el correo no recibe nada y tienes un embudo muerto. Si es tuyo, ¿por qué la web no está ahí? En cualquiera de los dos casos, quien lo compruebe deja de creerte. Y en tu público hay gente que lo comprueba.
5. **«Lo más pedido»** junto a «no nos inventamos clientes». Mentira pequeña, daño grande.
6. **«Puedes dejarlo cuando quieras» vs «Permanencia mínima 12 meses».** Letra pequeña en la web anti-letra-pequeña.
7. **«Dos son proyectos, tres son cuotas»** cuando es al revés. Error numérico en la web de los que presumen de números claros.
8. **«Casi todos los diagnósticos que hacemos»** en un negocio que acaba de nacer.
9. Sin dirección física, sin horario, sin ficha de Google enlazada — para un estudio que vende fichas de Google.
10. Sin reseñas, sin casos, sin cifras, sin garantía escrita, sin plazo de respuesta contractual.

**¿Compensa el resto?** No. La honestidad es un multiplicador, no un sustituto: multiplica la confianza que ya tienes por haber demostrado algo. Multiplicada por cero, sigue siendo cero. Ahora mismo FARO pide que le crean **solo por cómo habla**. En una decisión de 1.200 € a 3.000 €, un dueño de negocio no compra tono.

**Qué hace un usuario antes de contactar** — esto es lo que va a pasar de verdad, en este orden:

1. Busca «FARO Ponferrada» en Google. Si no encuentra ficha, reseñas ni web propia, se enfría.
2. Entra en `faro.es` a ver quién sois. Si no sois vosotros, se acabó.
3. Busca vuestro Instagram o vuestro LinkedIn. Si no hay nada, o si hay tres publicaciones de hace un año, se acabó.
4. Busca «webs hechas por FARO». No encuentra ninguna.
5. Pide presupuesto a otros dos.
6. Elige al que le enseñó algo.

Los cinco primeros pasos no dependen de tu copy. Dependen de activos que hoy no existen.

## A8. Conversión por perfil

| Perfil | ¿Contacta? | Por qué | Objeción principal | Qué necesita leer |
|---|---|---|---|---|
| **Abogado** | Poco probable | Compra prestigio y discreción. Una web sin trabajos ni nombres le parece un riesgo reputacional. | «¿Va a parecer seria mi web?» | Un ejemplo de web de despacho. Confidencialidad. Textos legales bien hechos. |
| **Dentista / clínica** | **Sí, de los mejores** | Ticket alto, entiende el valor de captar pacientes y necesita cita online y reseñas. Paga sin regatear si ve criterio. | «¿Se integra con mi software de gestión?» «¿RGPD con datos de salud?» | Cita online, LOPD sanitaria, un ejemplo de web de clínica. |
| **Restaurante** | Posible, tirando a bajo | 1.200 € es mucho para un margen de restaurante que además ya está en TheFork y en Instagram. | «¿Para qué quiero web si reservan por Instagram?» | Carta actualizable por él mismo, reservas sin comisión, cálculo de lo que ahorra en comisiones. Ahí sí hay caso. |
| **Electricista / fontanero** | **Sí, y es el más fácil** | Vive de que le encuentren en el móvil. Le basta una web pequeña + ficha de Google. Tu producto de 1.200 € le encaja. | «¿No me vale con la ficha de Google?» | Sí te vale, y por eso lo primero que hacemos es esa. Precio bajo, plazo corto, sin cuota obligatoria. |
| **Taller** | Medio | Igual que el electricista pero con más competencia y más urgencia (cita previa, ITV, neumáticos). | «¿Cuánto tardo en recuperarlo?» | Dos clientes nuevos al mes lo pagan. Enséñalo con la cuenta hecha. |
| **Arquitecto** | **No** | Compra diseño. Va a juzgarte por tu portfolio y no tienes ninguno. Y tu web, siendo correcta, no es lo bastante bonita para venderle diseño a alguien que vende diseño. | «¿Estos saben de estética?» | Un portfolio visual fuerte. Sin eso, ni lo intentes. |
| **Clínica (estética, fisio, podología)** | Sí | Igual que dental, ticket algo menor, mismas necesidades: citas, reseñas, ficha de Google. | «¿Y quién me lleva las reseñas?» | Tu producto de SEO local encaja aquí perfecto — pero 250 €/mes con 6 meses de permanencia asusta. |

**Conclusión de conversión:** tus perfiles reales son **oficios (electricista, fontanero, taller) y salud de barrio (dental, fisio, podología)**. Los demás o no te van a comprar sin portfolio, o no tienen presupuesto. Y hoy la web les habla a todos igual, con las mismas cinco tarjetas. Eso es hablarle a nadie.

## A9. Precio

**Da confianza**, y ese es su mérito principal: publicar los cinco precios en la navegación pública es una decisión de posicionamiento fuerte y bien ejecutada.

**No asusta.** Los números son razonables y coherentes entre sí. 1.200 € por seis secciones a medida en dos o tres semanas es creíble; 950 € por identidad visual, también.

**Está bien explicado** en lo que se refiere a IVA, IRPF y forma de pago. Mejor que el 90 % del sector.

**Lo que está mal:**

- Falta el coste total del primer año (2.160 €).
- Falta el coste de dominio y alojamiento, y quién lo paga.
- El «desde 2.900 €» rompe la promesa de transparencia justo en el producto de mayor margen.
- La permanencia (12 y 6 meses) está en letra pequeña, contradice a Servicios, y es la mayor objeción sin resolver de la página.
- «Lo más pedido» es falso.
- El banner del «700 €» ancla a la baja.
- No hay guía de elección en la propia página («elige esta si…»). Está en Servicios, que es donde el usuario ya no está.
- No hay comparativa entre los tres proyectos. Cinco tarjetas sueltas obligan a comparar de memoria.
- 250 €/mes de SEO local es el producto más caro en compromiso (1.500 €) y el peor explicado: no dice cuánto contenido al mes, qué contiene el informe, ni qué pasa si en seis meses no se mueve nada. Es el que más va a hacer dudar y el que menos argumento tiene.

**Preguntas que la página deja abiertas** y que el usuario se lleva a la competencia: ¿quién escribe los textos? ¿Y las fotos? ¿Cuántos cambios entran en una «ronda»? ¿Qué pasa si me retraso yo en darte el contenido? ¿Puedo editar la web luego? ¿Y si no me gusta el diseño? ¿El mantenimiento es obligatorio? ¿Qué pasa al terminar la permanencia?

## A10. Contacto y formulario

**Pide demasiado.** Siete campos más una casilla, para el primer contacto de alguien que probablemente solo quiere saber si le vas a cobrar 1.000 o 5.000. Cada campo cuesta abandonos, y en formularios B2B pequeños bajar de siete a cuatro campos suele mover la tasa de envío en un orden del 20-40 %.

**Qué quitaría:**

- **Localidad** — se deduce del negocio o se pregunta en la respuesta.
- **¿Tienes web?** — moverlo a opcional al final, o quitarlo. Lo puedes buscar tú en treinta segundos, y de hecho es lo que dices que haces («si tienes web, la miramos antes de llamarte»). Estás pidiendo un dato que ya has dicho que vas a averiguar tú.
- **Teléfono (opcional)** — si es opcional, casi nadie lo rellena, y es el dato que más te conviene. Conviértelo en la alternativa al correo, no en un extra.

**Formulario propuesto — cuatro campos:**

> Tu nombre
> Tu negocio y dónde está *(ej. Bar Ponte, Ponferrada)*
> Teléfono o correo — como prefieras que te contestemos
> ¿Qué te gustaría resolver? *(opcional)*
> ☐ He leído y acepto la política de privacidad
> **[ Enviar ]** · Contestamos en menos de 24 horas laborables.

**Qué añadiría, por orden de importancia:**

1. **Un teléfono real y clicable, arriba del formulario.** «¿Prefieres llamar? 6XX XXX XXX, de 9 a 18 h. Contesta [Nombre].» Es la mejora de conversión más grande de esta página y cuesta cero.
2. **WhatsApp.** Tu público habla por WhatsApp. No ofrecerlo es una decisión de conversión que estás tomando por omisión.
3. Una elección de canal explícita: «prefiero que me llaméis / prefiero correo».
4. Marcar visualmente qué es obligatorio.
5. Qué se ve después de enviar (existe `/gracias/`, pero el usuario no lo sabe antes).
6. En la columna derecha vacía: horario, zona, mapa y las dos caras.

**Qué hace abandonar:** los siete campos, la ausencia de teléfono (el que quiere hablar ya se ha ido a buscar otro), la duda de si «diagnóstico» y «autodiagnóstico» son lo mismo, y el hecho de haber llegado hasta aquí sin haber visto **un solo trabajo**. Nadie rellena un formulario para que le hagan una web sin haber visto una web.

## A11. SEO

**Intención de búsqueda que transmite:** navegacional y de marca. Es decir, la web está escrita para alguien que ya conoce FARO. No está escrita para captar a nadie desde Google.

**Keywords que parece atacar:** «diseño web Ponferrada», «diseño web El Bierzo», «diseño web León», «identidad visual», «SEO local», «mantenimiento web». Las persigue **solo desde el cuerpo del texto**, no desde la estructura.

**Problemas, por gravedad:**

1. **El dominio.** ⚙️ Si el sitio está en `mariaperezart.github.io`, la probabilidad de posicionar para «diseño web Ponferrada» es prácticamente nula: es un subdominio de un tercero, sin autoridad propia, sin coincidencia de marca, sin señales locales. Y, francamente, un estudio que vende SEO local alojado en el subdominio de otro es un argumento en tu contra que se explica solo. **Comprar el dominio es la tarea número uno de toda esta auditoría.**
2. **H1 sin keyword ni localidad en todas las páginas.** «Servicios», «Precios», «Quiénes somos», «Hablemos». Cuatro H1 con valor de búsqueda cero. Deberían ser: «Diseño web en Ponferrada: cinco servicios con precio publicado», «Precios de diseño web en Ponferrada y El Bierzo», «Quiénes somos — estudio de diseño web en El Bierzo», «Contacto — diseño web en Ponferrada».
3. **El H1 de la home no contiene la localidad.** La lleva el eyebrow, que suele ser un `<span>` sin peso semántico.
4. **Sin datos estructurados `LocalBusiness`** ⚙️ (el repositorio solo tiene `Organization`, sin dirección, teléfono, horario ni `areaServed`). Para SEO local es el marcado que importa.
5. **Sin NAP y sin ficha de Google Business propia enlazada.** Vendes fichas de Google y no muestras la tuya. Google necesita coherencia de nombre-dirección-teléfono entre web y ficha; sin teléfono en la web, esa coherencia no existe.
6. **Sin contenido indexable más allá de las páginas comerciales.** Cero artículos, cero guías, cero casos.

**Páginas que faltan, en orden de retorno:**

1. `/diseno-web-ponferrada/` — la única búsqueda que de verdad importa.
2. `/trabajos/` + una ficha por proyecto. Doble valor: SEO y conversión.
3. `/diseno-web-leon/`, `/diseno-web-el-bierzo/`, y una por cada localidad grande (Villafranca, Cacabelos, Bembibre, Camponaraya, Toreno, Villablino) — pero **solo si tienen contenido distinto de verdad**; si son la misma página con el nombre cambiado, hacen daño.
4. `/web-para-restaurantes/`, `/web-para-talleres/`, `/web-para-clinicas-dentales/`, `/web-para-electricistas/` — páginas de sector con ejemplo, precio y objeciones propias. Son las que convierten.
5. `/precio-pagina-web/` — «cuánto cuesta una página web» es de las búsquedas informativas con más volumen y más intención comercial del sector, y tú tienes la respuesta ya escrita: eres de los pocos que publica precios. Es tu contenido más fácil y más rentable.

**Contenidos que generaría, por orden:** «Cuánto cuesta una web en 2026 (con precios reales)» · «Cómo comprobar si tu formulario llega de verdad» · «A nombre de quién está tu dominio, y cómo comprobarlo en dos minutos» · «Qué es la ficha de Google Business y por qué la tuya está mal» · «Qué pedirle al que te hizo la web antes de dejarlo». Los cinco son extensiones directas de argumentos que ya usas en la web, así que no hay que inventar nada.

## A12. Posicionamiento

**Completa la frase:**

> FARO es el estudio de diseño web de El Bierzo que publica sus precios, va a verte a tu negocio y pone el dominio a tu nombre.

Es una frase decente. El problema es que **la web no la dice en ningún sitio**: la reparte en un tick, un párrafo y una tarjeta, en tres páginas distintas.

**¿Qué hace diferente a FARO?** Tres cosas, con distinta resistencia a la copia:

| Ventaja | ¿Real? | ¿Defendible? |
|---|---|---|
| Precios publicados | Sí, poco común en el sector | **No.** Lo copia un competidor en una tarde. |
| Accesos y dominio a tu nombre | Sí, y toca una herida real | **No.** Lo copia en una frase. |
| Vamos a tu negocio en persona | Sí | **Sí.** Es geografía. Nadie desde fuera puede. |

**¿Es realmente diferente, o parece otra agencia más?** A nivel de mensaje: hay algo. A nivel de percepción: **parece otra agencia más**, porque las tres ventajas son promesas verbales y no hay un solo hecho que las respalde. La diferenciación por honestidad tiene un problema estructural: *decir* que eres honesto no es una prueba de honestidad, y todo el mundo lo dice. Solo se convierte en ventaja cuando va pegada a algo comprobable.

**¿Es suficiente?** No. El posicionamiento actual es puramente geográfico: «diseño web en El Bierzo». Eso te distingue de una agencia de Madrid, pero no te distingue de los otros diseñadores, freelances y sobrinos con WordPress que hay en la comarca — que son contra quienes compites de verdad, porque son los que también pueden ir a verte en persona.

La geografía sola no es un posicionamiento; es un requisito de entrada. Todo el que está aquí lo cumple.

**La versión fuerte de FARO no es «diseño web en El Bierzo». Es «webs para [un tipo de negocio] en El Bierzo», con tres trabajos de ese tipo a la vista y el precio puesto.** Oficios (talleres, electricistas, fontaneros), hostelería, o salud de barrio: elige donde te resulte más fácil conseguir los tres primeros trabajos y donde el ticket aguante los 1.200 €. Ahí dejas de competir. Como generalista local, eres uno más con mejor copy — y el copy no es lo que mira el que va a pagar.

Esto no obliga a rechazar clientes de otros sectores. Obliga a **enseñar** uno. La página dice a quién te diriges; el banco dice a quién cobras.

## A13. Comparación con estudios pequeños premium

| Dimensión | FARO hoy | Estudio pequeño premium | Diferencia |
|---|---|---|---|
| **Mensaje** | Claro, honesto, bien escrito. Habla de precio y de proceso. | Habla de un problema de negocio y de un resultado. | Ellos venden un cambio; tú vendes un entregable. |
| **Confianza** | Solo declarativa. | Trabajos, nombres, caras, clientes, reseñas. | Abismo. Es la brecha principal. |
| **Autoridad** | Ninguna. Cero señales externas. | Artículos, charlas, premios, casos con cifras. | Abismo. |
| **Claridad** | **Ganas tú.** Cinco productos, cinco precios, condiciones explicadas. | Muchos esconden precio tras «hablemos». | Tu única victoria clara. |
| **Persuasión** | Buena argumentación, cero pruebas. | Menos argumento, más demostración. | Ellos ganan: la demostración vence al argumento. |
| **Precio** | Publicado y coherente. | Oculto y más alto. | Ganas en transparencia, pierdes en margen y en percepción de valor. |
| **Conversión** | Un formulario de siete campos y ningún teléfono. | Llamada agendada, teléfono, WhatsApp, caso descargable. | Ellos ganan de calle. |

**La lectura incómoda:** tu web está mejor *escrita* que la de la mayoría de estudios pequeños. Y va a convertir peor que casi todos ellos, porque la decisión de contratar diseño se toma **mirando**, no leyendo. Has ganado la partida que no decide.

---

# AUDITORÍA B — Dueño de una pyme de Ponferrada

*Escrito en primera persona, como el que llega a la web con intención real de comprar.*

Tengo un taller. Mi web la hizo el sobrino de un cliente en 2019 y sale el teléfono viejo. Alguien me ha pasado esto por WhatsApp. Estoy en el móvil, entre dos coches, tengo cuatro minutos.

**Segundo 3.** «Tu próximo cliente te está buscando en Google ahora mismo». Ya. Por eso he entrado. Sigo.

**Segundo 15.** Vale, hacen webs, están en Ponferrada, van a venir a verme. Eso me gusta. Lo de que el dominio sea mío me gusta mucho, porque con el chaval de 2019 no sé ni a nombre de quién está.

**Segundo 40.** Ahora quiero ver una web que hayan hecho. Bajo. Hay tarjetas explicando problemas. Sigo bajando. Más tarjetas, ahora los pasos. Más abajo, precios. Más abajo, lo que no hacen. Llego al final. **No he visto ni una sola web.** Un estudio de diseño y no me enseñan nada. Eso me escama.

**Minuto 1.** Busco «Servicios» por si están ahí. Tampoco. Solo texto y precios otra vez. Es la misma página de antes con otro orden.

**Minuto 1:30.** Precios. 1.200 € la básica. Me parece un precio normal, ni caro ni barato — el problema es que no tengo con qué compararlo, **porque no he visto qué me dan por 1.200 €**. Un precio sin una foto es solo un número.

**Minuto 2.** Leo abajo: mantenimiento 80 €/mes. Y en pequeño: permanencia mínima 12 meses. O sea, casi mil euros más. Eso no me lo habías dicho arriba. Y antes he leído en otra página que se podía dejar cuando quisiera avisando con un mes. Alguna de las dos es mentira. Me molesta más porque toda la web va de que ellos son los honestos.

**Minuto 2:30.** «Lo más pedido» en la de 2.900. ¿Pedido por quién? Luego leo que acaban de empezar y que no tienen clientes. Entonces, ¿por quién es lo más pedido? Esto ya no me lo creo.

**Minuto 3.** Quiénes somos. «Somos dos: uno va a verte y el otro construye.» Bien. ¿Y quiénes son? No hay ni nombres ni fotos. Si van a venir a mi taller, quiero saber a quién estoy dejando entrar. Que no se enseñen me da mala espina.

**Minuto 3:30.** Contacto. Busco el teléfono. **No hay teléfono.** Hay un correo, `hola@faro.es`. Me meto en `faro.es` a ver quién son y no es su web. ¿Entonces qué es esto?

**Minuto 4.** El formulario me pide siete cosas para preguntar un precio que ya está publicado en la página anterior. Cierro.

**¿Contrataría?** No hoy. Pediría precio a dos más y me quedaría con el que me enseñe algo. Si de los tres ninguno me enseña nada, entonces sí volvería a estos, porque son los únicos que ponen el precio y los únicos que dicen que vienen. Pero soy el tercero de la lista, no el primero.

**Qué me habría hecho llamar en ese momento:**
1. Ver tres webs que hayan hecho, aunque fueran de una peluquería y un bar.
2. Un número de teléfono grande arriba.
3. Las caras de los dos.
4. Que el precio de mantenimiento fuera el mismo en las dos páginas.
5. Un WhatsApp. Yo escribo por WhatsApp, no relleno formularios.

**Qué me ha gustado de verdad, y quiero que conste:** que digan lo que no hacen. Que digan que me van a decir que no si no me conviene. Que el dominio sea mío. Y que los precios estén puestos, porque estoy harto de pedir presupuesto solo para enterarme de que no me lo puedo permitir. Si arreglan lo de arriba, estos me caen bien.

---

# AUDITORÍA C — Director de una agencia competidora

*Cómo le quitaría clientes a FARO. Sin piedad, que es el encargo.*

**Su web me está haciendo el trabajo.** Publica precios, publica proceso, publica límites y no publica ni una prueba. Eso es un manual de instrucciones para batirles.

**1. Ataco el dominio.** Su web está en `mariaperezart.github.io` y su correo es `hola@faro.es`. Pongo las dos capturas juntas en mi presentación: «Estos te venden que el dominio va a tu nombre y que te llevan la ficha de Google. Mira dónde tienen ellos la suya.» No necesito decir nada más; el cliente lo entiende solo. **Es su punto más vulnerable y es gratis de explotar.**

**2. Ataco las dos contradicciones.** «Lo más pedido» al lado de «acabamos de empezar, no tenemos clientes». Y «puedes dejarlo cuando quieras» al lado de «permanencia mínima 12 meses». Se lo enseño al cliente en dos pestañas del navegador y digo: «Toda su web va de que son los honestos. Mira.» Eso no se recupera: cuando alguien basa toda su propuesta en la honestidad, cualquier grieta la parte entera. Es asimétrico, y ellos mismos han elegido ese terreno.

**3. Ataco el vacío.** Abro mi portfolio. No hace falta que sea espectacular; basta con que exista. Frente a alguien que no enseña nada, **cualquier trabajo gana**. Y lo digo suave, que es peor: «Nosotros preferimos que juzgues el trabajo, no el discurso.»

**4. Ataco «somos dos».** «¿Y si uno se pone enfermo en mitad de tu proyecto? ¿O si les entran tres clientes a la vez?» Es una objeción legítima, ellos mismos admiten que no pueden con veinte proyectos, y **no la responden en ninguna parte de la web**. Yo tengo equipo y suplencia. Punto para mí.

**5. Uso sus precios contra ellos.** Me han dado su tarifa completa gratis. Sé exactamente dónde ponerme. Y sé dónde están más expuestos: **SEO local, 250 €/mes con seis meses de permanencia = 1.500 € comprometidos** por el producto con el resultado menos garantizable. Yo ofrezco tres meses sin permanencia a 190 €, y en la conversación digo: «¿por qué crees que ellos te atan seis?». La transparencia sin foso defensivo es un regalo al competidor, y ellos aún no lo han pagado.

**6. Copio lo copiable en una tarde.** «Presupuesto cerrado por escrito» y «dominio a tu nombre» son dos frases. Las pongo en mi home mañana. Sus dos ventajas más vistosas dejan de ser ventajas y me quedo yo con el portfolio, que ellos no pueden copiar en una tarde.

**7. Les gano por teléfono.** No tienen número. Yo pongo el mío en la cabecera, en el pie, en el anuncio y en la ficha de Google. En negocio local, el que coge el teléfono se lleva el trabajo. La mitad de sus visitas quieren llamar y no pueden.

**8. Les gano en Google.** No van a rankear en un subdominio de terceros, sin ficha, sin NAP, sin páginas de localidad y sin contenido. Yo me quedo con «diseño web Ponferrada» sin competir de verdad con nadie.

**9. Aprovecho que le hablan a todo el mundo.** Yo hago tres páginas —restaurantes, talleres, clínicas— con ejemplos de cada sector. Cuando el dueño de un restaurante compare «Web esencial, 1.200 €» con «Webs para restaurantes con reservas sin comisión», no hay partida.

**Lo único que me da miedo de FARO:** que arreglen el dominio, publiquen tres trabajos, pongan un teléfono y las caras, y sigan siendo los únicos de la comarca que publican precios y van en persona. **Eso sí me quita clientes.** Pero mientras no lo hagan, su web es mi mejor argumento de venta.

---

# CRUCE DE LAS TRES AUDITORÍAS

## 🔴 CRÍTICOS — detectados por los tres perfiles

| # | Problema | UX/CRO | Pyme | Competencia |
|---|---|:-:|:-:|:-:|
| 1 | **No hay ni un solo trabajo a la vista.** Un estudio de diseño que no enseña diseño. | ✔ | ✔ | ✔ |
| 2 | **No hay teléfono en ninguna página.** Público local que llama, canal cerrado. | ✔ | ✔ | ✔ |
| 3 | **Dominio propio inexistente / correo incoherente** (`github.io` vs `hola@faro.es`). Mata credibilidad y SEO a la vez. | ✔ | ✔ | ✔ |
| 4 | **Contradicción de permanencia.** «Déjalo cuando quieras» (Servicios) vs «Permanencia mínima 12/6 meses» (Precios). | ✔ | ✔ | ✔ |
| 5 | **«Lo más pedido» siendo un negocio sin clientes**, en la misma web que presume de no inventarse clientes. | ✔ | ✔ | ✔ |
| 6 | **No aparece ninguna persona.** Ni nombres ni caras, en una web cuyo argumento es «hablas con las personas». | ✔ | ✔ | ✔ |

Estos seis explican, entre todos, la mayor parte de la conversión que estás perdiendo. Los seis se arreglan en menos de una semana y ninguno requiere rediseñar nada.

## 🟠 IMPORTANTES — detectados por dos perfiles

| # | Problema | Detectado por |
|---|---|---|
| 7 | Error factual «dos son proyectos, tres son cuotas» (es al revés). | UX + Competencia |
| 8 | Servicios y Precios son casi la misma página. Bucle de navegación. | UX + Pyme |
| 9 | Formulario de siete campos para una consulta inicial. | UX + Pyme |
| 10 | Sin WhatsApp, siendo el canal por defecto del público objetivo. | UX + Pyme |
| 11 | Coste real del primer año oculto (1.200 + 12×80 = 2.160 €). | UX + Pyme |
| 12 | Sin señales locales de SEO: dominio, NAP, ficha de Google, páginas de localidad. | UX + Competencia |
| 13 | Le habla igual a todos los sectores; ninguna página vertical. | UX + Competencia |
| 14 | «Somos nuevos» sin contrapeso: no dice qué sí sabéis hacer. | UX + Competencia |

## 🟡 SECUNDARIOS — detectados por un solo perfil

15. Colisión de nombres «diagnóstico» vs «autodiagnóstico» (UX).
16. Seis etiquetas distintas para el mismo CTA (UX).
17. Bloque de cierre idéntico repetido en cuatro páginas (UX).
18. «Por qué se llama FARO» duplicado en dos páginas (UX).
19. El diagrama del hero repite la sección «Cómo trabajamos» (UX).
20. Ámbar usado en ocho sitios distintos: deja de enfatizar (UX).
21. Todo el contenido en tarjetas idénticas: jerarquía plana (UX).
22. Breadcrumb con contraste 3,99:1 — falla AA ⚙️ (UX).
23. `.nav__cta` oculto por debajo de 900 px: sin CTA en móvil ⚙️ (UX).
24. Sin tipografía responsive: H1 de 40 px fijos en móvil ⚙️ (UX).
25. Ancla a la baja: mencionar «una web de 700 €» (UX).
26. «Casi todos los diagnósticos que hacemos» implica volumen inexistente (UX).
27. «Gestor de contenidos» y «tumbar la web»: jerga para el público (UX + Pyme).
28. H1 sin keyword ni localidad en las cuatro páginas internas (UX).
29. Falta aviso legal con razón social y NIF (LSSI-CE) (UX).
30. «¿Y si uno de los dos se pone enfermo?» sin responder (Competencia).
31. Escasez real («aceptamos 3 proyectos al mes») no explotada (UX).
32. Columna derecha de Contacto vacía en su mitad inferior (UX).
33. SEO local (250 €/mes, 1.500 € comprometidos) es el producto peor explicado (UX + Competencia).
34. Foco de formulario sin `outline` y con salto de 1 px ⚙️ (UX).

---

# 14. Problemas ordenados por impacto

Prioridad de 1 a 100, cruzando impacto en ingresos, urgencia y coste de arreglo.

| Problema | Impacto | Urgencia | Facilidad | **Prioridad** |
|---|---|---|---|---|
| Sin portfolio ni un solo trabajo visible | Muy alto | Máxima | Media | **100** |
| Sin dominio propio / correo incoherente | Muy alto | Máxima | Alta | **98** |
| Sin teléfono en ninguna página | Muy alto | Máxima | Muy alta | **96** |
| Contradicción de permanencia entre páginas | Alto | Máxima | Muy alta | **93** |
| «Lo más pedido» sin clientes | Alto | Máxima | Muy alta | **91** |
| Sin nombres ni fotos de las dos personas | Muy alto | Alta | Muy alta | **90** |
| Error «dos proyectos / tres cuotas» | Medio | Máxima | Muy alta | **86** |
| Sin CTA visible en móvil ⚙️ | Alto | Alta | Alta | **84** |
| Sin WhatsApp | Alto | Alta | Muy alta | **82** |
| Formulario de 7 campos | Alto | Alta | Muy alta | **80** |
| Hero genérico, sin precio ni prueba | Alto | Alta | Alta | **78** |
| Sin páginas de sector | Muy alto | Media | Baja | **76** |
| Servicios ≡ Precios (duplicidad) | Medio-alto | Media | Media | **70** |
| Sin señales SEO local (NAP, ficha, schema) | Alto | Media | Media | **68** |
| Coste del primer año oculto | Medio-alto | Alta | Muy alta | **66** |
| Colisión «diagnóstico» / «autodiagnóstico» | Medio | Alta | Muy alta | **64** |
| Sin páginas de localidad | Alto | Baja | Baja | **60** |
| Tipografía no responsive ⚙️ | Medio | Media | Alta | **58** |
| CTA de cierre repetido 4 veces | Medio | Media | Muy alta | **54** |
| «Somos nuevos» sin contrapeso | Medio | Media | Muy alta | **52** |
| Ancla a la baja del «700 €» | Medio | Media | Muy alta | **50** |
| Jerarquía plana / todo en tarjetas | Medio | Baja | Media | **44** |
| Ámbar sobreexpuesto | Bajo-medio | Baja | Alta | **38** |
| Breadcrumb bajo contraste ⚙️ | Bajo | Media | Muy alta | **34** |
| Falta aviso legal LSSI ⚙️ | Bajo (alto si hay inspección) | Media | Alta | **32** |
| Eyebrows innecesarios | Bajo | Baja | Muy alta | **22** |

---

# 15. Veinticinco mejoras que puedes hacer hoy

Sin rediseñar nada. Ordenadas por impacto.

1. **Comprueba si `hola@faro.es` existe y recibe correo.** Si no, tienes un embudo muerto. Es lo primero. Cinco minutos.
2. **Compra el dominio y publica la web ahí.** Redirige el `github.io`. Si no puedes hoy, al menos pon un correo que sí funcione.
3. **Pon un teléfono real y clicable** en la cabecera, en el pie y arriba del formulario de Contacto.
4. **Añade WhatsApp** con enlace `wa.me`, junto al teléfono.
5. **Quita «Lo más pedido».** Sustitúyelo por «Recomendado si vendes o reservas online».
6. **Arregla «Dos son proyectos; tres son cuotas»** → «Tres son proyectos; dos son cuotas».
7. **Resuelve la contradicción de permanencia.** Una sola versión, idéntica en Servicios y en Precios. Mi voto: quítala.
8. **Pon dos fotos y dos nombres** en Quiénes somos, con una línea de qué hace cada uno.
9. **Publica tres trabajos**, aunque sean propios o propuestas no contratadas, etiquetados con honestidad: «proyecto propio», «propuesta para X, no contratada». Es infinitamente mejor que cero.
10. **Baja el formulario de siete campos a cuatro.**
11. **Renombra «autodiagnóstico»** → «Test rápido: ¿cómo está tu web? (1 minuto, sin dejar el correo)».
12. **Unifica los seis textos de CTA** en uno solo en todo el sitio.
13. **Muestra el CTA en móvil** ⚙️: quita el `display: none` de `.nav__cta` o pon una barra fija inferior con «Llamar» y «Pedir diagnóstico».
14. **Añade el coste del primer año** en Precios: «Web esencial + mantenimiento = 2.160 € el primer año, 960 € a partir del segundo».
15. **Di cuánto cuestan dominio y alojamiento al año** y quién los paga.
16. **Quita el «700 €»** del banner de precios. Di «lo hacemos por fases» sin dar cifra.
17. **Cambia los cuatro H1 internos** para que lleven servicio y localidad.
18. **Añade una línea «elige esta si…»** a cada tarjeta de precio.
19. **Pon la disponibilidad real:** «Aceptamos tres proyectos al mes. En [mes] quedan dos.»
20. **Añade el contrapeso a «somos nuevos»:** qué hacíais antes, cuántos años de oficio.
21. **Sustituye la jerga:** «gestor de contenidos de hace tres versiones» → «un WordPress que nadie actualiza desde 2021». «Tumbar la web» → di si se cae o si la hackean.
22. **Quita «casi todos los diagnósticos que hacemos»** o pon el número real.
23. **Convierte el bloque «No prometemos lo que no podemos cumplir» en lista** de cuatro puntos y añade el matiz de «en Ponferrada, probablemente sí».
24. **Varía el bloque de cierre** en cada una de las cuatro páginas.
25. **Arregla el breadcrumb** ⚙️: opacidad 0,75 y 14 px. Y el foco de los campos: `outline: 2px solid` con `outline-offset`, sin tocar el borde.

Bonus si te queda tiempo: crea la ficha de Google Business de FARO y enlázala. Es tu producto, y no lo usas.

---

# 16. Rediseño — lo que haría como director creativo

## Estrategia

**Elige un tipo de negocio y sé el mejor de la comarca en él.** La versión fuerte de FARO no es «diseño web en El Bierzo»: es **«webs para [tipo de negocio] en El Bierzo, con el precio puesto»**. Un generalista compite con todos los diseñadores de la zona; un especialista local no compite con nadie.

No hace falta renunciar a nada ni rechazar clientes: se trata de **enseñar** un sector, no de limitarse a él. Haz **tres páginas de sector con su ejemplo, su precio y sus objeciones propias**, y deja la home como escaparate general.

Pero decide, porque hoy le hablas a un abogado, a un restaurante y a un electricista con exactamente el mismo texto, y ninguno de los tres se siente aludido.

## Contenido

**El eje de todo el rediseño es uno: sustituir argumento por prueba.** La web actual argumenta magníficamente y no demuestra nada. Todo lo que hay que hacer es convertir cada afirmación en algo comprobable:

| Hoy dices… | Conviértelo en… |
|---|---|
| «Presupuesto cerrado por escrito» | La foto de un presupuesto real, con los datos tapados. |
| «Te damos el diagnóstico por escrito» | El PDF de un diagnóstico de ejemplo, descargable sin dar el correo. |
| «El dominio y los accesos son tuyos» | La captura del panel de registro a nombre del cliente. |
| «Hablas con quien hace el trabajo» | Dos caras, dos nombres, dos teléfonos. |
| «No podemos llevar veinte proyectos» | «Quedan dos plazas en septiembre.» |
| «Vamos a tu negocio» | Un mapa con la comarca y las visitas hechas este mes. |

Cada una de esas conversiones vale más que cualquier reescritura de copy.

## Recorrido

Home reordenada, con menos secciones y mejor orden:

1. **Hero** con precio en el H1, teléfono visible y **la captura de un trabajo real** donde ahora está el diagrama.
2. **Tres trabajos**, inmediatamente después. Antes de cualquier argumento. Es lo que el usuario ha venido a ver.
3. **Los tres problemas** (mantener, es lo mejor que hay escrito).
4. **Precios**, con el coste del primer año.
5. **Lo que no hacemos**, en lista corta.
6. **Las dos personas**, con foto.
7. **Cierre** con disponibilidad real y teléfono.

Siete bloques en lugar de los siete actuales, pero con dos de contenido nuevo (trabajos, personas) y dos eliminados (el diagrama duplicado y la sección de proceso repetida).

## Arquitectura

Inicio · **Trabajos** · Servicios y precios *(fusionadas)* · Quiénes somos *(con «Cómo trabajamos» dentro)* · FAQ · Contacto, más **tres páginas de sector** y **`/diseno-web-ponferrada/`**. Menos páginas de las que tienes hoy, y con las dos que faltan.

## Tono

No lo toques. Es lo mejor que tienes: sobrio, específico, sin superlativos, con el valor de decir «no». Solo hay que quitarle las cuatro frases que prometen de más («ahora mismo», «casi todos los diagnósticos que hacemos», «lo más pedido», «déjalo cuando quieras») — precisamente porque son las únicas que traicionan ese tono.

## Diseño

Menos tarjeta y más contraste de jerarquía. Reserva el ámbar para un elemento por pantalla. Y sobre todo: **mete imágenes**. Una web de un estudio de diseño sin una sola imagen no comunica sobriedad, comunica que no hay nada que enseñar.

---

# 17. Notas

| Dimensión | Nota | Justificación en una línea |
|---|:-:|---|
| Claridad | **7,5** | Se entiende todo. Bajan las contradicciones entre páginas. |
| Confianza | **4** | Muchas señales declarativas, cero pruebas, tres contradicciones detectables. |
| Copy | **7** | Muy por encima del sector. Le sobran cuatro frases y le falta concreción numérica. |
| UX | **6** | Recorrido lógico, pero con duplicidades, colisión de nombres y un móvil sin CTA. |
| Conversión | **4** | Sin teléfono, sin WhatsApp, siete campos, cero pruebas antes del formulario. |
| Diseño | **6,5** | Tipografía y paleta con criterio; ejecución plana y sin una sola imagen. |
| Jerarquía | **6** | Todo pesa lo mismo. El ojo no encuentra puerta de entrada. |
| Autoridad | **1,5** | Cero trabajos, cero clientes, cero nombres, cero contenido, cero señales externas. |
| Precio | **7** | Publicarlo es un acierto grande; el «desde», la permanencia y el año oculto lo bajan. |
| Posicionamiento | **5** | Los ingredientes existen; la web no los enuncia como posición. |
| Diferenciación | **4,5** | Dos de sus tres ventajas se copian en una tarde; la buena (ir en persona) está enterrada. |
| SEO | **2** | Subdominio ajeno, H1 sin keywords, sin NAP, sin ficha, sin contenido, sin páginas locales. |

**Media: 5,1 sobre 10.**

Una web bien escrita construida sobre cimientos que todavía no existen.

---

# 18. Veredicto

### ¿La contratarías?

**Como dueño de pyme: no hoy.** Pediría dos presupuestos más y contrataría al que me enseñara trabajos. Volvería a FARO solo si ninguno de los otros me convence, porque son los únicos que publican precio y los únicos que dicen que vienen a verme.

**Como consultor: no todavía, y sé exactamente por qué.** No es un problema de gusto ni de discurso. Es que no hay una sola prueba de ejecución en toda la web. Contratar a FARO hoy exige creerles solo por cómo escriben, y en una decisión de 1.200 € a 3.000 € eso no basta.

### ¿Por qué?

Porque **la web argumenta y no demuestra**. Cada promesa está bien formulada y ninguna está respaldada: presupuesto cerrado (no se ve ninguno), informe por escrito (no se ve ninguno), accesos a tu nombre (no se ve ninguno), hablas con quien lo hace (no se ve a nadie), diseño web (no se ve ninguna web). Y encima hay tres afirmaciones que un lector atento puede desmentir con la propia web abierta en dos pestañas. Cuando toda tu propuesta de valor es «somos los honestos», cualquier grieta en esa honestidad cuesta más que cualquier otro fallo.

### ¿Qué haría falta para parecer una empresa de 500.000 €/año y no de 50.000 €?

Nueve cosas, y ninguna es un rediseño:

1. **Dominio propio, correo en ese dominio, ficha de Google verificada.** Sin esto, nada de lo demás sirve.
2. **Doce trabajos, no tres.** Con captura, contexto y una línea de qué cambió.
3. **Un caso con números.** «Este taller pasó de 4 a 19 llamadas al mes desde Google en cuatro meses.» Un solo caso con cifras vale más que toda la página de Quiénes somos.
4. **Las personas visibles y con nombre**, con su historial profesional. Las empresas grandes enseñan a su gente; las que no tienen nada que enseñar no.
5. **Un sector que enseñar.** «Los que hacen las webs de los talleres de El Bierzo» suena a empresa consolidada. «Hacemos webs» suena a dos personas empezando.
6. **Documentos que parezcan caros.** El presupuesto, el diagnóstico y el informe mensual son tu producto visible: si tu PDF es feo, tu web da igual.
7. **Un teléfono que se coge y un horario publicado.**
8. **Prueba social externa:** reseñas en Google, no testimonios en la web. Las de la web ya nadie se las cree.
9. **Contenido publicado con regularidad.** Un artículo al mes durante un año es la diferencia entre parecer un proveedor y parecer una referencia.

### ¿Qué haría falta para duplicar la conversión?

Seis palancas, por orden de retorno estimado. No son garantías; son estimaciones basadas en el peso típico de cada fricción en formularios B2B pequeños de servicio local:

1. **Trabajos visibles antes del formulario.** Es la palanca principal, con diferencia. Sin ella, las demás rinden la mitad.
2. **Teléfono y WhatsApp visibles en todas las páginas** y barra fija en móvil. Recuperas todo el tráfico que hoy quiere hablar y no puede.
3. **Formulario de siete campos a cuatro.**
4. **CTA visible en móvil** ⚙️, que hoy directamente no existe por debajo de 900 px.
5. **Tres páginas de sector** con ejemplo y precio propios. Multiplican la relevancia percibida en la mitad de tus visitas.
6. **Eliminar las tres contradicciones.** No añaden conversión: evitan que la pierdas justo en el momento de decidir.

Si haces solo dos de las seis, haz la 1 y la 2.

---

### Lo que hay que llevarse de esta auditoría

FARO tiene un problema poco común: **la estrategia y la escritura están por delante de los activos.** El copy es mejor que el de la mayoría de estudios pequeños de España, el posicionamiento tiene ingredientes reales y la decisión de publicar precios y límites es valiente y correcta.

Y todo eso está montado sobre un vacío: sin dominio, sin trabajos, sin caras, sin teléfono y con tres frases que se contradicen entre sí.

La buena noticia es que ese vacío es el tipo de problema que se arregla en dos semanas de trabajo, no de rediseño. La mala es que **hasta que se arregle, la calidad del texto no te está sirviendo de nada** — porque nadie llega a leerlo con la atención necesaria para apreciarlo.
