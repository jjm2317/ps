function solution(lottos, win_nums) {
  let temp = 0;
  let zero = 0;
  for (const num of lottos) {
    if (num === 0) zero++;
    else {
      win_nums.indexOf(num) !== -1 && temp++;
    }
  }
  let max = 6 - (temp + zero) + 1;
  let min = 6 - temp + 1;
  return [max > 6 ? 6 : max, min > 6 ? 6 : min];
}
