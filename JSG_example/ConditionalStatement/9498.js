//0406
 var input = require('fs').readFileSync('./example/example_9498.txt').toString().split(" ");

var score = parseInt(input);

if (score >= 90){
    console.log('A');
} else if (score >= 80){
    console.log('B');
} else if (score >= 70){
    console.log('C');
} else if (score >= 60){
    console.log('D');
} else {
    console.log('F');
}
