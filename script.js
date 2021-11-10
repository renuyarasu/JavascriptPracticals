console.clear();
// Eagle Eye Problem in JavaScript 

const a = 0.1;
const b = 0.2;
const c = 0.3;
console.log(a + b === c);


/* The sum of 0.1 and 0.2 numbers is not exactly 0.3, but slightly above 0.3.

Due to how floating point numbers are encoded in binary, operations like addition of floating point numbers are subject to rounding errors.

Simply put, comparing floats directly is not precise.

Thus 0.1 + 0.2 === 0.3 is false.

Check 0.30000000000000004.com for more information. */