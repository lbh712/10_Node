// 미들웨어3 (재사용성을 높인 방식)

// http://127.0.0.1:49375/a


//모둘 추출
var express = require('express');

//서버 생성 
var app = express();


app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/a', function (request, response) {
    response.send('<a href="/b">Go to B</a>')
});

app.get('/b', function (request, response) {
    response.send('<a href="/a">Go to A</a>')
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});