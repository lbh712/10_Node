var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname == '/') {
        fs.readFile('Page.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        })
    } else if (pathname == '/OtherPage') {
        fs.readFile('OtherPage.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        })
    }
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
})

// https://blog.daum.net/lkserec/36
// http://127.0.0.1:49375/
// http://127.0.0.1:49375/OtherPage
