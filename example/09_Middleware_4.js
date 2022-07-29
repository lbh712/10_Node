// 미들웨어4 get방식

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

// http://127.0.0.1:49375/page/255

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/page/:id', function (request, response) {
    let name = request.params.id;

    response.send('<h1>' + name + 'Page</h1>')
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});