//0506
var input = require('fs').readFileSync('./example/example_11022.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
