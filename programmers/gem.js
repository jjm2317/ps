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
        answer = [lp + 1, rp + 1];
        break;
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
        rp = lp + 1;
        set.clear();
        set.add(gems[lp]);
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
  return answer;
}

console.log(solution(gems));
