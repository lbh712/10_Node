var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;

    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});

// http://127.0.0.1:49375/?eng=hello&spanish=hola