# 🧑🏾‍💼 Frontend

Proyecto frontend para mostrar los datos transformados en el backend.

![Home](./docs/imgs/04-home.png "Home")

## 🧰 Tech Stack

- [react](https://react.dev/), as UI library for web.
- [react-router](https://reactrouter.com/), como manejador de rutas para React.
- [vite](https://vite.dev/), como herramienta de construcción.
- [vitest](https://vitest.dev/), como framework de pruebas.
- [testing-library](https://testing-library.com/), como biblioteca de utilidades para promover buenas prácticas en pruebas de interfaces de usuario.
- [tailwindcss](https://tailwindcss.com/), como framework para definir estilos sin salir del HTML.

## 🔌 PlugIns

- [tsConfigPaths](https://www.npmjs.com/package/vite-tsconfig-paths), to resolve imports using TypeScript's path mapping.
- [svgr](https://react-svgr.com), to transform svg into React components.

## 📁 Estructura del proyecto

- _assets_: carpeta con los archivos estáticos utilizados para el proyecto.
- _components_: carpeta con componentes UI utilizados tanto en las páginas como en las plantillas.
- _pages_: carpeta con las páginas que atienden el enrutamiento de la aplicación.
- _layout_: carpeta con la plantilla reutilizada en todas las páginas.
- _utils_: carpeta con utilidaes transversales para el proyecto (e.g., formato del precio).

[![sequence-frontend](https://tinyurl.com/ym49fxtm)](https://tinyurl.com/ym49fxtm) <!--![sequence-frontend](../docs/diagrams/02-sequence-frontend.puml)-->

## 🧞 Comandos

Estos comandos se ejecutan en el directorio `frontend/`.

| Comando        | Acción                                             |
| :------------- | :------------------------------------------------- |
| `pnpm install` | Instalar las dependencias                          |
| `pnpm dev`     | Comienza el programa en `localhost:5173`           |
| `pnpm build`   | Corre el compilador de TypeScript.                 |
| `pnpm test`    | Corre las pruebas unitarias del proyecto frontend. |

## 🆙 Mejoras

- [ ] Completar pruebas unitarias
- [ ] Utilizar Streaming para preveer peticiones lentas de datos con una estrategia de páginas de carga y esqueletos más el uso de componentes con `<Suspense>`
