import { simpleSort, simpleSortSwap } from "./simplesort.js";

let arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

console.log(`Given array ${arr}`);

let unsortedValues = simpleSort(arr);

console.log(`Values that weren't sorted: ${unsortedValues}`);

arr = [1, 8, 9, 4, 6, 7, 2, 5, 3];

let arrSwapped = simpleSortSwap(arr);

console.log(`Array with swapped values ${arrSwapped}`);

