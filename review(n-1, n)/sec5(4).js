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
  const arr = input[1].split(" ").map((v) => +v);
  const test = [];
  let sum = 0;
  let lt = 0;
  let answer = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  console.log(answer);
});
