/*
섬나라 아일랜드(DFS 활용)
N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌
우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지 
구하는 프로그램을 작성하세요.
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0
만약 위와 같다면 
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.
두 번째 줄부터 격자판 정보가 주어진다.
▣ 출력설명
첫 번째 줄에 섬의 개수를 출력한다.
▣ 입력예제 1 
7
1 1 0 0 0 1 0
0 1 1 0 1 1 0
0 1 0 0 0 0 0
0 0 0 1 0 1 1
1 1 0 1 1 0 0
1 0 0 0 1 0 0
1 0 1 0 1 0 0
▣ 출력예제 1
5
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  input.length === +input[0] + 1 && rl.close();
}).on("close", () => {
  const n = +input[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));
  /*
  1. 체크 배열을 만들어서 본 배열 에서 dfs를 돌릴때 체크 
  2. 본배열이 1이고 체크 배열이 0일때 dfs 실행
  3. dfs가 끝나면 result 증가
  */
  const check = Array.from(Array(n), () => Array(n).fill(0));
  let result = 0;
  const dx = [0, 1, 0, -1, 1, -1, 1, -1];
  const dy = [1, 0, -1, 0, 1, -1, -1, 1];

  const DFS = (x, y) => {
    if (0) {
    }
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= n ||
        ny >= n ||
        arr[nx][ny] !== 1 ||
        check[nx][ny] === 1
      )
        continue;
      check[nx][ny] = 1;
      DFS(nx, ny);
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1 && check[i][j] === 0) {
        check[i][j] = 1;
        DFS(i, j);
        result++;
      }
    }
  }
  console.log(result, check);
});
