import { merge } from "./merge.js";

export function mergeSortedArrays(arrA, arrB) {
  let arrC = [];
  let i = 0,
    j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      arrC.push(arrA[i++]);
    } else {
      arrC.push(arrB[j++]);
    }
  }

  while (i < arrA.length) arrC.push(arrA[i++]);
  while (j < arrB.length) arrC.push(arrB[j++]);

  return arrC;
}

export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
