---
tipo: decisiones
estado: vigente
creado: 2026-10-29
actualizado: 2026-11-04
tags: [decisiones, proyecto]
fuentes: ["AGENTS.md", "package.json", "Docs/"]
---
# Decisiones

## 2026-10-29 — Conservar la aplicación actual
- **Decisión:** mantener React, TypeScript, Vite, la estructura por componentes y los activos existentes.
- **Motivo:** la página está ya construida y no se ha solicitado un rediseño.
- **Fuente:** `package.json`, `src/`, `public/`.

## 2026-11-04 — Conservar textos y estructura de rutas
- **Decisión:** mantener los textos y la estructura actuales para las rutas de odontólogo y paciente/usuario.
- **Motivo:** la persona responsable indicó «hazla así como está» para los tres aspectos de validación del Paso 4.
- **Fuente:** confirmación en conversación del 2026-11-04; `src/components/Hero.tsx`, `src/components/PatientGuideSection.tsx`.

## 2026-11-04 — Conservar paleta para el Paso 2
- **Decisión:** mantener la paleta verde azulado, blanco, grises y terracota ya presente en la landing.
- **Motivo:** la persona responsable indicó en el Paso 4 que se conservara el contenido y estilo visual actual; no se introducen colores nuevos.
- **Fuente:** instrucción de la persona responsable y `src/index.css`.

## 2026-11-04 — Enlazar portal externo y retirar el simulador
- **Decisión:** la landing dirige «Mis Radiografías» al subdominio `sistema.maxilodentrx.com` enlazado desde el sitio institucional; no muestra estudios de demostración.
- **Motivo:** el plan del Paso 6 pide usar el portal oficial y no simular resultados. El dominio raíz `maxilodentrx.com` muestra la web institucional.
- **Fuente:** [sitio institucional de Maxilodent](https://maxilodentrx.com/); disponibilidad del subdominio pendiente de verificación.

## 2026-11-04 — Preparar órdenes por WhatsApp sin envío automático
- **Decisión:** el formulario genera un mensaje dirigido al WhatsApp confirmado y deja el envío final a cargo de la persona en WhatsApp.
- **Motivo:** mantener los datos visibles para revisión del usuario y evitar enviar un mensaje al número real durante una prueba local.
- **Fuente:** destino indicado por la persona responsable y plan del Paso 7.

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

## 2026-11-05 — Explicar la entrega y consulta de estudios
- **Decisión:** la landing explica que la tomografía (cortes y resultado) se envía directamente al doctor y que el doctor consulta la radiografía en el portal oficial «Mis Radiografías».
- **Motivo:** texto seleccionado explícitamente por la persona responsable para el Paso 6.
- **Fuente:** confirmación de la persona responsable en conversación del 2026-11-05; URL del portal enlazada desde [el sitio institucional de Maxilodent](https://maxilodentrx.com/). La disponibilidad del portal no pudo confirmarse: la consulta actual devolvió 502.
