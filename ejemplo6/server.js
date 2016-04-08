/*
Fichero: ejemplo6/server.js
Descripción:
    Ejercicio 6 del curso.
    Script NodeJS que crea un servidor http básico
Ejecución:
    % node server.js
Autor: Juanjo Escribano
*/

// Importamos el módulo http
var http = require("http");

var hostname = "localhost";
var port = "8080";

// Creamos el servidor. Se ejecutará la función de callback
// para cada petición recibida
var server = http.createServer(function (req, res) {
    console.log("Petición recibida");
    console.log(req.headers);
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end("{'status': 'OK'; 'data': 'Mmmmm... Cerveeeezaaaa' }");
});

// Iniciamos el servidor
server.listen(port, hostname, function () {
    console.log("Servidor iniciado. Esperando peticiones en " + hostname + ":" + port);
});

