# MeLi Frontend Challenge

![MercadoLibre](./docs/imgs/05-meli.png "MercadoLibre")

Monorepo con una solución al reto backend de mercado libre.

## 🧰 Tech Stack

- [pnpm](https://pnpm.io), como administrador de paquetes.
- [typescript](https://www.typescriptlang.org/), para tener tipos en JavaScript.

## 🏛️ Arquitectura

Este monorepo consta de los siguientes paquetes:

1. `backend`: proyecto para consultar los endpoints de mercado libre y con una capa de transformación de los datos expuestos en un RESTAPI.
2. `frontend`: proyecto para consumir los datos expuestos en el `backend`, y visualizar un buscador de productos, resultado de la búsqueda y detalle del producto.

El siguiente diagrama representa la comunicación entre los paquetes.

[![packages](https://tinyurl.com/pd9ujzxt)](https://tinyurl.com/pd9ujzxt)<!--![packages](./docs/diagrams/00-packages.puml)-->

En los archivos `README.md` de cada paquete se explica detalladamente las decisiones de arquitectura tomadas sobre el reto.

## 🧞 Comandos

Todos los comandos se corren desde la raíz del proyecto.

| Comando                        | Acción                                 |
| :----------------------------- | :------------------------------------- |
| `pnpm install`                 | Instala las dependencias               |
| `pnpm start`                   | Inicia el backend y el frontend        |
| `pnpm --filter "backend" dev`  | Inicia el backend en `localhost:3000`  |
| `pnpm --filter "frontend" dev` | Inicia el frontend en `localhost:5371` |
