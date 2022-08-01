// 미들웨어1

// https://velog.io/@eogns1208/Express.js-%EC%A0%95%EB%A6%AC

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();


app.use(function (request, response, next) {
    console.log("첫 번째 미들웨어");
    next();
});

app.use(function (request, response, next) {
    console.log("두 번째 미들웨어");
    next();
});

app.use(function (request, response, next) {
    console.log("세 번째 미들웨어");
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Express Basic</h1>')
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});