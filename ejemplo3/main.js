/*
Fichero: ejemplo1/main.js
Descripción:
    Ejercicio 3 del curso.
    Script NodeJS que realiza 2 peticiones http y guarda la salida en un fichero.
    Ejercicio orientado a aprender a utilizar el módulo http como cliente.
Ejecución:
    % node main.js
Autor: Juanjo Escribano
*/

httpReq = require("./httpTest.js");

httpReq.httpRequest("www.elmundo.es","/");
httpReq.httpRequest("localhost","/");
