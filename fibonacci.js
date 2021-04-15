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
  const n = +input[0];

  let array = Array.from({ length: n + 1 });
  for (let i = 0; i <= n; i++) {
    array[i] = -1;
  }
  array[1] = 0;
  array[2] = 1;
  const fibonacci = (n) => {
    if (n === 1) return 0;

    if (n === 2) return 1;

    let left = array[n - 2] == -1 ? fibonacci(n - 2) : array[n - 2];
    let right = array[n - 1] == -1 ? fibonacci(n - 1) : array[n - 1];

    array[n] = left + right;
    return left + right;
  };
  //   const fibonacci = (n) => {
  //     let prev = 0;
  //     let store = 0;
  //     let curr = 0;
  //     for (let i = 0; i < n - 1; i++) {
  //       if (i === 0) prev = 0;
  //       if (i === 1) curr = 1;
  //       store = curr;
  //       curr = prev + curr;
  //       prev = store;
  //     }
  //     return curr;
  //   };

  //   const fibonacci = (n) => {
  //     let array = Array.from({length: n+1});
  //     array[1] = 0;
  //     array[2] = 1;
  //     for (let i = 3; i <= n; i++) {
  //       array[i] = array[i-1] + array[i-2];
  //     }
  //     return array[n];
  //   };

  console.log(fibonacci(n));
});
