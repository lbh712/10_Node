// #15 미들웨어10 멀티파트 미들웨어 

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

// const express = require('express');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var fs = require('fs');
var multipart = require('connect-multiparty');


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

    const comment = request.body.comment;
    const imgFile = request.files.image;
    console.log(comment + "\n", imgFile);

    if (imgFile.name != "") {
        var name = imgFile.name;
        var path = imgFile.path;
        var type = imgFile.type;

        //이미지 파일인지 아닌지 식별
        if (type.indexOf('image') != -1) {
            var outputPath = __dirname + '/multipart' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (error) {
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

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});



/////////////////////////////////////////////////////////////////////////
// Song(ver)

// const express = require('express')
// const cookieParser = require('cookie-parser')
// const fs = require('fs')
// const multiparty = require('connect-multiparty')
// const bodyParser = require('body-parser')
// const { send } = require('process')
// const app = express()
// const port = 3000

// // 미들웨어 생성
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multiparty({ uploadDir: __dirname + '/multipart' }));


// app.get('/', (req, res) => {
//     fs.readFile('Htmlpage.html', (err, data) => {
//         res.send(data.toString());
//     })
// })

// app.post('/', function (req, res) {
//     const comment = req.body.comment;
//     const imgFile = req.files.image;
//     console.log(comment + "\n", imgFile);

//     if (imgFile.name != "") {
//         const name = imgFile.name;
//         const path = imgFile.path;
//         const type = imgFile.type;

//         if (type.indexOf('image') != -1) {
//             const outputPath = __dirname + '/multipart/' + comment + "_" + name;
//             fs.rename(path, outputPath, (err) => {
//                 res.redirect('/');
//             })
//         } else {
//             fs.unlink(path, (error) => {
//                 res.sendStatus(400);
//             })
//         }
//     } else {
//         res.sendStatus(404);
//     }

// })
// app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))


