/*
경로 탐색(인접리스트)
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
  const [n, m] = input[0].split(" ").map((v) => +v);
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));
  const graph = Array.from({ length: n + 1 }, () => []);
  const path = [1];
  for (let [s, e] of arr) {
    graph[s].push(e);
  }
  /*
  1. 정점 1에서 가지 뻗기
  2. 1에서 연결된 edge로만 뻗어야됨
  3. graph[v]에서 조회
  4. 조회한 값을 DFS로 뻗어야됨
  5. 가지를 뻗기전에 check[값] = 1 가지를 회수할 때 0
  6. DFS(값);
  7. 탈출 조건 V 가 목적 V와 같아지면 V === n;
  8. 시작점이 정해져있으므로 check[시작] = 1
  */
  let result = 0;
  const check = Array.from({ length: n + 1 }, () => 0);
  console.log(graph);
  const DFS = (v) => {
    if (v === n) {
      console.log(path);
      result++;
      return;
    }
    for (let end of graph[v]) {
      if (check[end] === 1) continue;
      check[end] = 1;
      path.push(end);
      DFS(end);
      path.pop();
      check[end] = 0;
    }
  };
  check[1] = 1;
  DFS(1);
  console.log(result);
});
