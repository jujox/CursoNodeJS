/*
Fichero: ejemplo4/httpReq.js
Descripción:
    Ejercicio 4 del curso.
    Módulo NodeJS que exporta la función httpRequest:
        -> Realiza una petición http y ejecuta el callback cuando acaba
    Ejercicio orientado a aprender a utilizar el módulo http y callback como cliente.
Autor: Juanjo Escribano
*/

var http = require('http');

exports.httpRequest = function(site, path, callback) {
    console.log("Accediendo a " + site + path + "...");
    var http_options = {
        host: site,
        path: path 
    };
    http.request(http_options, function (response) {
        data = "";
        response.on('data', function (datos) {
            data += datos;
        });
        response.on('end', function() {
            // Cuando acaba la petición http ejecutamos el callback
            callback(response.statusCode, data);
        });
    }).end();
};

