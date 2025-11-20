import { mergeSortedArrays, mergeSort } from "./mergesort.js";
import { shuffle } from "../Shuffle/shuffle.js";
import { isSorted } from "../Sort/issorted.js";
import { merge } from "./merge.js";

// sorted arrays
let arrA = [2, 3, 4, 5, 7];
let arrB = [0, 1, 6, 8, 9];

let arrC = mergeSortedArrays(arrA, arrB);

console.log(`Merged sorted arrays: ${arrC}`);

// shuffles arrays again
arrA = shuffle(arrA);
arrB = shuffle(arrB);

// test if arrays are shuffled correctly
console.log(
  `Shuffled arrays; \n A: ${arrA}, Sorted: ${isSorted(
    arrA
  )}\n B: ${arrB}, Sorted: ${isSorted(arrB)}`
);

//
let arrD = merge(arrA, arrB).arr;

console.log(
  `Merged shuffled A and B too Array D: ${arrD}. Sorted: ${isSorted(arrD)}`
);

// combine array A and B
arrD = [...arrA, ...arrB];

console.log(`Combined A and B to D: ${arrD}`);

//TODO: make it work with objects
arrD = mergeSort(arrD);

console.log(`Merge sorted D: ${JSON.stringify(arrD)}`);
