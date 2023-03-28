//0329

const fs = require("fs");
const input = fs.readFileSync("./example/example_1008.txt").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a / b)