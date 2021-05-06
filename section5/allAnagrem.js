/*
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
▣ 입력예제 1 
bacaAacba
abc
▣ 출력예제 1
3
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
  const str = input[0];
  const target = input[1];
  let result = 0;
  let tMap = new Map();
  const isAnswer = map => {
    let result = true;
    for ([key, value] of map) {
      if (value !== 0) return false;
    }
    return true;
  };
  // create target hash
  for (let t of target) {
    if (tMap.has(t)) tMap.set(t, tMap.get(t) + 1);
    else tMap.set(t, 1);
  }
  let lp = 0;
  // 초깃값 검증
  for (let i = 0; i < target.length; i++) {
    if (tMap.has(str[i])) tMap.set(str[i], tMap.get(str[i]) - 1);
  }
  console.log(tMap);
  if (isAnswer(tMap)) result++;

  for (let rp = target.length; rp < str.length; rp++) {
    if (tMap.has(str[rp])) tMap.set(str[rp], tMap.get(str[rp]) + 1);
    if (tMap.has(str[lp])) tMap.set(str[lp], tMap.get(str[lp]) - 1);
    lp++;
    console.log(tMap);
    if (isAnswer(tMap)) result++;
  }

  console.log(result);
});
