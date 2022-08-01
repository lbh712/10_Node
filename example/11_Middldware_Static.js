// 미들웨어7 static 미들웨어


//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.use(express.static(__dirname + '/public'))
//public이라는 폴더를 절대경로로 설정

app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<img src ="/dog.png" width="80%" />');
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});