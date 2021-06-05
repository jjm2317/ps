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
  const arr = input.filter((_, i) => i > 0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    i === arr.indexOf(arr[i]) && result.push(arr[i]);
  }

  console.log(result);
});
