var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('Page.html', function (error, data) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});
