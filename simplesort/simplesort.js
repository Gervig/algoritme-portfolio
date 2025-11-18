export function simpleSort(arr) {
  let values = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      values.push(arr[i]);
    }
  }
  return values;
}

export function simpleSortSwap(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j - 1] > arr[j]) {
      swap(j, j - 1);
      j--;
    }
  }

  function swap(a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }

  return arr;
}
