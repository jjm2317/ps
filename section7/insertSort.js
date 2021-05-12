/*
삽입 정렬
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 
있습니다. 
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
▣ 입력예제 1 
6
11 7 5 6 10 9
▣ 출력예제 1
5 6 7 9 10 11
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

  for (let i = 1; i < arr.length; i++) {
    let temp = i;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        temp = j;
        break;
      }
    }
    for (let k = i; k >= temp + 1; k--) {
      [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
    }
  }

  console.log(arr);
});
