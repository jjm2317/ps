/*
Special Sort(구글 인터뷰)
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다. 
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 
변함이 없어야 한다.
▣ 입력설명
첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진
다. 숫자 0은 입력되지 않는다.
▣ 출력설명
정렬된 결과를 출력한다.
▣ 입력예제 1 
8
1 2 3 -3 -2 5 6 -6
▣ 출력예제 1
-3 -2 -6 1 2 3 5 6
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);
  if (input.length === 2) rl.close();
}).on('close', () => {
  const n = +input[0];
  const arr = input[1].split(' ').map(v => +v);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < 0) continue;
      if (arr[j + 1] < 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  console.log(arr);
});
