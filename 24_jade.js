var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response) {
    fs.readFile('23_japePage.jade', 'utf-8', function (error, data) {
        var fn = jade.compile(data);
        //html 형식의 코드로 jade가 가지고 있는 코드를 변환해준다
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.end(fn({
            name : 'LeeBeomHee',
            description : 'Hello World!'
        }));
    });
}).listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});