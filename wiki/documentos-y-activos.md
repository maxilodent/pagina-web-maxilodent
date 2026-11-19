---
tipo: catálogo-de-activos
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-05
tags: [fuentes, activos, documentos]
fuentes: ["Docs/", "public/assets/aistudio/"]
---
# Documentos y activos

`Docs/` es la entrada de originales; se conservan en su ubicación y no se reorganizaron ni modificaron. Inventario al 2026-11-04: 10 imágenes, un PDF y un video. La persona responsable confirmó que las imágenes son propias y autorizó su uso. Se revisaron visualmente las imágenes; `Docs/periapica.pdf` también se abrió y muestra datos personales visibles, por lo que no se copia a la web. El video sigue sin inspección. `.aistudio/` contiene cuatro archivos temporales de imagen, no una copia de la primera versión de la web.

| Ruta original | Categoría | Descripción revisada | Uso posible | Pendiente / relación |
|---|---|---|---|---|
| `Docs/1.jpeg` | Instalaciones / identidad visual | Foto horizontal de recepción con rótulo Maxilodent. | Imagen de sede; la landing ya usa una imagen similar. | Revisar si es el mismo archivo que `public/assets/aistudio/1_e64dfff7.jpeg`; confirmar autorización de publicación. |
| `Docs/2.jpeg` | Equipo / servicio | Foto de profesional posicionando a un paciente frente al equipo de radiografía. | Portada de la landing; la persona responsable confirmó disponibilidad y permiso de uso. | SHA-256 coincide exactamente con la copia servida `public/assets/aistudio/2_034ad018.jpeg`. |
| `Docs/PHOTO-2026-06-24-19-32-28.jpg` | Equipo / servicio | Foto vertical de profesional clínico mostrando imágenes diagnósticas en pantalla y teléfono. | Sección de tecnología o servicio. | La persona responsable confirmó que cuenta con una foto propia autorizada para portada, pero aún no identificó el archivo específico; verificar si esta es la indicada. |
| `Docs/ap.jpeg`, `Docs/atm.jpeg`, `Docs/carpograma.jpeg`, `Docs/panoramica.jpeg`, `Docs/perfil.jpeg`, `Docs/render 3d tomo.jpeg`, `Docs/WhatsApp Image 2026-10-29 at 5.47.24 PM.jpeg` | Imágenes diagnósticas | Revisadas visualmente el 2026-11-04. Representan cráneo AP, ATM, carpograma, panorámica, perfil y Cone Beam 3D. La persona responsable confirmó autoría y permiso de uso. | Copias seleccionadas para seis fichas de servicio en `public/assets/services/`. | `WhatsApp Image...jpeg` y `render 3d tomo.jpeg` son duplicados exactos (SHA-256). Quedan pendientes imágenes distintas para otros servicios. |
| `Docs/periapica.pdf` | Documento / imagen diagnóstica | Revisado visualmente el 2026-11-04; contenía datos personales visibles junto a una imagen periapical. | No se usó en la web. | Ya no aparece en el inventario actual (2026-11-05); no se alteró ni recuperó. |
| `Docs/video.mp4` | Video / material audiovisual | Video de 5.98 MB; su contenido no fue revisado. | Aún sin determinar. | Requiere inspección visual y confirmar autorización antes de publicarlo. |
| `public/assets/aistudio/1_e64dfff7.jpeg` | Copia técnica / instalaciones | Activo servido por la web; parece ser copia de `Docs/1.jpeg`, no comparado por hash. | Imagen del pie de página. | Relación probable, pendiente de comparación. |
| `public/assets/aistudio/2_034ad018.jpeg` | Copia técnica / servicio | Copia byte por byte de `Docs/2.jpeg` (SHA-256 verificado 2026-11-04). | Foto principal (hero). | Ya se usa en `src/components/Hero.tsx`; el encuadre se ajustó para móvil. |
| `public/assets/services/` | Copias web de originales aprobados | Seis imágenes copiadas sin alterar desde originales autorizados: Cone Beam 3D, panorámica, perfil, ATM, cráneo AP y carpograma. | Imágenes individuales de sus fichas de servicio. | No hay un archivo único para cada una de las 18 fichas; faltan 12 imágenes distintas. |
| `public/assets/aistudio/logo__2__eb17db82.png` | Identidad visual | Logo que usa el pie de página. | Marca de la landing. | No se encontró original equivalente en `Docs/`; pendiente de fuente/autorización. |
| `public/assets/aistudio/logo-maxilodent-contraste.png` | Identidad visual | Variante local con símbolo y palabra MAXILODENT blancos y frase secundaria en naranja, preparada desde el logo existente para el fondo verde azulado del banner. | Banner de inicio. | Derivada de `logo__2__eb17db82.png`; no reemplaza ni modifica ese archivo. |

## Fuentes de la empresa
No se encontró documentación textual empresarial en `Docs/`. La fuente de la versión descargada no está presente como ZIP. El código existente y el `README.md` son evidencia de lo implementado, no validación independiente de las afirmaciones. No existe carpeta `fuentes/`; si se agrega alguna fuente separada, enlazarla aquí sin duplicar `Docs/`.

Actualiza este catálogo cuando aparezcan archivos nuevos o cambien los existentes; registra archivos que no se puedan abrir y no elimines versiones o duplicados automáticamente.

## Material recibido en `plan de mejora/`
El inventario de esta carpeta se documenta en [[plan-de-mejora]]. Los Markdown y el ZIP original se conservaron. El ZIP SEO se extrajo e instaló dentro de `.agents/skills/seo-organico-ia/` para completar el Paso 0; no se ejecutó su script.

## Material nuevo recibido el 2026-11-05
Se revisaron visualmente siete imágenes nuevas en `Docs/`: `SENOS NASALES.jpg` (senos paranasales), `PA.jpg` (cráneo PA), `periapical.JPG` (periapical), `RX CORONAL.jpg` (coronal), `CEAFLOMETRIA.JPG` (análisis cefalométrico), `MODELOS.jpg` (modelos dentales) y `SCANNER.png` (modelo dental digital/escáner intraoral). No se observan nombres u otros identificadores personales en las vistas revisadas. Los originales se conservaron y se copiaron a `public/assets/services/` con nombres normalizados.

La persona responsable indicó que `MODELOS.jpg` puede usarse tanto en «Modelos de estudio» como en «Modelos de trabajo»; por ello ambas fichas comparten esa imagen, según esa indicación. Las imágenes nuevas no cubren radiografía oclusal, modelos virtuales, estudios virtuales ni paquete de diagnóstico de ortodoncia. Las descripciones comerciales de cada servicio siguen sin validación específica.

La imagen nueva `Docs/rx oclusal.webp`, recibida el 2026-11-05, se revisó visualmente: corresponde a una radiografía oclusal y no muestra identificadores personales visibles. Su copia web está en `public/assets/services/oclusal.webp`.

## Política de tratamiento de datos personales
- **Original:** `Docs/EST03 POLITICA DE TRATAMIENTO DE DATOS PERSONALES.pdf` (11 páginas, versión 01, aprobada el 03/11/2026). Revisada visualmente página por página el 2026-11-05; establece finalidades asistenciales/administrativas, datos sensibles de salud, derechos, consultas/reclamos, conservación, seguridad, transmisiones y datos de responsable/canales. No vi datos de pacientes en las páginas revisadas.
- **Copia para el sitio:** `public/politica-tratamiento-datos-personales.pdf`, byte a byte idéntica al original (SHA-256 comprobado). El original en `Docs/` no se movió ni alteró.
