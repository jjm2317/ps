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
  const n = +input[0];
  const grid = input
    .filter((_, i) => i > 0)
    .map((arr) => arr.split(" ").map((v) => +v));
  const rowSums = [];
  const colSums = [];
  let diagSum1 = 0;
  let diagSum2 = 0;
  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += grid[i][j];
      colSum += grid[j][i];
    }
    diagSum1 += grid[i][i];
    diagSum2 += grid[i][n - 1 - i];
    rowSums.push(rowSum);
    colSums.push(colSum);
  }

  const value = [...rowSums, ...colSums, diagSum1, diagSum2].reduce(
    (pre, cur) => {
      if (pre < cur) return cur;
      return pre;
    }
  );
  console.log(value);
});
