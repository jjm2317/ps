/*
경로 탐색(인접행렬)
방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프
로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는 
1 2 3 4 5
1 2 5
1 3 4 2 5
1 3 4 5
1 4 2 5
1 4 5
총 6 가지입니다. 
▣ 입력설명
첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연
결정보가 주어진다.
▣ 출력설명
총 가지수를 출력한다.
▣ 입력예제 1 
5 9
1 2 
1 3
1 4 
2 1 
2 3 
2 5 
3 4 
4 2 
4 5 
▣ 출력예제 1
6
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === input[0].split(" ").map((v) => +v)[1] + 1) rl.close();
}).on("close", () => {
  let answer = 0;
  const [n, m] = input[0].split(" ").map((v) => +v);
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) =>
      v
        .trim()
        .split(" ")
        .map((v) => +v)
    );
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [st, ed] of arr) {
    graph[st].push(ed);
  }
  /*
  1. DFS 는 시점 기준
  2. for loop으로 인접리스트의 해당 배열을 순회 
  3. 되돌아가면 check
  4. 
  */
  let result = 0;
  const check = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n) {
      console.log(check);
      result++;
      return;
    }

    for (let item of graph[v]) {
      if (check[item] === 0) {
        check[item] = 1;
        DFS(item);
        check[item] = 0;
      }
    }
  };
  check[1] = 1;
  DFS(1);
  console.log(result);
});
