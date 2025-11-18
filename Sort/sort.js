// sorts an arary of numbers
export function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const tempCurrent = arr[i];
    for (let j = 0; j <= i; j++) {
      const tempNext = arr[j + 1];
      if (!(arr[j] <= arr[j + 1])) {
        arr[j] = tempNext;
        arr[j + 1] = tempCurrent;
      }
    }
  }
  return arr;
}
