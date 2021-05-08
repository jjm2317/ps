/*
명령어 4개 
"U X" : 현재 행에서 위로 x칸
"D X" : 현재 행에서 아래로 x칸
"C" : 현재 선택한 행 삭제, 바로 아래 행 선택, 마지막인 경우 윗행
"Z" : 가장 최근에 삭제된 행 복구, 현재 선택한 행 바뀌지 않음
*/

function solution(n, k, cmd) {
  let answer = [];
  const arr = [];
  for (let i = 0; i < n; i++) {
    answer.push("X");
    arr.push(i);
  }
  const deleteStack = [];

  let x = k;
  const execCmd = (cmd) => {
    switch (cmd[0]) {
      case "U":
        x -= +cmd.split(" ")[1];
        break;
      case "D":
        x += +cmd.split(" ")[1];
        break;
      case "C":
        deleteStack.push([arr.splice(x, 1)[0], x]);
        if (x === arr.length) x--;

        break;
      case "Z":
        const item = deleteStack.pop();
        if (item[1] > arr.length) {
          arr.push(item[0]);
        } else {
          arr.splice(item[1], 0, item[0]);
          if (x >= item[1]) x++;
        }
        break;
      default:
    }
  };

  for (let c of cmd) {
    // console.log(c, x, arr);
    execCmd(c);
    // console.log(c, x, arr, deleteStack);
  }
  // console.log(arr);
  for (let idx of arr) {
    answer[idx] = "O";
  }
  return answer.join("");
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
