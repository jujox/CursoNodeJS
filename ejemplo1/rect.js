/*
Fichero: ejemplo1/rect.js
Descripción:
    Primer ejercicio del curso.
    Script NodeJS que calcula el área y el perímetro de un rectángulo de 3x2
Ejecución:
    % node rect.js
Autor: Juanjo Escribano
*/

var rect = {
    perimeter : function(x, y) {
        return (2 * (x + y));
    },
    area : function (x, y) {
        return (x * y);
    }
};

// MAIN

console.log("INIT: Ejemplo 1...");
per = rect.perimeter(2, 3);
ar = rect.area(2, 3);
console.log("Perímetro: " + per);
console.log("Área: " + ar);
console.log("FIN: Ejemplo 1");

