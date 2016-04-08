httpReq = require("./httpReq.js");

// GET -> Me conecto a otro servidor y devuelvo los datos...
exports.getYeah = function (req, res) {
        console.log("getYeah");
        httpReq.httpRequest("localhost", "/test.json", function (statusCode, data) {
            res.writeHead(statusCode, {'Content-Type':'text/json'});
            res.end(data);
        });
}

// POST
exports.postYeah = function (req, res) {
        console.log("postYeah");
        res.writeHead(200, {'Content-Type':'text/json'});
        res.end('{"status":"OK", "data":"Oh yeah!... POST", "param":"' + req.body.name + '"}');
}

