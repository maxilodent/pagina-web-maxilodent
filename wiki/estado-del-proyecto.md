---
tipo: estado
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [proyecto, estado]
fuentes: ["package.json", "README.md", "src/", "Docs/"]
---
# Estado del proyecto

## Página
- **Confirmado por inspección:** sitio React + TypeScript con Vite, en español, organizado por componentes y con estilos Tailwind CSS 4.
- **Confirmado por inventario:** `Docs/` ya existe; contiene tres imágenes y un video. No se encontró ZIP en la carpeta. La app de Google AI Studio figura en `README.md`.
- **Dependencias:** primera instalación detectó conflicto entre `vite@8` y `esbuild@0.25`. Se ajustó la dependencia directa a `^0.28.0`; `npm install` terminó correctamente y reportó cero vulnerabilidades.
- **Comprobaciones:** `npm run build` y `npm run lint` pasaron. `npm run dev` está activo en `http://127.0.0.1:3000/`. La compilación muestra una advertencia de Vite sobre `__dirname` en `vite.config.ts`; no impidió compilar.
- **Git:** repositorio local en rama `main`, identidad de este repositorio `Maxilodent <maxilodent@gmail.com>`. `main` está publicada en `https://github.com/maxilodent/pagina-web-maxilodent` y sigue `origin/main`.
- **Vista previa:** servidor activo. La revisión visual automatizada no se completó porque el control del navegador no pudo verificar la URL.
- **Publicación del código:** `main` subida a GitHub. Esto confirma el repositorio remoto, no que exista una web pública desplegada.

## Flujo visible
La landing ofrece una selección entre odontólogos y pacientes, servicios, acceso a un portal externo, formulario de orden que abre WhatsApp y un botón flotante de WhatsApp. La ruta exacta de orden aún requiere prueba funcional; no se envió ningún mensaje.

## Siguiente paso
Pedir al usuario que coloque aquí el ZIP original si desea archivarlo como fuente inmutable, y validar datos comerciales/afirmaciones pendientes en [[pendientes]]. Después preparar dependencias con el gestor acordado y abrir la vista previa local.

Ver [[empresa]], [[documentos-y-activos]] y [[pendientes]].
