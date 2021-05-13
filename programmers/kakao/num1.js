function solution(s) {
  // let answer = 0;
  const map = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);
  let result = "";
  let target = "";
  for (let c of s) {
    if (c.match(/[0-9]/)) {
      result += c;
    } else {
      target += c;
      if (map.has(target)) {
        result += map.get(target);
        target = "";
      }
    }
  }
  // console.log("dfff".match(/[0-9]/));
  return +result;
}
solution();

("42three426five75zero");
