function solution(places) {
  const answer = [1, 1, 1, 1, 1];

  const getPPosList = (place) => {
    let pArr = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") pArr.push([i, j]);
      }
    }
    return pArr;
  };
  const testPartition = (pos1, pos2, place) => {
    // let result = true;
    // console.log(pos1, pos2, place);
    if (Math.abs(pos1[0] - pos2[0]) === 2) {
      if (pos1[0] < pos2[0]) {
        return place[pos1[0] + 1][pos1[1]] === "X" ? true : false;
      }
      return place[pos1[0] - 1][pos1[1]] === "X" ? true : false;
    } else if (Math.abs(pos1[1] - pos2[1]) === 2) {
      if (pos1[1] < pos2[1]) {
        return place[pos1[0]][pos1[1] + 1] === "X" ? true : false;
      }
      return place[pos1[0]][pos1[1] - 1] === "X" ? true : false;
    } else {
      let testPos1 = [];
      let testPos2 = [];

      testPos1[0] = pos1[0] < pos2[0] ? pos1[0] + 1 : pos1[0] - 1;
      testPos1[1] = pos1[1];
      testPos2[0] = pos1[0];
      testPos2[1] = pos1[1] < pos2[1] ? pos1[1] + 1 : pos1[1] - 1;
      // console.log(place, testPos1, testPos2, place[(testPos1[0], testPos1[1])]);
      if (
        place[testPos1[0]][testPos1[1]] === "X" &&
        place[testPos2[0]][testPos2[1]] === "X"
      ) {
        return true;
      }
      return false;
    }
  };
  const getMdist = (pos1, pos2) => {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  };
  for (let i = 0; i < 5; i++) {
    const pPosList = getPPosList(places[i]);
    // console.log(pPosList);
    //Mdist 가 1인게 있으면 false
    for (let j = 0; j < pPosList.length - 1; j++) {
      for (let k = j + 1; k < pPosList.length; k++) {
        if (getMdist(pPosList[j], pPosList[k]) === 1) {
          answer[i] = 0;
          break;
        } else if (getMdist(pPosList[j], pPosList[k]) === 2) {
          // console.log(
          //   testPartition(pPosList[j], pPosList[k], places[i]),
          //   i,
          //   pPosList[j],
          //   pPosList[k]
          // );
          if (!testPartition(pPosList[j], pPosList[k], places[i])) {
            answer[i] = 0;
            break;
          }
        }
      }
      if (answer[i] === 0) break;
    }
  }
  return answer;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
