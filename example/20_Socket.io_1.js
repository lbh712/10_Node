// https://rimkongs.tistory.com/38
// https://m.blog.naver.com/zxcvb8842/221844625231

var socketio = require('socket.io');
var fs = require('fs');
var http = require('http');

var app = http.createServer(function (request, response) {
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    })
});

app.listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});

// on : 소켓 이벤트 연결(받는다)
// emit : 소켓 이벤트 발생(보낸다)

//소켓 서버 생성 및 실행
var io = socketio.listen(app);
io.sockets.on('connection', function (socket) {

    socket.on('rint', function (data) {
        console.log('Client Send Data : ', data);
        socket.emit('smart', data);
    });
});