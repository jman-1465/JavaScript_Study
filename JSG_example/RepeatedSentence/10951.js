//0516

// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_10951.txt').toString().split('\n');

for (var i = 0; i < input.length; i++) {
    var numbers = input[i].split(' ').map(v => v * 1);

    console.log(numbers[0] + numbers[1]);
}