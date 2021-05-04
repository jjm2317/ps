/*
자릿수의 합
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.
▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
▣ 입력예제 1 
7
128 460 603 40 521 137 123
▣ 출력예제 1
137
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
  // const arr = input[1].split(" ");
  // let max = Number.MIN_SAFE_INTEGER;
  // let result;
  // for (let num of arr) {
  //   let sum = 0;
  //   for (let i = 0; i < num.length; i++) {
  //     sum += +num[i];
  //   }
  //   if (max <= sum) {
  //     if (max === sum) {
  //       result = result < num ? num : result;
  //     } else {
  //       max = sum;

  //       result = num;
  //     }
  //   }
  // }

  // console.log(result);

  const n = +input[0];
  const arr = input[1].split(' ').map(v => +v);
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;

  for (let num of arr) {
    let target = num;
    let sum = 0;
    while (target) {
      sum += target % 10;
      target = parseInt(target / 10);
    }
    if (sum > max) {
      max = sum;
      result = num;
    }

    if (sum === max) {
      result = num > result ? num : result;
    }
  }
  console.log(result);

  // let n = +input[0];
  // const arr = input[1].split(' ').map(v => +v);

  // let result = 0;
  // for (let i = 0; i < n; i++) {
  //   result *= 10;
  //   result += arr[i];
  // }
  // let result = 0;
  // while (n) {
  //   result *= 10;
  //   result += n % 10;
  //   n = parseInt(n / 10);
  // }
  // console.log(result);
});
