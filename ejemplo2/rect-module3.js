/*
Fichero: ejemplo2/rect-module3.js
Descripción:
    Segundo ejercicio del curso. Tercera variante.
    Módulo NodeJS que calcula el área y el perímetro de un rectángulo.
    Aprendemos a escribir un módulo nodeJS.
    Ejercicio orientado a aprender el funcionamiento de "callbacks" y código asíncrono.
Autor: Juanjo Escribano
*/

// Utilizamos el módulo sleep-async para simular un "delay".
var sleep = require("sleep-async")();

// Esta función tardará, al menos, 2 segundos en ejecutarse.
exports.perimeter = function (x, y, callback) {
    per = 2*(x + y);
    sleep.sleep(2000, function () {
        callback(null, per, x, y);
    });
}

exports.area = function (x, y, callback) {
    ar = x*y;
    callback(null, ar, x, y);
}

