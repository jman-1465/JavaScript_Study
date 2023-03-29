//0329
const fs = require('fs');
const input = fs.readFileSync('./example/example_10869.txt').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);