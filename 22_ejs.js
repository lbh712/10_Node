var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response) {
    fs.readFile('21_ejsPage.ejs', 'utf-8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data));
    });
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});