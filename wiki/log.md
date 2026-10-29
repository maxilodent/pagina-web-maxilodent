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
