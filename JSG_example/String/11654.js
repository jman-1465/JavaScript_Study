// 0731

// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_11654.txt').toString().split(' ');

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);