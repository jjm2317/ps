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

  if (input.length - 1 === +input[0]) rl.close();
}).on("close", function () {
  const psList = input.filter((_, i) => i > 0);
  const vpsTest = (ps) => {
    const stack = [];
    const psArr = ps.split("");
    let result = true;
    psArr.forEach((item, i, arr) => {
      item === "("
        ? stack.push(item)
        : stack.pop() === "("
        ? ""
        : (result = false);
      //   console.log(stack, item, result);
    });
    if (stack.length > 0) result = false;
    return result;
  };
  const checkList = psList.map((ps) => (vpsTest(ps) ? "YES" : "NO"));

  console.log(checkList.join("\n"));
  process.exit();
});
