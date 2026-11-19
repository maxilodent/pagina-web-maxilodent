---
tipo: pendientes
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-06
tags: [pendientes, validacion]
fuentes: ["README.md", "src/", "Docs/"]
---
# Pendientes

## Bloqueos para vista previa
- La vista local abre en el navegador. La página ya se inspeccionó renderizada en escritorio; la persona responsable confirmó en su celular el cambio de perfiles, recorrido de servicios y prueba del formulario con teclado y tacto.
- **Paso 9 completado localmente (2026-11-06):** comprobación móvil y del formulario descrita en [[plan-de-mejora]]. El acceso al portal conserva advertencia SSL, registrada en el Paso 6.
- No se encontró la copia de la primera versión: `.aistudio/` contiene medios temporales solamente y el historial Git disponible no contiene una versión anterior identificable. La URL de AI Studio está en `README.md`, pero no se inspeccionó esa copia remota.

## Validación de negocio y publicación
- La persona responsable confirmó la lista de servicios y perfiles sociales en la conversación del 2026-11-04; el 2026-11-06 confirmó trayectoria desde 2008, equipos/software, especificaciones, compatibilidad, doble revisión certificada y licencia/resolución. También confirmó 24 horas para tomografías con lectura e inmediato para radiografías.
- **Pendiente de respaldo:** autorización/autenticidad de testimonios y nombres; fuente técnica que coincida con la afirmación exacta de reducción de dosis del 85 % frente a tomografía médica convencional. KaVo publica un dato distinto para otro protocolo/comparador; no lo tomo como verificación de esta frase.
- Confirmar dirección y horarios. En el Paso 8, los enlaces sociales se actualizaron a los perfiles que confirmó la persona responsable; la consulta automatizada no pudo cargar Instagram y Facebook limitó temporalmente el acceso.
- Inspeccionar `Docs/video.mp4` y comparar las fotos de `Docs/` con las copias web; confirmar permisos de publicación.
- **Paso 7 completado localmente (2026-11-05):** el aviso enlaza la política aprobada desde el formulario; la persona responsable confirmó la recepción de la prueba ficticia. Falta publicación junto con la siguiente versión del sitio.
- La landing figura como publicada en GitHub Pages en [[estado-del-proyecto]]. El sitio `maxilodentrx.com` enlaza «Mis Radiografías» a `sistema.maxilodentrx.com`; al seguir ese enlace la consulta respondió 502, por lo que la disponibilidad y el acceso real siguen pendientes.

## Próximo cambio sugerido
Una vez esté disponible la vista previa, revisar la sección de testimonios porque publica nombres y citas que no aparecen respaldados en `Docs/`. Se puede validar el material o reemplazar esa sección por contenido comprobado, según lo que indique la persona responsable.

- **Paso 10:** implementadas animaciones breves para selección con puntero y apertura de detalle. El teclado abre/cambia sin animación y `prefers-reduced-motion` la desactiva. Falta revisión visual renderizada en navegador.
- **Paso 11:** metadatos SEO básicos actualizados en `index.html`; falta definir con quien administra el dominio cómo debe dirigirse a la landing frente al sitio institucional que hoy ocupa `maxilodentrx.com`. Hasta resolverlo, no configurar URL canónica ni sitemap. Confirmar dirección, horario y demás datos empresariales antes de publicarlos como estructurados; Search Console y revisión renderizada quedan pendientes. El inspector SEO incluido no se ejecutó porque Python no está disponible en este entorno.

## Plan de mejora recibido
- **Pendiente de validación:** resolver las preguntas de [[plan-de-mejora]] antes de modificar funciones, textos comerciales, imágenes o destinos de datos.
- **Privacidad de imágenes:** la persona responsable confirmó autoría y permiso para usar imágenes propias; seis imágenes se asignaron a fichas de servicio. `Docs/periapica.pdf` incluye datos personales visibles y no se usa en la web; solicitar una versión anonimizada si se quiere usar esa toma.
- **Paso 6 parcial:** se eliminó el simulador local y los accesos apuntan al portal oficial. El texto sobre entrega se aprobó; la responsable confirmó 24 horas para tomografías con lectura e inmediato para radiografías (2026-11-06), ahora reflejado en FAQ. Falta que el administrador corrija SSL: el portal devuelve `ERR_CERT_AUTHORITY_INVALID`.
- **Paso 7 completado localmente (2026-11-05):** el formulario solicita los datos de la orden, valida entradas, prepara el mensaje para el WhatsApp confirmado y requiere autorización expresa. El aviso resume responsable, finalidad, derechos y canales y enlaza a la política aprobada; la persona responsable confirmó recepción de la prueba ficticia. No se ha publicado el cambio.
- **Paso 13 completado:** banner adicional de servicios implementado; `CtaBanner` original permanece al final. Revisar renderizado en móvil y escritorio cuando vuelva a estar disponible la vista previa.
- **Paso 9 completado localmente (2026-11-06):** la persona responsable confirmó el cambio entre perfiles y las pruebas de servicios/formulario en teléfono físico. El ajuste `scroll-mt-36` evita que el encabezado fijo cubra la orden; casos vacíos y números inválidos muestran errores. Lint, build y diff-check pasan. La advertencia SSL del portal sigue pendiente del Paso 6.
- **Paso 12 parcial (2026-11-06):** revisión renderizada de portada, perfiles, 18 servicios, formulario y pie en escritorio; la responsable confirmó la revisión móvil de perfiles, servicios y formulario. La responsable confirmó las afirmaciones de trayectoria/equipo/especificaciones enumeradas en [[empresa]]. WhatsApp llega al perfil oficial con mensaje listo, sin envío; Instagram/Facebook llegan a los perfiles, pero muestran pantallas de registro/inicio de sesión. El portal presenta `ERR_CERT_AUTHORITY_INVALID`; corregir SSL y retestear. Siguen pendientes autorización/autenticidad de testimonios y soporte técnico exacto de la cifra del 85 % frente a tomografía médica. `npm run lint`, `npm run build` y `git diff --check` pasan.
- **Paso 2:** ajuste del logo y conservación de paleta completados en código; queda revisión visual renderizada del encabezado.
- **Paso 3:** imagen real autorizada instalada y encuadre responsive ajustado; falta revisar el resultado en un teléfono real.
- **Paso 4:** textos actuales de los perfiles aprobados por la persona responsable. El selector cambia el perfil mediante botones nativos con soporte de teclado y estado accesible; queda pendiente revisión visual porque el navegador no pudo abrir la vista previa local.
- **Paso 5 completado (2026-11-05):** los 18 servicios confirmados aparecen en fichas individuales, sin especificaciones o promesas no validadas. Hay 14 imágenes únicas asignadas a 16 fichas; modelos de estudio/trabajo y scanner/modelos virtuales comparten imágenes según indicación de la persona responsable. La imagen de escáner intraoral también se usa en modelos virtuales por indicación de la persona responsable. «Estudios virtuales» se refiere al envío virtual de estudios; el paquete de ortodoncia reúne estudios como panorámica y perfil. La persona responsable confirmó que las fichas pueden quedar así. La revisión visual general se conserva como pendiente de los pasos 9 y 12. `Docs/periapica.pdf` contiene datos personales visibles; no se publica hasta recibir una versión anonimizada. La vista previa renderizada no se pudo revisar.
