// 미들웨어5 all방식

// http://127.0.0.1:49375/index

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
});

app.all('*', function (request, response) {
    response.send('<h1>Error : Page Not Found</h1>');
});


app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});