const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [n, m] = input[0].split(" ").map((v) => +v);
  const arr = input[1].split(" ").map((v) => +v);
  let ch = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: m }, () => 0);
  const answer = [];
  const DFS = (L) => {
    if (L === m) {
      answer.push(temp.slice());
      return;
    }
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        temp[L] = arr[i];
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  };
  DFS(0);

  console.log(answer);
});
