---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-19
tags: [proyecto, estado]
fuentes: ["package.json", "README.md", "src/", "Docs/"]
---
# Estado del proyecto

## Página`r`n- **Vista local (2026-11-19):** Vite reiniciado en `http://127.0.0.1:3016/` a solicitud de la persona responsable; servidor local para previsualización.`r`n- **Banner de inicio (2026-11-10):** debajo del encabezado fijo muestra el logo Maxilodent con símbolo y palabra MAXILODENT en blanco, frase secundaria del logo en naranja y «Diagnóstico por imágenes para odontología» debajo. Cambio local, sin publicar.
- **Enlace al final de la página (2026-11-10):** «Estados financieros» está después del pie de página, alineado a la derecha; se retiró su posición flotante. Los accesos a Mis Radiografías se retiraron de la navegación; sigue disponible el enlace de la portada.
- **Portada (2026-11-10):** retiré la etiqueta «Portal Exclusivo Odontólogos & Clínicas»; se conserva la etiqueta del perfil de pacientes.
- **Confirmado por inspección:** sitio React + TypeScript con Vite, en español, organizado por componentes y con estilos Tailwind CSS 4.
- **Confirmado por inventario (2026-11-04):** `Docs/` contenía 10 imágenes, un PDF y un video.
- **Inventario actualizado (2026-11-05):** `Docs/` contiene 19 imágenes, un PDF de política de tratamiento y un video; `Docs/periapica.pdf` ya no aparece en la carpeta. `.aistudio/` contiene cuatro archivos temporales de imagen, no una copia de la primera versión. No se encontró ZIP original de la app. La app de Google AI Studio figura en `README.md`.
- **Dependencias:** primera instalación detectó conflicto entre `vite@8` y `esbuild@0.25`. Se ajustó la dependencia directa a `^0.28.0`; `npm install` terminó correctamente y reportó cero vulnerabilidades.
- **Comprobaciones:** `npm run build` y `npm run lint` pasaron. Vista local iniciada con Vite en `http://127.0.0.1:3016/`, enlazada solo a loopback para abrirse en este computador. La compilación muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`; no impidió compilar.
- **Git:** repositorio local en rama `main`, identidad de este repositorio `Maxilodent <maxilodent@gmail.com>`. `main` está publicada en `https://github.com/maxilodent/pagina-web-maxilodent` y sigue `origin/main`.
- **Vista previa:** en la revisión del 2026-11-04 se inspeccionó el código fuente. El navegador web disponible no pudo abrir la URL publicada; por tanto, no se hizo una nueva revisión visual renderizada.
- **Publicación:** landing publicada en [GitHub Pages](https://maxilodent.github.io/pagina-web-maxilodent/). La ejecución `Publicar landing en GitHub Pages` finalizó en `success`.
- **Verificación en línea previa:** página, JavaScript y CSS respondieron HTTP `200`; la compilación anterior contenía una etiqueta de datos ficticios.
- **Paso 6 parcial (2026-11-06):** los accesos a «Mis Radiografías» apuntan al portal enlazado desde el sitio institucional. La persona responsable confirmó 24 horas para tomografías con lectura y entrega inmediata de radiografías; esa información está en el FAQ local. El portal devuelve `ERR_CERT_AUTHORITY_INVALID`; falta corregir SSL.
- **Paso 11 (2026-11-04):** `index.html` tiene título y descripción SEO actualizados y etiquetas de vista previa en redes. No hay `robots.txt`, sitemap ni canonical configurados. `maxilodentrx.com` ya sirve el sitio institucional y este código se compila para GitHub Pages; se necesita resolver el destino del dominio antes de declarar canonical o sitemap.
- **Paso 2 (2026-11-04):** encabezado conserva la paleta aprobada; logo con proporción natural, dimensiones intrínsecas y control de retorno al inicio accesible por teclado. Falta confirmar composición renderizada.
- **Paso 13 (2026-11-04):** agregado un banner de servicios entre el catálogo de estudios y la sección de cómo remitir. Usa una imagen autorizada, oferta indicada por la persona responsable y enlace con mensaje preparado hacia WhatsApp.
- **Paso 3 (2026-11-04):** la portada usa la foto propia autorizada de `Docs/2.jpeg`; el encuadre móvil ahora muestra más de la escena en proporción 5:4 y la imagen declara tamaño 1280×853. Falta validación en un teléfono real.
- **Paso 9 (2026-11-04, parcial):** revisé el comportamiento responsive por código y añadí límites de longitud al formulario. Casos ficticios de validación y controles estáticos responsive revisados; build, lint y `git diff --check` pasan. Falta comprobación visual en navegador y teléfono real.
- **Vista celular (2026-11-04):** inicié la vista de desarrollo en segundo plano para abrirla desde un teléfono conectado a la misma Wi-Fi: puerto 3015. Responde HTTP 200 localmente. Falta que la persona responsable la abra y reporte si se carga.
- **Paso 9 completado localmente (2026-11-06):** comprobé vista móvil renderizada, ambas rutas, catálogo de una columna, anclaje del formulario y errores de validación. La persona responsable confirmó en su teléfono el cambio de perfiles, recorrido de servicios y uso del formulario con teclado y tacto. Lint, build y diff-check pasan. La advertencia SSL del portal queda pendiente del Paso 6.
- **Paso 12 revisado parcialmente (2026-11-06):** revisión renderizada de escritorio; la persona responsable confirma el recorrido de perfiles, servicios y formulario en teléfono. Probé la precarga de estudio y validación vacía; Instagram, Facebook y WhatsApp resuelven a sus destinos previstos. La responsable confirmó trayectoria, equipo y especificaciones publicadas. El portal devuelve `ERR_CERT_AUTHORITY_INVALID`; falta corregir SSL. También falta verificar autorización de testimonios y conseguir respaldo técnico que coincida con la comparación exacta de reducción de dosis del 85 %.
- **Vista local (2026-11-10):** Vite iniciado en `http://127.0.0.1:3016/` a solicitud de la persona responsable; servicio local solo en este computador, sin publicación.
- **Paso 12 (2026-11-04, parcial):** auditoría de código de perfiles, servicios, navegación, formulario y destinos. Mejoré nombre accesible y estado del botón de menú móvil. Build, lint y `git diff --check` pasan. No se pudo abrir la vista previa local o publicada desde el navegador; falta revisión visual y prueba funcional de enlaces externos. La versión editada queda guardada localmente, sin publicar.

## Flujo visible
La landing ofrece una selección entre odontólogos y pacientes, 18 fichas individuales de servicios, acceso al portal externo, formulario con cuatro datos personales requeridos y selección de estudio, botón flotante de WhatsApp y banner CTA al final. El formulario valida los campos y prepara un mensaje para WhatsApp que solo se envía si la persona lo confirma en la aplicación. Seis fichas usan imágenes distintas autorizadas y copiadas desde `Docs/`; las otras fichas muestran iconos. El simulador de estudios se retiró. La responsable confirmó entrega en 24 horas para tomografías con lectura y de forma inmediata para radiografías; el dato ya aparece en FAQ. El portal `sistema.maxilodentrx.com` aún falla por certificado SSL. La persona responsable confirmó recepción de una prueba de WhatsApp con datos ficticios el 2026-11-05.

## Siguiente paso
Revisar la landing publicada en escritorio y móvil cuando se disponga de navegador, y validar las afirmaciones comerciales pendientes en [[pendientes]].

Ver [[empresa]], [[documentos-y-activos]] y [[pendientes]].
