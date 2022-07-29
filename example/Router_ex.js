// http://127.0.0.1:49375/?/index

var express = require('express');
var app = express();

app.use('/a', require("./RouterA").router);
app.use('/b', require("./RouterB").router);
app.use('/c', require("./RouterC").router);

app.listen(49375, function () {
    console.log("Server Running at http://127.0.0.1:49375");
});