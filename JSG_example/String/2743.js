//0725

// 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.

var input = require('fs').readFileSync('./example/example_2743.txt').toString().trim(); 
//trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
console.log(input.length);