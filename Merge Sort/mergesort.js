import { merge } from "./merge.js";
import { isSorted } from "../Sort/issorted.js";

export function mergeSort(arr, iterations = 0) {
  if (arr.length <= 1) {
    return {
      arr: arr,
      iterations: iterations,
      sorted: true,
    };
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), iterations++);
  const right = mergeSort(arr.slice(mid), iterations++);

  return merge(left, right, iterations, isSorted(arr));
}
