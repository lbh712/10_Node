// 미들웨어6 router미들웨어 생성

// http://127.0.0.1:49375/a/index
// http://127.0.0.1:49375/b/index

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

let routerA = express.Router();
let routerB = express.Router();

routerA.get('/index', function (request, response) {
    response.send('<h1>Index Page A</h1>');
});

routerB.get('/index', function (request, response) {
    response.send('<h1>Index Page B</h1>');
});

app.use('/a',routerA);
app.use('/b',routerB);

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});