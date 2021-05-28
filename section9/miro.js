/*
미로탐색(DFS)
7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격
자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격
자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
출발 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 도착
위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
▣ 입력설명
7*7 격자판의 정보가 주어집니다.
▣ 출력설명
첫 번째 줄에 경로의 가지수를 출력한다.
▣ 입력예제 1 
0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0
▣ 출력예제 1
8
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 7) rl.close();
}).on("close", () => {
  const arr = input.map((v) => v.split(" ").map((v) => +v));

  /*
  1. for문으로 DFS 돌아야됨
  2. check 배열 필요 이차원 배열 arr로 대체 가능 -> DFS 돌기 전에 check
  3. dx dy로 이동할 좌표 정리
  4. DFS 의 인수로 x, y 좌표 
  5. DFS 의 다음 인수로 x + dx, y + dy
  6. x + dx, y + dy 가 음수면 continue;
  7. x + dx, y + dy 가 1
  8. 탈출조건: 인수로 받은 x, y좌표가 종점과 같을 때
  */
  let answer = 0;

  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) {
      answer++;
      return;
    }
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < 7 && ny < 7 && arr[nx][ny] === 0) {
        arr[nx][ny] = 1;
        DFS(nx, ny);
        arr[nx][ny] = 0;
      }
    }
  };
  arr[0][0] = 1;
  DFS(0, 0);
  console.log(answer);
});
