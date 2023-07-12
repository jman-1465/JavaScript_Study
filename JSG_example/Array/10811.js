//0712

/*
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다. 

도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.
*/

let input = require('fs').readFileSync('./example/example_10811.txt').toString().trim().split('\n');
/*let input = [`5 4`,
			`1 2`,
			`3 4`,
			`1 4`,
			`2 2`]*/
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let basket = [];
for(let i=1; i<=N; i++){
    basket.push(i);
};

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(n=>parseInt(n));
    let arr = [];
    for(let j=a-1; j<b; j++){
        arr.push(basket[j])
    };
    arr.reverse();
    basket.splice(a-1, b-a+1, ...arr);
}
console.log(basket.join(' '))