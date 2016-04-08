/*
Fichero: ejemplo2/httpTest.js
Descripción:
    Ejercicio 3 del curso.
    Módulo NodeJS que realiza petición HTTP y guarda la salida en un fichero.
Autor: Juanjo Escribano
*/

// Cargamos los módulos http y fs (sistema de ficheros).
var http = require('http');
var fs = require('fs');

// Callback para la función http.request
http_callback = function(response) {
    data = "";
    response.on('data', function (datos) {
        data += datos;
    });
    response.on('end', function() {
        fs.writeFile(Math.random().toString(), data, function (err) {
            if (err)
                console.log("ERR");
        });
    });
};

// La función que exportamos.
exports.httpRequest = function(site, path) {
    console.log("Accediendo a " + site + path + "...");
    var http_options = {
        host: site,
        path: path 
    };
    http.request(http_options, http_callback).end();
};

