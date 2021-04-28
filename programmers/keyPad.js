let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
function solution(numbers, hand) {
  var answer = "";
  leftPos = [3, 0];
  rightPos = [3, 2];
  const getDistance = (pad, pos) => {
    return Math.abs(pad[0] - pos[0]) + Math.abs(pad[1] - pos[1]);
  };
  for (let num of numbers) {
    switch (num) {
      case 1:
        leftPos = [0, 0];
        answer += "L";
        break;
      case 4:
        leftPos = [1, 0];
        answer += "L";
        break;
      case 7:
        leftPos = [2, 0];
        answer += "L";
        break;
      case 3:
        rightPos = [0, 2];
        answer += "R";
        break;
      case 6:
        rightPos = [1, 2];
        answer += "R";
        break;
      case 9:
        rightPos = [2, 2];
        answer += "R";
        break;
      case 2:
        if (getDistance([0, 1], leftPos) > getDistance([0, 1], rightPos)) {
          rightPos = [0, 1];
          answer += "R";
          break;
        } else if (
          getDistance([0, 1], leftPos) < getDistance([0, 1], rightPos)
        ) {
          leftPos = [0, 1];
          answer += "L";
          break;
        } else {
          if (hand === "right") {
            rightPos = [0, 1];
          } else {
            leftPos = [0, 1];
          }
          break;
        }
      case 5:
        if (getDistance([1, 1], leftPos) > getDistance([1, 1], rightPos)) {
          rightPos = [1, 1];
          answer += "R";
          break;
        } else if (
          getDistance([1, 1], leftPos) < getDistance([1, 1], rightPos)
        ) {
          leftPos = [1, 1];
          answer += "L";
          break;
        } else {
          if (hand === "right") {
            rightPos = [1, 1];
          } else {
            leftPos = [1, 1];
          }
        }
      case 8:
        if (getDistance([2, 1], leftPos) > getDistance([2, 1], rightPos)) {
          rightPos = [2, 1];
          answer += "R";
          break;
        } else if (
          getDistance([2, 1], leftPos) < getDistance([2, 1], rightPos)
        ) {
          leftPos = [2, 1];
          answer += "L";
          break;
        } else {
          if (hand === "right") {
            rightPos = [2, 1];
          } else {
            leftPos = [2, 1];
          }
        }
    }
  }

  return answer;
}

console.log(solution(numbers, hand));
