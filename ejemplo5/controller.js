/*
Fichero: ejemplo5/controller.js
Descripción:
    Ejercicio 5 del curso.
    Módulo NodeJS que hace de controlador básico.
Ejecución:
    % node main.js
Autor: Juanjo Escribano
*/
httpReq = require("./httpReq.js");

exports.mainHttpReq = function() {
    httpReq.httpRequest("localhost","/", function (statusCode, datos) {
        console.log("Status: " + statusCode);
        console.log(datos);
    });
}
