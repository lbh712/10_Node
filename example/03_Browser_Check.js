// #03 Browser Check

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.use(function (request, response) {
    let agent = request.header('User-Agent');

    if (agent.toLowerCase().match(/chrome/)) {

        response.send('<h1>Hello Chrome</h1>')
    } else {
        response.send('<h1>Hello Explorer</h1>')
    }
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});