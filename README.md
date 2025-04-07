# 🛋️ CasaForm – Muebles con Estilo, Diseño con Propósito

¡Bienvenido a **CasaForm**!  
Este es un proyecto web que reúne lo mejor del diseño moderno con una experiencia digital fluida. Si te gustan los catálogos elegantes, las animaciones suaves y el código limpio, estás en el lugar correcto.

---

## 🚀 Tecnologías que usamos

Este sitio está construido con amor y buenas prácticas:

- ✅ **HTML5** con etiquetas semánticas
- 🎨 **SCSS** con estructura modular (partials, variables, mixins)
- ⚡ **JavaScript Vanilla** para interactividad personalizada
- 🧱 **Bootstrap 5** para estilos rápidos y responsivos
- 🎬 **AOS (Animate on Scroll)** para animaciones al hacer scroll
- 💎 **Iconografía moderna** con Font Awesome y Remix Icons

---

## 📁 Estructura general del proyecto

```plaintext
.
├── index.html                 # Página principal
├── pages/                    # Páginas internas
│   ├── catalogo.html
│   ├── contacto.html
│   └── ...
├── assets/                   # Archivos públicos
│   ├── css/                 # CSS generado desde SCSS
│   ├── img/                 # Imágenes y gráficas
│   └── js/                  # Scripts JS
├── scss/                     # Carpeta Sass modular
│   ├── abstracts/           # Variables, mixins, funciones
│   ├── base/                # Reset, helpers, tipografías
│   ├── components/          # Botones, formularios, cards
│   ├── layout/              # Header, footer, grids
│   └── pages/               # Estilos por página
├── .gitignore
└── README.md
```

---

## 🛠️ Cómo compilar los estilos

Para trabajar con Sass y ver los cambios en tiempo real:

```bash
sass scss/style.scss assets/css/style.css --watch
```

> Necesitas tener instalado `sass` globalmente. Si no lo tienes:
>  
> `npm install -g sass`

---

## ✨ Funciones que destacan

- 🛒 Catálogo responsive con tarjetas animadas
- 📱 Diseño pensado desde móvil hasta escritorio
- ✨ Animaciones suaves con AOS
- 💬 Formulario funcional y accesible
- 👁️ Efectos visuales como hover, transiciones y un carrusel de testimonios personalizado
- 🧠 Semántica y accesibilidad cuidada (¡porque el buen diseño también es invisible!)

---

## 💡 Tips para desarrolladores curiosos

- Usa variables Sass para mantener la coherencia en colores y tamaños.
- Aprovecha los mixins para evitar duplicar estilos.
- Estructura tu proyecto en partials para escalarlo sin dolores de cabeza.
- Mantén tus commits limpios y tus ramas organizadas.

---

## 🧪 ¿Y cómo lo pruebo?

Puedes simplemente abrir `index.html` en tu navegador, o levantar un servidor local:

```bash
npx serve
```

---

## 🤝 ¿Puedo usarlo?

¡Claro!  
Este proyecto fue creado con fines educativos, portafolio y mejora continua. Si lo usas, menciona a CasaForm como inspiración 💛.

---

Gracias por pasar por aquí. ¡Nos vemos en el código!  
— *Fran, desarrollador frontend apasionado por el detalle*
