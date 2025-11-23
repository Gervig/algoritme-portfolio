import { isSorted } from "../Sort/issorted.js";

export function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  let iterations = 0;

  // loop through all different gap sizes
  // exit condition for when gap is reduced to 0 (after 1)
  while (gap > 0) {
    iterations++;
    for (let i = gap; i < n; i++) {
      iterations++;
      let j = i;
      let temp = arr[i];
      // swap values if left value is larger
      while (j >= gap && arr[j - gap] > temp) {
        iterations++;
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return { arr: arr, iterations: iterations, sorted: isSorted(arr) };
}
