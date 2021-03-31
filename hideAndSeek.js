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
  const start = +input[0].split(" ")[0];
  const end = +input[0].split(" ")[1];
  const distance = end - start;
  let result = [];
  const getResult = (depth, target, end, mode) => {
    if (target > end * 2) return;
    if (depth > distance) return;
    if (Math.min(...result) <= depth) return;

    // if (result.length > 100) return;
    if (depth === 0) {
      if (target === end) {
        result.push(depth);
        // console.log(result);
        return;
      }
      getResult(depth + 1, target * 2, end, 1);
      getResult(depth + 1, target + 1, end, 2);
      getResult(depth + 1, target - 1, end, 3);
    }
    if (target === end) {
      result.push(depth);
      //   console.log(result);
    }
    // console.log(depth, target, end);
    switch (mode) {
      case 1:
        getResult(depth + 1, target * 2, end, 1);

        getResult(depth + 1, target + 1, end, 2);

        getResult(depth + 1, target - 1, end, 3);
      case 2:
        getResult(depth + 1, target * 2, end, 1);

        getResult(depth + 1, target + 1, end, 2);
      case 3:
        getResult(depth + 1, target * 2, end, 1);
        getResult(depth + 1, target - 1, end, 3);
    }
  };
  getResult(0, start, end);
  console.log(Math.min(...result));

  process.exit();
});
