//0409

var input = require('fs').readFileSync('./example/example_14681.txt').toString().split('\n');

var [x, y] = input;

if(x > 0) {
    console.log(y > 0 ? 1 : 4);
} else {
    console.log(y > 0 ? 2 : 3);
}