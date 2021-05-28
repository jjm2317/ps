/*
두 배열 합치기
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.
▣ 입력예제 1 
3
1 3 5
5
2 3 6 7 9
▣ 출력예제 1
1 2 3 3 5 6 7 9
*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 4) rl.close();
}).on("close", () => {
  const n = +input[0];
  const arr1 = input[1].split(" ").map((v) => +v);
  const m = +input[2];
  const arr2 = input[3].split(" ").map((v) => +v);

  /*
  1. p1, p2 두개의 포인터
  2. while문 조건 p1 < n || p2 < m
  */
  let p1 = 0;
  let p2 = 0;
  const newArr = [];
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      newArr.push(arr1[p1]);
      p1++;
    } else {
      newArr.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < n) {
    newArr.push(arr[p1]);
    p1++;
  }
  while (p2 < m) {
    newArr.push(arr[p2]);
    p2++;
  }

  console.log(newArr);
});
