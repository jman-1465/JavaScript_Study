//0521

// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_10871.txt').toString().split('\n');

var num = input[0].split(' ').map(x => Number(x));
var arr = input[1].split(' ').map(x => Number(x));
// split() = 문자열을 일정한 구분자로 잘라서 배열로 저장
// map() = 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

var answer = [];

for(let i = 0; i <= num[0]; i++){
    if(num[1] > arr[i]) {
        answer.push(arr[i]);
        // array의 마지막에 새로운 요소를 추가하고 난후 변경된 배열의 길이를 반환
    }
}

console.log(answer.join(' '));
// join = 배열의 원소들을 연결하여 하나의 값으로 만듬

