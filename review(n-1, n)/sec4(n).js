const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, k] = input[0].split(" ").map((v) => +v);
  const arr = input[1].split(" ").map((v) => +v);
  arr.sort((a, b) => b - a);
  let count = 0;
  let temp = Number.MAX_SAFE_INTEGER;
  let flag = 0;
  for (let i = 0; i < n - 2; i++) {
    if (flag) break;
    for (let j = i + 1; j < n - 1; j++) {
      if (flag) break;
      for (let k = j + 1; k < n; k++) {
        if (flag) break;
        if (temp > arr[i] + arr[j] + arr[k]) {
          temp = arr[i] + arr[j] + arr[k];
          count++;
          if (count === k) {
            flag = 1;
            break;
          }
        }
      }
    }
  }
  console.log(temp);
});
