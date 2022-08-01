// https://jhbae.in/2017/01/07/node-js-database.html

let mysql = require('mysql');


let client = mysql.createConnection({
    user: 'root',
    pqssword: '082100',
    database: 'company'
});

// client.query('USE company');

client('insert into products (name,modelnumber,series) values (?, ?, ?)', ['Name', 'model', 'series'],
    function (error, result, fields) {

    });

client.query('select * from products', function (error, result, fields) {
    if (error) {
        console.log('Query Syntax Error!');
    } else {
        console.log(result);
    }
});
