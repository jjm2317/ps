/*
공통원소 구하기
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.
▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.
▣ 입력예제 1 
5
1 3 9 5 2
5
3 2 5 7 8
▣ 출력예제 1
2 3 5
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
  let [n, firstArr, m, secondArr] = input;
  n = +n;
  m = +m;
  firstArr = firstArr.split(" ").map((v) => +v);
  secondArr = secondArr.split(" ").map((v) => +v);

  firstArr.sort((a, b) => a - b);
  secondArr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0, j = 0; i < n && j < m; ) {
    if (firstArr[i] < secondArr[j]) {
      i++;
    } else if (firstArr[i] < secondArr[j]) {
      j++;
    } else {
      result.push(firstArr[i]);
      i++;
      j++;
    }
  }
  console.log(result);
});
