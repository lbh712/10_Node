var express = require('express');


var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var client = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '082100',
    database: 'company',
    port : 3306
});

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});

//라우터 미들웨어 설정

//리스트 불러오기
app.get('/', function (request, response) {
    fs.readFile('list.html', 'utf-8', function (error, data) {
        client.query('select * from products', function (error, results) {
            response.send(ejs.render(data, { data: results }));
        });
    });
});

app.get('/delete/:id', function (request, response) {

});

app.get('/insert', function (request, response) {

});

app.post('/insert', function (request, response) {

});


app.get('/edit/:id', function (request, response) {

});

app.post('/edit/:id', function (request, response) {

});



