/*
Fichero: ejemplo4/main.js
Descripción:
    Ejercicio 4 del curso.
    Script NodeJS que realiza 2 peticiones http y guarda la salida en un fichero.
    Ejercicio orientado a aprender a utilizar el módulo http como cliente.
Ejecución:
    % node main.js
Autor: Juanjo Escribano
*/

httpReq = require("./httpReq.js");

// Hacemos la petición y pasamos un callback
httpReq.httpRequest("localhost","/", function (statusCode, datos) {
    // Al acabar la petición, se ejecuta este callback.
    console.log("Status: " + statusCode);
    console.log(datos);
});

