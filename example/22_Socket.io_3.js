// https://heeestorys.tistory.com/1029?category=843902

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var app = http.createServer(function (request, response) {
    fs.readFile('HTMLPage3_Jquery Mobile.html', function (error,data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
});

app.listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});

var io = socketio.listen(app);
io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
        io.sockets.emit('message', data)
    });
});