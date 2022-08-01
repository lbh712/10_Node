// #15 미들웨어10 멀티파트 미들웨어 

//모둘 추출
const express = require('express');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var fs = require('fs');
var multipart = require('connect-multiparty');
const { off } = require('process');

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
    //console.log(request.body);
    //console.log(request.files);

    var comment = request.body.comment;
    var imageFile = request.files.image;

    if (imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        //이미지 파일인지 아닌지 식별
        if (type.indexOf('image') != -1) {
            var outputPath = __dirname + '/multipart' + Date.now() + '_' + name;
            fs.rename(path.outputPath, function (error) {
                response.redirect("/");
            });
        } else {
            //이미지 파일이 아닌경우 파일 업로드를 차단
            fs.unlink(path, function (error) {
                response.sendStatus(400);
            });
        }
    } else {
        response.sendStatus(404);
    }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Server Running OupPut

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});