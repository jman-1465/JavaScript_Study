//0508

// 문제
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

var input = require('fs').readFileSync('./example/example_2438.txt').toString().split('\n');

var star = "";

for (var i=0; i < input; i++) {
    star += "*"
    console.log(star);
}