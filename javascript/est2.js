/*
1. 고객 줄 -> 큐 ?
2. 상담창구는 한번에 한명씩
3. 원하는 시간만큼
4. 줄서있는 고객 수 + 1이 기대치 보다 크면 줄 안섬
5. 같으면 상담 받음
6. 현재 상담중인데,끝나자마자 새로운 고객이 도착하면 끝난 고객을 제외하고 세자
7. 입력 : 도착, 상담, 기대치
8. 출력 : 상담시각 배열
*/
/*
1. 상담 종료 시각 
2. dp 문제 같음
3. 
*/

function solution(customers) {
  const dy = Array.from({ length: customers.length }, () => 0);
  dy[0] = customers[0][0] + customers[0][1];
  const len = customers.length;
  for (let i = 1; i < len; i++) {
    const arrive = customers[i][0];
    const meeting = customers[i][1];
    const wish = customers[i][2];

    let waiting = 0;
    let lastTarget = i - 1;
    let resolveLast = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (dy[j] === -1) {
        !resolveLast && lastTarget--;
        continue;
      }

      if (dy[j] <= arrive) break;
      else {
        waiting++;
        resolveLast = 1;
      }
    }
    if (wish < waiting) {
      dy[i] = -1;
    } else {
      dy[i] = waiting > 0 ? dy[lastTarget] + meeting : arrive + meeting;
    }
  }

  return dy;
}
console.log(
  solution([
    [3, 5, 2],
    [6, 4, 1],
    [7, 5, 1],
    [8, 4, 1],
    [10, 3, 3],
    [11, 2, 3],
    [12, 1, 3],
    [16, 2, 2],
    [100, 1, 1],
  ])
);
