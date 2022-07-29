// #02 For 문 출력 확인 

//모둘 추출
var express = require('express');

//서버 생성 
var app = express();

app.use(function (request, response) {
    let output = [];
    for (let i = 0; i < 3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }
    response.status(200);
    response.send(output);
});

// (Arrow Function)
// app.use((req, res) => {
//     let output = [];
//     for (let i = 0; i < 3; i++) {
//         output.push({
//             count: i,
//             name: 'name - ' + i
//         });
//     }
//     res.status(200).send(output);
// });

// Server Running OupPut
app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});