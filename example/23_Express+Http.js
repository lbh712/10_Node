var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');

//0 : 좌석 표시가 없는 자리 (공란, 통로) 
//1 : 예약이 가능한 좌석 
//2 : 예약이 완료된 좌석

var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
];

//express 서버 생성
var app = express();

//http 서버에 express 서버를 연동
var server = http.createServer(app);

app.get('/', function (request, response, next) {
    fs.readFile('HTMLPage4_Reserve.html', function (error, data) {
        response.send(data.toString());
    });
});

app.get('/seats', function (request, response, next) {
    response.send(seats)
});

server.listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});

//소켓 서버생성
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('reserve', function (data) {
        //data의 x 위치는 y 값, y 위치는 x 값 
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data)
    });

    socket.on('cancel', function (data) {
        //data의 x 위치는 y 값, y 위치는 x 값 
        seats[data.y][data.x] = 1;
        io.sockets.emit('cancel', data)
    });
});