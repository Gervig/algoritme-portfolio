export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let random = arr[randomIndex];
    let current = arr[i];

    arr[randomIndex] = current;
    arr[i] = random;
  }

  return arr;
}
