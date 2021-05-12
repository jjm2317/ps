/*
좌표 정렬
N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하
세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
▣ 입력설명
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.
▣ 출력설명
N개의 좌표를 정렬하여 출력하세요.
▣ 입력예제 1 
5
2 7
1 3
1 2
2 5
3 6
▣ 출력예제 1
1 2
1 3
2 5
2 7
3 6
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);

  if (input.length - 1 === +input[0]) rl.close();
}).on('close', () => {
  const n = +input[0];
  const arr = input.filter((_, i) => i > 0).map(v => v.split(' ').map(v => +v));

  arr.sort((a, b) => (a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]));

  console.log(arr);
});
