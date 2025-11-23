import { isSorted } from "../Sort/issorted.js";

export function shellSort(arr) {
  let n = arr.length;
  let gap = Math.floor(n / 2);
  // iteration counter for Big-O comparison
  let iterations = 0;

  // loop through all different gap sizes
  // exit condition for when gap is reduced to 0 (after 1)
  while (gap > 0) {
    iterations++;
    // loop through the entire array, comparing value at gap and j - gap
    for (let i = gap; i < n; i++) {
      iterations++;
      // save the gap value
      let j = i;
      // save the value at the gap
      let temp = arr[i];
      // swap values if left value is larger
      // arr[j - gap] is the value on the left side of the gap
      while (j >= gap && arr[j - gap] > temp) {
        iterations++;
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return { arr: arr, iterations: iterations, sorted: isSorted(arr) };
}
