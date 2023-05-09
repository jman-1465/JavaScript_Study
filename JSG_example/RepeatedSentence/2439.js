//0509

// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

var input = require('fs').readFileSync('./example/example_2439.txt').toString();

var num = Number(input);

for (var i = 0; i < num; i++) {
    var star = '';

    for (var j = num - 1; j >= 0; j--){
      star += j <= i ? '*' : ' ';  
    }
    
    console.log(star);
}

