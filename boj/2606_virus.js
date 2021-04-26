/* 문제 링크: https://www.acmicpc.net/problem/2606
분류 : 너비 우선 탐색*/

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
  const pairList = input.filter((_, i) => i > 1).map((v) => v.split(" "));
  const resultArr = [];
  const testArr = [];
  resultArr.push(...pairList[0]);

  pairList
    .filter((_, i) => i > 0)
    .forEach((item) => {
      let isContain = false;
      for (let i = 0; i < item.length; i++) {
        if (resultArr.includes(item[i])) isContain = true;
      }

      for (let k = 0; k < item.length; k++) {
        if (!isContain) break;
        if (!resultArr.includes(item[k])) resultArr.push(item[k]);
      }
    });
  console.log(resultArr.length - 1);
  process.exit();
});
