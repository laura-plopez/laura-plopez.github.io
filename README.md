# Portfolio — Laura Pérez

Portfolio personal publicado en [laura-plopez.github.io](https://laura-plopez.github.io). Es bilingüe (ES/EN) y tiene 7 secciones: Inicio, Proyectos, Sobre mí, Stack, Escritos, FAQ y Contacto.

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 7](https://vite.dev)
- [Tailwind CSS 3](https://v3.tailwindcss.com)
- [Simple Icons](https://simpleicons.org) para los logos del Stack (incluidos en la build, sin peticiones externas)

## Requisitos

Node.js 20.19+ o 22.12+ (lo exige Vite 7).

## Scripts

| Comando           | Qué hace                                                         |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente                   |
| `npm run build`   | Comprueba los tipos y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` en local para revisarla antes de publicar          |
| `npm run lint`    | Pasa ESLint                                                      |

## Estructura

```
src/
├── components/
│   ├── layout/        # Piezas fijas de la página (barra lateral)
│   ├── sections/      # Una carpeta por sección (Home, Projects, About…)
│   └── ui/            # Componentes reutilizables, sin contenido propio
├── constants/         # Todo el contenido: textos ES/EN, proyectos, enlaces
├── context/           # Estado compartido por toda la app (idioma)
├── hooks/             # Lógica de React reutilizable (rutas, idioma, animaciones)
├── lib/               # Funciones sin React (respuestas del bot, formato, movimiento)
├── types/             # Tipos compartidos
├── App.tsx            # Composición de la página y elección de sección según la URL
├── main.tsx           # Punto de entrada
└── index.css          # Tailwind y estilos globales
```

## Convenciones

- **Una carpeta por componente**, con el mismo nombre que el componente: `ui/PillButton/PillButton.tsx`. Los subcomponentes que solo usa un componente van en su misma carpeta (`sections/Projects/ProjectCard.tsx`).
- **Los textos viven en `src/constants/portfolio.ts`**, nunca dentro de los componentes. Cada idioma tiene su bloque en `CONTENT`, y TypeScript avisa si a uno le falta un texto.
- **Imports con el alias `@/`**, que apunta a `src/`: `import Home from '@/components/sections/Home/Home'`.
- **Los tipos de las props van en el propio componente.** `src/types/` es solo para tipos que usan varios archivos.
- **Colores, tipografías, radios y animaciones salen de los tokens de `tailwind.config.js`** (`bg-main`, `text-ink-soft`, `rounded-card`, `text-title`, `animate-rise`…). Las medidas puntuales del diseño que solo aparecen una vez (`text-[15px]`, `py-[22px]`…) van como valores arbitrarios de Tailwind.

## Cómo funciona

- **Rutas:** cada pestaña tiene su URL con `#` (`/#/projects`, `/#/projects/este-portfolio`), porque GitHub Pages no sabe servir rutas sin él. Así funcionan los enlaces directos y el botón "atrás".
- **Idioma:** se guarda en `localStorage` y actualiza `<html lang>`.
- **Chatbot (FAQ):** de momento responde sin IA, buscando por palabras clave en las preguntas sugeridas y en las FAQ (`src/lib/bot.ts`). Para conectarlo a Claude hará falta un pequeño servidor que guarde la clave de API; nunca debe ir en el código de la web.
- **Formulario de contacto:** abre el programa de correo del visitante con el mensaje ya escrito (`mailto:`). El formulario no se borra, y el aviso de confirmación incluye el email por si no se abre nada.
- **Enlaces vacíos:** un proyecto o artículo sin URL se muestra sin enlace. Un enlace de contacto sin URL (LinkedIn, CV) no se muestra.
- **Accesibilidad:** cada pestaña tiene su `<h1>` y su título en el navegador, y al cambiar de pestaña el foco pasa al contenido.
- **Movimiento reducido:** si el sistema lo pide (`prefers-reduced-motion`), se desactivan las animaciones.

## Despliegue

Cada push a `main` lanza [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). El workflow instala las dependencias con `npm ci`, pasa el lint, genera la build y publica `dist/` en GitHub Pages.
