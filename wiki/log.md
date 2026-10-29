---
tipo: registro
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [log, historial]
fuentes: ["AGENTS.md", "wiki/"]
---
# Registro cronológico

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
