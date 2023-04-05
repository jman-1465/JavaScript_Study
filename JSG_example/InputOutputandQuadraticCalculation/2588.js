//0401
const [NumA, NumB] = require('fs').readFileSync('./example/example_2588.txt').toString().split('\n');

let num1 = parseInt(NumA);
let num2 = NumB.split('').map(Number); //[3, 8, 5]
let result = num2.reverse().map((x)=> x*num1); // [5*num1, 8*num1, 3*num1]
result.push(num1*parseInt(NumB)); // [5*num1, 8*num1, 3*num1, num1*parseInt(NumB)]

console.log(result.join('\n'));