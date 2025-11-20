import { isSorted } from "../Sort/issorted.js";

export function merge(leftObj, rightObj) {
  const left = leftObj.arr;
  const right = rightObj.arr;

  let arr = [];
  let i = 0,
    j = 0;

  // accumulate iterations from children
  let iterations = leftObj.iterations + rightObj.iterations;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) arr.push(left[i++]);
    else arr.push(right[j++]);
    iterations++;
  }

  while (i < left.length) {
    arr.push(left[i++]);
    iterations++;
  }

  while (j < right.length) {
    arr.push(right[j++]);
    iterations++;
  }

  return {
    arr: arr,
    iterations: iterations,
    sorted: isSorted(arr),
  };
}
