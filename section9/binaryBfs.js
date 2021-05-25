/*
이진트리 넓이우선탐색(BFS)
아래 그림과 같은 이진트리를 넓이우선탐색해 보세요. 
1
2 3
4 5 6 7
넓이 우선 탐색 : 1 2 3 4 5 6 7
*/
/*
출발 지점에서 종점까지 갔을 때 최단거리를 구하는데 보통 사용된다. 
레벨 하나씩 검증
 */
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
  /*
  1. queue가 필요
  2. 1 부터 7까지 탐색
  3. while 문도 써야댐...
  4. array shift
  5. while 문 돌 때마다 레벨 증가 변수로 선언 하자
  */

  let answer = "";
  const queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  console.log(answer);
});
