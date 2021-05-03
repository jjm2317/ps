/*
문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
오. 단 반복횟수가 1인 경우 생략합니다.
▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 줄에 압축된 문자열을 출력한다.
▣ 입력예제 1 
KKHSSSSSSSE
▣ 출력예제 1
K2HS7E
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);

  rl.close();
}).on('close', () => {
  // const str = input[0];
  // let count = 0;
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   count++;
  //   if (str[i] !== str[i + 1]) {
  //     result += str[i];
  //     if (count !== 1) {
  //       result += count;
  //     }
  //     count = 0;
  //   }
  // }

  // console.log(result);
  const str = input[0];

  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : '');
      count = 1;
    }
  }
  console.log(result);
});
