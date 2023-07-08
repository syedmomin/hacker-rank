function secondMaxValue(num) {
  let max = 0,
    secondMax = 0;
  //   for (let i = 0; i < num.length; i++) {
  //     if (max < num[i]) {
  //       max = num[i];
  //       console.log(max);
  //     }
  //   }
  let sortArray = dynamicArray.sort(function (a, b) {
    // console.log(a - b);
    return a - b;
  });
  //   console.log("->", sortArray);
}

// secondMaxValue(dynamicArray);
let dynamicArray = [1, 2, 14, 3, 9, 1, 6, 4, 1, 7, 4, 3, 4, 3, 10, 9, 6, 15];
let compare = [
  1, 12, -11, 1, -11, 6, -5, -2, -1, 0, 3, -8, -3, 1, -5, -2, -3, -1, 0, 4, -2,
  1, 0, -5, -3, -2, -1, 2, 0, 0, -3, -2, 0, -1, 1, 0, 6, 3, -4, 1, 5, 2, -1, 0,
  2, -3, 0, -1, 11, 6, 5, 1,
];
console.log(
  dynamicArray.sort(function () {
    return compare;
  })
);
