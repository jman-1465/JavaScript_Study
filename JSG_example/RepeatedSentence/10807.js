//0519

// 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

let input = require("fs").readFileSync("./example/example_10807.txt").toString().trim().split("\n");

const [N, S, V] = input

const cnt = S.split(" ").filter((ele) => ele == V).length;

console.log(cnt);