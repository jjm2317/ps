/* 문제 링크: https://www.acmicpc.net/problem/9251
분류 : 다이나믹 프로그래밍*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (line) {
  input.push(line);

  if (input.length - 1 === +input[0].split(" ")[0]) rl.close();
}).on("close", function () {
  process.exit();
});
