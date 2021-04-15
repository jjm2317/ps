const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (line) {
  input.push(line);
  rl.close();
}).on("close", function () {
  const n = +input[0];
  let result = "";
  const recursion = (num) => {
    result = num + " " + result;
    if (num === 1) {
      return result;
    } else {
      return recursion(num - 1);
    }
    return;
  };
  console.log(recursion(n));
  process.exit();
});
