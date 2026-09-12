# Hoja de Vida - Adiel Jose Imaña Castillo

## Información del estudiante

**Nombre:** Adiel Jose Imaña Castillo

**Carrera:** Ingeniería de Sistemas

**Universidad:** Universidad Católica Boliviana

**Ubicación:** La Paz, Bolivia

## Descripción

Este proyecto consiste en una hoja de vida personal desarrollada
utilizando HTML5 nativo.

La página presenta información académica, habilidades técnicas,
proyectos destacados, idiomas, formación adicional, contenido
multimedia y un formulario de contacto.

El objetivo principal del proyecto es demostrar el uso correcto
de las etiquetas semánticas y los elementos nativos de HTML5.

## Tecnologías utilizadas

- HTML5
- HTML5 Forms
- HTML5 Multimedia
- HTML5 Accessibility

No se utilizaron frameworks ni librerías externas.

No se utilizó JavaScript.

## Principales etiquetas HTML5 utilizadas

### Estructura semántica

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

### Texto

- `<h1>`
- `<h2>`
- `<h3>`
- `<p>`
- `<strong>`
- `<em>`
- `<mark>`
- `<small>`
- `<time>`

### Listas

- `<ul>`
- `<ol>`
- `<li>`

### Tablas

- `<table>`
- `<caption>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<th>`
- `<td>`

### Multimedia

- `<figure>`
- `<figcaption>`
- `<picture>`
- `<img>`
- `<audio>`
- `<video>`
- `<track>`

### Formularios

- `<form>`
- `<fieldset>`
- `<legend>`
- `<label>`
- `<input>`
- `<textarea>`
- `<select>`
- `<option>`
- `<button>`

### Elementos HTML5 adicionales

- `<details>`
- `<summary>`
- `<progress>`
- `<meter>`

## Accesibilidad

La página incorpora diferentes criterios básicos de accesibilidad:

- Atributo `lang="es"` en el documento.
- Texto alternativo mediante `alt` en las imágenes.
- Enlace "Saltar al contenido principal".
- Navegación interna mediante teclado.
- Jerarquía correcta de encabezados.
- Etiquetas `<label>` asociadas a los campos del formulario.
- Atributos `aria-label` y `aria-describedby`.
- Campos obligatorios mediante `required`.
- Mensajes de ayuda para algunos campos.
- Subtítulos mediante `<track>` en el video.

## Validación HTML5

El formulario utiliza validación nativa mediante:

- `required`
- `minlength`
- `maxlength`
- `pattern`
- `placeholder`
- `type="email"`
- `type="tel"`

## Estructura del proyecto

```text
hoja-vida/
├── index.html
├── assets/
│   ├── images/
│   │   ├── foto.jpg
│   │   └── proyecto.jpg
│   ├── audio/
│   │   └── presentacion.mp3
│   └── video/
│       ├── proyecto.mp4
│       └── subtitulos.vtt
└── README.md