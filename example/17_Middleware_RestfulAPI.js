let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let { resourceUsage } = require('process');

// https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
// https://win100.tistory.com/324


// Restful Web Service
// GET : /user 모든사용자의 정보를 조회
// GET : /user:id 특정 사용자를 조회
// POST : /user 사용자를 추가
// PUT : /user/:id 특정 사용자 정보 수정
// DELETE : /user/:id 특정 사용자 정보 제거

let DummyDB = (function () {
    let DummyDB = {};
    let storage = [];
    let count = 1;

    //Read
    DummyDB.get = function (id) {
        if (id) {
            id = (typeof id == 'string') ? Number(id) : id;
            for (let i in storage) {
                if (storage[i].id == id) {
                    return storage[i];
                }
            }
        } else {
            return storage;
        }
    }

    //Create
    DummyDB.insert = function (data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    //Delete
    DummyDB.remove = function (id) {
        id = (typeof id == 'string') ? Number(id) : id;

        for (let i in storage) {
            if (storage[i].id == id) {
                storage.splice(i, 1);
                return true;
            }
            return false;
        }
    }
    return DummyDB;
})();

//서버 생성
let app = express();

//bodyparser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }))

//라우터 설정

app.get('/user', function (request, response) {
    response.send(DummyDB.get());
});

//id는 파라미터값으로 받는다
app.get('/user/:id', function (request, response) {
    response.send(DummyDB.get(request.params.id));
});

app.post('/user', function (request, response) {
    let name = request.body.name;
    let region = request.body.region;

    if (name && region) {
        response.send(DummyDB.insert({ name: name, region: region }));
    } else {
        throw new Error('error');
    }
});

app.put('/user/:id', function (request, response) {
    let id = request.params.id;
    let name = request.body.name;
    let region = request.body.region;

    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    response.send(item);
});

app.delete('/user/:id', function (request, response) {
    response.send(DummyDB.remove(request.params.id));
});

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});