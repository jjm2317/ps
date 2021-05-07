/*
재귀함수를 이용한 이진수 출력
10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용
해서 출력해야 합니다.
▣ 입력설명
첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.
▣ 출력설명
첫 번째 줄에 이진수를 출력하세요.
▣ 입력예제 1 
11
▣ 출력예제 1
1011
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
  // const n = +input[0];
  // let result = "";
  // const DFS = (n) => {
  //   if (n === 0) return;

  //   DFS(parseInt(n / 2));
  //   result += n % 2 === 1 ? 1 : 0;
  // };

  // DFS(n);

  // console.log(result);
  const n = +input[0];

  const DFS = n => {
    if (n === 0) return;

    DFS(n - 1);
    console.log(n);
  };
  DFS(n);
});
