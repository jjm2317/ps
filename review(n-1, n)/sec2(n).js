const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = +input[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let isPeak = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (arr[nx][ny] >= arr[i][j]) {
          isPeak = false;
          break;
        }
      }
      isPeak && result++;
    }
  }
  console.log(result);
});
