/*
Fichero: ejemplo2/main.js
Descripción:
    Segundo ejercicio del curso.
    Script NodeJS que calcula el área y el perímetro de un rectángulo de 3x2
    Aprendemos a escribir un módulo nodeJS.
Ejecución:
    % node main.js
Autor: Juanjo Escribano
*/

rect = require('./rect-module'); // incluimos el módulo
console.log("INIT: Ejemplo 2");
per = rect.perimeter(2,3);
ar = rect.area(2,3);
console.log("Perímetro: " + per);
console.log("Área: " + ar);
console.log("FIN: Ejemplo 2");
