---
tipo: revisión-de-plan
estado: vigente
creado: 2026-11-04
actualizado: 2026-11-05
tags: [plan, mejoras, validacion]
fuentes: ["plan de mejora/11-maxilodent-s-a-s/plan-mejoras.md", "plan de mejora/11-maxilodent-s-a-s/validacion-con-cliente.md", "plan de mejora/11-maxilodent-s-a-s/instalar-skills.md", "plan de mejora/11-maxilodent-s-a-s/seo-organico-ia.zip", "Docs/"]
---
# Plan de mejora

## Inventario revisado
- `plan de mejora/11-maxilodent-s-a-s/plan-mejoras.md`: 13 pasos, desde instalación de skills hasta revisión final; indica avanzar un paso por conversación y no marcar pasos sin comprobar.
- `validacion-con-cliente.md`: cinco preguntas clave y una lista de materiales requeridos. La persona responsable confirmó WhatsApp, dominio del portal, colores actuales, lista de servicios, redes sociales, los textos actuales de las rutas y autoría/permiso de uso de imágenes propias.
- `instalar-skills.md`: indica instalación de varias skills desde ZIP y repositorios externos; Paso 0 completado y comprobado el 2026-11-04.
- `seo-organico-ia.zip`: contiene `SKILL.md`, tres referencias y un script de inspección estática; se instaló para el Paso 0. El script no se ejecutó.

## Hallazgos respecto al proyecto
- **Confirmado por inventario y revisión visual parcial:** `Docs/` contiene fotografías empresariales, imágenes radiográficas, un PDF y un video. Se revisaron las imágenes; el PDF periapical muestra datos personales visibles y no se usará en la web en su forma actual. Ver [[documentos-y-activos]].
- **Confirmado por la persona responsable:** WhatsApp de destino, dominio oficial indicado, colores actuales, lista de servicios, redes, textos actuales de las rutas y autorización de uso de imágenes propias. El texto de entrega del Paso 6 y la política del Paso 7 ya están aprobados e incorporados localmente; persiste la advertencia SSL del portal y la falta de revisión visual final.
- **Pendiente:** no se localizó en el inventario una copia de la primera versión de la web. Debe confirmarse si existe fuera de esta carpeta.
- **Pendiente:** el plan propone capturar documento de identidad y enviarlo; requiere destino confirmado y aviso de tratamiento de datos antes de cualquier conexión o prueba.
- **Portal:** el sitio `maxilodentrx.com` presenta el acceso «Mis Radiografías» enlazado a `sistema.maxilodentrx.com`; la disponibilidad del subdominio sigue pendiente de comprobación.
- **Confirmado por inspección de código:** la landing incluye selector de público, 18 fichas individuales de servicios, guía para pacientes, formulario de orden a WhatsApp, testimonios, FAQ y un banner CTA final.
- **Paso 2 completado en código:** conservé la paleta aprobada; ajusté el logo del encabezado con dimensiones originales y control accesible por teclado. Falta revisión renderizada del encabezado.
- **Paso 6 aplicado parcialmente:** se retiraron el simulador y los estudios de muestra; los accesos apuntan al portal enlazado desde el sitio oficial. El texto de entrega ya fue aprobado. El subdominio muestra una advertencia SSL; falta que su administrador configure el certificado.
- **Paso 7 completado localmente (2026-11-05):** el formulario valida datos, exige autorización y prepara el WhatsApp sin enviarlo automáticamente. El aviso enlaza la política aprobada; la persona responsable confirmó que la prueba ficticia llegó. Falta publicar los cambios.
- **Paso 8 completado:** el pie de página enlaza a los perfiles oficiales de Instagram y Facebook indicados por la persona responsable y aparece en ambas rutas. Se retiró LinkedIn porque no se confirmó el perfil. La herramienta web no pudo revisar el contenido de los perfiles debido a restricciones de esas plataformas.
- **Paso 9 aplicado parcialmente:** revisé en código los perfiles de odontólogo y paciente, los servicios, el formulario y los accesos al portal. La cuadrícula de servicios y formulario usan una columna en móvil; los controles del formulario tienen alto mínimo de 48 px y texto de 16 px. Añadí límites de longitud y probé la validación con valores ficticios: vacíos, válidos, nombres de 80/81 caracteres, teléfono con letras, documento corto, estudio no disponible y autorización sin marcar. Todos los casos dieron el resultado esperado; build, lint y `git diff --check` pasan. Falta la inspección visual renderizada y en teléfono real, por lo que el paso sigue sin marcarse completo.
- **Paso 12 aplicado parcialmente:** revisé por código ambas rutas, las 18 fichas de servicios, navegación interna, formulario y destinos de enlaces. Corregí el nombre accesible y estado expandido del botón de menú móvil. Build, lint y `git diff --check` pasan. No se pudo abrir la vista local en navegador ni la página publicada; el portal no cargó y las redes limitaron la consulta. Sigue pendiente la inspección visual en escritorio y teléfono y la comprobación funcional de enlaces externos.
- **Paso 10 completado:** el cambio de perfil y el modal de servicio tienen entradas breves solo cuando se activan con puntero; teclado y movimiento reducido muestran el contenido de inmediato. Build y lint pasan; falta revisión visual renderizada.
- **Paso 11 aplicado localmente:** el título y la descripción HTML ahora describen los servicios confirmados y Valledupar; se corrigió la promesa de Cone Beam en 24 horas que no tenía respaldo local. Se actualizaron los metadatos para compartir. La URL canónica, sitemap y datos estructurados quedan pendientes porque la landing está en GitHub Pages y `maxilodentrx.com` ya sirve el sitio institucional. Falta comprobar la salida publicada y Search Console.
- **Confirmado por búsqueda local:** no se encontró una copia de la primera versión. `.aistudio/` contiene cuatro archivos temporales de medios; el historial Git local tiene una versión de proyecto, sin un respaldo identificable de la versión anterior. No se inspeccionó la aplicación remota de AI Studio.
- **Paso 13 completado:** añadí `src/components/ServicesBanner.tsx` después de las fichas de servicios. Usa una imagen propia autorizada de Cone Beam, resume servicios confirmados y ofrece consulta por el WhatsApp aprobado; conserva el CTA existente al final.
- **Alcance de la revisión:** inspección estática de código y archivos; la herramienta web no pudo abrir la web publicada, por lo que no se confirmó la apariencia renderizada en esta sesión.

## Preguntas para la persona responsable
1. **Orden de servicio — Confirmado y probado:** llega al WhatsApp `+57 313 524 9123`; la persona responsable confirmó recepción de la prueba con datos ficticios. El formulario enlaza localmente el aviso y la política aprobada.
2. **Portal — Confirmado por la persona responsable:** `maxilodentrx.com` es el sitio oficial y enlaza `sistema.maxilodentrx.com`; la persona responsable informa que el subdominio no tiene certificado SSL.
3. **Entrega de estudios — Confirmada el 2026-11-05:** la tomografía (cortes y resultado) se envía directamente al doctor; el doctor consulta la radiografía en el portal.
4. **Foto y material diagnóstico — Confirmado parcialmente:** la persona responsable confirmó que las imágenes de `Docs/` son propias y autorizó su uso. Se copiaron seis imágenes distintas a la web. `Docs/periapica.pdf` contiene datos personales visibles y se excluyó; para otros servicios faltan imágenes distintas localizadas.
5. **Colores — Confirmado por la persona responsable:** conservar los colores que ya tiene la página; no se solicitaron alternativas.

### Información adicional recibida
- **Servicios indicados por la persona responsable:** tomografía Cone Beam 3D; radiografías extraorales: panorámica, perfil, ATM, senos paranasales, cráneo AP, PA y carpograma; radiografías intraorales: periapical, oclusal y coronal; análisis cefalométrico computarizado; modelos de estudio y de trabajo; modelos virtuales; estudios virtuales; paquete de diagnóstico de ortodoncia; escáner intraoral.
- **Redes oficiales indicadas:** [Instagram](https://www.instagram.com/maxilodent/) y [Facebook](https://www.facebook.com/maxilodentrx/).
- **Confirmado por la persona responsable (2026-11-04):** para las rutas de odontólogo y paciente/usuario se conservan los textos y la estructura actuales.
- **Pendiente:** aviso de tratamiento de datos; confirmar si existe copia de la primera versión de la web.

## Estado
- **Paso 0 completado (2026-11-04):** instaladas en `.agents/skills/` `seo-organico-ia`, `emil-design-eng`, `mobile-native` e `impeccable`; se comprobó la presencia del `SKILL.md` y archivos de soporte. Paso marcado `[x]` en el plan.
- **Paso 1 completado (2026-11-04):** revisados inventario, código de la landing, carpeta `.aistudio/` e historial Git para localizar la versión anterior. No se encontró copia de esa versión; se anotaron materiales y limitaciones junto al Paso 1. No se cambió código de la landing.
- **Paso 2 completado en código:** se conservó la paleta aprobada y el logo mantiene proporción con dimensiones intrínsecas; el control para volver al inicio tiene soporte de teclado y foco visible. La verificación renderizada del encabezado queda pendiente.
- **Paso 3 completado en código:** `Docs/2.jpeg` coincide byte por byte con la imagen propia y autorizada en la portada. El contenedor usa relación 5:4 en móvil y conserva los 460 px de alto desde `sm`, con dimensiones intrínsecas y carga prioritaria; la vista real en teléfono sigue pendiente.
- **Paso 4 completado (2026-11-04):** la persona responsable aprobó usar los textos y la estructura existentes. El selector usa etiquetas claras, estado `aria-pressed`, nombre accesible y foco visible; las rutas cambian la portada y paciente ve su guía. Build, lint y `git diff --check` pasaron. La vista previa local no abrió en el navegador disponible, por lo que la revisión visual queda pendiente.
- El Paso 5 ahora tiene 14 imágenes únicas en 16 fichas; las tarjetas de modelos de estudio/trabajo y scanner/modelos virtuales comparten sus imágenes por indicación de la persona responsable. «Estudios virtuales» no tiene ilustración propia y el paquete de ortodoncia mantiene un icono. Siguen pendientes ilustraciones apropiadas y explicaciones empresariales aprobadas.
- La revisión visual encontró datos personales en el PDF periapical, que se excluyó de la web. Las imágenes que no se asignaron al sitio se conservan en `Docs/`.

Ver [[documentos-y-activos]], [[pendientes]] y [[decisiones]].
