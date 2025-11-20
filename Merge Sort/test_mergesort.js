import { mergeSort } from "./mergesort.js";

const arrA = [2, 3, 4, 5, 7];
const arrB = [0, 1, 6, 8, 9];

let arrC = mergeSort(arrA, arrB);

console.log(`${arrC}`);
