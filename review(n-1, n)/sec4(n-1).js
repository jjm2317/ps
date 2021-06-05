const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map((v) => +v);
  const arr = input
    .filter((_, i) => i > 0)
    .map((v) => v.split(" ").map((v) => +v));
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (parseInt(arr[i][0] / 2) + arr[i][1]);
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        count++;
      } else {
        break;
      }
    }
    answer = Math.max(count, answer);
  }
  console.log(answer);
});
