const testValues = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

export function binarySearch(x, arr) {
  let low = 0;
  let high = arr.length - 1;
  let iterations = 0;

  while (low <= high) {
    iterations++;
    let middleIndex = Math.floor((low + high) / 2);
    let middleValue = arr[middleIndex];

    if (middleValue === x) {
      return {
        found: true,
        index: middleIndex,
        iterations,
      };
    } else if (middleValue < x) {
      low = middleIndex + 1;
    } else {
      high = middleIndex - 1;
    }
  }

  return {
    found: false,
    index: -1,
    iterations,
  };
}

let result;

// result = binarySearch(34, testValues);
// console.log(`result for 34 in values: ${result}`);

let data = [];
for (let i = 1; i <= 100; i++) {
  data[i - 1] = i;
}

// console.log(data);

result = binarySearch(50, data);
console.log(
  `Test for 50: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(25, data);
console.log(
  `Test for 25: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(75, data);
console.log(
  `Test for 75: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(12, data);
console.log(
  `Test for 12: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(18, data);
console.log(
  `Test for 18: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(15, data);
console.log(
  `Test for 15: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(3, data);
console.log(
  `Test for 3: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(1, data);
console.log(
  `Test for 1: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);

result = binarySearch(2, data);
console.log(
  `Test for 2: Found ${result.found} at index ${result.index} in ${result.iterations} iterations`
);
