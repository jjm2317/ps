/*
회문 문자열
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다. 
▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
▣ 입력예제 1 
gooG
▣ 출력예제 1
YES
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
  // console.log(
  //   str.toLowerCase() === Array.from(str).reverse().join("").toLowerCase()
  //     ? "YES"
  //     : "NO"
  // );

  const str = input[0].toLowerCase();
  // let result = 'YES';
  // for (let i = 0; i < Math.round(str.length / 2) - 1; i++) {
  //   str[i] !== str[str.length - 1 - i] && (result = 'NO');
  // }

  console.log(Array.from(str).reverse().join('') === str ? 'YES' : 'NO');
});
