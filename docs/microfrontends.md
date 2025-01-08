# Micro-frontends

Los micro frontends es un concepto inspirado por los microservicios en backend. Los microservicios es una arquitectura de una aplicación distribuida que estructura un conjunto de servicios; De esta forma, cada función de la aplicación se maneja como un servicio independiente, evitando cuellos de botella en la base de datos, por ejemplo.

El micro frontend es un tipo de arquitectura donde una aplicación web se divide en diferentes módulos o funciones individuales, implementadas de forma autónoma, lo que permite a los equipos de frontend el mismo nivel de flexibilidad y velocidad que los microservicios brindan a los equipos de backend.

Su finalidad es **eliminar la dependencia entre equipos de trabajo**, lo que ralentiza el desarrollo y aumenta la complejidad del producto digital.

## Ideas centrales de los micro frontends

- **Ser independiente de la tecnología**: Cada equipo de trabajo tiene la libertad de adoptar el stack tecnológico de su elección, sin tener que coordinarse con otros equipos.
- **El código de la aplicación de cada equipo está aislado**: no se comparte ningún tiempo de ejecución entre los diferentes equipos de trabajo, incluso cuando utilizan el mismo framework. Por tanto, no existen variables globales ni estados compartidos en las aplicaciones.
- **Diseño web robusto**: las funciones de la aplicación deben ser utilizables. Se pueden utilizar metodologías de "Representación universal" y "Mejora progresiva" para mejorar el rendimiento.

## Cómo implementar microfrontends?

- [yalc](https://github.com/wclr/yalc), para utilizar enlaces símbolicos sobre paquetes que no están en trabajo.
- [single-spa](https://single-spa.js.org/), como enrutador de micro front-ends.
- [Module Federation](https://webpack.js.org/concepts/module-federation/) de webpack.
