import { insertionSort } from "./insertionsort.js";

let arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

console.log(`Given array ${arr}`);

let arrSorted = insertionSort(arr);

console.log(`After insertion sort: ${JSON.stringify(arrSorted)}`);
