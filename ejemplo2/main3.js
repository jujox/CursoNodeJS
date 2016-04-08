/*
Fichero: ejemplo2/main3.js
Descripción:
    Segundo ejercicio del curso.
    Script NodeJS que calcula el área y el perímetro de un rectángulo.
    Pasamos los parámetros por línea de comandos.
    Aprendemos a escribir un módulo nodeJS.
    En este ejercicio aprendemos el uso de los "callbacks".
Ejecución:
    % node main.js
Autor: Juanjo Escribano
*/

// Incluimos el módulo "yargs" para pasar parámetros por línea de comandos
var argv = require('yargs')
    .usage('Uso: node $0 --x=[num] --y=[num]')
    .demand(['x','y'])
    .argv;
rect = require('./rect-module3'); // incluimos el módulo

console.log("INIT: Ejemplo 2");

// Ejemplo de llamada con un "callback"
rect.perimeter(argv.x,argv.y, function (err, per, x, y) {
    if (!err) {
        console.log("Perímetro (" + x + "," + y + "):" + per);
    } else {
        console.log("ERROR");
    }
});

// Ejemplo de llamada con un "callback"
rect.area(argv.x,argv.y, function (err, ar, x, y) {
    if (!err) {
        console.log("Área (" + x + "," + y + "):" + ar);
    } else {
        console.log("ERROR");
    }
});

console.log("FIN... O no... ;) ");

