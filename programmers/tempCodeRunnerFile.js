let gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];

function solution(gems) {
  var answer = [];
  let result = [];
  let count = new Set(gems).size;
  let set = new Set();
  let lp = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let rp = 0; rp < gems.length; ) {
    if (lp === rp) {
      set.add(gems[rp]);
      if (set.size === count) {
        result.push([lp + 1, rp + 1]);
        return;
      } else {
        rp++;
      }
    } else {
      set.add(gems[rp]);
      if (set.size === count) {
        if (min > rp - lp) {
          answer = [lp + 1, rp + 1];
          min = rp - lp;
        }
        lp++;
        rp = lp;
        set.clear();
        continue;
      } else {
        if (gems[lp] === gems[rp]) {
          lp++;
          rp = lp;
          set.clear();
          continue;
        } else {
          rp++;
        }
      }
    }
  }
  answer = result.filter(
    (item, i, arr) =>
      Math.abs(item[0] - item[1]) ===
      Math.min(...arr.map((v) => Math.abs(v[0] - v[1])))
  )[0];
  return answer;
}

console.log(solution(gems));
