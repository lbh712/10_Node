// #01 Content Print

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello Express</h1>');
});

// Server Running OupPut
app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});