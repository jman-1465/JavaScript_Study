//0322
let input = require('fs').readFileSync('./example/example_1001.txt').toString().split('\n');
const a = parseInt(input[0]); //parseInt는 입력받은 문자열을 숫자값으로 전환
const b = parseInt(input[1]);
console.log(a-b);