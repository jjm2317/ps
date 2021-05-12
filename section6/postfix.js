/*
후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
▣ 출력설명
연산한 결과를 출력합니다.
▣ 입력예제 1 
352+*9-
▣ 출력예제 1
12
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);
  rl.close();
}).on('close', () => {
  const str = input[0];
  //   let result = '';
  //   let stack = [];
  //   for (let s of str) {
  //     if (s.match(/[1-9]/)) {
  //       result += s;
  //       if (stack.length === 0) continue;
  //       else {
  //         const pop = stack.pop();
  //         if (pop === '(') continue;
  //         else result += pop;
  //       }
  //     } else {
  //       if (s === ')') continue;
  //       else stack.push(s);
  //     }
  //   }
  //   console.log(result);
  let stack = [];
  let temp = 0;
  for (let s of str) {
    if (s.match(/[1-9]/)) {
      stack.push(+s);
    } else {
      switch (s) {
        case '+':
          stack.push(stack.pop() + stack.pop());
          break;
        case '-':
          const item1 = stack.pop();
          const item2 = stack.pop();
          stack.push(item2 - item1);
          break;
        case '*':
          stack.push(stack.pop() * stack.pop());
          break;
        case '/':
          const item3 = stack.pop();
          const item4 = stack.pop();
          stack.push(item4 / item3);
          break;
      }
    }
  }

  let x = 1;
  let y = 2;
  [x, y] = [y, x];
  //   x = x ^ y;
  //   y = x ^ y;
  //   x = x ^ y;
  console.log(x, y);
  //   console.log(stack[0]);
});