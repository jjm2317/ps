const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  // rl.close();
}).on("close", () => {
  const n = +input[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));
  let diag1 = 0;
  let diag2 = 0;
  let colSum = 0;
  let rowSum = 0;
  let result = 0;
  for (let i = 0; i < n; i++) {
    rowSum = 0;
    colSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
      if (i === j) diag1 += arr[i][j];
      if (i === n - 1 - j) diag2 += arr[i][j];
    }
    result = Math.max(result, rowSum, colSum);
  }
  result = Math.max(result, diag1, diag2);

  console.log(result);
});
