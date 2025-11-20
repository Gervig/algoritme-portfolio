export function mergeSorted(arrA, arrB) {
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
