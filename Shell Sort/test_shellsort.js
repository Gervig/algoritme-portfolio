import { shellSort } from "./shellsort.js";

let arr = [5, 6, 8, 4, 2, 9, 7, 1, 0, 3];

console.log(`Original array ${arr}`);

let arrShellsort = shellSort(arr);

console.log(
  `Shell sorted array: ${arrShellsort.arr}, iterations: ${arrShellsort.iterations}, sorted: ${arrShellsort.sorted}`
);
