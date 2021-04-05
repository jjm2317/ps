/* 문제 링크: https://www.acmicpc.net/problem/9012 
분류 : 문자열*/

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
  const maxWidth = input[0].split(" ").map((v) => +v);
  const numList = input.filter((_, i) => i > 0);
  // for(let x = 0 ; x < )
  process.exit();
});
