// #05 Query String

// http://127.0.0.1:49375/?name=Beom&region=seoul

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.use(function (request, response, next) {
    let name = request.query.name;
    let region = request.query.region;

    response.send('<h1>' + name + '-' + region + '</h1>')
})

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});