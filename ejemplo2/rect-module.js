/*
Fichero: ejemplo2/rect-module.js
Descripción:
    Segundo ejercicio del curso.
    Módulo NodeJS que exporta las funciones de cálculo del área
    y el perímetro de un rectángulo.
Autor: Juanjo Escribano
*/

exports.perimeter = function (x, y) {
    return (2*(x + y));
}

exports.area = function (x, y) {
    return (x*y);
}

