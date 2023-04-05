//0405
let input = require("fs").readFileSync('./example/example_1330.txt').toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

if (a > b) {
console.log(">");
} else if (a < b) {
console.log("<");
} else {
console.log("==");
}