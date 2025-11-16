export function binarySearchRecursive(
  search,
  values,
  // default parameters, only set first time the function is called
  start = 0,
  end = values.length - 1,
  iterations = 0
) {
  // start by counting iterations up by 1
  iterations++;

  // early exit condition
  if (start > end) {
    // debug logging
    console.log(`Failed to find ${search} after ${iterations} iterations.`);
    return {
      found: false,
      index: -1,
      iterations,
    };
  }

  // find the middle index, rounded down
  let middleIndex = Math.floor((start + end) / 2);
  // then we can find the middle value
  let middleValue = values[middleIndex];

  // check if the middle value is the search target
  if (middleValue === search) {
    // successful
    // return object with properties
    return {
      found: true,
      index: middleIndex,
      iterations,
    };
  }
  // else if the search target is in the upper end of values
  else if (middleValue < search) {
    return binarySearchRecursive(
      search,
      values,
      middleIndex + 1, // new start
      end,
      iterations
    );
  }
  // else it's in the lower end of values
  else {
    return binarySearchRecursive(
      search,
      values,
      start,
      middleIndex - 1, // new end
      iterations
    );
  }
}
