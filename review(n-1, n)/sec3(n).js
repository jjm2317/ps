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
  const str = input[0];

  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }
  console.log(result);
});
