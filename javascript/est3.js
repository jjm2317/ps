/*
1. 문제별로 가장 유리했던 언어
2. 응시자가 한명이면 문제별점수가 그사람것만
3. 평균냈을때 문제별로 유리했던 언어 결정해야됨

4. 평균점수가 같다면 응시자가 많은것
5. 응시자도 같다면 알파벳 기준 뒤로 정렬되는 게 유리한거
6.

응시자 수 1 ~ 100000
languages : 사용한 사람 순으로 , 알파벳 대문자 
scores : languages 길이와 같음, 열 길이 1 이상 5이하 

*/

function solution(languages, scores) {
  const result = new Map();
  const len = languages.length;
  const problemsLen = scores[0].length;
  const answer = [];
  //result setting
  for (let i = 0; i < len; i++) {
    if (result.has(languages[i])) {
      result.set(
        languages[i],
        result
          .get(languages[i])
          .map((item, idx) =>
            idx === problemsLen ? item + 1 : item + scores[i][idx]
          )
      );
    } else {
      result.set(
        languages[i],
        [...scores[i], 0].map((item, idx) =>
          idx === problemsLen ? 1 : scores[i][idx]
        )
      );
    }
  }
  //result -> average
  const averageArr = [...result].map(([lang, arr]) => [
    lang,
    arr.map((item, idx, thisArr) =>
      idx === problemsLen ? item : item / thisArr[problemsLen]
    ),
  ]);

  for (let i = 0; i < problemsLen; i++) {
    averageArr.sort((a, b) =>
      a[1][i] !== b[1][i]
        ? b[1][i] - a[1][i]
        : b[1][problemsLen] !== a[1][problemsLen]
        ? b[1][problemsLen] - a[1][problemsLen]
        : a[0] < b[0]
        ? 1
        : -1
    );

    answer.push(averageArr[0][0]);
  }
  return answer;
}

console.log(
  solution(
    ["C", "SWIFT", "JAVA", "SWIFT", "JAVA", "JAVA", "R"],
    [
      [65, 80, 90],
      [46, 100, 70],
      [91, 96, 59],
      [89, 90, 61],
      [0, 94, 75],
      [38, 95, 47],
      [50, 60, 90],
    ]
  )
);
