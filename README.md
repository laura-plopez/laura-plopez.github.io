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

Las imágenes, vídeos y CV que usa la web están en `public/` y se sirven tal cual.

## Chatbot

El chat de la pestaña FAQ responde con Gemini a través de un Cloudflare Worker (`worker/`). El Worker guarda la clave de la API, limita las peticiones y usa el contenido de `portfolio.ts` como contexto. Si no responde, el chat recurre a una búsqueda por palabras clave (`src/lib/bot.ts`).

Para probarlo en local:

```bash
cd worker
npm install
cp .dev.vars.example .dev.vars   # y añade tu GEMINI_API_KEY
npm run dev                       # http://localhost:8787
```

La clave nunca va en el código ni en variables `VITE_`: en producción es un secreto de Cloudflare (`npx wrangler secret put GEMINI_API_KEY`).

## Despliegue

Cada push a `main` construye la web, la publica en GitHub Pages y, después, publica el Worker con el contenido actualizado ([`deploy.yml`](.github/workflows/deploy.yml)). El despliegue del Worker usa los secrets `CLOUDFLARE_API_TOKEN` (permiso Workers Scripts: Edit) y `CLOUDFLARE_ACCOUNT_ID` del repositorio.
