//0425

var input = require('fs').readFileSync('./example/example_15552.txt').toString().split('\n');

var max = Number(input[0]);
var answer = '';

for (var i = 1; i <= max; i++){
    var num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);