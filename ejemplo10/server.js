/*
Fichero: ejemplo10/server.js
Descripción:
    Ejercicio 10 del curso.
    Ejemplo básico de API REST con NodeJS + Express
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

var express = require("express"); // HTTP API REST
var morgan = require("morgan"); // logger
var bodyParser = require("body-parser"); // paquete para parsear una petición

var hostname = "localhost";
var port = "8080";

var app = express();
app.use(morgan('dev')); // Enganchamos morgan (middleware logger) a express
app.use(bodyParser.json()); // Enganchamos body-parser (middleware) a express
app.use(express.static(__dirname + "/public")); // Páginas estáticas

// Petición GET
app.get("/yeah", function(req, res) {
    res.writeHead(200, {'Content-Type':'text/json'});
    res.end('{"status":"OK", "data":"Oh yeah!"}');
});

// Petición GET
app.get("/yeah/:id", function(req, res) {
    res.writeHead(200, {'Content-Type':'text/json'});
    res.end('{"status":"OK", "data":"Oh yeah!... GET", "param":"' + req.params.id + '"}');
});

// Petición POST
app.post("/yeah", function(req, res) {
    res.writeHead(200, {'Content-Type':'text/json'});
    res.end('{"status":"OK", "data":"Oh yeah!... POST", "param":"' + req.body.name + '"}');
});

app.listen(port, hostname, function () {
    console.log("Servidor iniciado en " + hostname + ":" + port);
});

