/* 문제 링크: https://www.acmicpc.net/problem/1149
분류 : 다이나믹 프로그래밍*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (line) {
  input.push(line);

  if (input.length - 1 === +input[0]) rl.close();
}).on("close", function () {
  const n = +input[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((item) => item.split(" ").map((v) => +v));

  const result = arr.reduce((pre, cur) => {
    const firstCase = [, pre[0] + cur[1], pre[0] + cur[2]];
    const secondCase = [pre[1] + cur[0], , pre[1] + cur[2]];
    const thirdCase = [pre[2] + cur[0], pre[2] + cur[1]];

    const result = [
      Math.min(secondCase[0], thirdCase[0]),
      Math.min(firstCase[1], thirdCase[1]),
      Math.min(firstCase[2], secondCase[2]),
    ];
    console.log(result);
    return result;
  });
  console.log(Math.min(...result));

  //   console.log(columnToRow);
  process.exit();
});
