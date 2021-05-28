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

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) rl.close();
}).on("close", () => {
  const str = input[0];
  const target = input[1];
  const map = new Map();
  const targetMap = new Map();
  let count = 0;
  const compare = (map1, map2) => {
    if (map1.length !== map2.length) return false;
    for (let [key, value] of map1) {
      if (!map2.has(key)) return false;
      if (map2.get(key) !== value) return false;
    }
    return true;
  };
  for (let i = 0; i < target.length; i++) {
    targetMap.has(target[i])
      ? targetMap.set(target[i], targetMapp.get(target[i]) + 1)
      : targetMap.set(target[i], 1);
  }
  for (let i = 0; i < target.length - 1; i++) {
    if (map.has(str[i])) map.set(str[i], map.get(str[i]) + 1);
    else map.set(str[i], 1);
  }
  let lt = 0;
  for (let rt = target.length - 1; rt < str.length; rt++) {
    if (map.has(str[rt])) map.set(str[rt], map.get(str[rt]) + 1);
    else map.set(str[rt], 1);
    console.log(map);

    if (compare(map, targetMap)) count++;

    map.set(str[lt], map.get(str[lt]) - 1);
    if (map.get(str[lt]) === 0) map.delete(str[lt]);
    lt++;
  }
  console.log(count);
});
