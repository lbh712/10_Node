
// https://ganzicoder.tistory.com/64

var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '082100',
    database: 'company',
    port: 3306
});

app.use(bodyParser.urlencoded({ extended: false }));

//////////Read//////////
app.get('/', function (request, response) {
    fs.readFile('Read.html', 'utf-8', function (error, data) {
        client.query('select * from products', function (error, results) {
            response.send(ejs.render(data, { data: results }));

        });
    });
});

//////////Delete//////////
app.get('/delete/:id', function (request, response) {
    var sql = "DELETE FROM products WHERE id = ?";

    client.query(sql, [request.params.id], function () {
        response.redirect('/')
    });
});

//////////Create//////////
// insert.html 폼에서 데이터를 입력받음
app.get('/insert', function (request, response) {
    fs.readFile('Create.html', 'utf-8', function (error, data) {
        response.send(data);
    });
});

//입력받은 데이터 값을 리스트에 추가
app.post('/insert', function (request, response) {
    var body = request.body;
    var sql = "INSERT INTO products (name, modelnumber, series) values (?, ?, ?)";

    client.query(sql, [body.name, body.modelnumber, body.series], function () {
        response.redirect('/');
    })
});

// //////////Update//////////
// Update.html 폼에서 데이터를 수정함
app.get('/edit/:id', function (request, response) {
    fs.readFile('Update.html', 'utf-8', function (error, data) {
        var sql = "SELECT * FROM products where id = ?";

        client.query(sql, [request.params.id], function (error, results) {
            response.send(ejs.render(data, {
                data: results[0]
            }));
        })
    })
});

// app.post('/edit/:id', function (request, response) {
//     // 변수를 선언
//     var body = request.body

//     // 쿼리 구문 작성
//     var sql = "UPDATE products SET name=?, modelnumber=?, series=? where id=?,

//     //데이터베이스 쿼리 실행
//     client.query(sql, [body.name, body.modelnumber, body.series], function () {
//         //응답 받으면 루트경로로 이동
//         response.redirect('/');
//     });
// });

app.post('/edit/:id', function(request, response){
    const id = request.params.id;
    console.log(id)
    const name = request.body.name;
    const modelnumber = request.body.modelnumber;
    const series = request.body.series;
    client.query('update products set  name =?,modelnumber=?,series=? where id =?', [name, modelnumber, series, id], (error, rs) => {
        if (error) console.log(error);
        response.redirect('/')
    })
});

// Server Running OupPut
app.listen(49380, function () {
    console.log("Server Running at http://127.0.0.1:49380");
});


