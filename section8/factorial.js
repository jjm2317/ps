/*
팩토리얼
자연수 N을 입력하면 N!값을 구하세요.
N! = n*(n-1)*(n-2)*.....*2*1입니다. 
만약 N=5라면 5!=5*4*3*2*1=120입니다.
▣ 입력설명
첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.
▣ 출력설명
첫째 줄에 N팩토리얼 값을 출력합니다.
▣ 입력예제 1 
5
▣ 출력예제 1
120
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
  const n = +input[0];

  const DFS = (L) => {
    if (L === 0) {
      return 1;
    }

    return L * DFS(L - 1);
  };

  console.log(DFS(n));
});
