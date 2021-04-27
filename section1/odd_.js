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
  const numArr = input[0].split(" ").map((v) => +v);

  //배열 고차함수 없이 짜보기
  // let sum = 0;
  // let min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < numArr.length; i++) {
  //   if (numArr[i] % 2) {
  //     sum += numArr[i];
  //     if (numArr[i] < min) min = numArr[i];
  //   }
  // }

  // console.log(sum, min);

  //배열 고차함수 사용
  const { sum, min } = numArr.reduce(
    ({ sum, min }, cur) => {
      if (cur % 2) {
        sum += cur;
        if (cur < min) min = cur;
      }
      return { sum, min };
    },
    { sum: 0, min: Number.MAX_SAFE_INTEGER }
  );

  console.log(sum, min);
});
