/*
올바른 괄호
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다. 
▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다.
▣ 입력예제 1 
(()(()))(()
▣ 출력예제 1
NO
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => {
  const str = input[0];
  let stack = [];
  let result = true;
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.pop() !== "(") {
        result = false;
        break;
      }
    }
  }
  if (stack.length !== 0) result = false;

  console.log(result ? "YES" : "NO");
});
