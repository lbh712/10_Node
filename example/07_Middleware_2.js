// 미들웨어2 (재사용성을 높인 방식)

// https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80
// https://velog.io/@goblin820/TIL-5-express-%EC%BD%98%EC%86%94-%EB%A1%9C%EA%B7%B8%EA%B0%80-%EC%99%9C-%EB%91%90%EB%B2%88%EC%9D%B4%EB%82%98-%EC%B0%8D%ED%98%94%EC%9D%84%EA%B9%8C

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(function (request, response, next) {
    request.number = 52;
    response.number = 274;
    next();
});

app.use(function (request, response, next) {
    response.send('<h1>' + request.number + ' : ' + response.number + '</h1>')
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});