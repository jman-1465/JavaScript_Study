//0521

// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_10818.txt').toString().split('\n');

var count = Number(input[0]);
var numbers = input[1].split(' ').map(x=> Number(x));

var max = numbers[0];
var min = numbers[0];

for (let i = 1; i < count; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
    }

    if (min > numbers[i]) {
        min = numbers[i];
    }
}

console.log(`${min} ${max}`);
// 백틱(`) = 문자열 생성시 따옴표 대신 사용(템플릿 리터럴(Template Literal))
// ${} = 표현식 삽입(Expression interpolation) 중괄호 사이에 변수나 연산등을 삽입할 수 있음
