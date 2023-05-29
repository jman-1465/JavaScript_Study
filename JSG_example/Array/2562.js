// 0529

// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
// 예를 들어, 서로 다른 9개의 자연수
// 3, 29, 38, 12, 57, 74, 40, 85, 61
// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

var input = require('fs').readFileSync('./example/example_2562.txt').toString().split('\n').map(x=> Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);

/* 다른 방식

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = Math.max(...input) *** ...(three dots)이란 rest parameter와 spread operator 두 가지 상황에서 쓰인다. 참고사이트(https://dinn.github.io/javascript/js-dotdotdot/)

console.log(max)
console.log(input.indexOf(max) + 1)
*/