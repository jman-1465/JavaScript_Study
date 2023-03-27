//0327

// 틀린답
let input = require('fs').readFileSync('./example/example_10998.txt').toString().split('\n');
const a = parseInt(input[0]); //parseInt는 입력받은 문자열을 숫자값으로 전환
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);

console.log(a*b);
console.log(c*d); 


// 정답1
const input = require('fs').readFileSync('./example/example_10998.txt').toString().split(' ');
console.log(parseInt(input[0]) * parseInt(input[1]));


// 정답2
const fs = require('fs');
const input = fs.readFileSync("./example/example_10998.txt").toString().trim().split(" ").map(Number);
console.log(input[0]*input[1]);