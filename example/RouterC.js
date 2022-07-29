var express = require('express');
var router = express.Router();

router.get('/index', function (request, response) {
    response.send('<h1>This Index Page C</h1>');
});

exports.router = router;