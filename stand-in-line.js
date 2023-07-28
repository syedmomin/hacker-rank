function nextInLine(arr, item) {
  // Add the number to the end of the array
  arr.push(item);

  // Remove the first element of the array
  const removedElement = arr.shift();

  // Return the element that was removed
  return removedElement;
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
