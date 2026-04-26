# Portafolio Weather Frontend - M3 🌤️

Este portafolio consiste en una aplicación de clima desarrollada para el Módulo 3 del Bootcamp, con un enfoque principal en la refactorización de estilos, preprocesamiento con SASS y la implementación de una arquitectura escalable.

## Tecnologías usadas

- HTML5 para la estructura semántica.
- SASS (SCSS) utilizando la arquitectura 7-1 para la organización de estilos.
- Bootstrap 5 para el sistema de rejilla y componentes responsivos.
- JavaScript para manipulación del DOM y persistencia de datos local.
- Repositorio público en GitHub.

 ## Metodología de Estilos: BEN 
Para garantizar un código mantenible y legible, se aplicó la metodología BEM (Block, Element, Modifier). Un ejemplo claro en el proyecto es el componente de tarjetas de clima:

.weather-card (Bloque)

.weather-card__city (Elemento)

.weather-card__btn--active (Modificador)


## Estructura SASS (Arquitectura 7-1)
El proyecto se organiza de forma modular para separar responsabilidades:

- abstracts/: Contiene variables (_variables.scss) y mixins (_mixin.scss) que no generan CSS por sí solos.

- base/: Estilos globales y reseteo (_reset.scss).

- components/: Pequeños componentes reutilizables como botones y tarjetas (_cards.scss).

- layout/: Estilos para las grandes secciones del sitio como el header, footer y el contenedor principal.

- vendors/: Configuraciones de librerías externas como Bootstrap.

## Enlace al Repositorio

Aquí puedes ver mi primer portafolio módulo 3
👉[https://github.com/pilucasanovavera-gif/weather-frontend-m2](https://github.com/pilucasanovavera-gif/weather-frontend-m2)

## 👩‍💻 Autor

Desarrollado por Pilar Casanova Vera
