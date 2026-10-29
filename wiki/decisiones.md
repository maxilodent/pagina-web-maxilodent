---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-10-29
tags: [decisiones, proyecto]
fuentes: ["AGENTS.md", "package.json", "Docs/"]
---
# Decisiones

## 2026-10-29 — Conservar la aplicación actual
- **Decisión:** mantener React, TypeScript, Vite, la estructura por componentes y los activos existentes.
- **Motivo:** la página está ya construida y no se ha solicitado un rediseño.
- **Fuente:** `package.json`, `src/`, `public/`.

## 2026-10-29 — Mantener `Docs/` como originales
- **Decisión:** no mover ni copiar materiales; registrar catálogo y limitaciones de revisión en la wiki.
- **Motivo:** los originales ya están en la carpeta pedida y la copia organizada no aporta valor por ahora.
- **Fuente:** inventario de `Docs/`.

## 2026-10-29 — No editar todavía el contenido comercial
- **Decisión:** conservar la página sin modificar afirmaciones hasta tener una solicitud concreta o respaldo/autorización.
- **Motivo:** testimonios, cifras y credenciales observados en código no están corroborados por materiales empresariales.
- **Fuente:** `src/components/`, `Docs/`.

## 2026-10-29 — Alinear esbuild con Vite 8
- **Decisión:** actualizar la versión declarada de `esbuild` de `^0.25.0` a `^0.28.0`.
- **Motivo:** `npm install` reportó que Vite 8 requiere el peer opcional `esbuild@^0.27.0 || ^0.28.0`; la versión anterior impedía resolver dependencias.
- **Fuente:** salida de `npm install` y `package.json`.

## 2026-10-29 — Publicar landing en GitHub Pages
- **Decisión:** usar GitHub Actions para compilar React/Vite y desplegar la landing en Pages bajo `/pagina-web-maxilodent/`.
- **Motivo:** el usuario indicó “sube” después de distinguir el repositorio del sitio publicado. El repositorio es público y el usuario confirmó que los registros del portal son ficticios y autorizó publicarlos.
- **Fuente:** instrucción del usuario, `vite.config.ts`, `.github/workflows/deploy-pages.yml` y guía oficial de GitHub Pages.
