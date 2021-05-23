/*
격자판 최대합
5*5 격자판에 아래롸 같이 숫자가 적혀있습니다. 
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
니다.
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 
▣ 출력설명
최대합을 출력합니다.
▣ 입력예제 1 
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19
▣ 출력예제 1
155
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length - 1 === +input[0]) rl.close();
}).on("close", () => {
  // const n = input[0];
  // const arr = input.filter((_, i) => i > 0).map(v => v.split(' ').map(v => +v));
  // let diagSum1 = 0;
  // let diagSum2 = 0;
  // let rowSum = 0;
  // let colSum = 0;
  // let max = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     rowSum += arr[i][j];
  //     colSum += arr[j][i];
  //   }
  //   diagSum1 += arr[i][i];
  //   diagSum2 += arr[i][n - i - 1];
  //   max = Math.max(max, rowSum, colSum);
  //   rowSum = 0;
  //   colSum = 0;
  // }
  // console.log(Math.max(diagSum1, diagSum2, max));

  const n = +input[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));
  let colSum = 0;
  let rowSum = 0;
  let diagSum1 = 0;
  let diagSum2 = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
      if (i === j) diagSum1 += arr[i][j];
      if (i === n - j - 1) diagSum2 += arr[i][j];
    }
    max = Math.max(max, colSum);
    max = Math.max(max, rowSum);
    [rowSum, colSum] = [0, 0];
  }
  max = Math.max(max, diagSum1);
  max = Math.max(max, diagSum2);
  console.log(max);
});
