/*
1. p 가 완성되면 그다음거부터 하면됨
2. for loop으로 돔
3. 현재 idx를 기억
4. s 의 현재값이 p의 idx 값과 같다면 통과 후 idx 값 증가 
5. 다르면 answer 증가
6. plen 과
*/

function solution(p, s) {
  let delCount = 0;
  let pCount = 0;
  let temp = 0;
  let pLen = p.length;

  for (num of s) {
    if (num === p[temp]) {
      if (temp === pLen - 1) {
        pCount++;
        temp = 0;
      } else {
        temp++;
      }
    } else {
      delCount++;
    }
  }
  delCount += temp;
  return pCount ? delCount : -1;
}

console.log(solution("101", "10100010101101100"));
