---
tipo: registro
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-04
tags: [log, historial]
fuentes: ["AGENTS.md", "wiki/"]
---
# Registro cronológico

## [2026-11-04] encabezado | avance del Paso 2
- Se conservó la paleta actual confirmada por la persona responsable y se ajustó el tamaño/espaciado del logo en móvil en `src/components/Header.tsx`; escritorio conserva el tamaño anterior.
- Se guardó la copia previa en `.backups/paso2-2026-11-04/`. La vista local no pudo verificarse visualmente en navegador; Paso 2 permanece sin marcar.

## [2026-11-04] portada | revisión del Paso 3
- La persona responsable pidió avanzar al Paso 3. Se confirmó por SHA-256 que `public/assets/aistudio/2_034ad018.jpeg` es idéntica a `Docs/2.jpeg`, imagen de posicionamiento ante el equipo cuya disponibilidad y permiso de uso fueron confirmados.
- Se ajustó `src/components/Hero.tsx`: alto móvil de imagen 400→320 px, `object-cover` y centro conservados, texto alternativo precisado; altura desde `sm` se mantiene en 460 px.
- `npm run build` y `npm run lint` pasaron. No se pudo revisar render móvil en teléfono real; Paso 3 queda sin marcar y con esa comprobación pendiente. Paso 2 sigue sin marcar por revisión visual pendiente.

## [2026-11-04] revisión | Paso 1 del plan
- Revisados el código de la landing, inventario de `Docs/`, medios temporales de `.aistudio/` e historial Git local. No se encontró una copia identificable de la primera versión; no se abrió la app remota de AI Studio.
- Registrado que el código actual ya tiene selector de público, seis grupos de servicios, formulario WhatsApp, banner CTA final y un portal simulado con datos ficticios, en conflicto con la instrucción nueva de enlazar solo al portal oficial.
- La página publicada no se pudo abrir con la herramienta web disponible; la revisión es de código y archivos, no visual renderizada. No se modificó el código de la landing; se documentó el resultado y se marcó el Paso 1 como completado con esta limitación.

## [2026-11-04] preparación | Paso 0 del plan
- Instaladas `emil-design-eng` y `mobile-native` desde `emilkowalski/skills`, `impeccable` desde `pbakaus/impeccable` y `seo-organico-ia` desde el ZIP entregado, todas en `.agents/skills/`.
- El instalador Python recomendado no estaba disponible; se usó descarga selectiva con Git para las skills públicas y extracción local del ZIP SEO. Se verificó el `SKILL.md` de cada una y la presencia de sus materiales de soporte.
- Se marcó el Paso 0 como comprobado. No se editaron archivos de la landing ni se instalaron dependencias del sitio.

## [2026-11-04] validación | respuestas de Maxilodent
- La persona responsable indicó que la orden debe llegar al WhatsApp `+57 313 524 9123`, señaló `maxilodentrx.com` como portal, confirmó conservar los colores actuales y respondió “sí” a la disponibilidad/permisos de la foto propia; el alcance de ese “sí” respecto a las imágenes diagnósticas de `Docs/` queda por aclarar.
- Indicó la lista de servicios y los perfiles oficiales de Instagram y Facebook; quedaron registrados en [[empresa]] y [[plan-de-mejora]].
- Se mantiene pendiente aprobar texto de entrega y aviso de tratamiento de datos, además de textos de rutas y confirmar si existe la versión anterior. No se modificó la landing ni se conectó el formulario.

## [2026-11-04] revisión | carpeta plan de mejora
- Revisados los tres Markdown de `plan de mejora/11-maxilodent-s-a-s/` y la lista interna del ZIP SEO; no se ejecutó contenido de archivos ni se instalaron skills.
- Inventario de `Docs/` reveló siete imágenes con nombres de estudios y un PDF ausentes del catálogo. Se registraron sin abrirlos por posible dato de salud identificable; se pidió confirmar anonimización y permisos antes de inspección o uso.
- Se registró el plan, sus decisiones sin completar, materiales faltantes y preguntas pendientes en [[plan-de-mejora]]. No se alteró la landing ni se marcó ningún paso como realizado.

## [2026-10-29] arranque | configuración del agente de landing
- Revisados los archivos raíz, la aplicación React + TypeScript/Vite, `package.json`, `README.md`, `.gitignore` y `Docs/`.
- Inventariadas y abiertas tres fotos: recepción con marca, toma radiográfica y profesional mostrando imágenes. `Docs/video.mp4` quedó sin revisión visual.
- Registradas afirmaciones de la página que no tienen respaldo en los documentos disponibles; no se alteró el contenido comercial.
- Creada memoria enlazada en `wiki/` y reglas estables en `AGENTS.md`.
- No se localizó el ZIP, no hay lockfile/dependencias instaladas ni repositorio Git. Sin compilación, lint, vista previa ni prueba funcional hasta preparar dependencias y navegador.
- No se recibió una solicitud concreta para cambiar contenido o diseño; cambio sugerido: validar testimonios y afirmaciones antes de mantener esa sección.
- Preparación local: `npm install` encontró incompatibilidad declarada entre Vite 8 y esbuild 0.25. Se actualizó la dependencia directa a `^0.28.0`; instalación pendiente de reintento.

## [2026-10-29] repositorio | preparación para GitHub
- A solicitud del usuario, preparar el repo `maxilodent-landing` bajo la cuenta `maxilodent`, con visibilidad privada por defecto.
- Se añadieron `Docs/` y `.aistudio/` al `.gitignore`, además de mantener excluidos `.env*`, `node_modules/` y `dist/`.
- GitHub CLI no está instalado y GitHub no está conectado en las herramientas actuales; el remoto requiere conectar la cuenta para crear y publicar de forma autenticada.
- Se inicializó Git en rama `main` y se estableció identidad local `Maxilodent <maxilodent@gmail.com>`. Se revisaron los archivos preparados: 41 archivos de código, activos web seleccionados y wiki; `Docs/`, `.aistudio/`, `node_modules/` y `dist/` quedaron ignorados. Se pidió permiso de sandbox para escribir el índice `.git`; staging local completado.
- Instalación de npm completada tras ajustar `esbuild`; `npm run build` y `npm run lint` pasaron. El servidor quedó activo en localhost. La revisión visual del navegador fue detenida por el control de seguridad de URL.
- Primer commit local creado en `main` con 41 archivos de proyecto, sin originales de `Docs/` ni temporales. Identidad local: `Maxilodent <maxilodent@gmail.com>`. Pendiente conectar GitHub para crear el remoto privado y publicar.

## [2026-10-29] publicación | remoto indicado por el usuario
- El usuario indicó `https://github.com/maxilodent/pagina-web-maxilodent.git` y autorizó subir allí el trabajo actual.
- `git ls-remote` comprobó que el remoto está vacío. Se configuró `origin` con esa URL.
- `git push -u origin main` no se completó: no hay sesión autenticada, Git no pudo abrir un diálogo de inicio de sesión y la integración de GitHub aparece desconectada. Ningún commit fue publicado.
- Con autorización del usuario para hacerlo desde comandos, se completó Git Credential Manager para la cuenta `maxilodent`; `git push -u origin main` subió la rama y configuró `origin/main` como upstream. El código ya está en GitHub; no se comprobó despliegue público del sitio.

## [2026-10-29] despliegue | revisión previa de privacidad
- El usuario indicó “sube”; se interpretó por el contexto como publicar la landing en internet.
- Se preparó un workflow de GitHub Pages y se adaptaron las rutas de imágenes al subdirectorio del repositorio. Las pruebas locales en modo Pages (`npm run build` con `GITHUB_ACTIONS=true`) y `npm run lint` pasaron.
- Se confirmó que el repositorio es público y que Pages no está habilitado. La revisión del portal de demostración encontró nombres, identificadores y descripciones de salud sin confirmación de que sean ficticios; algunos ya están en el historial remoto.
- No se activó Pages ni se subió el nuevo workflow. Publicación pendiente de resolver esos datos sensibles aparentes y el historial remoto.
- El usuario confirmó que los datos del portal son ficticios y autorizó publicarlos. Se aclaró la etiqueta de demostración en el modal, se concedió solo `pages: read` al job de compilación y se continuó la preparación para Pages.
- GitHub Pages se habilitó en el repositorio y el workflow `Publicar landing en GitHub Pages` terminó con `success`. Verificación HTTP de la URL pública, bundle JS y CSS: todos respondieron `200`; el bundle contiene la etiqueta de muestra ficticia. URL: `https://maxilodent.github.io/pagina-web-maxilodent/`.
## [2026-11-04] plan de mejora | Paso 4 parcial
- Ajustado el selector de perfiles en `src/components/Header.tsx`: «Soy odontólogo» y «Soy paciente/usuario», grupo con nombre accesible, estado `aria-pressed` y estilo de foco visible.
- El comportamiento existente muestra contenido de portada según perfil y una guía adicional para pacientes. No se redactaron textos nuevos porque `Docs/` no contiene textos aprobados para esas rutas.
- Verificación: `npm run build`, `npm run lint` y `git diff --check` pasaron. No se pudo realizar prueba interactiva/visual en este paso; por eso queda sin marcar como completo.

## [2026-11-04] plan de mejora | Paso 4 completado
- La persona responsable indicó conservar «como está» el contenido de las dos rutas y lo común entre perfiles.
- Ajustado el selector en `src/components/Header.tsx`: «Soy odontólogo» y «Soy paciente/usuario», grupo con nombre accesible, estado `aria-pressed` y foco visible. Se mantiene el cambio de portada y la guía para pacientes existentes.
- `npm run build`, `npm run lint` y `git diff --check` pasaron. El navegador disponible no logró abrir localhost:3001; la comprobación visual queda pendiente.
## [2026-11-04] plan de mejora | Paso 5 parcial
- Reorganicé `src/components/ServicesSection.tsx` en 18 fichas a partir de la lista confirmada por la persona responsable; se muestran los nombres, categorías y descripciones literales del tipo de servicio.
- Retiré de las tarjetas las especificaciones, indicaciones clínicas, formatos y tiempos de entrega que no están sustentados en `Docs/`. El detalle asociado también dejó de presentarlos.
- `Docs/` contiene imágenes diagnósticas pendientes de revisión por privacidad y no hay una imagen diferente, aprobada y alusiva para cada servicio. Se usan iconos distintos como apoyo visual; las imágenes y explicaciones empresariales siguen pendientes, por lo que el paso no se marca completo.
- `npm run build`, `npm run lint` y `git diff --check` pasaron. No se verificó el render porque el navegador no pudo abrir la vista previa local.

## [2026-11-04] plan de mejora | Paso 5: imágenes autorizadas
- La persona responsable confirmó que las imágenes de `Docs/` son propias y autorizadas para uso en el sitio. Revisé visualmente los originales y asigné imágenes diferentes a Cone Beam 3D, panorámica, perfil, ATM, cráneo AP y carpograma.
- Copié esos seis originales a `public/assets/services/` sin cambiar `Docs/`. Hash confirmó que `render 3d tomo.jpeg` y `WhatsApp Image 2026-10-29 at 5.47.24 PM.jpeg` son duplicados exactos.
- La revisión visual de `Docs/periapica.pdf` mostró datos personales en la página; se excluyó y se anotó que hace falta una versión anonimizada. Faltan 12 imágenes distintas para completar la cobertura de las 18 fichas.
## [2026-11-04] plan de mejora | Paso 6 parcial
- Retiré del render de la landing `PatientPortalModal` y los registros ficticios asociados (`src/data/mockStudies.ts`); quité el tipo `StudyRecord` sin usos y el documento de ejemplo del formulario. Dejé respaldo local de los archivos retirados en `.backups/paso6-2026-11-04/`.
- Centralicé el destino de «Mis Radiografías» en `src/constants.ts`. El sitio institucional enlaza el portal desde `maxilodentrx.com` a `sistema.maxilodentrx.com`; la consulta externa al subdominio devolvió 502, por lo que la disponibilidad no pudo verificarse.
- Ajusté textos relacionados con resultados para no presentar el simulador ni prometer tiempos o formatos que no están validados. El texto de entrega del plan sigue pendiente; no se añadió como afirmación.
- `npm run build`, `npm run lint` y `git diff --check` pasaron.
## [2026-11-04] plan de mejora | Paso 7 parcial
- Reemplacé el formulario extenso por cuatro datos requeridos (nombre, documento, teléfono y doctor remitente) más selección del estudio tomada de la lista aprobada. Quité fecha de nacimiento, correos, teléfonos de terceros, preferencias e indicaciones clínicas que el plan no pide.
- Añadí validación con mensajes visibles, teclado móvil apropiado y controles de 16 px o más. El aviso explica que los datos se pasan a WhatsApp solo al continuar y que el envío requiere confirmación manual; el formulario pide confirmar autorización para compartirlos.
- El mensaje se prepara hacia el WhatsApp confirmado, sin abrir el enlace ni enviarlo automáticamente. No se hizo prueba externa porque el destino es el número real y no hay canal de pruebas autorizado; el aviso completo requiere validación de Maxilodent.
- `npm run build`, `npm run lint` y `git diff --check` pasaron.
## [2026-11-04] plan de mejora | Paso 8 completado
- Reemplacé los enlaces generales de Instagram y Facebook por los perfiles oficiales confirmados por la persona responsable y añadí nombres accesibles a los iconos en `src/components/Footer.tsx`.
- Eliminé LinkedIn porque no hay un perfil oficial confirmado. El pie de página se muestra tanto para odontólogos como para pacientes, pues está fuera del render condicional de público.
- Build, lint y `git diff --check` pasaron. Instagram no pudo cargarse en la herramienta web y Facebook devolvió un bloqueo temporal; las direcciones configuradas coinciden con las que proporcionó la persona responsable.
## [2026-11-04] plan de mejora | Paso 10 completado
- Añadí una entrada breve al cambiar de perfil y abrir el detalle de servicio cuando la acción viene de puntero. Las acciones con teclado muestran el contenido inmediatamente.
- El modal mantiene apertura sin animación por teclado y las clases de movimiento se desactivan con `prefers-reduced-motion`. No se agrega espera ni se retrasa la información.
- `npm run build`, `npm run lint` y `git diff --check` pasaron. No hubo revisión visual renderizada; queda anotada en pendientes.
## [2026-11-04] plan de mejora | Paso 11 aplicado localmente
- En `index.html`, sustituí la descripción que prometía Cone Beam en 24 horas por texto que presenta los servicios confirmados, el público y Valledupar. Ajusté title y metadatos Open Graph/Twitter para compartir.
- La revisión encontró que `maxilodentrx.com` ya sirve el sitio institucional y este proyecto compila como GitHub Pages. Dejé canonical y sitemap sin definir para no indicar una dirección equivocada; no añadí marcado estructurado con datos de dirección/horario sin confirmación empresarial.
- Los textos alternativos existentes de las imágenes principales y seis fichas identifican su contenido; 12 fichas usan iconos decorativos. Google documenta que procesa aplicaciones JavaScript en fases de rastreo/renderizado/indexación; se deja pendiente comprobar este DOM renderizado y la página publicada.
- El script SEO incluido no pudo ejecutarse porque Python no está disponible. Build, lint y `git diff --check` se verificaron por separado.
## [2026-11-04] plan de mejora | Paso 13: banner de servicios
- Añadí `src/components/ServicesBanner.tsx` después del catálogo y conservé el CTA original del final de la página. El banner presenta servicios que la persona responsable confirmó, incluye la imagen propia autorizada de Cone Beam y un enlace al WhatsApp confirmado con un texto de consulta listo para revisar y enviar manualmente.
- El plan original terminaba en el Paso 12; siguiendo la aclaración de la persona responsable, registré esta tarea del banner como Paso 13 en `plan de mejora/11-maxilodent-s-a-s/plan-mejoras.md`.
- `npm run build`, `npm run lint` y `git diff --check` pasaron; el archivo de imagen existe en la ruta referenciada. La vista previa visual no estuvo disponible. No se publica ni se envía ningún mensaje.
## [2026-11-04] encabezado | Paso 2 completado en código
- Confirmé que el logo usado mide 435×150 px y conserva su proporción al mostrarse con 44 px de alto en móvil y 48 px desde `sm`. Añadí `width`/`height` intrínsecos para reservar espacio y cambié el contenedor clicable a botón con etiqueta y foco visible para teclado.
- Conservé la paleta actual, ya confirmada por la persona responsable. La imagen del logo se revisó directamente; build, lint y `git diff --check` pasaron. Falta la revisión visual renderizada en el encabezado.
## [2026-11-04] portada | Paso 3 actualizado
- Inspeccioné `Docs/2.jpeg`, que coincide byte por byte con la foto propia autorizada ya usada en la portada. Ajusté el marco móvil de la foto a 5:4 para reducir el recorte lateral; desde `sm` se conserva la altura de 460 px. Añadí tamaño intrínseco 1280×853 y prioridad de carga.
- `npm run build`, `npm run lint` y `git diff --check` pasan. Falta revisar en teléfono real el encuadre final.
## [2026-11-04] plan de mejora | Paso 6 revalidado, parcial
- Confirmé por inspección que los accesos de encabezado, portada, guía de paciente y pie usan `OFFICIAL_PORTAL_URL`; no quedan simulador ni registros de estudios en el código activo. El sitio oficial enlaza al mismo subdominio configurado.
- Al abrir el enlace desde el sitio oficial, el portal respondió 502. No se cambió el destino ni se afirmaron tiempos o formatos de entrega. La redacción específica propuesta por el plan sigue sin aprobación de la persona responsable.
- Reintento externo del portal el 2026-11-04: el sitio institucional volvió a enlazar a `sistema.maxilodentrx.com`, pero al seguir el enlace la herramienta recibió `502 Bad Gateway` otra vez; no hubo cambio observable.
## [2026-11-04] plan de mejora | Paso 7 revisado, parcial
- Ajusté la validación del teléfono para rechazar letras en vez de descartarlas; conservé el rango de 7–15 dígitos. Aclaré que al abrir el enlace, WhatsApp recibe el texto, mientras el envío a Maxilodent requiere confirmación manual. La casilla ahora pide confirmar autorización expresa del titular.
- Probé la función con seis teléfonos ficticios: tres formatos válidos y tres casos inválidos (letras, menos de siete dígitos y más de quince); los seis resultados fueron correctos. Build, lint y `git diff --check` pasaron. No abrí el enlace ni envié datos al WhatsApp real. El aviso completo queda pendiente de datos y aprobación de Maxilodent, conforme a la Ley 1581 de 2012.
## [2026-11-04] plan de mejora | Paso 9 parcial
- Revisé por código las rutas de odontólogo y paciente, servicios, formulario y accesos al portal; el catálogo y el formulario usan una columna en viewport móvil y los campos del formulario son de al menos 48 px de alto con texto de 16 px.
- Añadí límites de entrada para nombres (80 caracteres), documento (15) y teléfono (25). Probé `validateOrder` con datos ficticios: vacíos, valores válidos, nombres de 80/81 caracteres, teléfono con letras, documento corto, estudio no disponible y autorización sin marcar; todos los resultados fueron correctos.
- Build, lint y `git diff --check` pasan. No fue posible revisar la página renderizada en navegador ni en un teléfono real. Por ello el Paso 9 permanece sin marcar hasta hacer esa revisión visual.
## [2026-11-04] plan de mejora | Paso 12 parcial
- Revisé por código las rutas de odontólogo y paciente, catálogo de 18 servicios, navegación interna, formulario y destinos de enlaces. Añadí `aria-label` y `aria-expanded` al control del menú móvil.
- `npm run build`, `npm run lint` y `git diff --check` pasaron. La herramienta de navegador no abrió ni la vista local ni la publicada; la herramienta web tampoco permitió comprobar la página/portal y limitó las consultas a redes. No se envió ningún formulario ni mensaje.
- Paso 12 permanece abierto hasta revisar visualmente escritorio y teléfono y probar enlaces externos; cambios quedan guardados localmente sin publicación.
## [2026-11-04] plan de mejora | Paso 9, vista móvil preparada
- Inicié `npm run dev -- --host 0.0.0.0`. Los puertos 3000–3002 estaban ocupados y Vite quedó escuchando en el 3003, con dirección de red local anunciada para conexión Wi-Fi.
- La vista quedó lista para abrir desde un teléfono en la misma red. El paso sigue pendiente hasta que cargue y se revise el contenido en el dispositivo.
## [2026-11-04] plan de mejora | Paso 9, vista persistente
- La primera vista no abrió porque el servidor de desarrollo ya no estaba activo y el entorno aislado bloqueaba la comprobación de sockets en modo estándar. Inicié Vite en segundo plano con acceso de red en el puerto 3015.
- Verifiqué con acceso de red que `http://127.0.0.1:3015/` y `http://192.168.1.13:3015/` responden HTTP 200. La persona responsable debe abrir la última dirección desde el navegador del teléfono, en la misma Wi-Fi; la revisión visual sigue pendiente.

## [2026-11-05] continuidad del plan
- Al retomar el plan confirmé que el primer paso todavía sin completar en orden es el Paso 5; el Paso 6 también sigue parcial, pero viene después.
- El Paso 5 ya tiene 18 fichas y seis imágenes únicas autorizadas. Para completarlo faltan explicaciones aprobadas e imágenes distintas para 12 servicios; no inventé contenido ni reutilicé fotos.
- Se conserva el trabajo local sin commit. Próxima acción: recibir material empresarial para el Paso 5 o indicar que se priorice el Paso 6.

## [2026-11-05] plan de mejora | Paso 5 actualizado con fotos nuevas
- Revisé visualmente los siete archivos nuevos de `Docs/` y los copié sin alterar los originales a `public/assets/services/`: senos paranasales, cráneo PA, periapical, coronal, cefalometría, modelos y escáner intraoral.
- Actualicé las fichas correspondientes en `ServicesSection.tsx`. Por indicación de la persona responsable, `MODELOS.jpg` aparece en modelos de estudio y de trabajo.
- No se detectaron datos identificativos visibles en las imágenes nuevas. El paso sigue parcial: faltan imágenes para oclusal, modelos virtuales, estudios virtuales y paquete de ortodoncia, además de explicaciones aprobadas.

## [2026-11-05] plan de mejora | Paso 5: aclaraciones y RX oclusal
- Revisé visualmente `Docs/rx oclusal.webp`, la copié intacta a `public/assets/services/oclusal.webp` y añadí la imagen a su ficha.
- Por indicación de la persona responsable, `scanner-intraoral.png` se usa también en «Modelos virtuales». Actualicé la descripción de estudios virtuales como estudios que se pueden enviar virtualmente y describí el paquete de ortodoncia como compuesto por estudios como panorámica y perfil.
- Se mantiene el paso parcial: faltan imágenes propias para estudios virtuales y paquete de diagnóstico, y explicaciones aprobadas para las fichas restantes.

## [2026-11-05] plan de mejora | Paso 5 completado
- La persona responsable confirmó que las fichas pueden quedarse con sus descripciones concisas, las imágenes compartidas acordadas y los iconos donde no se requiere imagen propia.
- Marqué el Paso 5 como completado en el plan y actualicé la wiki. La revisión visual general sigue pendiente en los pasos 9 y 12.
- El siguiente paso pendiente en orden es el Paso 6: portal oficial y explicación de entrega de estudios.

## [2026-11-05] plan de mejora | Paso 6 revisado parcialmente
- Consulté el sitio institucional: confirma el enlace de «Mis Radiografías» a `sistema.maxilodentrx.com` y describe modalidades de entrega por correo, CD o impresión; menciona tomografías en CD. La herramienta web no pudo abrir el subdominio hoy.
- No cambié el texto de entrega en la landing: la información pública y el texto propuesto en el plan no coinciden exactamente y falta confirmar el proceso vigente.

## [2026-11-05] plan de mejora | Paso 6: texto aprobado y aplicado
- La persona responsable eligió el texto del plan: la tomografía (cortes y resultado) se envía al doctor y el doctor consulta la radiografía en «Mis Radiografías».
- Actualicé la ruta de paciente, la sección «Cómo remitir» y las preguntas frecuentes. El enlace mantiene el destino que aparece en el sitio institucional.
- Seguí el enlace institucional; la consulta devolvió 502. El Paso 6 queda parcial hasta que el portal abra.

## [2026-11-05] plan de mejora | Aclaración SSL del portal
- La persona responsable confirmó que `sistema.maxilodentrx.com` no cuenta con certificado SSL y muestra una advertencia de sitio no seguro.
- Registré que el destino de la landing es el portal institucional indicado y que queda pendiente habilitar SSL en el subdominio para completar el acceso seguro del Paso 6.

## [2026-11-05] plan de mejora | Paso 7 revisado y aviso ampliado
- Inspeccioné el formulario existente: mantiene cuatro datos del paciente/doctor, estudio, validación completa, autorización expresa y preparación de mensaje para el WhatsApp confirmado; no envía automáticamente.
- Probé localmente un caso válido y otro inválido con valores completamente ficticios. El caso válido quedó sin errores; el inválido marcó nombre, documento, teléfono, doctor, estudio y autorización.
- Amplié el aviso provisional con MAXILODENT SAS, finalidad de tramitar la orden, derechos y los contactos publicados en la web institucional. La política no está enlazada en las páginas consultadas.
- El paso sigue parcial: falta confirmar el contacto de privacidad, obtener la política y hacer la prueba externa. No se enviaron mensajes.

## [2026-11-05] plan de mejora | Paso 7: intento de prueba por WhatsApp
- La persona responsable autorizó enviar una muestra con datos ficticios al WhatsApp oficial. Abrí el enlace y comprobé que el número destino y el contenido estaban correctos.
- WhatsApp Web solicitó vincular esta sesión escaneando un QR. No vinculé una nueva sesión del usuario; la prueba no se envió.
- La persona responsable debe enviar el mensaje desde su WhatsApp, o vincular el navegador manualmente si quiere continuar la prueba aquí. La política de tratamiento completa también sigue pendiente.

## [2026-11-05] plan de mejora | Paso 7: prueba recibida
- La persona responsable confirmó recepción en el WhatsApp oficial del mensaje de prueba ficticio y confirmó identidad, finalidad y canales del aviso.
- La persona responsable indica que tiene una política de tratamiento de datos, pero no aparece aún entre los archivos de `Docs/`. El Paso 7 permanece parcial hasta recibirla y revisar su incorporación.

## [2026-11-05] plan de mejora | Paso 7: recepción confirmada; política pendiente
- La persona responsable confirmó que el mensaje ficticio llegó al WhatsApp oficial, y confirmó identidad, finalidad y canales de privacidad.
- La persona responsable informa que dispone de un documento de política de tratamiento, pero todavía no está en `Docs/`; el paso permanece parcial hasta recibirlo y revisar su incorporación.

## [2026-11-05] plan de mejora | Paso 7 completado localmente
- Revisé visualmente las 11 páginas de `Docs/EST03 POLITICA DE TRATAMIENTO DE DATOS PERSONALES.pdf`; contiene responsable, finalidad, categorías de datos sensibles, derechos, procedimiento de consultas/reclamos y canales oficiales. No vi datos de pacientes.
- Copié el original sin modificar a `public/politica-tratamiento-datos-personales.pdf`; la comparación SHA-256 confirma que son idénticos. Añadí el enlace al aviso del formulario.
- La persona responsable confirmó la recepción de la prueba de WhatsApp con datos ficticios y aprobó responsable, finalidad y canales. Paso 7 completado en la versión local, pendiente de publicación.

## [2026-11-06] plan de mejora | Paso 9: revisión móvil parcial
- Revisé de nuevo el formulario y CSS responsive: entradas de 16 px, controles de al menos 48 px, límites de longitud y validaciones para nombres, documento y teléfono.
- `npm run lint` y `npm run build` pasaron; Vite inició en `192.168.1.11:3015`.
- El navegador aislado no pudo abrir `localhost` ni la IP local. No hice inspección renderizada ni en teléfono real; el Paso 9 permanece pendiente de comprobar ambas rutas, servicios, formulario y acceso al portal desde un celular.

## [2026-11-06] plan de mejora | Paso 9: revisión renderizada móvil
- La persona responsable confirmó que la vista local abrió. Revisé ambas rutas en una vista estrecha: selección de perfil funciona, las tarjetas quedan en una columna y el menú móvil presenta los accesos.
- Al navegar a «Orden virtual», el encabezado fijo ocultaba parte del encabezado/campos del formulario. Agregué `scroll-mt-36` a la sección y volví a comprobar: título, nombre, documento y teléfono quedan visibles debajo del menú fijo.
- En formulario, campos vacíos y documento/teléfono inválidos muestran los errores previstos. `npm run lint`, `npm run build` y `git diff --check` pasan.
- No abrí el portal por la advertencia de certificado SSL comunicada por la persona responsable. La comprobación en teléfono físico, teclado y tacto sigue pendiente; el paso permanece parcial.

## [2026-11-06] plan de mejora | Paso 9: perfil confirmado por la persona responsable
- La persona responsable confirmó que puede cambiar entre los perfiles de odontólogo y paciente en su dispositivo.
- Retiré el cambio de perfil de la lista de comprobaciones pendientes. Queda revisar servicios y formulario con teclado y tacto en el teléfono físico; el portal aún muestra una advertencia SSL.

## [2026-11-06] plan de mejora | Paso 9 completado localmente
- La persona responsable confirmó que recorrió los servicios y probó el formulario desde su celular usando el teclado y el tacto; el cambio entre perfiles ya se había confirmado.
- Marqué el Paso 9 completado en el plan. El ajuste de margen del formulario, lint, build y diff-check están comprobados.
- La advertencia SSL del portal permanece como asunto separado del Paso 6. La landing sigue sin publicar los cambios locales.

## [2026-11-06] plan de mejora | Paso 12: auditoría final parcial
- Revisé en escritorio la portada, selección de perfiles, catálogo, orden y pie de página. La persona responsable confirmó el cambio de perfiles, el recorrido de servicios y el uso del formulario con teclado y tacto desde su celular.
- En prueba local, «Incluir en orden virtual» precargó el estudio seleccionado y el formulario vacío mostró errores sin abrir WhatsApp.
- Instagram llegó al perfil `@maxilodent` y Facebook a `/maxilodentrx/`, ambos con pantallas de registro/inicio de sesión. WhatsApp llegó al perfil comercial oficial con el texto esperado, sin enviar el mensaje. Los enlaces de correo, teléfono y política se muestran en el formulario.
- El portal oficial no abrió por `ERR_CERT_AUTHORITY_INVALID`; no omití la advertencia. El paso queda parcial hasta reparar SSL y retestar. También siguen pendientes de sustento las afirmaciones comerciales señaladas en [[pendientes]].
- `npm run lint`, `npm run build` y `git diff --check` pasaron. Los cambios siguen locales y no se publicaron.

## [2026-11-06] negocio | Tiempos de entrega confirmados
- La persona responsable confirmó 24 horas para tomografías con lectura y entrega inmediata para radiografías.
- Actualicé la FAQ local para indicar ambos tiempos junto con la vía de entrega/consulta ya aprobada. El portal sigue bloqueado por certificado SSL; el cambio no se ha publicado.

## [2026-11-06] negocio | Trayectoria y afirmaciones técnicas confirmadas
- La persona responsable confirmó que Maxilodent opera desde 2008, usa KaVo OP300, Anatomage InVivo y Clinic View, y que son correctas las características, compatibilidades, doble revisión certificada y licencia/resolución listadas en la página.
- Registré estas confirmaciones en [[empresa]]. Sigue pendiente verificar autorización/autenticidad de testimonios y respaldar la cifra/comparación exactas de reducción de dosis (85 % frente a tomografía médica convencional); el dato público oficial localizado para KaVo corresponde a otro protocolo/comparador.
- El Paso 12 permanece parcial hasta resolver SSL del portal y esos dos puntos.

## [2026-11-10] vista local | Servidor en localhost
- Inicié Vite en `http://127.0.0.1:3016/` a solicitud de la persona responsable.
- El servidor queda ligado al loopback del computador; la página no se publicó ni se expuso a la red local.

## [2026-11-10] portada | Banner de identidad
- Agregué debajo del encabezado un banner con el logo existente en tamaño grande, «MAXILODENT» y «Diagnóstico por imágenes para odontología», como solicitó la persona responsable.
- El cambio permanece local y se comprueba en la vista previa antes de cerrar.

## [2026-11-10] portada | Contraste del logo y acceso financiero
- Reemplacé el título independiente del banner por una variante del logo existente adaptada para el fondo verde azulado: símbolo blanco y letras naranjas; conservé la frase «Diagnóstico por imágenes para odontología».
- Añadí el enlace «Estados financieros» en el encabezado de escritorio y el menú móvil, dirigido a la URL indicada por la persona responsable.
- Los cambios siguen locales, sin publicar.

## [2026-11-10] portada | Ajuste final de colores del logo y portal
- Ajusté el logo del banner para que el símbolo y la palabra MAXILODENT queden blancos y la frase secundaria naranja, según la aclaración de la persona responsable.
- Cambié a naranja los textos e iconos de acceso a «Mis Radiografías» en el encabezado y el menú móvil.

## [2026-11-10] navegación | Reubicación de accesos
- Retiré el botón y el icono de «Mis Radiografías» del encabezado y su acceso del menú móvil, como pidió la persona responsable.
- Moví «Estados financieros» a un botón fijo en la esquina inferior derecha, situado encima del botón flotante de WhatsApp.

## [2026-11-10] portada y pie | Ubicación de enlace y texto
- Moví «Estados financieros» al final de la página, después del pie de página, como pidió la persona responsable.
- Quité de la portada la etiqueta «Portal Exclusivo Odontólogos & Clínicas»; la etiqueta del perfil de pacientes sigue visible para ese perfil.

## [2026-11-19] vista local | Servidor reiniciado
- Reinicié Vite en `http://127.0.0.1:3016/` a solicitud de la persona responsable para reanudar la previsualización local.
