//0409
var input = require('fs').readFileSync('./example/example_2753.txt').toString().split(" ");

var number = Number(input[0]);

if ((number % 4 == 0 && number % 100 !== 0) || number % 400 == 0){
    console.log("윤년");
} else {
    console.log("윤년이 아님");
}
