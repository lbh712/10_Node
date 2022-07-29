// https://abc1211.tistory.com/226

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

//미들웨어
//request 이벤트 리스너
//use()

///////////////////////////////////////////////////////////////////////////////

// #01 Content Print

// app.use(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end('<h1>Hello Express</h1>');
// });

///////////////////////////////////////////////////////////////////////////////

// #02 for문 Print

// app.use(function (request, response) {
//     let output = [];
//     for (let i = 0; i < 3; i++) {
//         output.push({
//             count: i,
//             name: 'name - ' + i
//         });
//     }
//     response.status(200);
//     response.send(output);
// });

// #03 (Arrow Function)
// app.use((req, res) => {
//     let output = [];
//     for (let i = 0; i < 3; i++) {
//         output.push({
//             count: i,
//             name: 'name - ' + i
//         });
//     }
//     res.status(200).send(output);
// })

///////////////////////////////////////////////////////////////////////////////

// #04 Browser Check

// app.use(function (request, response) {
//     let agent = request.header('User-Agent');

//     if (agent.toLowerCase().match(/chrome/)) {

//         response.send('<h1>Hello Chrome</h1>')
//     } else {
//         response.send('<h1>Hello Explorer</h1>')
//     }
// });

///////////////////////////////////////////////////////////////////////////////

// #05 Query String

// http://127.0.0.1:49375/?name=Beom&region=seoul

// app.use(function (request, response, next) {
//     let name = request.query.name;
//     let region = request.query.region;

//     response.send('<h1>' + name + '-' + region + '</h1>')
// })

///////////////////////////////////////////////////////////////////////////////

// #06 미들웨어1

// app.use(function(request,response,next){
//     console.log("첫 번째 미들웨어");
//     next();
// });

// app.use(function(request,response,next){
//     console.log("두 번째 미들웨어");
//     next();
// });

// app.use(function(request,response,next){
//     console.log("세 번째 미들웨어");
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end('<h1>Express Basic</h1>')
// });

///////////////////////////////////////////////////////////////////////////////

// #07 미들웨어2 (재사용성을 높인 방식)

// https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80
// https://velog.io/@goblin820/TIL-5-express-%EC%BD%98%EC%86%94-%EB%A1%9C%EA%B7%B8%EA%B0%80-%EC%99%9C-%EB%91%90%EB%B2%88%EC%9D%B4%EB%82%98-%EC%B0%8D%ED%98%94%EC%9D%84%EA%B9%8C

// app.get('/favicon.ico', (req, res) => res.status(204));

// app.use(function (request, response, next) {
//     request.number = 52;
//     response.number = 274;
//     next();
// });

// app.use(function (request, response, next) {
//     response.send('<h1>' + request.number + ' : ' + response.number + '</h1>')
// });

///////////////////////////////////////////////////////////////////////////////

// #08 미들웨어3 (재사용성을 높인 방식)

// http://127.0.0.1:49375/a

// app.get('/favicon.ico', (req, res) => res.status(204));

// app.get('/a', function (request, response) {
//     response.send('<a href="/b">Go to B</a>')
// });

// app.get('/b', function (request, response) {
//     response.send('<a href="/a">Go to A</a>')
// });

///////////////////////////////////////////////////////////////////////////////

// #09 미들웨어4 get방식

// http://127.0.0.1:49375/page/255

// app.get('/favicon.ico', (req, res) => res.status(204));

// app.get('/page/:id', function (request, response) {
//     let name = request.params.id;

//     response.send('<h1>' + name + 'Page</h1>')
// });

///////////////////////////////////////////////////////////////////////////////

// #10 미들웨어5 all방식

// http://127.0.0.1:49375/index

// app.get('/favicon.ico', (req, res) => res.status(204));

// app.get('/index', function (request, response) {
//     response.send('<h1>Index Page</h1>');
// });

// app.all('*', function (request, response) {
//     response.send('<h1>Error : Page Not Found</h1>');
// });

///////////////////////////////////////////////////////////////////////////////

// #11 미들웨어6 router미들웨어 생성

// http://127.0.0.1:49375/a/index

// app.get('/favicon.ico', (req, res) => res.status(204));

// let routerA = express.Router();
// let routerB = express.Router();

// routerA.get('/index', function (request, response) {
//     response.send('<h1>Index Page A</h1>');
// });

// routerB.get('/index', function (request, response) {
//     response.send('<h1>Index Page B</h1>');
// });

// app.use('/a',routerA);
// app.use('/b',routerB);

///////////////////////////////////////////////////////////////////////////////

// #12 미들웨어7 static 미들웨어

// app.use(express.static(__dirname + '/public'))
// //public이라는 폴더를 절대경로로 설정

// app.use(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end('<img src ="/dog.png" width="80%" />');
// });

///////////////////////////////////////////////////////////////////////////////

// #13 미들웨어8 CookieParser 미들웨어를 활용한 쿠키 생성

// https://skout90.github.io/2017/10/24/Node.js/cookieParser%EB%9E%80/

// http://127.0.0.1:49375/setCookie

// const cookieParser = require('cookie-parser')
// const { response } = require('express');

// //쿠키미들웨어
// app.use(cookieParser());

// app.get('/getCookie', (req, res) => res.send(req.cookies));


// app.get('/setCookie', (req, res) => {
//     //쿠키를 생성
//     res.cookie('string', 'cookie', {
//         maxAge: 6000,
//         secure: true //http 전송여부 체크
//     });
//     res.cookie('json',
//         {
//             name: 'cookie',
//             porperty: 'delicious'
//         });

//     res.redirect('/getCookie');
// });

///////////////////////////////////////////////////////////////////////////////

// #14 미들웨어9 Body Parser 미들웨어 (get방식)

// const cookieParser = require('cookie-parser')
// const { response } = require('express');
// var bodyParser = require('body-parser');
// var fs = require('fs');

// //쿠키미들웨어
// app.use(cookieParser());

// //bodyparser 미들웨어 설정
// app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', function (request, response) {
//     if (request.cookies.auth) {
//         response.send('<h1>Login Success</h1>');
//     } else {
//         response.redirect('/login');
//     }
// });

// app.get('/login', function (request, response) {
//     fs.readFile('login.html', function (error, data) {
//         response.send(data.toString());
//     });
// });

// app.post('/login', function (request, response) {
//     var login = request.body.login;
//     var password = request.body.password;

//     console.log(login, password);
//     console.log(request.body);

//     if (login == 'rint' && password == '1234') {
//         response.cookie('auth', true);
//         response.redirect('/');
//     } else {
//         response.redirect('/login');
//     }
// });

///////////////////////////////////////////////////////////////////////////////

// #15 미들웨어10 멀티파트 미들웨어 

// const express = require('express');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var fs = require('fs');
var multipart = require('connect-multiparty');

//서버 생성 
// var app = express();

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

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Server Running OupPut

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});