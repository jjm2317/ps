const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);

  rl.close();
}).on("close", () => {
  let sum = 0;
  for (let i = 1; i <= input[0]; i++) {
    sum += i;
  }
  console.log(sum);
});
