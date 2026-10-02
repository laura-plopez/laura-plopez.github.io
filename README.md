# Portfolio — Laura Pérez

Portfolio personal publicado en [laura-plopez.github.io](https://laura-plopez.github.io).

## Stack

- [React 19](https://react.dev) + TypeScript
- [Vite 7](https://vite.dev)
- [Tailwind CSS 3](https://v3.tailwindcss.com)
- [Three.js](https://threejs.org) con [React Three Fiber](https://r3f.docs.pmnd.rs) para el fondo animado

## Requisitos

Node.js 20.19+ o 22.12+ (lo exige Vite 7).

## Scripts

| Comando           | Qué hace                                                       |
| ----------------- | -------------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente                 |
| `npm run build`   | Comprueba los tipos y genera la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` en local para revisarla antes de publicar         |
| `npm run lint`    | Pasa ESLint                                                    |

## Estructura

```
src/
├── components/
│   ├── layout/        # Piezas fijas de la página (navegación)
│   ├── sections/      # Secciones de la página (Hero…)
│   └── ui/            # Componentes reutilizables, sin contenido propio
├── constants/         # Contenido del portfolio: textos y menú
├── types/             # Tipos compartidos entre varios archivos
├── App.tsx            # Composición de la página
├── main.tsx           # Punto de entrada
└── index.css          # Tailwind y animaciones globales
```

## Convenciones

- **Una carpeta por componente**, con el mismo nombre que el componente: `ui/ZoomButton/ZoomButton.tsx`.
- **Los textos viven en `src/constants/portfolio.ts`**, no dentro de los componentes.
- **Imports con el alias `@/`**, que apunta a `src/`: `import Hero from '@/components/sections/Hero/Hero'`.
- **Los tipos de las props van en el propio componente.** `src/types/` es solo para tipos que usan varios archivos.
- **Fuentes de Tailwind:** `font-display` (Alumni Sans Pinstripe) para títulos y `font-body` (Darker Grotesque) para textos. El resto usa la fuente del sistema.

## Despliegue

Cada push a `main` lanza [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). El workflow instala las dependencias con `npm ci`, pasa el lint, genera la build y publica `dist/` en GitHub Pages.
