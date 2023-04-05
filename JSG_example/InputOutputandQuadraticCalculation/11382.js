//0401
let input = require('fs').readFileSync('./example/example_11382.txt').toString().split(' ').map(Number);

let NumA = input.reduce((a,b) => a +b);
console.log(NumA);