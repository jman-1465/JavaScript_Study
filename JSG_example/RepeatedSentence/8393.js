//0419
var input = require('fs').readFileSync('./example/example_8393.txt').toString();

let inputNumber = Number(input)

let answer = 0;

for(let i = 1; i<=inputNumber; i++) {
  answer += i
}

console.log(answer);