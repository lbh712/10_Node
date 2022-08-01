// 미들웨어9 Body Parser 미들웨어 (get방식)

const cookieParser = require('cookie-parser')
const { response } = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

//쿠키미들웨어
app.use(cookieParser());

//bodyparser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});

app.get('/login', function (request, response) {
    fs.readFile('login.html', function (error, data) {
        response.send(data.toString());
    });
});

app.post('/login', function (request, response) {
    var login = request.body.login;
    var password = request.body.password;

    console.log(login, password);
    console.log(request.body);

    if (login == 'rint' && password == '1234') {
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        response.redirect('/login');
    }
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});