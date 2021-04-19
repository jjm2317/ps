/*연필 개수
연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
▣ 출력설명
첫 번째 줄에 필요한 다스 수를 출력합니다.
▣ 입력예제 1 
25
▣ 출력예제 1
3
▣ 입력예제 2 
178
▣ 출력예제 2
15 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", (line) => {
  input.push(line);
  rl.close();
}).on("close", () => console.log(Math.floor(+input[0] / 12) + 1));
