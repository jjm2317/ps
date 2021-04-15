const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);

  rl.close();
}).on("close", function () {
  const n = +input[0];
  let start = new Date().getTime();
  const factorial = (n) => (n === 1 || n === 0 ? 1 : n * factorial(n - 1));
  //   const factorial = (n) => {
  //     let result = 1;
  //     for (let i = 1; i <= n; i++) {
  //       result = result * i;
  //     }
  //     return result;
  //   };
  console.log(factorial(n));

  let elapsed = new Date().getTime() - start;
  console.log("소요된 시간: " + elapsed);
});

/*
- iteration
10000
Infinity
소요된 시간: 2
50000
Infinity
소요된 시간: 4
10000000
Infinity
소요된 시간: 14

- recursion
300
Infinity
소요된 시간: 2

5000
Infinity
소요된 시간: 4

10000
Infinity
소요된 시간: 6

12000
readline.js:1143
            throw err;
            ^

RangeError: Maximum call stack size exceeded
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:21)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
    at factorial (c:\Users\Jiman\Documents\dev\ps\factorial.js:16:58)
*/
