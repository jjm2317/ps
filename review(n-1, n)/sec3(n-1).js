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
  const [str, target] = input[0].split(" ");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let check = false;
    let dis = 0;
    while (!check) {
      let right = i + dis;
      let left = i - dis;
      if (str[right] === target || str[left] === target) {
        check = true;
        result.push(dis);
        break;
      }
      dis++;
    }
  }
  console.log(result);
});
