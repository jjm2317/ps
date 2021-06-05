 = (idx, sum) => {
  //   if (idx >= length) {
  //     max = Math.max(max, sum);
  //     return;
  //   }
  //   sum += sticker[idx];
  //   for (let i = 2; i <= 3; i++) {
  //     let nextIdx = idx + i;
  //     DFS2(nextIdx, sum);
  //   }
  // };
  // //배열 3번째를 뽑을 때
  // const DFS3 = (idx, sum) => {
  //   if (idx >= length + 1) {
  //     max = Math.max(max, sum);
  //     return;
  //   }
  //   sum += sticker[idx === length ? 0 : idx];
  //   for (let i = 2; i <= 3; i++) {
  //     let nextIdx = idx + i;
  //     DFS3(nextIdx, sum);
  //   }
  // };

  // DFS1(0, 0);
  // DFS2(1, 0);
  // DFS3(2, 0);
  // ret