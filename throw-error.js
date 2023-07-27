function checkError(number) {
  if (number == 0) {
    throw new Error("Zero Error");
  } else if (number < 0) {
    throw new Error("Negative Error");
  } else {
    throw new Error("Not Error");
  }
}

try {
  //   console.log(checkError(2));
  console.log(checkError(-2));
  console.log(checkError(0));
} catch (e) {
  console.log(e.message);
}
