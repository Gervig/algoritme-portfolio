import { isSorted } from "./issorted.js";

let arr = [2, 1, 1, 3, 5, 4, 1];
let arrSorted = [1, 1, 1, 2, 3, 4, 5];

console.log(`unsorted ${arr}, isSorted? ${isSorted(arr)}`);

console.log(`sorted ${arrSorted}, isSorted? ${isSorted(arrSorted)}`);
