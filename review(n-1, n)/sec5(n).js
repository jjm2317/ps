const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const s = input[0];
  const t = input[1];
  let result = 0;
  const compareMap = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (const [key, value] of map1) {
      if (map2.get(key) !== value) return false;
    }
    return true;
  };
  const tMap = new Map();
  for (let key of t) {
    if (tMap.has(key)) tMap.set(key, tMap.get(key) + 1);
    else tMap.set(key, 1);
  }
  const temp = new Map();
  for (let i = 0; i < t.length - 1; i++) {
    if (temp.has(t[i])) temp.set(t[i], temp.get(t[i]));
    else temp.set(t[i], 1);
  }

  let lt = 0;
  console.log(temp, tMap);
  for (let i = t.length - 1; i < s.length; i++) {
    if (temp.has(s[i])) temp.set(s[i], temp.get(s[i]) + 1);
    else temp.set(s[i], 1);
    console.log(temp, tMap);
    if (compareMap(temp, tMap)) result++;

    temp.set(s[lt], temp.get(s[lt]) - 1);
    if (temp.get(s[lt]) === 0) temp.delete(s[lt]);
    lt++;
  }

  console.log(result);
});
