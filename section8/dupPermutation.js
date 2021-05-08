/*
중복순열 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열
하는 방법을 모두 출력합니다.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1 
3 2
▣ 출력예제 1
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
9
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
  const [n, m] = input[0].split(" ").map((v) => +v);
  let checkMap = new Map();
  for (let i = 1; i <= n; i++) {
    checkMap.set(i, 0);
  }
  console.log(checkMap);
  const DFS = (depth) => {
    if (depth > m) {
      let result = "";
      for ([key, val] of checkMap) {
        for (let i = 0; i < val; i++) {
          result += key + " ";
        }
      }
      console.log(result.trim());
      return;
    }

    for (let i = 1; i <= n; i++) {
      checkMap.set(i, checkMap.get(i) + 1);
      DFS(depth + 1);
      checkMap.set(i, checkMap.get(i) - 1);
    }
    // checkMap.set(v, checkMap.get(v) - 1);
  };

  DFS(1);
});
