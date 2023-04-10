//0410

var input = require('fs').readFileSync('./example/example_2884.txt').toString().split(' ');

var hour = Number(input[0]);
var minute = Number(input[1]);

minute -= 45;

if(minute < 0) {
    minute += 60;
    hour--;

    if (hour == -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);