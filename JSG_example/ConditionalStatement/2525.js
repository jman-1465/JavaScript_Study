//0411
var input = require('fs').readFileSync('./example/example_2525.txt').toString().split(" ");

var current = input[0].split(' ').map(Number);

var currentHour = current[0];
var currentMinute = current[1];
var cookTime = Number(input[1]);

var cookEndTimeHour = parseInt((currentHour*60 + currentMinute + cookTime)/60);
var cookEndTimeMinute = parseInt((currentHour*60 + currentMinute + cookTime)% 60);

console.log(cookEndTimeHour >= 24 ? cookEndTimeHour - 24 : cookEndTimeHour, cookEndTimeMinute);