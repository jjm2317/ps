/*
송아지 찾기(BFS : 상태트리탐색)
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 현수의 위치와 송아
지의 위치가 수직선상의 좌표 점으로 주어지면 현수는 현재 위치에서 송아지의 위치까지 다음
과 같은 방법으로 이동한다. 송아지는 움직이지 않고 제자리에 있다. 
현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 
있다. 최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성
하세요.
▣ 입력설명
첫 번째 줄에 현수의 위치 S와 송아지의 위치 E가 주어진다. 직선의 좌표 점은 1부터 10,000
까지이다.
▣ 출력설명
점프의 최소횟수를 구한다. 답은 1이상입니다.
▣ 입력예제 1 
5 14
▣ 출력예제 1
3
▣ 입력예제 2 
8 3
▣ 출력예제 2
5
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
  const [s, e] = input[0].split(" ").map((v) => +v);
  // /*
  // 1. 모든 경로의 수가 아닌 최소 비용의 거리 -> BFS
  // 2. queue 에 내 위치 넣고 시작
  // 3. queue 를 shift 하고
  // 4. 레벨을 어떻게 읽지.... -> 배열의 두번째요소에 레벨을 기억?하면 될듯..?
  // */
  // let result = 0;
  // const check =
  // const queue = [[s, 0]];
  // while (queue.length) {
  //   let [v, level] = queue.shift();
  //   if (v === e) {
  //     result = level;
  //     break;
  //   }
  //   for (let nv of [v + 1, v - 1, v + 5]) {
  //     queue.push([nv, level + 1]);
  //   }
  // }
  // console.log(result);
  // /*
  // 놓친것 : 시간 복잡도 고려 -> check 배열 만들어서 이미 돌았던 것 은 push 하면 안댐
  // */

  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  let answer = 0;
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  let flag = 0;
  while (queue.length && !flag) {
    console.log(queue);
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 1]) {
      if (nx === e) {
        answer = dis[x] + 1;
        flag = 1;
        break;
      }
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  console.log(answer);
});
