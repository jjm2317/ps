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
    cur[0] += Math.min(pre[1], pre[2]);
    cur[1] += Math.min(pre[0], pre[2]);
    cur[2] += Math.min(pre[0], pre[1]);
    return cur;
  });
  console.log(Math.min(...result));

  process.exit();
});
