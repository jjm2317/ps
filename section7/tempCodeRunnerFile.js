= m) {
    if (arr[middle] > m) {
      low = middle + 1;
      middle = parseInt((low + high) / 2);
    } else {
      high = middle - 1;
      middle = parseInt((low + high) / 2);
    }
    console.log(low, high, middle);
  }