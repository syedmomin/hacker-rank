function dataType(funInteger, funDecimal, funString) {
  const integer = 1;
  console.log(typeof funInteger, " ->", integer + Number(funInteger));

  const decimal = 0.2;
  console.log(typeof funDecimal, " ->", decimal + Number(funDecimal));

  const string = "hacker rank";
  console.log(typeof funString, " ->", string.concat(funString));
}

dataType(12, 0.6, " Boom");
