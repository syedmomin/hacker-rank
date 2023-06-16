function scopeVariable(value) {
  let r = value;
  const PI = Math.PI;

  // value of area in PI
  console.log("value of area : ", PI * Math.pow(r, 2));

  // value of perimeter in PI
  console.log("value of perimeter : ", 2 * PI * r);
}

scopeVariable(3);
