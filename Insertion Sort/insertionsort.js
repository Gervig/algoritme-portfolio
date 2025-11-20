import { isSorted } from "../Sort/issorted.js";

export function insertionSort(arr) {
  let iterations = 0;
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      swap(j, j - 1);
      j--;
      iterations++;
    }
  }

  function swap(a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }

  const sorted = isSorted(arr);

  return { array: arr, iterations: iterations, isSorted: sorted };
}
