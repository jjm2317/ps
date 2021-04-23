// 문제 링크 : https://www.acmicpc.net/problem/15686
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (line) {
  input.push(line);

  if (input.length - 1 === +input[0].split(" ")[0]) rl.close();
}).on("close", function () {
  const n = +input[0].split(" ")[0];
  const storeNum = +input[0].split(" ")[1];
  const grid = input
    .filter((_, i) => i > 0)
    .map((item) => item.split(" ").map((v) => +v));
  const houseArr = [];
  const storeArr = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      switch (grid[i][j]) {
        case 1:
          houseArr.push([i, j]);
          break;
        case 2:
          storeArr.push([i, j]);
          break;
        default:
      }
    }
  }

  const distanceMap = houseArr.map((house) =>
    storeArr.map(
      (store) => Math.abs(house[0] - store[0]) + Math.abs(house[1] - store[1])
    )
  );

  const getDistanceByIndex = (indexArr) => {
    return distanceMap
      .map((item) => item.filter((_, i) => indexArr.includes(i)))
      .map((item) => item.reduce((pre, cur) => (pre > cur ? cur : pre)))
      .reduce((pre, cur) => pre + cur);
  };
  const resultArr = [];
  const iter = (start, indexArr) => {
    if (indexArr.length === storeNum) {
      resultArr.push(getDistanceByIndex(indexArr));
      return;
    }
    for (let i = start + 1; i < storeNum; i++) {
      indexArr.push(i);
      iter(i, indexArr);
    }
  };
  for (let i = 0; i < storeArr.length - storeNum + 1; i++) {
    iter(i, [i]);
  }
  console.log(Math.min(...resultArr));

  process.exit();
});
