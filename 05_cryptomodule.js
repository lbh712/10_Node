var crypto = require('crypto');

var key = '아무도 알지 못하는 나만의 비밀 키';
var input = "PASSWORD";

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf-8', 'base64');
var chiperdOutPut = cipher.final('base64');

var dicipher = crypto.createDecipher('aes192',key);
dicipher.update(chiperdOutPut,'base64','utf-8');
var decipheredOutPut = dicipher.final('utf-8');

console.log('기존 문자열 : ' + input);
console.log('암호화 : ' + chiperdOutPut);
console.log('암호화 해제 : ' + decipheredOutPut);