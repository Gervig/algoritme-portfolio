import { merge } from "./merge.js";
import { isSorted } from "../Sort/issorted.js";

export function mergeSort(arr) {
  if (arr.length <= 1) {
    return {
      arr: arr,
      iterations: 0,
      sorted: true,
    };
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
