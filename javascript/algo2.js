/*
1. n개의 스티커가 원형으로 연결
2. 몇장의 스티커를 뜯어내어 뜯어낸 애의 합이 최대
3. 스티커 하나를 뜯어내면 양쪽으로 인접해있는 스티커 못씀
4. 14 뜯으면 
*/

function solution(sticker) {
  const len = sticker.length;
  let max = Number.MIN_SAFE_INTEGER;

  //배열 첫번째를 뽑을 때
  const case1 = Array.from({ length: len }, () => 0);
  const case2 = Array.from({ length: len + 1 }, () => 0);
  const case3 = Array.from({ length: len + 2 }, () => 0);

  case1[0] = sticker[0];
  case2[1] = sticker[1];
  case3[2] = sticker[2];

  for (let i = 2; i < len - 1; i++) {
    case1[i] = Math.max(case1[i - 2] + sticker[i], case1[i - 1]);
  }
  for (let i = 3; i < len; i++) {
    let idx = i >= len ? i - len : i;
    case2[i] = Math.max(case2[i - 2] + sticker[idx], case2[i - 1]);
  }

  console.log(case1, case2, case3);
  return Math.max(...case1, ...case2);
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
