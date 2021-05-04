const readline = require('readline');

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', line => {
  input.push(line);

  if (input.length === 1) rl.close();
}).on('close', () => {
  const str = input[0];

  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      count++;
      if (str[i] !== str[i + 1]) {
        arr.push(count);
        count = 0;
      }
    } else {
      arr.push(0);
    }
  }
  let n = 5;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < str.length - n + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    sum += n - 1;
    if (max < sum) max = sum;
  }

  console.log(max);
});
