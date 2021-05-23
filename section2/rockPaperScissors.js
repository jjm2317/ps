/*
가위 바위 보
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, 
B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다. 
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
회수 1 2 3 4 5
A의 정보 2 3 3 1 3
B의 정보 1 1 2 2 3
승자 A B A B D
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
▣ 입력예제 1 
5
2 3 3 1 3
1 1 2 2 3
▣ 출력예제 1
A
B
A
B
D
*/

const readline = require("readline");

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length === 3) rl.close();
}).on("close", () => {
  // const n = +input[0];
  // const [aList, bList] = input.filter((_, i) => i > 0).map(item => item.split(' ').map(v => +v));
  // const result = [];
  // for (let i = 0; i < n; i++) {
  //   if (aList[i] - bList[i] === 1) {
  //     result.push('A');
  //   } else if (aList[i] === bList[i]) {
  //     result.push('D');
  //   } else {
  //     result.push('B');
  //   }
  // }
  // console.log(result);
  const n = +input[0];
  const arrA = input[1].split(" ").map((v) => +v);
  const arrB = input[2].split(" ").map((v) => +v);
  const result = [];

  for (let i = 0; i < n; i++) {
    if (arrA[i] - arrB[i] === 1) result.push("A");
    else if (arrA[i] === arrB[i]) result.push("D");
    else result.push("B");
  }

  console.log(result);
});
