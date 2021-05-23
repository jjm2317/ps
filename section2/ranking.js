/*
등수구하기
N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 
프로그램을 작성하세요.
▣ 입력설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력
된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 
92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
▣ 출력설명
입력된 순서대로 등수를 출력한다.
▣ 입력예제 1 
5
87 89 92 100 76
▣ 출력예제 1
4 3 2 1 5
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
  const n = +input[0];
  const arr = input[1].split(" ").map((v) => +v);
  // const result = [];
  // for (let num of arr) {
  //   let rank = 1;
  //   for (let compare of arr) {
  //     num < compare && rank++;
  //   }
  //   result.push(rank);
  // }
  // console.log(result);

  // const result = Array.from({ length: n }, () => 1);

  // for (let i = 0; i < n; i++) {
  //   for (let compare of arr) {
  //     arr[i] < compare && result[i]++;
  //   }
  // }
  // console.log(result);
  let result = [];

  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) rank++;
    }
    result.push(rank);
  }
  console.log(result);
});
