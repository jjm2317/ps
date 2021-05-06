/*
최대 매출
현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속
된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.
▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.
▣ 입력예제 1 
10 3
12 15 11 20 25 10 20 19 13 15
▣ 출력예제 1
56
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 2) rl.close();
}).on("close", () => {
  const [n, k] = input[0].split(" ").map((v) => +v);

  const arr = input[1].split(" ").map((v) => +v);
  // let max = Number.MIN_SAFE_INTEGER;
  // for (let i = 0; i < n; i++) {
  //   let sum = 0;
  //   for (let j = i; j < i + k; j++) {
  //     sum += arr[j];
  //   }
  //   if (max < sum) {
  //     max = sum;
  //   }
  // }

  // console.log(max);

  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let max = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];

    if (sum > max) max = sum;
  }

  console.log(max);
});
