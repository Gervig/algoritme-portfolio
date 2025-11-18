// assumes arrays are sorted
function merge(arrA, arrB) {
  let arrC = new Array(arrA.lenght + arrB.lenght);

  let a = 0;
  let b = 0;
  let c = 0;
  while (c < arrC.length) {
    aValue = arrA[a];
    bValue = arrB[b];
    cValue = arrC[c];

    if (aValue <= bValue) {
      arrC[c] = aValue;
      a++;
    } else {
      arrC[c] = bValue;
      b++;
    }

    c++;
  }

  return arrC;
}
