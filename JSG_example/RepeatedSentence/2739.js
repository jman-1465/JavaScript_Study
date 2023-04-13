//0413
var input = require('fs').readFileSync('./example/example_2739.txt').toString();

var number = Number(input[0]);

for (let i = 1; i < 10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}