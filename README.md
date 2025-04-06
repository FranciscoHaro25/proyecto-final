# 🛋️ CasaForm - Catálogo de Muebles Modernos

**CasaForm** es una web de presentación de muebles modernos, diseñada con HTML5, SCSS y JavaScript. La página incluye un catálogo interactivo, formularios de contacto, animaciones AOS, diseño responsive y una arquitectura modular con Sass.

## 🚀 Tecnologías utilizadas

- HTML5
- SCSS (Sass modularizado)
- JavaScript (vanilla)
- Bootstrap 5 (CDN)
- AOS (Animate on Scroll)
- Font Awesome / Remix Icons

## 📁 Estructura del proyecto


├── index.html
├── pages/
│   ├── catalogo.html
│   ├── contacto.html
│   └── …
├── assets/
│   ├── css/           # CSS compilado desde SCSS
│   ├── img/           # Imágenes
│   └── js/            # JavaScript
├── scss/              # Archivos SCSS organizados por partials
│   ├── abstracts/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── pages/
└── .gitignore

## ⚙️ Cómo compilar SCSS

Puedes usar `Dart Sass` para compilar los estilos:

```bash
sass scss/style.scss assets/css/style.css --watch
