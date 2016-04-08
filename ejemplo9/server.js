/*
Fichero: ejemplo9/server.js
Descripción:
    Ejercicio 9 del curso.
    Script NodeJS que crea un servdor http básico con express, y devuelve páginas estáticas
    El objetivo es conocer express y morgan
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

var express = require("express"); // para crear serv. http y más...
var morgan = require("morgan"); // logger

var hostname = "localhost";
var port = "8080";

var app = express();
app.use(morgan('dev')); // enganchamos morgan (middleware) a express
app.use(express.static(__dirname + "/public")); // rura a estáticos

app.listen(port, hostname, function () {
    console.log("Servidor iniciado en " + hostname + ":" + port);
});

