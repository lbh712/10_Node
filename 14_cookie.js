var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200,
        {
            'Context-Type': 'text/html',
            'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
        });
    response.end('<h1>' + request.headers.cookie + '</h1>')
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
})