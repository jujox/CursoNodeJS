/*
Fichero: ejemplo11/server.js
Descripción:
    Ejercicio 11 del curso.
    Ejemplo de una API que se conecta a otra...
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

var express = require("express"); // HTTP API REST
var morgan = require("morgan"); // logger
var bodyParser = require("body-parser"); // paquete para parsear una petición
var controller = require("./controller");

var hostname = "localhost";
var port = "8080";

var app = express();
app.use(morgan('dev')); // Enganchamos morgan (middleware logger) a express
app.use(bodyParser.json()); // Enganchamos body-parser (middleware) a express
app.use(express.static(__dirname + "/public")); // Páginas estáticas

// Petición GET
app.get("/yeah", controller.getYeah);
// Petición POST
app.post("/yeah", controller.postYeah);

app.listen(port, hostname, function () {
    console.log("Servidor iniciado en " + hostname + ":" + port);
});

