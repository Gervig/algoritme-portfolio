import { isSorted } from "../Sort/issorted.js";

export function merge(left, right, iterations = 0, sorted = false) {
  let arr = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    // push left or right's lowest
    if (left[i] < right[j]) {
      arr.push(left[i++]);
    } else {
      arr.push(right[j++]);
    }
    iterations++;
  }

  // Add remaining elements
  while (i < left.length) {
    arr.push(left[i++]);
    iterations++;
  }
  while (j < right.length) {
    arr.push(right[j++]);
    iterations++;
  }

  return { arr: arr, iterations: iterations, sorted: isSorted(arr) };
}
