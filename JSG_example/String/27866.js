//0718

/*
단어 S와 정수 i가 주어졌을 때, 
S의 i번째 글자를 출력하는 프로그램을 작성하시오.
*/

const inputs = require('fs').readFileSync('./example/example_27866.txt').toString().trim().split('\n');

let voca = inputs[0].toString();
let num = Number(inputs[1]);

console.log(voca[num-1]);
