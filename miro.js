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
  let colNum = +input[0].split(" ")[1];
  let rowNum = +input[0].split(" ")[0];
  const arr = input
    .filter((_, i) => i > 0)
    .map((rowStr) => rowStr.split("").map((v) => +v));
  let result = 0;
  const search = (pos, count, history) => {
    //행,열 초과시 return
    // console.log(colNum, rowNum);
    if (pos[0] > colNum - 1 || pos[1] > rowNum - 1) {
      return;
    }
    if (pos[0] === colNum - 1 && pos[1] === rowNum - 1) {
      if (result > count) result = count;
      return;
    }

    //0밟으면 return
    if (arr[pos[1]][pos[0]] === 0) return;

    const moveList = [
      [pos[0] + 1, pos[1]], // right
      [pos[0], pos[1] + 1], // down
      [pos[0] - 1, pos[1]], //up
      [pos[0], pos[1] - 1], //left
    ];

    //되돌아가기 x
    switch (history) {
      case "right":
        moveList
          .filter((_, i) => i !== 3)
          .forEach((pos, i) =>
            search(pos, count + 1, i === 0 ? "right" : i === 1 ? "down" : "up")
          );
      case "down":
        moveList
          .filter((_, i) => i !== 2)
          .forEach((pos, i) =>
            search(
              pos,
              count + 1,
              i === 0 ? "right" : i === 1 ? "down" : "left"
            )
          );
      case "up":
        moveList
          .filter((_, i) => i !== 1)
          .forEach((pos, i) =>
            search(pos, count + 1, i === 0 ? "right" : i === 1 ? "up" : "left")
          );
      case "left":
        moveList
          .filter((_, i) => i !== 0)
          .forEach((pos, i) =>
            search(pos, count + 1, i === 0 ? "down" : i === 1 ? "up" : "left")
          );
    }
  };
  if (arr[0][1] === "0") search([0, 0], 0, "right");
  else if (arr[1][0] === "0") search([0, 0], 0, "down");
  else {
    search([0, 0], 0, "right");
    search([0, 0], 0, "down");
  }
  console.log(result);
  process.exit();
});
