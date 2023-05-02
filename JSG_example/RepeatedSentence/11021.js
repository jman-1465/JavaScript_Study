//0502

var input = require('fs').readFileSync('./example/example_11021.txt').toString().split('\n');

for (var i=1; i <= input[0]; i++){
    var numbers = input[i].split(' ');

    console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}