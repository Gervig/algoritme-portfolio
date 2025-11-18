export function shuffle(arr) {
  // loops through the array from the end to start
  for (let i = arr.length - 1; i > 0; i--) {
    // finds a random index from the current index (i), which counts down
    // and 0, both inclusive. A number can shuffle with itself!
    let randomIndex = Math.floor(Math.random() * (i + 1));
    // saves the value at the random index
    let random = arr[randomIndex];
    // saves the value at the current index
    let current = arr[i];

    // sets the current value at random index
    arr[randomIndex] = current;
    // sets the random value at the current index
    arr[i] = random;
  }

  // helper function for swapping 2 values
  function swap(a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }

  return arr;
}
