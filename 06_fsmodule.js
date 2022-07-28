var fs = require('fs');

var text = fs.readFileSync('textfile.txt', 'utf-8');
console.log(text);

fs.readFile('textfile.txt', 'utf-8', function (error, data) {
    console.log(data);
});

var data = "Hello World...!";

fs.writeFile('TextFileOtherWrite.txt', data, 'utf-8', function (error) {
    console.log('write file async complete');
});

fs.writeFileSync('TextFileOtherWriteSync.txt',data,'utf-8');
console.log('write file Sync complete');