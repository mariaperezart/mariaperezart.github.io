# Dataset — CRM Maestro clínicas dentales (provincia de León)

Origen: CRM Excel ("CRM_Maestro.xlsx") aportado por la usuaria el 2026-07-09, construido en una sesión previa de investigación web (fecha de las notas: 2026-06-20). **No es investigación hecha por Claude en este repo** — es una fuente externa que se importa aquí tras verificación parcial.

## Verificación antes de importar

Antes de dar esto por bueno, Claude comprobó de forma independiente 3 de las 59 filas (WebSearch, 2026-07-09):

- **Clínica dental Mesiodens** (León): teléfono y WhatsApp (695 988 082) coinciden exactamente con fuente independiente. Decisor Dr. Milton Caravaca confirmado real.

- **Clínica Dental Meda** (Ponferrada): teléfono coincide exacto. Dr. Ramón Gómez Meda confirmado real (Top Doctors, perfil Invisalign).

- **Clínica Dental Dra. Emilia Santamarta** (León): teléfono coincide; una fuente independiente confirma que la clínica acepta WhatsApp (no se reconfirmó el número exacto).

Las 3 muestras se sostienen — a diferencia de dos incidentes previos con otra herramienta externa en este mismo proyecto (ver `plan.md` de EXP-002), aquí no se encontró ningún dato inventado en la muestra comprobada. **Aun así, solo se ha verificado el 5% de las filas (3 de 59) — el resto no ha pasado la comprobación cruzada independiente que sí se aplicó al Lote A de Valencia.**


Se eliminaron 2 filas duplicadas del CRM original (Clínica Dental García Lorente, Clínica Dental De la Riva — misma clínica que otra fila ya existente, se conservó la versión con más datos).


**Criterio ICP de FARO**: clínica dental privada de 4-10 gabinetes, recepción propia, no cadena corporativa ni institucional. El CRM original no registra el nº de gabinetes de forma sistemática — no asumir que una fila cumple el ICP solo por estar aquí; varias notas ya señalan casos que probablemente no lo cumplen (ej. redes tipo Sanitas Milenium, Dentomedic, AREA CLINICA como policlínico multiespecialidad).


---


## Astorga

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| AREA CLINICA (Astorga) | Pendiente verificar | — | 987 616 146 | areaclinica.es/es/clinica/astorga-leon | ⚠️ Falta decisor | [2026-06-20] Investigación web: ⚠️ IMPORTANTE -- NO es una clínica dental exclusiva. Es un POLICLÍNICO multiespecialidad (odontología, ginecología, otorrino, urología, cirugía vascular, fisioterapia, podología, traumatología, logopedia, dermatología, oftalmología, medicina de familia). La odontología es solo uno de sus servicios. DECISOR NO ENCONTRADO: ningún nombre de odontólogo específico ni ges… (nota completa truncada, ver CRM original) |
| Clínica Dental Santa Marta | Pendiente verificar (Comunidad de Bienes) | — | 987 602 426 / 987 617 136 | clinicadentalsantamarta.com | ⚠️ Falta email | [2026-06-20] Investigación web: Ciudad confirmada Astorga (era "Sin determinar"). ⚠️ EMAIL NO VERIFICADO: se encontró clinicadental.santamarta@gmail.com pero pertenece a dominio .cl (Chile) -- probable clínica homónima distinta, NO USAR sin confirmar por teléfono. 6 reseñas Google, 5/5. +20 años trayectoria. Recomendado: llamar al 987 602 426 para pedir email. |
| Clínica Dental Dr. Carlos González Carballo | Dr. Carlos Francisco González Carballo | — | 987 602 613 | No disponible | ⚠️ Falta email | [2026-06-20] Investigación web: Ciudad confirmada Astorga (era "Sin determinar"). ⚠️ SIN EMAIL: no tiene web propia, presencia digital mínima/nula (0 reseñas). Posible vínculo familiar con fila 17 (Carballo & Marquínez, "dos generaciones", mismo apellido) -- verificar antes de tratarlas como leads independientes. Propuesta comercial aquí es distinta: construir presencia digital desde cero, no opti… (nota completa truncada, ver CRM original) |
| Clínica Drs. Carballo & Marquínez | Dr. Carlos González Carballo / Dr. Marquínez (pendiente nombre) | — | Pendiente | No disponible | ⚠️ Falta email | [2026-06-20] Investigación web: Ciudad confirmada Astorga (era "Sin determinar"). SÍ tiene web (carballomarquinez.com) pero bloqueada para acceso automático -- revisar manualmente la página /pacientes para buscar email. Facebook activo (203 likes). Casi 30 años, +5000 pacientes. Posible vínculo familiar con fila 16 (mismo apellido Carballo, "dos generaciones") -- verificar. |
| Clínica Dental Astorgana | Dr. Antonio Ortiz Marqués | — | 987 722 617 | No disponible | ⚠️ Falta email | [2026-06-20] Investigación web: SIN email ni web propia, pero Instagram MUY activo (@dentalastorgana, 458 seguidores, 66 publicaciones) y Facebook. 11 reseñas, 5/5 (dato exacto). Decisor confirmado (Dr. Antonio Ortiz Marqués, colegiado 24001059). Buen candidato: gestiona bien redes pero le falta web/Google -- oportunidad clara de venta. |
| Consultorio Dr. Axel Ramírez Acosta | Dr. Axel Ramírez Acosta | — | Pendiente | No disponible | ⚠️ Falta email | [2026-06-20] Investigación web: Ciudad confirmada Astorga (era "Sin determinar"). SIN email ni web. Decisor confirmado (colegiado 24000984). Reseñas MIXTAS, incluye al menos 1 queja pública seria ("Engaño económico"). Candidato fuerte específicamente para gestión de reputación online -- problema concreto y visible que resolver. |
| Policlínicas Gago (Astorga) | Dr. Ángel González Gago | astorga@policlinicasgago.com | 987 616 648 / 980 633 713 | policlinicasgago.com | ✅ Listo | — |

## La Virgen del Camino (León)

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Clínica del Camino | Pendiente verificar | No publicado - verificar formulario web | 987 35 49 52 | clinicadelcamino.es | ⚠️ Falta decisor | — |

## León

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Clínica Dental Fernández Castaño | Jael y Noe Fernández Castaño (hermanos) | consulta@fcodontologos.com | 987 225 789 | fcodontologos.com | ✅ Listo | [2026-06-20] Investigación web: Decisor confirmado -- hermanos Jael y Noe Fernández Castaño (fuente: reportaje leonoticias.com con cita textual de 'la doctora Jael' sobre su filosofía de atención al paciente). Clínica con +30 años (Páginas Amarillas). Email verificado: consulta@fcodontologos.com. Instagram @fcodontologos: 996 seguidores, 182 publicaciones, activo. Reseñas Google 4.7⭐ con reseñas r… (nota completa truncada, ver CRM original) |
| Clínica Dental Dra. Emilia Santamarta | Dra. Emilia Santamarta | clinicaesantamarta@gmail.com | 987 220 476 | clinicadedentalemiliasantamarta.com | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial. WhatsApp activo (601 222 979). 4 empleados confirmado (eInforma 2024). 53 reseñas Google, media 4.3/5 (dato exacto). |
| Clínica dental Mesiodens en León | Dr. Milton Caravaca | clinica@mesiodens.es | 987 210 521 | mesiodens.es | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial mesiodens.es. WhatsApp activo (695 988 082). 7 reseñas Doctoralia, media 5/5. +25-30 años trayectoria, equipo multidisciplinar. |
| Clínica Arregui | Dr. Ignacio Arregui Hurtado | info@clinica-arregui.com | 987 091 910 | clinicaarregui.com | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial clinicaarregui.com. 23+ reseñas Google, media 4.3/5 (dato exacto). Decisor confirmado vía Doctoralia (colegiado 24000993). |
| Clínica dental DENTOMEDIC León | Dr. José Luis Alvares (implantólogo referente) | ponferrada@gmail.com | 987 270 881 | dentomedic.es | ✅ Listo | [2026-06-20] Investigación web: MISMA RED que fila 6 (Dentomedic Ponferrada/León/Palencia). Mismo email corporativo verificado vía perfil Nextdoor. 63 reseñas Google, 4.2/5 (red completa). Considerar fusionar como una sola cuenta comercial en vez de 2 filas separadas. |
| Clínica Dental Condesa | Dr. Luis González-Cobos Rodríguez / Dra. Ana Belén Alonso Celadilla | clinica@dentalcondesa.es | 987 245 577 | clinicadentalcondesa.es | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial clinicadentalcondesa.es. 31 reseñas DocDental, media 4.2/5. +15 años trayectoria. Web algo anticuada (oportunidad). |
| Clínica Dental CIO - La Chantria | Dr. Alberto Tezza Courteau | info@ciodental.es | 987 206 845 | — | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial ciodental.es. Desde 1986 (38+ años). Redes activas: Facebook e Instagram con publicaciones recientes confirmadas. |
| Lancia Dental, S.L. | Dra. Mª del Camino González Fernández-Llamazares | camino@lanciadental.com | 987 212 575 | — | ✅ Listo | [2026-06-20] Investigación web: ⚠️ DECISOR CORREGIDO -- era "Posible Dr. Jorge G. Vázquez" (no confirmado, pertenecía a otra clínica). Real: Dra. Camino González Fernández-Llamazares, confirmada en directorio profesional oficial junto con su email. Clínica dental INFANTIL desde 1987. 20 opiniones, mayoría positivas pero con 1 reseña muy negativa visible. |
| Clínica Dental Silva Cideo | Dr. José Luis Silva González | clinica@clinicadentalsilvaleon.com | 987 239 650 | clinicadentalsilvacideo.es | ✅ Listo | [2026-06-20] Nueva investigación (Instagram + LinkedIn): Instagram clínica @clinicadentalsilvacideo: 1.339 seguidores, 118 publicaciones, 819 seguidos. Instagram Dr. José Luis Silva Canal (@dr.joseluisssilvacanal, cirujano maxilofacial en Quirón Ruber): 1.035 seguidores, 53 publicaciones. GMB León 4.8⭐/186 reseñas, GMB Carrizo 4.6⭐/12 reseñas (brecha de visibilidad entre sedes). LinkedIn corporati… (nota completa truncada, ver CRM original) |
| Víctor del Canto, clínica dental | Victoriano del Canto Álvarez | citaprevia@victordelcanto.com | 987 49 58 17 | victordelcanto.com | ✅ Listo | [2026-06-20] Nueva investigación: Equipo confirmado: Víctor del Canto (propietario/odontólogo), Pablo Rebollo Díez (odontólogo), Ylenia Blanco (ortodoncista) -- 3 profesionales identificados por nombre (el CRM ya tenía 7 empleados de otra fuente, se mantiene esa cifra superior). GMB: 4.7⭐, 103 reseñas (dato exacto). Web victordelcanto.com: moderna, completa, con TAC 3D, Diseño de Sonrisa DSD, fina… (nota completa truncada, ver CRM original) |
| Clínica Dental De La Riva | Dr. Álvaro de la Riva | secretaria@delarivaclinicadental.com | 987 720 961 | delarivaclinicadental.com | ✅ Listo | [2026-06-20] Nueva investigación: Dr. Álvaro de la Riva Verduras (colegiado 24001162), profesor en 4 másteres universitarios (USAL, UEMC), miembro SEPA/SEPES, premiado en congresos, Invisalign Provider Gold. Instagram @delarivaclinicadental: SOLO 295 seguidores, 29 publicaciones, enfoque 100% académico/formación (cursos, congresos, docencia) -- CERO contenido de captación de pacientes, sin testimo… (nota completa truncada, ver CRM original) |
| Clínica Dental Ezedent | Dr. Daniel Balabanian Pavel | ezedent@clinicadentalezedent.es | 987 806 665 | clinicadentalezedent.es | ✅ Listo | — |
| Clínica Dental Pisonero Blanco | Dr. Eradio Pisonero Blanco | pisonerodental@hotmail.com | 987 261 136 | clinicentalpisonero.com | ✅ Listo | — |
| Clínica Barrenechea | Dra. Sarah Barrenechea | hola@barrenecheadental.com | 987 870 173 | barrenecheadental.com | ✅ Listo | — |
| Clínica Dental Zarauza Santos | Beatriz Zarauza Santos | clinicazarauzasantos@gmail.com | 987 232 115 | clinicazarauzasantos.com | ✅ Listo | — |
| Clínica Dental Dra. Eva Ordóñez Rubio | Dra. Eva Ordóñez Rubio | info@eordental.com | 987 216 751 | eordental.com | ✅ Listo | — |
| Carrero & Tezza Clínica Dental | Dr. Narciso Carrero de Castro / Dra. Julia Tezza | — | 987 95 50 18 | carreroytezzadental.es | ⚠️ Falta email | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado (búsqueda de clínicas en León no cubiertas previamente). Fuente: ProvenExpert (475 reseñas, 4.80/5), Facebook (2.380 likes), DocDental (393 comentarios, 4.9/5). Decisores confirmados: Dr. Narciso Carrero de Castro y Dra. Julia Tezza (+18 años de experiencia). Dirección: Av. Lancia, 2, 24004 León. Email NO encontrado en búsqueda -- w… (nota completa truncada, ver CRM original) |
| Estudio Dental Sevilla-Ferreras | José Sevilla Ferreras | contacto@estudiodentalsevillaferreras.es | 987 21 22 77 | dentistaleon.es | ✅ Listo | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: web oficial dentistaleon.es, esfinanciero.com (4.8/5, 48 opiniones). Decisor confirmado: José Sevilla Ferreras (Lic. Medicina y Cirugía Univ. Salamanca, Estomatólogo, colegiado nº 24000532). Email confirmado: contacto@estudiodentalsevillaferreras.es. Teléfono: 987 21 22 77. Dirección: C/ Villa Benavente, 12, 1º Izquierda, 2… (nota completa truncada, ver CRM original) |
| Clínica Dental Class | Dr. Nino Blanco / Dra. Adriana Medina | — | 987 218 545 | clinicadentalclass.com | ⚠️ Falta email | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: web oficial clinicadentalclass.com (blog activo con múltiples artículos del Dr. Nino), X/Twitter (@DentalClassLeon, activo desde 2017), opinadentistas.com (reseñas 5/5 mencionando específicamente al Dr. Nino por su profesionalidad). Decisores confirmados: Dr. Nino Blanco (acreditado BTI Human Technology para PRGF -- plasma … (nota completa truncada, ver CRM original) |
| Clínica Dental González Franco | Dra. Elisa Franco Castellanos / Dr. Sergio González Franco | dentalgonzalezfranco@gmail.com | 987 24 03 65 | clinicadentalgonzalezfranco-leon.com | ✅ Listo | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: eInforma (4 empleados, 2023, 2 administradores), Facebook (2.526 likes, 62 'estuvieron aquí'), clinicasespinoza.es (4.8/5, 113 reseñas), dentalgonzalezfranco.com (testimonios extensos en Google My Business). Decisores confirmados: Dra. Elisa Franco Castellanos y Dr. Sergio González Franco (clínica familiar). Email confirmad… (nota completa truncada, ver CRM original) |
| Clínica Dental y Ortodoncia Clidenin | Pendiente verificar | administracion@clidenin.com | 987 21 01 32 | ortodoncialeon.org | ⚠️ Falta decisor | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: Facebook (administracion@clidenin.com, '100% recommend' en 24 reseñas de FB, contraste con Google), opinadentistas.com y sonrisalista.com (144-149 reseñas Google, 4.3-4.4/5, varias reseñas negativas DETALLADAS y recientes sobre cobros inesperados y trato con niños). Email confirmado: administracion@clidenin.com. Dirección: … (nota completa truncada, ver CRM original) |
| Clínica Dental García Lorente | Francisco José García Lorente / Álvaro García-Lorente García | — | 987 24 27 37 | clinicadentalgarcialorente.es | ⚠️ Falta email | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: Doctoralia, web oficial clinicadentalgarcialorente.es (con blog/redes activas -- publicaciones recientes sobre odontopediatría, ortodoncia, apiñamiento dental), eldentista.com, eugnathos.eu (5/5, 8 valoraciones GMB). Decisor principal: Francisco José García Lorente, colegiado 24000421, Estomatólogo por la UCM, Presidente de… (nota completa truncada, ver CRM original) |
| Clínica Dental Juan José Cachero | Dr. Juan José Cachero Guerrero | — | — | clinicadentalcachero.com | ⚠️ Falta email | [2026-06-20] Prospecto NUEVO añadido por investigación de mercado. Fuente: Doctoralia (reseñas verificadas con múltiples niveles de confirmación SMS, credibilidad alta), oopiniones.com (17 opiniones, prácticamente todas 5/5), opinadentistas.com (múltiples reseñas 5/5 mencionando trato 'impecable', pacientes de varias generaciones de la misma familia). Decisor confirmado: Dr. Juan José Cachero Guer… (nota completa truncada, ver CRM original) |
| Jose Luis Alvarez Barone | José Luis Álvarez Barone (propietario) | Sin web ni email - solo teléfono | 987 26 28 48 | No tiene | ✅ Listo | — |
| Clínica Dental Elena Álvarez Álvarez | Dra. María Elena Álvarez Álvarez | No publicado - verificar formulario web | 987 23 36 01 | clinicaelenaalvarez.com | ✅ Listo | — |
| Severino Cayetano González Lozano | Dr. Severino Cayetano González Lozano | Sin web ni email - solo teléfono | 987 26 04 11 | No tiene | ✅ Listo | — |
| Clínica Dental Silva | Dras. Natalia y María Silva (fundada por Dr. Etelvino Silva, 1981) | Sin web ni email - solo teléfono | 987 24 78 33 | No tiene | ✅ Listo | — |
| Clínica Dental Nocedo | Dra. Doris Guerra | No publicado - verificar web | 987 01 44 16 | Pendiente verificar | ✅ Listo | — |
| Clínica Dental HM San Francisco | Pendiente verificar | Pendiente verificar | Pendiente verificar - BUSCAR | Pendiente verificar - BUSCAR | ⚠️ Falta decisor | — |
| Clínica Dental ALN | Pendiente verificar | No publicado | 987 24 43 79 | No tiene | ⚠️ Falta decisor | — |
| Activadent (Dra. Graciela Nemer Pelliza) | Dra. Graciela Nemer Pelliza | — | 987 17 85 28 | doctoranemer.com | ❌ Descartado | — |

## León (C. Fray Luis de León, 27)

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| CIO Dental La Chantría | Dra. Diana Tezza (mencionada en reviews, no confirmado si decide) | Pendiente verificar | Pendiente verificar - BUSCAR | Pendiente verificar | ✅ Listo | — |

## Navatejera, Villaquilambre (León)

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Navatejera Dental SL | Pendiente verificar (SL, varios dentistas) | No publicado - verificar web | 987 28 63 02 / 659 20 52 70 | Pendiente verificar | ⚠️ Falta decisor | — |

## Ponferrada

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Dental Imagen | Pendiente verificar | info@dentalimagen.es | 987 087 830 | dentalimagen.es | ⚠️ Falta decisor | [2026-06-20] Investigación web: Ciudad confirmada Ponferrada (sede principal) + Villablino (segunda sede) -- era 'Sin determinar'. ⚠️ DECISOR NO ENCONTRADO: la web no tiene sección equipo/quiénes somos pública, ningún directorio ni registro consultado revela nombre del propietario. Reseñas 4.2/5 (fuente agregadora). Recomendado: llamar y preguntar directamente por 'el responsable/dueño de la clíni… (nota completa truncada, ver CRM original) |
| Clínica Dental San Remo | Dr. Ramón Méndez Díaz | sanremopacientes@gmail.com | 987 427 626 | clinicadentalsanremo.com | ✅ Listo | [2026-06-20] Investigación web: email verificado en web oficial clinicadentalsanremo.com. Ciudad corregida (era "Sin determinar"). Confirmado multisede (Ponferrada+Villafranca+Fabero), ~30 años trayectoria, redes activas (IG/FB). Oferta de empleo activa = señal de contratación. |
| Clínica Dental Dentomedic Ponferrada | Dr. José Luis Alvares | ponferrada@gmail.com | 987 409 890 | dentomedic.es | ✅ Listo | [2026-06-20] Investigación web: email verificado (perfil Nextdoor oficial). Red Dentomedic: León-Palencia-Ponferrada, +19 años. 63 reseñas Google, media 4.2/5 (dato exacto). MISMA RED que fila 11 (Dentomedic León) -- considerar tratar como cuenta única. |
| Clínica Dental Milenium Ponferrada (Sanitas) | Dra. Raquel Baeza Blanco / Dr. Eradio Pisonero Blanco | — | 987 425 001 | clinicadental-ponferrada.sanitas.es | ⚠️ Falta email | [2026-06-20] Investigación web: SIN email propio -- franquicia de red Sanitas Milenium (+220 clínicas en España), solo chatbot/teléfono corporativo. 139 reseñas Google, 4.8/5 (dato exacto). ⚠️ BAJA PRIORIDAD COMERCIAL: decisiones de marketing probablemente gestionadas centralmente por Sanitas, no por el equipo local. Mantener como "Falta email" pero considerar descartar o contactar directamente a … (nota completa truncada, ver CRM original) |
| Clínica Dental Santa Polonia | Pendiente verificar (SLP, fundada 1991) | — | 987 414 858 | No disponible | ⚠️ Falta email | [2026-06-20] Investigación web: Ciudad confirmada Ponferrada (era "Sin determinar"). ⚠️ SIN EMAIL ni web propia, 2 empleados confirmado (eInforma 2022, dato exacto). 0 reseñas visibles -- presencia digital mínima, similar a fila 16. |
| Clínica Dental Dr. Merino (INEOM) | Dr. Enrique Martínez Merino | info@drmerino.es | 987 234 567 | drmerino.es | ✅ Listo | ⚠️ DECISOR A VERIFICAR: el CRM tiene 'Dr. Enrique Martínez Merino' (mantenido sin cambios). Una nueva fuente de investigación menciona 'Dr. Alberto Merino' (posiblemente Alberto Fernández de Valderrama también en el equipo) como nombre del fundador -- NO se ha verificado cuál es correcto, puede haber confusión entre el fundador histórico y un médico actual del equipo. Verificar antes de personaliz… (nota completa truncada, ver CRM original) |
| Clínica Dental Meda | Dr. Ramón Gómez Meda | recepcion@dentalmeda.com | 987 456 184 / 617 456 368 (WhatsApp) | dentalmeda.com | ✅ Listo | [2026-06-20] Nueva investigación: Ciudad corregida a Ponferrada (era 'Sin determinar') -- 3 sedes confirmadas: Ponferrada (Avda. Pérez Colino 22-24), Fabero, O Barco. +25 años de experiencia, 20+ profesionales (escala confirmada, la mayor de las 5 clínicas revisadas en esta ronda). Dr. Ramón Gómez Meda: PHD, profesor en LSUHSC New Orleans, conferenciante internacional (Roma, Bucarest, Oporto, Lond… (nota completa truncada, ver CRM original) |
| Clínica Dental Dra. Natalia Buitrón | Dra. Natalia Buitrón López | clinicadental_ponferrada@hotmail.com | 987 413 013 | clinicadentalbuitronponferrada.es | ✅ Listo | — |
| Clínica Dental Balcázar Torres (Dora Torres) | Dr. Óscar Balcázar Rodríguez | obalcazaro@gmail.com | 987 404 019 | clinicadentalenponferrada.es / clinicadentalbalcazar.com | ✅ Listo | — |

## Sin determinar

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Clínica Dental Quiñones Belzuz | Dr. Álvaro Quiñones Belzuz | clinicadental.qb@gmail.com | 987 407 267 | clinicadentalqb.es | ✅ Listo | — |
| Clínica Dental Añón Cao | Dr. Añón Cao (pendiente nombre completo) | info@clinicadentalanoncao.com | 987 427 414 / 679 072 044 | clinicadentalanoncao.com | ✅ Listo | — |
| Clínica Dental Dra. Sandra Terrón | Dra. Sandra Terrón García | info@sandraterron.es | 987 413 806 / 637 618 616 | sandraterron.es | ✅ Listo | — |
| Clínica Dental Miranda | Dr. Miranda (pendiente nombre completo) | mirandaclinicadental@gmail.com | Pendiente | mirandaclinicadental.es | ✅ Listo | — |
| Centro Dental Sicadent | Pendiente verificar (Sicadent S.L.) | sicadent@gmail.com | 987 618 847 / 637 372 317 | sicadent.com | ✅ Listo | — |

## Trobajo del Camino (León)

| Clínica | Decisor | Email | Teléfono/WhatsApp | Web | Estado | Notas |
|---|---|---|---|---|---|---|
| Clínica Dental Ortega | Dra. Leidy María Ortega Montes | No publicado - verificar web | 987 84 06 70 / 607 07 88 70 (WhatsApp) | Pendiente verificar | ✅ Listo | — |
| CIO Dental Trobajo | Pendiente verificar | Pendiente verificar | Pendiente verificar - BUSCAR | Pendiente verificar | ⚠️ Falta decisor | — |

---

## Resumen

- Total de filas tras deduplicar: 57

- ⚠️ Falta decisor: 8

- ✅ Listo: 37

- ⚠️ Falta email: 11

- ❌ Descartado: 1

- Con WhatsApp explícitamente confirmado en las notas: 4 (Dra. Emilia Santamarta, Mesiodens, Clínica Dental Meda, Clínica Dental Ortega — Trobajo del Camino)

- Ninguna clínica de esta lista se ha contactado todavía (0 Looms/emails/WhatsApp enviados según el propio CRM) — es prospección pura, igual que el resto de EXP-002.


**Próximo paso recomendado, no ejecutado todavía**: repetir la comprobación cruzada independiente sobre el resto de filas antes de tratarlas como Lote A, empezando por las marcadas '✅ Listo' (39 filas) y priorizando las que ya tienen WhatsApp confirmado.
