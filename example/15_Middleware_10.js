// 미들웨어10 멀티파트 미들웨어 

// const express = require('express');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var fs = require('fs');
var multipart = require('connect-multiparty');

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

//쿠키미들웨어
app.use(cookieParser());

//bodyparser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }))


//multipart 미들웨어 설정
app.use(multipart({ uploadDir: __dirname + '/multipart' }));


app.get('/', function (request, response) {
    fs.readFile('page.html', function (error, data) {
        response.send(data.toString());
    });
});

app.post('/', function (request, response) {
   console.log(request.body);
   console.log(request.files);

   
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});