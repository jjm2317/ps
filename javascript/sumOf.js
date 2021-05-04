const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => {
  const n = +input[0];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    const target = n / i;
    if (Number.isInteger(target)) {
      if (i > target) break;
      if (i === target) sum += i;
      else sum += i + target;
    }
  }
  console.log(sum);
});
