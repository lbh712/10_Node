var http = require('http');



http.createServer(function (request, response) {
    if (request.headers.cookie) {
        var cookie = request.headers.cookie.split(';').map(function (element) {
            var element = element.split('=');
            return {
                key: element[0],
                value: element[1],
            }
        });
        response.end('<h1>' + JSON.stringify(cookie) + '</h1>')
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8',
            'Set-Cookie': ['name = Hong', 'region = seoul']
        });
    response.end('<h1>쿠키를 구성했습니다.</h1>')
    }
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});
