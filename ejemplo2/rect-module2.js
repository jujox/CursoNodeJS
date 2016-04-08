/*
Fichero: ejemplo2/rect-module2.js
Descripción:
    Segundo ejercicio del curso. Otra forma de escribir módulos.
    Módulo NodeJS que exporta las funciones de cálculo del área
    y el perímetro de un rectángulo.
Autor: Juanjo Escribano
*/

// Definimos las funciones
function perimeter (x, y) {
    return (2*(x + y));
}

function area (x, y) {
    return (x*y);
}

// Lo que exportamos
exports.perimeter = perimeter;
exports.area = area;
