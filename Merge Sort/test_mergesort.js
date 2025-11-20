import { mergeSortedArrays, mergeSort } from "./mergesort.js";
import { shuffle } from "../Shuffle/shuffle.js";
import { isSorted } from "../Sort/issorted.js";

let arrA = [2, 3, 4, 5, 7];
let arrB = [0, 1, 6, 8, 9];

let arrC = mergeSortedArrays(arrA, arrB);

console.log(`Merged sorted arrays: ${arrC}`);

arrA = shuffle(arrA);
arrB = shuffle(arrB);

console.log(
  `Shuffled arrays; \n A: ${arrA}, Sorted: ${isSorted(
    arrA
  )}\n B: ${arrB}, Sorted: ${isSorted(arrB)}`
);

let arrD = mergeSort(arrA, arrB);

console.log(`Merge sorted A and B: ${arrD}`);
