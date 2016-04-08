/*
Fichero: ejemplo8/server.js
Descripción:
    Ejercicio 8 del curso.
    Script NodeJS que crea un servidor http básico con express
    El objetivo es conocer express
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

var express = require("express");
var http = require("http");

var hostname = "localhost";
var port = "8080";

var app = express();

app.use(function(req, res) {
    console.log("Petición recibida");
    res.writeHead(200, "{'Content-type': 'text/html'")
    res.end("<html><body>Hola, mundo... Hola, express...</body></html>");
});

// Creamos el servidor. Con express no es necesario el paquete http,
// pero eso lo veremos más adelante
var server = http.createServer(app);
server.listen(port, hostname, function () {
    console.log("Servidor arrancado");
});
