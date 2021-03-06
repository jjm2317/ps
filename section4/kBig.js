/*
K번째 큰 수
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 
여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값
은 22입니다.
▣ 입력설명
첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력
된다.
▣ 출력설명
첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.
▣ 입력예제 1 
10 3
13 15 34 23 45 65 33 11 26 42
▣ 출력예제 1
143
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
  // const [n, k] = input[0].split(" ").map((v) => +v);
  // const arr = input[1].split(" ").map((v) => +v);
  // let count = 1;
  // arr.sort((a, b) => b - a);
  // let cur = arr[0] + arr[1] + arr[2];
  // let result = 0;
  // let newArr = [];
  // for (let i = 0; i < n - 2; i++) {
  //   for (let j = i + 1; j < n - 1; j++) {
  //     for (let x = j + 1; x < n; x++) {
  //       newArr.push(arr[i] + arr[j] + arr[x]);
  //     }
  //   }
  // }

  // newArr.sort((a, b) => b - a);
  // for (let num of newArr) {
  //   if (cur !== num && cur > num) count++;
  //   if (count === k) {
  //     result = num;
  //     break;
  //   }
  // }

  // console.log(result);

  const [n, k] = input[0].split(' ').map(v => +v);

  const arr = input[1].split(' ').map(v => +v);
  let newArr = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = 0; k < n; k++) {
        newArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  newArr.sort((a, b) => b - a);

  let count = 1;
  let temp = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] > temp) {
      temp = newArr[i];
      count++;
    }

    if (count === k) {
      break;
    }
  }
  console.log(temp);
});
