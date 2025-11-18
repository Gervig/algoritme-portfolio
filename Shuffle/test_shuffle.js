import { shuffle } from "./shuffle.js";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`original: ${arr}`);

let shuffled = shuffle(arr);

console.log(`shuffled: ${shuffled}`);
