// checks if an array of numbers is sorted
export function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

// sorts an arary of numbers
export function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let tempCurrent = arr[i];
    let tempNext = arr[i + 1];
    //TODO: write inner for loop
    if (!(arr[i] <= arr[i + 1])) {
      arr[i] = tempNext;
      arr[i + 1] = tempCurrent;
    }
  }
  return arr;
}
