# Portfolio — Laura Pérez

Portfolio personal bilingüe (ES/EN) publicado en [laura-plopez.github.io](https://laura-plopez.github.io).

Hecho con React 19, TypeScript, Vite 7 y Tailwind CSS 3.

## Uso

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # comprueba tipos y genera dist/
npm run preview   # sirve dist/ en local
npm run lint      # pasa ESLint
```

## Estructura

```
src/
├── components/   # layout/ (barra lateral), sections/ (una por pestaña), ui/ (piezas reutilizables)
├── constants/    # todo el contenido en ES y EN
├── context/      # idioma
├── hooks/        # rutas, idioma, animaciones
├── lib/          # chatbot y utilidades
└── types/        # tipos compartidos
```

Cada componente tiene su propia carpeta, y los imports usan el alias `@/`, que apunta a `src/`.

## Contenido

Todos los textos, proyectos y enlaces están en `src/constants/portfolio.ts`. Para cambiar algo de la web, empieza por ahí.

## Despliegue

Cada push a `main` construye la web y la publica en GitHub Pages ([`deploy.yml`](.github/workflows/deploy.yml)).
