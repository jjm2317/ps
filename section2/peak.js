/*
봉우리
지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자
판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 
있는 지 알아내는 프로그램을 작성하세요. 
격자의 가장자리는 0으로 초기화 되었다고 가정한다.
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
0 0 0 0 0 0 0
0 5 3 7 2 3 0
0 3 7 1 6 1 0
0 7 2 5 3 4 0
0 4 3 6 4 1 0
0 8 7 3 5 2 0
0 0 0 0 0 0 0
▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다. 
▣ 출력설명
봉우리의 개수를 출력하세요.
▣ 입력예제 1 
5
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2
▣ 출력예제 1
10
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);

  if (input.length - 1 === +input[0]) rl.close();
}).on("close", () => {
  // const n = +input[0];
  // const arr = input.filter((_, i) => i > 0).map(v => v.split(' ').map(v => +v));
  // const dx = [-1, 0, 1, 0];
  // const dy = [0, 1, 0, -1];
  // let result = 0;
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     let isPeak = true;
  //     for (let k = 0; k < 4; k++) {
  //       let nx = i + dx[k];
  //       let ny = j + dy[k];
  //       if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[i][j] <= arr[nx][ny]) {
  //         isPeak = false;
  //         break;
  //       }
  //     }
  //     isPeak && result++;
  //   }
  // }
  // console.log(result);
});
