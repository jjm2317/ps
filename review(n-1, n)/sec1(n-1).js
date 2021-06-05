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
  // const result = [...str].reduce(
  //   (pre, cur, i, arr) => (arr.indexOf(cur) === i ? pre + cur : pre),
  //   ""
  // );
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        if (i === j) result += str[i];
        break;
      }
    }
  }

  console.log(result);
});
