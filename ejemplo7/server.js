/*
Fichero: ejemplo7/main.js
Descripción:
    Ejercicio 7 del curso.
    Script NodeJS que crea un servidor http básico y distingue las peticiones (muy básico).
    El objetivo es familiarizarse un poco más con http.
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

var http = require("http");
var fs = require("fs");
var path = require("path");

var hostname = "localhost";
var port = "8080";

var server = http.createServer(function (req, res) {
    console.log("Petición: " + req.url + " con método: " + req.method);
    var fileURL = "";
    if (req.url == "/") fileURL = "/index.html";
    else if (req.url == "/homer") fileURL = "/homer.html";
    else fileURL = "/default.html";
    var filePath = path.resolve("./public" + fileURL);
    res.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream(filePath).pipe(res);
    
});

server.listen(port, hostname, function () {
    console.log("Servidor iniciado. Esperando peticiones en " + hostname + ":" + port);
});

