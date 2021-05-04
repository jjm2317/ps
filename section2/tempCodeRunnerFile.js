y.from({ length: n + 2 }, () => 0), ...arr, Array.from({ length: n + 2 }, () => 0)];

  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (
  //       arr[i][j] > arr[i - 1][j] &&
  //       arr[i][j] > arr[i][j - 1] &&
  //       arr[i][j] > arr[i][j + 1] &&
  //       arr[i][j] > arr[i + 1][j]
  //     ) {
  //       result++;
  //     }
  //   }
  // }