import { isSorted } from "../Sort/issorted.js";

export function merge(left, right) {

  let iterations = 0;
  let arr = [];
  let sorted = false;

  let result = {
    arr: arr,
    iterations: iterations,
    sorted: sorted,
  };
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
    iterations;
  }

  sorted = isSorted(arr);

  return result;
}
