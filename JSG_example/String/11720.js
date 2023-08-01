//0802

//N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_11720.txt').toString().split('\n');

let num = Number(input[0]);
let num2 = input[1].split("");
let sum = 0;

for (let i = 0; i < num; i++) {
    sum += Number(num2[i]);
}

console.log(sum);