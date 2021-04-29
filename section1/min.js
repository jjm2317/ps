/* 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하
세요.(정렬을 사용하면 안됩니다)
▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.
▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.
▣ 입력예제 1 
6 5 11
▣ 출력예제 1
5*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => {
  let min = Number.MAX_SAFE_INTEGER;
  const arr = input[0].split(" ").map((v) => +v);

  for (let num of arr) {
    if (min > num) {
      min = num;
    }
  }
  console.log(min);
  // console.log(
  //   input[0]
  //     .split(" ")
  //     .map((v) => +v)
  //     .reduce((pre, cur) => (pre > cur ? cur : pre))
  // )
});
