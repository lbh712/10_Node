var http = require('http');

var server = http.createServer();

server.listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});

var test = function () {
    server.close();
}

setTimeout(test, 5000);