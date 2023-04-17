//0417
var input = require('fs').readFileSync('./example/example_10950.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    console.log(Number(numbers[0]) + Number(numbers[1]));
}