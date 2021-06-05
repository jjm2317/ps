/*
1. two dots
2. 두개이상의 점을 연결하여 연결된 점 없앰
3. 같은 색깔의 점만 연결 가능
4. 점들을 가장 길게 연결 할 수 있는 경우의 수
5. 연결된 점의 개수를 return;


1. count 가
*/

function solution(board) {
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let max = Number.MIN_SAFE_INTEGER;
  const DFS = (x, y, num, count) => {
    max = Math.max(count, max);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx > 3 || ny > 3 || board[nx][ny] !== num)
        continue;
      board[nx][ny] = 0;
      DFS(nx, ny, num, count + 1);
      board[nx][ny] = num;
    }
  };
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let num = board[i][j];
      board[i][j] = 0;
      DFS(i, j, num, 1);
      board[i][j] = num;
    }
  }
  return max === 1 ? -1 : max;
}

console.log(
  solution([
    [3, 2, 3, 2],
    [2, 1, 1, 2],
    [1, 1, 2, 1],
    [4, 1, 1, 1],
  ])
);
