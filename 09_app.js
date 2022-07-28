var rint = require('./08_rint');

rint.timer.on('tick', function (code) {
    console.log("이벤트를 발생시킴");
});

