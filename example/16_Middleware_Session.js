var express = require('express');
var session = require('express-session');

var app = express();

//session 미들웨어 설정
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true
}));


app.use(function (request, response) {
    request.session.now = (new Date()).toUTCString();
    response.send(request.session)
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});