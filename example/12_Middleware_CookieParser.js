// 미들웨어8 CookieParser 미들웨어를 활용한 쿠키 생성

// https://skout90.github.io/2017/10/24/Node.js/cookieParser%EB%9E%80/

// http://127.0.0.1:49375/setCookie

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

const cookieParser = require('cookie-parser')
const { response } = require('express');

//쿠키미들웨어
app.use(cookieParser());

app.get('/getCookie', (req, res) => res.send(req.cookies));


app.get('/setCookie', (req, res) => {
    //쿠키를 생성
    res.cookie('string', 'cookie', {
        maxAge: 6000,
        secure: true //http 전송여부 체크
    });
    res.cookie('json',
        {
            name: 'cookie',
            porperty: 'delicious'
        });

    res.redirect('/getCookie');
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});